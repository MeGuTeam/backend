const router = require("express").Router();
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage });
const { uploadAvatarController } = require("../controllers/imageController");
const middleware = require("../middleware/middleware");

router.post(
    "/upload/avatar",
    upload.single("avatar"),
    middleware,
    uploadAvatarController
);

module.exports = router;
