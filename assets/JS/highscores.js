const scoresList = document.querySelector('#scores-list')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

window.addEventListener('DOMContentLoaded', function() {
console.log(highScores)
highScores.splice(5)
scoresList.innerHTML =
highScores.map(score => {
    return `<li>${score.initials}   ${score.score}</li>`
}).join('')
})

// window.addEventListener('DOMContentLoaded', function() {
//     const scoresList = document.querySelector('scores-list')
//     const highScores = JSON.parse(localStorage.getItem('recentScore')) || []
//     const recentScore = localStorage.getItem('recentScore')
//     for (let i = 0; i< localStorage.length; i++){
//         const item = document.createElement('li')
//         console.log(highScores)
//         item.textContent = localStorage.getItem(highScores[i])
//         scoresList.appendChild(item)
//     }
// })