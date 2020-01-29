var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});


app.get('/contact', function (req, res) {
    res.send('Hello contact');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});