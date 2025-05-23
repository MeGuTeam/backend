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
            character: row.character,
            romaji: row.romaji,
            type: row.type,
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

module.exports = {
    particleController,
};
