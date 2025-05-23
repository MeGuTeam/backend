const router = require("express").Router();
const authRouter = require("./authRoutes");
const writingJpRouter = require("./writingJpRoutes");
const particleRouter = require("./particleRoutes");
const imageRouter = require("./imageRoutes");

router.use(authRouter);
router.use(writingJpRouter);
router.use(particleRouter);
router.use(imageRouter);

module.exports = router;
