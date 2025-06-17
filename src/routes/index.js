const router = require("express").Router();
const authRouter = require("./authRoutes");
const imageRouter = require("./imageRoutes");
const profileRouter = require("./profileRoutes");
const n5Router = require("./n5Routes");
const basicSubjectRouter = require("./basicSubjectRoutes");

router.use(authRouter);
router.use(profileRouter);
router.use(imageRouter);
router.use(basicSubjectRouter);
router.use(n5Router);

module.exports = router;
