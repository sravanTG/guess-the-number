"use strict";

// messages
let lowMessage = "Too Low! I have a higher number.";
let highmessage = "Too High! I hve a lower number.";
let correctMessage = "Hurrey!!! you guessed the correct Number!!!";
let noNumberMesage = "The input box is empty. Please enter a number.";
let lostMessage = "No chances left. Game Over. Try again.";
let startMessage = "Hints are displayed here. Enter a number and check it to start the game.";
let myScore = 0;
let myHighscore = 0;
let chances = 5;

//  buttons
let verifyButton = document.querySelector(".check-btn");
let replayButton = document.querySelector(".replay");
let resetButton = document.querySelector(".reset");

// number generation
let generatedNumber = Math.trunc(Math.random() * 20) + 1;

// this function picks a message from the above messages according to the conditions.

const displayMessage = function (givenMessage) {
    document.querySelector(".hint").textContent = givenMessage;
  };

// -----------------------------------------------------------

// when clicked on the verify button

verifyButton.addEventListener("click", function () {
    const hisNumber = Number(document.querySelector(".input-value").value);
  
    // if user pressed verify button without giving an input.
    if (!hisNumber) {
      displayMessage(noNumberMesage);
  
      // if the user number is matching with the computer number.
    } else if (hisNumber === generatedNumber) {
      displayMessage(correctMessage);
      document.querySelector(".num").textContent = generatedNumber;
      document.querySelector(".score").textContent = "score: " + chances;
  
      if (chances >= myHighscore) {
        myHighscore = chances;
        document.querySelector(".high-score").textContent =
          "high score: " + myHighscore;
      }
  
      // if user number is greater than or less thon the computer number.
    } else if (hisNumber !== generatedNumber) {
      if (chances > 1) {
        displayMessage(hisNumber > generatedNumber ? highmessage : lowMessage);
        chances--;
        document.querySelector(".score").textContent = "Score: " + myScore;
        document.querySelector(".chance").textContent = "chances left: " + chances;
      } else {
        displayMessage(lostMessage);
        document.querySelector(".score").textContent = 0;
      }
    }
  });

  // when clicked on the replay button.

replayButton.addEventListener("click", function () {
    myScore = 0;
    chances = 5;
    generatedNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage(startMessage);
    document.querySelector(".score").textContent = "Score: " + myScore;
    document.querySelector(".num").textContent = "?";
    document.querySelector(".input-value").value = "";
    document.querySelector(".chance").textContent = "chances left: " + chances;
  });
  
  // when clicked on the reset button.
  
  resetButton.addEventListener("click", function name(params) {
    myScore = 0;
    myHighscore = 0;
    chances = 5;
    generatedNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".score").textContent = "Score: " + 0;
    document.querySelector(".num").textContent = "?";
    document.querySelector(".input-value").value = "";
    document.querySelector(".high-score").textContent = "high score: " + 0;
    document.querySelector(".chance").textContent = "chances left: " + chances;
    displayMessage(startMessage);
  });
