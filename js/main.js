

//chiedere all'utente il numero di chilometri

const chilometri = prompt(`Quanti chilometri vuoi percorrere?`);
console.log(chilometri);

//chiedere l'età del passeggero

const età = parseInt(prompt(`Quanti anni hai?`));
console.log(età);
console.log(typeof età);

//definire prezzo in base ai chilometri

let prezzo = 0.21

if(età <= 18 ) {
    console.log(`sei minorenne`);
    molt = prezzo * 20 / 100;
}   


if(età >= 65){
    console.log(`sei over 65`);
    molt = prezzo * 40 / 100;
}

//visualizza prezzo finale biglietto

document.getElementById (`risultato`).innerHTML = `Il totale è ${molt}`;

