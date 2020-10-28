//Sockets messages
const { io } = require("../index");
const { ensureJWT } = require("../helpers/jwt");
const { userConnected, userDisconnected } = require("../controllers/socket");

io.on("connection", (client) => {
  console.log("Client connected");

  //Validacion para permitir el acceso solo a los clientes que brinden su token
  const [valid, uid] = ensureJWT(client.handshake.headers["x-token"]);
  console.log(valid, uid);

  //Verificar autenticacion
  if (!valid) {
    return client.disconnect();
  }
  console.log("Client authenticated");

  //Cliente autenticado
  userConnected(uid);

  //Ingresar al usuario a una sala
  client.join(uid);

  client.on("mensaje-personal", (payload) => {
    console.log(payload);
    //Grabar mensaje
    
    io.to(payload.para).emit('mensaje-personal',payload);
  });

  client.on("disconnect", () => {
    console.log("Disconnected client");
    userDisconnected(uid);
  });
  // client.on("message", (payload) => {
  //   console.log("Message!!", payload);
  //   io.emit("message", {
  //     admin: "Papa",
  //   });
  // });
});
