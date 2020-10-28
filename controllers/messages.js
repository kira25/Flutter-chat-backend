const Message = require("../models/messages");

const getAllChats = async (req, res) => {
  const miId = req.uid;
  const messagesFrom = req.params.de;

  const lastMessages = await Message.find({
    $or: [
      { de: miId, para: messagesFrom },
      { de: messagesFrom, para: miId },
    ],
  }).sort({createdAt: 'desc'}).limit(30);

  res.json({
    ok: true,
    messages: lastMessages
  });
};

module.exports = {
  getAllChats,
};
