const seletor1 = document.querySelector(".convert-from")
const seletor2 = document.querySelector(".convert-in")
const coinFlag1 = document.querySelector("#flag1")
const coinFlag2 = document.querySelector("#flag2")
const button = document.querySelector("button")
let coin2 = document.querySelector(".coin2")
let coin1 = document.querySelector(".coin1")

seletor1.addEventListener("change", converter)
seletor2.addEventListener("change", converter)

// apertar o botao e converter o valor

button.addEventListener("click", converter)

async function converter() {

    const moedas = await fetch("https://economia.awesomeapi.com.br/json/last/USD-EUR,USD-GBP,BTC-USD,BRL-USD,BRL-EUR,BRL-GBP,BTC-BRL,EUR-GBP,BTC-EUR").then(res => res.json())

    console.log(moedas)

    if (seletor1.value == "real") {
        const input = document.querySelector("input").value
        let dolar = moedas.BRLUSD.high
        let euro = moedas.BRLEUR.high
        let libra = moedas.BRLGBP.high
        let bitcoin = moedas.BTCBRL.high
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
                currency: "BTC",
                maximumFractionDigits: 7
            }).format(input / bitcoin)

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

        coin1.innerHTML = "Real"
        coinFlag1.src = "./assets/brasil.png"

        coinValue1.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(input)
    }

    if (seletor1.value == "dolar") {

        coin1.innerHTML = "Dólar"
        coinFlag1.src = "./assets/usa.png"

        const input = document.querySelector("input").value
        let dolar = 1
        let euro = moedas.USDEUR.high
        let libra = moedas.USDGBP.high
        let bitcoin = moedas.BTCEUR.high
        let real = moedas.BRLUSD.high

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
                currency: "BTC",
                maximumFractionDigits: 7
            }).format(input / bitcoin)

            coin2.innerHTML = "Bitcoin"
            coinFlag2.src = "./assets/bitcoin.png"
        }

        if (seletor2.value == "real") {
            coinValue2.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(input / real)

            coin2.innerHTML = "Real"
            coinFlag2.src = "./assets/brasil.png"
        }


        coinValue1.innerHTML = new Intl.NumberFormat('en-BR', {
            style: 'currency',
            currency: 'USD'
        }).format(input)
    }

    if (seletor1.value == "euro") {

        coin1.innerHTML = "Euro"
        coinFlag1.src = "./assets/euro.png"

        const input = document.querySelector("input").value
        let dolar = moedas.USDEUR.high
        let euro = 1
        let libra = moedas.EURGBP.high
        let bitcoin = moedas.BTCEUR.high
        let real = moedas.BRLEUR.high

        // adicionar os valores recebidos na tela
        //alterar valores das moedas
        const coinValue1 = document.querySelector("#coin-value1")
        const coinValue2 = document.querySelector("#coin-value2")

        if (seletor2.value == "dolar") {
            coinValue2.innerHTML = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            }).format(input / dolar)

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
                currency: "BTC",
                maximumFractionDigits: 7
            }).format(input / bitcoin)

            coin2.innerHTML = "Bitcoin"
            coinFlag2.src = "./assets/bitcoin.png"
        }

        if (seletor2.value == "real") {
            coinValue2.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(input / real)

            coin2.innerHTML = "Real"
            coinFlag2.src = "./assets/brasil.png"
        }


        coinValue1.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(input)
    }

    if (seletor1.value == "libra") {

        coin1.innerHTML = "Libra"
        coinFlag1.src = "./assets/libra.png"

        const input = document.querySelector("input").value
        let dolar = moedas.USDGBP.high
        let euro = moedas.EURGBP.high
        let libra = 1
        let bitcoin = 0.000014
        let real = moedas.BRLGBP.high

        // adicionar os valores recebidos na tela
        //alterar valores das moedas
        const coinValue1 = document.querySelector("#coin-value1")
        const coinValue2 = document.querySelector("#coin-value2")

        if (seletor2.value == "dolar") {
            coinValue2.innerHTML = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            }).format(input / dolar)

        }


        coin2.innerHTML = "Dólar"
        coinFlag2.src = "./assets/usa.png"


        if (seletor2.value == "euro") {
            coinValue2.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(input / euro)

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
                currency: "BTC",
                maximumFractionDigits: 7
            }).format(input * bitcoin)

            coin2.innerHTML = "Bitcoin"
            coinFlag2.src = "./assets/bitcoin.png"
        }

        if (seletor2.value == "real") {
            coinValue2.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(input / real)

            coin2.innerHTML = "Real"
            coinFlag2.src = "./assets/brasil.png"
        }


        coinValue1.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'GBP'
        }).format(input)
    }

    if (seletor1.value == "bitcoin") {

        coin1.innerHTML = "Bitcoin"
        coinFlag1.src = "./assets/bitcoin.png"

        const input = document.querySelector("input").value
        let dolar = moedas.BTCUSD.high
        let euro = moedas.BTCEUR.high
        let libra = 72712.50
        let bitcoin = 1
        let real = moedas.BTCBRL.high

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
                currency: "BTC",
                maximumFractionDigits: 7
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


        coinValue1.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'BTC'
        }).format(input)
    }

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