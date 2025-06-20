const router = require("express").Router();
const authRouter = require("./authRoutes");
const imageRouter = require("./imageRoutes");
const profileRouter = require("./profileRoutes");
const n5Router = require("./n5Routes");
const basicSubjectRouter = require("./basicSubjectRoutes");
const trackerRouter = require("./trackerRoutes");
const quizRouter = require("./quizRoutes");

router.use(authRouter);
router.use(profileRouter);
router.use(imageRouter);
router.use(basicSubjectRouter);
router.use(n5Router);
router.use(trackerRouter);
router.use(quizRouter);

module.exports = router;
