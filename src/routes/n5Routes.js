const router = require("express").Router();
const {
    kanjiN5Controller,
    adjectiveN5Controller,
    adverbN5Controller,
    nounN5Controller,
    verbN5Controller,
} = require("../controllers/n5Controller");
const middleware = require("../middleware/middleware");

router.get("/kanjin5", middleware, kanjiN5Controller);
router.get("/adjectiven5", middleware, adjectiveN5Controller);
router.get("/adverbn5", middleware, adverbN5Controller);
router.get("/nounn5", middleware, nounN5Controller);
router.get("/verbn5", middleware, verbN5Controller);

module.exports = router;
