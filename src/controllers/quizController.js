const supabase = require("../config/supabase");

const getQuizCategoriesController = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from("quiz_category")
            .select("*");

        if (error) {
            throw new Error("Gagal mengambil kategori kuis");
        }
        if (data.length === 0 || !data) {
            return res.status(404).json({
                error: true,
                message: "Tidak ada kategori kuis yang ditemukan",
                data: null,
            });
        }

        return res.status(200).json({
            error: false,
            message: "Kategori kuis berhasil diambil",
            data: data,
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message:
                err.message ||
                "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const getQuizController = async (req, res) => {
    try {
        const { quiz_category_id, level_id } = req.params;

        const { data, error } = await supabase
            .from("quizzes")
            .select(
                "quizzes_id, title, quiz_category (category), level (level_name)"
            )
            .eq("quiz_category_id", quiz_category_id)
            .eq("level_id", level_id);
        if (error) {
            throw new Error("Gagal mengambil kuis");
        }
        if (data.length === 0) {
            return res.status(404).json({
                error: true,
                message:
                    "Tidak ada kuis yang ditemukan untuk kategori dan level ini",
                data: null,
            });
        }

        const result = data.map((quiz) => ({
            quizzes_id: quiz.quizzes_id,
            title: quiz.title,
            category: quiz.quiz_category.category,
            level: quiz.level.level_name,
        }));
        return res.status(200).json({
            error: false,
            message: "Kuis berhasil diambil",
            data: result,
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message:
                err.message ||
                "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const generateQuizController = async (req, res) => {
    try {
        const { quizzes_id } = req.params;

        const { data, error } = await supabase
            .from("quizzes")
            .select(
                "quizzes_id, title, quiz_category (category), level (level_name)"
            )
            .eq("quizzes_id", quizzes_id)
            .single();
        if (error) {
            throw new Error("Gagal mengambil data kuis");
        }
        if (!data) {
            return res.status(404).json({
                error: true,
                message: "Kuis tidak ditemukan",
                data: null,
            });
        }

        const { data: questions, error: questionsError } = await supabase
            .from("questions")
            .select("question_id, question_text, utils, quizzes_id")
            .eq("quizzes_id", quizzes_id);
        if (questionsError) {
            throw new Error("Gagal mengambil pertanyaan");
        }
        if (questions.length === 0) {
            return res.status(404).json({
                error: true,
                message: "Tidak ada pertanyaan yang ditemukan untuk kuis ini",
                data: null,
            });
        }

        const { data: options, error: optionsError } = await supabase
            .from("options")
            .select("options_id, option_text, is_correct, question_id")
            .in(
                "question_id",
                questions.map((q) => q.question_id)
            );
        if (optionsError) {
            throw new Error("Gagal mengambil pilihan jawaban");
        }

        const result = {
            quizzes_id: data.quizzes_id,
            title: data.title,
            category: data.quiz_category.category,
            level: data.level.level_name,
            questions: questions.map((question) => ({
                question_id: question.question_id,
                question_text: question.question_text,
                utils: question.utils,
                options: options
                    .filter(
                        (option) => option.question_id === question.question_id
                    )
                    .map((option) => ({
                        option_id: option.options_id,
                        option_text: option.option_text,
                    })),
            })),
        };
        return res.status(200).json({
            error: false,
            message: "Kuis berhasil dibuat",
            data: result,
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message:
                err.message ||
                "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const putAnswerQuizController = async (req, res) => {
    try {
        const { quizzes_id, question_id } = req.params;
        const { id } = req.user;
        const { option_id } = req.body;

        const { data: option, error: optionError } = await supabase
            .from("options")
            .select("options_id, is_correct")
            .eq("options_id", option_id)
            .eq("question_id", question_id)
            .single();
        if (optionError || !option) {
            return res.status(400).json({
                error: true,
                message: "Pilihan jawaban tidak valid",
                data: null,
            });
        }

        const { data: existingAnswer, error: existingAnswerError } =
            await supabase
                .from("user_answers")
                .select("id")
                .eq("user_id", id)
                .eq("quizzes_id", quizzes_id)
                .eq("question_id", question_id)
                .maybeSingle();
        if (existingAnswerError) {
            return res.status(500).json({
                error: true,
                message: "Gagal memeriksa jawaban yang sudah ada",
                data: null,
            });
        }

        if (existingAnswer) {
            const { error: updateError } = await supabase
                .from("user_answers")
                .update({
                    option_id: option_id,
                    is_correct: option.is_correct,
                })
                .match({
                    user_id: id,
                    quizzes_id: quizzes_id,
                    question_id: question_id,
                });
            if (updateError) {
                return res.status(500).json({
                    error: true,
                    message: "Gagal memperbarui jawaban",
                    data: null,
                });
            }
        } else {
            const { error: insertError } = await supabase
                .from("user_answers")
                .insert({
                    user_id: id,
                    quizzes_id: quizzes_id,
                    question_id: question_id,
                    option_id: option_id,
                    is_correct: option.is_correct,
                });
            if (insertError) {
                return res.status(500).json({
                    error: true,
                    message: "Gagal menyimpan jawaban",
                    data: null,
                });
            }
        }
        return res.status(200).json({
            error: false,
            message: "Jawaban berhasil dikirim",
            data: null,
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message:
                err.message ||
                "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const submitQuizController = async (req, res) => {
    try {
        const { quizzes_id } = req.params;
        const { id } = req.user;

        const { data: questions, error: questionsError } = await supabase
            .from("questions")
            .select("question_id")
            .eq("quizzes_id", quizzes_id);
        if (questionsError) {
            return res.status(500).json({
                error: true,
                message: "Gagal mengambil pertanyaan",
                data: null,
            });
        }
        if (!questions || questions.length === 0) {
            return res.status(404).json({
                error: true,
                message: "Tidak ada pertanyaan yang ditemukan untuk kuis ini",
                data: null,
            });
        }

        const { data: answers, error: answersError } = await supabase
            .from("user_answers")
            .select("is_correct")
            .eq("user_id", id)
            .eq("quizzes_id", quizzes_id);
        if (answersError) {
            throw new Error("Gagal mengambil jawaban");
        }
        if (!answers || answers.length === 0) {
            return res.status(404).json({
                error: true,
                message: "Tidak ada jawaban yang ditemukan untuk kuis ini",
                data: null,
            });
        }

        const correctAnswersCount = answers.filter(
            (answer) => answer.is_correct
        ).length;

        const score = (correctAnswersCount / questions.length) * 100;
        const { data: existingResult, error: existingResultError } =
            await supabase
                .from("quizzes_results")
                .select("quizzes_result_id")
                .eq("user_id", id)
                .eq("quizzes_id", quizzes_id)
                .maybeSingle();
        if (existingResultError) {
            return res.status(500).json({
                error: true,
                message: "Gagal memeriksa hasil kuis yang sudah ada",
                data: null,
            });
        }

        if (existingResult) {
            const { error: updateError } = await supabase
                .from("quizzes_results")
                .update({ score })
                .eq("quizzes_result_id", existingResult.quizzes_result_id);
            if (updateError) {
                return res.status(500).json({
                    error: true,
                    message: "Gagal memperbarui hasil kuis",
                    data: null,
                });
            }
        } else {
            const { error: insertError } = await supabase
                .from("quizzes_results")
                .insert({
                    user_id: id,
                    quizzes_id: quizzes_id,
                    score: score,
                });
            if (insertError) {
                return res.status(500).json({
                    error: true,
                    message: "Gagal menyimpan hasil kuis",
                    data: null,
                });
            }
        }
        return res.status(200).json({
            error: false,
            message: "Kuis berhasil diselesaikan",
            data: {
                score,
            },
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message:
                err.message ||
                "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

module.exports = {
    getQuizCategoriesController,
    getQuizController,
    generateQuizController,
    putAnswerQuizController,
    submitQuizController,
};
