const jwt = require("jsonwebtoken");
const secret_key = "Bouzellouf";
const createToken = (id) => {
  console.log("Generate Token");
  return jwt.sign({ id }, secret_key, {
    expiresIn: "10d",
  });
};
module.exports = createToken;
