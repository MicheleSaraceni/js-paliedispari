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

/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/




/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).*/

//Chiedo all'utente numero e pari o dispari
let sceltaplayer = prompt("Scegli pari o dispari");
let nplayer = parseInt(prompt("Scegli numero da 1 a 5"));

//Richiamo la funzione random e gli do valore min 1 max 5 per ottenere il numero del computer
let ncomputer = random(1, 5);
console.log ("Il numero del pc è: " + ncomputer);

if (evenodd(nplayer) === sceltaplayer && evenodd(ncomputer) !== sceltaplayer){
    console.log ("Hai vinto!");
} else if (evenodd(nplayer) !== sceltaplayer && evenodd(ncomputer) === sceltaplayer){
    console.log ("Hai perso!");
} else if (evenodd(nplayer) === sceltaplayer && evenodd(ncomputer) === sceltaplayer){
    console.log ("Pareggio, avete indovinato entrambi!");
} else {
    console.log ("Avete perso entrambi!");
}




/*Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/

