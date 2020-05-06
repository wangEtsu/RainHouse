
// ------------------------------------- Interact with MySQL----------------------------------
// Comment all of these to avoid db error
// Connect to mysql
var mysql = require('mysql');
var database = mysql.createConnection({
    // Use a remote heroku MySQL DB
    host: 'us-cdbr-east-06.cleardb.net',
    user: 'b3d68feaf5d63b',
    password: '035fde2f',
    database: 'heroku_ccf50f60e6d3df4'

    // Or use your own local DB
    // host: 'localhost',
    // user: 'dumpy',
    // password: 'w4ngyue19941229',
    // database: 'consumption'

});

// Test if the connection is successful
database.connect(function (connectionError) {
    if (connectionError) {
        throw connectionError;
    }
    else {
        console.log("Connect to Heroku MySQL")
    }

});

setInterval(function () {
    database.query('SELECT 1');
}, 5000);


// Write any query you want
var sql = "SELECT * FROM rainfall WHERE suburb = '" + "caulfield" + "';";

// Variable to store query result
var caulfieldData = 0;

// Query from MySQL
// database.query(sql, function (error, results, fields) {

//     if (error) throw error;
//     caulfieldData = 1;
//     console.log(results[0])

// });
// console.log(`caulfield: ${caulfieldData}`);
let annualTotal;
let rainfallData;

function getRainfallData(callback) {
    database.query(sql, function (err, result) {
        if (err) throw err;
        callback((result.length > 0) ? result[0] : "");
    });
}

getRainfallData(function (result) {
    console.log(result);
    rainfallData = result;
});

console.log(rainfallData);
// ------------------------------------- Interact with MySQL----------------------------------



// ------------------------------------- Interact with Mongo Atlas ----------------------------------
// Require mongoose and lodash
const mongoose = require('mongoose');
const _ = require("lodash");

// Connect to local MongoDB
// mongoose.connect("mongodb://localhost:27017/waterConsumption", { useUnifiedTopology: true, useNewUrlParser: true});

// connect to Atlas with connection string, while suppressing two warnings
mongoose.connect("mongodb+srv://yue:yue@cluster0-fpwyv.mongodb.net/survey?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true })

// Creat a schema for the data model
const testSchema = {
    questionTag: String,
    question: String,
    activity: String,
    answers: Object,
    tip: String
};

// Create a datamodel, the first parameter is the name of collection
const Item = mongoose.model("quizs", testSchema);


// Set up an variable to store the query result 
let quizs;

Item.find(function (err, items) {
    if (err) {
        console.log(err);
    } else {
        // Notice we have to stringify in the back end before passing the data to ejs
        quizs = JSON.stringify(items);
        // console.log(JSON.stringify(quizs));
        // console.log(quizs);
    }
})

// ------------------------------------- Interact with Mongo Atlas ----------------------------------




// Require express and its components
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");



// Page content waiting to be rendered
const homeStartingContent = "Insert description of the home page";
const contactContent = "Insert description of the contact page";
const aboutContent = "Insert description of the about page";
const suburbContent = "Insert description of the about page";


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

// Routing to user login page by default
app.get("/", function (req, res) {
    res.render("login", {
        startingContent: homeStartingContent
    })
})

// Login page
app.get("/login", function (req, res) {
    res.render("login", {
        startingContent: homeStartingContent
    })
})

// Fail page
app.get("/fail", function (req, res) {
    res.render("fail", {
        startingContent: homeStartingContent
    })
})

// Check if password match
app.post("/", function (req, res) {

    let password = req.body.password;

    if (password === "teammizu") {
        res.redirect("/home");
    }
    else {
        res.redirect("/fail");
    }
})

// Post request, accept user pwd entered
app.post("/login", function (req, res) {

    let password = req.body.password;

    if (password === "teammizu") {
        res.redirect("/home");
    }
    else {
        res.redirect("/fail");
    }
})

// Home page
app.get("/home", function (req, res) {
    res.render("home", {
        startingContent: homeStartingContent
    })
})


// const events = { a: 3, b: 4 };

// app.get("/calculator", function (req, res) {
//     res.render("calculator")
// })

// Use it to pass value to ejs
app.get("/calculator", function (req, res) {
    res.render("calculator", {
        // Pass it to ejs page
        calculatorContent: quizs
    })
})


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

app.get("/rainhouse", function (req, res) {
    res.render("rainhouse", {
        suburb: "",
        rainCondition: ""
    })
})

app.post("/rainhouse", function (req, res) {
    let location = req.body.suburb;

    // console.log(suburb);
    res.render("rainhouse", {
        suburb: location,
        rainCondition: annualTotal

    })
})

// Feed to server
app.listen(process.env.PORT || 3000, function () {
    console.log("Server is running on port 3000");
});

