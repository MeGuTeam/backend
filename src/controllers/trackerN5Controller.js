const supabase = require("../config/supabase");

const particleTrackingUserController = async (req, res) => {
    try {
        const { particle_id, status } = req.body;
        const userId = req.user.id;

        const { data, error } = await supabase
            .from("tracking")
            .select("particle_id, status, user_id")
            .eq("user_id", userId)
            .eq("particle_id", particle_id);

        if (error) {
            throw new Error("Gagal memeriksa partikel");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("tracking")
                .insert({
                    user_id: userId,
                    particle_id: particle_id,
                    status: true,
                });

            if (insertError) {
                throw new Error("Gagal menyimpan tracking partikel");
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: false })
                    .eq("user_id", userId)
                    .eq("particle_id", particle_id);

                if (updateError) {
                    throw new Error("Gagal memperbarui status partikel");
                }
            } else {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: true })
                    .eq("user_id", userId)
                    .eq("particle_id", particle_id);

                if (updateError) {
                    throw new Error("Gagal memperbarui status partikel");
                }
            }
        }

        return res.status(200).json({
            error: false,
            message: "Berhasil menyelesaikan tracking partikel",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const hiraganaTrackingUserController = async (req, res) => {
    try {
        const { hiragana_id, status } = req.body;
        const userId = req.user.id;

        const { data, error } = await supabase
            .from("tracking")
            .select("hiragana_id, status, user_id")
            .eq("user_id", userId)
            .eq("hiragana_id", hiragana_id);

        if (error) {
            throw new Error("Gagal memeriksa hiragana");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("tracking")
                .insert({
                    user_id: userId,
                    hiragana_id: hiragana_id,
                    status: true,
                });

            if (insertError) {
                throw new Error("Gagal menyimpan tracking hiragana");
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: false })
                    .eq("user_id", userId)
                    .eq("hiragana_id", hiragana_id);

                if (updateError) {
                    throw new Error("Gagal memperbarui status hiragana");
                }
            } else {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: true })
                    .eq("user_id", userId)
                    .eq("hiragana_id", hiragana_id);

                if (updateError) {
                    throw new Error("Gagal memperbarui status hiragana");
                }
            }
        }

        return res.status(200).json({
            error: false,
            message: "Berhasil menyelesaikan tracking hiragana",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const katakanaTrackingUserController = async (req, res) => {
    try {
        const { katakana_id, status } = req.body;
        const userId = req.user.id;

        const { data, error } = await supabase
            .from("tracking")
            .select("katakana_id, status, user_id")
            .eq("user_id", userId)
            .eq("katakana_id", katakana_id);

        if (error) {
            throw new Error("Gagal memeriksa katakana");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("tracking")
                .insert({
                    user_id: userId,
                    katakana_id: katakana_id,
                    status: true,
                });

            if (insertError) {
                throw new Error("Gagal menyimpan tracking katakana");
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: false })
                    .eq("user_id", userId)
                    .eq("katakana_id", katakana_id);

                if (updateError) {
                    throw new Error("Gagal memperbarui status katakana");
                }
            } else {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: true })
                    .eq("user_id", userId)
                    .eq("katakana_id", katakana_id);

                if (updateError) {
                    throw new Error("Gagal memperbarui status katakana");
                }
            }
        }

        return res.status(200).json({
            error: false,
            message: "Berhasil menyelesaikan tracking katakana",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const basicConversationTrackingUserController = async (req, res) => {
    try {
        const { basic_conversation_id, status } = req.body;
        const userId = req.user.id;

        const { data, error } = await supabase
            .from("tracking")
            .select("basic_conversation_id, status, user_id")
            .eq("user_id", userId)
            .eq("basic_conversation_id", basic_conversation_id);

        if (error) {
            throw new Error("Gagal memeriksa percakapan dasar");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("tracking")
                .insert({
                    user_id: userId,
                    basic_conversation_id: basic_conversation_id,
                    status: true,
                });

            if (insertError) {
                throw new Error("Gagal menyimpan tracking percakapan dasar");
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: false })
                    .eq("user_id", userId)
                    .eq("basic_conversation_id", basic_conversation_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status percakapan dasar"
                    );
                }
            } else {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: true })
                    .eq("user_id", userId)
                    .eq("basic_conversation_id", basic_conversation_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status percakapan dasar"
                    );
                }
            }
        }

        return res.status(200).json({
            error: false,
            message: "Berhasil menyelesaikan tracking percakapan dasar",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const kanjiN5TrackingUserController = async (req, res) => {
    try {
        const { kanji_id, status } = req.body;
        const userId = req.user.id;
        const { data, error } = await supabase
            .from("tracking")
            .select("kanji_id, status, user_id")
            .eq("user_id", userId)
            .eq("kanji_id", kanji_id);

        if (error) {
            throw new Error("Gagal memeriksa kanji N5");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("tracking")
                .insert({
                    user_id: userId,
                    kanji_id: kanji_id,
                    status: true,
                });

            if (insertError) {
                throw new Error("Gagal menyimpan tracking kanji N5");
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: false })
                    .eq("user_id", userId)
                    .eq("kanji_id", kanji_id);

                if (updateError) {
                    throw new Error("Gagal memperbarui status kanji N5");
                }
            } else {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: true })
                    .eq("user_id", userId)
                    .eq("kanji_id", kanji_id);

                if (updateError) {
                    throw new Error("Gagal memperbarui status kanji N5");
                }
            }
        }

        return res.status(200).json({
            error: false,
            message: "Berhasil menyelesaikan tracking kanji N5",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const adjectiveN5TrackingUserController = async (req, res) => {
    try {
        const { adjective_id, status } = req.body;
        const userId = req.user.id;

        const { data, error } = await supabase
            .from("tracking")
            .select("adjective_id, status, user_id")
            .eq("user_id", userId)
            .eq("adjective_id", adjective_id);

        if (error) {
            throw new Error("Gagal memeriksa kata sifat N5");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("tracking")
                .insert({
                    user_id: userId,
                    adjective_id: adjective_id,
                    status: true,
                });

            if (insertError) {
                throw new Error("Gagal menyimpan tracking kata sifat N5");
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: false })
                    .eq("user_id", userId)
                    .eq("adjective_id", adjective_id);

                if (updateError) {
                    throw new Error("Gagal memperbarui status kata sifat N5");
                }
            } else {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: true })
                    .eq("user_id", userId)
                    .eq("adjective_id", adjective_id);

                if (updateError) {
                    throw new Error("Gagal memperbarui status kata sifat N5");
                }
            }
        }

        return res.status(200).json({
            error: false,
            message: "Berhasil menyelesaikan tracking kata sifat N5",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const adverbN5TrackingUserController = async (req, res) => {
    try {
        const { other_word_id, status } = req.body;
        const userId = req.user.id;

        const { data, error } = await supabase
            .from("tracking")
            .select("other_word_id, status, user_id")
            .eq("user_id", userId)
            .eq("other_word_id", other_word_id);

        if (error) {
            throw new Error("Gagal memeriksa kata keterangan N5");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("tracking")
                .insert({
                    user_id: userId,
                    other_word_id: other_word_id,
                    status: true,
                });

            if (insertError) {
                throw new Error("Gagal menyimpan tracking kata keterangan N5");
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: false })
                    .eq("user_id", userId)
                    .eq("other_word_id", other_word_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata keterangan N5"
                    );
                }
            } else {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: true })
                    .eq("user_id", userId)
                    .eq("other_word_id", other_word_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata keterangan N5"
                    );
                }
            }
        }

        return res.status(200).json({
            error: false,
            message: "Berhasil menyelesaikan tracking kata keterangan N5",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const verbN5TrackingUserController = async (req, res) => {
    try {
        const { verb_id, status } = req.body;
        const userId = req.user.id;

        const { data, error } = await supabase
            .from("tracking")
            .select("verb_id, status, user_id")
            .eq("user_id", userId)
            .eq("verb_id", verb_id);

        if (error) {
            throw new Error("Gagal memeriksa kata kerja N5");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("tracking")
                .insert({
                    user_id: userId,
                    verb_id: verb_id,
                    status: true,
                });

            if (insertError) {
                throw new Error("Gagal menyimpan tracking kata kerja N5");
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: false })
                    .eq("user_id", userId)
                    .eq("verb_id", verb_id);

                if (updateError) {
                    throw new Error("Gagal memperbarui status kata kerja N5");
                }
            } else {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: true })
                    .eq("user_id", userId)
                    .eq("verb_id", verb_id);

                if (updateError) {
                    throw new Error("Gagal memperbarui status kata kerja N5");
                }
            }
        }

        return res.status(200).json({
            error: false,
            message: "Berhasil menyelesaikan tracking kata kerja N5",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounActivityN5TrackingUserController = async (req, res) => {
    try {
        const { noun_id, status } = req.body;
        const userId = req.user.id;

        const { data, error } = await supabase
            .from("tracking")
            .select("noun_id, status, user_id")
            .eq("user_id", userId)
            .eq("noun_id", noun_id);

        if (error) {
            throw new Error("Gagal memeriksa aktivitas kata benda N5");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("tracking")
                .insert({
                    user_id: userId,
                    noun_id: noun_id,
                    status: true,
                });

            if (insertError) {
                throw new Error(
                    "Gagal menyimpan tracking aktivitas kata benda N5"
                );
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: false })
                    .eq("user_id", userId)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status aktivitas kata benda N5"
                    );
                }
            } else {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: true })
                    .eq("user_id", userId)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status aktivitas kata benda N5"
                    );
                }
            }
        }

        return res.status(200).json({
            error: false,
            message: "Berhasil menyelesaikan tracking aktivitas kata benda N5",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounAnimalplantN5TrackingUserController = async (req, res) => {
    try {
        const { noun_id, status } = req.body;
        const userId = req.user.id;

        const { data, error } = await supabase
            .from("tracking")
            .select("noun_id, status, user_id")
            .eq("user_id", userId)
            .eq("noun_id", noun_id);

        if (error) {
            throw new Error("Gagal memeriksa kata benda hewan dan tumbuhan N5");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("tracking")
                .insert({
                    user_id: userId,
                    noun_id: noun_id,
                    status: true,
                });

            if (insertError) {
                throw new Error(
                    "Gagal menyimpan tracking kata benda hewan dan tumbuhan N5"
                );
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: false })
                    .eq("user_id", userId)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda hewan dan tumbuhan N5"
                    );
                }
            } else {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: true })
                    .eq("user_id", userId)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda hewan dan tumbuhan N5"
                    );
                }
            }
        }

        return res.status(200).json({
            error: false,
            message:
                "Berhasil menyelesaikan tracking kata benda hewan dan tumbuhan N5",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounAuxnumberN5TrackingUserController = async (req, res) => {
    try {
        const { noun_id, status } = req.body;
        const userId = req.user.id;

        const { data, error } = await supabase
            .from("tracking")
            .select("noun_id, status, user_id")
            .eq("user_id", userId)
            .eq("noun_id", noun_id);

        if (error) {
            throw new Error("Gagal memeriksa kata benda angka bantu N5");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("tracking")
                .insert({
                    user_id: userId,
                    noun_id: noun_id,
                    status: true,
                });

            if (insertError) {
                throw new Error(
                    "Gagal menyimpan tracking kata benda angka bantu N5"
                );
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: false })
                    .eq("user_id", userId)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda angka bantu N5"
                    );
                }
            } else {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: true })
                    .eq("user_id", userId)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda angka bantu N5"
                    );
                }
            }
        }

        return res.status(200).json({
            error: false,
            message:
                "Berhasil menyelesaikan tracking kata benda angka bantu N5",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounBodyN5TrackingUserController = async (req, res) => {
    try {
        const { noun_id, status } = req.body;
        const userId = req.user.id;

        const { data, error } = await supabase
            .from("tracking")
            .select("noun_id, status, user_id")
            .eq("user_id", userId)
            .eq("noun_id", noun_id);

        if (error) {
            throw new Error("Gagal memeriksa kata benda tubuh N5");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("tracking")
                .insert({
                    user_id: userId,
                    noun_id: noun_id,
                    status: true,
                });

            if (insertError) {
                throw new Error("Gagal menyimpan tracking kata benda tubuh N5");
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: false })
                    .eq("user_id", userId)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda tubuh N5"
                    );
                }
            } else {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: true })
                    .eq("user_id", userId)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda tubuh N5"
                    );
                }
            }
        }

        return res.status(200).json({
            error: false,
            message: "Berhasil menyelesaikan tracking kata benda tubuh N5",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounCityN5TrackingUserController = async (req, res) => {
    try {
        const { noun_id, status } = req.body;
        const userId = req.user.id;

        const { data, error } = await supabase
            .from("tracking")
            .select("noun_id, status, user_id")
            .eq("user_id", userId)
            .eq("noun_id", noun_id);

        if (error) {
            throw new Error("Gagal memeriksa kata benda kota N5");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("tracking")
                .insert({
                    user_id: userId,
                    noun_id: noun_id,
                    status: true,
                });

            if (insertError) {
                throw new Error("Gagal menyimpan tracking kata benda kota N5");
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: false })
                    .eq("user_id", userId)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda kota N5"
                    );
                }
            } else {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: true })
                    .eq("user_id", userId)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda kota N5"
                    );
                }
            }
        }

        return res.status(200).json({
            error: false,
            message: "Berhasil menyelesaikan tracking kata benda kota N5",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounColorN5TrackingUserController = async (req, res) => {
    try {
        const { noun_id, status } = req.body;
        const userId = req.user.id;

        const { data, error } = await supabase
            .from("tracking")
            .select("noun_id, status, user_id")
            .eq("user_id", userId)
            .eq("noun_id", noun_id);

        if (error) {
            throw new Error("Gagal memeriksa kata benda warna N5");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("tracking")
                .insert({
                    user_id: userId,
                    noun_id: noun_id,
                    status: true,
                });

            if (insertError) {
                throw new Error("Gagal menyimpan tracking kata benda warna N5");
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: false })
                    .eq("user_id", userId)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda warna N5"
                    );
                }
            } else {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: true })
                    .eq("user_id", userId)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda warna N5"
                    );
                }
            }
        }

        return res.status(200).json({
            error: false,
            message: "Berhasil menyelesaikan tracking kata benda warna N5",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounFoodDrinkN5TrackingUserController = async (req, res) => {
    try {
        const { noun_id, status } = req.body;
        const userId = req.user.id;

        const { data, error } = await supabase
            .from("tracking")
            .select("noun_id, status, user_id")
            .eq("user_id", userId)
            .eq("noun_id", noun_id);

        if (error) {
            throw new Error(
                "Gagal memeriksa kata benda makanan dan minuman N5"
            );
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("tracking")
                .insert({
                    user_id: userId,
                    noun_id: noun_id,
                    status: true,
                });

            if (insertError) {
                throw new Error(
                    "Gagal menyimpan tracking kata benda makanan dan minuman N5"
                );
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: false })
                    .eq("user_id", userId)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda makanan dan minuman N5"
                    );
                }
            } else {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: true })
                    .eq("user_id", userId)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda makanan dan minuman N5"
                    );
                }
            }
        }

        return res.status(200).json({
            error: false,
            message:
                "Berhasil menyelesaikan tracking kata benda makanan dan minuman N5",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounHomeAppliancesN5TrackingUserController = async (req, res) => {
    try {
        const { noun_id, status } = req.body;
        const userId = req.user.id;

        const { data, error } = await supabase
            .from("tracking")
            .select("noun_id, status, user_id")
            .eq("user_id", userId)
            .eq("noun_id", noun_id);

        if (error) {
            throw new Error(
                "Gagal memeriksa kata benda peralatan rumah tangga N5"
            );
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("tracking")
                .insert({
                    user_id: userId,
                    noun_id: noun_id,
                    status: true,
                });

            if (insertError) {
                throw new Error(
                    "Gagal menyimpan tracking kata benda peralatan rumah tangga N5"
                );
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: false })
                    .eq("user_id", userId)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda peralatan rumah tangga N5"
                    );
                }
            } else {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: true })
                    .eq("user_id", userId)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda peralatan rumah tangga N5"
                    );
                }
            }
        }

        return res.status(200).json({
            error: false,
            message:
                "Berhasil menyelesaikan tracking kata benda peralatan rumah tangga N5",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounKosoadoN5TrackingUserController = async (req, res) => {
    try {
        const { noun_id, status } = req.body;
        const userId = req.user.id;

        const { data, error } = await supabase
            .from("tracking")
            .select("noun_id, status, user_id")
            .eq("user_id", userId)
            .eq("noun_id", noun_id);

        if (error) {
            throw new Error("Gagal memeriksa kata benda kosoado N5");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("tracking")
                .insert({
                    user_id: userId,
                    noun_id: noun_id,
                    status: true,
                });

            if (insertError) {
                throw new Error(
                    "Gagal menyimpan tracking kata benda kosoado N5"
                );
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: false })
                    .eq("user_id", userId)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda kosoado N5"
                    );
                }
            } else {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: true })
                    .eq("user_id", userId)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda kosoado N5"
                    );
                }
            }
        }

        return res.status(200).json({
            error: false,
            message: "Berhasil menyelesaikan tracking kata benda kosoado N5",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounMediaN5TrackingUserController = async (req, res) => {
    try {
        const { noun_id, status } = req.body;
        const userId = req.user.id;

        const { data, error } = await supabase
            .from("tracking")
            .select("noun_id, status, user_id")
            .eq("user_id", userId)
            .eq("noun_id", noun_id);

        if (error) {
            throw new Error("Gagal memeriksa kata benda media N5");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("tracking")
                .insert({
                    user_id: userId,
                    noun_id: noun_id,
                    status: true,
                });

            if (insertError) {
                throw new Error("Gagal menyimpan tracking kata benda media N5");
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: false })
                    .eq("user_id", userId)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda media N5"
                    );
                }
            } else {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: true })
                    .eq("user_id", userId)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda media N5"
                    );
                }
            }
        }

        return res.status(200).json({
            error: false,
            message: "Berhasil menyelesaikan tracking kata benda media N5",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounNaturalN5TrackingUserController = async (req, res) => {
    try {
        const { noun_id, status } = req.body;
        const userId = req.user.id;

        const { data, error } = await supabase
            .from("tracking")
            .select("noun_id, status, user_id")
            .eq("user_id", userId)
            .eq("noun_id", noun_id);

        if (error) {
            throw new Error("Gagal memeriksa kata benda alam N5");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("tracking")
                .insert({
                    user_id: userId,
                    noun_id: noun_id,
                    status: true,
                });

            if (insertError) {
                throw new Error("Gagal menyimpan tracking kata benda alam N5");
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: false })
                    .eq("user_id", userId)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda alam N5"
                    );
                }
            } else {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: true })
                    .eq("user_id", userId)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda alam N5"
                    );
                }
            }
        }

        return res.status(200).json({
            error: false,
            message: "Berhasil menyelesaikan tracking kata benda alam N5",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounNumberN5TrackingUserController = async (req, res) => {
    try {
        const { noun_id, status } = req.body;
        const userId = req.user.id;

        const { data, error } = await supabase
            .from("tracking")
            .select("noun_id, status, user_id")
            .eq("user_id", userId)
            .eq("noun_id", noun_id);

        if (error) {
            throw new Error("Gagal memeriksa kata benda angka N5");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("tracking")
                .insert({
                    user_id: userId,
                    noun_id: noun_id,
                    status: true,
                });

            if (insertError) {
                throw new Error("Gagal menyimpan tracking kata benda angka N5");
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: false })
                    .eq("user_id", userId)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda angka N5"
                    );
                }
            } else {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: true })
                    .eq("user_id", userId)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda angka N5"
                    );
                }
            }
        }

        return res.status(200).json({
            error: false,
            message: "Berhasil menyelesaikan tracking kata benda angka N5",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounOutfitN5TrackingUserController = async (req, res) => {
    try {
        const { noun_id, status } = req.body;
        const userId = req.user.id;

        const { data, error } = await supabase
            .from("tracking")
            .select("noun_id, status, user_id")
            .eq("user_id", userId)
            .eq("noun_id", noun_id);

        if (error) {
            throw new Error("Gagal memeriksa kata benda pakaian N5");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("tracking")
                .insert({
                    user_id: userId,
                    noun_id: noun_id,
                    status: true,
                });

            if (insertError) {
                throw new Error(
                    "Gagal menyimpan tracking kata benda pakaian N5"
                );
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: false })
                    .eq("user_id", userId)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda pakaian N5"
                    );
                }
            } else {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: true })
                    .eq("user_id", userId)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda pakaian N5"
                    );
                }
            }
        }

        return res.status(200).json({
            error: false,
            message: "Berhasil menyelesaikan tracking kata benda pakaian N5",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounPeopleN5TrackingUserController = async (req, res) => {
    try {
        const { noun_id, status } = req.body;
        const userId = req.user.id;

        const { data, error } = await supabase
            .from("tracking")
            .select("noun_id, status, user_id")
            .eq("user_id", userId)
            .eq("noun_id", noun_id);

        if (error) {
            throw new Error("Gagal memeriksa kata benda orang N5");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("tracking")
                .insert({
                    user_id: userId,
                    noun_id: noun_id,
                    status: true,
                });

            if (insertError) {
                throw new Error("Gagal menyimpan tracking kata benda orang N5");
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: false })
                    .eq("user_id", userId)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda orang N5"
                    );
                }
            } else {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: true })
                    .eq("user_id", userId)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda orang N5"
                    );
                }
            }
        }

        return res.status(200).json({
            error: false,
            message: "Berhasil menyelesaikan tracking kata benda orang N5",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounPositionN5TrackingUserController = async (req, res) => {
    try {
        const { noun_id, status } = req.body;
        const userId = req.user.id;

        const { data, error } = await supabase
            .from("tracking")
            .select("noun_id, status, user_id")
            .eq("user_id", userId)
            .eq("noun_id", noun_id);

        if (error) {
            throw new Error("Gagal memeriksa kata benda posisi N5");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("tracking")
                .insert({
                    user_id: userId,
                    noun_id: noun_id,
                    status: true,
                });

            if (insertError) {
                throw new Error(
                    "Gagal menyimpan tracking kata benda posisi N5"
                );
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: false })
                    .eq("user_id", userId)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda posisi N5"
                    );
                }
            } else {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: true })
                    .eq("user_id", userId)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda posisi N5"
                    );
                }
            }
        }

        return res.status(200).json({
            error: false,
            message: "Berhasil menyelesaikan tracking kata benda posisi N5",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounRegionN5TrackingUserController = async (req, res) => {
    try {
        const { noun_id, status } = req.body;
        const userId = req.user.id;

        const { data, error } = await supabase
            .from("tracking")
            .select("noun_id, status, user_id")
            .eq("user_id", userId)
            .eq("noun_id", noun_id);

        if (error) {
            throw new Error("Gagal memeriksa kata benda wilayah N5");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("tracking")
                .insert({
                    user_id: userId,
                    noun_id: noun_id,
                    status: true,
                });

            if (insertError) {
                throw new Error(
                    "Gagal menyimpan tracking kata benda wilayah N5"
                );
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: false })
                    .eq("user_id", userId)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda wilayah N5"
                    );
                }
            } else {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: true })
                    .eq("user_id", userId)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda wilayah N5"
                    );
                }
            }
        }

        return res.status(200).json({
            error: false,
            message: "Berhasil menyelesaikan tracking kata benda wilayah N5",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounSchoolN5TrackingUserController = async (req, res) => {
    try {
        const { noun_id, status } = req.body;
        const userId = req.user.id;

        const { data, error } = await supabase
            .from("tracking")
            .select("noun_id, status, user_id")
            .eq("user_id", userId)
            .eq("noun_id", noun_id);

        if (error) {
            throw new Error("Gagal memeriksa kata benda sekolah N5");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("tracking")
                .insert({
                    user_id: userId,
                    noun_id: noun_id,
                    status: true,
                });

            if (insertError) {
                throw new Error(
                    "Gagal menyimpan tracking kata benda sekolah N5"
                );
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: false })
                    .eq("user_id", userId)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda sekolah N5"
                    );
                }
            } else {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: true })
                    .eq("user_id", userId)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda sekolah N5"
                    );
                }
            }
        }

        return res.status(200).json({
            error: false,
            message: "Berhasil menyelesaikan tracking kata benda sekolah N5",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounTimeN5TrackingUserController = async (req, res) => {
    try {
        const { noun_id, status } = req.body;
        const userId = req.user.id;

        const { data, error } = await supabase
            .from("tracking")
            .select("noun_id, status, user_id")
            .eq("user_id", userId)
            .eq("noun_id", noun_id);

        if (error) {
            throw new Error("Gagal memeriksa kata benda waktu N5");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("tracking")
                .insert({
                    user_id: userId,
                    noun_id: noun_id,
                    status: true,
                });

            if (insertError) {
                throw new Error("Gagal menyimpan tracking kata benda waktu N5");
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: false })
                    .eq("user_id", userId)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda waktu N5"
                    );
                }
            } else {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: true })
                    .eq("user_id", userId)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda waktu N5"
                    );
                }
            }
        }

        return res.status(200).json({
            error: false,
            message: "Berhasil menyelesaikan tracking kata benda waktu N5",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounTrafficN5TrackingUserController = async (req, res) => {
    try {
        const { noun_id, status } = req.body;
        const userId = req.user.id;

        const { data, error } = await supabase
            .from("tracking")
            .select("noun_id, status, user_id")
            .eq("user_id", userId)
            .eq("noun_id", noun_id);

        if (error) {
            throw new Error("Gagal memeriksa kata benda lalu lintas N5");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("tracking")
                .insert({
                    user_id: userId,
                    noun_id: noun_id,
                    status: true,
                });

            if (insertError) {
                throw new Error(
                    "Gagal menyimpan tracking kata benda lalu lintas N5"
                );
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: false })
                    .eq("user_id", userId)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda lalu lintas N5"
                    );
                }
            } else {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: true })
                    .eq("user_id", userId)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda lalu lintas N5"
                    );
                }
            }
        }

        return res.status(200).json({
            error: false,
            message:
                "Berhasil menyelesaikan tracking kata benda lalu lintas N5",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounWorkN5TrackingUserController = async (req, res) => {
    try {
        const { noun_id, status } = req.body;
        const userId = req.user.id;

        const { data, error } = await supabase
            .from("tracking")
            .select("noun_id, status, user_id")
            .eq("user_id", userId)
            .eq("noun_id", noun_id);

        if (error) {
            throw new Error("Gagal memeriksa kata benda pekerjaan N5");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("tracking")
                .insert({
                    user_id: userId,
                    noun_id: noun_id,
                    status: true,
                });

            if (insertError) {
                throw new Error(
                    "Gagal menyimpan tracking kata benda pekerjaan N5"
                );
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: false })
                    .eq("user_id", userId)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda pekerjaan N5"
                    );
                }
            } else {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: true })
                    .eq("user_id", userId)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda pekerjaan N5"
                    );
                }
            }
        }

        return res.status(200).json({
            error: false,
            message: "Berhasil menyelesaikan tracking kata benda pekerjaan N5",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const questionWordN5TrackingUserController = async (req, res) => {
    try {
        const { other_word_id, status } = req.body;
        const userId = req.user.id;

        const { data, error } = await supabase
            .from("tracking")
            .select("other_word_id, status, user_id")
            .eq("user_id", userId)
            .eq("other_word_id", other_word_id);

        if (error) {
            throw new Error("Gagal memeriksa kata tanya N5");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("tracking")
                .insert({
                    user_id: userId,
                    other_word_id: other_word_id,
                    status: true,
                });

            if (insertError) {
                throw new Error("Gagal menyimpan tracking kata tanya N5");
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: false })
                    .eq("user_id", userId)
                    .eq("other_word_id", other_word_id);

                if (updateError) {
                    throw new Error("Gagal memperbarui status kata tanya N5");
                }
            } else {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: true })
                    .eq("user_id", userId)
                    .eq("other_word_id", other_word_id);

                if (updateError) {
                    throw new Error("Gagal memperbarui status kata tanya N5");
                }
            }
        }

        return res.status(200).json({
            error: false,
            message: "Berhasil menyelesaikan tracking kata tanya N5",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const conjunctionN5TrackingUserController = async (req, res) => {
    try {
        const { conjunction_id, status } = req.body;
        const userId = req.user.id;

        const { data, error } = await supabase
            .from("tracking")
            .select("other_word_id, status, user_id")
            .eq("user_id", userId)
            .eq("other_word_id", conjunction_id);

        if (error) {
            throw new Error("Gagal memeriksa kata hubung N5");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("tracking")
                .insert({
                    user_id: userId,
                    other_word_id: conjunction_id,
                    status: true,
                });

            if (insertError) {
                throw new Error("Gagal menyimpan tracking kata hubung N5");
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: false })
                    .eq("user_id", userId)
                    .eq("other_word_id", conjunction_id);

                if (updateError) {
                    throw new Error("Gagal memperbarui status kata hubung N5");
                }
            } else {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: true })
                    .eq("user_id", userId)
                    .eq("other_word_id", conjunction_id);

                if (updateError) {
                    throw new Error("Gagal memperbarui status kata hubung N5");
                }
            }
        }

        return res.status(200).json({
            error: false,
            message: "Berhasil menyelesaikan tracking kata hubung N5",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

module.exports = {
    particleTrackingUserController,
    hiraganaTrackingUserController,
    katakanaTrackingUserController,
    basicConversationTrackingUserController,
    kanjiN5TrackingUserController,
    adjectiveN5TrackingUserController,
    adverbN5TrackingUserController,
    verbN5TrackingUserController,
    nounActivityN5TrackingUserController,
    nounAnimalplantN5TrackingUserController,
    nounAuxnumberN5TrackingUserController,
    nounBodyN5TrackingUserController,
    nounCityN5TrackingUserController,
    nounColorN5TrackingUserController,
    nounFoodDrinkN5TrackingUserController,
    nounHomeAppliancesN5TrackingUserController,
    nounKosoadoN5TrackingUserController,
    nounMediaN5TrackingUserController,
    nounNaturalN5TrackingUserController,
    nounNumberN5TrackingUserController,
    nounOutfitN5TrackingUserController,
    nounPeopleN5TrackingUserController,
    nounPositionN5TrackingUserController,
    nounRegionN5TrackingUserController,
    nounSchoolN5TrackingUserController,
    nounTimeN5TrackingUserController,
    nounTrafficN5TrackingUserController,
    nounWorkN5TrackingUserController,
    questionWordN5TrackingUserController,
    kanjiN5TrackingUserController,
    conjunctionN5TrackingUserController,
};
