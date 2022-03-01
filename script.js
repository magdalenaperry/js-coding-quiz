var startEl = document.querySelector('#start');
var startBtn = document.querySelector('#start-btn');
var gameEl = document.querySelector('#game');
var endEl = document.querySelector('#game-over');
var initialsInput = document.querySelector('#leaderboard');

// var cursor = 0;


// CSS attributes
startEl.setAttribute('style', 
'font-size: 50px;', 
'text-align: center;');

startBtn.setAttribute('style',
'font-size: 40px;',
'background-color: red;')

gameEl.setAttribute('style', 
'font-size: 50px;', 
'text-align: center;');

endEl.setAttribute('style', 
'font-size: 40px;', 
'text-align: center;');

// Question Bank
var myQuestions = [
    {
        correctAnswer: "c",
        question: 'What is my name?',
        answers: {
            a: "abc",
            b: "efg",
            c: "hij"
        },
        
    },
    {
        correctAnswer: "a",
        question: 'What is your name?',
        answers: {
            a: "abc",
            b: "efg",
            c: "hij"
        },
        
    },
    {
        correctAnswer: "b",
        question: 'What is his name?',
        answers: {
            a: "abc",
            b: "efg",
            c: "hij"
        },
        
    },
];


// Questions on the Screen
var showQuestions = document.getElementById('game'); {
    for (let i = 0; i < myQuestions.length; i++) {
        showQuestions.textContent = (myQuestions[i].question);

        // showQuestions.textContent = (myQuestions[i].answers.a);
        // showQuestions.createElement('p');
        
    };
}


// var addThings showQuestions.appendChild()




// var question = {
//     possible: [
//         "answer 1",
//         "answer 2",
//         "answer 3",
//         "answer 4",
//     ],
//     correct: 2
// }


function startScreen() {
    startEl.style.display = "block";
    gameEl.style.display = "none";
    endEl.style.display = "none";
}

function gameScreen() {
    startEl.style.display = "none";
    gameEl.style.display = "block";
    endEl.style.display = "none";

    // for (var i = 0; i <question.possible.length; i++){
    //     var item = question.possible[i];
    //     var answerBtn = document.createElement('button');
    //     answerBtn.textContent= i + 1 + ". " + item;    
    //     gameEl.appendChild(answerBtn);
    // }
}

function endScreen() {
    startEl.style.display = "none";
    gameEl.style.display = "none";
    endEl.style.display = "block";
}


function init() {
    startScreen();
}

startBtn.addEventListener('click', gameScreen);
gameEl.addEventListener('click', endScreen);

init();


// var generateBtn = document.querySelector("#start");













// // localStorage.setItem("myQuestions", JSON.stringify(myQuestions));
// // console.log(localStorage);
// // console.log(myQuestions);

// generateBtn.addEventListener("click", function() {
//     console.log(myQuestions);
// });



// // var getQuestions = function(){
// //     var questions = JSON.parse(localStorage.getItem(myQuestions));
// // }


// // document.addEventListener('keydown', function (event) {
// //             for (let i = 0; i < gameWord.length; i++) {
// //                 if (gameWord[i] === event.key) {
// //                     underScores[i] = event.key
// //                 }
// //             }
// //             displayWord();

// //             checkWin();


// // GIVEN I am taking a code quiz


// // WHEN I click the start button




// // THEN a timer starts and I am presented with a question


// // WHEN I answer a question


// // THEN I am presented with another question


// // WHEN I answer a question incorrectly


// // THEN time is subtracted from the clock


// // WHEN all questions are answered or the timer reaches 0


// // THEN the game is over


// // WHEN the game is over



// // THEN I can save my initials and my score