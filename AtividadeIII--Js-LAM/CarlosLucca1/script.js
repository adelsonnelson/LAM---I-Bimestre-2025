//variáveis: declaradas por: 
//    let: mutável           const: pode trazer elementos do HTML
//while, for, if, else

const body = document.body;
const plusButton = document.getElementById('plus'); 
const value = document.getElementById('value');
let count  = 0;


function mudarCor(){
    body.style.background = "#0d9fd3";
}

function voltarCor(){
    body.style.background = "#e0e0e0";
}


function acrescentar(){
    count ++;
    value.innerHTML = count;
}
    
