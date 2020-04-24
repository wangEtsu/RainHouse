// Comment all of these to avoid db error
// Connect to mysql
var mysql = require('mysql');
var database = mysql.createConnection({
    host: 'us-cdbr-iron-east-01.cleardb.net',
    user: 'bd619e2294e924',
    password: 'ed79069b',
    database: 'heroku_bf6ff4ce2abab84'

});

// Test connection
database.connect(function (connectionError) {
    if (connectionError) {
        throw connectionError;
    }
    else {
        console.log("Connect to Database")
    }

});


// Write query you wanna use
var sql = "SELECT * FROM water_consumption";

// Setup a variable to store query result
let quizs;

// Query db
database.query(sql, function (error, results, fields) {

    if (error) throw error;

    // Query an array of js objects
    quizs = results.map((mysqlObj, index) => {
        return Object.assign({}, mysqlObj);
    });

    // Show the result
    console.log(quizs);
});




// Require express and its components
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");



// Page content waiting to be rendered
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

// Routing
app.get("/", function (req, res) {
    res.render("home", {
        startingContent: homeStartingContent
    })
})


const events = { a: 3, b: 4 };

app.get("/calculator", function (req, res) {
    res.render("calculator")
})

// Use it to pass value to ejs
// app.get("/calculator", function (req, res) {
//     res.render("calculator", { quizs: quizs })
// })

app.get("/about", function (req, res) {
    res.render("about", {
        startingContent: contactContent
    })
})

app.get("/educate", function (req, res) {
    res.render("educate", {
        startingContent: aboutContent
    })
})

// Feed to server
app.listen(process.env.PORT || 3000, function () {
    console.log("Server is running on port 3000");
});

