const router = require("express").Router();
const {
    getQuizCategoriesController,
    getQuizController,
    generateQuizController,
    putAnswerQuizController,
    submitQuizController,
} = require("../controllers/quizController");
const middleware = require("../middleware/middleware");

router.get("/quiz-categories", middleware, getQuizCategoriesController);
router.get("/quiz/:quiz_category_id/:level_id", middleware, getQuizController);
router.get("/quiz/:quizzes_id", middleware, generateQuizController);
router.put(
    "/quiz/:quizzes_id/:question_id/answer",
    middleware,
    putAnswerQuizController
);
router.post("/quiz/:quizzes_id/submit", middleware, submitQuizController);

module.exports = router;
