const bcrypt = require("bcrypt");
const pool = require("../config/database");
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
        message: "Invalid input",
      });
    }

    if (!username || !password) {
      return res.status(400).json({
        error: true,
        message: "Username and password are required",
      });
    }

    if (username.length < 3 || password.length < 6) {
      return res.status(400).json({
        error: true,
        message:
          "Username must be at least 3 characters and password at least 6 characters",
      });
    }

    const existingUser = await pool.query(
      "SELECT * FROM users WHERE username = $1",
      [username]
    );

    if (existingUser.rows.length > 0) {
      return res.status(409).json({
        error: true,
        message: "Username already exists",
      });
    }

    const result = await pool.query(
      "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *",
      [username, hashedPassword]
    );

    res.status(201).json({
      error: false,
      message: "User registered successfully",
      user: result.rows[0],
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Error registering user",
      error: err.message,
    });
  }
};

const loginAuth = async (req, res) => {
  const { username, password } = req.body;

  try {
    if (!username || !password) {
      return res.status(400).json({
        error: true,
        message: "Username and password are required",
      });
    }
    const user = await pool.query("SELECT * FROM users WHERE username = $1", [
      username,
    ]);

    if (user.rows.length === 0) {
      return res.status(401).json({
        error: true,
        message: "Invalid username or password",
      });
    }

    const isMatch = await bcrypt.compare(password, user.rows[0].password);
    if (!isMatch) {
      return res.status(401).json({
        error: true,
        message: "Invalid password",
      });
    }

    const token = jwt.sign(
      { id: user.rows[0].id, username: user.rows[0].username },
      process.env.JWT_SECRET,
      { expiresIn: "12h" }
    );

    res.status(200).json({
      error: true,
      message: "Login successful",
      user: {
        id: user.rows[0].id,
        token,
        username: user.rows[0].username,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Error logging in",
      error: err.message,
    });
  }
};

const changePasswordAuth = async (req, res) => {
  const { user_id, oldPassword, newPassword } = req.body;

  try {
    if (!oldPassword || !newPassword) {
      return res.status(400).json({
        error: true,
        message: "Old password and new password are required",
      });
    }

    const user = await pool.query("SELECT * FROM users WHERE id = $1", [
      user_id,
    ]);

    if (user.rows.length === 0) {
      return res.status(404).json({
        error: true,
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(oldPassword, user.rows[0].password);
    if (!isMatch) {
      return res.status(401).json({
        error: true,
        message: "Invalid old password",
      });
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    await pool.query("UPDATE users SET password = $1 WHERE id = $2", [
      hashedPassword,
      user_id,
    ]);

    res.status(200).json({
      error: false,
      message: "Password changed successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Error changing password",
      error: err.message,
    });
  }
};

module.exports = { registerAuth, loginAuth, changePasswordAuth };
