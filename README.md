# Form biglietto treno

- Inserisco gli input in html con le relative class, id e value
- Dichiaro le variabili globali
    - prendo gli elementi dal DOM
- Eseguo la funzione al click del bottone tramite un Event Listener
    - Recupero dall'input il valore dei value
    - prendo il valore dei km  e calcolo il prezzo del biglietto per 0.21€ al km
    - prendo il valore degli sconti e calcolo gli sconti se minorenni o >65 anni
- Calcolo il prezzo finale del biglietto
- Stampo il prezzo nel DOM