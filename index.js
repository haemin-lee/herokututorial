const express = require("express");
const app = express(); //create instance of this
const port = process.env.port || 3000;

app.get("/", (req, res) => {
  console.log("get request");
  res.send("Hello world");
});

app.listen(port, () => {
  console.log("hi there");
}); //start this server on port 3000
