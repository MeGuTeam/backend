const router = require("express").Router();
const {
  registerAuth,
  loginAuth,
  changePasswordAuth,
} = require("../controllers/authController");

router.post("/register", registerAuth);
router.post("/login", loginAuth);
router.post("/change-password", changePasswordAuth);

module.exports = router;
