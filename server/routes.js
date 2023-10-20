const express = require("express");
const router = express.Router();
//import the controller
const initializePayment = require(".controllers");
//Define your routes
router.post("/initializePayment", initializePayment.acceptPayment);

module.exports = router;
