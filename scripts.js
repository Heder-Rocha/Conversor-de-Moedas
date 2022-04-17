let select = document.getElementById("select-moedas")
let botao = document.getElementById("botao")


async function converterMoedas() {

    //https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL

let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then(function(resposta){
    return resposta.json()
})

let dolar = moedas.USDBRL.high
let euro = moedas.EURBRL.high

    

    let inputValorEmReais = Number(document.getElementById("input").value)
    let inputMoedas = document.getElementById("input-moedas")
    let inputReal = document.getElementById("input-real")

    if (select.value === "US$ Dolar Americano") {
        let valorEmDolares = inputValorEmReais / dolar
        inputMoedas.innerHTML = valorEmDolares.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    }


    if (select.value === "Є Euro") {
        let valorEmEuros = inputValorEmReais / euro
        inputMoedas.innerHTML = valorEmEuros.toLocaleString("de-DE", { style: "currency", currency: "EUR" })
    }


    inputReal.innerHTML = inputValorEmReais.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}

//Funcao que troca as bandeiras das moedas//
function trocaDeMoeda() {
    let textoMoedas = document.getElementById("texto-moedas")
    let bandeiraMoedas = document.getElementById("bandeira-moedas")


    if (select.value === "US$ Dolar Americano") {
        textoMoedas.innerHTML = "Dolar Americano"
        bandeiraMoedas.src = "./img/estados-unidos (1) 1.png"
    }

    if (select.value === "Є Euro") {
        textoMoedas.innerHTML = "Euro"
        bandeiraMoedas.src = "./img/Design sem nome 2.png"
    }

    converterMoedas()
}




botao.addEventListener("click", converterMoedas)
select.addEventListener("change", trocaDeMoeda)