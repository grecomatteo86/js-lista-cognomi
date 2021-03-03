/*
Chiedere all’utente il cognome
inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
stampa la lista ordinata alfabeticamente
scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova
*/


//1. chiedo all'utente il cognome
var cognomeUtente = prompt('scrivi il tuo cognome');
console.log(cognomeUtente);

//2. creo un array con altri cognomi
var listaCognomi = ['Bianchi','Rossi','Duzioni','Balsamo','Verdi'];
console.log(listaCognomi);

//3. inserisco il cognome dell'utente nell'array
listaCognomi.push(cognomeUtente);
console.log(listaCognomi);

//4. stampo la lista ordinata alfabeticamente
console.log(listaCognomi.sort());
