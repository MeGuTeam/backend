const supabase = require("../config/supabase");

const particleController = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from("particles")
            .select("*")
            .order("particle_id", { ascending: true });

        if (error) {
            throw new Error("Gagal memeriksa partikel");
        }

        const result = data.map((row) => ({
            id: row.particle_id,
            particle_name: row.particle_name,
            description: row.description,
            example_sentence: row.example_sentence,
        }));

        return res.status(200).json({
            error: false,
            message: "Berhasil mendapatkan data partikel",
            datas: result,
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const hiraganaController = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from("hiragana")
            .select("*")
            .order("hiragana_id", { ascending: true });

        if (error) {
            throw new Error("Gagal memeriksa hiragana");
        }

        const result = data.map((row) => ({
            id: row.hiragana_id,
            character: row.character,
            romaji: row.romaji,
            type: row.type,
        }));

        return res.status(200).json({
            error: false,
            message: "Berhasil mendapatkan data hiragana",
            datas: result,
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const katakanaController = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from("katakana")
            .select("*")
            .order("katakana_id", { ascending: true });
        if (error) {
            throw new Error("Gagal memeriksa katakana");
        }
        const result = data.map((row) => ({
            id: row.katakana_id,
            character: row.character,
            romaji: row.romaji,
            type: row.type,
        }));
        return res.status(200).json({
            error: false,
            message: "Berhasil mendapatkan data katakana",
            datas: result,
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const basicConversationController = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from("basic_conversation")
            .select("*")
            .order("conversation_id", { ascending: true });

        if (error) {
            throw new Error("Gagal memeriksa percakapan dasar");
        }

        const result = data.map((row) => ({
            id: row.conversation_id,
            word: row.word,
            reading: row.reading,
            meaning: row.meaning,
            type: row.type,
            example_sentence: row.example_sentence,
        }));

        return res.status(200).json({
            error: false,
            message: "Berhasil mendapatkan data percakapan dasar",
            datas: result,
        });
    } catch (err) {
        console.error(err);
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
            .from("question_word_n5")
            .select("*")
            .order("question_word_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata tanya");
        }

        const datas = questionData.map((question) => ({
            id: question.question_id,
            reading: question.reading,
            word: question.word,
            meaning: question.meaning,
            example_sentence: question.example_sentence,
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

module.exports = {
    particleController,
    hiraganaController,
    katakanaController,
    basicConversationController,
    questionWordController,
};
