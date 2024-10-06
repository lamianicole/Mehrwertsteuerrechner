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
const inputBetrag = document.querySelector("#inputBetrag") as HTMLInputElement;
let outputMehrwert = document.querySelector("#outputMehrwert") as HTMLElement;
let outputBrutto = document.querySelector("#outputBrutto") as HTMLElement;
const calcBtn = document.querySelector("#calcBtn") as HTMLInputElement;

console.log(aufschlagNettoBrutto);
console.log(abzugBruttoNetto);
console.log(neunzehnProzent);
console.log(siebenProzent);
console.log(inputBetrag);
console.log(outputMehrwert);
console.log(outputBrutto);
console.log(calcBtn);

if(calcBtn){
    calcBtn.addEventListener('click', ()=> {
        console.log("test");
    })
}

// function calcTax(){
//     if (aufschlagNettoBrutto.value && neunzehnProzent.value) inputBetrag * 1.19{
        
//     }
// }









