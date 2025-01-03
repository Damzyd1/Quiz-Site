window.addEventListener("popstate", function(event){
  history.pushState(null, "", window.location.href);
});

document.addEventListener("keydown", e => {
  if((e.ctrlKey || e.metaKey) &&  e.key.toLowerCase() === 'r'){
    e.preventDefault();
  }
});

const topic = "GNS 311: <br> History and Philosophy of Science";
const topicId = document.getElementById("topic");
topicId.innerHTML = topic;
setTimeout(disappear, 10000);
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
        question: "Anything that occupies space, possesses mass of its own, offers resistance to change of inertia and may be felt by any of our sensory organs is ____.",
        choice1: "Atom",
        choice2: "Molecules",
        choice3: "Matter",
        choice4: "Kinetic",
        answer: 3
    },
    {
        question: "Matter exists as a ____ and ____",
        choice1: "Abiotic and Biotic entity",
        choice2: "Living and non-living entity",
        choice3: "Living and non-living things",
        choice4: "Biotic and abiotic things",
        answer: 2
    },
    {
        question: "How does Growth in non-living matter come?",
        choice1: "If there is an addition of the same or different matter by some processes to the matter",
        choice2: "Properties of respiration, growth, movement, metabolism and reproduction",
        choice3: "Eating and excretion",
        choice4: "None of the above",
        answer: 1
    },
    {
        question: "Living matter has the following properties except",
        choice1: "Reproduction",
        choice2: "Metabolism",
        choice3: "Processes",
        choice4: "Respiration",
        answer: 3
    },
    {
        question: "Matter is constituted means?____",
        choice1: "Matter is a whole",
        choice2: "Matter is made up of something else",
        choice3: "Matter is dependent",
        choice4: "Matter is independent",
        answer: 2
    },
    {
        question: "Matter by its composition can be divided into?",
        choice1: "Mixtures and change",
        choice2: "Atom and molecules",
        choice3: "Pure substances and Molecules",
        choice4: "Pure substances and Mixtures",
        answer: 4
    },
    {
        question: "How many states can matter exist in?",
        choice1: "5",
        choice2: "3",
        choice3: "4",
        choice4: "2",
        answer: 2
    },
    {
        question: "What are the states matter exists in?",
        choice1: "Solid, liquid, plasma",
        choice2: "Solid, Sulphur",
        choice3: "Solid, liquid",
        choice4: "Liquid and gas",
        answer: 1
    },
    {
        question: "___ is a statement of facts for understanding, explaining, and making predictions about an observable phenomenon?",
        choice1: "Scientific law",
        choice2: "Statement",
        choice3: "Theory",
        choice4: "Hypothesis",
        answer: 3
    },
    {
        question: "A statement of facts that has been subjected to critical analysis, experimentation and found to correctly explain an observable phenomenon under conditions stated is?",
        choice1: "Theory",
        choice2: "Scientific law",
        choice3: "Elements",
        choice4: "Statement",
        answer: 2
    },
    {
        question: "___ elements exist in nature and are arranged into ___ periods of the periodic table.",
        choice1: "218 elements, 18 periods",
        choice2: "318 elements, 28 periods",
        choice3: "118 elements, 8 periods",
        choice4: "118 elements, 18 periods",
        answer: 4
    },
    {
        question: "An element has how many types of atom?",
        choice1: "One",
        choice2: "Three",
        choice3: "Four",
        choice4: "Eight",
        answer: 1
    },
    {
        question: "A compound can only be separated by ___",
        choice1: "Physical therapy",
        choice2: "Physical process",
        choice3: "Chemical process",
        choice4: "Chemical procedure",
        answer: 3
    },
    {
        question: "Where an element is made up of one atom, a compound is made up of more than one type of atom bonded together, a mixture is made up of _____",
        choice1: "One element and one atom",
        choice2: "More than one element or compound in a weak bond",
        choice3: "More than one type of atom or compound in a weak bond",
        choice4: "More than one type of element and atom in a weak bond",
        answer: 2
    },
    {
        question: "What does not require a chemical process to break but requires only a simple physical procedure?",
        choice1: "Mixture",
        choice2: "Compound",
        choice3: "Elements",
        choice4: "Atom",
        answer: 1
    },
    {
        question: "Mixture can be either __& __",
        choice1: "Hydrogen and oxygen",
        choice2: "Element and compound",
        choice3: "Homogeneous and heterogeneous",
        choice4: "Solution and compound",
        answer: 3
    },
    {
        question: "The word Kinetic stands for ____",
        choice1: "Movement",
        choice2: "Growth",
        choice3: "Locomotion",
        choice4: "Motion",
        answer: 4
    },
    {
        question: "___ conceptualized that if an attempt is made to continually subdivide matter, a smallest one will be attained that can exist on its own",
        choice1: "Greeks",
        choice2: "Romans",
        choice3: "Italians",
        choice4: "French",
        answer: 1
    },
    {
        question: "Kinetics theory states that ____",
        choice1: "Matter is anything that occupies space",
        choice2: "The behavior of matter can be explained by understanding its states or motional behavior",
        choice3: "Particles have no sense of history between collision",
        choice4: "Motion is random",
        answer: 2
    },
    {
        question: "The smallest division of a matter is _",
        choice1: "Molecule",
        choice2: "Atom",
        choice3: "Particles of liquid",
        choice4: "Entity",
        answer: 2
    },
    {
        question: "______ phenomenon keeps the earth warm enough to sustain life on earth",
        choice1: "The green gases effect",
        choice2: "The greenhouse effect",
        choice3: "The green bomb effect",
        choice4: "Global warming effect",
        answer: 2
    },
    {
        question: "The heat energy released by fire is propagated by",
        choice1: "Conductor, electric, conversion",
        choice2: "Conduction, convection and radiation",
        choice3: "Radiation, conducive, propagation",
        choice4: "Global warming, conduction, elastic",
        answer: 2
    },
    {
        question: "____ is everything around us",
        choice1: "Atmosphere",
        choice2: "Environment",
        choice3: "Chemical",
        choice4: "Air",
        answer: 2
    },
    {
        question: "There are ____ Environmental realms or segments",
        choice1: "4",
        choice2: "5",
        choice3: "3",
        choice4: "2",
        answer: 1
    },
    {
        question: "The Environmental segments are",
        choice1: "Lithosphere, antrosphere, sociosphere",
        choice2: "Lithosphere, hydrosphere, biosphere, atmosphere",
        choice3: "Osyshere, Oxysphere lithosphere, atmosphere",
        choice4: "Hydrosphere, lithosphere, bargosphere, nitrosphere",
        answer: 2
    },
    {
        question: "The lithosphere consists of",
        choice1: "Upper area and crest",
        choice2: "Lower core and crust",
        choice3: "Upper mantle and sand",
        choice4: "Upper mantle and crust",
        answer: 4
    },
    {
        question: "____ is the earth's outer skin that is accessible to humans",
        choice1: "Upper mantle",
        choice2: "Core",
        choice3: "Crust",
        choice4: "Mantle",
        answer: 3
    },
    {
        question: "What is the major setback for global water supply?",
        choice1: "Lack of accessibility to water",
        choice2: "Non-uniform distribution",
        choice3: "Non-availability of fresh water",
        choice4: "Lack of natural resources",
        answer: 2
    },
    {
        question: "The biosphere is divided into smaller units called",
        choice1: "Atmosphere",
        choice2: "Lithium",
        choice3: "Ecosystem",
        choice4: "Biosystem",
        answer: 3
    },
    {
        question: "The atmosphere is comprised of how many layers?",
        choice1: "4",
        choice2: "3",
        choice3: "5",
        choice4: "2",
        answer: 1
    },
    {
        question: "The region at about 500km of the earth's surface is known as",
        choice1: "Ecosphere",
        choice2: "Ecosystem",
        choice3: "Exosphere",
        choice4: "Atmosphere",
        answer: 3
    },
    {
        question: "The atmosphere layers include all except",
        choice1: "Lithosphere",
        choice2: "Troposphere",
        choice3: "Stratosphere",
        choice4: "Mesosphere",
        answer: 1
    },
    {
        question: "What acts as a source of Carbon dioxide for plant photosynthesis and oxygen for respiration?",
        choice1: "Biosphere",
        choice2: "Atmosphere",
        choice3: "Lithosphere",
        choice4: "Mesosphere",
        answer: 2
    },
    {
        question: "What does the earth atmosphere look like?",
        choice1: "Round",
        choice2: "A thick blue veil",
        choice3: "A thin rope",
        choice4: "A thin blue veil",
        answer: 4
    },
    {
        question: "According to Stern, 1997, Earth has a mass of about ____ metric tons",
        choice1: "5.13×10",
        choice2: "5.15×10",
        choice3: "5.12×10",
        choice4: "5.11×10",
        answer: 2
    },
    {
        question: "The three main gaseous elements that account for about 99.9% of the earth are",
        choice1: "Nitrogen, Oxygen and Argon",
        choice2: "Nitrogen, oxygen and lithium",
        choice3: "Sodium, Carbon and Argon",
        choice4: "Sulphur, Nitrogen and Oxygen",
        answer: 1
    },
    {
        question: "According to Stanley, 1995, the concentration by volume of the three main gaseous elements are",
        choice1: "75.09%, 20.95%, 0.95%",
        choice2: "78.09%, 22.95%, 0.93%",
        choice3: "78.09%, 20.95%, 0.93%",
        choice4: "75.09%, 22.95%, 0.95%",
        answer: 3
    },
    {
        question: "___ is defined as the number of molecules of the trace gas divided by the total number of molecules present in the volumes sampled",
        choice1: "Molecule",
        choice2: "Ratio",
        choice3: "Proportion",
        choice4: "Probability",
        answer: 2
    },
    {
        question: "Ppmv stands for",
        choice1: "Per million by volume",
        choice2: "Percent of minute by volume",
        choice3: "Probability of million by volts",
        choice4: "Probably millions of voltage",
        answer: 1
    },
    {
        question: "Ppbv stands for",
        choice1: "Probably billions of Voltage",
        choice2: "Percent of billions by volume",
        choice3: "Per billions by volume",
        choice4: "Probability of billions by volts",
        answer: 3
    },
    {
        question: "Food according to Lapedes 1997 is",
        choice1: "The material that enabled man to grow and reproduce himself",
        choice2: "The material that is necessary for health, growth, and normal function of living organisms",
        choice3: "As anything that eliminates hunger",
        answer: 2
    },
    {
        question: "The important aspect of food security issues to be considered according to Honfoga & Van den Boom, 2003 include the following except",
        choice1: "Availability of foodstuff",
        choice2: "The quality of the diet",
        choice3: "Ability to satisfy hunger",
        choice4: "The stability of supplies over time and space",
        choice5: "Access to food produced",
        answer: 3
    },
    {
        question: "According to the passage, how much crude protein per day is recommended for an individual to consume?",
        choice1: "65-86g",
        choice2: "68-56g",
        choice3: "45-86g",
        choice4: "59-86g",
        answer: 1
    },
    {
        question: "Based on Wiebe, 2003; FAO, 2005, more than how many people are food insecure?",
        choice1: "Seven hundred million people",
        choice2: "Six hundred million people",
        choice3: "Eight hundred million people",
        choice4: "Four hundred million people",
        answer: 3
    },
    {
        question: "The prevalence of human malnutrition remains high in",
        choice1: "Sub-Saharan Africa and South Asia",
        choice2: "West Africa and Asia",
        choice3: "South Africa and South Asia",
        answer: 1
    },
    {
        question: "According to the passage, ___ has been identified as the principal cause of increasing and accelerated migration from rural to urban areas in developing countries.",
        choice1: "Air pollution",
        choice2: "Food insecurity",
        choice3: "Nuclear changes",
        choice4: "Nutritional defects",
        answer: 2
    },
    {
        question: "The root problem of inadequate access to food is",
        choice1: "Unemployment",
        choice2: "Lack of income",
        choice3: "Poverty",
        choice4: "Inadequate farm produce",
        answer: 3
    },
    {
        question: "Solutions to food insecurity according to Jayne et al., 1994 include the following except",
        choice1: "Non-market distribution of aid",
        choice2: "Given existing market costs",
        choice3: "Reducing the cost of food delivered through markets by fostering technical and institutional innovations in farm-level production and the marketing system",
        choice4: "Enhancing the means to acquire food",
        answer: 4
    },
    {
        question: "On the basis of spoilage, food is divided into",
        choice1: "4 categories",
        choice2: "3 categories",
        choice3: "5 categories",
        choice4: "2 categories",
        answer: 2
    },
    {
        question: "____ is the act of protecting food from deterioration and decay so that it will be available for future consumption.",
        choice1: "Food consumption",
        choice2: "Food security",
        choice3: "Food preservation",
        choice4: "Food storage",
        answer: 3
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
