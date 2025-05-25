const router = require("express").Router();
const {
    registerAuth,
    loginAuth,
    changePasswordAuth,
} = require("../controllers/authController");
const middleware = require("../middleware/middleware");

router.post("/register", registerAuth);
router.post("/login", loginAuth);
router.post("/change-password", middleware, changePasswordAuth);

module.exports = router;
