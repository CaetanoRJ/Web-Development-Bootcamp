/*             Criando eventos de click */

//Cria um for para selecionar todos os botoes com classe .drum
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {


    // evento para selecionar um instrumento pelo click do mouse
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {


        var botaoClicado = this.innerHTML;

        playSound(botaoClicado);
        selecaoDeBotao(botaoClicado);

    });
}


/****** Eventos para reagir ao pressionar o teclado *********/
document.addEventListener('keydown', (event) => {
    const teclaPressionada = event.key;
    playSound(teclaPressionada);

    /* ou colocamos direto: 
    document.addEventListener('keydown', (event) => {
    const teclaPressionada = event.key;
    */

});

// criando uma Funcao para seleco de SOM a partir da tecla criada
function playSound(key) {
    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "f":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;


        default:
            break;
    }


}




/************** Adicionanto efeito visual de selecao ao pressionar uma tecla  ******************/
function selecaoDeBotao(teclaClicada) {
    document.querySelector("." + teclaClicada).classList.add("pressed");

    setTimeout(function () {
        document.querySelector("." + teclaClicada).classList.remove("pressed");
    }, 150);

}