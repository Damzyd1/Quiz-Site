window.addEventListener("popstate", function(event){
  history.pushState(null, "", window.location.href);
});

/*const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoretext = document.getElementById("score");
const progressbarfull = document.getElementById("progressbarfull");
const loader = document.getElementById("loader");
const game = document.getElementById("game");
let currentQuestion = {};
let questionNo;
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestion = [];
*/
 
  let questions = [
    {
      question: "What distinguishes white-collar crime from other types of crime?",
      choice1: "It involves violence",
      choice2: "It is committed by individuals in high social positions",
      choice3: "It is always victimless",
      choice4: "It is only punishable by fines",
      answer: "It is committed by individuals in high social positions"
    },
    {
      question: "Which criminological theory explains crime as a result of learned behaviour within close social groups",
      choice1: "Strain Theory",
      choice2: "Social Learning Theory",
      choice3: "Rational Choice Theory",
      choice4: "Biological Theory",
      answer: "Social Learning Theory"
    },
    {
      question: "Which of the following is a transnational crime?",
      choice1: "Robbery in a local store",
      choice2: "Money laundering through international banks",
      choice3: "Domestic violence",
      choice4: "Illegal parking",
      answer: "Money laundering through international banks"
    },
    {
      question: "Which theory of crime focuses on how societal labeling can reinforce criminal behaviour?",
      choice1: "Differential Association Theory",
      choice2: "Labeling Theory",
      choice3: "Rational Choice Theory",
      choice4: "Routine Activities Theory",
      answer: "Labeling Theory <br> The theory suggests that being labeled as a criminal can make individuals internalize the label and continue engaging in crime"
    },
    {
      question: "Which of the following crimes is classified as a crime against property?",
      choice1: "Arson",
      choice2: "Murder",
      choice3: "Kidnapping",
      choice4: "Assault",
      answer: "Arson"
    },
    {
      question: "A crime insider trading is an example of?",
      choice1: "Violent crime",
      choice2: "Property crime",
      choice3: "White-collar crime",
      choice4: "Organized crime",
      answer: "White-collar crime <br> This is because it involves illegal financial gain through non-public information"
    },
    {
      question: "The term 'Mens Rea' refers to?",
      choice1: "The physical act of committing a crime",
      choice2: "The legal consequences of a crime",
      choice3: "The mental intent or guilty mind behind a crime",
      choice4: "The classification of crime types",
      answer: "The mental intent or guilty mind behind a crime"
    },
    {
      question: "Strain theory suggests that crime occurs when?",
      choice1: "Individuals lack self-control",
      choice2: "Social norms are unclear or absent",
      choice3: "There is a gap between goals and means to achieve them",
      choice4: "Society rewards deviant behaviour",
      answer: "There is a gap between goals and means to achieve them"
    },
    {
      question: "According to the psychological perspective, crime is often linked to?",
      choice1: "Socioeconomic inequality",
      choice2: "Deviant peer groups",
      choice3: "Personality traits and mental health issues",
      choice4: "Genetic predispositions",
      answer: "Personality traits and mental health issues"
    },
    {
      question: "What is an example of a victimless crime?",
      choice1: "Assault",
      choice2: "Drug use",
      choice3: "Robbery",
      choice4: "Vandalism",
      answer: "Drug use <br> This is because it does not directly harm others but is illegal due to societal and legal restrictions"
    }
  ];

/*const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 4;

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

let durationInMinutes = 1
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
*/




let text = "";
let questionNo = 0;
const questionBox = document.getElementById("questionBox");
for (let i=0; i< questions.length; i++){
  questionNo++;
  text+= questionNo+"."+" "+questions[i].question+'<br>'+"Answer:"+" "+questions[i].answer+'<br>'+'<br>';
}

questionBox.innerHTML = text;
