var express = require('express');
const bodyParser = require('body-parser');

var app = express();

app.get('/', function (req, res) {
    var a = 2 + 1;
    res.send("" + a);


});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});