

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
    prezzo = prezzo * 20 / 100;
}   


if(età >= 65){
    console.log(`sei over 65`);
    prezzo = prezzo * 40 / 100;
}

//ottieni prezzo totale biglietto


let molt = chilometri * prezzo;
console.log(`calcolo totale :` ,  molt);

//calcola prezzo per fascia d'età

/*let totale; 

(molt % 100 * 20);
     totale = `young`; 

if(molt % 100 * 40);
     totale = `over`;    






//mostra risultato*/

