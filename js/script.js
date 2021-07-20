var surnameArrays = ['Bianchi','Rossi','Duzioni','Balsamo','Verdi'];
console.log('The Surname Array is composed of the following surnames: ' + surnameArrays);
var userSurname = prompt('Please, write your surname');
console.log('User\'s surname is: ' + userSurname);
//first letter capitalization
userSurname = userSurname[0].toUpperCase() + userSurname.slice(1).toLowerCase();
surnameArrays.push(userSurname);
console.log('Now the Surname Array is composed of the following surnames: ' + surnameArrays);
console.log('The Surname Array Alphabetically Ordered is: ' + surnameArrays.sort());
var i = 0;
var surnameFinder = 0;
while ( i < surnameArrays.length && surnameFinder == 0 ) {
  if (surnameArrays[i] ==  userSurname) {
    surnameFinder = 1;
    console.log('The User\'s Surname is in ' + parseInt(i + 1) + '° position');
  }
  i++;
}
