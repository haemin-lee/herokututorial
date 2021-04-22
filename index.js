const express = require("express");
const app = express(); //create instance of this
const port = process.env.port || 3000;
const people = [];

app.get("/", (req, res) => {
  console.log("get request");
  res.json(people);
  res.sendStatus(200);
});

app.post("/insert", (req, res) => {
  people.push("Alex");
  res.sendStatus(200);
});
app.listen(port, () => {
  console.log("hi there");
}); //start this server on port 3000
