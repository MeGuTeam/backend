const bcrypt = require("bcrypt");
const supabase = require("../config/supabase");
const jwt = require("jsonwebtoken");
const validateInput = require("../utils/validateInput");

const registerAuth = async (req, res) => {
    const { username, password } = req.body;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
        if (!validateInput(username) || !validateInput(password)) {
            return res.status(400).json({
                error: true,
                message: "Inputan tidak valid",
                data: null,
            });
        }

        if (!username || !password) {
            return res.status(400).json({
                error: true,
                message: "Username dan password tidak boleh kosong",
                data: null,
            });
        }

        if (username.length < 6 || password.length < 8) {
            return res.status(400).json({
                error: true,
                message:
                    "Username minimal 6 karakter dan password minimal 8 karakter",
                data: null,
            });
        }

        const { data: existingUser, error: fetchError } = await supabase
            .from("users")
            .select("*")
            .eq("username", username);

        if (fetchError) {
            throw new Error("Gagal memeriksa username");
        }

        if (existingUser.data) {
            return res.status(400).json({
                error: true,
                message: "Username sudah terdaftar",
                data: null,
            });
        }

        const { error: insertError } = await supabase
            .from("users")
            .insert([
                {
                    username,
                    password: hashedPassword,
                },
            ])
            .select();

        if (insertError) {
            throw new Error("Gagal menyimpan user");
        }

        return res.status(201).json({
            error: false,
            message: "Berhasil mendaftar",
        });
    } catch (err) {
        res.status(500).json({
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            error: err,
            data: null,
        });
    }
};

const loginAuth = async (req, res) => {
    const { username, password } = req.body;

    try {
        if (!username || !password) {
            return res.status(400).json({
                error: true,
                message: "Username dan password tidak boleh kosong",
                data: null,
            });
        }

        const { data: user, error: fetchError } = await supabase
            .from("users")
            .select("user_id, username, password, profile_picture")
            .eq("username", username)
            .single();

        if (fetchError) {
            throw new Error("Gagal memeriksa username");
        }

        if (!user) {
            return res.status(401).json({
                error: true,
                message: "Username tidak terdaftar",
                data: null,
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                error: true,
                message: "Password salah",
                data: null,
            });
        }

        const token = jwt.sign(
            { user_id: user.user_id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: "12h" }
        );

        return res.status(200).json({
            error: false,
            message: "Login berhasil!",
            data: {
                id: user.user_id,
                username: user.username,
                profile_picture: user.profile_picture || null,
                token,
            },
        });
    } catch (err) {
        console.error("Login error:", err);
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const changePasswordAuth = async (req, res) => {
    const { oldPassword, newPassword } = req.body;
    const { id } = req.user;

    try {
        if (!oldPassword || !newPassword) {
            return res.status(400).json({
                error: true,
                message: "Password lama dan baru tidak boleh kosong",
                data: null,
            });
        }

        const { data: user, error: fetchError } = await supabase
            .from("users")
            .select("user_id, password")
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

        const isMatch = await bcrypt.compare(oldPassword, user.password);
        if (!isMatch) {
            return res.status(401).json({
                error: true,
                message: "Password lama salah",
                data: null,
            });
        }

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        const { error: updateError } = await supabase
            .from("users")
            .update({
                password: hashedPassword,
                updated_at: new Date().toISOString(),
            })
            .eq("user_id", id);

        if (updateError) {
            throw new Error("Gagal memperbarui password");
        }

        return res.status(200).json({
            error: false,
            message: "Password berhasil diubah",
            data: null,
        });
    } catch (error) {
        console.error("Change password error:", error);
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

module.exports = { registerAuth, loginAuth, changePasswordAuth };
