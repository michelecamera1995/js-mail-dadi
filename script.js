console.log("JS-OK")

// Email check

/*
let email = ["michy@gmail.com"]

email.push(prompt("inserisci indirizzo email"))

console.log(email);


if (prompt.value === email[0]) {
    alert = "email già inserita"
}
*/

// Dadi

document.querySelector('.btn-roll').addEventListener('click', function () {

    // 1. Random number
    var diceman = Math.floor(Math.random() * 6) + 1;
    var dicecomputer = Math.floor(Math.random() * 6) + 1;

    if (diceman > dicecomputer) {
        console.log("Vince Giocatore");
    } else if (diceman < dicecomputer) {
        console.log("Vince Computer");
    }

    // 2. display results 

}

);





