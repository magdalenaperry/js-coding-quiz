// document selectors
var timerEl = document.querySelector('#timer')
var startEl = document.querySelector('#start');
var startBtn = document.querySelector('#start-btn');

var gameEl = document.querySelector('#game');
var questEl = document.querySelector('#quiz-questions');
var choiceEl = document.querySelector('#quiz-choices');
var nextBtn = document.querySelector('#next-btn');

var addScoreEl = document.querySelector('#addScore');
var endEl = document.querySelector('#game-over');
var endBtn = document.querySelector('#end-btn');

var showQuestions = document.getElementById('quiz-questions');
var showAnswers = document.getElementById('quiz-choices');

// timer variables
var secondsLeft = 1000;
// timerEl.textContent = secondsLeft + " seconds left";

//question position in quiz
var position = 0;

// question Bank
var myQuestions = [{
        question: 'What is my name?',
        answers: {
            a: "Magdalena",
            b: "Brad",
            c: "Anthony",
            d: "Sasha"
        },
        correctAnswer: "2"
    },
    {
        question: 'What is your name?',
        answers: {
            1: "abc",
            2: "efg",
            3: "hij"
        },
        correctAnswer: "2"
    },
];

// show and hide screens -- provided by instructor, Anthony Cooper
function startScreen() {
    timerEl.style.display = "block";
    startEl.style.display = "block";
    gameEl.style.display = "none";
    endEl.style.display = "none";
}

function gameScreen() {
    timerEl.style.display = "block";
    startEl.style.display = "none";
    gameEl.style.display = "block";
    endEl.style.display = "none";
    questEl.display = "block";
    setTime();
    showCurrentQuestion();
    showCurrentAnswer();
}

function endScreen() {
    timerEl.style.display = "block";
    startEl.style.display = "none";
    gameEl.style.display = "none";
    endEl.style.display = "block";
    questEl.display = "none";
}

// populate question beginnning at position: 0
var showCurrentQuestion = function () {
    var node = document.createElement('p')
    questEl.appendChild(node);
    node.textContent = myQuestions[position].question
}

// populate answer choices beginning at position: 0
var showCurrentAnswer = function () {
    var item = myQuestions[position];
    // console.log(item);
    for (var key in item.answers) {
        // console.log(item.answers[key]);
        // console.log(key + ". " +item.answers[key]);

        // creates buttons for abcd choices and adds to answer choices
        var node = document.createElement('button')
        choiceEl.appendChild(node);
        // adds answer choice information to each button
        node.textContent = key + ". " + item.answers[key];
        // var node1 = document.createElement('p')
        // questEl.appendChild(node1);
        // node1.textContent = 'hi'}

    }
}

var checkAnswer = function (){
 



}

// for (var i = 0; i <myQuestions.length; i++){
//     var item = myQuestions.answers[i];
//     var answerBtn = document.createElement('button');
//     answerBtn.textContent= i + 1 + ". " + item;    
//     gameEl.appendChild(answerBtn);
// }

// timer
function printSecondsLeft() {
    timerEl.textContent = secondsLeft + " seconds left";
}

function setTime() {
    printSecondsLeft();
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;

        printSecondsLeft();

        if (secondsLeft <= 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            endScreen();
        }

    }, 1000);
}

// clicking events
startBtn.addEventListener('click', gameScreen, setTime);
endBtn.addEventListener('click', endScreen);
// nextBtn.addEventListener('click', checkAnswer);

// starting page loading
function loadPage() {
    startScreen();
};

loadPage();