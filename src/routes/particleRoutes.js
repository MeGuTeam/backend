const router = require("express").Router();
const { particleController } = require("../controllers/particleController");
const middleware = require("../middleware/middleware");

router.get("/particle", middleware, particleController);

module.exports = router;
