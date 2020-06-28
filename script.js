// Start with variables of where you are in the quiz,
// quesionIndex, userTime, (questions * random.length of questions), variable for timer
// grab variables to get questions, answers, start button, 
// a function to start the quiz
// a function to start the questions
// a function to figure out if user is right or wrong
// a function for the timer
// a function to end the quiz
// a function to save high scores in local storage and to display them from local storage
// create a list of questions and answers
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        time.textContent = `Time Remaining: ${secondsLeft} seconds`; 
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
        }
    }, 1000);
}

    var questionList = [
    {
        "question": "What does Buon Giorno mean in English? ",
        "a": "Good Morning",
        "b": "Good Night",
        "c": "Good Afternoon",
        "d": "You're Welcome",
        "correct": "a",
        "userAnswer": null
    },
    {
        "question": "What does Grazie mean in English?",
        "a": "That's it.",
        "b": "Let's go",
        "c": "Thank you",
        "d": "You're Welcome",
        "correct": "c",
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

var score = document.body.querySelector("#score");

var questionIndex = 0;

function buttonHandler(event) {
    var button = event.target;
   
    var userAnswer = button.getAttribute("data-answer");
    var questionId = parseInt(button.getAttribute("data-question"));
    console.log(button);
    console.log(userAnswer);
    console.log(questionId);
    questionList[questionId]["userAnswer"] = userAnswer;

    if(questionList[questionId]["userAnswer"] === questionList[questionId]["correct"]){
        score.textContent = "You got it correct";
        setTimeout(function(){
        questionIndex++;
            initializeQuestion();
            score.textContent= "";
        }, 4000);
    }
    else{
        score.textContent = "You got it wrong";
        setTimeout(function(){
            questionIndex++;
            initializeQuestion();
            score.textContent= "";
        }, 4000);
    }
}
var startBtn = document.querySelector("#start");
startBtn.addEventListener("click",initializeQuestion);
buttonA.addEventListener("click",buttonHandler);
buttonB.addEventListener("click",buttonHandler);
buttonC.addEventListener("click",buttonHandler);
buttonD.addEventListener("click",buttonHandler);

function initializeQuestion(){
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

initializeQuestion();