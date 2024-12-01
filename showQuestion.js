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
      question: "What is the primary goal of diversion programs in the criminal justice system?",
      choice1: "To punish offenders for their actions",
      choice2: "To divert offenders away from formal incarceration by offering rehabilitation services",
      choice3: "To provide financial support to offenders",
      choice4: "To ensure all offenders face a trial before punishment",
      answer: "To divert offenders away from formal incarceration by offering rehabilitation services"
    },
    {
      question: "Diversion programs are most commonly used for which group of offenders?",
      choice1: "Repeat Offenders",
      choice2: "Violent Offenders",
      choice3: "First-time or low-risk offenders",
      choice4: "Offenders with serious criminal histories",
      answer: "First-time or low-risk offenders"
    },
    {
      question: "Which philosophy is most closely associated with diversion programs",
      choice1: "Deterrence",
      choice2: "Retribution",
      choice3: "Restorative Justice",
      choice4: "Utilitarianism",
      answer: "Restorative Justice"
    },
    {
      question: "Which of the following diversion strategies would likely be used for a defendant with a substance abuse problem",
      choice1: "Probation with regular drug testing",
      choice2: "Pretrial detention in jail",
      choice3: "Restitution payments to the victim",
      choice4: "Banishment from the community",
      answer: "Probation with regular drug testing"
    },
    {
      question: "Which of the following is NOT a fomr of pre-trial release",
      choice1: "Bail",
      choice2: "Release on own recognizance (ROR)",
      choice3: "Incarceration until trial",
      choice4: "House arrest with electronic monitoring",
      answer: "Incarceration until trial",
    },
    {
      question: "Which factor is NOT typically considered when determining pre-trial release?",
      choice1: "The defendants's flight risk",
      choice2: "The defendant's family background",
      choice3: "The defendant's criminal history",
      choice4: "The severity of the alleged crime",
      answer: "The defendant's family background"
    },
    {
      question: "What is the purpose of electronic monitoring (e.g ankle bracelets) as a condition of pre-trial release?",
      choice1: "To monitor the defendant's daily activities in real-time",
      choice2: "To allow the defendant to continue the criminal activities",
      choice3: "To allow the defendant to leave the jurisdiction",
      choice4: "To ensure the defendant's complete freedom",
      answer: "To monitor the defendant's daily activities in real-time"
    },
    {
      question: "Which of the following distinguishes diversion programs from pre-trial release?",
      choice1: "Diversion programs focus on rehabilitation, while pre-trial release focuses on ensuring court attendance",
      choice2: "Diversion programs guarantee a conviction, while pre-trial release does not",
      choice3: "DIversion programs are for violent offenders only, while pre-trial release is for all offenders",
      choice4: "There is no distinction between the two",
      answer: "Diversion programs focus on rehabilitation, while pre-trial release focuses on ensuring court attendance"
    },
    {
      question: "In what way are diversion programs and pre-trial release similar?",
      choice1: "Both focus on immediate incarceration",
      choice2: "Both aim to reduce recidivism and provide alternatives to prison",
      choice3: "Both require defendants to plead guilty before participation",
      choice4: "Both focus on punishing offenders",
      answer: "Both aim to reduce recidivism and provide alternatives to prison"
    },
    {
      question: "Which of the following would most likely be eligible for a diversion program?",
      choice1: "A first-time offender charged with shoplifting",
      choice2: "A defendant with a long criminal history",
      choice3: "A person charged with a violent crime",
      choice4: "A defendant who has failed to appear in court",
      answer: "A first-time offender charged with shoplifting"
    },
    {
      question: "Which of the following is a characteristic of pre-trial release programs?",
      choice1: "They focus on providing rehabilitation and treatment",
      choice2: "They are designed to ensure the defendant remains free until their trial",
      choice3: "THey are only available to juveniles",
      choice4: "They require the defendant to serve a sentence before trial",
      answer: "They are designed to ensure the defendant remains free until their trial"
    },
    {
      question: "Which of the following is true about the impact of diversion programs and pre-trial release on prison overcrowding?",
      choice1: "Both help reduce the number of individuals incarcerated before trial",
      choice2: "Both contribute to increased prison population",
      choice3: "Diversion programs increase overcrowding, while pre-trial release does not",
      choice4: "Educating citizens on British Values",
      answer: "Both help reduce the number of individuals incarcerated before trial"
    },
    {
      question: "Which is the primary purpose of pre-trial release?",
      choice1: "To impose punishment before trial",
      choice2: "To allow defendants to remain free while awaiting trial under certain conditions",
      choice3: "To immediately incarcerate defendants before their trial",
      choice4: "To provide bail funds for all defendants",
      answer: "To allow defendants to remain free while awaiting trial under certain conditions"
    },
    {
      question: "Which of the following diversion strategies would most likely used for a juvenile caught shoplifting?",
      choice1: "Fines amd imprisonment",
      choice2: "Community service and mentorship",
      choice3: "Electronic monitoring",
      choice4: "Immediate trial and sentencing",
      answer: "Community service and mentorship"
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