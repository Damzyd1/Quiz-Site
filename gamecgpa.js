window.addEventListener("popstate", function(event){
  history.pushState(null, "", window.location.href);
});

document.addEventListener("keydown", e => {
  if((e.ctrlKey || e.metaKey) &&  e.key.toLowerCase() === 'r'){
    e.preventDefault();
  }
});

const topic = "CSS 311: Introduction to Research";
const topicId = document.getElementById("topic");
topicId.innerHTML = topic;
setTimeout(disappear, 500000);
function disappear(){
  topicId.style.opacity = 0;
}


const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoretext = document.getElementById("score");
const progressbarfull = document.getElementById("progressbarfull");
const loader = document.getElementById("loader");
const game = document.getElementById("game");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
let currentQuestion = {};
let questionNo;
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestion = [];
let questions = [
    {
        question: "A young woman wearing brightly colored, unconventional clothing is frowned upon in her conservative community but not arrested. This is an example of:",
        choice1: "Crime",
        choice2: "Deviance",
        choice3: "Both crime and deviance",
        choice4: "Neither crime nor deviance",
        answer: 2,
        rationale: "Deviance involves actions that violate societal norms but are not necessarily illegal."
    },
    {
        question: "A behavior can be considered both deviant and criminal when:",
        choice1: "It breaks a law and violates social norms.",
        choice2: "It is accepted by law but not by society.",
        choice3: "It is universally acknowledged as immoral.",
        choice4: "It only receives societal disapproval.",
        answer: 1,
        rationale: "Acts like theft violate legal statutes and societal expectations."
    },
    {
        question: "In which scenario would an act be considered deviant but not criminal?",
        choice1: "A person publicly criticizes the government.",
        choice2: "A person jaywalks in a busy city street.",
        choice3: "A person refuses to shake hands in a formal meeting.",
        choice4: "A person drives under the influence of alcohol.",
        answer: 3,
        rationale: "Such behavior violates etiquette but does not break any laws."
    },
    {
        question: "Crime and deviance share which of the following characteristics?",
        choice1: "Both are determined by the individual’s moral stance.",
        choice2: "Both are socially constructed and vary by culture.",
        choice3: "Both result in formal legal sanctions.",
        choice4: "Both are universally defined across societies.",
        answer: 2,
        rationale: "Cultural norms and legal systems differ across societies."
    },
    {
        question: "A society legalizes same-sex marriage but certain religious groups continue to condemn it. How does this reflect the relationship between crime and deviance?",
        choice1: "Deviance and crime always overlap.",
        choice2: "Deviance can persist even when the law changes.",
        choice3: "Crime becomes irrelevant in the presence of legal change.",
        choice4: "Law shapes societal norms entirely.",
        answer: 2,
        rationale: "Legal acceptance does not always eliminate societal disapproval."
    },
    {
        question: "Which of the following best illustrates the cultural relativity of deviance?",
        choice1: "Stealing is considered wrong universally.",
        choice2: "Drinking alcohol is prohibited in some countries but acceptable in others.",
        choice3: "Murder is punishable everywhere.",
        choice4: "Assault is universally deemed unacceptable.",
        answer: 2,
        rationale: "What is deviant in one culture may not be deviant in another."
    },
    {
        question: "The societal reaction to deviance differs from reactions to crime because:",
        choice1: "Crime is always punished, but deviance is ignored.",
        choice2: "Deviance often lacks formal sanctions.",
        choice3: "Crime only affects individuals, while deviance affects society.",
        choice4: "Deviance has legal consequences, while crime does not.",
        answer: 2,
        rationale: "Deviance usually attracts social disapproval rather than legal punishment."
    },
    {
        question: "A behavior classified as a crime in one culture might only be considered deviant in another. This highlights:",
        choice1: "The universal nature of deviance.",
        choice2: "The static nature of criminal law.",
        choice3: "The importance of local customs in defining norms.",
        choice4: "The irrelevance of cultural differences in law.",
        answer: 3,
        rationale: "Cultural context shapes what is defined as deviant or criminal."
    },
    {
        question: "How does the concept of 'victimless crimes' challenge the distinction between crime and deviance?",
        choice1: "It implies that all crimes have victims.",
        choice2: "It shows that crimes do not always harm others.",
        choice3: "It proves that deviance and crime are identical.",
        choice4: "It shows that societal norms are unimportant.",
        answer: 2,
        rationale: "Victimless crimes (e.g., drug use) may not harm others but are still illegal."
    },
    {
        question: "In a highly traditional society, public displays of affection are met with harsh punishment, while in modern urban settings, such behavior is accepted. This demonstrates:",
        choice1: "The rigidity of deviance across cultures.",
        choice2: "The universality of criminal behavior.",
        choice3: "The influence of cultural values on deviance.",
        choice4: "The irrelevance of societal norms.",
        answer: 3,
        rationale: "Norms and perceptions of deviance change based on cultural values."
    },
    {
        question: "Which of the following scenarios illustrates the fluid boundary between crime and deviance?",
        choice1: "Same-sex relationships are legalized but still stigmatized in some communities.",
        choice2: "Public protests are celebrated globally.",
        choice3: "Tax fraud is socially acceptable everywhere.",
        choice4: "Murder is universally celebrated.",
        answer: 1,
        rationale: "Legal acceptance does not guarantee societal approval."
    },
    {
        question: "What term describes behaviors that are legal but considered morally deviant by a society?",
        choice1: "Informal deviance",
        choice2: "Formal deviance",
        choice3: "Criminal behavior",
        choice4: "Social anarchy",
        answer: 1,
        rationale: "Informal deviance violates social norms without breaking laws."
    }
];
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = questions.length;
const Total_Score = 10*MAX_QUESTIONS;
function startGame(){
  questionCounter = 0;
  score = 0;
  //using spread operators to spread the contents of the array as shown in line 52
  availableQuestions = [...questions];
  getNewQuestion();
  startTestTimer();
}
function getNewQuestion(){
  if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
    //setSCore and transfer to end.html
    localStorage.setItem("mostRecentScore", score);
    localStorage.setItem("Max_Score", Total_Score);
    return window.location.assign("end.html");
  }
  questionCounter++;
  progressText.innerHTML = questionCounter + "/"+ MAX_QUESTIONS;
  //Update the progress bar
  let progress_percent = questionCounter / MAX_QUESTIONS * 100;
  progressbarfull.style.width = progress_percent+"%";
  const questionIndex = Math.floor(Math.random()* availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerHTML = currentQuestion.question;
  
  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerHTML = currentQuestion['choice' + number];
  });
  
  availableQuestions.splice(questionIndex,1);
  
  acceptingAnswers = true;
}

choices.forEach(choice => {
  choice.addEventListener("click",e => {
    if (!acceptingAnswers) return;
    
    acceptingAnswers = false;
    const selectedChoice = e.target
    const selectedAnswer = selectedChoice.dataset["number"];
    const classToApply = selectedAnswer == currentQuestion.answer? "correct": "incorrect";
    
    selectedChoice.parentElement.classList.add(classToApply);
    if(classToApply == "correct"){
      score+=10;
    }
    scoretext.innerHTML = score;
    setTimeout(remove_next, 1000);
    function remove_next(){
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }
  });
});

let durationInMinutes = 25;
let timeInSeconds = durationInMinutes * 60;
const timerDisplay = document.getElementById("timer");

function startTestTimer(){
  const timerInterval = setInterval( () => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    
    const formattedTime = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    
    timerDisplay.innerHTML = formattedTime;
    
    if(timeInSeconds <= 0){
      clearInterval(timerInterval);
      return window.location.assign("end.html");
    }else{
      timeInSeconds--;
    }
    
  },1000);
}
setTimeout(delay, 2000);
function delay(){
  game.classList.remove("hidden");
  loader.style.display = "none";
  startGame();
}
/*next.addEventListener("click", function(){
  getNewQuestion();
});
*/
