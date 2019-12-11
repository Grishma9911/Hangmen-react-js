// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
connection = require("./app/config/connection.js");

// Routes
// =============================================================
module.exports = function(app) {
  // Get all game data
  app.get("/api/all", function(req, res) {
    var dbQuery = "SELECT * FROM game";

    connection.query(dbQuery, function(err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

  // Add a Data
  app.post("/api/new/game", function(req, res) {
    console.log("Game Data:");
    console.log(req.body);

    var dbQuery = "INSERT INTO game (player-1, player-2) VALUES (?,?,?)";

    connection.query(dbQuery, [req.body.player-1, req.body.player-2], function(err, result) {
      if (err) throw err;
      console.log("Game data Successfully Saved!");
      console.log(result);
      res.end();
    });
  });

  app.post("/api/new/player", function(req, res) {
    console.log(req.body);
  
    var dbQuery = "INSERT INTO login (number) VALUES (?,?)";
  
    connection.query(dbQuery, [req.body.number], function(err, result) {
      if (err) throw err;
      console.log("Player Successfully Saved!");
      console.log(result);

      app.get("/home",function(response){
        console.log(response);
      });


      res.end();
    });
  });
};

