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
 * PARI O DISPARO: Ritorna la parola "True" o "False"
 * @param {number} n 
 * @returns 
 * 
 */
function evenodd(n){
    let paridispari = "dispari";
    if (n % 2 === 0){
        paridispari = "pari";
    }
    return paridispari;
}

/**
 * PALINDROMA: Controllo se una parola è uguale alla sua versione al contrario
 * @param {string} parola 
 */
function palindroma(parola){
    if (parola === parola.split('').reverse()){
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
const flag = palindroma(parola);
console.log (flag);
if(flag){
    console.log ("La parola inserita è: " + parola + " ed è palindroma")
} else{
    console.log ("La parola inserita è: " + parola + " e non è palindroma")
}




/*****************************************************************/
/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).*/

//Chiedo all'utente numero e pari o dispari
let sceltaplayer = prompt("Scegli pari o dispari");
let nplayer = parseInt(prompt("Scegli numero da 1 a 5"));

//Richiamo la funzione random e gli do valore min 1 max 5 per ottenere il numero del computer
let ncomputer = random(1, 5);
console.log ("Il numero del pc è: " + ncomputer);

//Controllo i vari possibili esiti e do una risposta all'utente
if (evenodd(nplayer) === sceltaplayer && evenodd(ncomputer) !== sceltaplayer){
    console.log ("Hai vinto!");
} else if (evenodd(nplayer) !== sceltaplayer && evenodd(ncomputer) === sceltaplayer){
    console.log ("Hai perso!");
} else if (evenodd(nplayer) === sceltaplayer && evenodd(ncomputer) === sceltaplayer){
    console.log ("Pareggio, avete indovinato entrambi!");
} else {
    console.log ("Avete perso entrambi!");
}



/*****************************************************************/
/*Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/


let n1 = parseInt(prompt("Inserisci il Primo numero numero"));
let n2 = parseInt(prompt("Inserisci il secondo numero"));
