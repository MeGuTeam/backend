const supabase = require("../config/supabase");

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

module.exports = {
    hiraganaController,
    katakanaController,
};
