var gamePattern = [];

var arrayColours = ["red", "blue", "green", "yellow"];

var userClickedPattern = []

var randomNumber = Math.floor(Math.random() * 4); //0-3




var randomChosenColour = arrayColours[randomNumber];




function nextSequence() {}

//diciona a cor aleatoria no fim do array gamePattern
gamePattern.push(randomChosenColour)

$("input").click(function (e) {
    var idClicked = e.target.id;
    this.push(userClickedPattern)
});




//faz o botão piscar
$("#" + randomChosenColour).fadeOut(250).fadeIn(250);



function playSound() {
    var Sound = new Audio("sounds/" + randomChosenColour + ".mp3");
    Sound.play();
};