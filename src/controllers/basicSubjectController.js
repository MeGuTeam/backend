const supabase = require("../config/supabase");

const particleController = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from("particles")
            .select("*")
            .order("particle_id", { ascending: true });

        const { data: tracker } = await supabase
            .from("particles_tracker")
            .select("particle_id, status")
            .eq("user_id", req.user.id);

        if (error) {
            throw new Error("Gagal memeriksa partikel");
        }

        if (data.length === 0 || !data) {
            return res.status(404).json({
                error: true,
                message: "Tidak ada data partikel yang ditemukan",
                data: null,
            });
        }

        const resultData = data.map((row) => {
            const trackerItem = tracker
                ? tracker.find((t) => t.particle_id === row.particle_id)
                : null;
            return {
                id: row.particle_id,
                romaji: row.romaji,
                particle_name: row.particle_name,
                description: row.description,
                example_sentence: row.example_sentence,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        const userCompletedParticles = tracker ? tracker.length : 0;
        const totalParticles = data.length;

        return res.status(200).json({
            error: false,
            message: "Berhasil mendapatkan data partikel",
            userCompletedParticles,
            totalParticles,
            data: resultData,
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

const hiraganaController = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from("hiragana")
            .select("*")
            .order("hiragana_id", { ascending: true });

        const { data: tracker } = await supabase
            .from("hiragana_tracker")
            .select("hiragana_id, status")
            .eq("user_id", req.user.id);

        if (error) {
            throw new Error("Gagal memeriksa hiragana");
        }

        if (data.length === 0 || !data) {
            return res.status(404).json({
                error: true,
                message: "Tidak ada data hiragana yang ditemukan",
                data: null,
            });
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

        const userCompletedHiragana = tracker ? tracker.length : 0;
        const totalHiragana = data.length;

        return res.status(200).json({
            error: false,
            message: "Berhasil mendapatkan data hiragana",
            userCompletedHiragana,
            totalHiragana,
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

const katakanaController = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from("katakana")
            .select("*")
            .order("katakana_id", { ascending: true });

        const { data: tracker } = await supabase
            .from("katakana_tracker")
            .select("katakana_id, status")
            .eq("user_id", req.user.id);

        if (error) {
            throw new Error("Gagal memeriksa katakana");
        }

        if (data.length === 0 || !data) {
            return res.status(404).json({
                error: true,
                message: "Tidak ada data katakana yang ditemukan",
                data: null,
            });
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

        const userCompletedKatakana = tracker ? tracker.length : 0;
        const totalKatakana = data.length;

        return res.status(200).json({
            error: false,
            message: "Berhasil mendapatkan data katakana",
            userCompletedKatakana,
            totalKatakana,
            data: result,
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
            .order("basic_conversation_id", { ascending: true });

        const { data: tracker } = await supabase
            .from("basic_conversation_tracker")
            .select("basic_conversation_id, status")
            .eq("user_id", req.user.id);

        if (error) {
            throw new Error("Gagal memeriksa percakapan dasar");
        }

        if (data.length === 0 || !data) {
            return res.status(404).json({
                error: true,
                message: "Tidak ada data percakapan dasar yang ditemukan",
                data: null,
            });
        }

        const result = data.map((row) => {
            const trackerItem = tracker
                ? tracker.find(
                      (t) =>
                          t.basic_conversation_id === row.basic_conversation_id
                  )
                : null;
            return {
                id: row.basic_conversation_id,
                word: row.word,
                reading: row.reading,
                meaning: row.meaning,
                type: row.type,
                example_sentence: row.example_sentence,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        const userCompletedBasicConversation = tracker ? tracker.length : 0;
        const totalBasicConversation = data.length;

        return res.status(200).json({
            error: false,
            message: "Berhasil mendapatkan data percakapan dasar",
            userCompletedBasicConversation,
            totalBasicConversation,
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

module.exports = {
    particleController,
    hiraganaController,
    katakanaController,
    basicConversationController,
};
