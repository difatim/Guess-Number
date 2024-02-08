"use strict";
// Declare all variables
let guessingText = document.querySelector(".guessing");
let againBtn = document.querySelector(".again");
let checkBtn = document.querySelector(".check");
let inputBox = document.querySelector(".input-box");

let score = 20
let highscore = 0

function generateRandomNumber(){
    return Math.floor(Math.random() * 20 + 1);
}

// Declare random number
let randomNumber = generateRandomNumber()
console.log(randomNumber);


checkBtn.addEventListener("click", () => {
  let chosenNumber = inputBox.value;
 
  if (isNaN(chosenNumber) || inputBox.value.trim() === "") {
    guessingText.textContent = "Enter a Valid Number";
    return
  }

  // Too low VS too high
  if (chosenNumber > randomNumber) {
    document.querySelector(".guessing").textContent = " 📈 Too High!";
    score--
  } else if (chosenNumber < randomNumber) {
    document.querySelector(".guessing").textContent = " 📉 Too Low!";
    score--
  } else {
    winningTheme();
  }

  document.querySelector('.score').textContent = '💯 Score : ' + score

});

// Display the random number & change style of the page when number is right
function winningTheme() {
  document.body.style.backgroundColor = "green";
  document.querySelector(".interrogation").textContent = randomNumber;
  document.querySelector(".guessing").textContent = " 🎉 Correct Number !";

  // keep in record highscore 🥇
if (score > highscore) {
    highscore = score
}
  document.querySelector('.high-score').textContent = '🥇 Highscore : '  + highscore 
}

// reset game with again button
againBtn.addEventListener("click", () => {
    randomNumber = generateRandomNumber();
    
    document.querySelector(".interrogation").textContent = '?'
    document.querySelector(".guessing").textContent = " Start Guessing...";

    score = 20
    document.querySelector('.score').textContent = '💯 Score : ' + score

    if (score > highscore) {
        highscore = score
    }
    document.querySelector('.high-score').textContent = '🥇 Highscore : '  + highscore
    document.body.style.backgroundColor = "rgba(8, 8, 8, 0.817)";

    inputBox.value = ''  
});


