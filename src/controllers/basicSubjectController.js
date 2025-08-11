const supabase = require("../config/supabase");

const particleController = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = 10;

        const { data: pagination, error: errorPagination } = await supabase
            .from("particles")
            .select("*");

        if (errorPagination) {
            throw new Error("Gagal memeriksa hiragana");
        }

        const { data: datas, error } = await supabase
            .from("particles")
            .select("*")
            .range((page - 1) * pageSize, page * pageSize - 1)
            .order("particle_id", { ascending: true });

        if (error) {
            throw new Error("Gagal memeriksa partikel");
        }

        const { data: trackers, error: errorTracker } = await supabase
            .from("particles_tracker")
            .select("particle_id, status")
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
                ? trackers.find(
                      (tracker) => tracker.particle_id === data.particle_id
                  )
                : null;
            return {
                id: data.particle_id,
                romaji: data.romaji,
                particle_name: data.particle_name,
                description: data.description,
                example_sentence: data.example_sentence,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        const userCompletedParticles = trackers ? trackers.length : 0;
        const totalParticles = pagination.length;
        const totalPage = Math.ceil(pagination.length / pageSize);
        const havePrevious = page > 1 ? true : false;
        const haveNext = page < totalPage ? true : false;

        return res.status(200).json({
            error: false,
            message: "Berhasil mendapatkan data partikel",
            userCompletedParticles,
            totalParticles,
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
            message:
                err.message ||
                "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const hiraganaController = async (req, res) => {
    try {
        const { data: datas, error } = await supabase
            .from("hiragana")
            .select("*")
            .order("hiragana_id", { ascending: true });

        if (error) {
            throw new Error("Gagal memeriksa hiragana");
        }

        if (datas.length === 0 || !datas) {
            return res.status(404).json({
                error: true,
                message: "Tidak ada data hiragana yang ditemukan",
                data: null,
            });
        }

        const { data: trackers, error: errorTracker } = await supabase
            .from("hiragana_tracker")
            .select("hiragana_id, status")
            .eq("user_id", req.user.id);

        if (errorTracker) {
            throw new Error("Gagal memeriksa progress user");
        }

        const result = datas.map((data) => {
            const trackerItem = trackers
                ? trackers.find(
                      (tracker) => tracker.hiragana_id === data.hiragana_id
                  )
                : null;
            return {
                id: data.hiragana_id,
                character: data.character,
                romaji: data.romaji,
                type: data.type,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        const userCompletedHiragana = trackers ? trackers.length : 0;
        const totalHiragana = datas.length;

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
        const { data: datas, error } = await supabase
            .from("katakana")
            .select("*")
            .order("katakana_id", { ascending: true });

        if (error) {
            throw new Error("Gagal memeriksa katakana");
        }

        if (datas.length === 0 || !datas) {
            return res.status(404).json({
                error: true,
                message: "Tidak ada data katakana yang ditemukan",
                data: null,
            });
        }

        const { data: trackers, error: errorTracker } = await supabase
            .from("katakana_tracker")
            .select("katakana_id, status")
            .eq("user_id", req.user.id);

        if (errorTracker) {
            throw new Error("Gagal memeriksa progress user");
        }

        const result = datas.map((data) => {
            const trackerItem = trackers
                ? trackers.find(
                      (tracker) => tracker.katakana_id === data.katakana_id
                  )
                : null;
            return {
                id: data.katakana_id,
                character: data.character,
                romaji: data.romaji,
                type: data.type,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        const userCompletedKatakana = trackers ? trackers.length : 0;
        const totalKatakana = datas.length;

        return res.status(200).json({
            error: false,
            message: "Berhasil mendapatkan data katakana",
            userCompletedKatakana,
            totalKatakana,
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

const basicConversationController = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = 10;

        const { data: pagination, error: errorPagination } = await supabase
            .from("basic_conversation")
            .select("*");

        if (errorPagination) {
            throw new Error("Gagal memeriksa percakapan dasar");
        }

        const { data: datas, error } = await supabase
            .from("basic_conversation")
            .select("*")
            .range((page - 1) * pageSize, page * pageSize - 1)
            .order("basic_conversation_id", { ascending: true });

        if (error) {
            throw new Error("Gagal memeriksa partikel");
        }

        const { data: trackers, error: errorTracker } = await supabase
            .from("basic_conversation_tracker")
            .select("basic_conversation_id, status")
            .eq("user_id", req.user.id);

        if (errorTracker) {
            throw new Error("Gagal memeriksa progress user");
        }

        if (datas.length === 0 || !datas) {
            return res.status(404).json({
                error: true,
                message: "Tidak ada data percakapan dasar yang ditemukan",
                data: null,
            });
        }

        const result = datas.map((data) => {
            const trackerItem = trackers
                ? trackers.find(
                      (tracker) =>
                          tracker.basic_conversation_id ===
                          data.basic_conversation_id
                  )
                : null;
            return {
                id: data.basic_conversation_id,
                word: data.word,
                reading: data.reading,
                meaning: data.meaning,
                type: data.type,
                example_sentence: data.example_sentence,
                status: trackerItem ? trackerItem.status : false,
            };
        });

        const userCompletedBasicConversation = trackers ? trackers.length : 0;
        const totalBasicConversation = pagination.length;
        const totalPage = Math.ceil(pagination.length / pageSize);
        const havePrevious = page > 1 ? true : false;
        const haveNext = page < totalPage ? true : false;

        return res.status(200).json({
            error: false,
            message: "Berhasil mendapatkan data percakapan dasar",
            userCompletedBasicConversation,
            totalBasicConversation,
            pagination: {
                totalPage,
                pageNow: page,
                havePrevious,
                haveNext,
            },
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
