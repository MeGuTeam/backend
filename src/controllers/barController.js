const supabase = require("../config/supabase");
const { getProgressInfo, nounTypeMapping } = require("../utils");

const homeBarController = async (req, res) => {
    try {
        const { id } = req.user;

        const [
            { data: adjectivesTrack, error: adjectivesTrackError },
            { data: adjectivesData, error: adjectivesDataError },
            {
                data: basicConversationTrack,
                error: basicConversationTrackError,
            },
            { data: basicConversationData, error: basicConversationDataError },
            { data: particlesTrack, error: particlesTrackError },
            { data: particlesData, error: particlesDataError },
            { data: kanjiTrack, error: kanjiTrackError },
            { data: kanjiDataN5, error: kanjiDataN5Error },
            { data: hiraganaTrack, error: hiraganaTrackError },
            { data: hiraganaData, error: hiraganaDataError },
            { data: katakanaTrack, error: katakanaTrackError },
            { data: katakanaData, error: katakanaDataError },
            { data: nounsTrack, error: nounsTrackError },
            { data: nounsData, error: nounsDataError },
            { data: verbsTrack, error: verbsTrackError },
            { data: verbsData, error: verbsDataError },
        ] = await Promise.all([
            supabase
                .from("adjectives_tracker")
                .select("adjective_id, status, updated_at")
                .eq("user_id", id),
            supabase.from("adjectives").select("adjective_id"),
            supabase
                .from("basic_conversation_tracker")
                .select("basic_conversation_id, status, updated_at")
                .eq("user_id", id),
            supabase.from("basic_conversation").select("basic_conversation_id"),
            supabase
                .from("particles_tracker")
                .select("particle_id, status, updated_at")
                .eq("user_id", id),
            supabase.from("particles").select("particle_id"),
            supabase
                .from("kanjis_tracker")
                .select("kanji_id, status, updated_at")
                .eq("user_id", id),
            supabase.from("kanjis").select("kanji_id").eq("level_id", 5),
            supabase
                .from("hiragana_tracker")
                .select("hiragana_id, status, updated_at")
                .eq("user_id", id),
            supabase.from("hiragana").select("hiragana_id"),
            supabase
                .from("katakana_tracker")
                .select("katakana_id, status, updated_at")
                .eq("user_id", id),
            supabase.from("katakana").select("katakana_id"),
            supabase
                .from("nouns_tracker")
                .select("noun_id, status, updated_at, nouns(type)")
                .eq("user_id", id),
            supabase.from("nouns").select("noun_id"),
            supabase
                .from("verbs_tracker")
                .select("verb_id, status, updated_at")
                .eq("user_id", id),
            supabase.from("verbs").select("verb_id"),
        ]);

        if (adjectivesTrackError)
            throw new Error("Gagal memeriksa tracker kata sifat");
        if (adjectivesDataError)
            throw new Error("Gagal mengambil data kata sifat");
        if (basicConversationTrackError)
            throw new Error("Gagal memeriksa tracker percakapan dasar");
        if (basicConversationDataError)
            throw new Error("Gagal mengambil data percakapan dasar");
        if (particlesTrackError)
            throw new Error("Gagal memeriksa tracker partikel");
        if (particlesDataError)
            throw new Error("Gagal mengambil data partikel");
        if (kanjiTrackError) throw new Error("Gagal memeriksa tracker kanji");
        if (kanjiDataN5Error) throw new Error("Gagal mengambil data kanji N5");
        if (hiraganaTrackError)
            throw new Error("Gagal memeriksa tracker hiragana");
        if (hiraganaDataError) throw new Error("Gagal mengambil data hiragana");
        if (katakanaTrackError)
            throw new Error("Gagal memeriksa tracker katakana");
        if (katakanaDataError) throw new Error("Gagal mengambil data katakana");
        if (nounsTrackError)
            throw new Error("Gagal memeriksa tracker kata benda");
        if (nounsDataError) throw new Error("Gagal mengambil data kata benda");
        if (verbsTrackError)
            throw new Error("Gagal memeriksa tracker kata kerja");
        if (verbsDataError) throw new Error("Gagal mengambil data kata kerja");

        const nounsProgress = getProgressInfo(nounsTrack, {
            relationTypeField: "nouns",
        });
        const nounsHref =
            nounsProgress.subCategory &&
            nounTypeMapping[nounsProgress.subCategory]
                ? `home/n5/${nounTypeMapping[nounsProgress.subCategory]}`
                : "home/n5/nouns";

        const progressList = [
            {
                type: "Kata Sifat",
                ...getProgressInfo(adjectivesTrack),
                href: "home/n5/adjectives",
                total: adjectivesData ? adjectivesData.length : 0,
            },
            {
                type: "Percakapan Dasar",
                ...getProgressInfo(basicConversationTrack),
                href: "home/bc",
                total: basicConversationData ? basicConversationData.length : 0,
            },
            {
                type: "Partikel",
                ...getProgressInfo(particlesTrack),
                href: "home/particle",
                total: particlesData ? particlesData.length : 0,
            },
            {
                type: "Kanji",
                ...getProgressInfo(kanjiTrack),
                href: "home/n5/kanji-n5",
                total: kanjiDataN5 ? kanjiDataN5.length : 0,
            },
            {
                type: "Hiragana",
                ...getProgressInfo(hiraganaTrack),
                href: "home/hiragana",
                total: hiraganaData ? hiraganaData.length : 0,
            },
            {
                type: "Katakana",
                ...getProgressInfo(katakanaTrack),
                href: "home/katakana",
                total: katakanaData ? katakanaData.length : 0,
            },
            {
                type: "Kata Benda",
                ...nounsProgress,
                href: nounsHref,
                total: nounsData ? nounsData.length : 0,
            },
            {
                type: "Kata Kerja",
                ...getProgressInfo(verbsTrack),
                href: "home/n5/verbs",
                total: verbsData ? verbsData.length : 0,
            },
        ];

        const progressWithActivity = progressList.filter((p) => p.lastProgress);
        let lastActivity = null;
        if (progressWithActivity.length > 0) {
            lastActivity = progressWithActivity.reduce((latest, curr) => {
                return new Date(curr.lastProgress) >
                    new Date(latest.lastProgress)
                    ? curr
                    : latest;
            });
            lastActivity = {
                type: lastActivity.type,
                finished: lastActivity.finished,
                total: lastActivity.total,
                lastProgress: lastActivity.lastProgress,
                href: lastActivity.href,
                subCategory: lastActivity.subCategory,
            };
        }

        return res.status(200).json({
            error: false,
            message: "Berhasil mengambil data",
            data: {
                lastActivity,
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

module.exports = { homeBarController };
