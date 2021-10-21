//calcolo del prezzo del biglietto del treno

/*
1. chiedo all'utente i km che deve percorrere e l'età
2. calcolare il prezzo del biglietto sapendo che ogni km sono 0.21 euro, quindi moltiplicarlo per il totale dei km del passeggero
3. se il passeggero è minorenne ha il 20% di sconto sul totale del biglietto
4. se il passeggero ha più di 65 anni viene applicato il 40% sul costo totale del biglietto
5. l'output finale è il costo del biglietto compresi i centesimi 
6. i dati inseriti dall'utente devono essere validi

*/ 

let age = prompt('Età?');
let kmTicket = prompt('Quanti km deve percorrere?');
const euroTicket = 0.21;
let totalCost = (kmTicket * euroTicket).toFixed(2);
const percentUnderAge = 20;
const percentOverAge = 40;
let ticketUnderAge = '';
let ticketOverAge = '';
let outputCost = '';
let validDetails = true;
let errorMsg = '';
const coupon = prompt('Inserisci qui il tuo codice sconto');


console.log(age);
console.log(kmTicket);
console.log(totalCost);

if (age > 18 && age < 65){
  outputCost = totalCost;
}

if (age < 18) {
  ticketUnderAge = totalCost * (1-0.2);
  outputCost = ticketUnderAge.toFixed(2);
}

if (age > 65) {
  ticketOverAge = totalCost * (1-0.4);
  outputCost = ticketOverAge.toFixed(2);
}

if ((age.length === 0 && kmTicket.length === 0)){
  validDetails = false;
  errorDetails = 'Inserisci un numero valido'
  document.getElementById('errorDetails').innerHTML = 
`
Inserisci un numero valido per sapere il prezzo del tuo biglietto
`;
}
 else if (isNaN(age) && isNaN(kmTicket)) {
  validDetails = false;
  errorDetails = 'Inserisci un numero valido'
  document.getElementById('errorDetails').innerHTML = 
`
Inserisci un numero valido per sapere il prezzo del tuo biglietto
`;
}

console.log(ticketUnderAge, ticketOverAge);


document.getElementById('outputCost').innerHTML = 
`
Il tuo biglietto viene € ${ outputCost}
`;

