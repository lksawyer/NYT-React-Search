//Dependencies
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

// const routes = require("./routes");
//process.env.PORT will set port to the environment variable PORT, or 3001 if there's nothing there.
const PORT = process.env.PORT || 3001;

app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "/views/index.html"));
	// res.send("./client/build/index.html");
})

//Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
//Middleware that formatts req in a consumable formatt
app.use(bodyParser.json());

//require routes
const articlesRouter = require("./routes/api/articles");
//create middleware function to tac on route prefixes
app.use("/api/articles", articlesRouter);

//Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nytreactDB",
  {
    useMongoClient: true
  }
);

// Start the API server
app.listen(PORT, function() {
	console.log("server is now running on PORT ", PORT);
})
