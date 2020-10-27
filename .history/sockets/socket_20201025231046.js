//Sockets messages



io.on("connection", (client) => {
    console.log("Client connected");
    client.on("disconnect", () => {
      console.log("Disconnected client");
    });
    client.on("message", (payload) => {
      console.log("Message!!", payload);
      io.emit("message", {
        admin: "Papa",
      });
    });
  });