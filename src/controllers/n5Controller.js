const supabase = require("../config/supabase");

const kanjiN5Controller = async (req, res) => {
    try {
        const { data: kanjiData, error: fetchError } = await supabase
            .from("kanji_n5")
            .select("*")
            .order("kanji_id", { ascending: true });

        const { data: tracker } = await supabase
            .from("tracker")
            .select("kanji_n5_id, status")
            .eq("user_id", req.user.id);

        if (fetchError) {
            throw new Error("Gagal mengambil data kanji");
        }

        const datas = kanjiData.map((kanji) => {
            const trackerItem = tracker
                ? tracker.find((t) => t.kanji_n5_id === kanji.kanji_id)
                : null;
            return {
                id: kanji.kanji_id,
                character: kanji.character,
                onyomi: kanji.onyomi,
                kunyomi: kanji.kunyomi,
                meaning: kanji.meaning,
                status: trackerItem ? trackerItem.status : false,
            };
        });

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

        const { data: tracker } = await supabase
            .from("tracker")
            .select("adjective_n5_id, status")
            .eq("user_id", req.user.id);

        if (fetchError) {
            throw new Error("Gagal mengambil data kata sifat");
        }

        const datas = adjectiveData.map((adjective) => {
            const trackerItem = tracker
                ? tracker.find(
                      (t) => t.adjective_n5_id === adjective.adjective_id
                  )
                : null;
            return {
                id: adjective.adjective_id,
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

        const { data: tracker } = await supabase
            .from("tracker")
            .select("adverb_n5_id, status")
            .eq("user_id", req.user.id);

        if (fetchError) {
            throw new Error("Gagal mengambil data kata keterangan");
        }

        const datas = adverbData.map((adverb) => {
            const trackerItem = tracker
                ? tracker.find((t) => t.adverb_n5_id === adverb.adverb_id)
                : null;
            return {
                id: adverb.adverb_id,
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

        const { data: tracker } = await supabase
            .from("tracker")
            .select("verb_n5_id, status")
            .eq("user_id", req.user.id);

        if (fetchError) {
            throw new Error("Gagal mengambil data kata kerja");
        }

        const datas = verbData.map((verb) => {
            const trackerItem = tracker
                ? tracker.find((t) => t.verb_n5_id === verb.verb_id)
                : null;
            return {
                id: verb.verb_id,
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

        const { data: tracker } = await supabase
            .from("tracker")
            .select("noun_activity_n5_id, status")
            .eq("user_id", req.user.id);

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda aktivitas");
        }

        const datas = nounData.map((noun) => {
            const trackerItem = tracker
                ? tracker.find(
                      (t) => t.noun_activity_n5_id === noun.noun_activity_id
                  )
                : null;
            return {
                id: noun.noun_activity_id,
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

        const { data: tracker } = await supabase
            .from("tracker")
            .select("noun_animalplant_n5_id, status")
            .eq("user_id", req.user.id);

        if (fetchError) {
            throw new Error(
                "Gagal mengambil data kata benda hewan dan tumbuhan"
            );
        }

        const datas = nounData.map((noun) => {
            const trackerItem = tracker
                ? tracker.find(
                      (t) =>
                          t.noun_animalplant_n5_id === noun.noun_animalplant_id
                  )
                : null;
            return {
                id: noun.noun_animalplant_id,
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

        const { data: tracker } = await supabase
            .from("tracker")
            .select("noun_auxnumber_n5_id, status")
            .eq("user_id", req.user.id);

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda angka");
        }

        const datas = nounData.map((noun) => {
            const trackerItem = tracker
                ? tracker.find(
                      (t) => t.noun_auxnumber_n5_id === noun.noun_auxnumber_id
                  )
                : null;
            return {
                id: noun.noun_auxnumber_id,
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

        const { data: tracker } = await supabase
            .from("tracker")
            .select("noun_body_n5_id, status")
            .eq("user_id", req.user.id);

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda tubuh");
        }

        const datas = nounData.map((noun) => {
            const trackerItem = tracker
                ? tracker.find((t) => t.noun_body_n5_id === noun.noun_body_id)
                : null;
            return {
                id: noun.noun_body_id,
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

        const { data: tracker } = await supabase
            .from("tracker")
            .select("noun_city_n5_id, status")
            .eq("user_id", req.user.id);

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda kota");
        }

        const datas = nounData.map((noun) => {
            const trackerItem = tracker
                ? tracker.find((t) => t.noun_city_n5_id === noun.noun_city_id)
                : null;
            return {
                id: noun.noun_city_id,
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

        const { data: tracker } = await supabase
            .from("tracker")
            .select("noun_color_n5_id, status")
            .eq("user_id", req.user.id);

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda warna");
        }

        const datas = nounData.map((noun) => {
            const trackerItem = tracker
                ? tracker.find((t) => t.noun_color_n5_id === noun.noun_color_id)
                : null;
            return {
                id: noun.noun_color_id,
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

        const { data: tracker } = await supabase
            .from("tracker")
            .select("noun_fooddrink_n5_id, status")
            .eq("user_id", req.user.id);

        if (fetchError) {
            throw new Error(
                "Gagal mengambil data kata benda makanan dan minuman"
            );
        }

        const datas = nounData.map((noun) => {
            const trackerItem = tracker
                ? tracker.find(
                      (t) => t.noun_fooddrink_n5_id === noun.noun_fooddrink_id
                  )
                : null;
            return {
                id: noun.noun_fooddrink_id,
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

        const { data: tracker } = await supabase
            .from("tracker")
            .select("noun_homeappliances_n5_id, status")
            .eq("user_id", req.user.id);

        if (fetchError) {
            throw new Error(
                "Gagal mengambil data kata benda peralatan rumah tangga"
            );
        }

        const datas = nounData.map((noun) => {
            const trackerItem = tracker
                ? tracker.find(
                      (t) =>
                          t.noun_homeappliances_n5_id ===
                          noun.noun_homeappliances_id
                  )
                : null;
            return {
                id: noun.noun_homeappliances_id,
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

        const { data: tracker } = await supabase
            .from("tracker")
            .select("noun_kosoado_n5_id, status")
            .eq("user_id", req.user.id);
        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda kosoado");
        }

        const datas = nounData.map((noun) => {
            const trackerItem = tracker
                ? tracker.find(
                      (t) => t.noun_kosoado_n5_id === noun.noun_kosoado_id
                  )
                : null;
            return {
                id: noun.noun_kosoado_id,
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

        const { data: tracker } = await supabase
            .from("tracker")
            .select("noun_media_n5_id, status")
            .eq("user_id", req.user.id);
        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda media");
        }

        const datas = nounData.map((noun) => {
            const trackerItem = tracker
                ? tracker.find((t) => t.noun_media_n5_id === noun.noun_media_id)
                : null;
            return {
                id: noun.noun_media_id,
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

        const { data: tracker } = await supabase
            .from("tracker")
            .select("noun_natural_n5_id, status")
            .eq("user_id", req.user.id);
        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda alam");
        }

        const datas = nounData.map((noun) => {
            const trackerItem = tracker
                ? tracker.find(
                      (t) => t.noun_natural_n5_id === noun.noun_natural_id
                  )
                : null;
            return {
                id: noun.noun_natural_id,
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

        const { data: tracker } = await supabase
            .from("tracker")
            .select("noun_number_n5_id, status")
            .eq("user_id", req.user.id);
        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda angka");
        }

        const datas = nounData.map((noun) => {
            const trackerItem = tracker
                ? tracker.find(
                      (t) => t.noun_number_n5_id === noun.noun_number_id
                  )
                : null;
            return {
                id: noun.noun_number_id,
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

        const { data: tracker } = await supabase
            .from("tracker")
            .select("noun_outfit_n5_id, status")
            .eq("user_id", req.user.id);

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda pakaian");
        }
        const datas = nounData.map((noun) => {
            const trackerItem = tracker
                ? tracker.find(
                      (t) => t.noun_outfit_n5_id === noun.noun_outfit_id
                  )
                : null;
            return {
                id: noun.noun_outfit_id,
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

        const { data: tracker } = await supabase
            .from("tracker")
            .select("noun_people_n5_id, status")
            .eq("user_id", req.user.id);

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda orang");
        }
        const datas = nounData.map((noun) => {
            const trackerItem = tracker
                ? tracker.find(
                      (t) => t.noun_people_n5_id === noun.noun_people_id
                  )
                : null;
            return {
                id: noun.noun_people_id,
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

        const { data: tracker } = await supabase
            .from("tracker")
            .select("noun_position_n5_id, status")
            .eq("user_id", req.user.id);

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda posisi");
        }
        const datas = nounData.map((noun) => {
            const trackerItem = tracker
                ? tracker.find(
                      (t) => t.noun_position_n5_id === noun.noun_position_id
                  )
                : null;
            return {
                id: noun.noun_position_id,
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

        const { data: tracker } = await supabase
            .from("tracker")
            .select("noun_region_n5_id, status")
            .eq("user_id", req.user.id);

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda wilayah");
        }
        const datas = nounData.map((noun) => {
            const trackerItem = tracker
                ? tracker.find(
                      (t) => t.noun_region_n5_id === noun.noun_region_id
                  )
                : null;
            return {
                id: noun.noun_region_id,
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

        const { data: tracker } = await supabase
            .from("tracker")
            .select("noun_school_n5_id, status")
            .eq("user_id", req.user.id);

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda sekolah");
        }
        const datas = nounData.map((noun) => {
            const trackerItem = tracker
                ? tracker.find(
                      (t) => t.noun_school_n5_id === noun.noun_school_id
                  )
                : null;
            return {
                id: noun.noun_school_id,
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

        const { data: tracker } = await supabase
            .from("tracker")
            .select("noun_time_n5_id, status")
            .eq("user_id", req.user.id);

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda waktu");
        }
        const datas = nounData.map((noun) => {
            const trackerItem = tracker
                ? tracker.find((t) => t.noun_time_n5_id === noun.noun_time_id)
                : null;
            return {
                id: noun.noun_time_id,
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

        const { data: tracker } = await supabase
            .from("tracker")
            .select("noun_traffic_n5_id, status")
            .eq("user_id", req.user.id);

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda lalu lintas");
        }
        const datas = nounData.map((noun) => {
            const trackerItem = tracker
                ? tracker.find(
                      (t) => t.noun_traffic_n5_id === noun.noun_traffic_id
                  )
                : null;
            return {
                id: noun.noun_traffic_id,
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

        const { data: tracker } = await supabase
            .from("tracker")
            .select("noun_work_n5_id, status")
            .eq("user_id", req.user.id);

        if (fetchError) {
            throw new Error("Gagal mengambil data kata benda pekerjaan");
        }
        const datas = nounData.map((noun) => {
            const trackerItem = tracker
                ? tracker.find((t) => t.noun_work_n5_id === noun.noun_work_id)
                : null;
            return {
                id: noun.noun_work_id,
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
            .from("question_word_n5")
            .select("*")
            .order("question_word_id", { ascending: true });

        const { data: tracker } = await supabase
            .from("tracker")
            .select("question_word_n5_id, status")
            .eq("user_id", req.user.id);

        if (fetchError) {
            throw new Error("Gagal mengambil data kata tanya");
        }

        const datas = questionData.map((question) => {
            const trackerItem = tracker
                ? tracker.find(
                      (t) => t.question_word_n5_id === question.question_word_id
                  )
                : null;
            return {
                id: question.question_word_id,
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
};
