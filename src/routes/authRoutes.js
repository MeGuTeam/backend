const router = require("express").Router();
const {
  registerAuth,
  loginAuth,
  changePasswordAuth,
  logoutAuth,
} = require("../controllers/authController");
const middleware = require("../middleware/middleware");

router.post("/auth/register", registerAuth);
router.post("/auth/login", loginAuth);
router.post("/change-password", middleware, changePasswordAuth);
router.post("/logout", middleware, logoutAuth);

module.exports = router;
