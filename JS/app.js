// # Form biglietto treno

// - Inserisco gli input in html con le relative class, id e value
// - Dichiaro le variabili globali
//     - prendo gli elementi dal DOM
const distanceDOMElement = document.getElementById('distance')
console.log(distanceDOMElement)

const discountDOMElement = document.getElementById('discount')
console.log(discountDOMElement)

const btnDOMElement = document.getElementById('btn-price')
console.log(btnDOMElement)

const priceDOMElement = document.getElementById('price')
console.log(priceDOMElement)

const priceForKm = 0.21
console.log(priceForKm)

// - Eseguo la funzione al click del bottone tramite un Event Listener
//     - Recupero dall'input il valore dei value
//     - prendo il valore dei km  e calcolo il prezzo del biglietto per 0.21€ al km
//     - prendo il valore degli sconti e calcolo gli sconti se minorenni 20% o >65 anni 40$
// - Calcolo il prezzo finale del biglietto
// - Stampo il prezzo nel DOM
btnDOMElement.addEventListener('click', function () {
    const km = parseFloat(distanceDOMElement.value)
    console.log(km)

    const discount = discountDOMElement.value
    console.log(discount)

    let price = km * priceForKm
    console.log(price)

    if  (discount === '0'){
        price = price - (price * 20 / 100)
        console.log(price)

    } else if (discount === '2'){
        price = price - (price * 40 / 100)
        console.log(price)  

    }

    priceDOMElement.innerHTML = price.toFixed(2) + ' &euro;'
    console.log(priceDOMElement)
})