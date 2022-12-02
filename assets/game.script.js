//These are the variables I will need for my quiz to run
var timeEl= document.querySelector("#time");
var quizContainer = document.getElementById('quiz');
var submitQuiz = document.getElementById('submit quiz');
var resultsContainer = document.getElementById('results');
var startQuiz = document.querySelector(".start");
var secondsLeft = 75;
//I made an array to hold my 4 questions and their multiple choice answers.

const theQuestions = [
{
    question: "What is an element?",
    answers: {
        a: "a variable",
        b: "something you reference",
        c: "earth, wind and fire",
        d: "part of HTML"
    },
    correctAnswer: "d"
},
{
    question: "What do functions do?",
    answers: {
        a: "perform a task",
        b: "calculate a value",
        c: "take an input, return an output",
        d: "they are not relevant to Javascript"
    },
    correctAnswer: "c"
},
{
    question: "What is an array??",
    answers: {
        a: "a variable",
        b: "a structure to hold information",
        c: "sunlight",
        d: "something with {} at the beginning and end"
    },
    correctAnswer: "b"
},
{
    question: "Js is short for what?",
    answers: {
        a: "JavaScript",
        b: "Joe Sedlak",
        c: "Jersey Shore",
        d: "Just sayin"
    },
    correctAnswer: "a"
},
{
    question: "JavaScript is used for??",
    answers: {
        a: "adding functionality to a website",
        b: "Styling",
        c: "i dont know",
        d: "communicating with the world"
    },
    correctAnswer: "a"
}
];

startQuiz.addEventListener("click", theQuiz);

//this function is to create and run my quiz

function theQuiz() {
    var output = [];

    theQuestions.forEach(
    (currentQuestion, questionNumber) => {

        var answers = [];

        for(letter in currentQuestion.answers) {

            answers.push(
                `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
                </label>`
            );
        }
        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
        );
    }
);

quizContainer.innerHTML = output.join('');
}

//this is the function to calculate your score

function yourScore() {

    var answerContainers = quizContainer.querySelectorAll('.answers');

    let numCorrect = 0;

    theQuestions.forEach( (currentQuestion, questionNumber) => {
        var answerContainers = answerContainers[questionNumber];
        var selector = `input[name=question${questionNumber}]:checked`;
        var useerAnswer = (answerContainer.querySelector(selector) || {}).value;
        
        if(userAnswer === currentQuestion.correctAnswer){
            numcorrect++;

            answerContainers[questionNumber].style.color = 'lightgreen';}
            
            else{answerContainers[questionNumber].style.color = 'red';

            }
        });
    
        resultsContainer.innerHTML = `${numCorrect} out of ${theQuestions.length}`;
    };

//bring up the quiz
theQuiz();

submitQuiz.addEventListener('click', yourScore);

function setTime() {
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timeEl.textContent = "time" + secondsLeft;
    }, 1000);
}

