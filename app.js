// Require express and its components
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

// Page content waiting to be rendered
const homeStartingContent = "Insert description of the home page";
const contactContent = "Insert description of the contact page";
const aboutContent = "Insert description of the about page"

// Calculator logic
const quiz = "What's your name?"
var answers = ["Alice", "Peter", "Stewie", "Yue"]

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

// Routing
app.get("/", function(req, res) {
    res.render("home", {
        startingContent: homeStartingContent
    })
})

app.get("/calculator", function(req, res) {
    res.render("calculator", {
        startingContent: contactContent,
        question: quiz,
        answers: answers
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

// Feed to server
app.listen(process.env.PORT || 3000, function() {
    console.log("Server is running on port 3000");
});

