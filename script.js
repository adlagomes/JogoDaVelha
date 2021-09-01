var jogador = "X";
var jogo = []; // Array que irá guardar e verificar os posições jogadas
var tabuleiro = []; // Array que irá controlar/atualizar os elementos visuais
var verifica;
var partidaIniciada = true;
var turnoCpu = 1;
var quemJoga = 0; // jogador = 0 e cpu = 1
var quemComeca = 1;
var nivel = 2;
var ptsJogador = 0;
var ptsCPU = 0;
var jogada = 0;

async function turnoJogador(p) {
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
        if(quemJoga == 1){
            attTabuleiro()
            verifica = verificaVitoria()
            if(verifica != ""){
                partidaIniciada = false
                await sleep (50)
                alert(verifica + " VENCEU!")
                pontuacao()
            }

            function sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms))
            }
            jogada++;
            cpu();
        }
        
    }
}

async function cpu() {
    if(partidaIniciada == true){
        var l, c
        if(nivel == 1){
            do {
                l = Math.round(Math.random()*2)
                c = Math.round(Math.random()*2)
            } while (jogo[l][c] != "")
            jogo[l][c] = "O"
        } else if(nivel == 2){
            if(nivel == 2){
                // ATAQUE LINHAS
                if((jogo[0][0] == "O") && (jogo[0][1] == "O") && (jogo[0][2] == "")){
                    jogo[0][2] = "O"
                } else if ((jogo[0][0] == "O") && (jogo[0][2] == "O") && (jogo[0][1] == "")){
                    jogo[0][1] = "O"
                } else if ((jogo[0][2] == "O") && (jogo[0][1] == "O") && (jogo[0][0] == "")){
                    jogo[0][0] = "O"
                } else if ((jogo[1][0] == "O") && (jogo[1][1] == "O") && (jogo[1][2] == "")){
                    jogo[1][2] = "O"
                } else if ((jogo[1][0] == "O") && (jogo[1][2] == "O") && (jogo[1][1] == "")){
                    jogo[1][1] = "O"
                } else if ((jogo[1][2] == "O") && (jogo[1][1] == "O") && (jogo[1][0] == "")){
                    jogo[1][0] = "O"
                } else if ((jogo[2][0] == "O") && (jogo[2][1] == "O") && (jogo[2][2] == "")){
                    jogo[2][2] = "O"
                } else if ((jogo[2][0] == "O") && (jogo[2][2] == "O") && (jogo[2][1] == "")){
                    jogo[2][1] = "O"
                } else if ((jogo[2][2] == "O") && (jogo[2][1] == "O") && (jogo[2][0] == "")){
                    jogo[2][0] = "O"
                } else
                // ATAQUE DIAGONAIS
                if ((jogo[0][0] == "O") && (jogo[1][1] == "O") && (jogo[2][2] == "")){
                    jogo[2][2] = "O"
                } else if ((jogo[0][0] == "O") && (jogo[2][2] == "O") && (jogo[1][1] == "")){
                    jogo[1][1] = "O"
                } else if ((jogo[1][1] == "O") && (jogo[2][2] == "O") && (jogo[0][0] == "")){
                    jogo[0][0] = "O"
                } else if ((jogo[2][0] == "O") && (jogo[1][1] == "O") && (jogo[0][2] == "")){
                    jogo[0][2] = "O"
                } else if ((jogo[2][0] == "O") && (jogo[0][2] == "O") && (jogo[1][1] == "")){
                    jogo[1][1] = "O"
                } else if ((jogo[1][1] == "O") && (jogo[0][2] == "O") && (jogo[2][0] == "")){
                    jogo[2][0] = "O"
                } else
                // ATAQUE COLUNAS
                if ((jogo[0][0] == "O") && (jogo[1][0] == "O") && (jogo[2][0] == "")){
                    jogo[2][0] = "O"
                } else if ((jogo[0][0] == "O") && (jogo[2][0] == "O") && (jogo[1][0] == "")){
                    jogo[1][0] = "O"
                } else if ((jogo[1][0] == "O") && (jogo[2][0] == "O") && (jogo[0][0] == "")){
                    jogo[0][0] = "O"
                } else if ((jogo[0][1] == "O") && (jogo[1][1] == "O") && (jogo[2][1] == "")){
                    jogo[2][1] = "O"
                } else if ((jogo[0][1] == "O") && (jogo[2][1] == "O") && (jogo[1][1] == "")){
                    jogo[1][1] = "O"
                } else if ((jogo[1][1] == "O") && (jogo[2][1] == "O") && (jogo[0][1] == "")){
                    jogo[0][1] = "O"
                } else if ((jogo[0][2] == "O") && (jogo[1][2] == "O") && (jogo[2][2] == "")){
                    jogo[2][2] = "O"
                } else if ((jogo[0][2] == "O") && (jogo[2][2] == "O") && (jogo[1][2] == "")){
                    jogo[1][2] = "O"
                } else if ((jogo[1][2] == "O") && (jogo[2][2] == "O") && (jogo[0][2] == "")){
                    jogo[0][2] = "O"
                } else
                // DEFESA LINHAS
                if((jogo[0][0] == "X") && (jogo[0][1] == "X") && (jogo[0][2] == "")){
                    jogo[0][2] = "O"
                } else if ((jogo[0][0] == "X") && (jogo[0][2] == "X") && (jogo[0][1] == "")){
                    jogo[0][1] = "O"
                } else if ((jogo[0][2] == "X") && (jogo[0][1] == "X") && (jogo[0][0] == "")){
                    jogo[0][0] = "O"
                } else if ((jogo[1][0] == "X") && (jogo[1][1] == "X") && (jogo[1][2] == "")){
                    jogo[1][2] = "O"
                } else if ((jogo[1][0] == "X") && (jogo[1][2] == "X") && (jogo[1][1] == "")){
                    jogo[1][1] = "O"
                } else if ((jogo[1][2] == "X") && (jogo[1][1] == "X") && (jogo[1][0] == "")){
                    jogo[1][0] = "O"
                } else if ((jogo[2][0] == "X") && (jogo[2][1] == "X") && (jogo[2][2] == "")){
                    jogo[2][2] = "O"
                } else if ((jogo[2][0] == "X") && (jogo[2][2] == "X") && (jogo[2][1] == "")){
                    jogo[2][1] = "O"
                } else if ((jogo[2][2] == "X") && (jogo[2][1] == "X") && (jogo[2][0] == "")){
                    jogo[2][0] = "O"
                } else
                // DEFESA DIAGONAIS
                if ((jogo[0][0] == "X") && (jogo[1][1] == "X") && (jogo[2][2] == "")){
                    jogo[2][2] = "O"
                } else if ((jogo[0][0] == "X") && (jogo[2][2] == "X") && (jogo[1][1] == "")){
                    jogo[1][1] = "O"
                } else if ((jogo[1][1] == "X") && (jogo[2][2] == "X") && (jogo[0][0] == "")){
                    jogo[0][0] = "O"
                } else if ((jogo[2][0] == "X") && (jogo[1][1] == "X") && (jogo[0][2] == "")){
                    jogo[0][2] = "O"
                } else if ((jogo[2][0] == "X") && (jogo[0][2] == "X") && (jogo[1][1] == "")){
                    jogo[1][1] = "O"
                } else if ((jogo[1][1] == "X") && (jogo[0][2] == "X") && (jogo[2][0] == "")){
                    jogo[2][0] = "O"
                } else
                // DEFESA COLUNAS
                if ((jogo[0][0] == "X") && (jogo[1][0] == "X") && (jogo[2][0] == "")){
                    jogo[2][0] = "O"
                } else if ((jogo[0][0] == "X") && (jogo[2][0] == "X") && (jogo[1][0] == "")){
                    jogo[1][0] = "O"
                } else if ((jogo[1][0] == "X") && (jogo[2][0] == "X") && (jogo[0][0] == "")){
                    jogo[0][0] = "O"
                } else if ((jogo[0][1] == "X") && (jogo[1][1] == "X") && (jogo[2][1] == "")){
                    jogo[2][1] = "O"
                } else if ((jogo[0][1] == "X") && (jogo[2][1] == "X") && (jogo[1][1] == "")){
                    jogo[1][1] = "O"
                } else if ((jogo[1][1] == "X") && (jogo[2][1] == "X") && (jogo[0][1] == "")){
                    jogo[0][1] = "O"
                } else if ((jogo[0][2] == "X") && (jogo[1][2] == "X") && (jogo[2][2] == "")){
                    jogo[2][2] = "O"
                } else if ((jogo[0][2] == "X") && (jogo[2][2] == "X") && (jogo[1][2] == "")){
                    jogo[1][2] = "O"
                } else if ((jogo[1][2] == "X") && (jogo[2][2] == "X") && (jogo[0][2] == "")){
                    jogo[0][2] = "O"
                } else {
                if(jogada < 8){    
                    do {
                        l = Math.round(Math.random()*2)
                        c = Math.round(Math.random()*2)
                    } while (jogo[l][c] != "")
                    jogo[l][c] = "O";
                } else {
                    for(var l = 0; l < 3; l++){
                        for(var c = 0; c < 3; c++){
                            if(jogo[l][c] == ""){
                                jogo[l][c] = "O";
                            }
                        }
                    }
                }
            }
        }
    }
        attTabuleiro()
        verifica = verificaVitoria()
        if(verifica != ""){
            partidaIniciada = false
            await sleep (50)
            alert(verifica + " VENCEU!")
        }

        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms))
        }
        jogada++
        quemJoga = 0
        pontuacao()
    }
}

function verificaVitoria(){
    var l, c
    //LINHAS
    for(l = 0; l < 3; l++){
        if((jogo[l][0] == jogo[l][1]) && (jogo[l][1] == jogo[l][2])){
            return jogo[l][0]
        }
    }
    //COLUNAS
    for(c = 0; c < 3; c++){
        if((jogo[0][c] == jogo [1][c]) && (jogo[1][c] == jogo[2][c])){
            return jogo[0][c]
        }
    }
    //DIAGONAIS
    if((jogo[0][0] == jogo [1][1]) && (jogo[1][1] == jogo[2][2])){
        return jogo[0][0]
    } else if ((jogo[2][0] == jogo [1][1]) && (jogo[1][1] == jogo[0][2])) {
        return jogo[2][0]
    }
        return ""
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
    partidaIniciada = true;
    turnoCpu = 1;
    jogada = 0;
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
    attTabuleiro();
    if(quemComeca == 1){
        quemComeca = 0;
        quemJoga = quemComeca;
        document.getElementById("turno").innerHTML = "Jogador";
    } else {
        quemComeca = 1;
        quemJoga = quemComeca;
        document.getElementById("turno").innerHTML = "CPU";
        cpu();
    }
}
window.addEventListener("load", iniciar);


function pontuacao(){
    verifica = verificaVitoria()
    if(verifica == "X"){
        ptsJogador++
        document.getElementById("ptsJogador").innerHTML = `${ptsJogador}`
    } else if (verifica == "O"){
        ptsCPU++
        document.getElementById("ptsCPU").innerHTML = `${ptsCPU}`
    }
}