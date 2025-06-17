const router = require("express").Router();
const {
    kanjiN5Controller,
    adjectiveN5Controller,
    adverbN5Controller,
    verbN5Controller,
} = require("../controllers/n5Controller");
const middleware = require("../middleware/middleware");

router.get("/kanji-n5", middleware, kanjiN5Controller);
router.get("/adjective-n5", middleware, adjectiveN5Controller);
router.get("/adverb-n5", middleware, adverbN5Controller);
router.get("/verb-n5", middleware, verbN5Controller);

module.exports = router;
