const express = require("express");
const router = express.Router();
const api = require("../Requests/Api");

//localhost:8000/api/get-tours
router.post("/get-tours", api.getTours); //

//localhost:8000/api/get-tour
router.post("/get-tour", api.getTour); //

module.exports = router;
