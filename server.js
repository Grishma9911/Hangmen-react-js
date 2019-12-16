const express = require("express");
const routes = require("./routes/game_results");
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors');


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Add routes, both API and view
app.use("/api/results", routes);

// Serve up static assets (usually on heroku)
//if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
//}


// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
