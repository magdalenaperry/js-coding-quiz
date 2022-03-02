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

// question Bank
var myQuestions = [{
        question: 'What is my name?',
        answers: {
            1: "abc",
            2: "efg",
            3: "hij"
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

// show and hide screens
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
 questEl.display ="block";
 setTime();
}
function endScreen() {
 timerEl.style.display = "block";
 startEl.style.display = "none";
 gameEl.style.display = "none";
 endEl.style.display = "block";
 questEl.display = "none";
}

// timer
// var timeout = setTimeout(function(){gameScreen}, 20000);




var secondsLeft = 120;

timerEl.textContent = secondsLeft + " seconds left";

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
            // // Stops execution of action at set interval
            // clearInterval(timerInterval);
            // // Calls function to create and append image
            // sendMessage();
        }

    }, 1000);
}











// clicking events
startBtn.addEventListener('click', gameScreen, setTime);
endBtn.addEventListener('click', endScreen);

// starting page loading
function loadPage() {
    startScreen();
};

loadPage();