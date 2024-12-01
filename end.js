window.addEventListener("popstate", function(event){
  history.pushState(null, "", window.location.href);
});

const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScore");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const Max_Score = localStorage.getItem("Max_Score");

//localStorage.clear() this helps to reset localStorage;
//things in localStorage are stored as a string

let highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5;

const percent = Math.round(mostRecentScore / Max_Score *100);
finalScore.innerHTML = `Final Score:${mostRecentScore} (${percent}%)`;
username.addEventListener("keyup", function(){
  saveScoreBtn.disabled = !username.value;
});
function saveHighScore(e){
  e.preventDefault();
  //using objects help you assign properties of different types e.g integers and string to a single variable
  const score = {
    score: percent,
    name: username.value
  };
  highScores.push(score);
  //sort alphabetically and also return the first five highest scores
  highScores.sort((a,b) =>  b.score - a.score);
  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("index.html");
  
  
}