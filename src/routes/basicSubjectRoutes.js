const router = require("express").Router();
const {
    particleController,
    particleDetailsController,
    hiraganaController,
    katakanaController,
    basicConversationController,
    basicConversationDetailsController,
} = require("../controllers/basicSubjectController");
const middleware = require("../middleware/middleware");

router.get("/particle", middleware, particleController);
router.get("/particle/details", middleware, particleDetailsController);
router.get("/hiragana", middleware, hiraganaController);
router.get("/katakana", middleware, katakanaController);
router.get("/basic-conversation", middleware, basicConversationController);
router.get(
    "/basic-conversation/details",
    middleware,
    basicConversationDetailsController
);

module.exports = router;
