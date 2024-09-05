const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const createToken = require("../configuration/createToken");

const users = asyncHandler(async (req, res) => {
  console.log("Connected to users.");
  const search = req.query.search;
  const users = await User.find(search);
  res.send(users);
});
const signup = asyncHandler(async (req, res) => {
  //TODO : function pourcréer un compte utilisateur
  const { name, email, password } = req.body;
  if (!name) {
    res.status(400);
    throw new Error("Name not entered");
  }
  if (!email) {
    res.status(400);
    throw new Error("Email not entered");
  }
  if (!password) {
    res.status(400);
    throw new Error("Password not entered");
  }
  const userExistsAlready = await User.findOne({ name: name, email: email });
  if (userExistsAlready) {
    res.status(400);
    throw new Error("User exists already");
  }
  const user = await User.create({
    name: name,
    mail: email,
    password: password,
  });
  console.log(user);
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      mail: user.mail,
      token: createToken(user._id),
    });
  }
});

const login = asyncHandler(async (req, res) => {
  //TODO fonction pour générer un token de connection
  const { name, password } = req.body;

  const user = await User.findOne({ name });
  //Check if the password is valid
  if (user && user.password === password) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: createToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid name or password");
  }
});

module.exports = { users, signup, login };
