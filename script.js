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

// timer variables
var timerEl = document.querySelector('#timer');
var secondsLeft = 300;

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
            1: "abc",
            2: "efg",
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
            3: "hij"
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
        // creates buttons for abcd choices and adds to answer choices
        var inputAdd = document.createElement('input');
        inputAdd.setAttribute('type', 'radio')
        choiceEl.appendChild(inputAdd);
        inputAdd.dataset.value = key;
        inputAdd.id = "radio button " + choice++;

        var inputLabel = document.createElement('label');
        inputLabel.innerHTML = key + ". " + item.answers[key]
        choiceEl.appendChild(inputLabel);

        // adds answer choice information to each button
        inputAdd.textContent = key + ". " + item.answers[key];
    }
}






// var addScore = function(){
//     timerEl.textContent = secondsLeft + " seconds left";

// }





var nextQues = function () {
    // need to check if the correct answer of current question matches the current quesiton clicked
    // if the data attribute matches 
    // console.log (showCurrentQuestion === correctAnswer);



    for (let i = 1; i < 5; i++) {
        var radioButton = document.getElementById('radio button ' + i);
        // console.log(radioButton);
        // console.log(radioButton.checked);
        if (radioButton.checked == true) {
            // console.log(radioButton.dataset);
            if (myQuestions[position].correctAnswer == i) {
                scoreEl.textContent = scoreCount;




                scoreCount = scoreCount + 20;
                scoreEl.textContent = scoreCount;
                console.log(scoreCount);
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


// function handleInitialSubmit(event) {
//     event.preventDefault();

//     var stored = JSON.parse(localStorage.getItem('highScores')) || [];
//     var updatedScores = stored.concat({
//         score: score,
//         initials: initialsInput.value
//     });

//     localStorage.setItem('highScores', JSON.stringify(updatedScores));
// }


// clicking events
startBtn.addEventListener('click', gameScreen, setTime);
endBtn.addEventListener('click', endScreen);
nextBtn.addEventListener('click', nextQues);

// starting page loading
function loadPage() {
    startScreen();
};

loadPage();