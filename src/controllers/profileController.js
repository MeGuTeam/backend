const supabase = require("../config/supabase");

const profileController = async (req, res) => {
    try {
        const { profileId } = req.params;

        console.log("Fetching profile for ID:", profileId);

        const { data: user, error } = await supabase
            .from("users")
            .select("*")
            .eq("user_id", profileId)
            .single();

        console.log(error);

        if (error) {
            throw new Error("Gagal mengambil data profil");
        }

        if (!user) {
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
                user_id: user.user_id,
                username: user.username,
                profile_picture: user.profile_picture,
            },
        });
    } catch (err) {
        console.error("Profile fetch error:", err);
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

module.exports = {
    profileController,
};
