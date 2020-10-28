const User = require("../models/users");
const Message = require('../models/messages')

const userConnected = async (uid = "") => {
  const user = await User.findById(uid);
  user.online = true;
  await user.save();
  return user;
};

const userDisconnected = async (uid = "") => {
    const user = await User.findById(uid);
    user.online = false;
    await user.save();
    return user;
  };

const saveMessage = async(payload ) => {
   try {
const message = new Message(payload);
await message.save();
     return true
   } catch (error) {
     return false
   }
}

module.exports = {
  userConnected,
  userDisconnected,
  saveMessage
};
