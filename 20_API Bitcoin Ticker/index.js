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

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

//metodo para recuperar o que o usuario selecionou
app.post("/", function(req, res) {
  var moeda = req.body.crypto;
  var data = req.body.data;

  /*parametros para serem passados no request(valores depois da ?)
  na aula:
  var options = {
    
    url: "URL ANTES DA ?", //tudo antes da ?
    method: "GET",
    qs: {
      from: crypto
      to:fiat,
      amount: amount
    }
  };
  */
  var options = {
    url: "https://www.mercadobitcoin.net/api/BTC/trades/", //tudo antes da ?
    method: "GET",
    qs: {
      since: data
    }
  };

  request(options, function(error, response, body) {
    /*
    console.log("error:", error); // Print the error if one occurred
    console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    console.log("body:", body); // Print the HTML for the Google homepage.
    console.log("body: " + body); 
    */

    var data = JSON.parse(body); //converte o Json para javascript
    var pricelast = data[0].tid; //seleciona o o objeto do jason convertido para javascript objeto
    /*     console.log(data);
        console.log(pricelast);
        console.log(request); */
    /* res.send("O valor do atual do " + moeda + " é " + pricelast + " R$") */
    res.write("<p>O preco foi: " + data[0].price + "</p>");
    res.write("<p>A quantidade foi: " + data[0].amount + "</p>");
    res.write("<p>O tipo foi: " + data[0].type + "</p>");
    res.send();
  });
});

app.listen(3000, function() {
  console.log("server is running on port 3000.");
});
