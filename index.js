require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.send("hola mundo");
});

app.get("/users", (req, res) => {
  res.send("Usuario: fFernando");
});

app.post("/", (req, res) => {
  res.send("POST del path /");
});

app.listen(PORT, (req, res) => {
  console.log(`Server running on http://localhost:${PORT}/`);
});
