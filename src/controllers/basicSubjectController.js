const supabase = require("../config/supabase");

const particleController = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from("particles")
            .select("*")
            .order("particle_id", { ascending: true });

        const { data: tracker } = await supabase
            .from("tracker")
            .select("particle_id, status")
            .eq("user_id", req.user.id);

        if (error) {
            throw new Error("Gagal memeriksa partikel");
        }

        const resultData = data.map((row) => {
            const trackerItem = tracker
                ? tracker.find((t) => t.particle_id === row.particle_id)
                : null;
            return {
                id: row.particle_id,
                particle_name: row.particle_name,
                description: row.description,
                example_sentence: row.example_sentence,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        return res.status(200).json({
            error: false,
            message: "Berhasil mendapatkan data partikel",
            datas: resultData,
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

        const { data: tracker } = await supabase
            .from("tracker")
            .select("hiragana_id, status")
            .eq("user_id", req.user.id);

        if (error) {
            throw new Error("Gagal memeriksa hiragana");
        }

        const result = data.map((row) => {
            const trackerItem = tracker
                ? tracker.find((t) => t.hiragana_id === row.hiragana_id)
                : null;
            return {
                id: row.hiragana_id,
                character: row.character,
                romaji: row.romaji,
                type: row.type,
                status: trackerItem ? trackerItem.status : false,
            };
        });

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

        const { data: tracker } = await supabase
            .from("tracker")
            .select("katakana_id, status")
            .eq("user_id", req.user.id);

        if (error) {
            throw new Error("Gagal memeriksa katakana");
        }

        const result = data.map((row) => {
            const trackerItem = tracker
                ? tracker.find((t) => t.katakana_id === row.katakana_id)
                : null;
            return {
                id: row.katakana_id,
                character: row.character,
                romaji: row.romaji,
                type: row.type,
                status: trackerItem ? trackerItem.status : false,
            };
        });

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

        const { data: tracker } = await supabase
            .from("tracker")
            .select("basic_conversation_id, status")
            .eq("user_id", req.user.id);

        if (error) {
            throw new Error("Gagal memeriksa percakapan dasar");
        }

        const result = data.map((row) => {
            const trackerItem = tracker
                ? tracker.find(
                      (t) => t.basic_conversation_id === row.conversation_id
                  )
                : null;
            return {
                id: row.conversation_id,
                word: row.word,
                reading: row.reading,
                meaning: row.meaning,
                type: row.type,
                example_sentence: row.example_sentence,
                status: trackerItem ? trackerItem.status : false,
            };
        });

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

module.exports = {
    particleController,
    hiraganaController,
    katakanaController,
    basicConversationController,
};
