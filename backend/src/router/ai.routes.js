const express = require("express");
const router = express.Router();
const { genCont } = require("../controllers/ai.controller");

router.post("/get-content", genCont);

module.exports = router;
