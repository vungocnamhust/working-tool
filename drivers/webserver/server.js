const fs = require("fs");
const readline = require("readline");
const { google } = require("googleapis");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("The work tool application");
});

app.post("/", (req, res) => {
  res.send("The post request");
});

app.listen(8000, () => {
  console.log("Server on port 8000");
});
