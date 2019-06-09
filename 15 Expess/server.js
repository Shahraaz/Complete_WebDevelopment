const express = require('express');
const app = express();
app.get('/', function(request, response) {
    // console.log(request);
    response.send("<h1>Hello World</h1>");
});
app.get('/contact', function(request, response) {
    // console.log(request);
    response.send("Contact me at shahraazhussain@gmail.com");
});
app.get('/bio', function(request, response) {
    // console.log(request);
    response.send("I am Shahraaz Hussain from NIT Calicut CSE 2nd year");
});
app.listen(3000, function() {
    console.log("Server Started on Port 3000");
});