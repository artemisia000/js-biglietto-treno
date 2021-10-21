

//chiedere all'utente il numero di chilometri

const chilometri = prompt(`Quanti chilometri vuoi percorrere?`);
console.log(chilometri);

//chiedere l'età del passeggero

const età = parseInt(prompt(`Quanti anni hai?`));
console.log(età);
console.log(typeof età);

//definire prezzo in base ai chilometri

if(età <= 18 ) {
    console.log(`sei minorenne`);
} 

if(età >=65){
    console.log(`sei over 65`);
}

//ottieni prezzo totale biglietto

const prezzo = 0.21

const molt = chilometri * prezzo;
console.log(`calcolo totale :` ,  molt);

//calcola prezzo 


//mostra risultato

