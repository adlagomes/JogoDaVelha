var jogador = "X";
var jogo = []; // Array que irá guardar e verificar os posições jogadas
var tabuleiro = [];; // Array que irá controlar/atualizar os elementos visuais
var quemJoga = 0; // jogador = 0 e cpu = 1
var verificarVitoria;
var partidaIniciada = true;
var turnoCpu = 1;
var quemComeca = 1;

function turnoJogador(p) {
    if((partidaIniciada) && (quemJoga == 0)){
        switch(p) {
            case 1:
                if(jogo[0][0] == ""){
                    jogo[0][0] = "X";
                    quemJoga = 1;
                }
                break;
            case 2:
                if(jogo[0][1] == ""){
                    jogo[0][1] = "X";
                    quemJoga = 1;
                }
                break;
            case 3:
                if(jogo[0][2] == ""){
                    jogo[0][2] = "X";
                    quemJoga = 1;
                }
                break;
            case 4:
                if(jogo[1][0] == ""){
                    jogo[1][0] = "X";
                    quemJoga = 1;
                }
                break;
            case 5:
                if(jogo[1][1] == ""){
                    jogo[1][1] = "X";
                    quemJoga = 1;
                }
                break;
            case 6:
                if(jogo[1][2] == ""){
                    jogo[1][2] = "X";
                    quemJoga = 1;
                }
                break;
            case 7:
                if(jogo[2][0] == ""){
                    jogo[2][0] = "X";
                    quemJoga = 1;
                }
                break;
            case 8:
                if(jogo[2][1] == ""){
                    jogo[2][1] = "X";
                    quemJoga = 1;
                }
                break;
            case 9:
                if(jogo[2][2] == ""){
                    jogo[2][2] = "X";
                    quemJoga = 1;
                }
                break;
        }
        attTabuleiro();
    }
}

function attTabuleiro() {
    for(var l = 0; l < 3; l++){
        for(var c = 0; c < 3; c++){
            if(jogo[l][c] == "X") {
                tabuleiro[l][c].innerHTML = "<img src='imgs/X.svg'>"
                tabuleiro[l][c].style.cursor = "default"
            } else if(jogo[l][c] == "O") {
                tabuleiro[l][c].innerHTML = "<img src='imgs/O.svg'>"
                tabuleiro[l][c].style.cursor = "default"
            } else {
                tabuleiro[l][c].innerHTML = ""
                tabuleiro[l][c].style.cursor = "pointer"
            }
        }
    }
}

function iniciar() {
    partidaIniciada == true
    turnoCpu = 1
    jogo = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];
    tabuleiro = [
        [document.getElementById("slot1"), document.getElementById("slot2"), document.getElementById("slot3") ],
        [document.getElementById("slot4"), document.getElementById("slot5"), document.getElementById("slot6") ],
        [document.getElementById("slot7"), document.getElementById("slot8"), document.getElementById("slot9") ]
    ];
}
window.addEventListener("load", iniciar);