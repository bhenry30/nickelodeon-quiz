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
    const questionBox = document.getElementById("question-box");
    const answerBtnsEl = document.getElementById('answer-btns');
 
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

function setNextQ() {

    for (let i = 0; i < questions.length; i++) {
        var nextQuestion = questions[i].question
        // questionEl.appendChild('h1')
        questionEl.innerText = nextQuestion
        console.log(nextQuestion)
        break
    }
};

function startQuiz() {
    homeEl.classList.add("hidden");
    score = 0
    questionBox.classList.remove("hidden")
    setNextQ()
    // setTimeout 
};

startBtn.addEventListener("click", startQuiz);
// answerBtn.addEventListener("click", correctAnswerFunc)