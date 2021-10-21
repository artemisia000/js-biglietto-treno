

//chiedere all'utente il numero di chilometri

const chilometri = prompt(`Quanti chilometri vuoi percorrere?`);
console.log(chilometri);

//chiedere l'età del passeggero

const età = parseInt(prompt(`Quanti anni hai?`));
console.log(età);
console.log(typeof età);


//definire prezzo in base ai chilometri

const prezzo = 0.21

let molt = prezzo * chilometri;
console.log(`moltiplicazione:`, molt);

if(età < 18 ) {
    console.log(`sei minorenne`);
    molt = molt-(molt * 20 / 100);
    console.log(`prezzo`);

}   


if(età > 65){
    console.log(`sei over 65`);
    molt = molt-(molt * 40 / 100);
    console.log('prezzo');
}

//visualizza prezzo finale biglietto

molt = parseInt(molt.toFixed(3));

document.getElementById(`risultato`).innerHTML = `Il totale è ${molt}`;



