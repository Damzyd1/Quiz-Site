window.addEventListener("popstate", function(event){
  history.pushState(null, "", window.location.href);
});

document.addEventListener("keydown", e => {
  if((e.ctrlKey || e.metaKey) &&  e.key.toLowerCase() === 'r'){
    e.preventDefault();
  }
});

const topic = "CSS 307: Custody-Based and Rehabilation-Based Prison System";
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
        question: "What is the main philosophy of custody-based prisons?",
        choice1: "Rehabilitation through therapy",
        choice2: "Isolation and deterrence",
        choice3: "Skill-building for societal reintegration",
        choice4: "Restorative justice",
        answer: 2
        // Rationale: Custody-based prisons are designed to isolate offenders from society and deter future crimes through strict confinement and punitive measures.
    },
    {
        question: "Which of the following is a key feature of rehabilitation-based prisons?",
        choice1: "Focus on retributive punishment",
        choice2: "Educational and vocational training programs",
        choice3: "Increased solitary confinement",
        choice4: "Strict surveillance and monitoring",
        answer: 2,
         Rationale: "Rehabilitation-based prisons focus on equipping inmates with education and vocational skills to reintegrate successfully into society."
    },
    {
        question: "What is the primary goal of custody-based prisons?",
        choice1: "Ensuring public safety through isolation",
        choice2: "Reducing recidivism rates",
        choice3: "Promoting psychological rehabilitation",
        choice4: "Creating a community-based justice system",
        answer: 1,
         Rationale: "Custody-based prisons emphasize isolating offenders to protect society from immediate harm and maintain public safety."
    },
    {
        question: "Which of the following is an advantage of rehabilitation-based prisons?",
        choice1: "Immediate reduction in crime rates",
        choice2: "Lower cost of implementation",
        choice3: "Long-term reduction in recidivism",
        choice4: "Increased deterrence through stricter penalties",
        answer: 3,
        Rationale: "Rehabilitation programs aim to address the root causes of crime, resulting in lower reoffending rates and societal benefits over time."
    },
    {
        question: "What is a common disadvantage of custody-based prisons?",
        choice1: "Overemphasis on prisoner reintegration",
        choice2: "High costs and overcrowding",
        choice3: "Excessive focus on vocational training",
        choice4: "Limited focus on public safety",
        answer: 2,
        Rationale: "Custody-based prisons are often criticized for their high operational costs and overcrowding issues, which affect prison effectiveness."
    },
    {
        question: "Which of the following best describes the philosophy of rehabilitation-based prisons?",
        choice1: "Punishment and deterrence",
        choice2: "Reform through skill development",
        choice3: "Isolation of offenders from society",
        choice4: "Maximizing security measures",
        answer: 2,
        Rationale: "Rehabilitation-based prisons focus on reforming offenders by addressing the root causes of criminal behavior, such as lack of skills or education."
    },
    {
        question: "What is a major criticism of rehabilitation-based prisons?",
        choice1: "They are too punitive in nature",
        choice2: "They fail to provide public safety",
        choice3: "They are resource-intensive and expensive",
        choice4: "They discourage community engagement",
        answer: 3,
        Rationale: "Rehabilitation-based systems require significant funding for training, education, and therapy programs, making them more expensive to sustain."
    },
    {
        question: "Which of the following is NOT a goal of custody-based prisons?",
        choice1: "Ensuring public safety",
        choice2: "Deterring future crimes",
        choice3: "Promoting societal reintegration",
        choice4: "Maintaining strict discipline",
        answer: 3,
        Rationale: "Custody-based prisons focus on containment, discipline, and deterrence, while societal reintegration is a goal of rehabilitation-based systems."
    },
    {
        question: "How do custody-based prisons typically achieve their goals?",
        choice1: "By reducing sentences for good behavior",
        choice2: "Through strict surveillance and control",
        choice3: "By offering community service alternatives",
        choice4: "Through therapy and mental health programs",
        answer: 2,
         Rationale: "Custody-based systems rely on tight surveillance and control to ensure inmates remain contained and deterred from reoffending."
    },
    {
        question: "What is one advantage of custody-based prisons?",
        choice1: "Quick isolation of offenders from society",
        choice2: "Focus on reducing prison overcrowding",
        choice3: "Emphasis on inmate rehabilitation",
        choice4: "Provision of community-based services",
        answer: 1,
        Rationale: "Custody-based systems provide immediate public safety by isolating offenders from the community."
    },
    {
        question: "Which system is more likely to focus on reintegration programs?",
        choice1: "Custody-based system",
        choice2: "Rehabilitation-based system",
        choice3: "Both systems equally",
        choice4: "Neither system",
        answer: 2,
         Rationale: "Rehabilitation-based prisons aim to prepare inmates for reentry into society by offering reintegration programs."
    },
    {
        question: "What is the primary disadvantage of custody-based prisons in addressing long-term crime rates?",
        choice1: "They provide insufficient security measures",
        choice2: "They lack programs to address the root causes of crime",
        choice3: "They are too lenient on offenders",
        choice4: "They discourage public trust in law enforcement",
        answer: 2,
        Rationale: "Custody-based prisons focus on punishment and isolation, often neglecting the factors that contribute to reoffending."
    },
    {
        question: "How do rehabilitation-based prisons benefit society in the long term?",
        choice1: "By increasing the length of prison sentences",
        choice2: "By ensuring inmates remain isolated",
        choice3: "By reducing recidivism rates",
        choice4: "By prioritizing public safety over inmate rights",
        answer: 3,
        Rationale: "Rehabilitation programs reduce reoffending by equipping inmates with skills, education, and mental health support."
    },
    {
        question: "What is a notable difference between custody-based and rehabilitation-based prisons?",
        choice1: "Focus on long-term crime reduction",
        choice2: "Level of security measures in place",
        choice3: "Approach to addressing offender behavior",
        choice4: "Severity of punishment for offenders",
        answer: 3,
        Rationale: "Custody-based systems focus on punishment, while rehabilitation-based systems focus on addressing and changing offender behavior."
    },
    {
        question: "Why might a government opt for rehabilitation-based prisons over custody-based prisons?",
        choice1: "To immediately reduce crime rates",
        choice2: "To address systemic issues leading to crime",
        choice3: "To save costs on prison operations",
        choice4: "To increase the deterrent effect of incarceration",
        answer: 2,
        Rationale: "Rehabilitation-based prisons aim to address societal and individual factors, such as poverty or lack of education, that contribute to criminal activity."
    },
    {
        question: "Which system is more effective at reducing prison overcrowding in the short term?",
        choice1: "Custody-based system",
        choice2: "Rehabilitation-based system",
        choice3: "Both systems equally",
        choice4: "Neither system",
        answer: 1,
        Rationale: "Custody-based systems focus on removing offenders from society, often leading to overcrowded prisons without reducing crime rates long-term."
    },
    {
        question: "Which system offers therapy as a core part of its approach?",
        choice1: "Custody-based system",
        choice2: "Rehabilitation-based system",
        choice3: "Both systems equally",
        choice4: "Neither system",
        answer: 2,
        Rationale: "Rehabilitation-based prisons emphasize therapy and mental health support to address underlying issues contributing to criminal behavior."
    },
    {
        question: "What is an advantage of rehabilitation-based systems in terms of offender outcomes?",
        choice1: "Reinforces punitive justice",
        choice2: "Improves reentry preparedness",
        choice3: "Ensures offenders are physically secured",
        choice4: "Reduces the need for judicial oversight",
        answer: 2,
        Rationale: "Rehabilitation programs focus on preparing inmates for a productive and law-abiding life post-incarceration."
    }
];const CORRECT_BONUS = 10;
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

let durationInMinutes = 15;
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
