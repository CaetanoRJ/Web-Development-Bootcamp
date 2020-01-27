/*             Criando eventos de click */

//Cria um for para selecionar todos os botoes com classe .drum
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {



    document.querySelectorAll(".drum")[i].addEventListener("click", function () {


        var botaoClicado = this.innerHTML;

        switch (botaoClicado) {
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


    });
}


/****** Eventos para reagir ao pressionar de teclas *********/

document.addEventListener('keydown', (event) => {
    const teclaPressionada = event.key;

    switch (teclaPressionada) {
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




});

// função de selecao botao

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




/************** Adicionanto efeito de selecao ao pressionar uma tecla  ******************/
function selecaoDeBotao() {
    Document.querySelector(".drum").classList.add("invisible")
    setTimeout(selecaoDeBotao(), 3000);
}