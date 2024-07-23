const prompt = require('prompt-sync')();

var Naam
var Leeftijd
var Gender 
var Lengte

Naam=prompt('Wat is jouw naam? ')
while(Naam.length < 1){
    console.log('Er moet een Naam staan');
    Naam=prompt('Wat is jouw Naam? ')
}

Leeftijd=prompt('Wat is jouw leeftijd? ')
while(!Number(Leeftijd)) {
    console.log('Leeftijd is geen nummer');
    Leeftijd=prompt('Wat is jouw leeftijd? ')
}

Gender=prompt('Wat is jouw gender? ')
while(Gender.length < 1){
    console.log('Je moet Man of Vrouw ingeven!!!')
    Gender=prompt('Wat is jouw gender?' )
}
while(Gender != 'Man' && Gender != 'Vrouw') {
    console.log('Je moet Man of Vrouw ingeven!!!')
    Gender=prompt('Wat is jouw gender? ' )
}

Lengte=prompt('Wat is jouw lengte? ')
while(!Number(Lengte)){
    console.log('Het moet een cijfer zijn!');
    Lengte=prompt('Wat is jouw lengte? ')
}






console.log('Mijn naam is: '+ Naam);
console.log('Mijn leeftijd is: '+ Leeftijd);
console.log('Jouw Gender is: '+ Gender);
console.log('Wat is jouw lengte? ' + Lengte);