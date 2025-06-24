const router = require("express").Router();
const {
    kanjiN5Controller,
    kanjiN5DetailsController,
    adjectiveN5Controller,
    adjectiveN5DetailsController,
    adverbN5Controller,
    adverbN5DetailsController,
    verbN5Controller,
    verbN5DetailsController,
    nounActivityN5Controller,
    nounActivityN5DetailsController,
    nounAnimalplantN5Controller,
    nounAnimalplantN5DetailsController,
    nounAuxnumberN5Controller,
    nounAuxnumberN5DetailsController,
    nounBodyN5Controller,
    nounBodyN5DetailsController,
    nounCityN5Controller,
    nounCityN5DetailsController,
    nounColorN5Controller,
    nounColorN5DetailsController,
    nounFoodDrinkN5Controller,
    nounFoodDrinkN5DetailsController,
    nounHomeAppliancesN5Controller,
    nounHomeAppliancesN5DetailsController,
    nounKosoadoN5Controller,
    nounKosoadoN5DetailsController,
    nounMediaN5Controller,
    nounMediaN5DetailsController,
    nounNaturalN5Controller,
    nounNaturalN5DetailsController,
    nounNumberN5Controller,
    nounNumberN5DetailsController,
    nounOutfitN5Controller,
    nounOutfitN5DetailsController,
    nounPeopleN5Controller,
    nounPeopleN5DetailsController,
    nounPositionN5Controller,
    nounPositionN5DetailsController,
    nounRegionN5Controller,
    nounRegionN5DetailsController,
    nounSchoolN5Controller,
    nounSchoolN5DetailsController,
    nounTimeN5Controller,
    nounTimeN5DetailsController,
    nounTrafficN5Controller,
    nounTrafficN5DetailsController,
    nounWorkN5Controller,
    nounWorkN5DetailsController,
    questionWordController,
    questionWordN5DetailsController,
    conjunctionN5Controller,
    conjunctionN5DetailsController,
} = require("../controllers/n5Controller");
const middleware = require("../middleware/middleware");

router.get("/kanji-n5", middleware, kanjiN5Controller);
router.get("/adjective-n5", middleware, adjectiveN5Controller);
router.get("/adverb-n5", middleware, adverbN5Controller);
router.get("/verb-n5", middleware, verbN5Controller);
router.get("/noun-activity-n5", middleware, nounActivityN5Controller);
router.get("/noun-animalplant-n5", middleware, nounAnimalplantN5Controller);
router.get("/noun-auxnumber-n5", middleware, nounAuxnumberN5Controller);
router.get("/noun-body-n5", middleware, nounBodyN5Controller);
router.get("/noun-city-n5", middleware, nounCityN5Controller);
router.get("/noun-color-n5", middleware, nounColorN5Controller);
router.get("/noun-fooddrink-n5", middleware, nounFoodDrinkN5Controller);
router.get(
    "/noun-homeappliances-n5",
    middleware,
    nounHomeAppliancesN5Controller
);
router.get("/noun-kosoado-n5", middleware, nounKosoadoN5Controller);
router.get("/noun-media-n5", middleware, nounMediaN5Controller);
router.get("/noun-natural-n5", middleware, nounNaturalN5Controller);
router.get("/noun-number-n5", middleware, nounNumberN5Controller);
router.get("/noun-outfit-n5", middleware, nounOutfitN5Controller);
router.get("/noun-people-n5", middleware, nounPeopleN5Controller);
router.get("/noun-position-n5", middleware, nounPositionN5Controller);
router.get("/noun-region-n5", middleware, nounRegionN5Controller);
router.get("/noun-school-n5", middleware, nounSchoolN5Controller);
router.get("/noun-time-n5", middleware, nounTimeN5Controller);
router.get("/noun-traffic-n5", middleware, nounTrafficN5Controller);
router.get("/noun-work-n5", middleware, nounWorkN5Controller);
router.get("/question-word-n5", middleware, questionWordController);
router.get("/conjunction-n5", middleware, conjunctionN5Controller);

router.get("/kanji-n5-details", middleware, kanjiN5DetailsController);
router.get("/adjective-n5-details", middleware, adjectiveN5DetailsController);
router.get("/adverb-n5-details", middleware, adverbN5DetailsController);
router.get("/verb-n5-details", middleware, verbN5DetailsController);
router.get(
    "/noun-activity-n5-details",
    middleware,
    nounActivityN5DetailsController
);
router.get(
    "/noun-animalplant-n5-details",
    middleware,
    nounAnimalplantN5DetailsController
);
router.get(
    "/noun-auxnumber-n5-details",
    middleware,
    nounAuxnumberN5DetailsController
);
router.get("/noun-body-n5-details", middleware, nounBodyN5DetailsController);
router.get("/noun-city-n5-details", middleware, nounCityN5DetailsController);
router.get("/noun-color-n5-details", middleware, nounColorN5DetailsController);
router.get(
    "/noun-fooddrink-n5-details",
    middleware,
    nounFoodDrinkN5DetailsController
);
router.get(
    "/noun-homeappliances-n5-details",
    middleware,
    nounHomeAppliancesN5DetailsController
);
router.get(
    "/noun-kosoado-n5-details",
    middleware,
    nounKosoadoN5DetailsController
);
router.get("/noun-media-n5-details", middleware, nounMediaN5DetailsController);
router.get(
    "/noun-natural-n5-details",
    middleware,
    nounNaturalN5DetailsController
);
router.get(
    "/noun-number-n5-details",
    middleware,
    nounNumberN5DetailsController
);
router.get(
    "/noun-outfit-n5-details",
    middleware,
    nounOutfitN5DetailsController
);
router.get(
    "/noun-people-n5-details",
    middleware,
    nounPeopleN5DetailsController
);
router.get(
    "/noun-position-n5-details",
    middleware,
    nounPositionN5DetailsController
);
router.get(
    "/noun-region-n5-details",
    middleware,
    nounRegionN5DetailsController
);
router.get(
    "/noun-school-n5-details",
    middleware,
    nounSchoolN5DetailsController
);
router.get("/noun-time-n5-details", middleware, nounTimeN5DetailsController);
router.get(
    "/noun-traffic-n5-details",
    middleware,
    nounTrafficN5DetailsController
);
router.get("/noun-work-n5-details", middleware, nounWorkN5DetailsController);
router.get(
    "/question-word-n5-details",
    middleware,
    questionWordN5DetailsController
);
router.get(
    "/conjunction-n5-details",
    middleware,
    conjunctionN5DetailsController
);

module.exports = router;
