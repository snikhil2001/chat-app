const asyncHandler = require("express-async-handler");
const generateToken = require("../config/generateToken");
const User = require("../models/user.model");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please enter all the details");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const newUser = await User.create({ name, email, password, pic });

  if (newUser) {
    res.status(200).json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      pic: newUser.pic,
      token: generateToken(newUser._id),
    });
  } else {
    res.status(400);
    throw new Error("Falied to create the user");
  }
});

module.exports = { registerUser };
