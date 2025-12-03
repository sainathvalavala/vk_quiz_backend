const GoogleUserModel = require("../model/googleUser.model");
const jwt = require("jsonwebtoken");

exports.googleLogin = async (req, res) => {
  const { name, email } = req.body;

  const data = await GoogleUserModel.find({ username: name, email });

  if (data.length !== 0) {
    const token = jwt.sign({ email }, "secret");
    return res.json(token);
  }

  const newGoogleUser = new GoogleUserModel({ username: name, email });
  await newGoogleUser.save();

  const token = jwt.sign({ name, email }, "secret");

  res.json({
    msg: "Successful",
    token,
    userDetails: { username: name, email },
  });
};
