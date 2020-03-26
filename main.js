// Fizz Buzz test:
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero
// e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi” FizzBuzz”.

// traduco....
// ciclo for per scorrere i numeri da 1 a 100 compresi
// stabilire quando un numero è multiplo di 3 e 5
// se multiplo di 3, 5 o entrambi (if else) e stampo (console log)


// ciclo for con (if else)
for (var i = 1; i <= 100; i++) {
  // le condizioni sono entrambe vere
  if ((i % 3 == 0) && (i % 5 == 0)) {
    console.log("FizzBuzz");
  }else if (i % 5 == 0) {
    console.log("Buzz");
  }else if (i % 3 == 0) {
    console.log("Fizz");
  }else {
    console.log(i);
  }
}
