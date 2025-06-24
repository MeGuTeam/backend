const supabase = require("../config/supabase");

const kanjiN5Controller = async (req, res) => {
    try {
        const { data: kanjiData, error: fetchError } = await supabase
            .from("kanjis")
            .select("kanji_id, character, meaning")
            .eq("level_id", "5")
            .order("kanji_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kanji");
        }

        const datas = kanjiData.map((kanji) => ({
            id: kanji.kanji_id,
            character: kanji.character,
        }));

        return res.status(200).json({
            error: false,
            message: "Data kanji berhasil diambil",
            data: datas,
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const kanjiN5DetailsController = async (req, res) => {
    try {
        const { data: kanjiData, error: fetchError } = await supabase
            .from("kanjis")
            .select("*")
            .eq("level_id", "5")
            .order("kanji_id", { ascending: true });

        const { data: tracker } = await supabase
            .from("tracking")
            .select("kanji_id, status")
            .eq("user_id", req.user.id);

        if (fetchError) {
            throw new Error("Gagal mengambil data kanji");
        }

        const datas = kanjiData.map((kanji) => {
            const trackerItem = tracker
                ? tracker.find((t) => t.kanji_id === kanji.kanji_id)
                : null;
            return {
                id: kanji.kanji_id,
                romaji: kanji.romaji,
                character: kanji.character,
                onyomi: kanji.onyomi,
                kunyomi: kanji.kunyomi,
                meaning: kanji.meaning,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        return res.status(200).json({
            error: false,
            message: "Detail data kanji berhasil diambil",
            data: datas,
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const adjectiveN5Controller = async (req, res) => {
    try {
        const { data: adjectiveData, error: fetchError } = await supabase
            .from("adjectives")
            .select("adjective_id, word, reading, meaning")
            .eq("level_id", "5")
            .order("adjective_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata sifat");
        }

        const datas = adjectiveData.map((adjective) => ({
            id: adjective.adjective_id,
            word: adjective.word,
        }));

        return res.status(200).json({
            error: false,
            message: "Data kata sifat berhasil diambil",
            data: datas,
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const adjectiveN5DetailsController = async (req, res) => {
    try {
        const { data: adjectiveData, error: fetchError } = await supabase
            .from("adjectives")
            .select("*")
            .eq("level_id", "5")
            .order("adjective_id", { ascending: true });

        const { data: tracker } = await supabase
            .from("tracking")
            .select("adjective_id, status")
            .eq("user_id", req.user.id);

        if (fetchError) {
            throw new Error("Gagal mengambil data kata sifat");
        }

        const datas = adjectiveData.map((adjective) => {
            const trackerItem = tracker
                ? tracker.find((t) => t.adjective_id === adjective.adjective_id)
                : null;
            return {
                id: adjective.adjective_id,
                romaji: adjective.romaji,
                reading: adjective.reading,
                word: adjective.word,
                meaning: adjective.meaning,
                example_sentence: adjective.example_sentence,
                type: adjective.type,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        return res.status(200).json({
            error: false,
            message: "Detail data kata sifat berhasil diambil",
            data: datas,
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const adverbN5Controller = async (req, res) => {
    try {
        const { data: adverbData, error: fetchError } = await supabase
            .from("other_words")
            .select("other_word_id, word, reading, meaning")
            .eq("type", "adverb")
            .eq("level_id", "5")
            .order("other_word_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata keterangan");
        }

        const datas = adverbData.map((adverb) => ({
            id: adverb.other_word_id,
            word: adverb.word,
        }));

        return res.status(200).json({
            error: false,
            message: "Data kata keterangan berhasil diambil",
            data: datas,
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const adverbN5DetailsController = async (req, res) => {
    try {
        const { data: adverbData, error: fetchError } = await supabase
            .from("other_words")
            .select("*")
            .eq("type", "adverb")
            .eq("level_id", "5")
            .order("other_word_id", { ascending: true });

        const { data: tracker } = await supabase
            .from("tracking")
            .select("other_word_id, status")
            .eq("user_id", req.user.id);

        if (fetchError) {
            throw new Error("Gagal mengambil data kata keterangan");
        }

        const datas = adverbData.map((adverb) => {
            const trackerItem = tracker
                ? tracker.find((t) => t.other_word_id === adverb.other_word_id)
                : null;
            return {
                id: adverb.other_word_id,
                romaji: adverb.romaji,
                reading: adverb.reading,
                word: adverb.word,
                meaning: adverb.meaning,
                example_sentence: adverb.example_sentence,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        return res.status(200).json({
            error: false,
            message: "Detail data kata keterangan berhasil diambil",
            data: datas,
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const verbN5Controller = async (req, res) => {
    try {
        const { data: verbData, error: fetchError } = await supabase
            .from("verbs")
            .select("verb_id, word, reading, meaning")
            .eq("level_id", "5")
            .order("verb_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata kerja");
        }

        const datas = verbData.map((verb) => ({
            id: verb.verb_id,
            word: verb.word,
        }));

        return res.status(200).json({
            error: false,
            message: "Data kata kerja berhasil diambil",
            data: datas,
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const verbN5DetailsController = async (req, res) => {
    try {
        const { data: verbData, error: fetchError } = await supabase
            .from("verbs")
            .select("*")
            .eq("level_id", "5")
            .order("verb_id", { ascending: true });

        const { data: tracker } = await supabase
            .from("tracking")
            .select("verb_id, status")
            .eq("user_id", req.user.id);

        if (fetchError) {
            throw new Error("Gagal mengambil data kata kerja");
        }

        const datas = verbData.map((verb) => {
            const trackerItem = tracker
                ? tracker.find((t) => t.verb_id === verb.verb_id)
                : null;
            return {
                id: verb.verb_id,
                romaji: verb.romaji,
                reading: verb.reading,
                word: verb.word,
                meaning: verb.meaning,
                example_sentence: verb.example_sentence,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        return res.status(200).json({
            error: false,
            message: "Detail data kata kerja berhasil diambil",
            data: datas,
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounActivityN5Controller = async (req, res) => {
    try {
        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("noun_id, word, reading, meaning")
            .eq("type", "activity")
            .order("noun_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda aktivitas");
        }

        const datas = nounData.map((noun) => ({
            id: noun.noun_id,
            word: noun.word,
        }));

        return res.status(200).json({
            error: false,
            message: "Data kata benda aktivitas berhasil diambil",
            data: datas,
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounActivityN5DetailsController = async (req, res) => {
    try {
        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "activity")
            .order("noun_id", { ascending: true });

        const { data: tracker } = await supabase
            .from("tracking")
            .select("noun_id, status")
            .eq("user_id", req.user.id);

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda aktivitas");
        }

        const datas = nounData.map((noun) => {
            const trackerItem = tracker
                ? tracker.find((t) => t.noun_id === noun.noun_id)
                : null;
            return {
                id: noun.noun_id,
                romaji: noun.romaji,
                reading: noun.reading,
                word: noun.word,
                meaning: noun.meaning,
                example_sentence: noun.example_sentence,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        return res.status(200).json({
            error: false,
            message: "Detail data kata benda aktivitas berhasil diambil",
            data: datas,
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounAnimalplantN5Controller = async (req, res) => {
    try {
        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("noun_id, word, reading, meaning")
            .eq("type", "animalplant")
            .order("noun_id", { ascending: true });

        if (fetchError) {
            throw new Error(
                "Gagal mengambil data kata benda hewan dan tumbuhan"
            );
        }

        const datas = nounData.map((noun) => ({
            id: noun.noun_id,
            word: noun.word,
        }));

        return res.status(200).json({
            error: false,
            message: "Data kata benda hewan dan tumbuhan berhasil diambil",
            data: datas,
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounAnimalplantN5DetailsController = async (req, res) => {
    try {
        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "animalplant")
            .order("noun_id", { ascending: true });

        const { data: tracker } = await supabase
            .from("tracking")
            .select("noun_id, status")
            .eq("user_id", req.user.id);

        if (fetchError) {
            throw new Error(
                "Gagal mengambil data kata benda hewan dan tumbuhan"
            );
        }

        const datas = nounData.map((noun) => {
            const trackerItem = tracker
                ? tracker.find((t) => t.noun_id === noun.noun_id)
                : null;
            return {
                id: noun.noun_id,
                romaji: noun.romaji,
                reading: noun.reading,
                word: noun.word,
                meaning: noun.meaning,
                example_sentence: noun.example_sentence,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        return res.status(200).json({
            error: false,
            message:
                "Detail data kata benda hewan dan tumbuhan berhasil diambil",
            data: datas,
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounAuxnumberN5Controller = async (req, res) => {
    try {
        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("noun_id, word, reading, meaning")
            .eq("type", "auxnumber")
            .order("noun_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda angka");
        }

        const datas = nounData.map((noun) => ({
            id: noun.noun_id,
            word: noun.word,
        }));

        return res.status(200).json({
            error: false,
            message: "Data kata benda angka berhasil diambil",
            data: datas,
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounAuxnumberN5DetailsController = async (req, res) => {
    try {
        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "auxnumber")
            .order("noun_id", { ascending: true });

        const { data: tracker } = await supabase
            .from("tracking")
            .select("noun_id, status")
            .eq("user_id", req.user.id);

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda angka");
        }

        const datas = nounData.map((noun) => {
            const trackerItem = tracker
                ? tracker.find((t) => t.noun_id === noun.noun_id)
                : null;
            return {
                id: noun.noun_id,
                romaji: noun.romaji,
                reading: noun.reading,
                word: noun.word,
                meaning: noun.meaning,
                example_sentence: noun.example_sentence,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        return res.status(200).json({
            error: false,
            message: "Detail data kata benda angka berhasil diambil",
            data: datas,
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounBodyN5Controller = async (req, res) => {
    try {
        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("noun_id, word, reading, meaning")
            .eq("type", "body")
            .order("noun_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda tubuh");
        }

        const datas = nounData.map((noun) => ({
            id: noun.noun_id,
            word: noun.word,
        }));

        return res.status(200).json({
            error: false,
            message: "Data kata benda tubuh berhasil diambil",
            data: datas,
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounBodyN5DetailsController = async (req, res) => {
    try {
        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "body")
            .order("noun_id", { ascending: true });

        const { data: tracker } = await supabase
            .from("tracking")
            .select("noun_id, status")
            .eq("user_id", req.user.id);

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda tubuh");
        }

        const datas = nounData.map((noun) => {
            const trackerItem = tracker
                ? tracker.find((t) => t.noun_id === noun.noun_id)
                : null;
            return {
                id: noun.noun_id,
                romaji: noun.romaji,
                reading: noun.reading,
                word: noun.word,
                meaning: noun.meaning,
                example_sentence: noun.example_sentence,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        return res.status(200).json({
            error: false,
            message: "Detail data kata benda tubuh berhasil diambil",
            data: datas,
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
        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("noun_id, word, reading, meaning")
            .eq("type", "city")
            .order("noun_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda kota");
        }

        const datas = nounData.map((noun) => ({
            id: noun.noun_id,
            word: noun.word,
        }));

        return res.status(200).json({
            error: false,
            message: "Data kata benda kota berhasil diambil",
            data: datas,
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounCityN5DetailsController = async (req, res) => {
    try {
        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "city")
            .order("noun_id", { ascending: true });

        const { data: tracker } = await supabase
            .from("tracking")
            .select("noun_id, status")
            .eq("user_id", req.user.id);

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda kota");
        }

        const datas = nounData.map((noun) => {
            const trackerItem = tracker
                ? tracker.find((t) => t.noun_id === noun.noun_id)
                : null;
            return {
                id: noun.noun_id,
                romaji: noun.romaji,
                reading: noun.reading,
                word: noun.word,
                meaning: noun.meaning,
                example_sentence: noun.example_sentence,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        return res.status(200).json({
            error: false,
            message: "Detail data kata benda kota berhasil diambil",
            data: datas,
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
        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("noun_id, word, reading, meaning")
            .eq("type", "color")
            .order("noun_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda warna");
        }

        const datas = nounData.map((noun) => ({
            id: noun.noun_id,
            word: noun.word,
        }));

        return res.status(200).json({
            error: false,
            message: "Data kata benda warna berhasil diambil",
            data: datas,
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounColorN5DetailsController = async (req, res) => {
    try {
        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "color")
            .order("noun_id", { ascending: true });

        const { data: tracker } = await supabase
            .from("tracking")
            .select("noun_id, status")
            .eq("user_id", req.user.id);

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda warna");
        }

        const datas = nounData.map((noun) => {
            const trackerItem = tracker
                ? tracker.find((t) => t.noun_id === noun.noun_id)
                : null;
            return {
                id: noun.noun_id,
                romaji: noun.romaji,
                reading: noun.reading,
                word: noun.word,
                meaning: noun.meaning,
                example_sentence: noun.example_sentence,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        return res.status(200).json({
            error: false,
            message: "Detail data kata benda warna berhasil diambil",
            data: datas,
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
        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("noun_id, word, reading, meaning")
            .eq("type", "fooddrink")
            .order("noun_id", { ascending: true });

        if (fetchError) {
            throw new Error(
                "Gagal mengambil data kata benda makanan dan minuman"
            );
        }

        const datas = nounData.map((noun) => ({
            id: noun.noun_id,
            word: noun.word,
        }));

        return res.status(200).json({
            error: false,
            message: "Data kata benda makanan dan minuman berhasil diambil",
            data: datas,
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounFoodDrinkN5DetailsController = async (req, res) => {
    try {
        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "fooddrink")
            .order("noun_id", { ascending: true });

        const { data: tracker } = await supabase
            .from("tracking")
            .select("noun_id, status")
            .eq("user_id", req.user.id);

        if (fetchError) {
            throw new Error(
                "Gagal mengambil data kata benda makanan dan minuman"
            );
        }

        const datas = nounData.map((noun) => {
            const trackerItem = tracker
                ? tracker.find((t) => t.noun_id === noun.noun_id)
                : null;
            return {
                id: noun.noun_id,
                romaji: noun.romaji,
                reading: noun.reading,
                word: noun.word,
                meaning: noun.meaning,
                example_sentence: noun.example_sentence,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        return res.status(200).json({
            error: false,
            message:
                "Detail data kata benda makanan dan minuman berhasil diambil",
            data: datas,
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
        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("noun_id, word, reading, meaning")
            .eq("type", "homeappliances")
            .order("noun_id", { ascending: true });

        if (fetchError) {
            throw new Error(
                "Gagal mengambil data kata benda peralatan rumah tangga"
            );
        }

        const datas = nounData.map((noun) => ({
            id: noun.noun_id,
            word: noun.word,
        }));

        return res.status(200).json({
            error: false,
            message: "Data kata benda peralatan rumah tangga berhasil diambil",
            data: datas,
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounHomeAppliancesN5DetailsController = async (req, res) => {
    try {
        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "homeappliances")
            .order("noun_id", { ascending: true });

        const { data: tracker } = await supabase
            .from("tracking")
            .select("noun_id, status")
            .eq("user_id", req.user.id);

        if (fetchError) {
            throw new Error(
                "Gagal mengambil data kata benda peralatan rumah tangga"
            );
        }

        const datas = nounData.map((noun) => {
            const trackerItem = tracker
                ? tracker.find((t) => t.noun_id === noun.noun_id)
                : null;
            return {
                id: noun.noun_id,
                romaji: noun.romaji,
                reading: noun.reading,
                word: noun.word,
                meaning: noun.meaning,
                example_sentence: noun.example_sentence,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        return res.status(200).json({
            error: false,
            message:
                "Detail data kata benda peralatan rumah tangga berhasil diambil",
            data: datas,
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
        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("noun_id, word, reading, meaning")
            .eq("type", "kosoado")
            .order("noun_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda kosoado");
        }

        const datas = nounData.map((noun) => ({
            id: noun.noun_id,
            word: noun.word,
        }));

        return res.status(200).json({
            error: false,
            message: "Data kata benda kosoado berhasil diambil",
            data: datas,
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounKosoadoN5DetailsController = async (req, res) => {
    try {
        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "kosoado")
            .order("noun_id", { ascending: true });

        const { data: tracker } = await supabase
            .from("tracking")
            .select("noun_id, status")
            .eq("user_id", req.user.id);

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda kosoado");
        }

        const datas = nounData.map((noun) => {
            const trackerItem = tracker
                ? tracker.find((t) => t.noun_id === noun.noun_id)
                : null;
            return {
                id: noun.noun_id,
                romaji: noun.romaji,
                reading: noun.reading,
                word: noun.word,
                meaning: noun.meaning,
                example_sentence: noun.example_sentence,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        return res.status(200).json({
            error: false,
            message: "Detail data kata benda kosoado berhasil diambil",
            data: datas,
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
        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("noun_id, word, reading, meaning")
            .eq("type", "media")
            .order("noun_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda media");
        }

        const datas = nounData.map((noun) => ({
            id: noun.noun_id,
            word: noun.word,
        }));

        return res.status(200).json({
            error: false,
            message: "Data kata benda media berhasil diambil",
            data: datas,
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounMediaN5DetailsController = async (req, res) => {
    try {
        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "media")
            .order("noun_id", { ascending: true });

        const { data: tracker } = await supabase
            .from("tracking")
            .select("noun_id, status")
            .eq("user_id", req.user.id);

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda media");
        }

        const datas = nounData.map((noun) => {
            const trackerItem = tracker
                ? tracker.find((t) => t.noun_id === noun.noun_id)
                : null;
            return {
                id: noun.noun_id,
                romaji: noun.romaji,
                reading: noun.reading,
                word: noun.word,
                meaning: noun.meaning,
                example_sentence: noun.example_sentence,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        return res.status(200).json({
            error: false,
            message: "Detail data kata benda media berhasil diambil",
            data: datas,
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounNaturalN5Controller = async (req, res) => {
    try {
        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("noun_id, word, reading, meaning")
            .eq("type", "natural")
            .order("noun_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda alam");
        }

        const datas = nounData.map((noun) => ({
            id: noun.noun_id,
            word: noun.word,
        }));

        return res.status(200).json({
            error: false,
            message: "Data kata benda alam berhasil diambil",
            data: datas,
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounNaturalN5DetailsController = async (req, res) => {
    try {
        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "natural")
            .order("noun_id", { ascending: true });

        const { data: tracker } = await supabase
            .from("tracking")
            .select("noun_id, status")
            .eq("user_id", req.user.id);

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda alam");
        }

        const datas = nounData.map((noun) => {
            const trackerItem = tracker
                ? tracker.find((t) => t.noun_id === noun.noun_id)
                : null;
            return {
                id: noun.noun_id,
                romaji: noun.romaji,
                reading: noun.reading,
                word: noun.word,
                meaning: noun.meaning,
                example_sentence: noun.example_sentence,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        return res.status(200).json({
            error: false,
            message: "Detail data kata benda alam berhasil diambil",
            data: datas,
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounNumberN5Controller = async (req, res) => {
    try {
        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("noun_id, word, reading, meaning")
            .eq("type", "number")
            .order("noun_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda angka");
        }

        const datas = nounData.map((noun) => ({
            id: noun.noun_id,
            word: noun.word,
        }));

        return res.status(200).json({
            error: false,
            message: "Data kata benda angka berhasil diambil",
            data: datas,
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounNumberN5DetailsController = async (req, res) => {
    try {
        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "number")
            .order("noun_id", { ascending: true });

        const { data: tracker } = await supabase
            .from("tracking")
            .select("noun_id, status")
            .eq("user_id", req.user.id);

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda angka");
        }

        const datas = nounData.map((noun) => {
            const trackerItem = tracker
                ? tracker.find((t) => t.noun_id === noun.noun_id)
                : null;
            return {
                id: noun.noun_id,
                romaji: noun.romaji,
                reading: noun.reading,
                word: noun.word,
                meaning: noun.meaning,
                example_sentence: noun.example_sentence,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        return res.status(200).json({
            error: false,
            message: "Detail data kata benda angka berhasil diambil",
            data: datas,
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounOutfitN5Controller = async (req, res) => {
    try {
        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("noun_id, word, reading, meaning")
            .eq("type", "outfit")
            .order("noun_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda pakaian");
        }

        const datas = nounData.map((noun) => ({
            id: noun.noun_id,
            word: noun.word,
        }));

        return res.status(200).json({
            error: false,
            message: "Data kata benda pakaian berhasil diambil",
            data: datas,
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounOutfitN5DetailsController = async (req, res) => {
    try {
        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "outfit")
            .order("noun_id", { ascending: true });

        const { data: tracker } = await supabase
            .from("tracking")
            .select("noun_id, status")
            .eq("user_id", req.user.id);

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda pakaian");
        }

        const datas = nounData.map((noun) => {
            const trackerItem = tracker
                ? tracker.find((t) => t.noun_id === noun.noun_id)
                : null;
            return {
                id: noun.noun_id,
                romaji: noun.romaji,
                reading: noun.reading,
                word: noun.word,
                meaning: noun.meaning,
                example_sentence: noun.example_sentence,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        return res.status(200).json({
            error: false,
            message: "Detail data kata benda pakaian berhasil diambil",
            data: datas,
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounPeopleN5Controller = async (req, res) => {
    try {
        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("noun_id, word, reading, meaning")
            .eq("type", "people")
            .order("noun_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda orang");
        }

        const datas = nounData.map((noun) => ({
            id: noun.noun_id,
            word: noun.word,
        }));

        return res.status(200).json({
            error: false,
            message: "Data kata benda orang berhasil diambil",
            data: datas,
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounPeopleN5DetailsController = async (req, res) => {
    try {
        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "people")
            .order("noun_id", { ascending: true });

        const { data: tracker } = await supabase
            .from("tracking")
            .select("noun_id, status")
            .eq("user_id", req.user.id);

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda orang");
        }

        const datas = nounData.map((noun) => {
            const trackerItem = tracker
                ? tracker.find((t) => t.noun_id === noun.noun_id)
                : null;
            return {
                id: noun.noun_id,
                romaji: noun.romaji,
                reading: noun.reading,
                word: noun.word,
                meaning: noun.meaning,
                example_sentence: noun.example_sentence,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        return res.status(200).json({
            error: false,
            message: "Detail data kata benda orang berhasil diambil",
            data: datas,
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounPositionN5Controller = async (req, res) => {
    try {
        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("noun_id, word, reading, meaning")
            .eq("type", "position")
            .order("noun_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda posisi");
        }

        const datas = nounData.map((noun) => ({
            id: noun.noun_id,
            word: noun.word,
        }));

        return res.status(200).json({
            error: false,
            message: "Data kata benda posisi berhasil diambil",
            data: datas,
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounPositionN5DetailsController = async (req, res) => {
    try {
        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "position")
            .order("noun_id", { ascending: true });

        const { data: tracker } = await supabase
            .from("tracking")
            .select("noun_id, status")
            .eq("user_id", req.user.id);

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda posisi");
        }

        const datas = nounData.map((noun) => {
            const trackerItem = tracker
                ? tracker.find((t) => t.noun_id === noun.noun_id)
                : null;
            return {
                id: noun.noun_id,
                romaji: noun.romaji,
                reading: noun.reading,
                word: noun.word,
                meaning: noun.meaning,
                example_sentence: noun.example_sentence,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        return res.status(200).json({
            error: false,
            message: "Detail data kata benda posisi berhasil diambil",
            data: datas,
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounRegionN5Controller = async (req, res) => {
    try {
        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("noun_id, word, reading, meaning")
            .eq("type", "region")
            .order("noun_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda wilayah");
        }

        const datas = nounData.map((noun) => ({
            id: noun.noun_id,
            word: noun.word,
        }));

        return res.status(200).json({
            error: false,
            message: "Data kata benda wilayah berhasil diambil",
            data: datas,
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounRegionN5DetailsController = async (req, res) => {
    try {
        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "region")
            .order("noun_id", { ascending: true });

        const { data: tracker } = await supabase
            .from("tracking")
            .select("noun_id, status")
            .eq("user_id", req.user.id);

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda wilayah");
        }

        const datas = nounData.map((noun) => {
            const trackerItem = tracker
                ? tracker.find((t) => t.noun_id === noun.noun_id)
                : null;
            return {
                id: noun.noun_id,
                romaji: noun.romaji,
                reading: noun.reading,
                word: noun.word,
                meaning: noun.meaning,
                example_sentence: noun.example_sentence,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        return res.status(200).json({
            error: false,
            message: "Detail data kata benda wilayah berhasil diambil",
            data: datas,
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounSchoolN5Controller = async (req, res) => {
    try {
        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("noun_id, word, reading, meaning")
            .eq("type", "school")
            .order("noun_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda sekolah");
        }

        const datas = nounData.map((noun) => ({
            id: noun.noun_id,
            word: noun.word,
        }));

        return res.status(200).json({
            error: false,
            message: "Data kata benda sekolah berhasil diambil",
            data: datas,
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounSchoolN5DetailsController = async (req, res) => {
    try {
        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "school")
            .order("noun_id", { ascending: true });

        const { data: tracker } = await supabase
            .from("tracking")
            .select("noun_id, status")
            .eq("user_id", req.user.id);

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda sekolah");
        }

        const datas = nounData.map((noun) => {
            const trackerItem = tracker
                ? tracker.find((t) => t.noun_id === noun.noun_id)
                : null;
            return {
                id: noun.noun_id,
                romaji: noun.romaji,
                reading: noun.reading,
                word: noun.word,
                meaning: noun.meaning,
                example_sentence: noun.example_sentence,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        return res.status(200).json({
            error: false,
            message: "Detail data kata benda sekolah berhasil diambil",
            data: datas,
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounTimeN5Controller = async (req, res) => {
    try {
        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("noun_id, word, reading, meaning")
            .eq("type", "time")
            .order("noun_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda waktu");
        }

        const datas = nounData.map((noun) => ({
            id: noun.noun_id,
            word: noun.word,
        }));

        return res.status(200).json({
            error: false,
            message: "Data kata benda waktu berhasil diambil",
            data: datas,
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounTimeN5DetailsController = async (req, res) => {
    try {
        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "time")
            .order("noun_id", { ascending: true });

        const { data: tracker } = await supabase
            .from("tracking")
            .select("noun_id, status")
            .eq("user_id", req.user.id);

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda waktu");
        }

        const datas = nounData.map((noun) => {
            const trackerItem = tracker
                ? tracker.find((t) => t.noun_id === noun.noun_id)
                : null;
            return {
                id: noun.noun_id,
                romaji: noun.romaji,
                reading: noun.reading,
                word: noun.word,
                meaning: noun.meaning,
                example_sentence: noun.example_sentence,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        return res.status(200).json({
            error: false,
            message: "Detail data kata benda waktu berhasil diambil",
            data: datas,
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounTrafficN5Controller = async (req, res) => {
    try {
        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("noun_id, word, reading, meaning")
            .eq("type", "traffic")
            .order("noun_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda lalu lintas");
        }

        const datas = nounData.map((noun) => ({
            id: noun.noun_id,
            word: noun.word,
        }));

        return res.status(200).json({
            error: false,
            message: "Data kata benda lalu lintas berhasil diambil",
            data: datas,
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounTrafficN5DetailsController = async (req, res) => {
    try {
        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "traffic")
            .order("noun_id", { ascending: true });

        const { data: tracker } = await supabase
            .from("tracking")
            .select("noun_id, status")
            .eq("user_id", req.user.id);

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda lalu lintas");
        }

        const datas = nounData.map((noun) => {
            const trackerItem = tracker
                ? tracker.find((t) => t.noun_id === noun.noun_id)
                : null;
            return {
                id: noun.noun_id,
                romaji: noun.romaji,
                reading: noun.reading,
                word: noun.word,
                meaning: noun.meaning,
                example_sentence: noun.example_sentence,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        return res.status(200).json({
            error: false,
            message: "Detail data kata benda lalu lintas berhasil diambil",
            data: datas,
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounWorkN5Controller = async (req, res) => {
    try {
        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("noun_id, word, reading, meaning")
            .eq("type", "work")
            .order("noun_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda pekerjaan");
        }

        const datas = nounData.map((noun) => ({
            id: noun.noun_id,
            word: noun.word,
        }));

        return res.status(200).json({
            error: false,
            message: "Data kata benda pekerjaan berhasil diambil",
            data: datas,
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounWorkN5DetailsController = async (req, res) => {
    try {
        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "work")
            .order("noun_id", { ascending: true });

        const { data: tracker } = await supabase
            .from("tracking")
            .select("noun_id, status")
            .eq("user_id", req.user.id);

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda pekerjaan");
        }

        const datas = nounData.map((noun) => {
            const trackerItem = tracker
                ? tracker.find((t) => t.noun_id === noun.noun_id)
                : null;
            return {
                id: noun.noun_id,
                romaji: noun.romaji,
                reading: noun.reading,
                word: noun.word,
                meaning: noun.meaning,
                example_sentence: noun.example_sentence,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        return res.status(200).json({
            error: false,
            message: "Detail data kata benda pekerjaan berhasil diambil",
            data: datas,
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const questionWordController = async (req, res) => {
    try {
        const { data: questionData, error: fetchError } = await supabase
            .from("other_words")
            .select("other_word_id, word, reading, meaning")
            .eq("type", "question_word")
            .eq("level_id", "5")
            .order("other_word_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata tanya");
        }

        const datas = questionData.map((question) => ({
            id: question.other_word_id,
            word: question.word,
        }));

        return res.status(200).json({
            error: false,
            message: "Data kata tanya berhasil diambil",
            data: datas,
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const questionWordN5DetailsController = async (req, res) => {
    try {
        const { data: questionData, error: fetchError } = await supabase
            .from("other_words")
            .select("*")
            .eq("type", "question_word")
            .eq("level_id", "5")
            .order("other_word_id", { ascending: true });

        const { data: tracker } = await supabase
            .from("tracking")
            .select("other_word_id, status")
            .eq("user_id", req.user.id);

        if (fetchError) {
            throw new Error("Gagal mengambil data kata tanya");
        }

        const datas = questionData.map((question) => {
            const trackerItem = tracker
                ? tracker.find(
                      (t) => t.other_word_id === question.other_word_id
                  )
                : null;
            return {
                id: question.other_word_id,
                romaji: question.romaji,
                reading: question.reading,
                word: question.word,
                meaning: question.meaning,
                example_sentence: question.example_sentence,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        return res.status(200).json({
            error: false,
            message: "Detail data kata tanya berhasil diambil",
            data: datas,
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const conjunctionN5Controller = async (req, res) => {
    try {
        const { data: conjunctionData, error: fetchError } = await supabase
            .from("other_words")
            .select("other_word_id, word, reading, meaning")
            .eq("type", "conjunction")
            .eq("level_id", "5")
            .order("other_word_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata hubung");
        }

        const datas = conjunctionData.map((conjunction) => ({
            id: conjunction.other_word_id,
            word: conjunction.word,
        }));

        return res.status(200).json({
            error: false,
            message: "Data kata hubung berhasil diambil",
            data: datas,
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const conjunctionN5DetailsController = async (req, res) => {
    try {
        const { data: conjunctionData, error: fetchError } = await supabase
            .from("other_words")
            .select("*")
            .eq("type", "conjunction")
            .eq("level_id", "5")
            .order("other_word_id", { ascending: true });

        const { data: tracker } = await supabase
            .from("tracking")
            .select("other_word_id, status")
            .eq("user_id", req.user.id);

        if (fetchError) {
            throw new Error("Gagal mengambil data kata hubung");
        }

        const datas = conjunctionData.map((conjunction) => {
            const trackerItem = tracker
                ? tracker.find(
                      (t) => t.other_word_id === conjunction.other_word_id
                  )
                : null;
            return {
                id: conjunction.other_word_id,
                romaji: conjunction.romaji,
                reading: conjunction.reading,
                word: conjunction.word,
                meaning: conjunction.meaning,
                example_sentence: conjunction.example_sentence,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        return res.status(200).json({
            error: false,
            message: "Detail data kata hubung berhasil diambil",
            data: datas,
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
    kanjiN5Controller,
    kanjiN5DetailsController,
    adjectiveN5Controller,
    adjectiveN5DetailsController,
    adverbN5Controller,
    adverbN5DetailsController,
    verbN5Controller,
    verbN5DetailsController,
    nounActivityN5Controller,
    nounActivityN5DetailsController,
    nounAnimalplantN5Controller,
    nounAnimalplantN5DetailsController,
    nounAuxnumberN5Controller,
    nounAuxnumberN5DetailsController,
    nounBodyN5Controller,
    nounBodyN5DetailsController,
    nounCityN5Controller,
    nounCityN5DetailsController,
    nounColorN5Controller,
    nounColorN5DetailsController,
    nounFoodDrinkN5Controller,
    nounFoodDrinkN5DetailsController,
    nounHomeAppliancesN5Controller,
    nounHomeAppliancesN5DetailsController,
    nounKosoadoN5Controller,
    nounKosoadoN5DetailsController,
    nounMediaN5Controller,
    nounMediaN5DetailsController,
    nounNaturalN5Controller,
    nounNaturalN5DetailsController,
    nounNumberN5Controller,
    nounNumberN5DetailsController,
    nounOutfitN5Controller,
    nounOutfitN5DetailsController,
    nounPeopleN5Controller,
    nounPeopleN5DetailsController,
    nounPositionN5Controller,
    nounPositionN5DetailsController,
    nounRegionN5Controller,
    nounRegionN5DetailsController,
    nounSchoolN5Controller,
    nounSchoolN5DetailsController,
    nounTimeN5Controller,
    nounTimeN5DetailsController,
    nounTrafficN5Controller,
    nounTrafficN5DetailsController,
    nounWorkN5Controller,
    nounWorkN5DetailsController,
    questionWordController,
    questionWordN5DetailsController,
    conjunctionN5Controller,
    conjunctionN5DetailsController,
};
