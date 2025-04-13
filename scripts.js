const seletor1 = document.querySelector(".convert-from")
const seletor2 = document.querySelector(".convert-in")
const button = document.querySelector("button")

seletor1.addEventListener("change", converter)
seletor2.addEventListener("change", converter)
// apertar o botao e converter o valor
button.addEventListener("click", converter)

async function converter() {

    const coins = await fetch("https://economia.awesomeapi.com.br/json/last/USD-EUR,USD-GBP,USD-BRL,BTC-USD,BRL-USD,BRL-EUR,BRL-GBP,BTC-BRL,EUR-GBP,EUR-USD,EUR-BRL,BTC-EUR,GBP-EUR,GBP-BRL,GBP-USD").then(res => res.json())

    const moedas = {
        USD: { BRL: coins.USDBRL.high, EUR: coins.USDEUR.high, GBP: coins.USDGBP.high },
        GBP: { BRL: coins.GBPBRL.high, EUR: coins.GBPEUR.high, USD: coins.GBPUSD.high },
        BRL: { USD: coins.BRLUSD.high, EUR: coins.BRLEUR.high, GBP: coins.BRLGBP.high },
        EUR: { BRL: coins.EURBRL.high, USD: coins.EURUSD.high, GBP: coins.EURGBP.high },
    }

    const taxas = (origem, destino) => {
        if (origem === destino) return 1
        return moedas[origem]?.[destino] || null
    }
    let origem = seletor1.value
    let destino = seletor2.value
    const value = document.querySelector("input").value

    const coinValue1 = document.querySelector("#coin-value1")
    const coinValue2 = document.querySelector("#coin-value2")

    const coinFlag1 = document.querySelector("#flag1")
    const coinFlag2 = document.querySelector("#flag2")

    let coin2 = document.querySelector(".coin2")
    let coin1 = document.querySelector(".coin1")

    const taxa = taxas(origem, destino)

    if (taxa === null) {
        alert("Erro inesperado!")
    }

    // moeda origem

    if (origem === "BRL") {
        coinValue1.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(value)

        coin1.innerHTML = "Real"
        coinFlag1.src = "./assets/brasil.png"
    }
    else if (origem === "EUR") {
        coinValue1.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(value)

        coin1.innerHTML = "Euro"
        coinFlag1.src = "./assets/euro.png"
    }
    else if (origem === "USD") {
        coinValue1.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(value)

        coin1.innerHTML = "Dólar"
        coinFlag1.src = "./assets/usa.png"
    }
    else {
        coinValue1.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(value)

        coin1.innerHTML = "Libra"
        coinFlag1.src = "./assets/libra.png"
    }

    // moeda destinataria

    if (destino === "BRL") {
        coinValue2.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(taxa * value)

        coin2.innerHTML = "Real"
        coinFlag2.src = "./assets/brasil.png"
    }
    else if (destino === "EUR") {
        coinValue2.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(taxa * value)

        coin2.innerHTML = "Euro"
        coinFlag2.src = "./assets/euro.png"
    }
    else if (destino === "USD") {
        coinValue2.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(taxa * value)

        coin2.innerHTML = "Dólar"
        coinFlag2.src = "./assets/usa.png"
    }
    else {
        coinValue2.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(taxa * value)

        coin2.innerHTML = "Libra"
        coinFlag2.src = "./assets/libra.png"
    }
}