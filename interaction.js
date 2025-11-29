//get elements
let randomNumber;
let attemps = 0;
let attemptsNumber = document.getElementById("attempts-display");
let resultMsg = document.getElementById("result-message");
let submitButt = document.getElementById("submit-button");
const playAgainButton = document.getElementById("hidden-button");
randomNumber = Math.floor(Math.random() * 100) + 1;
function startGame() {
  //attemp num
  attemps++;
  attemptsNumber.textContent = "Attempts: " + attemps;
  playAgainButton.style.display = "none";
  let guessInput = Number(document.getElementById("guess-input").value);
  console.log(document.getElementById("guess-input").value);
  console.log("Actual number is : ", randomNumber);
  //guess input number
  if (guessInput != randomNumber) {
    if (guessInput < randomNumber) {
      console.log((resultMsg.textContent = "Bzz! too low, try again!"));
    } else {
      console.log((resultMsg.textContent = "Bzz! too high, try again!"));
    }
  } else {
    console.log(
      (resultMsg.textContent = "Bingooo, 2000 points! you guessed it!")
    );
    submitButt.style.display = "none";
    playAgainButton.style.display = "block";
  }
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attemps = 0;
  attemptsNumber.textContent = "Attempts: " + attemps;
  submitButt.style.display = "block";
  playAgainButton.style.display = "none";
  let guessInput = Number(document.getElementById("guess-input").value);
  console.log(document.getElementById("guess-input").value);
  console.log("Actual number is : ", randomNumber);
}
