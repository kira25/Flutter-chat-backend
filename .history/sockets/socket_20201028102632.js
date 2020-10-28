//Sockets messages
const { io } = require("../index");
const { ensureJWT } = require("../helpers/jwt");

io.on("connection", (client) => {
  console.log("Client connected");
  // console.log(client.handshake.headers["x-token"]);
  //Validacion para permitir el acceso solo a los clientes que brinden su token
  const [valid, uid] = ensureJWT(client.handshake.headers["x-token"]);
  console.log(valid, uid);


  if (!valid) {
    return client.disconnect();
  }
  console.log("Client authenticated");

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
