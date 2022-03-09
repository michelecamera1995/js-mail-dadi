console.log("JS-OK")

// Email check


let email = ["michy@gmail.com"]

email.push(prompt("inserisci indirizzo email"))

console.log(email);


if (prompt === email[0]) {
    alert = "email già inserita"
}


// Dadi

const diceone = document.querySelector(".dice-1");
const dicetwo = document.querySelector(".dice-2");
const diceresult = document.querySelector(".dice-result");


document.querySelector('.btn-roll').addEventListener('click', function () {

    // 1. Random number
    var diceman = Math.floor(Math.random() * 6) + 1;
    var dicecomputer = Math.floor(Math.random() * 6) + 1;
    diceone.innerHTML += diceman;
    dicetwo.innerHTML += dicecomputer;

    if (diceman > dicecomputer) {
        console.log("User wins!");
        document.querySelector("h1").innerHTML = ("USER WINS!");

    } else if (diceman < dicecomputer) {
        console.log("Computer wins!");
        document.querySelector("h1").innerHTML = ("PC WINS!");
    } else if (diceman === dicecomputer) {
        console.log("Draw!");
        document.querySelector("h1").innerHTML = ("DRAW!");
    }

    // 2. display results 

});





