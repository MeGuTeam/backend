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
            .from("noun_activity_n5")
            .select("*")
            .order("noun_activity_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda aktivitas");
        }

        const datas = nounData.map((noun) => ({
            id: noun.noun_activity_id,
            reading: noun.reading,
            word: noun.word,
            meaning: noun.meaning,
            example_sentence: noun.example_sentence,
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

const nounAnimalplantN5Controller = async (req, res) => {
    try {
        const { data: nounData, error: fetchError } = await supabase
            .from("noun_animalplant_n5")
            .select("*")
            .order("noun_animalplant_id", { ascending: true });

        if (fetchError) {
            throw new Error(
                "Gagal mengambil data kata benda hewan dan tumbuhan"
            );
        }

        const datas = nounData.map((noun) => ({
            id: noun.noun_animalplant_id,
            reading: noun.reading,
            word: noun.word,
            meaning: noun.meaning,
            example_sentence: noun.example_sentence,
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

const nounAuxnumberN5Controller = async (req, res) => {
    try {
        const { data: nounData, error: fetchError } = await supabase
            .from("noun_auxnumber_n5")
            .select("*")
            .order("noun_auxnumber_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda angka");
        }

        const datas = nounData.map((noun) => ({
            id: noun.noun_auxnumber_id,
            reading: noun.reading,
            word: noun.word,
            meaning: noun.meaning,
            example_sentence: noun.example_sentence,
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

const nounBodyN5Controller = async (req, res) => {
    try {
        const { data: nounData, error: fetchError } = await supabase
            .from("noun_body_n5")
            .select("*")
            .order("noun_body_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda tubuh");
        }

        const datas = nounData.map((noun) => ({
            id: noun.noun_body_id,
            reading: noun.reading,
            word: noun.word,
            meaning: noun.meaning,
            example_sentence: noun.example_sentence,
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

const nounCityN5Controller = async (req, res) => {
    try {
        const { data: nounData, error: fetchError } = await supabase
            .from("noun_city_n5")
            .select("*")
            .order("noun_city_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda kota");
        }

        const datas = nounData.map((noun) => ({
            id: noun.noun_city_id,
            reading: noun.reading,
            word: noun.word,
            meaning: noun.meaning,
            example_sentence: noun.example_sentence,
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

const nounColorN5Controller = async (req, res) => {
    try {
        const { data: nounData, error: fetchError } = await supabase
            .from("noun_color_n5")
            .select("*")
            .order("noun_color_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda warna");
        }

        const datas = nounData.map((noun) => ({
            id: noun.noun_color_id,
            reading: noun.reading,
            word: noun.word,
            meaning: noun.meaning,
            example_sentence: noun.example_sentence,
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

const nounFoodDrinkN5Controller = async (req, res) => {
    try {
        const { data: nounData, error: fetchError } = await supabase
            .from("noun_fooddrink_n5")
            .select("*")
            .order("noun_fooddrink_id", { ascending: true });

        if (fetchError) {
            throw new Error(
                "Gagal mengambil data kata benda makanan dan minuman"
            );
        }

        const datas = nounData.map((noun) => ({
            id: noun.noun_fooddrink_id,
            reading: noun.reading,
            word: noun.word,
            meaning: noun.meaning,
            example_sentence: noun.example_sentence,
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

const nounHomeAppliancesN5Controller = async (req, res) => {
    try {
        const { data: nounData, error: fetchError } = await supabase
            .from("noun_homeappliances_n5")
            .select("*")
            .order("noun_homeappliances_id", { ascending: true });

        if (fetchError) {
            throw new Error(
                "Gagal mengambil data kata benda peralatan rumah tangga"
            );
        }

        const datas = nounData.map((noun) => ({
            id: noun.noun_homeappliances_id,
            reading: noun.reading,
            word: noun.word,
            meaning: noun.meaning,
            example_sentence: noun.example_sentence,
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

const nounKosoadoN5Controller = async (req, res) => {
    try {
        const { data: nounData, error: fetchError } = await supabase
            .from("noun_kosoado_n5")
            .select("*")
            .order("noun_kosoado_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda kosoado");
        }

        const datas = nounData.map((noun) => ({
            id: noun.noun_kosoado_id,
            reading: noun.reading,
            word: noun.word,
            meaning: noun.meaning,
            example_sentence: noun.example_sentence,
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

const nounMediaN5Controller = async (req, res) => {
    try {
        const { data: nounData, error: fetchError } = await supabase
            .from("noun_media_n5")
            .select("*")
            .order("noun_media_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda media");
        }

        const datas = nounData.map((noun) => ({
            id: noun.noun_media_id,
            reading: noun.reading,
            word: noun.word,
            meaning: noun.meaning,
            example_sentence: noun.example_sentence,
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

const nounNaturalN5Controller = async (req, res) => {
    try {
        const { data: nounData, error: fetchError } = await supabase
            .from("noun_natural_n5")
            .select("*")
            .order("noun_natural_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda alam");
        }

        const datas = nounData.map((noun) => ({
            id: noun.noun_natural_id,
            reading: noun.reading,
            word: noun.word,
            meaning: noun.meaning,
            example_sentence: noun.example_sentence,
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

const nounNumberN5Controller = async (req, res) => {
    try {
        const { data: nounData, error: fetchError } = await supabase
            .from("noun_number_n5")
            .select("*")
            .order("noun_number_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda angka");
        }

        const datas = nounData.map((noun) => ({
            id: noun.noun_number_id,
            reading: noun.reading,
            word: noun.word,
            meaning: noun.meaning,
            example_sentence: noun.example_sentence,
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

const nounOutfitN5Controller = async (req, res) => {
    try {
        const { data: nounData, error: fetchError } = await supabase
            .from("noun_outfit_n5")
            .select("*")
            .order("noun_outfit_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda pakaian");
        }

        const datas = nounData.map((noun) => ({
            id: noun.noun_outfit_id,
            reading: noun.reading,
            word: noun.word,
            meaning: noun.meaning,
            example_sentence: noun.example_sentence,
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

const nounPeopleN5Controller = async (req, res) => {
    try {
        const { data: nounData, error: fetchError } = await supabase
            .from("noun_people_n5")
            .select("*")
            .order("noun_people_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda orang");
        }

        const datas = nounData.map((noun) => ({
            id: noun.noun_people_id,
            reading: noun.reading,
            word: noun.word,
            meaning: noun.meaning,
            example_sentence: noun.example_sentence,
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

const nounPositionN5Controller = async (req, res) => {
    try {
        const { data: nounData, error: fetchError } = await supabase
            .from("noun_position_n5")
            .select("*")
            .order("noun_position_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda posisi");
        }

        const datas = nounData.map((noun) => ({
            id: noun.noun_position_id,
            reading: noun.reading,
            word: noun.word,
            meaning: noun.meaning,
            example_sentence: noun.example_sentence,
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

const nounRegionN5Controller = async (req, res) => {
    try {
        const { data: nounData, error: fetchError } = await supabase
            .from("noun_region_n5")
            .select("*")
            .order("noun_region_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda wilayah");
        }

        const datas = nounData.map((noun) => ({
            id: noun.noun_region_id,
            reading: noun.reading,
            word: noun.word,
            meaning: noun.meaning,
            example_sentence: noun.example_sentence,
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

const nounSchoolN5Controller = async (req, res) => {
    try {
        const { data: nounData, error: fetchError } = await supabase
            .from("noun_school_n5")
            .select("*")
            .order("noun_school_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda sekolah");
        }

        const datas = nounData.map((noun) => ({
            id: noun.noun_school_id,
            reading: noun.reading,
            word: noun.word,
            meaning: noun.meaning,
            example_sentence: noun.example_sentence,
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

const nounTimeN5Controller = async (req, res) => {
    try {
        const { data: nounData, error: fetchError } = await supabase
            .from("noun_time_n5")
            .select("*")
            .order("noun_time_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda waktu");
        }

        const datas = nounData.map((noun) => ({
            id: noun.noun_time_id,
            reading: noun.reading,
            word: noun.word,
            meaning: noun.meaning,
            example_sentence: noun.example_sentence,
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

const nounTrafficN5Controller = async (req, res) => {
    try {
        const { data: nounData, error: fetchError } = await supabase
            .from("noun_traffic_n5")
            .select("*")
            .order("noun_traffic_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda lalu lintas");
        }

        const datas = nounData.map((noun) => ({
            id: noun.noun_traffic_id,
            reading: noun.reading,
            word: noun.word,
            meaning: noun.meaning,
            example_sentence: noun.example_sentence,
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

const nounWorkN5Controller = async (req, res) => {
    try {
        const { data: nounData, error: fetchError } = await supabase
            .from("noun_work_n5")
            .select("*")
            .order("noun_work_id", { ascending: true });

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda pekerjaan");
        }

        const datas = nounData.map((noun) => ({
            id: noun.noun_work_id,
            reading: noun.reading,
            word: noun.word,
            meaning: noun.meaning,
            example_sentence: noun.example_sentence,
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

module.exports = {
    kanjiN5Controller,
    adjectiveN5Controller,
    adverbN5Controller,
    verbN5Controller,
    nounActivityN5Controller,
};
