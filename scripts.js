const seletor1 = document.querySelector(".convert-from")
const seletor2 = document.querySelector(".convert-in")
const coinFlag1 = document.querySelector("#flag1")
const coinFlag2 = document.querySelector("#flag2")
const button = document.querySelector("button")
let coin2 = document.querySelector(".coin2")
let coin1 = document.querySelector(".coin1")


seletor2.addEventListener("change", converter)

// apertar o botao e converter o valor

button.addEventListener("click", converter)

function converter() {
    const input = document.querySelector("input").value
    let dolar = 0.17
    let euro = 0.16
    let libra = 0.14
    let bitcoin = 0.0000020
    let real = 1

    // adicionar os valores recebidos na tela
    //alterar valores das moedas
    const coinValue1 = document.querySelector("#coin-value1")
    const coinValue2 = document.querySelector("#coin-value2")

    if (seletor2.value == "dolar") {
        coinValue2.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(input * dolar)

    }


    coin2.innerHTML = "Dólar"
    coinFlag2.src = "./assets/usa.png"


    if (seletor2.value == "euro") {
        coinValue2.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(input * euro)

        coin2.innerHTML = "Euro"
        coinFlag2.src = "./assets/euro.png"

    }

    if (seletor2.value == "libra") {
        coinValue2.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(input * libra)

        coin2.innerHTML = "Libra"
        coinFlag2.src = "./assets/libra.png"
    }

    if (seletor2.value == "bitcoin") {
        coinValue2.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(input * bitcoin)

        coin2.innerHTML = "Bitcoin"
        coinFlag2.src = "./assets/bitcoin.png"
    }

    if (seletor2.value == "real") {
        coinValue2.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(input * real)

        coin2.innerHTML = "Real"
        coinFlag2.src = "./assets/brasil.png"
    }








        coinValue1.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(input)




    }













/*
let coin1value = 0
let coin2value = 0

seletor1.addEventListener("change", (changeCoin))

function changeCoin(){
    if(seletor1 == "R$ Real brasileiro"){
        coinFlag1.style.src =
    }
}*/