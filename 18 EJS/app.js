const express = require("express");
const bosyParser = require("body-parser");
const app = express();


app.set('view engine', 'ejs');
app.use(bosyParser.urlencoded({ extended: true }));

var items = ["But Food", "Cook Food", "Eat Food"];

app.get('/', function(req, res) {
    // res.send("Hello");
    var today = new Date();
    var day = "";
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    var day = today.toLocaleDateString("en-US", options);
    res.render('list', {
        kindOfDay: day,
        newListItems: items
    });
});

app.post('/', function(req, res) {
    var item = req.body.newItem;
    // console.log(item);
    items.push(item);
    res.redirect("/");
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});