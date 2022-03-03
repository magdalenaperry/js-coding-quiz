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
var endBtn = document.querySelector('#end-btn');
var submitBtn = document.querySelector('#submit-score');
var playAgBtn = document.querySelector('#play-again');

// timer variables
var timerEl = document.querySelector('#timer');
var secondsLeft = 45;

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
        question: 'What is your name?',
        answers: {
            1: "Grader",
            2: "Anthony",
            3: "hij",
            4: 'answer'
        },
        correctAnswer: 2
    },
    // ques3
    {
        question: 'How old am I?',
        answers: {
            1: "abc",
            2: "efg",
            3: "hij",
            4: 'answer'
        },
        correctAnswer: 3
    },
    // ques4
    {
        question: 'How old is my plant?',
        answers: {
            1: "abc",
            2: "efg",
            3: "hij",
            4: 'answer'
        },
        correctAnswer: 1
    },
    //ques5
    {
        question: 'What is a titan?',
        answers: {
            1: "abc",
            2: "efg",
            3: "hij",
            4: 'answer'
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
}

function gameScreen() {
    timerEl.style.display = "block";
    scoreEl.style.display = "block";
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
    scoreEl.style.display = "block";
    startEl.style.display = "none";
    gameEl.style.display = "none";
    endEl.style.display = "block";
    questEl.display = "none";
    endBtn.display = "none";
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
        inputAdd.setAttribute('type', 'radio')
        choiceEl.appendChild(inputAdd);
        inputAdd.dataset.value = key;
        inputAdd.id = "rB " + choice++;

        var inputLabel = document.createElement('label');
        inputLabel.innerHTML = key + ". " + item.answers[key]
        choiceEl.appendChild(inputLabel);

        // adds answer choice information to each button
        inputAdd.textContent = key + ". " + item.answers[key];
    }
}

var nextQues = function () {
    for (let i = 1; i < 5; i++) {
        var radioButton = document.getElementById('rB ' + i);
        
        if (radioButton.checked == true) {
            // console.log(radioButton.dataset);
            if (myQuestions[position].correctAnswer == i) {
                scoreEl.textContent = scoreCount;
                scoreCount = scoreCount + 20;
                scoreEl.textContent = scoreCount;
            } else {
                // reduce timer
                secondsLeft = secondsLeft - 10
            }

            // console.log(myQuestions[position].correctAnswer);
        }
    }





    position++;
    showCurrentQuestion();
    showCurrentAnswer();
}

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

//play again function
function playAgain (){
       startScreen();
   }


fun







var name = document.getElementById('add-score')

var highScore = {
    name: name.value,
    scoreCount: scoreCount.value,
    // comment: comment.value.trim()
};
// must stringify arrays
localStorage.setItem("highScore", JSON.stringify(highScore));
renderMessage();


function renderMessage() {
    //get item from the local storage you have to 'parse'.
    var lastGrade = JSON.parse(localStorage.getItem("highScore"));
    if (lastGrade !== null) {
        // document.querySelector(".message").textContent = lastGrade.student +
        //     " received a/an " + lastGrade.grade
    }
}






// clicking events
startBtn.addEventListener('click', gameScreen, setTime);
endBtn.addEventListener('click', endScreen);
nextBtn.addEventListener('click', nextQues);
playAgBtn.addEventListener('click', playAgain);
submitBtn.addEventListener('click', );


// starting page loading
function loadPage() {
    startScreen();
};

loadPage();