const router = require("express").Router();
const {
    particleController,
    hiraganaController,
    katakanaController,
    basicConversationController,
    questionWordController,
} = require("../controllers/basicSubjectController");
const middleware = require("../middleware/middleware");

router.get("/particle", middleware, particleController);
router.get("/hiragana", middleware, hiraganaController);
router.get("/katakana", middleware, katakanaController);
router.get("/basic-conversation", middleware, basicConversationController);
router.get("/question-word-n5", middleware, questionWordController);

module.exports = router;
