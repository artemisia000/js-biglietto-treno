/***
 * BIGLIETTO DEL TRENO
 */


const viaggio = parseInt(prompt('Quanti chilometri vuoi?'));
console.log(viaggio);

const age = parseInt(prompt('Quanti anni hai?'));
console.log(age);
//viaggio per chilometro a 0.21
const price = viaggio * 0.21;
console.log(price);
let message = `Il prezzo del biglietto è ${price.toFixed(2)}`;

//sconto minorenni 20%
if( age < 18 ){
    calc = price-(price / 100 * 20);
    console.log(calc);
    message = `Hai diritto allo sconto del 20%.Il totale è: ${calc.toFixed(2)}`;
}

//sconto over 65 40%
else if( age >= 65 ){
    calc = price-(price / 100 * 40);
    console.log(calc);
    message = `Hai diritto allo sconto del 40%.Il totale è ${calc.toFixed(2)}`;
}


document.getElementById('ticket').innerHTML = message;