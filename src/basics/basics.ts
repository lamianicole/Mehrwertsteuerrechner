console.log("hi");
// für Sicherheitsabfrage alle variablen mit && abfragen für diese aufgabe, viele Wege für diese Lösung
// click event auf jeden button? oder change?

// Mehrwertsteuer ausrechnen:
// brutto (preis inkl. MwSt) wird durch 1,19 dividiert
// von netto auf brutto: mal 1,19

// variablen erstellen
const aufschlagNettoBrutto = document.querySelector(
    "#aufschlagNettoBrutto") as HTMLInputElement;
const abzugBruttoNetto = document.querySelector(
    "#abzugBruttoNetto") as HTMLInputElement;
const neunzehnProzent = document.querySelector("#neunzehnProzent") as HTMLInputElement;
const siebenProzent = document.querySelector("#siebenProzent") as HTMLInputElement;
const inputNumber = document.querySelector("#inputNumber") as HTMLInputElement;

