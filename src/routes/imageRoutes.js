const router = require("express").Router();
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage });
const {
    uploadAvatarController,
    getAvatarController,
} = require("../controllers/imageController");
const middleware = require("../middleware/middleware");

router.post(
    "/upload",
    upload.single("avatar"),
    middleware,
    uploadAvatarController
);
router.get("/avatar/:userId", middleware, getAvatarController);

module.exports = router;
