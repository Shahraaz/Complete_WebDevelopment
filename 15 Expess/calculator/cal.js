let exprss = require('express');
let app = exprss();
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function(req, res) {
    // res.send(index.html);
    res.sendFile(__dirname + "\\index.html");
});
app.post('/', function(req, res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    // console.log(num1 + num2);
    res.send("Result is " + (num1 + num2));
});
app.get('/bmi', function(req, res) {
    // res.send(index.html);
    res.sendFile(__dirname + "\\bmiCal.html");
});
app.post('/bmi', function(req, res) {
    var ht = parseFloat(req.body.height);
    var wt = parseFloat(req.body.weight);
    console.log(ht + ' ' + wt);
    res.send("Result is " + wt / (ht * ht));
});
app.listen(3000, function() {

});