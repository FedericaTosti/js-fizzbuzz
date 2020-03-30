// Fizz Buzz test:
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero
// e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi” FizzBuzz”.

// traduco....
// ciclo for per scorrere i numeri da 1 a 100 compresi
// stabilire quando un numero è multiplo di 3 e 5
// se multiplo di 3, 5 o entrambi (if else) e stampo (console log) e in pagina


// versione 1 bottone e for................................

// creo variabili per salvare il contenuto precedente
var contenutoPrecedenteFb = "";
var contenutoPrecedenteB = "";
var contenutoPrecedenteF = "";
var contenutoPrecedente = "";

// ciclo for con (if else)
for (var i = 1; i <= 100; i++) {
  // le condizioni sono entrambe vere
  if ((i % 3 == 0) && (i % 5 == 0)) {
    console.log("FizzBuzz");
    // stampo in pagina tutti i numeri che rispettano questa condizione
    contenutoPrecedenteFb = contenutoPrecedenteFb + " " + i;
    document.getElementById('fizzbuzz').innerHTML = contenutoPrecedenteFb;
  }else if (i % 5 == 0) {
    console.log("Buzz");
    // stampo in pagina tutti i numeri che rispettano questa condizione
    contenutoPrecedenteB = contenutoPrecedenteB + " " + i;
    document.getElementById('buzz').innerHTML = contenutoPrecedenteB;
  }else if (i % 3 == 0) {
    console.log("Fizz");
    // stampo in pagina tutti i numeri che rispettano questa condizione
    contenutoPrecedenteF = contenutoPrecedenteF + " " + i;
    document.getElementById('fizz').innerHTML = contenutoPrecedenteF;
  }else {
    console.log(i);
    // stampo in pagina tutti i numeri che non hanno rispettato le condizioni precedenti
    contenutoPrecedente = contenutoPrecedente + " " + i;
    document.getElementById('altri').innerHTML = contenutoPrecedente;
  }
}



// versione 2 lista e while ...........................

// // creo varabile iterazione
// var i = 1;
// // creo varabile per salvare il contenuto precedente
// var contenutoPrecedente = "";
//
// // ciclo while con (if else)
// while (i <= 100) {
//   if ((i % 3 == 0) && (i % 5 == 0)) {
//     console.log("FizzBuzz");
//     // stampo in pagina al posto del numero la stringa "FizzBuzz"
//     contenutoPrecedente = document.getElementById("lista").innerHTML;
//     document.getElementById("lista").innerHTML = contenutoPrecedente + "<li class=fizzbuzz>FizzBuzz</li>";
//   }else if (i % 5 == 0) {
//     console.log("Buzz");
//     // stampo in pagina al posto del numero la stringa "Buzz"
//     contenutoPrecedente = document.getElementById("lista").innerHTML;
//     document.getElementById("lista").innerHTML = contenutoPrecedente + "<li class=buzz>Buzz</li>";
//   }else if (i % 3 == 0) {
//     console.log("Fizz");
//     // stampo in pagina al posto del numero la stringa "Fizz"
//     contenutoPrecedente = document.getElementById("lista").innerHTML;
//     document.getElementById("lista").innerHTML = contenutoPrecedente + "<li class=fizz>Fizz</li>";
//   }else {
//     console.log(i);
//     // stampo in pagina tutti i numeri che non hanno rispettato le condizioni precedenti
//     contenutoPrecedente = document.getElementById("lista").innerHTML;
//     document.getElementById("lista").innerHTML = contenutoPrecedente + "<li>" + i + "</li>";
//   }
//   i++;
// }



// versione 3 lista e do while...................................

// // creo varabile iterazione
// var i = 1;
// // creo varabile per salvare il contenuto precedente
// var contenutoPrecedente = "";
//
// // ciclo do while con (if else)
// do {
//   if ((i % 3 == 0) && (i % 5 == 0)) {
//     console.log("FizzBuzz");
//     // stampo in pagina al posto del numero la stringa "FizzBuzz"
//     contenutoPrecedente = contenutoPrecedente + "<li class=fizzbuzz>FizzBuzz</li>";
//   }else if (i % 5 == 0) {
//     console.log("Buzz");
//     // stampo in pagina al posto del numero la stringa "Buzz"
//     contenutoPrecedente = contenutoPrecedente + "<li class=buzz>Buzz</li>";
//   }else if (i % 3 == 0) {
//     console.log("Fizz");
//     // stampo in pagina al posto del numero la stringa "Fizz"
//     contenutoPrecedente = contenutoPrecedente + "<li class=fizz>Fizz</li>";
//   }else {
//     console.log(i);
//     // stampo in pagina tutti i numeri che non hanno rispettato le condizioni precedenti
//     contenutoPrecedente = contenutoPrecedente + "<li>" + i + "</li>";
//   }
//   i++;
// } while (i <= 100);
//
// document.getElementById("lista").innerHTML = contenutoPrecedente;
// contenutoPrecedente = document.getElementById("lista").innerHTML;
