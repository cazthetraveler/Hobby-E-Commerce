const db = require("../config/connection");
const { Item } = require("../models");
const seeds = require("./itemSeeds.json");
const cleanDB = require("./cleanDB");

db.once("open", async () => {
  await cleanDB("Item", "items");
  await cleanDB("User", "users");
  await Item.create(seeds);

  console.log("all done!");
  process.exit(0);
});
