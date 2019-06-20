const express = require("express");
const bosyParser = require("body-parser");
const app = express();
const date = require(__dirname + "/date.js");

app.set('view engine', 'ejs');
app.use(bosyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

var items = ["But Food", "Cook Food", "Eat Food"];
var workItems = [];

app.get('/', function(req, res) {
    // res.send("Hello");
    res.render('list', {
        listTitle: date.getDate(),
        newListItems: items
    });
});

app.post('/', function(req, res) {
    var item = req.body.newItem;
    console.log(req.body);
    if (req.body.list === 'Work') {
        workItems.push(item);
        res.redirect("/work");
    } // console.log(item);
    items.push(item);
    res.redirect("/");
});

app.get('/work', function(req, res) {
    res.render('list', {
        listTitle: "Work List",
        newListItems: workItems
    });
});

app.post('/work', function(req, res) {
    var item = req.body.newItem;
    // console.log(item);
    res.redirect("/work");
});

app.get('/about', function(req, res) {
    res.render('about');
});

app.listen(4000, function() {
    console.log("Server started on port 3000");
});