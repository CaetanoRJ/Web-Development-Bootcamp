var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var iniciaJogo = true;
var level = 0;


document.addEventListener('keydown', (event) => {
    if (iniciaJogo === true) { //ou var iniciaJogo = true; e um  if (!iniciaJogo)
        $("#level-title").text("Level " + level);
        nextSequence();
        iniciaJogo = false;
    }
});

// array com os botoes clicados
$(".btn").click(function () { //$(".btn")retorna um array com 4 elementos

    var userChosenColour = $(this).attr("id"); //seleciona a cor que o usuario clickou pelo ID
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern + " o que foi clicado");

    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(((userClickedPattern.length) - 1))

});

function nextSequence() {

    level++
    var mudaH1 = $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4); //0 - 3
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    console.log(gamePattern + " Array gerado pelo jogo")
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    userClickedPattern = []
    /*   animatePress(randomChosenColour); */



}


function checkAnswer(elementoDoArray) {

    if (gamePattern[(elementoDoArray)] === userClickedPattern[(elementoDoArray)]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 700);


        }
    }
    if (gamePattern[(elementoDoArray)] !== userClickedPattern[(elementoDoArray)]) {
        $("body").addClass("game-over")
        setTimeout(function () {
            removeGameOver();
        }, 700);
        resetGame()
    }


}

function removeGameOver() {
    $("body").removeClass("game-over")
}

function resetGame() {
    gamePattern = [];
    userClickedPattern = [];
    iniciaJogo = true;
    level = 0;
    $("#level-title").text("GAME OVER,  pressione qualquer tecla para iniciar um novo jogo!");

}





function playSound(name) {
    var sound = new Audio("sounds/" + name + ".mp3");
    sound.play();
}


function animatePress(corClicada) {

    // $("#" + clicado).fadeIn(100).fadeOut(100).fadeIn(100);
    $("#" + corClicada).addClass("pressed")
    setTimeout(() => {
        $("#" + corClicada).removeClass("pressed");
    }, 150);

}