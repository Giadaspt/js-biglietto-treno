//calcolo del prezzo del biglietto del treno

/*
1. chiedo all'utente i km che deve percorrere e l'età
2. calcolare il prezzo del biglietto sapendo che ogni km sono 0.21 euro, quindi moltiplicarlo per il totale dei km del passeggero
3. se il passeggero è minorenne ha il 20% di sconto sul totale del biglietto
4. se il passeggero ha più di 65 anni viene applicato il 40% sul costo totale del biglietto
5. l'output finale è il costo del biglietto compresi i centesimi 
6. i dati inseriti dall'utente devono essere validi
7. creare il coupon SCONTO20 e chiedere all'utente di inserirlo se ce l'ha
8. validare il coupon solamente per passeggeri con età inferiore a 20 anni
9. se l'età non corrisponde far uscire messaggio dicendo questo
10. se il coupon non è valido far uscire messaggio dicendo che non è valido
*/ 

let age = prompt('Età?');
let kmTicket = prompt('Quanti km deve percorrere?');
const euroTicket = 0.21;
let totalCost = (kmTicket * euroTicket).toFixed(2);
let ticketUnderAge = '';
let ticketOverAge = '';
let outputCost = '';
let errorMsg = '';
const coupon = prompt('Inserisci qui il tuo codice sconto');
const couponCode = 'SCONTO20';
let couponTotal = '';
let errorMsg2 = '';


console.log(age);
console.log(kmTicket);
console.log(totalCost);

if (age > 18 && age < 65){
  outputCost = totalCost;
}

if (age <= 18) {
  ticketUnderAge = totalCost * (1-0.2);
  outputCost = ticketUnderAge.toFixed(2);
}

if (age >= 65) {
  ticketOverAge = totalCost * (1-0.4);
  outputCost = ticketOverAge.toFixed(2);
}

console.log(ticketUnderAge, ticketOverAge);

//confirm passenger details
if ((age.length === 0 && kmTicket.length === 0)){
  errorMsg = 'Inserisci un numero valido per sapere il prezzo del tuo biglietto'
  document.getElementById('errorDetails').innerHTML = errorMsg
}
 else if (isNaN(age) && isNaN(kmTicket)) {
  errorMsg = 'Inserisci un numero valido per sapere il prezzo del tuo biglietto'
  document.getElementById('errorDetails').innerHTML = errorMsg
}


//coupon SCONTO20
if (age <= 20) {
  couponTotal = totalCost * (1-0.2);
  outputCost = couponTotal.toFixed(2);
  if (couponCode) {
    couponTotal = ticketUnderAge * (1-0.2);
    outputCost = couponTotal.toFixed(2);
  }
}

if (age > 20) {
  couponTotal = totalCost;
  errorMsg2 = 'Codice non valido per la tua fascia di età'
  document.getElementById('errorCode').innerHTML = errorMsg2
} 

if (coupon !== 'SCONTO20') {
  couponTotal = totalCost;
  errorMsg2 = 'Codice non valido'
  document.getElementById('errorCode2').innerHTML = errorMsg2
}

if (coupon.length == 0) {
  errorMsg2 = '';
  document.getElementById('errorCode2').innerHTML = errorMsg2
}

console.log(couponTotal);

document.getElementById('outputCost').innerHTML = 
`
Il tuo biglietto viene € ${ outputCost}
`;

