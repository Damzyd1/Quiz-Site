window.addEventListener("popstate", function(event){
  history.pushState(null, "", window.location.href);
});

document.addEventListener("keydown", e => {
  if((e.ctrlKey || e.metaKey) &&  e.key.toLowerCase() === 'r'){
    e.preventDefault();
  }
});

const topic = "GNS 311: Powered by DamzyNextGen & Giwa";
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
        question: "____is the cycle of process aimed at destroying the vegetative forms of microbes at a high temperature between 70-100°C followed by a cooling to 37°C by allowing the resistant spores to germinate and finally reheating at a high temperature to destroy the germinated spores.",
        choice1: "Sterilization",
        choice2: "Pasteurization",
        choice3: "Tyndallization",
        choice4: "Refrigeration",
        answer: "Tyndallization"
    },
    {
        question: "What is the motional behavior of particles of liquid?",
        choice1: "Vibrate and rotate about a mean position but can also easily slide over each other",
        choice2: "Only vibrate and rotate about a mean position",
        choice3: "Move randomly and are translated from one place to another",
        answer: 1
    },
    {
        question: "What is the motional behavior of particles of solid?",
        choice1: "Vibrate and rotate about a mean position but can also easily slide over each other",
        choice2: "Only vibrate and rotate about a mean position",
        choice3: "Move randomly and are translated from one place to another",
        answer: 2
    },
    {
        question: "What is the motional behavior of particles of gas?",
        choice1: "Vibrate and rotate about a mean position but can also easily slide over each other",
        choice2: "Only vibrate and rotate about a mean position",
        choice3: "Move randomly and are translated from one place to another",
        answer: 3
    },
    {
        question: "The following are the fundamental assumptions made and employed in building up Kinetic theory except:",
        choice1: "Motion is random",
        choice2: "Particles have no sense of history between collision",
        choice3: "Particle dimension is much less than the distance between collisions",
        choice4: "Kinetic is a theory of statements of facts",
        answer: 4
    },
    {
        question: "Which of the following is NOT a state of matter?",
        choice1: "Solid",
        choice2: "Liquid",
        choice3: "Energy",
        choice4: "Gas",
        answer: 3
    },
    {
        question: "Which state of matter has a definite shape and volume?",
        choice1: "Solid",
        choice2: "Liquid",
        choice3: "Gas",
        choice4: "Plasma",
        answer: 1
    },
    {
        question: "What happens to gas particles when the temperature increases?",
        choice1: "They move slower",
        choice2: "They move faster",
        choice3: "They stop moving",
        choice4: "They remain constant",
        answer: 2
    },
    {
        question: "Which process converts a solid directly into a gas?",
        choice1: "Melting",
        choice2: "Sublimation",
        choice3: "Condensation",
        choice4: "Vaporization",
        answer: 2
    },
    {
        question: "The change from gas to liquid is called:",
        choice1: "Evaporation",
        choice2: "Condensation",
        choice3: "Freezing",
        choice4: "Sublimation",
        answer: 2
    },
    {
        question: "What determines the state of matter of a substance?",
        choice1: "The arrangement and motion of particles",
        choice2: "The color of the substance",
        choice3: "The taste of the substance",
        choice4: "The weight of the particles",
        answer: 1
    },
    {
        question: "What state of matter has neither a definite shape nor a definite volume?",
        choice1: "Solid",
        choice2: "Liquid",
        choice3: "Gas",
        choice4: "Plasma",
        answer: 3
    },
    {
        question: "Plasma is often referred to as the ____ state of matter.",
        choice1: "Fourth",
        choice2: "Fifth",
        choice3: "Third",
        choice4: "First",
        answer: 1
    },
    {
        question: "Which of the following is an example of plasma?",
        choice1: "Ice",
        choice2: "Water",
        choice3: "Lightning",
        choice4: "Air",
        answer: 3
    },
    {
        question: "Which state of matter can be compressed easily?",
        choice1: "Solid",
        choice2: "Liquid",
        choice3: "Gas",
        answer: 3
    },
    {
        question: "What is the key characteristic of liquids?",
        choice1: "Fixed volume, takes the shape of its container",
        choice2: "Fixed shape and volume",
        choice3: "No fixed volume, takes the shape of its container",
        answer: 1
    },
    {
        question: "Which state of matter has the strongest intermolecular forces?",
        choice1: "Solid",
        choice2: "Liquid",
        choice3: "Gas",
        choice4: "Plasma",
        answer: 1
    },
    {
        question: "At what temperature does water boil at standard atmospheric pressure?",
        choice1: "0°C",
        choice2: "50°C",
        choice3: "100°C",
        choice4: "200°C",
        answer: 3
    },
    {
        question: "What happens to a gas if the pressure increases at constant temperature?",
        choice1: "Its volume decreases",
        choice2: "Its volume increases",
        choice3: "Its temperature decreases",
        answer: 1
    },
    {
        question: "What happens to a liquid when it freezes?",
        choice1: "Its particles stop moving",
        choice2: "Its particles vibrate in place",
        choice3: "Its particles spread out",
        choice4: "Its particles move faster",
        answer: 2
    },
    {
        question: "How many states of matter are there?",
        choice1: "4",
        choice2: "3",
        choice3: "5",
        choice4: "1",
        answer: 2
    },
    {
        question: "What is the motional behavior of particles of liquid?",
        choice1: "Vibrate and rotate about a mean position but can also easily slide over each other",
        choice2: "Only vibrate and rotate about a mean position",
        choice3: "Move randomly and are translated from one place to another",
        answer: 1
    },
    {
        question: "What is the motional behavior of particles of solid?",
        choice1: "Vibrate and rotate about a mean position but can also easily slide over each other",
        choice2: "Only vibrate and rotate about a mean position",
        choice3: "Move randomly and are translated from one place to another",
        answer: 2
    },
    {
        question: "What is the motional behavior of particles of gas?",
        choice1: "Vibrate and rotate about a mean position but can also easily slide over each other",
        choice2: "Only vibrate and rotate about a mean position",
        choice3: "Move randomly and are translated from one place to another",
        answer: 3
    },
    {
        question: "The following are the fundamental assumptions made and employed in building up Kinetic theory except:",
        choice1: "Motion is random",
        choice2: "Particles have no sense of history between collision",
        choice3: "Particle dimension is much less than the distance between collisions",
        choice4: "Kinetic is a theory of statements of facts",
        answer: 4
    },
    {
        question: "Which of the following is NOT a state of matter?",
        choice1: "Solid",
        choice2: "Liquid",
        choice3: "Energy",
        choice4: "Gas",
        answer: 3
    },
    {
        question: "Which state of matter has a definite shape and volume?",
        choice1: "Solid",
        choice2: "Liquid",
        choice3: "Gas",
        choice4: "Plasma",
        answer: 1
    },
    {
        question: "What happens to gas particles when the temperature increases?",
        choice1: "They move slower",
        choice2: "They move faster",
        choice3: "They stop moving",
        choice4: "They remain constant",
        answer: 2
    },
    {
        question: "Which process converts a solid directly into a gas?",
        choice1: "Melting",
        choice2: "Sublimation",
        choice3: "Condensation",
        choice4: "Vaporization",
        answer: 2
    },
    {
        question: "The change from gas to liquid is called:",
        choice1: "Evaporation",
        choice2: "Condensation",
        choice3: "Freezing",
        choice4: "Sublimation",
        answer: 2
    },
    {
        question: "What determines the state of matter of a substance?",
        choice1: "The arrangement and motion of particles",
        choice2: "The color of the substance",
        choice3: "The taste of the substance",
        choice4: "The weight of the particles",
        answer: 1
    },
    {
        question: "What state of matter has neither a definite shape nor a definite volume?",
        choice1: "Solid",
        choice2: "Liquid",
        choice3: "Gas",
        choice4: "Plasma",
        answer: 3
    },
    {
        question: "Plasma is often referred to as the ____ state of matter.",
        choice1: "Fourth",
        choice2: "Fifth",
        choice3: "Third",
        choice4: "First",
        answer: 1
    },
    {
        question: "Which of the following is an example of plasma?",
        choice1: "Ice",
        choice2: "Water",
        choice3: "Lightning",
        choice4: "Air",
        answer: 3
    },
    {
        question: "Which state of matter can be compressed easily?",
        choice1: "Solid",
        choice2: "Liquid",
        choice3: "Gas",
        answer: 3
    },
    {
        question: "What is the key characteristic of liquids?",
        choice1: "Fixed volume, takes the shape of its container",
        choice2: "Fixed shape and volume",
        choice3: "No fixed volume, takes the shape of its container",
        answer: 1
    },
    {
        question: "Which state of matter has the strongest intermolecular forces?",
        choice1: "Solid",
        choice2: "Liquid",
        choice3: "Gas",
        choice4: "Plasma",
        answer: 1
    },
    {
        question: "Preservation of controlled environment involves two method which are",
        choice1: "Controlled Atmospheric Storage (CAS) And Modified Atmospheric Storage (MAS)",
        choice2: "Metamorphic atmosphere storage (MAS) and Conducive Atmospheric Storage (CAS)",
        choice3: "Conducting Atmospheric Storage (CAS) and Modified Atmospheric Storage (MAS)",
        answer: "Controlled Atmospheric Storage (CAS) And Modified Atmospheric Storage (MAS)"
    },
    {
        question: "What happens to a gas if the pressure increases at constant temperature?",
        choice1: "Its volume decreases",
        choice2: "Its volume increases",
        choice3: "Its temperature decreases",
        answer: 1
    },
    {
        question: "The troposphere contains how many percent of the atmosphere’s mass?",
        choice1: "25%",
        choice2: "85%",
        choice3: "65%",
        choice4: "75%",
        answer: 4
    },
    {
        question: "Which layer of the atmosphere is closest to the Earth’s surface?",
        choice1: "Stratosphere",
        choice2: "Troposphere",
        choice3: "Thermosphere",
        choice4: "Exosphere",
        answer: 2
    },
    {
        question: "Which layer of the atmosphere lies directly above the troposphere and is 35km deep?",
        choice1: "Stratosphere",
        choice2: "Mesosphere",
        choice3: "Exosphere",
        choice4: "Thermosphere",
        answer: 1
    },
    {
        question: "Example of primary pollutants include the following except:",
        choice1: "CO",
        choice2: "NO",
        choice3: "HC",
        choice4: "AR",
        answer: 4
    },
    {
        question: "Examples of secondary pollutants include the following except:",
        choice1: "Peroxyacetyl nitrate (PAN)",
        choice2: "Hydrogen peroxide",
        choice3: "Carbonara",
        choice4: "Ozone",
        answer: 3
    },
    {
        question: "Pollutants are classified according to:",
        choice1: "Chemical reactions and state of matter",
        choice2: "Chemical composition and state of matter",
        choice3: "Chemical change and situation of matter",
        choice4: "Chemical process and state of matter",
        answer: 2
    },
    {
        question: "Air pollution is made up of __ components.",
        choice1: "4",
        choice2: "5",
        choice3: "3",
        choice4: "6",
        answer: 3
    },
    {
        question: "The sources of pollutants are the following except:",
        choice1: "Receptor",
        choice2: "Chemical composition",
        choice3: "Transporting medium",
        choice4: "Structural facility",
        answer: 2
    },
    {
        question: "The chemical and photochemical reactions taking place in the atmosphere mostly depend upon:",
        choice1: "Temperature, humidity, reaction and intensity of sunlight",
        choice2: "Temperature, humidity, composition and intensity of sunlight",
        choice3: "Temperature, pollution, composition and intensity of sunlight",
        choice4: "Temperature, pollution, composition and humidity",
        answer: 2
    },
    {
        question: "How do photochemical reactions take place in the atmosphere?",
        choice1: "By the absorption of solar radiation in the UV region",
        choice2: "By the absorption of water during evaporation",
        choice3: "By the absorption of sunlight during photosynthesis",
        answer: 1
    },
    {
        question: "Processes of controlled Reduction in moisture content include",
        choice1: "Refrigeration, canning, dehydration, freezing, pasteurization, blanching",
        choice2: "Drying , refrigeration, pasteurization, irradiation, canning, controlled environment, sterilization",
        choice3: "Drying, dehydration, evaporation, smoking, pickling in vinegar, chemical preservatives, irradiation, canning, fermentation, controlled environment sugaring and salting",
        answer: 3
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
