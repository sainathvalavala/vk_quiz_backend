const UserModel = require("../model/user.model");
const jwt = require("jsonwebtoken");

exports.addUser = async (req, res) => {
  try {
    const newUser = new UserModel({
      username: req.body.username,
      password: req.body.password,
      role: "user",
    });

    await newUser.save();
    res.json({ message: "User created", success: true });
  } catch (err) {
    res.status(400).json({ message: err.message, success: false });
  }
};

exports.addAdmin = async (req, res) => {
  try {
    const addAdmin = new UserModel({
      username: req.body.username,
      password: req.body.password,
      role: "admin",
    });

    await addAdmin.save();
    res.json({ message: "Admin created", success: true });
  } catch (err) {
    res.status(400).json({ message: err.message, success: false });
  }
};

exports.userLogin = async (req, res) => {
  const data = await UserModel.find(req.body);

  if (data.length !== 0) {
    const token = jwt.sign(
      { _id: data[0]._id },
      process.env.JWT_SECRET
    );

    res.json({
      msg: "Successful",
      token,
      userDetails: {
        userId: data[0]._id,
        username: data[0].username,
        role: data[0].role,
      },
    });
  } else {
    res.json({ msg: "Failed" });
  }
};
