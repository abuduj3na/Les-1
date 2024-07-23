const prompt = require("prompt-sync")();

// Vraag aan gebruiker als die som, maal ,min, of delen doen
// vraag aan gebruiker als die verder wilt gaan en nog iets anders berekenen

var Getal1;
var Getal2;
var uitkomst;
var uitkomstVanSom;
var uitkomstVanMaal;
var wiltVerderGaan = true;

function nummersNakijken(x, y) {
  while (!Number(x)) {
    x = prompt("Geef een nummer ");
  }
  while (!Number(y)) {
    y = prompt("Geef een nummer ");
  }
}

function printUitkomst(uitkomst) {
  console.log("Dit is het uitkomst " + uitkomst);
}

function somFunctie(x, y) {
  uitkomst = Number(x) + Number(y);
  return uitkomst;
}

function minFunctie(x, y) {
  uitkomst = Number(x) - Number(y);
  return uitkomst;
}

function maalFunctie(x, y) {
  return Number(x) * Number(y);
}

function deelFunctie(x, y) {
  return Number(x) / Number(y);
}

console.log("Dit is een som rekening");

while (wiltVerderGaan) {
  Getal1 = prompt("Geef een nummer ");
  Getal2 = prompt("Geef een nummer ");

  nummersNakijken(Getal1, Getal2);

  uitkomstVanSom = somFunctie(Getal1, Getal2);
  uitkomstVanMaal = maalFunctie(Getal1, Getal2);

  uitkomst = deelFunctie(uitkomstVanSom, uitkomstVanMaal);

  printUitkomst(uitkomst);
}
