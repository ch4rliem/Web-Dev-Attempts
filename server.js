var express = require('express');
var app= express();


// or you can do it this way:

// var app = require('express')();

app.get('/', function(request, response){
    response.send('My First API!');
});

app.get('/funions', function(req, res) {
    res.send('Yo give me some funions foo!');
});
app.listen(3000, function() {
    console.log("First API running on port 3000!");
});