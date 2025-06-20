const supabase = require("../config/supabase");

const profileController = async (req, res) => {
    try {
        const { profileId } = req.params;

        const { data: user, error } = await supabase
            .from("users")
            .select("*")
            .eq("user_id", profileId)
            .single();

        if (error) {
            throw new Error("Gagal mengambil data profil");
        }

        if (user.length === 0 || !user) {
            return res.status(404).json({
                error: true,
                message: "User tidak ditemukan",
                data: null,
            });
        }

        return res.status(200).json({
            error: false,
            message: "Data profil berhasil diambil",
            data: {
                username: user.username,
                profile_picture: user.profile_picture,
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

module.exports = {
    profileController,
};
