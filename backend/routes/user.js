const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/make", userController.make);

module.exports = router;