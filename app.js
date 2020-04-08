const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({
    extended: true
}))

app.get("/", function(req, res) {
    console.log("Server is running on port 000");
    res.sendFile(__dirname + "/index.html")
})

app.listen(process.env.PORT || 3000, function() {
    console.log("Server is running on port 3000");
});

