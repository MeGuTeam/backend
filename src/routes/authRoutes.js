const router = require("express").Router();
const {
    registerAuth,
    loginAuth,
    changePasswordAuth,
} = require("../controllers/authController");
const middleware = require("../middleware/middleware");

router.post("/auth/register", registerAuth);
router.post("/auth/login", loginAuth);
router.post("/auth/change-password", middleware, changePasswordAuth);

module.exports = router;
