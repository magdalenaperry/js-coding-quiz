// start selectors
var startEl = document.querySelector('#start');
var startBtn = document.querySelector('#start-btn');

// game screen selectors
var gameEl = document.querySelector('#game');
var questEl = document.querySelector('#quiz-questions');
var choiceEl = document.querySelector('#quiz-choices');
var nextBtn = document.querySelector('#next-btn');

// question selectors
var showQuestions = document.getElementById('quiz-questions');
var showAnswers = document.getElementById('quiz-choices');
// question position in quiz
var position = 0;

// end score selectors
var addScoreEl = document.querySelector('#addScore');
var endEl = document.querySelector('#game-over');
var submitBtn = document.querySelector('#submit-score');
var playAgBtn = document.querySelector('#play-again');

// timer variables
var timerEl = document.querySelector('#timer');
var secondsLeft = 4;
var timerInterval = null;


//scoring variables
var scoreEl = document.querySelector('#score');
scoreCount = 0;

// question Bank
var myQuestions = [
    // ques1
    {
        question: 'What is my name?',
        answers: {
            1: "Magdalena",
            2: "Brad",
            3: "Anthony",
            4: "Sasha"
        },
        correctAnswer: 1
    },
    // ques2
    {
        question: 'What is my favorite game?',
        answers: {
            1: "Halo",
            2: "Destiny 2",
            3: "Valheim",
            4: 'Red Dead Redemption'
        },
        correctAnswer: 2
    },
    // ques3
    {
        question: 'How old am I?',
        answers: {
            1: "25",
            2: "26",
            3: "27",
            4: '28'
        },
        correctAnswer: 3
    },
    // ques4
    {
        question: 'How old is my plant?',
        answers: {
            1: "6 years",
            2: "7 years",
            3: "8 years",
            4: '9 years'
        },
        correctAnswer: 1
    },
    //ques5
    {
        question: 'What is my plant name?',
        answers: {
            1: "Bamboo",
            2: "Chloropyll",
            3: "Little One",
            4: 'HD'
        },
        correctAnswer: 4
    },
];

// show and hide screens -- partially provided by instructor, Anthony Cooper
function startScreen() {
    timerEl.style.display = "block";
    scoreEl.style.display = "block";
    startEl.style.display = "block";
    gameEl.style.display = "none";
    endEl.style.display = "none";
    nextBtn.style.display = "none";
    // reset position on question and seconds
    secondsLeft = 45;
    position = 0;
}

function gameScreen() {
    timerEl.style.display = "block";
    scoreEl.style.display = "block";
    startEl.style.display = "none";
    gameEl.style.display = "block";
    endEl.style.display = "none";
    nextBtn.style.display = "block"
    
    setTime();
    showCurrentQuestion();
    showCurrentAnswer();
    printSecondsLeft();
}

function endScreen() {
    timerEl.style.display = "block";
    scoreEl.style.display = "block";
    startEl.style.display = "none";
    gameEl.style.display = "none";
    endEl.style.display = "block";
    nextBtn.style.display = "none";
    clearInterval(timerInterval);
}

// populate question beginnning at position: 0
var showCurrentQuestion = function () {
    questEl.innerHTML = "";
    var node = document.createElement('p');
    questEl.appendChild(node);
    node.textContent = myQuestions[position].question
}

// populate answer choices beginning at position: 0
var showCurrentAnswer = function () {
    var item = myQuestions[position];
    var choice = 1;
    choiceEl.innerHTML = "";
    for (var key in item.answers) {
        // creates radio buttons for abcd choices and adds to answer choices
        var inputAdd = document.createElement('input');
        inputAdd.setAttribute('type', 'checkbox')
        choiceEl.appendChild(inputAdd);
        inputAdd.dataset.value = key;
        inputAdd.id = "rB " + choice++;

        var inputLabel = document.createElement('label');
        inputLabel.innerHTML = item.answers[key]
        choiceEl.appendChild(inputLabel);

        // adds answer choice information to each button
        inputAdd.textContent = key + ". " + item.answers[key];
    }
}

var nextQues = function () {
    for (let i = 1; i < 5; i++) {
        var radioButton = document.getElementById('rB ' + i);

        if (radioButton.checked == true) {
            if (myQuestions[position].correctAnswer == i) {
                scoreEl.textContent = scoreCount;
                scoreCount = scoreCount + 20;
                scoreEl.textContent = scoreCount;
            } else {
                // reduce timer
                secondsLeft = secondsLeft - 10
            };
        }
    }

    position++;
    if (position < myQuestions.length) {
        showCurrentQuestion();
        showCurrentAnswer();
    } else {
        endScreen();
    }

}

// timer
function printSecondsLeft() {
    timerEl.textContent = secondsLeft + " seconds left";
}

function setTime() {
    printSecondsLeft();
    // Sets interval in variable
    timerInterval = setInterval(function () {
        secondsLeft--;

        printSecondsLeft();

        if (secondsLeft <= 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            endScreen();

        }
    }, 1000);

}

// play again function
function playAgain() {
    startScreen();
};

// clicking events
startBtn.addEventListener('click', gameScreen, setTime);
nextBtn.addEventListener('click', nextQues);
playAgBtn.addEventListener('click', playAgain);

// starting page loading
function loadPage() {
    startScreen();
};

//local storage added
endEl.addEventListener("click", function (event) {
    if (event.target.matches("#submitBtn")) {
        localStorage.setItem(
            event.target.parentNode.scoreCount, JSON.stringify(event.target.parentNode.querySelector("#add-score").value)
        )
    }
});

loadPage();