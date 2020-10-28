//Sockets messages
const { io } = require("../index");
const { ensureJWT } = require("../helpers/jwt");

io.on("connection", (client) => {
  console.log("Client connected");
  // console.log(client.handshake.headers["x-token"]);
  const [valid, uid] = ensureJWT(client.handshake.headers["x-token"]);
  console.log(valid);
  client.on("disconnect", () => {
    console.log("Disconnected client");
  });
  // client.on("message", (payload) => {
  //   console.log("Message!!", payload);
  //   io.emit("message", {
  //     admin: "Papa",
  //   });
  // });
});
