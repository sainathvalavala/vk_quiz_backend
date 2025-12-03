const express = require("express");
const { submittedAnswers, saveResult, getResult } = require("../controllers/resultController");

const router = express.Router();

router.post("/submittedAnswers", submittedAnswers);
router.post("/saveResult", saveResult);
router.get("/getResult/:id", getResult);

module.exports = router;
