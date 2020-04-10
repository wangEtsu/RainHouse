const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const homeStartingContent = "Insert description for the home page";

// Initialize express
const app = express();

// Set view engine to ejs
app.set("view engine", "ejs");

// Set up public folder to store static file including css and images
app.use(express.static("public"));

// Set up bodyparser encode method
app.use(bodyParser.urlencoded({
    extended: true
}))

// Re
app.get("/", function(req, res) {
    res.render("home", {
        startingContent: homeStartingContent
    })
})

app.listen(process.env.PORT || 3000, function() {
    console.log("Server is running on port 3000");
});

