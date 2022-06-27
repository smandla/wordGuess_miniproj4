// create array of strings, choose randomly to pick word
var words = ["javascript", "pet", "dinosaur", "toddler", "antacid"];

// need to listen for button to click and start timer and choose word
// using length of random string, generate blank spaces/ underscores
var startButton = document.getElementById("start_button");
var timerEl = document.getElementById("timer");
var timerSeconds = 20;
var guessWordSection = document.getElementById("guess_word_section");

startButton.addEventListener("click", playGame);

function playGame() {
  for (i = 0; i < words[2].length; i++) {
    console.log(words[2][i]);
    var letterDiv = document.createElement("div");
    letterDiv.innerHTML = "_";
    letterDiv.setAttribute("tabindex", i);
    guessWordSection.appendChild(letterDiv);
    // letterDiv.addEventListener("keydown", (e) => {
    //   console.log(e.code);
    // });
  }
  timer();
}
guessWordSection.style.backgroundColor = "green";
document.addEventListener("keydown", (e) => {
  console.log(e.code);
});
function timer() {
  var timeLeft = setInterval(() => {
    timerSeconds--;
    timerEl.innerHTML = timerSeconds;
    if (timerSeconds <= 0) {
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
