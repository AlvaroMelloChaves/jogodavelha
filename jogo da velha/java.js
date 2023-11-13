// Função para limpar o valor das div's
function jogar(){
    
    // Laço para alterar texto das div's
    for(i=1; i<=9;i++){
        var quad = document.getElementById(i);
        quad.innerHTML = "";
        document.getElementById(i).style.backgroundColor = "";
    }
    
    // Alterar o nome do botão
    document.getElementById('jogar').innerHTML = "REINICIAR";
      
}

// Declara valor para o jogador "X" iniciar o jogo
var X = 1;
var O = 0;
var VX = 0;
var VO = 0;
// Função para marcar "X" ou "O"
function linha(quadrado) {
    
    // var jogada = document.getElementById(quadrado);
    
    // Verifica conteúdo antes de executar a jogada
    if (document.getElementById(quadrado).innerHTML === "") {
        
        // Verifica de quem é a vez da jogada
        if (X == 1) {
            document.getElementById(quadrado).innerHTML = "X";
            X = 0;
            O = 1;
            
            if(document.getElementById(1).innerHTML ===  "X" && "X" === document.getElementById(2).innerHTML && "X" === document.getElementById(3).innerHTML){
                alert("O jogador 'X' ganhou!");
                VX = VX + 1;
                document.getElementById('VX').innerHTML = VX;
                document.getElementById(1).style.backgroundColor = "blue";
                document.getElementById(2).style.backgroundColor = "blue";
                document.getElementById(3).style.backgroundColor = "blue";
            }

            else if (document.getElementById(4).innerHTML === "X" && "X" === document.getElementById(5).innerHTML && "X" === document.getElementById(6).innerHTML){
                alert("O jogador 'X' ganhou!");
                VX = VX + 1;
                document.getElementById('VX').innerHTML = VX;
                document.getElementById('VX').innerHTML = VX;
                document.getElementById(4).style.backgroundColor = "blue";
                document.getElementById(5).style.backgroundColor = "blue";
                document.getElementById(6).style.backgroundColor = "blue";                
            }

            else if(document.getElementById(7).innerHTML === "X" && "X" === document.getElementById(8).innerHTML && "X" === document.getElementById(9).innerHTML){
                alert("O jogador 'X' ganhou!");
                VX = VX + 1;
                document.getElementById('VX').innerHTML = VX;
                document.getElementById('VX').innerHTML = VX;
                document.getElementById(7).style.backgroundColor = "blue";
                document.getElementById(8).style.backgroundColor = "blue";
                document.getElementById(9).style.backgroundColor = "blue";
            }

            else if(document.getElementById(1).innerHTML ===  "X" && "X" === document.getElementById(4).innerHTML && "X" === document.getElementById(7).innerHTML){
                alert("O jogador 'X' ganhou!");
                VX = VX + 1;
                document.getElementById('VX').innerHTML = VX;
                document.getElementById('VX').innerHTML = VX;
                document.getElementById(1).style.backgroundColor = "blue";
                document.getElementById(4).style.backgroundColor = "blue";
                document.getElementById(7).style.backgroundColor = "blue";  
            }

            else if (document.getElementById(2).innerHTML === "X" && "X" === document.getElementById(5).innerHTML && "X" === document.getElementById(8).innerHTML){
                alert("O jogador 'X' ganhou!");
                VX = VX + 1;
                document.getElementById('VX').innerHTML = VX;
                document.getElementById('VX').innerHTML = VX;
                document.getElementById(2).style.backgroundColor = "blue";
                document.getElementById(5).style.backgroundColor = "blue";
                document.getElementById(8).style.backgroundColor = "blue";
            }

            else if(document.getElementById(3).innerHTML === "X" && "X" === document.getElementById(6).innerHTML && "X" === document.getElementById(9).innerHTML){
                alert("O jogador 'X' ganhou!");
                VX = VX + 1;
                document.getElementById('VX').innerHTML = VX;
                document.getElementById('VX').innerHTML = VX;
                document.getElementById(3).style.backgroundColor = "blue";
                document.getElementById(6).style.backgroundColor = "blue";
                document.getElementById(9).style.backgroundColor = "blue";
            }

            else if(document.getElementById(1).innerHTML ===  "X" && "X" === document.getElementById(4).innerHTML && "X" === document.getElementById(7).innerHTML){
                alert("O jogador 'X' ganhou!");
                VX = VX + 1;
                document.getElementById('VX').innerHTML = VX;
                document.getElementById('VX').innerHTML = VX;
                document.getElementById(1).style.backgroundColor = "blue";
                document.getElementById(4).style.backgroundColor = "blue";
                document.getElementById(7).style.backgroundColor = "blue";
            }

            else if (document.getElementById(1).innerHTML === "X" && "X" === document.getElementById(5).innerHTML && "X" === document.getElementById(9).innerHTML){
                alert("O jogador 'X' ganhou!");
                VX = VX + 1;
                document.getElementById('VX').innerHTML = VX;
                document.getElementById('VX').innerHTML = VX;
                document.getElementById(1).style.backgroundColor = "blue";
                document.getElementById(5).style.backgroundColor = "blue";
                document.getElementById(9).style.backgroundColor = "blue";
            }

            else if(document.getElementById(3).innerHTML === "X" && "X" === document.getElementById(5).innerHTML && "X" === document.getElementById(7).innerHTML){
                alert("O jogador 'X' ganhou!");
                VX = VX + 1;
                document.getElementById('VX').innerHTML = VX;
                document.getElementById('VX').innerHTML = VX;
                document.getElementById(3).style.backgroundColor = "blue";
                document.getElementById(5).style.backgroundColor = "blue";
                document.getElementById(7).style.backgroundColor = "blue";
            }
        }
        else {
            document.getElementById(quadrado).innerHTML = "O";
            X = 1;
            O = 0;

            if(document.getElementById(1).innerHTML ===  "O" && "O" === document.getElementById(2).innerHTML && "O" === document.getElementById(3).innerHTML){
                alert("O jogador 'O' ganhou!");
                VO = VO + 1;
                document.getElementById('VO').innerHTML = VO;
                document.getElementById('VX').innerHTML = VX;
                document.getElementById(1).style.backgroundColor = "yellow";
                document.getElementById(2).style.backgroundColor = "yellow";
                document.getElementById(3).style.backgroundColor = "yellow";
            }

            else if (document.getElementById(4).innerHTML === "O" && "O" === document.getElementById(5).innerHTML && "O" === document.getElementById(6).innerHTML){
                alert("O jogador 'O' ganhou!");
                VO = VO + 1;
                document.getElementById('VO').innerHTML = VO;
                document.getElementById(4).style.backgroundColor = "yellow";
                document.getElementById(5).style.backgroundColor = "yellow";
                document.getElementById(6).style.backgroundColor = "yellow";
            }

            else if(document.getElementById(7).innerHTML === "O" && "O" === document.getElementById(8).innerHTML && "O" === document.getElementById(9).innerHTML){
                alert("O jogador 'O' ganhou!");
                VO = VO + 1;
                document.getElementById('VO').innerHTML = VO;
                document.getElementById(7).style.backgroundColor = "yellow";
                document.getElementById(8).style.backgroundColor = "yellow";
                document.getElementById(9).style.backgroundColor = "yellow";
            }

            else if(document.getElementById(1).innerHTML ===  "O" && "O" === document.getElementById(4).innerHTML && "O" === document.getElementById(7).innerHTML){
                alert("O jogador 'O' ganhou!");
                VO = VO + 1;
                document.getElementById('VO').innerHTML = VO;
                document.getElementById(1).style.backgroundColor = "yellow";
                document.getElementById(4).style.backgroundColor = "yellow";
                document.getElementById(7).style.backgroundColor = "yellow";  
            }

            else if (document.getElementById(2).innerHTML === "O" && "O" === document.getElementById(5).innerHTML && "O" === document.getElementById(8).innerHTML){
                alert("O jogador 'O' ganhou!");
                VO = VO + 1;
                document.getElementById('VO').innerHTML = VO;
                document.getElementById(2).style.backgroundColor = "yellow";
                document.getElementById(5).style.backgroundColor = "yellow";
                document.getElementById(8).style.backgroundColor = "yellow";
            }

            else if(document.getElementById(3).innerHTML === "O" && "O" === document.getElementById(6).innerHTML && "O" === document.getElementById(9).innerHTML){
                alert("O jogador 'O' ganhou!");
                VO = VO + 1;
                document.getElementById('VO').innerHTML = VO;
                document.getElementById(3).style.backgroundColor = "yellow";
                document.getElementById(6).style.backgroundColor = "yellow";
                document.getElementById(9).style.backgroundColor = "yellow";
            }

            else if (document.getElementById(1).innerHTML === "O" && "O" === document.getElementById(5).innerHTML && "O" === document.getElementById(9).innerHTML){
                alert("O jogador 'O' ganhou!");
                VO = VO + 1;
                document.getElementById('VO').innerHTML = VO;
                document.getElementById(1).style.backgroundColor = "yellow";
                document.getElementById(5).style.backgroundColor = "yellow";
                document.getElementById(9).style.backgroundColor = "yellow";
            }

            else if(document.getElementById(3).innerHTML === "O" && "O" === document.getElementById(5).innerHTML && "O" === document.getElementById(7).innerHTML){
                alert("O jogador 'O' ganhou!");
                VO = VO + 1;
                document.getElementById('VO').innerHTML = VO;
                document.getElementById(3).style.backgroundColor = "yellow";
                document.getElementById(5).style.backgroundColor = "yellow";
                document.getElementById(7).style.backgroundColor = "yellow";
            }
            
        }
    }
    else {
        alert("Este quadrado já foi escolhido. Escolha outro!");
    }
}