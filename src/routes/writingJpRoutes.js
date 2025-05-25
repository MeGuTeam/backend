const router = require("express").Router();
const {
    hiraganaController,
    katakanaController,
    particleController,
} = require("../controllers/writingJpController");
const middleware = require("../middleware/middleware");

router.get("/hiragana", middleware, hiraganaController);
router.get("/katakana", middleware, katakanaController);

module.exports = router;
