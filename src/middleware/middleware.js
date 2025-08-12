const jwt = require("jsonwebtoken");
require("dotenv").config();

const middleware = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Token missing",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = {
      id: decoded.user_id,
      username: decoded.username,
    };
    next();
  } catch (err) {
    return res.status(401).json({
      message: "Invalid or expired token",
      error: err.message,
    });
  }
};

module.exports = middleware;
