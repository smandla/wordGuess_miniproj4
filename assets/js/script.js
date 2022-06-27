//grab local storage items
var data = JSON.parse(localStorage.getItem("wordGuess_scores")) || "[]";

// create array of strings, choose randomly to pick word
var words = ["javascript", "pet", "dinosaur", "toddler", "antacid"];

var wins = data.wins;
var losses = data.losses;
// need to listen for button to click and start timer and choose word
// using length of random string, generate blank spaces/ underscores
var startButton = document.getElementById("start_button");
var timerEl = document.getElementById("timer");
var timerSeconds = 10;
var guessWordSection = document.getElementById("guess_word_section");
var infoEl = document.getElementById("info");
// var divEl = document.querySelectorAll("div");
// console.log(divEl);
var answer = words[2];
var letterCount = 0;
startButton.addEventListener("click", playGame);

function playGame() {
  for (i = 0; i < answer.length; i++) {
    console.log(words[2][i]);
    letterDiv = document.createElement("div");
    letterDiv.innerHTML = "_";
    letterDiv.setAttribute("tabindex", i);
    letterDiv.setAttribute("id", i);
    guessWordSection.appendChild(letterDiv);
    // letterDiv.addEventListener("keydown", (e) => {
    //   console.log(e.code);
    // });
    // console.log(letterDiv);

    /***
     * _ _ _ _
     * b o a t
     *
     * o
     *
     *
     *
     */
    //   console.log(letter);
  }
  document.addEventListener("keypress", (e) => {
    console.log(e.code);
    var letter = e.code[e.code.length - 1].toLowerCase();
    console.log(guessWordSection.children.length);
    for (let i = 0; i < guessWordSection.children.length; i++) {
      //   console.log((guessWordSection.children[i].innerHTML =
      console.log(answer[i]);
      if (letter === answer[i]) {
        guessWordSection.children[i].innerHTML = letter;
        letterCount += 1;
      }
      /** player guesses all necessary letters in word */
      if (letterCount === answer.length) {
        infoEl.textContent = "You won!";
        wins += 1;

        var scores = {
          wins: wins,
          losses: losses,
        };
        console.log(scores);
        localStorage.setItem("wordGuess_scores", JSON.stringify(scores));
      }

      console.log(letterCount === answer.length);
      //   console.log(guessWordSection);

      // if(letter === answer[i])
    }

    console.log(words[2][i]);
    //   console.log(letter, words[2][i]);
    if (letter === answer[i]) {
      console.log(letter, answer[i]);

      // letterDiv.getAttribute("tabindex", i).innerHTML = le
    }
  });
  timer();
}
guessWordSection.style.backgroundColor = "green";

function timer() {
  var timeLeft = setInterval(() => {
    timerSeconds--;
    timerEl.innerHTML = timerSeconds;

    if (timerSeconds <= 0 && letterCount !== answer.length) {
      clearInterval(timeLeft);
      guessWordSection.innerHTML = "";
    }
    if (letterCount === answer.length) {
      clearInterval(timeLeft);
    }
  }, 1000);
}
/**
 * 
document.addEventListener('keydown', logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}
 */
