const express = require("express");
const router = express.Router();

const GetirController = require("../controllers/getir.controller");

// register your controllers here
const getirController = new GetirController();
getirController.register(router);

module.exports = router;
