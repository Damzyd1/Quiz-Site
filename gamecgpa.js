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
        question: "What is the primary objective of research in criminology?",
        choice1: "To create laws",
        choice2: "To analyze and solve societal issues related to crime",
        choice3: "To justify criminal behavior",
        choice4: "To punish offenders",
        answer: 2,
        rationale: "Research in criminology aims to study crime, its causes, and prevention strategies, helping policymakers and society address criminal behavior effectively."
    },
    {
        question: "What is an independent variable in research?",
        choice1: "A variable that remains constant",
        choice2: "A variable that is observed for changes",
        choice3: "A variable that is manipulated to observe its effect",
        choice4: "A variable with no significance in the research",
        answer: 3,
        rationale: "An independent variable is manipulated to study its impact on the dependent variable. For example, studying how education affects crime rates would make education the independent variable."
    },
    {
        question: "Which statement defines operationalization in research?",
        choice1: "Defining how variables will be statistically analyzed",
        choice2: "Describing abstract concepts in measurable terms",
        choice3: "Generalizing findings to other populations",
        choice4: "Using intuition to define variables",
        answer: 2,
        rationale: "Operationalization ensures that abstract concepts like 'fear of crime' or 'justice' are clearly defined and measurable, making the research process systematic."
    },
    {
        question: "What is the role of a dependent variable in research?",
        choice1: "It controls the outcome of the study",
        choice2: "It is influenced by the independent variable",
        choice3: "It is manipulated to produce results",
        choice4: "It has no impact on the study’s findings",
        answer: 2,
        rationale: "The dependent variable is the outcome being measured. For example, in research on 'poverty and crime,' crime would be the dependent variable influenced by poverty."
    },
    {
        question: "Why is a hypothesis crucial in research?",
        choice1: "It provides a testable prediction of relationships between variables",
        choice2: "It replaces the need for data collection",
        choice3: "It simplifies the research process",
        choice4: "It prevents ethical issues in studies",
        answer: 1,
        rationale: "A hypothesis is a researcher’s educated guess about the relationship between variables, guiding data collection and analysis."
    },
    {
        question: "Which of the following is an example of qualitative data?",
        choice1: "The number of crimes in a city",
        choice2: "Interview transcripts with victims",
        choice3: "The average age of offenders",
        choice4: "A crime rate chart",
        answer: 2,
        rationale: "Qualitative data captures non-numerical insights, such as the experiences and perspectives of individuals, providing rich contextual information."
    },
    {
        question: "What is the main goal of a literature review in research?",
        choice1: "To prove the researcher’s opinion",
        choice2: "To identify gaps and build on previous studies",
        choice3: "To collect primary data",
        choice4: "To publish the study findings",
        answer: 2,
        rationale: "A literature review examines past studies to avoid redundancy, identify research gaps, and lay the groundwork for new inquiries."
    },
    {
        question: "What is a control variable?",
        choice1: "The primary focus of the study",
        choice2: "A variable manipulated for results",
        choice3: "A variable held constant to reduce bias",
        choice4: "A variable irrelevant to the study",
        answer: 3,
        rationale: "Control variables are kept constant to ensure they don’t influence the dependent variable, enhancing the validity of the study."
    },
    {
        question: "What distinguishes quantitative data from qualitative data?",
        choice1: "Quantitative data is always accurate, while qualitative data is not",
        choice2: "Quantitative data is numerical, while qualitative data is descriptive",
        choice3: "Both involve descriptions of behaviors",
        choice4: "Qualitative data is easier to analyze than quantitative data",
        answer: 2,
        rationale: "Quantitative data includes numbers and statistical information, while qualitative data involves detailed narratives and observations."
    },
    {
        question: "What does ethical research practice in criminology ensure?",
        choice1: "The researcher’s bias is included",
        choice2: "Participants’ privacy, safety, and informed consent",
        choice3: "Data is manipulated for desired results",
        choice4: "Research costs are minimized",
        answer: 2,
        rationale: "Ethical practices prioritize the rights and safety of participants, ensuring the integrity and credibility of the research."
    },
    {
        question: "What is the primary objective of research in criminology?",
        choice1: "To create laws",
        choice2: "To analyze and solve societal issues related to crime",
        choice3: "To justify criminal behavior",
        choice4: "To punish offenders",
        answer: 2,
        rationale: "Research in criminology aims to study crime, its causes, and prevention strategies, helping policymakers and society address criminal behavior effectively."
    },
    {
        question: "What is an independent variable in research?",
        choice1: "A variable that remains constant",
        choice2: "A variable that is observed for changes",
        choice3: "A variable that is manipulated to observe its effect",
        choice4: "A variable with no significance in the research",
        answer: 3,
        rationale: "An independent variable is manipulated to study its impact on the dependent variable. For example, studying how education affects crime rates would make education the independent variable."
    },
    {
        question: "Which statement defines operationalization in research?",
        choice1: "Defining how variables will be statistically analyzed",
        choice2: "Describing abstract concepts in measurable terms",
        choice3: "Generalizing findings to other populations",
        choice4: "Using intuition to define variables",
        answer: 2,
        rationale: "Operationalization ensures that abstract concepts like 'fear of crime' or 'justice' are clearly defined and measurable, making the research process systematic."
    },
    {
        question: "What is the role of a dependent variable in research?",
        choice1: "It controls the outcome of the study",
        choice2: "It is influenced by the independent variable",
        choice3: "It is manipulated to produce results",
        choice4: "It has no impact on the study’s findings",
        answer: 2,
        rationale: "The dependent variable is the outcome being measured. For example, in research on 'poverty and crime,' crime would be the dependent variable influenced by poverty."
    },
    {
        question: "Why is a hypothesis crucial in research?",
        choice1: "It provides a testable prediction of relationships between variables",
        choice2: "It replaces the need for data collection",
        choice3: "It simplifies the research process",
        choice4: "It prevents ethical issues in studies",
        answer: 1,
        rationale: "A hypothesis is a researcher’s educated guess about the relationship between variables, guiding data collection and analysis."
    },
    {
        question: "Which of the following is an example of qualitative data?",
        choice1: "The number of crimes in a city",
        choice2: "Interview transcripts with victims",
        choice3: "The average age of offenders",
        choice4: "A crime rate chart",
        answer: 2,
        rationale: "Qualitative data captures non-numerical insights, such as the experiences and perspectives of individuals, providing rich contextual information."
    },
    {
        question: "What is the main goal of a literature review in research?",
        choice1: "To prove the researcher’s opinion",
        choice2: "To identify gaps and build on previous studies",
        choice3: "To collect primary data",
        choice4: "To publish the study findings",
        answer: 2,
        rationale: "A literature review examines past studies to avoid redundancy, identify research gaps, and lay the groundwork for new inquiries."
    },
    {
        question: "What is a control variable?",
        choice1: "The primary focus of the study",
        choice2: "A variable manipulated for results",
        choice3: "A variable held constant to reduce bias",
        choice4: "A variable irrelevant to the study",
        answer: 3,
        rationale: "Control variables are kept constant to ensure they don’t influence the dependent variable, enhancing the validity of the study."
    },
    {
        question: "What distinguishes quantitative data from qualitative data?",
        choice1: "Quantitative data is always accurate, while qualitative data is not",
        choice2: "Quantitative data is numerical, while qualitative data is descriptive",
        choice3: "Both involve descriptions of behaviors",
        choice4: "Qualitative data is easier to analyze than quantitative data",
        answer: 2,
        rationale: "Quantitative data includes numbers and statistical information, while qualitative data involves detailed narratives and observations."
    },
    {
        question: "What does ethical research practice in criminology ensure?",
        choice1: "The researcher’s bias is included",
        choice2: "Participants’ privacy, safety, and informed consent",
        choice3: "Data is manipulated for desired results",
        choice4: "Research costs are minimized",
        answer: 2,
        rationale: "Ethical practices prioritize the rights and safety of participants, ensuring the integrity and credibility of the research."
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
