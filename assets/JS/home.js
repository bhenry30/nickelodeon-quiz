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


var startBtn = document.getElementById("start-btn");
var homeEl = document.getElementById("home");



function startQuiz() {
    homeEl.classList.add("hidden")
    console.log("I am working")
    // setTimeout 
    
};

startBtn.addEventListener("click", startQuiz);
// answerBtn.addEventListener("click", correctAnswerFunc)