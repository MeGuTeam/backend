const router = require("express").Router();
const {
    hiraganaController,
    katakanaController,
    particleController,
} = require("../controllers/writingJpController");

router.get("/hiragana", hiraganaController);
router.get("/katakana", katakanaController);
router.get("/particle", particleController);

module.exports = router;
