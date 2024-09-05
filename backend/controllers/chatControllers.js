const asyncHandler = require("express-async-handler");

const getChat = asyncHandler(async (req, res) => {
  const { idUser } = req.body;
  if (!idUser) {
    console.log("Id not found");
    return res.status(400).send("id not found");
  }
  const chat = await Chat.find({
    isGroupChat: false,
  }); //TODO : créer le model schema de Chat
});
const postChat = asyncHandler(async (req, res) => {});

module.exports = { getChat, postChat };
