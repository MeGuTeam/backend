const router = require("express").Router();
const { profileController } = require("../controllers/profileController");
const middleware = require("../middleware/middleware");

router.get("/profile/:profileId", middleware, profileController);

module.exports = router;
