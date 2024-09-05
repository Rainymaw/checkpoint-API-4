const express = require("express");
const { users, signup, login } = require("../controllers/userControllers");

const router = express.Router();

router.route("/").get(users);
router.route("/").post(signup);
router.route("/login").post(login);

module.exports = router;
