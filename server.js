const express = require("express");
const path = require("path");
const morgan  = require('morgan');
const mongoose = require("mongoose");
const bookRoutes = require("./routes/api/books");

const PORT = process.env.PORT || 3001;
const app = express();
// const apiRoutes = require("./routes/api/apiRoutes");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('short'));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
app.use(express.static("library/build"));
}

// Use apiRoutes
app.use('/api', bookRoutes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist"
);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./library/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
