const router = require("express").Router();
const authRouter = require("./authRoutes");
const writingJpRouter = require("./writingJpRoutes");
const particleRouter = require("./particleRoutes");
const imageRouter = require("./imageRoutes");
const profileRouter = require("./profileRoutes");
const numberRouter = require("./numberRoutes");
const n5Router = require("./n5Routes");

router.use(authRouter);
router.use(writingJpRouter);
router.use(particleRouter);
router.use(profileRouter);
router.use(imageRouter);
router.use(numberRouter);
router.use(n5Router);

module.exports = router;
