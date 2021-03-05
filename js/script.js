/*
Chiedere all’utente il cognome;
inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’;
stampa la lista ordinata alfabeticamente;
scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova.
*/

//1. creo un array con dei cognomi
var listaCognomi = ['Bianchi','Rossi','Duzioni','Balsamo','Verdi'];
console.log('l\'array originario è ' + listaCognomi);

//2. chiedo all'utente il suo cognome
var cognomeUtente = prompt('scrivi il tuo cognome');
console.log('il cognome inserito dall\'utente è ' + cognomeUtente);

//3. capitalizzazione delle prima lettera
cognomeUtente = cognomeUtente.charAt(0).toUpperCase() + cognomeUtente.slice(1);

//4. inserisco il cognome dell'utente nell'array
listaCognomi.push(cognomeUtente);
console.log('l\'array con inserito il cognome dell\'utente è ' + listaCognomi);

//5. stampo la lista ordinata alfabeticamente
console.log('l\'array ordinato alfabeticamente è ' + listaCognomi.sort());

/*
//6. stampo un messaggio che mi dice in che posizione si trova il cognome inserito dall'utente (metodo indexOf)
console.log('il cognome da te inserito si trova in posizione numero ' + parseInt(listaCognomi.indexOf(cognomeUtente) + 1));
*/

//6. stampo un messaggio che mi dice in che posizione si trova il cognome inserito dall'utente (metodo SENZA indexOf, utilizzando il ciclo while)

/*
var i = 0;

var trovato = 0;

while ( i < listaCognomi.length && trovato == 0 ) {

  if (listaCognomi[i] ==  cognomeUtente) {

    trovato = 1;

  }

  i++;

}

if ( trovato == 1 ) {

  console.log('il cognome da te inserito si trova in ' + i + ' ° posizione');

}
*/

//oppure

var i = 0;

var trovato = 0;

while ( i < listaCognomi.length && trovato == 0 ) {

  if (listaCognomi[i] ==  cognomeUtente) {

    trovato = 1;

    console.log('il cognome da te inserito è in ' + parseInt(i + 1) + ' ° posizione');

  }

  i++;

}
