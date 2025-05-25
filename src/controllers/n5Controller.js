const supabase = require("../config/supabase");

const kanjiN5Controller = async (req, res) => {
    try {
        const { data: kanjiData, error: fetchError } = await supabase
            .from("kanji_n5")
            .select("*")
            .order("kanji_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kanji");
        }

        const datas = kanjiData.map((kanji) => ({
            id: kanji.kanji_id,
            character: kanji.character,
            onyomi: kanji.onyomi,
            kunyomi: kanji.kunyomi,
            meaning: kanji.meaning,
        }));

        return res.status(200).json({
            error: false,
            message: "Data kanji berhasil diambil",
            data: datas,
        });
    } catch (err) {
        console.error("Kanji fetch error:", err);
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
            .from("adjective_n5")
            .select("*")
            .order("adjective_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata sifat");
        }

        const datas = adjectiveData.map((adjective) => ({
            id: adjective.adjective_id,
            reading: adjective.reading,
            word: adjective.word,
            meaning: adjective.meaning,
            example_sentence: adjective.example_sentence,
            type: adjective.type,
        }));

        return res.status(200).json({
            error: false,
            message: "Data kata sifat berhasil diambil",
            data: datas,
        });
    } catch (err) {
        console.error("Adjective fetch error:", err);
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
            .from("adverb_n5")
            .select("*")
            .order("adverb_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata keterangan");
        }

        const datas = adverbData.map((adverb) => ({
            id: adverb.adverb_id,
            reading: adverb.reading,
            word: adverb.word,
            meaning: adverb.meaning,
            example_sentence: adverb.example_sentence,
        }));

        return res.status(200).json({
            error: false,
            message: "Data kata keterangan berhasil diambil",
            data: datas,
        });
    } catch (err) {
        console.error("Adverb fetch error:", err);
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounN5Controller = async (req, res) => {
    try {
        const { data: nounData, error: fetchError } = await supabase
            .from("noun_n5")
            .select("*")
            .order("noun_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda");
        }

        const datas = nounData.map((noun) => ({
            id: noun.noun_id,
            reading: noun.reading,
            word: noun.word,
            meaning: noun.meaning,
            example_sentence: noun.example_sentence,
        }));

        return res.status(200).json({
            error: false,
            message: "Data kata benda berhasil diambil",
            data: datas,
        });
    } catch (err) {
        console.error("Noun fetch error:", err);
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
            .from("verb_n5")
            .select("*")
            .order("verb_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata kerja");
        }

        const datas = verbData.map((verb) => ({
            id: verb.verb_id,
            reading: verb.reading,
            word: verb.word,
            meaning: verb.meaning,
            example_sentence: verb.example_sentence,
        }));

        return res.status(200).json({
            error: false,
            message: "Data kata kerja berhasil diambil",
            data: datas,
        });
    } catch (err) {
        console.error("Verb fetch error:", err);
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
    nounN5Controller,
    verbN5Controller,
};
