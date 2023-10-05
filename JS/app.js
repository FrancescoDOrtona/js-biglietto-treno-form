// # Form biglietto treno

// - Inserisco gli input in html con le relative class, id e value
// - Dichiaro le variabili globali
//     - prendo gli elementi dal DOM
const userNameDOMElement = document.getElementById('user-name')
console.log(userNameDOMElement)

const distanceDOMElement = document.getElementById('distance')
console.log(distanceDOMElement)

const discountDOMElement = document.getElementById('discount')
console.log(discountDOMElement)

const btnDOMElement = document.getElementById('btn-price')
console.log(btnDOMElement)

const priceDOMElement = document.getElementById('price')
console.log(priceDOMElement)

const nameDOMElement = document.getElementById('name')

const ticketTypeDOMElement = document.getElementById('ticket-type')

const carriageDOMElement = document.getElementById('carriage-number')

const codeDOMElement = document.getElementById('cp-code')

const priceForKm = 0.21
console.log(priceForKm)

// - Eseguo la funzione al click del bottone tramite un Event Listener
//     - Recupero dall'input il valore dei value
//     - prendo il valore dei km  e calcolo il prezzo del biglietto per 0.21€ al km
//     - prendo il valore degli sconti e calcolo gli sconti se minorenni 20% o >65 anni 40$
// - Calcolo il prezzo finale del biglietto
btnDOMElement.addEventListener('click', function () {
    const km = parseFloat(distanceDOMElement.value)
    console.log(km)

    const discount = discountDOMElement.value
    console.log(discount)

// - Recupero la value dall'input e stampo il nome del passeggero nel DOM
    const name = userNameDOMElement.value
    nameDOMElement.innerHTML = name
    console.log(name)

    if (isNaN(km) || (km < 0)){
        return alert('Valore non Valido')

    } else if (name === '' || (!isNaN(parseInt(name)))){
        return alert('Inserisci i dati del Passeggero')

    }

    let price = km * priceForKm
    console.log(price)

    if  (discount === '0'){
        price = price - (price * 20 / 100)
        ticketTypeDOMElement.innerHTML = 'Biglietto Ridotto'
        console.log(price)

    } else if (discount === '1'){
        ticketTypeDOMElement.innerHTML = 'Biglietto Standard'

    } else if (discount === '2'){
        price = price - (price * 40 / 100)
        ticketTypeDOMElement.innerHTML = 'Biglietto Senior'
        console.log(price)  

    }

// - Genero un numero della carrozza del treno da 1 a 10 e la stampo nel DOM
    const carriageNumber = Math.floor(Math.random() * 10) + 1
    console.log(carriageNumber)

    carriageDOMElement.innerHTML = carriageNumber

// - Genero un numero per creare un codice CP con massimo 5 cifre e lo stampo nel DOM
    const cpCode = Math.floor(Math.random() * 100000)
    console.log(cpCode)

    codeDOMElement.innerHTML = cpCode

// - Stampo il prezzo nel DOM
    priceDOMElement.innerHTML = price.toFixed(2) + ' &euro;'
    console.log(priceDOMElement)
})


