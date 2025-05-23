const router = require("express").Router();
const { particleController } = require("../controllers/particleController");

router.get("/particle", particleController);

module.exports = router;
