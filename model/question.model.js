const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  sno: {
    type: Number,
  },
  category: {
    type: String,
  },
  question: {
    text: {
      type: String,
    }
  },
  correctAnswer: {
    type: String,
  },
  incorrectAnswers: {
    type: [String],
  }
});

const QuestionModel = mongoose.model("Question", questionSchema);

module.exports = QuestionModel;
