const QuestionModel = require("../model/question.model");

exports.getAllQuestions = async (req, res) => {
  try {
    const { category } = req.params;

    const data = await QuestionModel.find(
      { category },
      { _id: 0 }
    );

    const questions = data.map((question) => {
      const options = [...question.incorrectAnswers];
      const randomNumber = Math.floor(Math.random() * 4);
      options.splice(randomNumber, 0, question.correctAnswer);

      const { correctAnswer, incorrectAnswers, ...ques } = question._doc;
      return { ...ques, options };
    });

    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getHomeQuestions = async (req, res) => {
  const data = await QuestionModel.find();
  res.send(data);
};
