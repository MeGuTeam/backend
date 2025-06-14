const jwt = require("jsonwebtoken");
require("dotenv").config();

const middleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({
            message: "Authorization header missing or invalid",
        });
    }
    const token = authHeader.split(" ")[1];
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
