const numberController = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from("numbers")
            .select("*")
            .order("number_id", { ascending: true });

        if (error) {
            throw new Error("Gagal mengambil data angka");
        }

        const result = data.map((row) => ({
            id: row.number_id,
            reading: row.reading,
            word: row.word,
            meaning: row.meaning,
            example_sentence: row.example_sentence,
            type: row.type,
        }));

        return res.status(200).json({
            error: false,
            message: "Data angka berhasil diambil",
            data: result,
        });
    } catch (err) {
        console.error("Number fetch error:", err);
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

module.exports = {
    numberController,
};
