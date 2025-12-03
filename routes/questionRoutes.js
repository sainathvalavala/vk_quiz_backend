const express = require("express");
const router = express.Router();
const {
  getHomeQuestions,
  getAllQuestions,
} = require("../controllers/questionController");

router.get("/", getHomeQuestions);
router.get("/getAllQuestions/:category", getAllQuestions);

module.exports = router;
