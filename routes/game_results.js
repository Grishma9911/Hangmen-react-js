// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");
var router = express.Router();
const db = require('../config/model');



// Routes
// =============================================================
  // Get all game data
  router.get("/", async function(req, res) {
    let results = await db.Games_results.findAll({raw: true, attributes: ['id', 'player', 'result']
  });
    res.send(results);
   });

  // Add a Data
  router.post("/", async function(req, res) {
    console.log("Game Data:");
    console.log(req.body);
    await db.Games_results.create({player:req.body.player, result:req.body.result})
    res.send({message:"Data added successfully!"})
  });

module.exports = router;