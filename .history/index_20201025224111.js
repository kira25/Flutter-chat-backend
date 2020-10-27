const express = require("express");
const app = express();
const path = require("path");

//PATH PUBLIC

const publicPath = path.resolve(__dirname, "public");

app.use(express.static(publicPath));

app.listen(3000, (err) => {
  if (err) throw new Error(err);
  console.log(`Servidor listen ${3000}`);
});
