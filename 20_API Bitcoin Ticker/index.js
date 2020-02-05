//jshint esversion: 6

var express = require("express");
var bodyParser = require("body-parser");
var request = require("request");

var app = express();

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

//metodo para recuperar o que o usuario selecionou
app.post("/", function (req, res) {
  var moeda = req.body.crypto;

  request("https://www.mercadobitcoin.net/api/" + moeda + "/ticker/", function (
    error,
    response,
    body
  ) {
    /*
    console.log("error:", error); // Print the error if one occurred
    console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    console.log("body:", body); // Print the HTML for the Google homepage.
    console.log("body: " + body); 
    */

    var data = JSON.parse(body); //converte o Json para javascript
    var pricelast = data.ticker.last; //seleciona o low do javascript
    /*     console.log(data);
        console.log(pricelast);
        console.log(request); */
    res.send("O valor do atual do " + moeda + " é " + pricelast + " R$")


  });

});

app.listen(3000, function () {
  console.log("server is running on port 3000.");
});