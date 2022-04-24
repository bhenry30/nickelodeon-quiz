const recentScore = localStorage.getItem('recentScore')
const thisScoreEl = document.getElementById('recent-score')
const submitBtn = document.getElementById('submit')
const initialsInput = document.getElementById('initials')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

console.log(recentScore)
thisScoreEl.innerHTML = recentScore

submitBtn.addEventListener("click", function(){
    
    const initials = initialsInput.value
    const score = {
        score: recentScore,
        initials: initials
    }
    highScores.push(score)
    highScores.sort((a,b) => {
        return b.score - a.score
    })
    localStorage.setItem('highScores', JSON.stringify(highScores))
})