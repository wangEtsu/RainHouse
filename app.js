
// ------------------------------------- Interact with MySQL----------------------------------
// Comment all of these to avoid db error
// Connect to mysql
// var mysql = require('mysql');
// var database = mysql.createConnection({
//     // Use a remote heroku MySQL DB
//     // host: 'us-cdbr-iron-east-01.cleardb.net',
//     // user: 'bd619e2294e924',
//     // password: 'ed79069b',
//     // database: 'heroku_bf6ff4ce2abab84'

//     // Or use your own local DB
//     // host: 'localhost',
//     // user: 'dumpy',
//     // password: 'w4ngyue19941229',
//     // database: 'consumption'

// });

// // Test if the connection is successful
// database.connect(function (connectionError) {
//     if (connectionError) {
//         throw connectionError;
//     }
//     else {
//         console.log("Connect to Database")
//     }

// });


// // Write any query you want
// var sql = "SELECT * FROM water_consumption";

// // Setup a variable to store query result
// let quizs;

// // Query from MySQL
// database.query(sql, function (error, results, fields) {

//     if (error) throw error;

//     // Query an array of js objects
//     quizs = results.map((mysqlObj, index) => {
//         return Object.assign({}, mysqlObj);
//     });

//     // Show the result
//     console.log(quizs);
// });

// ------------------------------------- Interact with MySQL----------------------------------



// ------------------------------------- Interact with Mongo Atlas ----------------------------------
// Require mongoose and lodash
const mongoose = require('mongoose');
const _ = require("lodash");

// Connect to local MongoDB
// mongoose.connect("mongodb://localhost:27017/waterConsumption", { useUnifiedTopology: true, useNewUrlParser: true});

// connect to Atlas with connection string, while suppressing two warnings
mongoose.connect("mongodb+srv://yue:yue@cluster0-fpwyv.mongodb.net/survey?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true})

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

// Creating more objects and insert
// const q1 = new Item({
//     questionTag: "familyMember",
//     question: "How many people live in your house?",
//     activity: "familySize",
//     answers: {
//       "1": "1",
//       "1\uff0e5": "2",
//       "2\uff0e3": "3",
//       "3\uff0e1": "4",
//       "4\uff0e1": "5"
//     },
//     tip: "Charlesworths family at Sydeny saves thousands of litres of water per year! Lets find out about yours!"
//   });

//   const q2 = new Item({
//     questionTag: "showerDuration",
//     question: "What is the average shower time of your family per person?",
//     activity: "Shower & Bath",
//     answers: {
//       "24": "0-5 mins",
//       "72": "5-10 mins",
//       "120": "10-15 mins",
//       "190": "> 15 mins"
//     },
//     tip: "A minute saved in the shower saves upto 12 litres of water. Challenge yourself to a shower time of your favourite song or under 5 mins."
//   });

//   const q3 = new Item({
//     questionTag: "showerheadEfficiency",
//     question: "Does your house have an efficient showerhead?",
//     activity: "Shower & Bath",
//     answers: {
//       "1": "No",
//       "0\uff0e5": "Yes",
//       "0\uff0e75": "Not sure",
//     },
//     tip: "An AAA rated showerhead can reduce almost half of your shower consumption or upto 26 litres of water for a 7 minute shower"
//   });

//   const q4 = new Item({
//     questionTag: "showerFrequency",
//     question: "How often do you take shower per day?",
//     activity: "Shower & Bath",
//     answers: {
//       "45": "Depends",
//       "30": "1",
//       "60": "2",
//       "120": "3"
      
//     },
//     tip: "You dont have to shower everyday!! As per Studies, bathing too often is actually really bad for your skin"
//   });

//   const q5 = new Item({
//     questionTag: "bathAmount",
//     question: "Do you fancy taking bath? If so, how frequently?",
//     activity: "Shower & Bath",
//     answers: {
//       "0": "Never",
//       "380": "Once a week",
//       "95": "Once a month"

//     },
//     tip: "If you generally take a shower for more than 20 mins, its advisable to take a bath which will help you save more water"
//   });

//   const q6 = new Item({
//     questionTag: "toiletAmount",
//     question: "Do you have a partial flush or a full flush toilet?",
//     activity: "Toilet",
//     answers: {
//       "540": "Yes",
//       "1440": "No",
//       "1000": "Not Sure"
//     },
//     tip: "Have you got one? if no, thats bad!!. A Dual-flush toilets, by comparison, use much less water and are considered to be environmentally friendly."
//   });

//   const q7 = new Item({
//     questionTag: "toiletLeak",
//     question: "Do you have any leaks in your toilet?",
//     activity: "Toilet",
//     answers: {
//       "1232": "Yes",
//       "0": "No",
//       "650": "Not Sure"
//     },
//     tip: "Get those leaks fixed ASAP. A leaking toilet hogs upto 308 litres of water a week"
//   });

//   const q8 = new Item({
//     questionTag: "kitchenWash",
//     question: "How do you wash your dishes?",
//     activity: "Kitchen",
//     answers: {
//       "60": "By hand",
//       "12": "Dishwasher of course!!",
//     },
//     tip: "An Energy Star certified dishwasher can use as little as 12 litres of water per load, which is only 1/5 of washing in sink"
//   });

//   const q9 = new Item({


//     questionTag: "dishwashingFrequency",
//     question: "How often do you wash your dishes per week?",
//     activity: "Kitchen",
//     answers: {
//       "12": "3",
//       "20": "5",
//       "32": "7 or more",
//     },

//     tip: " Use a bucket to pre-wash your dishes, it saves more water and also prevents bacteria from growing  "
//   });

//   const q10 = new Item({
//     questionTag: "kitchenEfficiency",
//     question: "Do you have low flow taps in the kitchen?",
//     activity: "Kitchen",
//     answers: {
//       "0\uff0e75": "Yes",
//       "1": "No",
//       "0\uff0e9": "Not Sure",
//     },
//     tip: "Get a low flow taps ASAP, it saves not only water but also electricty use"
//   });

//   const q11 = new Item({
//     questionTag: "laundryAmount",
//     question: "How do you wash your clothes?",
//     activity: "Washing",
//     answers: {
//       "200": "By hand",
//       "50": "Front loading washing machine",
//       "130": "Top loading washing machine"
//     },
//     tip: "An AAA rated washing machine can save your water usage by atleast 50%."
//   });

//   const q12 = new Item({
//     questionTag: "laundryFrequency",
//     question: "How many laundry loads per week?",
//     activity: "Washing",
//     answers: {
//       "8": "Twice per week",
//       "4": "Every week",
//       "1": "Once per month"
//     },
//     tip: "Clothes are slightly damaged with each wash, an appropriate laundry frequency can help to save both water and electricity use"
//   });


//   const q13 = new Item({
//     questionTag: "outdoorGarden",
//     question: "Do you have a garden? If so, do you use sprinklers or drippers?",
//     activity: "Outdoor",
//     answers: {
//       "0": "No I don't have one",
//       "2400": "Yes, I have a dripper system",
//       "3000": "Yes, sprinkler ease my work"
//     },
//     tip: "A well-designed sprinkler system not only saves water but also prevent over-watering"
//   });


//   const q14 = new Item({
//     questionTag: "outdoorCar",
//     question: "Do you wash your car by yourself",
//     activity: "Outdoor",
//     answers: {
//       "0": "Never",
//       "200": "Yes, I wash my car at home"
//     },
//     tip: "Using a waterless cleaning solution can reduce your water usage to a single cup per car"
//   });


// Insert all of them in to Atlas cluster
// Item.insertMany([q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14]);

// Set up an variable to store the query result 
let quizs;

Item.find(function(err, items){
    if (err) {
        console.log(err);
    } else {
        // Notice we have to stringify in the back end before passing the data to ejs
        quizs = JSON.stringify(items);
        // console.log(JSON.stringify(quizs));
        console.log(quizs);
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
    res.render("login", {
        startingContent: homeStartingContent
    })
})

app.get("/login", function (req, res) {
    res.render("login", {
        startingContent: homeStartingContent
    })
})
app.get("/fail", function (req, res) {
    res.render("fail", {
        startingContent: homeStartingContent
    })
})


app.post("/", function (req, res) {

    let password = req.body.password;

    if (password === "teammizu")
    {
        res.redirect("/home");
    }
    else {
        res.redirect("/fail");
    }
})

app.post("/login", function (req, res) {

    let password = req.body.password;

    if (password === "teammizu")
    {
        res.redirect("/home");
    }
    else {
        res.redirect("/fail");
    }
})

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

// Feed to server
app.listen(process.env.PORT || 3000, function () {
    console.log("Server is running on port 3000");
});

