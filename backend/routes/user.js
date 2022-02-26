const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/make", userController.make);

router.get("/match", userController.match);

module.exports = router;
