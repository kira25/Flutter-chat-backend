const User = require("../models/users");

const userConnected = async (uid = "") => {
  const user = await User.findById(uid);
  user.onlline = true;
  await user.save();
  return user;
};

const userDisconnected = async (uid = "") => {
    const user = await User.findById(uid);
    user.onlline = false;
    await user.save();
    return user;
  };

module.exports = {
  userConnected,
};
