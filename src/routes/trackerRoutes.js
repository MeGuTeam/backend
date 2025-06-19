const router = require("express").Router();
const {
    particleTrackingUserController,
    hiraganaTrackingUserController,
    katakanaTrackingUserController,
    basicConversationTrackingUserController,
    kanjiN5TrackingUserController,
    adjectiveN5TrackingUserController,
    adverbN5TrackingUserController,
    verbN5TrackingUserController,
    nounActivityN5TrackingUserController,
    nounAnimalplantN5TrackingUserController,
    nounAuxnumberN5TrackingUserController,
    nounBodyN5TrackingUserController,
    nounCityN5TrackingUserController,
    nounColorN5TrackingUserController,
    nounFoodDrinkN5TrackingUserController,
    nounHomeAppliancesN5TrackingUserController,
    nounKosoadoN5TrackingUserController,
    nounMediaN5TrackingUserController,
    nounNaturalN5TrackingUserController,
    nounNumberN5TrackingUserController,
    nounOutfitN5TrackingUserController,
    nounPeopleN5TrackingUserController,
    nounPositionN5TrackingUserController,
    nounRegionN5TrackingUserController,
    nounSchoolN5TrackingUserController,
    nounTimeN5TrackingUserController,
    nounTrafficN5TrackingUserController,
    nounWorkN5TrackingUserController,
    questionWordN5TrackingUserController,
    conjunctionN5TrackingUserController,
} = require("../controllers/trackerN5Controller");
const middleware = require("../middleware/middleware");

router.post("/tracker/particle", middleware, particleTrackingUserController);
router.post("/tracker/hiragana", middleware, hiraganaTrackingUserController);
router.post("/tracker/katakana", middleware, katakanaTrackingUserController);
router.post(
    "/tracker/basic-conversation",
    middleware,
    basicConversationTrackingUserController
);

router.post("/tracker/kanji-n5", middleware, kanjiN5TrackingUserController);
router.post(
    "/tracker/adjective-n5",
    middleware,
    adjectiveN5TrackingUserController
);
router.post("/tracker/adverb-n5", middleware, adverbN5TrackingUserController);
router.post("/tracker/verb-n5", middleware, verbN5TrackingUserController);

router.post(
    "/tracker/noun-activity-n5",
    middleware,
    nounActivityN5TrackingUserController
);
router.post(
    "/tracker/noun-animalplant-n5",
    middleware,
    nounAnimalplantN5TrackingUserController
);
router.post(
    "/tracker/noun-auxnumber-n5",
    middleware,
    nounAuxnumberN5TrackingUserController
);
router.post(
    "/tracker/noun-body-n5",
    middleware,
    nounBodyN5TrackingUserController
);
router.post(
    "/tracker/noun-city-n5",
    middleware,
    nounCityN5TrackingUserController
);
router.post(
    "/tracker/noun-color-n5",
    middleware,
    nounColorN5TrackingUserController
);
router.post(
    "/tracker/noun-fooddrink-n5",
    middleware,
    nounFoodDrinkN5TrackingUserController
);
router.post(
    "/tracker/noun-homeappliances-n5",
    middleware,
    nounHomeAppliancesN5TrackingUserController
);
router.post(
    "/tracker/noun-kosoado-n5",
    middleware,
    nounKosoadoN5TrackingUserController
);
router.post(
    "/tracker/noun-media-n5",
    middleware,
    nounMediaN5TrackingUserController
);
router.post(
    "/tracker/noun-natural-n5",
    middleware,
    nounNaturalN5TrackingUserController
);
router.post(
    "/tracker/noun-number-n5",
    middleware,
    nounNumberN5TrackingUserController
);
router.post(
    "/tracker/noun-outfit-n5",
    middleware,
    nounOutfitN5TrackingUserController
);
router.post(
    "/tracker/noun-people-n5",
    middleware,
    nounPeopleN5TrackingUserController
);
router.post(
    "/tracker/noun-position-n5",
    middleware,
    nounPositionN5TrackingUserController
);
router.post(
    "/tracker/noun-region-n5",
    middleware,
    nounRegionN5TrackingUserController
);
router.post(
    "/tracker/noun-school-n5",
    middleware,
    nounSchoolN5TrackingUserController
);
router.post(
    "/tracker/noun-time-n5",
    middleware,
    nounTimeN5TrackingUserController
);
router.post(
    "/tracker/noun-traffic-n5",
    middleware,
    nounTrafficN5TrackingUserController
);
router.post(
    "/tracker/noun-work-n5",
    middleware,
    nounWorkN5TrackingUserController
);

router.post(
    "/tracker/question-word-n5",
    middleware,
    questionWordN5TrackingUserController
);

router.post(
    "/tracker/conjunction-n5",
    middleware,
    conjunctionN5TrackingUserController
);

module.exports = router;
