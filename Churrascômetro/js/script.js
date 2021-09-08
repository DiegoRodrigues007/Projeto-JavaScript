
let inputAdultos = document.getElementById("adultos");
let inputCrianca = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let resultado = document.getElementById("resultado");

function calcular(){

    let adultos = inputAdultos.value;
    let criancas = inputCrianca.value;
    let duracao = inputDuracao.value;

    let quantTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let quantTotalCerveja = cervjaPP(duracao) * adultos;
    let qunatTotalBebida = bebidaPP(duracao) * adultos + (bebidaPP(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>${quantTotalCarne / 1000} Kg de Carne </p>`
    resultado.innerHTML += `<p>${Math.ceil(quantTotalCerveja /355)} Latas de Cerveja </p>`
    resultado.innerHTML += `<p>${Math.ceil(qunatTotalBebida /2000)} 4 Pet's de 2L de Bebidas </p>`
}

function carnePP(duracao){
    if(duracao >= 6){
        return 650
    }
    else{
        return 400;
    }
}

function cervjaPP(duracao){
    if(duracao >= 6){
        return 2000
    }
    else{
        return 1200;
    }
}

function bebidaPP(duracao){
    if(duracao >= 6){
        return 1500
    }
    else{
        return 1000;
    }
}
