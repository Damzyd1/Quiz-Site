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
        question: "Anything that occupies space, possesses mass of its own, offers resistance to change of inertia and may be felt by any of our sensory organs is ____.",
        choice1: "Atom",
        choice2: "Molecules",
        choice3: "Matter",
        choice4: "Kinetic",
        answer: "Matter"
    },
    {
        question: "Matter exists as a ____ and ____",
        choice1: "Abiotic and Biotic entity",
        choice2: "Living and non-living entity",
        choice3: "Living and non-living things",
        choice4: "Biotic and abiotic things",
        answer: "Living and non-living entity"
    },
    {
        question: "How does Growth in non-living matter come?",
        choice1: "If there is an addition of the same or different matter by some processes to the matter",
        choice2: "Properties of respiration, growth, movement, metabolism and reproduction",
        choice3: "Eating and excretion",
        choice4: "None of the above",
        answer: "If there is an addition of the same or different matter by some processes to the matter"
    },
    {
        question: "Living matter has the following properties except",
        choice1: "Reproduction",
        choice2: "Metabolism",
        choice3: "Processes",
        choice4: "Respiration",
        answer: "Processes"
    },
    {
        question: "Matter is constituted means?____",
        choice1: "Matter is a whole",
        choice2: "Matter is made up of something else",
        choice3: "Matter is dependent",
        choice4: "Matter is independent",
        answer: "Matter is made up of something else"
    },
    {
        question: "Matter by its composition can be divided into?",
        choice1: "Mixtures and change",
        choice2: "Atom and molecules",
        choice3: "Pure substances and Molecules",
        choice4: "Pure substances and Mixtures",
        answer: "Pure substances and Mixtures"
    },
    {
        question: "How many states can matter exist in?",
        choice1: "5",
        choice2: "3",
        choice3: "4",
        choice4: "2",
        answer: "3"
    },
    {
        question: "What are the states matter exists in?",
        choice1: "Solid, liquid, plasma",
        choice2: "Solid, Sulphur",
        choice3: "Solid, liquid",
        choice4: "Liquid and gas",
        answer: "Solid, liquid, plasma"
    },
    {
        question: "___ is a statement of facts for understanding, explaining, and making predictions about an observable phenomenon?",
        choice1: "Scientific law",
        choice2: "Statement",
        choice3: "Theory",
        choice4: "Hypothesis",
        answer: "Theory"
    },
    {
        question: "A statement of facts that has been subjected to critical analysis, experimentation and found to correctly explain an observable phenomenon under conditions stated is?",
        choice1: "Theory",
        choice2: "Scientific law",
        choice3: "Elements",
        choice4: "Statement",
        answer: "Scientific law"
    },
    {
        question: "___ elements exist in nature and are arranged into ___ periods of the periodic table.",
        choice1: "218 elements, 18 periods",
        choice2: "318 elements, 28 periods",
        choice3: "118 elements, 8 periods",
        choice4: "118 elements, 18 periods",
        answer: "118 elements, 18 periods"
    },
    {
        question: "An element has how many types of atom?",
        choice1: "One",
        choice2: "Three",
        choice3: "Four",
        choice4: "Eight",
        answer: "One"
    },
    {
        question: "A compound can only be separated by ___",
        choice1: "Physical therapy",
        choice2: "Physical process",
        choice3: "Chemical process",
        choice4: "Chemical procedure",
        answer: "Chemical process"
    },
    {
        question: "Where an element is made up of one atom, a compound is made up of more than one type of atom bonded together, a mixture is made up of _____",
        choice1: "One element and one atom",
        choice2: "More than one element or compound in a weak bond",
        choice3: "More than one type of atom or compound in a weak bond",
        choice4: "More than one type of element and atom in a weak bond",
        answer: "More than one element or compound in a weak bond"
    },
    {
        question: "What does not require a chemical process to break but requires only a simple physical procedure?",
        choice1: "Mixture",
        choice2: "Compound",
        choice3: "Elements",
        choice4: "Atom",
        answer: "Mixture"
    },
    {
        question: "Mixture can be either __& __",
        choice1: "Hydrogen and oxygen",
        choice2: "Element and compound",
        choice3: "Homogeneous and heterogeneous",
        choice4: "Solution and compound",
        answer: "Homogeneous and heterogeneous"
    },
    {
        question: "The word Kinetic stands for ____",
        choice1: "Movement",
        choice2: "Growth",
        choice3: "Locomotion",
        choice4: "Motion",
        answer: "Motion"
    },
    {
        question: "___ conceptualized that if an attempt is made to continually subdivide matter, a smallest one will be attained that can exist on its own",
        choice1: "Greeks",
        choice2: "Romans",
        choice3: "Italians",
        choice4: "French",
        answer: "Greeks"
    },
    {
        question: "Kinetics theory states that ____",
        choice1: "Matter is anything that occupies space",
        choice2: "The behavior of matter can be explained by understanding its states or motional behavior",
        choice3: "Particles have no sense of history between collision",
        choice4: "Motion is random",
        answer: "The behavior of matter can be explained by understanding its states or motional behavior"
    },
    {
        question: "The smallest division of a matter is _",
        choice1: "Molecule",
        choice2: "Atom",
        choice3: "Particles of liquid",
        choice4: "Entity",
        answer: "Atom"
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
