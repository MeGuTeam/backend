const supabase = require("../config/supabase");

const kanjiN5Controller = async (req, res) => {
    try {
        const { id } = req.user;

        const { data: kanjiData, error: fetchError } = await supabase
            .from("kanjis")
            .select("*")
            .eq("level_id", "5")
            .order("kanji_id", { ascending: true });

        const { data: tracker } = await supabase
            .from("kanjis_tracker")
            .select("kanji_id, status")
            .eq("user_id", id);

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

        const userCompletedKanjis = tracker ? tracker.length : 0;
        const totalKanjis = kanjiData.length;

        return res.status(200).json({
            error: false,
            message: "Data kanji berhasil diambil",
            userCompletedKanjis,
            totalKanjis,
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
        const { id } = req.user;

        const { data: adjectiveData, error: fetchError } = await supabase
            .from("adjectives")
            .select("*")
            .eq("level_id", "5")
            .order("adjective_id", { ascending: true });

        const { data: tracker } = await supabase
            .from("adjectives_tracker")
            .select("adjective_id, status")
            .eq("user_id", id);

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

        const userCompletedAdjectives = tracker ? tracker.length : 0;
        const totalAdjectives = adjectiveData.length;

        return res.status(200).json({
            error: false,
            message: "Data kata sifat berhasil diambil",
            userCompletedAdjectives,
            totalAdjectives,
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
        const { id } = req.user;

        const { data: adverbData, error: fetchError } = await supabase
            .from("other_words")
            .select("*")
            .eq("type", "adverb")
            .eq("level_id", "5")
            .order("other_word_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata keterangan");
        }

        const { data: tracker, error: trackerError } = await supabase
            .from("other_words_tracker")
            .select("other_word_id, status")
            .eq("user_id", id);

        if (trackerError) {
            throw new Error("Gagal mengambil data tracker kata keterangan");
        }

        const adverbIds = adverbData.map((adverb) => adverb.other_word_id);
        const userCompletedAdverbs = tracker
            ? tracker.filter((t) => adverbIds.includes(t.other_word_id)).length
            : 0;
        const totalAdverbs = adverbData.length;

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
            message: "Data kata keterangan berhasil diambil",
            userCompletedAdverbs,
            totalAdverbs,
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
        const { id } = req.user;

        const { data: verbData, error: fetchError } = await supabase
            .from("verbs")
            .select("*")
            .eq("level_id", "5")
            .order("verb_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata kerja");
        }

        const { data: tracker, error: trackerError } = await supabase
            .from("verbs_tracker")
            .select("verb_id, status")
            .eq("user_id", id);

        if (trackerError) {
            throw new Error("Gagal mengambil data tracker kata kerja");
        }

        const userCompletedVerbs = tracker ? tracker.length : 0;
        const totalVerbs = verbData.length;

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
            message: "Data kata kerja berhasil diambil",
            userCompletedVerbs,
            totalVerbs,
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
        const { id } = req.user;

        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "activity")
            .order("noun_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda aktivitas");
        }

        const { data: tracker, error: trackerError } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status")
            .eq("user_id", id);

        if (trackerError) {
            throw new Error(
                "Gagal mengambil data tracker kata benda aktivitas"
            );
        }

        const nounIds = nounData.map((noun) => noun.noun_id);
        const userCompletedNouns = tracker
            ? tracker.filter((t) => nounIds.includes(t.noun_id)).length
            : 0;
        const totalNouns = nounData.length;

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
            message: "Data kata benda aktivitas berhasil diambil",
            userCompletedNouns,
            totalNouns,
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
        const { id } = req.user;

        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "animalplant")
            .order("noun_id", { ascending: true });

        if (fetchError) {
            throw new Error(
                "Gagal mengambil data kata benda hewan dan tumbuhan"
            );
        }

        const { data: tracker, error: trackerError } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status")
            .eq("user_id", id);

        if (trackerError) {
            throw new Error(
                "Gagal mengambil data tracker kata benda hewan dan tumbuhan"
            );
        }

        const nounIds = nounData.map((noun) => noun.noun_id);
        const userCompletedNouns = tracker
            ? tracker.filter((t) => nounIds.includes(t.noun_id)).length
            : 0;
        const totalNouns = nounData.length;

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
            message: "Data kata benda hewan dan tumbuhan berhasil diambil",
            userCompletedNouns,
            totalNouns,
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
        const { id } = req.user;

        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "auxnumber")
            .order("noun_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda angka");
        }

        const { data: tracker, error: trackerError } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status")
            .eq("user_id", id);

        if (trackerError) {
            throw new Error("Gagal mengambil data tracker kata benda angka");
        }

        const nounsIds = nounData.map((noun) => noun.noun_id);
        const userCompletedNouns = tracker
            ? tracker.filter((t) => nounsIds.includes(t.noun_id)).length
            : 0;
        const totalNouns = nounData.length;

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
            message: "Data kata benda angka berhasil diambil",
            userCompletedNouns,
            totalNouns,
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
        const { id } = req.user;

        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "body")
            .order("noun_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda tubuh");
        }

        const { data: tracker, error: trackerError } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status")
            .eq("user_id", id);

        if (trackerError) {
            throw new Error("Gagal mengambil data tracker kata benda tubuh");
        }

        const nounIds = nounData.map((noun) => noun.noun_id);
        const userCompletedNouns = tracker
            ? tracker.filter((t) => nounIds.includes(t.noun_id)).length
            : 0;
        const totalNouns = nounData.length;

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
            message: "Data kata benda tubuh berhasil diambil",
            userCompletedNouns,
            totalNouns,
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
        const { id } = req.user;

        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "city")
            .order("noun_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda kota");
        }

        const { data: tracker, error: trackerError } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status")
            .eq("user_id", id);

        if (trackerError) {
            throw new Error("Gagal mengambil data tracker kata benda kota");
        }

        const nounIds = nounData.map((noun) => noun.noun_id);
        const userCompletedNouns = tracker
            ? tracker.filter((t) => nounIds.includes(t.noun_id)).length
            : 0;
        const totalNouns = nounData.length;

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
            message: "Data kata benda kota berhasil diambil",
            userCompletedNouns,
            totalNouns,
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
        const { id } = req.user;

        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "color")
            .order("noun_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda warna");
        }

        const { data: tracker, error: trackerError } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status")
            .eq("user_id", id);

        if (trackerError) {
            throw new Error("Gagal mengambil data tracker kata benda warna");
        }

        const nounIds = nounData.map((noun) => noun.noun_id);
        const userCompletedNouns = tracker
            ? tracker.filter((t) => nounIds.includes(t.noun_id)).length
            : 0;
        const totalNouns = nounData.length;

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
            message: "Data kata benda warna berhasil diambil",
            userCompletedNouns,
            totalNouns,
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
        const { id } = req.user;

        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "fooddrink")
            .order("noun_id", { ascending: true });

        if (fetchError) {
            throw new Error(
                "Gagal mengambil data kata benda makanan dan minuman"
            );
        }

        const { data: tracker, error: trackerError } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status")
            .eq("user_id", id);

        if (trackerError) {
            throw new Error(
                "Gagal mengambil data tracker kata benda makanan dan minuman"
            );
        }

        const nounIds = nounData.map((noun) => noun.noun_id);
        const userCompletedNouns = tracker
            ? tracker.filter((t) => nounIds.includes(t.noun_id)).length
            : 0;
        const totalNouns = nounData.length;

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
            message: "Data kata benda makanan dan minuman berhasil diambil",
            userCompletedNouns,
            totalNouns,
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
        const { id } = req.user;

        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "homeappliances")
            .order("noun_id", { ascending: true });

        if (fetchError) {
            throw new Error(
                "Gagal mengambil data kata benda peralatan rumah tangga"
            );
        }

        const { data: tracker, error: trackerError } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status")
            .eq("user_id", id);

        if (trackerError) {
            throw new Error(
                "Gagal mengambil data tracker kata benda peralatan rumah tangga"
            );
        }

        const nounIds = nounData.map((noun) => noun.noun_id);
        const userCompletedNouns = tracker
            ? tracker.filter((t) => nounIds.includes(t.noun_id)).length
            : 0;
        const totalNouns = nounData.length;

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
            message: "Data kata benda peralatan rumah tangga berhasil diambil",
            userCompletedNouns,
            totalNouns,
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
        const { id } = req.user;

        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "kosoado")
            .order("noun_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda kosoado");
        }

        const { data: tracker, error: trackerError } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status")
            .eq("user_id", id);

        if (trackerError) {
            throw new Error("Gagal mengambil data tracker kata benda kosoado");
        }

        const nounIds = nounData.map((noun) => noun.noun_id);
        const userCompletedNouns = tracker
            ? tracker.filter((t) => nounIds.includes(t.noun_id)).length
            : 0;
        const totalNouns = nounData.length;

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
            message: "Data kata benda kosoado berhasil diambil",
            userCompletedNouns,
            totalNouns,
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
        const { id } = req.user;

        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "media")
            .order("noun_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda media");
        }

        const { data: tracker, error: trackerError } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status")
            .eq("user_id", id);

        if (trackerError) {
            throw new Error("Gagal mengambil data tracker kata benda media");
        }

        const nounIds = nounData.map((noun) => noun.noun_id);
        const userCompletedNouns = tracker
            ? tracker.filter((t) => nounIds.includes(t.noun_id)).length
            : 0;
        const totalNouns = nounData.length;

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
            message: "Data kata benda media berhasil diambil",
            userCompletedNouns,
            totalNouns,
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
        const { id } = req.user;

        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "natural")
            .order("noun_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda alam");
        }

        const { data: tracker, error: trackerError } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status")
            .eq("user_id", id);

        if (trackerError) {
            throw new Error("Gagal mengambil data tracker kata benda alam");
        }

        const nounIds = nounData.map((noun) => noun.noun_id);
        const userCompletedNouns = tracker
            ? tracker.filter((t) => nounIds.includes(t.noun_id)).length
            : 0;
        const totalNouns = nounData.length;

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
            message: "Data kata benda alam berhasil diambil",
            userCompletedNouns,
            totalNouns,
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
        const { id } = req.user;

        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "number")
            .order("noun_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda angka");
        }

        const { data: tracker, error: trackerError } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status")
            .eq("user_id", id);

        if (trackerError) {
            throw new Error("Gagal mengambil data tracker kata benda angka");
        }

        const nounIds = nounData.map((noun) => noun.noun_id);
        const userCompletedNouns = tracker
            ? tracker.filter((t) => nounIds.includes(t.noun_id)).length
            : 0;
        const totalNouns = nounData.length;

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
            message: "Data kata benda angka berhasil diambil",
            userCompletedNouns,
            totalNouns,
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
        const { id } = req.user;

        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "outfit")
            .order("noun_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda pakaian");
        }

        const { data: tracker, error: trackerError } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status")
            .eq("user_id", id);

        if (trackerError) {
            throw new Error("Gagal mengambil data tracker kata benda pakaian");
        }

        const nounIds = nounData.map((noun) => noun.noun_id);
        const userCompletedNouns = tracker
            ? tracker.filter((t) => nounIds.includes(t.noun_id)).length
            : 0;
        const totalNouns = nounData.length;

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
            message: "Data kata benda pakaian berhasil diambil",
            userCompletedNouns,
            totalNouns,
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
        const { id } = req.user;

        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "people")
            .order("noun_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda orang");
        }

        const { data: tracker, error: trackerError } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status")
            .eq("user_id", id);

        if (trackerError) {
            throw new Error("Gagal mengambil data tracker kata benda orang");
        }

        const nounIds = nounData.map((noun) => noun.noun_id);
        const userCompletedNouns = tracker
            ? tracker.filter((t) => nounIds.includes(t.noun_id)).length
            : 0;
        const totalNouns = nounData.length;

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
            message: "Data kata benda orang berhasil diambil",
            userCompletedNouns,
            totalNouns,
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
        const { id } = req.user;

        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "position")
            .order("noun_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda posisi");
        }

        const { data: tracker, error: trackerError } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status")
            .eq("user_id", id);

        if (trackerError) {
            throw new Error("Gagal mengambil data tracker kata benda posisi");
        }

        const nounIds = nounData.map((noun) => noun.noun_id);
        const userCompletedNouns = tracker
            ? tracker.filter((t) => nounIds.includes(t.noun_id)).length
            : 0;
        const totalNouns = nounData.length;

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
            message: "Data kata benda posisi berhasil diambil",
            userCompletedNouns,
            totalNouns,
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
        const { id } = req.user;

        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "region")
            .order("noun_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda wilayah");
        }

        const { data: tracker, error: trackerError } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status")
            .eq("user_id", id);

        if (trackerError) {
            throw new Error("Gagal mengambil data tracker kata benda wilayah");
        }

        const nounIds = nounData.map((noun) => noun.noun_id);
        const userCompletedNouns = tracker
            ? tracker.filter((t) => nounIds.includes(t.noun_id)).length
            : 0;
        const totalNouns = nounData.length;

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
            message: "Data kata benda wilayah berhasil diambil",
            userCompletedNouns,
            totalNouns,
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
        const { id } = req.user;

        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "school")
            .order("noun_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda sekolah");
        }

        const { data: tracker, error: trackerError } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status")
            .eq("user_id", id);

        if (trackerError) {
            throw new Error("Gagal mengambil data tracker kata benda sekolah");
        }

        const nounIds = nounData.map((noun) => noun.noun_id);
        const userCompletedNouns = tracker
            ? tracker.filter((t) => nounIds.includes(t.noun_id)).length
            : 0;
        const totalNouns = nounData.length;

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
            message: "Data kata benda sekolah berhasil diambil",
            userCompletedNouns,
            totalNouns,
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
        const { id } = req.user;

        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "time")
            .order("noun_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda waktu");
        }

        const { data: tracker, error: trackerError } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status")
            .eq("user_id", id);

        if (trackerError) {
            throw new Error("Gagal mengambil data tracker kata benda waktu");
        }

        const nounIds = nounData.map((noun) => noun.noun_id);
        const userCompletedNouns = tracker
            ? tracker.filter((t) => nounIds.includes(t.noun_id)).length
            : 0;
        const totalNouns = nounData.length;

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
            message: "Data kata benda waktu berhasil diambil",
            userCompletedNouns,
            totalNouns,
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
        const { id } = req.user;

        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "traffic")
            .order("noun_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda lalu lintas");
        }

        const { data: tracker, error: trackerError } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status")
            .eq("user_id", id);

        if (trackerError) {
            throw new Error(
                "Gagal mengambil data tracker kata benda lalu lintas"
            );
        }

        const nounIds = nounData.map((noun) => noun.noun_id);
        const userCompletedNouns = tracker
            ? tracker.filter((t) => nounIds.includes(t.noun_id)).length
            : 0;
        const totalNouns = nounData.length;

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
            message: "Data kata benda lalu lintas berhasil diambil",
            userCompletedNouns,
            totalNouns,
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
        const { id } = req.user;

        const { data: nounData, error: fetchError } = await supabase
            .from("nouns")
            .select("*")
            .eq("type", "work")
            .order("noun_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda pekerjaan");
        }

        const { data: tracker, error: trackerError } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status")
            .eq("user_id", id);

        if (trackerError) {
            throw new Error(
                "Gagal mengambil data tracker kata benda pekerjaan"
            );
        }

        const nounIds = nounData.map((noun) => noun.noun_id);
        const userCompletedNouns = tracker
            ? tracker.filter((t) => nounIds.includes(t.noun_id)).length
            : 0;
        const totalNouns = nounData.length;

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
            message: "Data kata benda pekerjaan berhasil diambil",
            userCompletedNouns,
            totalNouns,
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
        const { id } = req.user;

        const { data: questionData, error: fetchError } = await supabase
            .from("other_words")
            .select("*")
            .eq("type", "question_word")
            .eq("level_id", "5")
            .order("other_word_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata tanya");
        }

        const { data: tracker, error: trackerError } = await supabase
            .from("other_words_tracker")
            .select("other_word_id, status")
            .eq("user_id", id);

        if (trackerError) {
            throw new Error("Gagal mengambil data tracker kata tanya");
        }

        const otherWordIds = questionData.map(
            (question) => question.other_word_id
        );
        const userCompletedQuestionWord = tracker
            ? tracker.filter((t) => otherWordIds.includes(t.other_word_id))
                  .length
            : 0;
        const totalQuestionWord = questionData.length;

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
            message: "Data kata tanya berhasil diambil",
            userCompletedQuestionWord,
            totalQuestionWord,
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
        const { id } = req.user;

        const { data: conjunctionData, error: fetchError } = await supabase
            .from("other_words")
            .select("*")
            .eq("type", "conjunction")
            .eq("level_id", "5")
            .order("other_word_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata hubung");
        }

        const { data: tracker, error: trackerError } = await supabase
            .from("other_words_tracker")
            .select("other_word_id, status")
            .eq("user_id", id);

        if (trackerError) {
            throw new Error("Gagal mengambil data tracker kata hubung");
        }

        const otherWordIds = conjunctionData.map(
            (conjunction) => conjunction.other_word_id
        );
        const userCompletedConjunction = tracker
            ? tracker.filter((t) => otherWordIds.includes(t.other_word_id))
                  .length
            : 0;
        const totalConjunction = conjunctionData.length;

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
            message: "Data kata hubung berhasil diambil",
            userCompletedConjunction,
            totalConjunction,
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
