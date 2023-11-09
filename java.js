function jogar(){
    for( i=1; i<=9; i++){
        var quad = document.getElementById('linha_' +1)
    quadrado.innerHTML = "";
}

var button = document.getElementById('jogar');
button.innerHTML = "reiniciar";
}

var X = 1;
var O = 0;

function linha(quadrado){
    
    var jogada = document.getElementById(quadrado);

    if(X == 1){
        jogada.innerHTML = "X";
    X = 0;
    O = 1;
    
    }
    else {
        jogada.innerHTML = "O";
        X = 1;
        O = 0;
    }
}








// function linha2(){
//     if(X == 1)
//     {
//     var quadrado = document.getElementById('linha1');
//     quadrado.innerHTML = "X";
//     X = 0;
//     O = 1;
// }

//     else {
//         var quadrado = document.getElementById('linha1');
//         quadrado.innerHTML = "O";
//         X = 1;
//         O = 0;
//     }
// }

// function linha3(){
//     if(X == 1)
//     {
//     var quadrado = document.getElementById('linha1');
//     quadrado.innerHTML = "X";
//     X = 0;
//     O = 1;
// }

//     else {
//         var quadrado = document.getElementById('linha1');
//         quadrado.innerHTML = "O";
//         X = 1;
//         O = 0;
//     }
// }

// function linha4(){
//     if(X == 1)
//     {
//     var quadrado = document.getElementById('linha1');
//     quadrado.innerHTML = "X";
//     X = 0;
//     O = 1;
// }

//     else {
//         var quadrado = document.getElementById('linha1');
//         quadrado.innerHTML = "O";
//         X = 1;
//         O = 0;
//     }
// }

// function linha5(){
//     if(X == 1)
//     {
//     var quadrado = document.getElementById('linha1');
//     quadrado.innerHTML = "X";
//     X = 0;
//     O = 1;
// }

//     else {
//         var quadrado = document.getElementById('linha1');
//         quadrado.innerHTML = "O";
//         X = 1;
//         O = 0;
//     }
// }

// function linha6(){
//     if(X == 1)
//     {
//     var quadrado = document.getElementById('linha2');
//     quadrado.innerHTML = "X";
//     X = 0;
//     O = 1;
// }

//     else {
//         var quadrado = document.getElementById('linha3');
//         quadrado.innerHTML = "O";
//         X = 1;
//         O = 0;
//     }
// }

// function linha7(){
//     if(X == 1)
//     {
//     var quadrado = document.getElementById('linha4');
//     quadrado.innerHTML = "X";
//     X = 0;
//     O = 1;
// }

//     else {
//         var quadrado = document.getElementById('linha5');
//         quadrado.innerHTML = "O";
//         X = 1;
//         O = 0;
//     }
// }

// function linha8(){
//     if(X == 1)
//     {
//     var quadrado = document.getElementById('linha6');
//     quadrado.innerHTML = "X";
//     X = 0;
//     O = 1;
// }

//     else {
//         var quadrado = document.getElementById('linha7');
//         quadrado.innerHTML = "O";
//         X = 1;
//         O = 0;
//     }
// }

// function linha9(){
//     if(X == 1)
//     {
//     var quadrado = document.getElementById('linha8');
//     quadrado.innerHTML = "X";
//     X = 0;
//     O = 1;
// }

//     else {
//         var quadrado = document.getElementById('linha9');
//         quadrado.innerHTML = "O";
//         X = 1;
//         O = 0;
//     }
// }