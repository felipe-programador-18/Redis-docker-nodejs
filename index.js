// just to building from the scratch simple structure
const express = require("express");
const api = express();
//const Port = process.env | 8081;

// to creating and connect my redis server!
const redis = require("redis");

const createNewConnectionClient = redis.createClient({
  host: "redis-client",
  port: 6379,
});

createNewConnectionClient.set("visits", 0);

const process = require("process");

api.get("/", (req, res) => {
  //process.exit(0);
  createNewConnectionClient("visits", (err, visits) => {
    res.send("Now I here felipe");
    createNewConnectionClient.set("visits", parseInt(visits), +1);
  });
});

api.listen(8081, () => {
  console.log(`just connecting my docker here now ${8081} `);
});
