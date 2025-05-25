const router = require("express").Router();
const { numberController } = require("../controllers/numberController");
const middleware = require("../middleware/middleware");

router.get("/number", middleware, numberController);

module.exports = router;
