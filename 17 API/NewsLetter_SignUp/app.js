//Template Start
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
//Template End

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/signup.html');
});

app.post('/', function(req, res) {
    console.log(req.body.firstName);
    console.log(req.body.secondName);
    console.log(req.body.email);
});

app.listen(process.env.PORT || 3000, function() {
    console.log("Server is runnig on port 3000");
});

// 94bc5178628e3afa8fd03725a5158a3d-us3