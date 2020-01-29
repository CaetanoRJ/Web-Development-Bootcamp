var express = require('express');
var bodyParser = require('body-parser');

//temos bodyParser.json  , bodyParser.json, bodyParser.text (url encoded e usado para pegar dados via form)
var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}))


app.get('/', function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});


app.post('/', function (req, res) {
    var height = parseFloat(req.body.height);
    var weight = parseFloat(req.body.weight);
    var bmi = weight / Math.pow(height, 2);

    res.send("Seu BMI é " + bmi);

});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});