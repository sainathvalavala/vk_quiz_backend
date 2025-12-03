const QuestionModel = require("../model/question.model");
const resultModel = require("../model/result.model");
const UserModel = require("../model/user.model");

exports.submittedAnswers = async (req, res) => {
  try {
    const submittedAnswers = req.body;
    const questions = await QuestionModel.find();

    let result = 0;
    let correctAnswers = {};

    questions.forEach((q) => {
      const userAnswer = submittedAnswers[q.sno];
      if (userAnswer === q.correctAnswer) result++;

      correctAnswers[q.sno] = q.correctAnswer;
    });

    res.json({
      msg: "Successful",
      result,
      correctAnswers,
      submittedAnswers,
      totalQuestions: questions.length - 30,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.saveResult = async (req, res) => {
  try {
    const { username, score, totalQuestions, category } = req.body;

    const user = await UserModel.findOne({ username });
    if (!user) return res.status(404).json({ message: "User not found" });

    await resultModel.create({
      userId: user._id,
      username,
      score,
      totalQuestions,
      category,
      date: new Date(),
    });

    res.json({ message: "Result saved successfully", success: true });
  } catch (err) {
    res.status(500).json({ message: "Error saving result", success: false });
  }
};

exports.getResult = async (req, res) => {
  try {
    const userId = req.params.id;
    const results = await resultModel.find({ userId }).sort({ date: -1 });

    if (!results || results.length === 0)
      return res.status(404).json({ message: "No results found" });

    res.json({ results });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
