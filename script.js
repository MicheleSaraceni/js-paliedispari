/* Ciao ragazzi,
Esercizio di oggi:
nome repo: js-paliedispari

Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

Domande da  farsi quando si crea una funzione:
1. Come dovrebbe chiamarsi?
2. Ho bisogno di parametri?
3. Devo restituire un valore?
4. Se sì, di che tipo?
Buon lavoro e buon divertimento!
 */

"use strict";
console.clear();

/*********** FUNZIONI ***********/

/**
 * RANDOM: Genera un numero random da un valore minimo ad un valore massimo e lo ritorna in un valore numerico intero.
 * @param {number} min Valore minimo del random
 * @param {number} max Valore massimo del random
 */
function random(min, max){
    const nrandom = Math.floor(Math.random() * (max - min + 1)) + min;
    return nrandom;
}

/**
 * PARI O DISPARO: Ritorna una stringa con scritto "pari" o "dispari"
 * @param {number} n 
 * @returns 
 * 
 */
function evenodd(n){
    if (n % 2 === 0){
        return "pari";
    }
    return "dispari";
}

/**
 * PALINDROMA: Controllo se una parola è uguale alla sua versione al contrario
 * @param {string} parola 
 */
function palindroma(parola){
    parola.toLowerCase();
    const parolareverse = parola.split('').reverse().join('');
    if (parola === parolareverse){
        return true;
    }
    return false;
}

/*****************************************************************/
/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/

//Chiedo la parola all'utente
const parola = prompt("Inserisci una parola");

//Controllo tramite l'apposita funzione se la parola è palindroma o meno e do la risposta all'utente
if(palindroma(parola)){
    console.log ("La parola inserita è: " + parola + " ed è palindroma")
} else{
    console.log ("La parola inserita è: " + parola + " e non è palindroma")
}




/*****************************************************************/
/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/

//Chiedo all'utente numero e pari o dispari
let sceltaplayer = prompt("Scegli pari o dispari").toLowerCase();
let nplayer = parseInt(prompt("Scegli numero da 1 a 5"));
console.log ("Il numero che hai scelto è: " + nplayer);


//Richiamo la funzione random e gli do valore min 1 max 5 per ottenere il numero del computer
let ncomputer = random(1, 5);
console.log ("Il numero del pc è: " + ncomputer);

//sommo i due valori
let somma = ncomputer + nplayer
console.log ("La somma di " + nplayer + " + " + ncomputer + " è uguale a: " + somma);

//Controllo i vari possibili esiti e do una risposta all'utente
if(evenodd(somma) === sceltaplayer){
    console.log("Hai vinto! " + somma + " è un numero " + sceltaplayer)
} else{
    console.log("Hai perso! " + somma + " non è un numero " + sceltaplayer)
}


