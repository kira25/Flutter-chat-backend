const express = require("express");
const app = express();
const path = require("path");
require('dotenv').config();


//Node Server
const server = require('http').createServer(app);
const io = require('socket.io')(server);

//Sockets messages




//PATH PUBLIC
const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));


server.listen(process.env.PORT, (err) => {
  if (err) throw new Error(err);
  console.log(`Servidor listen ${process.env.PORT}`);
});
