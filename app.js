const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express;

app.request(express.static("public"));

app.request(bodyParser.urlencoded({
    extended: true
}))

app.get("/", function(req, res) {
    console.log("Server is running on port 000");
    res.sendFile(__dirname + "/index.html")
})