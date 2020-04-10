const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const homeStartingContent = "Insert description of the home page";
const contactContent = "Insert description of the contact page";
const aboutContent = "Insert description of the about page"

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

app.get("/contact", function(req, res) {
    res.render("home", {
        startingContent: contactContent
    })
})

app.get("/contact", function(req, res) {
    res.render("contact", {
        startingContent: contactContent
    })
})

app.get("/about", function(req, res) {
    res.render("about", {
        startingContent: aboutContent
    })
})


app.listen(process.env.PORT || 3000, function() {
    console.log("Server is running on port 3000");
});

