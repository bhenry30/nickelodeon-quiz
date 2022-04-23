// Psuedo Code
// 1. Build a home screen with a start button
// 2. Create an event listener for start button
    // 2.1 onClick of start button, 2 things happen
        // 1. timer starts
        // 2. first question is displayed with answer choices
// 3. Create an event listener for answer choices
    // 3.1 onClick of Answer choices
        // 1. indicate somehow that answer is right or wrong
        // 2. then go to next question 
    // 3.2 create reusable function for eventing the elements for questions and answers
    // 3.3 need an array/variable/object to store questions and correct answer
    // 4. Subtract 5 seconds from timer if answer is wrong
    // 4.1 Timer should be displayed while the questions and answers change
    
    
const startBtn = document.getElementById("start-btn");    
const homeEl = document.getElementById("home");
const questionEl = document.getElementById("question-title");
const questionBoxEL = document.getElementById("question-box");
const answerBtnOneEl = document.getElementById('answer-1');
const answerBtnTwoEl = document.getElementById('answer-2');
const answerBtnThreeEl = document.getElementById('answer-3');
const answerBtnFourEl = document.getElementById('answer-4');
const scoreEl = document.getElementById('score')
const countEl = document.getElementById('count')
    // const answerBtnEl = document.getElementsByClassName("answer")
    
// var answerBtn = Array.from(document.getElementById("answer-btn"));
let currentQuestion = {}
const questions = [
    {
        question: "In Jimmy Neutron, what is Jimmy's dad's favorite animal?",
        answer1: "Goose",
        answer2: "Duck",
        answer3: "Hedgehog",
        answer4: "Platypus",
        rightAnswer: 2
    },
    {
        question: "In Hey Arnold, what color hat does Arnold wear?",
        answer1: "Red",
        answer2: "Green",
        answer3: "Blue",
        answer4: "Yellow",
        rightAnswer: 3
    },
    {
        question: "In Rugrats, what does Stu Pickles do for a living?",
        answer1: "Toy Inventor",
        answer2: "Bicycle Salesman",
        answer3: "Bus Driver",
        answer4: "Math Teacher",
        rightAnswer: 1
    },
    {
        question: "In Rocket Power, what color is Twister's skateboard?",
        answer1: "Purple",
        answer2: "Yellow",
        answer3: "Light Blue",
        answer4: "Orange",
        rightAnswer: 4
    },
    {
        question: "In Spongebob Squarepants, what instrument does Squidward Play?",
        answer1: "Flute",
        answer2: "Clarinet",
        answer3: "Saxophone",
        answer4: "Oboe",
        rightAnswer: 2
    }
]

const score_points = 50;
const question_count = 5
const lastQuestion = questions.length - 1;
let score = 0;
let i = -1;
let count = 40


scoreEl.innerText = score
countEl.innerText = count

function setNextQ() {
    if (i == questions.length){
        localStorage.setItem('recentScore', score)
        window.location = ""
    }
    for (++i; i < questions.length; i++) {
        var nextQuestion = questions[i].question
        var answerOne = questions[i].answer1
        var answerTwo = questions[i].answer2
        var answerThree = questions[i].answer3
        var answerFour = questions[i].answer4
        // questionEl.appendChild('h1')
        questionEl.innerText = nextQuestion
        answerBtnOneEl.innerText = answerOne
        answerBtnTwoEl.innerText = answerTwo
        answerBtnThreeEl.innerText = answerThree
        answerBtnFourEl.innerText = answerFour
        console.log(nextQuestion)
        switch (i) {
            case i = 0:
                answerBtnTwoEl.dataset.answer = 'correct';
                break;
            case i = 1:
                answerBtnTwoEl.dataset.answer = '';
                answerBtnThreeEl.dataset.answer = 'correct';
                break;
            case i = 2:
                answerBtnThreeEl.dataset.answer = '';
                answerBtnOneEl.dataset.answer = 'correct';
                break;
            case i = 3:
                answerBtnOneEl.dataset.answer = '';
                answerBtnFourEl.dataset.answer = 'correct';
                break;
            case i = 4:
                answerBtnFourEl.dataset.answer = '';
                answerBtnTwoEl.dataset.answer = 'correct';
                break;
        }
        break
    }
};

function startQuiz() {
    homeEl.classList.add("hidden");
    score = 0
    questionBoxEL.classList.remove("hidden")
    setNextQ()
    // setTimeout 
};

function addScore(e) {
    if (e.target.dataset.answer == 'correct') {
        score += 50;
        scoreEl.innerHTML = score
        e.target.classList.add('correct')
    } else {
    e.target.classList.add('wrong')
    count -= 5
    }
    setTimeout(function(){
        e.target.classList.remove('wrong')
        e.target.classList.remove('correct')
        setNextQ();
    }, 1200)
    
}

function countdown() {
    count--
    countEl.innerText = count
}


let setInt = window.setInterval(() => {
    if (count < 1) {
        clearInterval(setInt);
        window.alert("Time's up!");
        window.location = 'file:///Users/brandonhenry/Desktop/bootcamp-projects/Module-4-Web-APIs/nickelodeon-quiz/highscores.html'
    }

    countdown()
}, 1000)



startBtn.addEventListener("click", startQuiz);
answerBtnOneEl.addEventListener("click", addScore)
answerBtnTwoEl.addEventListener("click", addScore)
answerBtnThreeEl.addEventListener("click", addScore)
answerBtnFourEl.addEventListener("click", addScore)
  
