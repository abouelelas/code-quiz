var initialsEl = document.getElementById("initials");
var submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click", function(event){
  saveHighscore();
})
function printHighscores() {
    // get value of input box
var initials = initialsEl.value.trim();
// make sure value wasn't empty
if (initials !== "") {
    // get saved scores from localstorage, or if not any, set to empty array
    var highscores =
        JSON.parse(window.localStorage.getItem("scores")) || [];
    // format new score object for current user
    var newScore = {
        score: time,
        initials: initials
    };
    // save to localstorage
    score.push(newScore);
    window.localStorage.setItem("scores", JSON.stringify(score));
    // redirect to next page
    window.location.href = "scores.html";
}

function checkForEnter(event) {
    // "13" represents the enter key
    if (event.key === "Enter") {
        saveHighscore();
    }
}
    var highscores = JSON.parse(window.localStorage.getItem("scores")) || [];
    // sort highscores by score property in descending order
   highscores.sort(function(a, b) {
      return b.score - a.score;
    });
    highscores.forEach(function(score) {
      // create li tag for each high score
      var liTag = document.createElement("li");
      liTag.textContent = highscores.initials + " - " + scores.score;
      // display on page
      var olEl = document.getElementById("scores");
      olEl.appendChild(liTag);
    });
  }
  function clearHighscores() {
    window.localStorage.removeItem("scores");
    window.location.reload();
  }
  document.getElementById("clear").onclick = clearHighscores;
  // run function when page loads
  printHighscores();

