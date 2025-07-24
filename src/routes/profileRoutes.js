const router = require("express").Router();
const {
    profileController,
    navbarProfileController,
} = require("../controllers/profileController");
const middleware = require("../middleware/middleware");

router.get("/profile/:profileId", middleware, profileController);
router.get("/navbar-profile", middleware, navbarProfileController);

module.exports = router;
