//Sockets messages
const { io } = require("../index");

io.on("connection", (client) => {
  console.log("Client connected");
  console.log(client.handshake.headers['x-token']);

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
