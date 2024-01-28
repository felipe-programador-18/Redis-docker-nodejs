// just to building from the scratch simple structure
const express = require("express");
const api = express();
const Port = process.env | 3000;

// to creating and connect my redis server!
const redis = require("redis");
const process = require("process");

api.get("/", (req, res) => {
  res.send("Now I here felipe");
});

api.listen(Port, () => {
  console.log(`just connecting my docker here now ${Port} `);
});
