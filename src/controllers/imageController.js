const supabase = require("../config/supabase");

const uploadAvatarController = async (req, res) => {
    try {
        const { id } = req.user;
        const { file } = req;

        if (!file) {
            return res.status(400).json({
                error: true,
                message: "No file uploaded",
            });
        }

        const { data: user, error: fetchError } = await supabase
            .from("users")
            .select("user_id")
            .eq("user_id", id)
            .single();

        if (fetchError) {
            throw new Error("Gagal memeriksa user");
        }

        if (!user) {
            return res.status(404).json({
                error: true,
                message: "User tidak ditemukan",
                data: null,
            });
        }
        const originalName = file.originalname.split(".")[0];
        const typeFileName = file.mimetype.split("/")[1];
        const fileName = `${originalName}-${Date.now()}.${typeFileName}`;

        const { error: uploadError } = await supabase.storage
            .from("avatarbucket")
            .upload(`ikibannihongo/${fileName}`, file.buffer, {
                contentType: file.mimetype,
            });

        if (uploadError) {
            throw new Error("Gagal mengunggah gambar ke penyimpanan");
        }

        const imageUrl = `${process.env.SUPABASE_URL}/storage/v1/object/public/${process.env.BUCKET_AVATAR_PATH}/${fileName}`;

        const { error: updateError } = await supabase
            .from("users")
            .update({
                profile_picture: imageUrl,
            })
            .eq("user_id", id);

        if (updateError) {
            throw new Error("Gagal memperbarui profil pengguna");
        }

        return res.status(200).json({
            error: false,
            message: "Gambar profil berhasil diunggah",
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

const getAvatarController = async (req, res) => {
    try {
        const { id } = req.user;

        const { data: user, error: fetchError } = await supabase
            .from("users")
            .select("profile_picture")
            .eq("user_id", id)
            .single();

        if (fetchError) {
            throw new Error("Gagal memeriksa user");
        }

        if (user.length === 0) {
            return res.status(404).json({
                error: true,
                message: "User tidak ditemukan",
                data: null,
            });
        }

        const imageUrl = user.profile_picture || null;

        return res.status(200).json({
            error: false,
            message: "Gambar profil berhasil diambil",
            data: {
                imageUrl,
            },
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
    uploadAvatarController,
    getAvatarController,
};
