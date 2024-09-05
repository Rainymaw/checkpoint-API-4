const express = require("express");
const { getChats, postChats } = require("../controllers/chatControllers");

const router = express.Router();

router.route("/").get(getChats);
router.route("/").post(postChats);

module.exports = router;
