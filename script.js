console.log("JS-OK")

// Email check

const usermail = prompt("Inserisci email");
const email = ["michele@icloud.com", "michelecamera@icloud.com"];

for (let i = 0; i < email.length; i++) {
    email.push = (usermail)
    console.log(email);

    if (usermail === email[i]) {
        alert("Email già presente!");
    }

}


// Dadi

const diceone = document.querySelector(".dice-1");
const dicetwo = document.querySelector(".dice-2");
const diceresult = document.querySelector(".dice-result");


document.querySelector('.btn-roll').addEventListener('click', function () {

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


});





