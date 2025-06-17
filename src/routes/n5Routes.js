const router = require("express").Router();
const {
    kanjiN5Controller,
    adjectiveN5Controller,
    adverbN5Controller,
    verbN5Controller,
    nounActivityN5Controller,
    nounAnimalplantN5Controller,
    nounAuxnumberN5Controller,
    nounBodyN5Controller,
    nounCityN5Controller,
    nounColorN5Controller,
    nounFoodDrinkN5Controller,
    nounHomeAppliancesN5Controller,
    nounKosoadoN5Controller,
    nounMediaN5Controller,
    nounNaturalN5Controller,
    nounNumberN5Controller,
    nounOutfitN5Controller,
    nounPeopleN5Controller,
    nounPositionN5Controller,
    nounRegionN5Controller,
    nounSchoolN5Controller,
    nounTimeN5Controller,
    nounTrafficN5Controller,
    nounWorkN5Controller,
    questionWordController,
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

module.exports = router;
