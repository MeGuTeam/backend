const router = require("express").Router();
const { homeBarController } = require("../controllers/barController");
const middleware = require("../middleware/middleware");

router.get("/bar-home", middleware, homeBarController);

module.exports = router;
