const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post('/', function(req, res) {
    console.log(req.body.crypto);
    console.log(req.body.fiat);
    request("https://apiv2.bitcoinaverage.com/indices/global/ticker/" + req.body.crypto + req.body.fiat, function(err, req, body) {
        var data = JSON.parse(body);
        console.log(data.last);
        res.send("<h1>The current BitCoin price is " + data.last + " " + req.body.fiat + "</h1>");
    });
});

app.listen(3000, function() {
    console.log("Server is running on port 3000.");
});