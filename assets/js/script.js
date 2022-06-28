//grab local storage items
var data = JSON.parse(localStorage.getItem("wordGuess_scores")) || "[]";
console.log(data);
//element variables
var startButton = document.getElementById("start_button");
var timerEl = document.getElementById("timer");
var infoEl = document.getElementById("info");
var winsEl = document.getElementById("wins");
var lossesEl = document.getElementById("losses");
var infoSection = document.getElementById("info_section");
var guessWordSection = document.getElementById("guess_word_section");
var button = document.createElement("button");
// create array of strings, choose randomly to pick word
var words = ["javascript", "pet", "dinosaur", "toddler", "antacid"];

var timerSeconds = 10;
var letterCount = 0;
var wins = data.wins || 0;
var losses = data.losses || 0;
var answer = words[Math.floor(Math.random() * words.length)];

startButton.addEventListener("click", playGame);

function playGame() {
  infoEl.textContent = "";
  startButton.style.display = "none";
  for (i = 0; i < answer.length; i++) {
    letterDiv = document.createElement("div");
    letterDiv.innerHTML = "_";
    letterDiv.setAttribute("tabindex", i);
    letterDiv.setAttribute("id", i);
    guessWordSection.appendChild(letterDiv);
  }

  document.addEventListener("keypress", (e) => {
    var letter = e.code[e.code.length - 1].toLowerCase();
    // console.log(guessWordSection.children.length);
    for (let i = 0; i < guessWordSection.children.length; i++) {
      if (letter === answer[i]) {
        guessWordSection.children[i].style.color = "#442342";
        guessWordSection.children[i].innerHTML = letter;
        console.log("letterCount", letterCount);
        letterCount += 1;
      }
    }
  });
  timer();
}

function timer() {
  var timeLeft = setInterval(() => {
    timerSeconds--;
    timerEl.innerHTML = timerSeconds;

    if (timerSeconds <= 0 && letterCount !== answer.length) {
      clearInterval(timeLeft);
      gameOver();
    }
    if (letterCount === answer.length) {
      clearInterval(timeLeft);
      gameOver();
    }
  }, 1000);
}
const gameOver = () => {
  console.log(letterCount, answer.length);
  if (letterCount === answer.length) {
    console.log("you won");
    infoEl.textContent = "You won!";
    wins += 1;
    console.log(wins);
  } else {
    infoEl.textContent = "You lost! :(";
    guessWordSection.innerHTML = "";
    losses += 1;
    console.log(losses);
  }
  var scores = {
    wins: wins,
    losses: losses,
  };
  winsEl.textContent = scores.wins;
  lossesEl.textContent = scores.losses;
  console.log(scores);
  localStorage.setItem("wordGuess_scores", JSON.stringify(scores));
  showButton();
};
const showButton = () => {
  button.innerHTML = "Restart Game";
  button.addEventListener("click", restartGame);
  infoSection.appendChild(button);
};
const restartGame = () => {
  timerSeconds = 10;
  letterCount = 0;
  answer = words[Math.floor(Math.random() * words.length)];
  guessWordSection.innerHTML = "";
  button.remove();
  playGame();
};
const init = () => {
  winsEl.textContent = data.wins;
  lossesEl.textContent = data.losses;
};
// localStorage.removeItem("wordGuess_scores");

init();
