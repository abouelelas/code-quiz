// Start with variables of where you are in the quiz,
// grab variables to get questions, answers, start button, 
// a function to start the quiz
// a function to start the questions
// a function to figure out if user is right or wrong
// a function for the timer
// a function to end the quiz
// a function to save high scores in local storage and to display them from local storage
// create a list of questions and answers
var questionList = [
    {
        "question": "What does Buon Giorno mean? ",
        "a": "Good Morning",
        "b": "Good Night",
        "c": "Good Afternoon",
        "d": "You're Welcome",
        "correct": "a",
        "userAnswer": null
    },
    {
        "question": "What does Grazie mean?",
        "a": "That's it.",
        "b": "Let's go",
        "c": "Thank you",
        "d": "You're Welcome",
        "correct": "c",
        "userAnswer": null
    },
    {
        "question": "Which of the following means red?",
        "a": "bianco",
        "b": "blu",
        "c": "giallo",
        "d": "rosso",
        "correct": "d",
        "userAnswer": null
    },
    {
        "question": "How would you say the number six?",
        "a": "sei",
        "b": "uno",
        "c": "tre",
        "d": "due",
        "correct": "a",
        "userAnswer": null
    },
    {
        "question": "How would you say restaurant in Italian?",
        "a": "ristoranto",
        "b": "ristorante",
        "c": "ristoranta",
        "d": "ristorantes",
        "correct": "b",
        "userAnswer": null
    },
    {
        "question": "What does Arrivederci mean?",
        "a": "Good Luck",
        "b": "Have a good trip",
        "c": "Thank you",
        "d": "Good Bye",
        "correct": "d",
        "userAnswer": null
    }
];

var questionTag = document.body.querySelector("#question");
var answerTagA = document.body.querySelector("#answer-a");
var answerTagB = document.body.querySelector("#answer-b");
var answerTagC = document.body.querySelector("#answer-c");
var answerTagD = document.body.querySelector("#answer-d");

var buttonA = document.body.querySelector("#button-a");
var buttonB = document.body.querySelector("#button-b");
var buttonC = document.body.querySelector("#button-c");
var buttonD = document.body.querySelector("#button-d");

var scores = document.body.querySelector("#scores");

var questionIndex = 0;

function buttonHandler(event) {
    var button = event.target;
    var userAnswer = button.getAttribute("data-answer");
    var questionId = parseInt(button.getAttribute("data-question"));
    console.log(button);
    console.log(userAnswer);
    console.log(questionId);
    questionList[questionId]["userAnswer"] = userAnswer;

    if (questionList[questionId]["userAnswer"] === questionList[questionId]["correct"]) {
        score.textContent = "You got it correct";
        setTimeout(function () {
            questionIndex++;
            beginQuestion();
            score.textContent = "";
        }, 1000);
    }
    else {
        score.textContent = "You got it wrong";
        setTimeout(function () {
            if (questionIndex < questionList.length) {
                secondsLeft = secondsLeft - 5;
                if (secondsLeft <= 0) {
                    time.textContent = `  Remaining: 0 seconds`;
                    gameOver();
                }
                time.textContent = `  Remaining: ${secondsLeft} seconds`;
                questionIndex++;
                beginQuestion();
                score.textContent = "";
            } else {
                beginQuestion();
            }

        }, 1000);

    }
}

var gameOver = function gameOver(interval) {
    clearInterval(interval);
    alert("Game Over");
    document.getElementById("italian-flag").style.display = "inline-block";
    document.getElementById("instructions").style.display = "block";
    document.getElementById("start").style.display = "block";
}

var secondsLeft = 60;
function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        time.textContent = `  Remaining: ${secondsLeft} seconds`;
        if (secondsLeft <= 0) {
            gameOver(timerInterval);
        }

    }
        , 1000);
}
var startBtn = document.querySelector("#start");

startBtn.addEventListener("click", function (event) {
    document.getElementById("italian-flag").style.display = "none";
    document.getElementById("instructions").style.display = "none";
    document.getElementById("start").style.display = "none";
    setTime();
    beginQuestion()
});

buttonA.addEventListener("click", buttonHandler);
buttonB.addEventListener("click", buttonHandler);
buttonC.addEventListener("click", buttonHandler);
buttonD.addEventListener("click", buttonHandler);

function beginQuestion() {
    console.log(questionList[questionIndex]);
    var wholeObj = questionList[questionIndex];
    var question = wholeObj.question;
    console.log(question);
    questionTag.textContent = question;
    questionTag.setAttribute("data-question", questionIndex);

    answerTagA.textContent = wholeObj.a;
    answerTagB.textContent = wholeObj.b;
    answerTagC.textContent = wholeObj.c;
    answerTagD.textContent = wholeObj.d;
    buttonA.setAttribute("data-question", questionIndex);
    buttonB.setAttribute("data-question", questionIndex);
    buttonC.setAttribute("data-question", questionIndex);
    buttonD.setAttribute("data-question", questionIndex);
}

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
    window.location.href = "highscores.html";
}

function checkForEnter(event) {
    // "13" represents the enter key
    if (event.key === "Enter") {
        saveHighscore();
    }
}