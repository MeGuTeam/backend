const router = require("express").Router();
const {
    particleController,
    hiraganaController,
    katakanaController,
    basicConversationController,
} = require("../controllers/basicSubjectController");
const middleware = require("../middleware/middleware");

router.get("/particle", middleware, particleController);
router.get("/hiragana", middleware, hiraganaController);
router.get("/katakana", middleware, katakanaController);
router.get("/basic-conversation", middleware, basicConversationController);

module.exports = router;
