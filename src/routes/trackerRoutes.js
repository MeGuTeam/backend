const router = require("express").Router();
const {
    particleTrackingUserController,
    hiraganaTrackingUserController,
    katakanaTrackingUserController,
    basicConversationTrackingUserController,
    kanjiTrackingUserController,
    adjectiveTrackingUserController,
    adverbTrackingUserController,
    verbTrackingUserController,
    nounActivityTrackingUserController,
    nounAnimalplantTrackingUserController,
    nounAuxnumberTrackingUserController,
    nounBodyTrackingUserController,
    nounCityTrackingUserController,
    nounColorTrackingUserController,
    nounFoodDrinkTrackingUserController,
    nounHomeAppliancesTrackingUserController,
    nounKosoadoTrackingUserController,
    nounMediaTrackingUserController,
    nounNaturalTrackingUserController,
    nounNumberTrackingUserController,
    nounOutfitTrackingUserController,
    nounPeopleTrackingUserController,
    nounPositionTrackingUserController,
    nounRegionTrackingUserController,
    nounSchoolTrackingUserController,
    nounTimeTrackingUserController,
    nounTrafficTrackingUserController,
    nounWorkTrackingUserController,
    questionWordTrackingUserController,
    conjunctionTrackingUserController,
} = require("../controllers/trackerController");
const middleware = require("../middleware/middleware");

router.post("/tracker/particle", middleware, particleTrackingUserController);
router.post("/tracker/hiragana", middleware, hiraganaTrackingUserController);
router.post("/tracker/katakana", middleware, katakanaTrackingUserController);
router.post(
    "/tracker/basic-conversation",
    middleware,
    basicConversationTrackingUserController
);

router.post("/tracker/kanji", middleware, kanjiTrackingUserController);
router.post("/tracker/adjective", middleware, adjectiveTrackingUserController);
router.post("/tracker/adverb", middleware, adverbTrackingUserController);
router.post("/tracker/verb", middleware, verbTrackingUserController);

router.post(
    "/tracker/noun-activity",
    middleware,
    nounActivityTrackingUserController
);
router.post(
    "/tracker/noun-animalplant",
    middleware,
    nounAnimalplantTrackingUserController
);
router.post(
    "/tracker/noun-auxnumber",
    middleware,
    nounAuxnumberTrackingUserController
);
router.post("/tracker/noun-body", middleware, nounBodyTrackingUserController);
router.post("/tracker/noun-city", middleware, nounCityTrackingUserController);
router.post("/tracker/noun-color", middleware, nounColorTrackingUserController);
router.post(
    "/tracker/noun-fooddrink",
    middleware,
    nounFoodDrinkTrackingUserController
);
router.post(
    "/tracker/noun-homeappliances",
    middleware,
    nounHomeAppliancesTrackingUserController
);
router.post(
    "/tracker/noun-kosoado",
    middleware,
    nounKosoadoTrackingUserController
);
router.post("/tracker/noun-media", middleware, nounMediaTrackingUserController);
router.post(
    "/tracker/noun-natural",
    middleware,
    nounNaturalTrackingUserController
);
router.post(
    "/tracker/noun-number",
    middleware,
    nounNumberTrackingUserController
);
router.post(
    "/tracker/noun-outfit",
    middleware,
    nounOutfitTrackingUserController
);
router.post(
    "/tracker/noun-people",
    middleware,
    nounPeopleTrackingUserController
);
router.post(
    "/tracker/noun-position",
    middleware,
    nounPositionTrackingUserController
);
router.post(
    "/tracker/noun-region",
    middleware,
    nounRegionTrackingUserController
);
router.post(
    "/tracker/noun-school",
    middleware,
    nounSchoolTrackingUserController
);
router.post("/tracker/noun-time", middleware, nounTimeTrackingUserController);
router.post(
    "/tracker/noun-traffic",
    middleware,
    nounTrafficTrackingUserController
);
router.post("/tracker/noun-work", middleware, nounWorkTrackingUserController);

router.post(
    "/tracker/question-word",
    middleware,
    questionWordTrackingUserController
);

router.post(
    "/tracker/conjunction",
    middleware,
    conjunctionTrackingUserController
);

module.exports = router;
