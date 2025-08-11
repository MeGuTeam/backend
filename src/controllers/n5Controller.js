const supabase = require("../config/supabase");

const kanjiN5Controller = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = 10;

        const { data: pagination, error: errorPagination } = await supabase
            .from("kanjis")
            .select("*")
            .eq("level_id", "5");

        if (errorPagination) {
            throw new Error("Gagal memeriksa kanji");
        }

        const { data: datas, error } = await supabase
            .from("kanjis")
            .select("*")
            .eq("level_id", "5")
            .range((page - 1) * pageSize, page * pageSize - 1)
            .order("kanji_id", { ascending: true });

        if (error) {
            throw new Error("Gagal memeriksa partikel");
        }

        const { data: trackers, error: errorTracker } = await supabase
            .from("kanjis_tracker")
            .select("kanji_id, status")
            .eq("user_id", req.user.id);

        if (errorTracker) {
            throw new Error("Gagal memeriksa progress user");
        }

        if (datas.length === 0 || !datas) {
            return res.status(404).json({
                error: true,
                message: "Tidak ada data partikel yang ditemukan",
                data: null,
            });
        }

        const resultData = datas.map((data) => {
            const trackerItem = trackers
                ? trackers.find((tracker) => tracker.kanji_id === data.kanji_id)
                : null;
            return {
                id: data.kanji_id,
                romaji: data.romaji,
                character: data.character,
                onyomi: data.onyomi,
                kunyomi: data.kunyomi,
                meaning: data.meaning,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        const userCompletedKanjis = trackers ? trackers.length : 0;
        const totalKanjis = pagination.length;
        const totalPage = Math.ceil(pagination.length / pageSize);
        const havePrevious = page > 1 ? true : false;
        const haveNext = page < totalPage ? true : false;

        return res.status(200).json({
            error: false,
            message: "Data kanji berhasil diambil",
            userCompletedKanjis,
            totalKanjis,
            pagination: {
                totalPage,
                pageNow: page,
                havePrevious,
                haveNext,
            },
            data: resultData,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const adjectiveN5Controller = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = 10;

        const { data: pagination, error: errorPagination } = await supabase
            .from("adjectives")
            .select("*")
            .eq("level_id", "5");

        if (errorPagination) {
            throw new Error("Gagal memeriksa data kata sifat");
        }

        const { data: datas, error } = await supabase
            .from("adjectives")
            .select("*")
            .eq("level_id", "5")
            .range((page - 1) * pageSize, page * pageSize - 1)
            .order("adjective_id", { ascending: true });

        if (error) {
            throw new Error("Gagal memeriksa data kata sifat");
        }

        const { data: trackers, error: errorTracker } = await supabase
            .from("adjectives_tracker")
            .select("adjective_id, status")
            .eq("user_id", req.user.id);

        if (errorTracker) {
            throw new Error("Gagal memeriksa progress user");
        }

        if (datas.length === 0 || !datas) {
            return res.status(404).json({
                error: true,
                message: "Tidak ada data kata sifat yang ditemukan",
                data: null,
            });
        }

        const resultData = datas.map((data) => {
            const trackerItem = trackers
                ? trackers.find(
                      (tracker) => tracker.adjective_id === data.adjective_id
                  )
                : null;
            return {
                id: data.adjective_id,
                romaji: data.romaji,
                reading: data.reading,
                word: data.word,
                meaning: data.meaning,
                example_sentence: data.example_sentence,
                type: data.type,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        const userCompletedAdjectives = trackers ? trackers.length : 0;
        const totalAdjectives = pagination.length;
        const totalPage = Math.ceil(pagination.length / pageSize);
        const havePrevious = page > 1 ? true : false;
        const haveNext = page < totalPage ? true : false;

        return res.status(200).json({
            error: false,
            message: "Data kata sifat berhasil diambil",
            userCompletedAdjectives,
            totalAdjectives,
            pagination: {
                totalPage,
                pageNow: page,
                havePrevious,
                haveNext,
            },
            data: resultData,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const adverbN5Controller = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = 10;

        const { data: pagination, error: errorPagination } = await supabase
            .from("other_words")
            .select("*")
            .eq("type", "adverb")
            .eq("level_id", "5");

        if (errorPagination) {
            throw new Error("Gagal memeriksa data kata keterangan");
        }

        const { data: datas, error } = await supabase
            .from("other_words")
            .select("*")
            .eq("type", "adverb")
            .eq("level_id", "5")
            .range((page - 1) * pageSize, page * pageSize - 1)
            .order("other_word_id", { ascending: true });

        if (error) {
            throw new Error("Gagal memeriksa data kata keterangan");
        }

        const { data: trackers, error: errorTracker } = await supabase
            .from("other_words_tracker")
            .select("other_word_id, status")
            .eq("user_id", req.user.id);

        if (errorTracker) {
            throw new Error("Gagal memeriksa progress user");
        }

        if (datas.length === 0 || !datas) {
            return res.status(404).json({
                error: true,
                message: "Tidak ada data kata keterangan yang ditemukan",
                data: null,
            });
        }

        const resultData = datas.map((data) => {
            const trackerItem = trackers
                ? trackers.find(
                      (tracker) => tracker.other_word_id === data.other_word_id
                  )
                : null;
            return {
                id: data.other_word_id,
                romaji: data.romaji,
                reading: data.reading,
                word: data.word,
                meaning: data.meaning,
                example_sentence: data.example_sentence,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        const userCompletedAdverbs = trackers ? trackers.length : 0;
        const totalAdverbs = pagination.length;
        const totalPage = Math.ceil(pagination.length / pageSize);
        const havePrevious = page > 1 ? true : false;
        const haveNext = page < totalPage ? true : false;

        return res.status(200).json({
            error: false,
            message: "Data kata keterangan berhasil diambil",
            userCompletedAdverbs,
            totalAdverbs,
            pagination: {
                totalPage,
                pageNow: page,
                havePrevious,
                haveNext,
            },
            data: resultData,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const verbN5Controller = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = 10;

        const { data: pagination, error: errorPagination } = await supabase
            .from("verbs")
            .select("*")
            .eq("level_id", "5");

        if (errorPagination) {
            throw new Error("Gagal memeriksa data kata kerja");
        }

        const { data: datas, error } = await supabase
            .from("verbs")
            .select("*")
            .eq("level_id", "5")
            .range((page - 1) * pageSize, page * pageSize - 1)
            .order("verb_id", { ascending: true });

        if (error) {
            throw new Error("Gagal memeriksa data kata kerja");
        }

        const { data: trackers, error: errorTracker } = await supabase
            .from("verbs_tracker")
            .select("verb_id, status")
            .eq("user_id", req.user.id);

        if (errorTracker) {
            throw new Error("Gagal memeriksa progress user");
        }

        if (datas.length === 0 || !datas) {
            return res.status(404).json({
                error: true,
                message: "Tidak ada data kata kerja yang ditemukan",
                data: null,
            });
        }

        const resultData = datas.map((data) => {
            const trackerItem = trackers
                ? trackers.find((tracker) => tracker.verb_id === data.verb_id)
                : null;
            return {
                id: data.verb_id,
                romaji: data.romaji,
                reading: data.reading,
                word: data.word,
                meaning: data.meaning,
                example_sentence: data.example_sentence,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        const userCompletedVerbs = trackers ? trackers.length : 0;
        const totalVerbs = pagination.length;
        const totalPage = Math.ceil(pagination.length / pageSize);
        const havePrevious = page > 1 ? true : false;
        const haveNext = page < totalPage ? true : false;

        return res.status(200).json({
            error: false,
            message: "Data kata kerja berhasil diambil",
            userCompletedVerbs,
            totalVerbs,
            pagination: {
                totalPage,
                pageNow: page,
                havePrevious,
                haveNext,
            },
            data: resultData,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounActivityN5Controller = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = 10;

        const { data: pagination, error: errorPagination } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "activity")
            .eq("level_id", "5");

        if (errorPagination) {
            throw new Error("Gagal memeriksa data kata benda aktivitas");
        }

        const { data: datas, error } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "activity")
            .eq("level_id", "5")
            .range((page - 1) * pageSize, page * pageSize - 1)
            .order("noun_id", { ascending: true });

        if (error) {
            throw new Error("Gagal memeriksa data kata benda aktivitas");
        }

        const { data: trackers, error: errorTracker } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status")
            .eq("user_id", req.user.id);

        if (errorTracker) {
            throw new Error("Gagal memeriksa progress user");
        }

        if (datas.length === 0 || !datas) {
            return res.status(404).json({
                error: true,
                message: "Tidak ada data kata benda aktivitas yang ditemukan",
                data: null,
            });
        }

        const resultData = datas.map((data) => {
            const trackerItem = trackers
                ? trackers.find((tracker) => tracker.noun_id === data.noun_id)
                : null;
            return {
                id: data.noun_id,
                romaji: data.romaji,
                reading: data.reading,
                word: data.word,
                meaning: data.meaning,
                example_sentence: data.example_sentence,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        const userCompletedNouns = trackers ? trackers.length : 0;
        const totalNouns = pagination.length;
        const totalPage = Math.ceil(pagination.length / pageSize);
        const havePrevious = page > 1 ? true : false;
        const haveNext = page < totalPage ? true : false;

        return res.status(200).json({
            error: false,
            message: "Data kata benda aktivitas berhasil diambil",
            userCompletedNouns,
            totalNouns,
            pagination: {
                totalPage,
                pageNow: page,
                havePrevious,
                haveNext,
            },
            data: resultData,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounAnimalplantN5Controller = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = 10;

        const { data: pagination, error: errorPagination } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "animalplant")
            .eq("level_id", "5");

        if (errorPagination) {
            throw new Error(
                "Gagal memeriksa data kata benda hewan dan tumbuhan"
            );
        }

        const { data: datas, error } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "animalplant")
            .eq("level_id", "5")
            .range((page - 1) * pageSize, page * pageSize - 1)
            .order("noun_id", { ascending: true });

        if (error) {
            throw new Error(
                "Gagal memeriksa data kata benda hewan dan tumbuhan"
            );
        }

        const { data: trackers, error: errorTracker } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status")
            .eq("user_id", req.user.id);

        if (errorTracker) {
            throw new Error("Gagal memeriksa progress user");
        }

        if (datas.length === 0 || !datas) {
            return res.status(404).json({
                error: true,
                message:
                    "Tidak ada data kata benda hewan dan tumbuhan yang ditemukan",
                data: null,
            });
        }

        const resultData = datas.map((data) => {
            const trackerItem = trackers
                ? trackers.find((tracker) => tracker.noun_id === data.noun_id)
                : null;
            return {
                id: data.noun_id,
                romaji: data.romaji,
                reading: data.reading,
                word: data.word,
                meaning: data.meaning,
                example_sentence: data.example_sentence,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        const userCompletedNouns = trackers ? trackers.length : 0;
        const totalNouns = pagination.length;
        const totalPage = Math.ceil(pagination.length / pageSize);
        const havePrevious = page > 1 ? true : false;
        const haveNext = page < totalPage ? true : false;

        return res.status(200).json({
            error: false,
            message: "Data kata benda hewan dan tumbuhan berhasil diambil",
            userCompletedNouns,
            totalNouns,
            pagination: {
                totalPage,
                pageNow: page,
                havePrevious,
                haveNext,
            },
            data: resultData,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounAuxnumberN5Controller = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = 10;

        const { data: pagination, error: errorPagination } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "auxnumber")
            .eq("level_id", "5");

        if (errorPagination) {
            throw new Error("Gagal memeriksa data kata benda angka");
        }

        const { data: datas, error } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "auxnumber")
            .eq("level_id", "5")
            .range((page - 1) * pageSize, page * pageSize - 1)
            .order("noun_id", { ascending: true });

        if (error) {
            throw new Error("Gagal memeriksa data kata benda angka");
        }

        const { data: trackers, error: errorTracker } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status")
            .eq("user_id", req.user.id);

        if (errorTracker) {
            throw new Error("Gagal memeriksa progress user");
        }

        if (datas.length === 0 || !datas) {
            return res.status(404).json({
                error: true,
                message: "Tidak ada data kata benda angka yang ditemukan",
                data: null,
            });
        }

        const resultData = datas.map((data) => {
            const trackerItem = trackers
                ? trackers.find((tracker) => tracker.noun_id === data.noun_id)
                : null;
            return {
                id: data.noun_id,
                romaji: data.romaji,
                reading: data.reading,
                word: data.word,
                meaning: data.meaning,
                example_sentence: data.example_sentence,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        const userCompletedNouns = trackers ? trackers.length : 0;
        const totalNouns = pagination.length;
        const totalPage = Math.ceil(pagination.length / pageSize);
        const havePrevious = page > 1 ? true : false;
        const haveNext = page < totalPage ? true : false;

        return res.status(200).json({
            error: false,
            message: "Data kata benda angka berhasil diambil",
            userCompletedNouns,
            totalNouns,
            pagination: {
                totalPage,
                pageNow: page,
                havePrevious,
                haveNext,
            },
            data: resultData,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounBodyN5Controller = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = 10;

        const { data: pagination, error: errorPagination } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "body")
            .eq("level_id", "5");

        if (errorPagination) {
            throw new Error("Gagal memeriksa data kata benda tubuh");
        }

        const { data: datas, error } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "body")
            .eq("level_id", "5")
            .range((page - 1) * pageSize, page * pageSize - 1)
            .order("noun_id", { ascending: true });

        if (error) {
            throw new Error("Gagal memeriksa data kata benda tubuh");
        }

        const { data: trackers, error: errorTracker } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status")
            .eq("user_id", req.user.id);

        if (errorTracker) {
            throw new Error("Gagal memeriksa progress user");
        }

        if (datas.length === 0 || !datas) {
            return res.status(404).json({
                error: true,
                message: "Tidak ada data kata benda tubuh yang ditemukan",
                data: null,
            });
        }

        const resultData = datas.map((data) => {
            const trackerItem = trackers
                ? trackers.find((tracker) => tracker.noun_id === data.noun_id)
                : null;
            return {
                id: data.noun_id,
                romaji: data.romaji,
                reading: data.reading,
                word: data.word,
                meaning: data.meaning,
                example_sentence: data.example_sentence,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        const userCompletedNouns = trackers ? trackers.length : 0;
        const totalNouns = pagination.length;
        const totalPage = Math.ceil(pagination.length / pageSize);
        const havePrevious = page > 1 ? true : false;
        const haveNext = page < totalPage ? true : false;

        return res.status(200).json({
            error: false,
            message: "Data kata benda tubuh berhasil diambil",
            userCompletedNouns,
            totalNouns,
            pagination: {
                totalPage,
                pageNow: page,
                havePrevious,
                haveNext,
            },
            data: resultData,
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounCityN5Controller = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = 10;

        const { data: pagination, error: errorPagination } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "city")
            .eq("level_id", "5");

        if (errorPagination) {
            throw new Error("Gagal memeriksa data kata benda kota");
        }

        const { data: datas, error } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "city")
            .eq("level_id", "5")
            .range((page - 1) * pageSize, page * pageSize - 1)
            .order("noun_id", { ascending: true });

        if (error) {
            throw new Error("Gagal memeriksa data kata benda kota");
        }

        const { data: trackers, error: errorTracker } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status")
            .eq("user_id", req.user.id);

        if (errorTracker) {
            throw new Error("Gagal memeriksa progress user");
        }

        if (datas.length === 0 || !datas) {
            return res.status(404).json({
                error: true,
                message: "Tidak ada data kata benda kota yang ditemukan",
                data: null,
            });
        }

        const resultData = datas.map((data) => {
            const trackerItem = trackers
                ? trackers.find((tracker) => tracker.noun_id === data.noun_id)
                : null;
            return {
                id: data.noun_id,
                romaji: data.romaji,
                reading: data.reading,
                word: data.word,
                meaning: data.meaning,
                example_sentence: data.example_sentence,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        const userCompletedNouns = trackers ? trackers.length : 0;
        const totalNouns = pagination.length;
        const totalPage = Math.ceil(pagination.length / pageSize);
        const havePrevious = page > 1 ? true : false;
        const haveNext = page < totalPage ? true : false;

        return res.status(200).json({
            error: false,
            message: "Data kata benda kota berhasil diambil",
            userCompletedNouns,
            totalNouns,
            pagination: {
                totalPage,
                pageNow: page,
                havePrevious,
                haveNext,
            },
            data: resultData,
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounColorN5Controller = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = 10;

        const { data: pagination, error: errorPagination } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "color")
            .eq("level_id", "5");

        if (errorPagination) {
            throw new Error("Gagal memeriksa data kata benda warna");
        }

        const { data: datas, error } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "color")
            .eq("level_id", "5")
            .range((page - 1) * pageSize, page * pageSize - 1)
            .order("noun_id", { ascending: true });

        if (error) {
            throw new Error("Gagal memeriksa data kata benda warna");
        }

        const { data: trackers, error: errorTracker } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status")
            .eq("user_id", req.user.id);

        if (errorTracker) {
            throw new Error("Gagal memeriksa progress user");
        }

        if (datas.length === 0 || !datas) {
            return res.status(404).json({
                error: true,
                message: "Tidak ada data kata benda warna yang ditemukan",
                data: null,
            });
        }

        const resultData = datas.map((data) => {
            const trackerItem = trackers
                ? trackers.find((tracker) => tracker.noun_id === data.noun_id)
                : null;
            return {
                id: data.noun_id,
                romaji: data.romaji,
                reading: data.reading,
                word: data.word,
                meaning: data.meaning,
                example_sentence: data.example_sentence,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        const userCompletedNouns = trackers ? trackers.length : 0;
        const totalNouns = pagination.length;
        const totalPage = Math.ceil(pagination.length / pageSize);
        const havePrevious = page > 1 ? true : false;
        const haveNext = page < totalPage ? true : false;

        return res.status(200).json({
            error: false,
            message: "Data kata benda warna berhasil diambil",
            userCompletedNouns,
            totalNouns,
            pagination: {
                totalPage,
                pageNow: page,
                havePrevious,
                haveNext,
            },
            data: resultData,
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounFoodDrinkN5Controller = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = 10;

        const { data: pagination, error: errorPagination } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "fooddrink")
            .eq("level_id", "5");

        if (errorPagination) {
            throw new Error(
                "Gagal memeriksa data kata benda makanan dan minuman"
            );
        }

        const { data: datas, error } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "fooddrink")
            .eq("level_id", "5")
            .range((page - 1) * pageSize, page * pageSize - 1)
            .order("noun_id", { ascending: true });

        if (error) {
            throw new Error(
                "Gagal memeriksa data kata benda makanan dan minuman"
            );
        }

        const { data: trackers, error: errorTracker } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status")
            .eq("user_id", req.user.id);

        if (errorTracker) {
            throw new Error("Gagal memeriksa progress user");
        }

        if (datas.length === 0 || !datas) {
            return res.status(404).json({
                error: true,
                message:
                    "Tidak ada data kata benda makanan dan minuman yang ditemukan",
                data: null,
            });
        }

        const resultData = datas.map((data) => {
            const trackerItem = trackers
                ? trackers.find((tracker) => tracker.noun_id === data.noun_id)
                : null;
            return {
                id: data.noun_id,
                romaji: data.romaji,
                reading: data.reading,
                word: data.word,
                meaning: data.meaning,
                example_sentence: data.example_sentence,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        const userCompletedNouns = trackers ? trackers.length : 0;
        const totalNouns = pagination.length;
        const totalPage = Math.ceil(pagination.length / pageSize);
        const havePrevious = page > 1 ? true : false;
        const haveNext = page < totalPage ? true : false;

        return res.status(200).json({
            error: false,
            message: "Data kata benda makanan dan minuman berhasil diambil",
            userCompletedNouns,
            totalNouns,
            pagination: {
                totalPage,
                pageNow: page,
                havePrevious,
                haveNext,
            },
            data: resultData,
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounHomeAppliancesN5Controller = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = 10;

        const { data: pagination, error: errorPagination } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "homeappliances")
            .eq("level_id", "5");

        if (errorPagination) {
            throw new Error(
                "Gagal memeriksa data kata benda peralatan rumah tangga"
            );
        }

        const { data: datas, error } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "homeappliances")
            .eq("level_id", "5")
            .range((page - 1) * pageSize, page * pageSize - 1)
            .order("noun_id", { ascending: true });

        if (error) {
            throw new Error(
                "Gagal memeriksa data kata benda peralatan rumah tangga"
            );
        }

        const { data: trackers, error: errorTracker } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status")
            .eq("user_id", req.user.id);

        if (errorTracker) {
            throw new Error("Gagal memeriksa progress user");
        }

        if (datas.length === 0 || !datas) {
            return res.status(404).json({
                error: true,
                message:
                    "Tidak ada data kata benda peralatan rumah tangga yang ditemukan",
                data: null,
            });
        }

        const resultData = datas.map((data) => {
            const trackerItem = trackers
                ? trackers.find((tracker) => tracker.noun_id === data.noun_id)
                : null;
            return {
                id: data.noun_id,
                romaji: data.romaji,
                reading: data.reading,
                word: data.word,
                meaning: data.meaning,
                example_sentence: data.example_sentence,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        const userCompletedNouns = trackers ? trackers.length : 0;
        const totalNouns = pagination.length;
        const totalPage = Math.ceil(pagination.length / pageSize);
        const havePrevious = page > 1 ? true : false;
        const haveNext = page < totalPage ? true : false;

        return res.status(200).json({
            error: false,
            message: "Data kata benda peralatan rumah tangga berhasil diambil",
            userCompletedNouns,
            totalNouns,
            pagination: {
                totalPage,
                pageNow: page,
                havePrevious,
                haveNext,
            },
            data: resultData,
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounKosoadoN5Controller = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = 10;

        const { data: pagination, error: errorPagination } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "kosoado")
            .eq("level_id", "5");

        if (errorPagination) {
            throw new Error("Gagal memeriksa data kata benda kosoado");
        }

        const { data: datas, error } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "kosoado")
            .eq("level_id", "5")
            .range((page - 1) * pageSize, page * pageSize - 1)
            .order("noun_id", { ascending: true });

        if (error) {
            throw new Error("Gagal memeriksa data kata benda kosoado");
        }

        const { data: trackers, error: errorTracker } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status")
            .eq("user_id", req.user.id);

        if (errorTracker) {
            throw new Error("Gagal memeriksa progress user");
        }

        if (datas.length === 0 || !datas) {
            return res.status(404).json({
                error: true,
                message: "Tidak ada data kata benda kosoado yang ditemukan",
                data: null,
            });
        }

        const resultData = datas.map((data) => {
            const trackerItem = trackers
                ? trackers.find((tracker) => tracker.noun_id === data.noun_id)
                : null;
            return {
                id: data.noun_id,
                romaji: data.romaji,
                reading: data.reading,
                word: data.word,
                meaning: data.meaning,
                example_sentence: data.example_sentence,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        const userCompletedNouns = trackers ? trackers.length : 0;
        const totalNouns = pagination.length;
        const totalPage = Math.ceil(pagination.length / pageSize);
        const havePrevious = page > 1 ? true : false;
        const haveNext = page < totalPage ? true : false;

        return res.status(200).json({
            error: false,
            message: "Data kata benda kosoado berhasil diambil",
            userCompletedNouns,
            totalNouns,
            pagination: {
                totalPage,
                pageNow: page,
                havePrevious,
                haveNext,
            },
            data: resultData,
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounMediaN5Controller = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = 10;

        const { data: pagination, error: errorPagination } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "media")
            .eq("level_id", "5");

        if (errorPagination) {
            throw new Error("Gagal memeriksa data kata benda media");
        }

        const { data: datas, error } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "media")
            .eq("level_id", "5")
            .range((page - 1) * pageSize, page * pageSize - 1)
            .order("noun_id", { ascending: true });

        if (error) {
            throw new Error("Gagal memeriksa data kata benda media");
        }

        const { data: trackers, error: errorTracker } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status")
            .eq("user_id", req.user.id);

        if (errorTracker) {
            throw new Error("Gagal memeriksa progress user");
        }

        if (datas.length === 0 || !datas) {
            return res.status(404).json({
                error: true,
                message: "Tidak ada data kata benda media yang ditemukan",
                data: null,
            });
        }

        const resultData = datas.map((data) => {
            const trackerItem = trackers
                ? trackers.find((tracker) => tracker.noun_id === data.noun_id)
                : null;
            return {
                id: data.noun_id,
                romaji: data.romaji,
                reading: data.reading,
                word: data.word,
                meaning: data.meaning,
                example_sentence: data.example_sentence,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        const userCompletedNouns = trackers ? trackers.length : 0;
        const totalNouns = pagination.length;
        const totalPage = Math.ceil(pagination.length / pageSize);
        const havePrevious = page > 1 ? true : false;
        const haveNext = page < totalPage ? true : false;

        return res.status(200).json({
            error: false,
            message: "Data kata benda media berhasil diambil",
            userCompletedNouns,
            totalNouns,
            pagination: {
                totalPage,
                pageNow: page,
                havePrevious,
                haveNext,
            },
            data: resultData,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounNaturalN5Controller = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = 10;

        const { data: pagination, error: errorPagination } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "natural")
            .eq("level_id", "5");

        if (errorPagination) {
            throw new Error("Gagal memeriksa data kata benda alam");
        }

        const { data: datas, error } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "natural")
            .eq("level_id", "5")
            .range((page - 1) * pageSize, page * pageSize - 1)
            .order("noun_id", { ascending: true });

        if (error) {
            throw new Error("Gagal memeriksa data kata benda alam");
        }

        const { data: trackers, error: errorTracker } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status")
            .eq("user_id", req.user.id);

        if (errorTracker) {
            throw new Error("Gagal memeriksa progress user");
        }

        if (datas.length === 0 || !datas) {
            return res.status(404).json({
                error: true,
                message: "Tidak ada data kata benda alam yang ditemukan",
                data: null,
            });
        }

        const resultData = datas.map((data) => {
            const trackerItem = trackers
                ? trackers.find((tracker) => tracker.noun_id === data.noun_id)
                : null;
            return {
                id: data.noun_id,
                romaji: data.romaji,
                reading: data.reading,
                word: data.word,
                meaning: data.meaning,
                example_sentence: data.example_sentence,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        const userCompletedNouns = trackers ? trackers.length : 0;
        const totalNouns = pagination.length;
        const totalPage = Math.ceil(pagination.length / pageSize);
        const havePrevious = page > 1 ? true : false;
        const haveNext = page < totalPage ? true : false;

        return res.status(200).json({
            error: false,
            message: "Data kata benda alam berhasil diambil",
            userCompletedNouns,
            totalNouns,
            pagination: {
                totalPage,
                pageNow: page,
                havePrevious,
                haveNext,
            },
            data: resultData,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounNumberN5Controller = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = 10;

        const { data: pagination, error: errorPagination } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "number")
            .eq("level_id", "5");

        if (errorPagination) {
            throw new Error("Gagal memeriksa data kata benda angka");
        }

        const { data: datas, error } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "number")
            .eq("level_id", "5")
            .range((page - 1) * pageSize, page * pageSize - 1)
            .order("noun_id", { ascending: true });

        if (error) {
            throw new Error("Gagal memeriksa data kata benda angka");
        }

        const { data: trackers, error: errorTracker } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status")
            .eq("user_id", req.user.id);

        if (errorTracker) {
            throw new Error("Gagal memeriksa progress user");
        }

        if (datas.length === 0 || !datas) {
            return res.status(404).json({
                error: true,
                message: "Tidak ada data kata benda angka yang ditemukan",
                data: null,
            });
        }

        const resultData = datas.map((data) => {
            const trackerItem = trackers
                ? trackers.find((tracker) => tracker.noun_id === data.noun_id)
                : null;
            return {
                id: data.noun_id,
                romaji: data.romaji,
                reading: data.reading,
                word: data.word,
                meaning: data.meaning,
                example_sentence: data.example_sentence,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        const userCompletedNouns = trackers ? trackers.length : 0;
        const totalNouns = pagination.length;
        const totalPage = Math.ceil(pagination.length / pageSize);
        const havePrevious = page > 1 ? true : false;
        const haveNext = page < totalPage ? true : false;

        return res.status(200).json({
            error: false,
            message: "Data kata benda angka berhasil diambil",
            userCompletedNouns,
            totalNouns,
            pagination: {
                totalPage,
                pageNow: page,
                havePrevious,
                haveNext,
            },
            data: resultData,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounOutfitN5Controller = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = 10;

        const { data: pagination, error: errorPagination } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "outfit")
            .eq("level_id", "5");

        if (errorPagination) {
            throw new Error("Gagal memeriksa data kata benda pakaian");
        }

        const { data: datas, error } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "outfit")
            .eq("level_id", "5")
            .range((page - 1) * pageSize, page * pageSize - 1)
            .order("noun_id", { ascending: true });

        if (error) {
            throw new Error("Gagal memeriksa data kata benda pakaian");
        }

        const { data: trackers, error: errorTracker } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status")
            .eq("user_id", req.user.id);

        if (errorTracker) {
            throw new Error("Gagal memeriksa progress user");
        }

        if (datas.length === 0 || !datas) {
            return res.status(404).json({
                error: true,
                message: "Tidak ada data kata benda pakaian yang ditemukan",
                data: null,
            });
        }

        const resultData = datas.map((data) => {
            const trackerItem = trackers
                ? trackers.find((tracker) => tracker.noun_id === data.noun_id)
                : null;
            return {
                id: data.noun_id,
                romaji: data.romaji,
                reading: data.reading,
                word: data.word,
                meaning: data.meaning,
                example_sentence: data.example_sentence,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        const userCompletedNouns = trackers ? trackers.length : 0;
        const totalNouns = pagination.length;
        const totalPage = Math.ceil(pagination.length / pageSize);
        const havePrevious = page > 1 ? true : false;
        const haveNext = page < totalPage ? true : false;

        return res.status(200).json({
            error: false,
            message: "Data kata benda pakaian berhasil diambil",
            userCompletedNouns,
            totalNouns,
            pagination: {
                totalPage,
                pageNow: page,
                havePrevious,
                haveNext,
            },
            data: resultData,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounPeopleN5Controller = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = 10;

        const { data: pagination, error: errorPagination } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "people")
            .eq("level_id", "5");

        if (errorPagination) {
            throw new Error("Gagal memeriksa data kata benda orang");
        }

        const { data: datas, error } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "people")
            .eq("level_id", "5")
            .range((page - 1) * pageSize, page * pageSize - 1)
            .order("noun_id", { ascending: true });

        if (error) {
            throw new Error("Gagal memeriksa data kata benda orang");
        }

        const { data: trackers, error: errorTracker } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status")
            .eq("user_id", req.user.id);

        if (errorTracker) {
            throw new Error("Gagal memeriksa progress user");
        }

        if (datas.length === 0 || !datas) {
            return res.status(404).json({
                error: true,
                message: "Tidak ada data kata benda orang yang ditemukan",
                data: null,
            });
        }

        const resultData = datas.map((data) => {
            const trackerItem = trackers
                ? trackers.find((tracker) => tracker.noun_id === data.noun_id)
                : null;
            return {
                id: data.noun_id,
                romaji: data.romaji,
                reading: data.reading,
                word: data.word,
                meaning: data.meaning,
                example_sentence: data.example_sentence,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        const userCompletedNouns = trackers ? trackers.length : 0;
        const totalNouns = pagination.length;
        const totalPage = Math.ceil(pagination.length / pageSize);
        const havePrevious = page > 1 ? true : false;
        const haveNext = page < totalPage ? true : false;

        return res.status(200).json({
            error: false,
            message: "Data kata benda orang berhasil diambil",
            userCompletedNouns,
            totalNouns,
            pagination: {
                totalPage,
                pageNow: page,
                havePrevious,
                haveNext,
            },
            data: resultData,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounPositionN5Controller = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = 10;

        const { data: pagination, error: errorPagination } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "position")
            .eq("level_id", "5");

        if (errorPagination) {
            throw new Error("Gagal memeriksa data kata benda posisi");
        }

        const { data: datas, error } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "position")
            .eq("level_id", "5")
            .range((page - 1) * pageSize, page * pageSize - 1)
            .order("noun_id", { ascending: true });

        if (error) {
            throw new Error("Gagal memeriksa data kata benda posisi");
        }

        const { data: trackers, error: errorTracker } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status")
            .eq("user_id", req.user.id);

        if (errorTracker) {
            throw new Error("Gagal memeriksa progress user");
        }

        if (datas.length === 0 || !datas) {
            return res.status(404).json({
                error: true,
                message: "Tidak ada data kata benda posisi yang ditemukan",
                data: null,
            });
        }

        const resultData = datas.map((data) => {
            const trackerItem = trackers
                ? trackers.find((tracker) => tracker.noun_id === data.noun_id)
                : null;
            return {
                id: data.noun_id,
                romaji: data.romaji,
                reading: data.reading,
                word: data.word,
                meaning: data.meaning,
                example_sentence: data.example_sentence,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        const userCompletedNouns = trackers ? trackers.length : 0;
        const totalNouns = pagination.length;
        const totalPage = Math.ceil(pagination.length / pageSize);
        const havePrevious = page > 1 ? true : false;
        const haveNext = page < totalPage ? true : false;

        return res.status(200).json({
            error: false,
            message: "Data kata benda posisi berhasil diambil",
            userCompletedNouns,
            totalNouns,
            pagination: {
                totalPage,
                pageNow: page,
                havePrevious,
                haveNext,
            },
            data: resultData,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounRegionN5Controller = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = 10;

        const { data: pagination, error: errorPagination } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "region")
            .eq("level_id", "5");

        if (errorPagination) {
            throw new Error("Gagal memeriksa data kata benda wilayah");
        }

        const { data: datas, error } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "region")
            .eq("level_id", "5")
            .range((page - 1) * pageSize, page * pageSize - 1)
            .order("noun_id", { ascending: true });

        if (error) {
            throw new Error("Gagal memeriksa data kata benda wilayah");
        }

        const { data: trackers, error: errorTracker } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status")
            .eq("user_id", req.user.id);

        if (errorTracker) {
            throw new Error("Gagal memeriksa progress user");
        }

        if (datas.length === 0 || !datas) {
            return res.status(404).json({
                error: true,
                message: "Tidak ada data kata benda wilayah yang ditemukan",
                data: null,
            });
        }

        const resultData = datas.map((data) => {
            const trackerItem = trackers
                ? trackers.find((tracker) => tracker.noun_id === data.noun_id)
                : null;
            return {
                id: data.noun_id,
                romaji: data.romaji,
                reading: data.reading,
                word: data.word,
                meaning: data.meaning,
                example_sentence: data.example_sentence,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        const userCompletedNouns = trackers ? trackers.length : 0;
        const totalNouns = pagination.length;
        const totalPage = Math.ceil(pagination.length / pageSize);
        const havePrevious = page > 1 ? true : false;
        const haveNext = page < totalPage ? true : false;

        return res.status(200).json({
            error: false,
            message: "Data kata benda wilayah berhasil diambil",
            userCompletedNouns,
            totalNouns,
            pagination: {
                totalPage,
                pageNow: page,
                havePrevious,
                haveNext,
            },
            data: resultData,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounSchoolN5Controller = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = 10;

        const { data: pagination, error: errorPagination } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "school")
            .eq("level_id", "5");

        if (errorPagination) {
            throw new Error("Gagal memeriksa data kata benda sekolah");
        }

        const { data: datas, error } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "school")
            .eq("level_id", "5")
            .range((page - 1) * pageSize, page * pageSize - 1)
            .order("noun_id", { ascending: true });

        if (error) {
            throw new Error("Gagal memeriksa data kata benda sekolah");
        }

        const { data: trackers, error: errorTracker } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status")
            .eq("user_id", req.user.id);

        if (errorTracker) {
            throw new Error("Gagal memeriksa progress user");
        }

        if (datas.length === 0 || !datas) {
            return res.status(404).json({
                error: true,
                message: "Tidak ada data kata benda sekolah yang ditemukan",
                data: null,
            });
        }

        const resultData = datas.map((data) => {
            const trackerItem = trackers
                ? trackers.find((tracker) => tracker.noun_id === data.noun_id)
                : null;
            return {
                id: data.noun_id,
                romaji: data.romaji,
                reading: data.reading,
                word: data.word,
                meaning: data.meaning,
                example_sentence: data.example_sentence,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        const userCompletedNouns = trackers ? trackers.length : 0;
        const totalNouns = pagination.length;
        const totalPage = Math.ceil(pagination.length / pageSize);
        const havePrevious = page > 1 ? true : false;
        const haveNext = page < totalPage ? true : false;

        return res.status(200).json({
            error: false,
            message: "Data kata benda sekolah berhasil diambil",
            userCompletedNouns,
            totalNouns,
            pagination: {
                totalPage,
                pageNow: page,
                havePrevious,
                haveNext,
            },
            data: resultData,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounTimeN5Controller = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = 10;

        const { data: pagination, error: errorPagination } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "time")
            .eq("level_id", "5");

        if (errorPagination) {
            throw new Error("Gagal memeriksa data kata benda waktu");
        }

        const { data: datas, error } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "time")
            .eq("level_id", "5")
            .range((page - 1) * pageSize, page * pageSize - 1)
            .order("noun_id", { ascending: true });

        if (error) {
            throw new Error("Gagal memeriksa data kata benda waktu");
        }

        const { data: trackers, error: errorTracker } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status")
            .eq("user_id", req.user.id);

        if (errorTracker) {
            throw new Error("Gagal memeriksa progress user");
        }

        if (datas.length === 0 || !datas) {
            return res.status(404).json({
                error: true,
                message: "Tidak ada data kata benda waktu yang ditemukan",
                data: null,
            });
        }

        const resultData = datas.map((data) => {
            const trackerItem = trackers
                ? trackers.find((tracker) => tracker.noun_id === data.noun_id)
                : null;
            return {
                id: data.noun_id,
                romaji: data.romaji,
                reading: data.reading,
                word: data.word,
                meaning: data.meaning,
                example_sentence: data.example_sentence,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        const userCompletedNouns = trackers ? trackers.length : 0;
        const totalNouns = pagination.length;
        const totalPage = Math.ceil(pagination.length / pageSize);
        const havePrevious = page > 1 ? true : false;
        const haveNext = page < totalPage ? true : false;

        return res.status(200).json({
            error: false,
            message: "Data kata benda waktu berhasil diambil",
            userCompletedNouns,
            totalNouns,
            pagination: {
                totalPage,
                pageNow: page,
                havePrevious,
                haveNext,
            },
            data: resultData,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounTrafficN5Controller = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = 10;

        const { data: pagination, error: errorPagination } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "traffic")
            .eq("level_id", "5");

        if (errorPagination) {
            throw new Error("Gagal memeriksa data kata benda lalu lintas");
        }

        const { data: datas, error } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "traffic")
            .eq("level_id", "5")
            .range((page - 1) * pageSize, page * pageSize - 1)
            .order("noun_id", { ascending: true });

        if (error) {
            throw new Error("Gagal memeriksa data kata benda lalu lintas");
        }

        const { data: trackers, error: errorTracker } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status")
            .eq("user_id", req.user.id);

        if (errorTracker) {
            throw new Error("Gagal memeriksa progress user");
        }

        if (datas.length === 0 || !datas) {
            return res.status(404).json({
                error: true,
                message: "Tidak ada data kata benda lalu lintas yang ditemukan",
                data: null,
            });
        }

        const resultData = datas.map((data) => {
            const trackerItem = trackers
                ? trackers.find((tracker) => tracker.noun_id === data.noun_id)
                : null;
            return {
                id: data.noun_id,
                romaji: data.romaji,
                reading: data.reading,
                word: data.word,
                meaning: data.meaning,
                example_sentence: data.example_sentence,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        const userCompletedNouns = trackers ? trackers.length : 0;
        const totalNouns = pagination.length;
        const totalPage = Math.ceil(pagination.length / pageSize);
        const havePrevious = page > 1 ? true : false;
        const haveNext = page < totalPage ? true : false;

        return res.status(200).json({
            error: false,
            message: "Data kata benda lalu lintas berhasil diambil",
            userCompletedNouns,
            totalNouns,
            pagination: {
                totalPage,
                pageNow: page,
                havePrevious,
                haveNext,
            },
            data: resultData,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounWorkN5Controller = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = 10;

        const { data: pagination, error: errorPagination } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "work")
            .eq("level_id", "5");

        if (errorPagination) {
            throw new Error("Gagal memeriksa data kata benda pekerjaan");
        }

        const { data: datas, error } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "work")
            .eq("level_id", "5")
            .range((page - 1) * pageSize, page * pageSize - 1)
            .order("noun_id", { ascending: true });

        if (error) {
            throw new Error("Gagal memeriksa data kata benda pekerjaan");
        }

        const { data: trackers, error: errorTracker } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status")
            .eq("user_id", req.user.id);

        if (errorTracker) {
            throw new Error("Gagal memeriksa progress user");
        }

        if (datas.length === 0 || !datas) {
            return res.status(404).json({
                error: true,
                message: "Tidak ada data kata benda pekerjaan yang ditemukan",
                data: null,
            });
        }

        const resultData = datas.map((data) => {
            const trackerItem = trackers
                ? trackers.find((tracker) => tracker.noun_id === data.noun_id)
                : null;
            return {
                id: data.noun_id,
                romaji: data.romaji,
                reading: data.reading,
                word: data.word,
                meaning: data.meaning,
                example_sentence: data.example_sentence,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        const userCompletedNouns = trackers ? trackers.length : 0;
        const totalNouns = pagination.length;
        const totalPage = Math.ceil(pagination.length / pageSize);
        const havePrevious = page > 1 ? true : false;
        const haveNext = page < totalPage ? true : false;

        return res.status(200).json({
            error: false,
            message: "Data kata benda pekerjaan berhasil diambil",
            userCompletedNouns,
            totalNouns,
            pagination: {
                totalPage,
                pageNow: page,
                havePrevious,
                haveNext,
            },
            data: resultData,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const questionWordController = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = 10;

        const { data: pagination, error: errorPagination } = await supabase
            .from("other_words")
            .select("*")
            .eq("type", "question_word")
            .eq("level_id", "5");

        if (errorPagination) {
            throw new Error("Gagal memeriksa data kata tanya");
        }

        const { data: datas, error } = await supabase
            .from("other_words")
            .select("*")
            .eq("type", "question_word")
            .eq("level_id", "5")
            .range((page - 1) * pageSize, page * pageSize - 1)
            .order("other_word_id", { ascending: true });

        if (error) {
            throw new Error("Gagal memeriksa data kata tanya");
        }

        const { data: trackers, error: errorTracker } = await supabase
            .from("other_words_tracker")
            .select("other_word_id, status")
            .eq("user_id", req.user.id);

        if (errorTracker) {
            throw new Error("Gagal memeriksa progress user");
        }

        if (datas.length === 0 || !datas) {
            return res.status(404).json({
                error: true,
                message: "Tidak ada data kata tanya yang ditemukan",
                data: null,
            });
        }

        const resultData = datas.map((data) => {
            const trackerItem = trackers
                ? trackers.find(
                      (tracker) => tracker.other_word_id === data.other_word_id
                  )
                : null;
            return {
                id: data.other_word_id,
                romaji: data.romaji,
                reading: data.reading,
                word: data.word,
                meaning: data.meaning,
                example_sentence: data.example_sentence,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        const userCompletedQuestionWord = trackers ? trackers.length : 0;
        const totalQuestionWord = pagination.length;
        const totalPage = Math.ceil(pagination.length / pageSize);
        const havePrevious = page > 1 ? true : false;
        const haveNext = page < totalPage ? true : false;

        return res.status(200).json({
            error: false,
            message: "Data kata tanya berhasil diambil",
            userCompletedQuestionWord,
            totalQuestionWord,
            pagination: {
                totalPage,
                pageNow: page,
                havePrevious,
                haveNext,
            },
            data: resultData,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const conjunctionN5Controller = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = 10;

        const { data: pagination, error: errorPagination } = await supabase
            .from("other_words")
            .select("*")
            .eq("type", "conjunction")
            .eq("level_id", "5");

        if (errorPagination) {
            throw new Error("Gagal memeriksa data kata hubung");
        }

        const { data: datas, error } = await supabase
            .from("other_words")
            .select("*")
            .eq("type", "conjunction")
            .eq("level_id", "5")
            .range((page - 1) * pageSize, page * pageSize - 1)
            .order("other_word_id", { ascending: true });

        if (error) {
            throw new Error("Gagal memeriksa data kata hubung");
        }

        const { data: trackers, error: errorTracker } = await supabase
            .from("other_words_tracker")
            .select("other_word_id, status")
            .eq("user_id", req.user.id);

        if (errorTracker) {
            throw new Error("Gagal memeriksa progress user");
        }

        if (datas.length === 0 || !datas) {
            return res.status(404).json({
                error: true,
                message: "Tidak ada data kata hubung yang ditemukan",
                data: null,
            });
        }

        const resultData = datas.map((data) => {
            const trackerItem = trackers
                ? trackers.find(
                      (tracker) => tracker.other_word_id === data.other_word_id
                  )
                : null;
            return {
                id: data.other_word_id,
                romaji: data.romaji,
                reading: data.reading,
                word: data.word,
                meaning: data.meaning,
                example_sentence: data.example_sentence,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        const userCompletedConjunction = trackers ? trackers.length : 0;
        const totalConjunction = pagination.length;
        const totalPage = Math.ceil(pagination.length / pageSize);
        const havePrevious = page > 1 ? true : false;
        const haveNext = page < totalPage ? true : false;

        return res.status(200).json({
            error: false,
            message: "Data kata hubung berhasil diambil",
            userCompletedConjunction,
            totalConjunction,
            pagination: {
                totalPage,
                pageNow: page,
                havePrevious,
                haveNext,
            },
            data: resultData,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

module.exports = {
    kanjiN5Controller,
    adjectiveN5Controller,
    adverbN5Controller,
    verbN5Controller,
    nounActivityN5Controller,
    nounAnimalplantN5Controller,
    nounAuxnumberN5Controller,
    nounBodyN5Controller,
    nounCityN5Controller,
    nounColorN5Controller,
    nounFoodDrinkN5Controller,
    nounHomeAppliancesN5Controller,
    nounKosoadoN5Controller,
    nounMediaN5Controller,
    nounNaturalN5Controller,
    nounNumberN5Controller,
    nounOutfitN5Controller,
    nounPeopleN5Controller,
    nounPositionN5Controller,
    nounRegionN5Controller,
    nounSchoolN5Controller,
    nounTimeN5Controller,
    nounTrafficN5Controller,
    nounWorkN5Controller,
    questionWordController,
    conjunctionN5Controller,
};
