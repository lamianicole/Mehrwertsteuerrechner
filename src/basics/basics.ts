// Mehrwertsteuer ausrechnen:
// brutto (preis inkl. MwSt) wird durch 1,19 dividiert
// von netto auf brutto: mal 1,19

// Variablen erstellen
const aufschlagNettoBrutto = document.querySelector(
    "#aufschlagNettoBrutto") as HTMLInputElement;
const abzugBruttoNetto = document.querySelector(
    "#abzugBruttoNetto") as HTMLInputElement;
const neunzehnProzent = document.querySelector("#neunzehnProzent") as HTMLInputElement;
const siebenProzent = document.querySelector("#siebenProzent") as HTMLInputElement;
let inputBetragTextchange = document.querySelector("#inputBetragTextchange") as HTMLInputElement;
let inputBetrag = document.querySelector("#inputBetrag") as HTMLInputElement;
let outputMehrwert = document.querySelector("#outputMehrwert") as HTMLElement;
let outputBrutto = document.querySelector("#outputBrutto") as HTMLElement;
let bruttobetragTextchange = document.querySelector("#bruttobetragTextchange") as HTMLElement;
let calcBtn = document.querySelector("#calcBtn") as HTMLInputElement;

//alles prüfen, ob vorhanden
console.log(aufschlagNettoBrutto);
console.log(abzugBruttoNetto);
console.log(neunzehnProzent);
console.log(siebenProzent);
console.log(inputBetragTextchange);
console.log(inputBetrag);
console.log(outputMehrwert);
console.log(outputBrutto);
console.log(bruttobetragTextchange);
console.log(calcBtn);

//prüfen, ob button funktioniert 
if(calcBtn){
    calcBtn.addEventListener('click', ()=> {
        console.log("test");
        console.log(checkbox.value);        
    })
}

// testen, ob erster radio button funktioniert samt Ausgabefeld mit Textwechsel
aufschlagNettoBrutto.addEventListener('click', () => {
    console.log("test aufschlagen");
    if(inputBetragTextchange){
        inputBetragTextchange.textContent = "Nettobetrag (Preis ohne Mehrwertsteuer) in Euro"
    }if(bruttobetragTextchange){
        bruttobetragTextchange.textContent = "Bruttobetrag (Endpreis)"
    }
});

abzugBruttoNetto.addEventListener('click', () => {
    console.log("test abziehen");
        if(inputBetragTextchange){
            inputBetragTextchange.textContent = "Bruttobetrag (Preis mit Mehrwertsteuer) in Euro"
        }if(bruttobetragTextchange){
            bruttobetragTextchange.textContent = "Nettobetrag"
        }
});



// function calcTax(){
//     if (aufschlagNettoBrutto.value && neunzehnProzent.value) inputBetrag * 1.19{
        
//     }
// }

// if (neunzehnProzent.checked) {
//     mehrwertsteuer = betrag * 0.19;
// } else if (siebenProzent.checked) {
//     mehrwertsteuer = betrag * 0.07;
//     }


//in die Funktion: Nettobetrag ändern in Brutto als Ausgabetext mit EventListener

// calcBtn.addEventListener("click", calculate);









