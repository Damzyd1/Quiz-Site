window.addEventListener("popstate", function(event){
  history.pushState(null, "", window.location.href);
});

document.addEventListener("keydown", e => {
  if((e.ctrlKey || e.metaKey) &&  e.key.toLowerCase() === 'r'){
    e.preventDefault();
  }
});

const topic = "GNS 311 Exam Simulation";
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
        question: "Chemical preservatives are used in food preservation primarily to:",
        choice1: "Enhance food color",
        choice2: "Increase food moisture",
        choice3: "Inhibit microbial growth",
        choice4: "Improve food texture",
        answer: 3
    },
    {
        question: "Which method of food preservation involves the use of salt or sugar to remove water from food?",
        choice1: "Canning",
        choice2: "Freezing",
        choice3: "Dehydration",
        choice4: "Refrigeration",
        answer: 3
    },
    {
        question: "What is the temperature range typically used for water blanching in food preservation?",
        choice1: "50-60°C",
        choice2: "80-90°C",
        choice3: "100-110°C",
        choice4: "120-130°C",
        answer: 2
    },
    {
        question: "What is the primary aim of controlled reduction in moisture content in food preservation?",
        choice1: "To increase food moisture",
        choice2: "To enhance food flavor",
        choice3: "To decrease microbial growth",
        choice4: "To improve food texture",
        answer: 3
    },
    {
        question: "What is the purpose of establishing wild nurseries for medicinal plants?",
        choice1: "To increase habitat destruction",
        choice2: "To encourage invasive species",
        choice3: "To facilitate in-situ conservation",
        choice4: "To promote industrialization",
        answer: 3
    },
    {
        question: "Which of the following is not a threat faced by medicinal plants?",
        choice1: "Increased spread of diseases",
        choice2: "Industrialization",
        choice3: "Decreased demand for herbal medicine",
        choice4: "Over-exploitation",
        answer: 3
    },
    {
        question: "What is the primary focus of the module 'Philosophical Problems and Scientific Explanations'?",
        choice1: "Exploring historical events",
        choice2: "Understanding philosophical questions in science",
        choice3: "Studying literary works",
        choice4: "Analyzing political theories",
        answer: 2
    },
    {
        question: "Which of the following is not considered a major reservoir of microbes?",
        choice1: "Water",
        choice2: "Soil",
        choice3: "Atmosphere",
        choice4: "Concrete",
        answer: 4,
        rationale: "Concrete is not a natural environment for microbial growth, unlike water, soil, and the atmosphere."
    },
    {
        question: "What is the meaning of P value?",
        choice1: "A probability of error in measurement",
        choice2: "A statistical measure that helps determine the significance of results in hypothesis testing",
        choice3: "A percentage of uncertainty in research",
        choice4: "A measure of correlation strength",
        answer: 2,
        rationale: "P value is a statistical measure that helps determine the significance of results in hypothesis testing."
    },
    {
        question: "What happens to the energy of a bullet shot from a gun?",
        choice1: "It remains constant",
        choice2: "It disappears over time",
        choice3: "It transforms primarily into kinetic energy as it moves through the air and upon impact",
        choice4: "It increases continuously",
        answer: 3,
        rationale: "The bullet's energy is converted primarily into kinetic energy as it travels and transfers upon impact."
    },
    {
        question: "What's the Igbo name for tea bush?",
        choice1: "Ocha",
        choice2: "Akwukwo",
        choice3: "Utaba",
        choice4: "Mkpuru mmiri",
        answer: 1,
        rationale: "In Igbo, the name for tea bush is 'Ocha'."
    },
    {
        question: "Pathogens may take advantage of the interaction between blood-sucking parasites and humans in which mode of transmission?",
        choice1: "Inoculation through the skin",
        choice2: "Direct contact transmission",
        choice3: "Respiratory transmission",
        choice4: "Vector-borne transmission",
        answer: 4,
        rationale: "Vector-borne transmission occurs when pathogens are carried by blood-sucking insects like mosquitoes or ticks."
    },
    {
        question: "What term is used to describe alterations in the host's system initiated by microbial activities?",
        choice1: "Pathogenicity",
        choice2: "Virulence",
        choice3: "Resistance",
        choice4: "Immunity",
        answer: 1,
        rationale: "Pathogenicity refers to a microbe’s ability to cause disease by altering the host system."
    },
    {
        question: "Which microbe is mentioned as causing sexually transmitted disease by adhering to the inner lining of the urinogenital tract?",
        choice1: "Neisseria gonorrhea",
        choice2: "Escherichia coli",
        choice3: "Staphylococcus aureus",
        choice4: "Streptococcus pyogenes",
        answer: 1,
        rationale: "Neisseria gonorrhea is the bacteria responsible for gonorrhea, an STD that affects the urinogenital tract."
    },
    {
        question: "Which of the following is not considered a microbe?",
        choice1: "Bacteria",
        choice2: "Fungi",
        choice3: "Algae",
        choice4: "Plant",
        answer: 4,
        rationale: "Plants are multicellular organisms and not classified as microbes, unlike bacteria, fungi, and algae."
    },
    {
        question: "Who coined the term 'microbe'?",
        choice1: "Louis Pasteur",
        choice2: "Robert Koch",
        choice3: "Antonie van Leeuwenhoek",
        choice4: "A.T. Andes",
        answer: 4,
        rationale: "A.T. Andes is credited with coining the term 'microbe'."
    },
    {
        question: "At what age are chicks typically vaccinated against Newcastle disease?",
        choice1: "Day 1",
        choice2: "Day 3",
        choice3: "Day 7",
        choice4: "Day 10",
        answer: 2,
        rationale: "Chicks are usually vaccinated against Newcastle disease on Day 3 for early protection."
    },
    {
        question: "What is the purpose of using anti-stress medication during vaccination in poultry?",
        choice1: "To improve taste",
        choice2: "To reduce vaccination costs",
        choice3: "To minimize stress-related mortality",
        choice4: "To increase egg size",
        answer: 3,
        rationale: "Anti-stress medication helps minimize stress-related mortality in poultry during vaccination."
    },
    {
        question: "When should Gumboro vaccine be administered to poultry?",
        choice1: "Day 3",
        choice2: "Day 10",
        choice3: "Day 15",
        choice4: "Day 24",
        answer: 2,
        rationale: "Gumboro vaccine is typically administered on Day 10 to protect poultry from Infectious Bursal Disease."
    },
    {
        question: "What is the main symptom of coccidiosis in poultry?",
        choice1: "Respiratory distress",
        choice2: "Diarrhea with blood-stained feces",
        choice3: "Neck twisting",
        choice4: "Wattle lesions",
        answer: 2,
        rationale: "Coccidiosis primarily causes diarrhea with blood-stained feces due to intestinal damage."
    },
    {
        question: "How often should poultry houses be cleaned to prevent disease transmission?",
        choice1: "Once a month",
        choice2: "Once a week",
        choice3: "Once every three months",
        choice4: "Once a year",
        answer: 2,
        rationale: "Weekly cleaning helps reduce disease risks and maintain hygiene in poultry houses."
    },
    {
        question: "Which disease is commonly prevented by administering the Lasota vaccine to poultry?",
        choice1: "Fowl pox",
        choice2: "Newcastle disease",
        choice3: "Coccidiosis",
        choice4: "Marek's disease",
        answer: 2,
        rationale: "Lasota vaccine is used to prevent Newcastle disease, a highly contagious viral infection in poultry."
    },
    {
        question: "Which vaccine is typically administered to day-old chicks to prevent Marek's disease?",
        choice1: "Newcastle disease vaccine",
        choice2: "Gumboro vaccine",
        choice3: "Marek's disease vaccine",
        choice4: "Fowl pox vaccine",
        answer: 3,
        rationale: "Day-old chicks receive Marek’s disease vaccine to prevent this viral condition affecting their nervous system."
    },
    {
        question: "What is the primary role of protein-rich ingredients in poultry feed production?",
        choice1: "To provide energy",
        choice2: "To improve taste",
        choice3: "To build muscle and tissue",
        choice4: "To enhance color",
        answer: 3,
        rationale: "Protein is essential for muscle and tissue development in poultry."
    },
    {
        question: "Which feed ingredient group provides mainly energy in poultry diets?",
        choice1: "Protein-rich ingredients",
        choice2: "Cereal and cereal-by-products",
        choice3: "Mineral and vitamin supplements",
        choice4: "Animal protein sources",
        answer: 2,
        rationale: "Cereals and cereal-by-products are the primary sources of energy in poultry diets."
    },
    {
        question: "Which nutrient is responsible for providing the majority of the energy content in poultry feed?",
        choice1: "Protein",
        choice2: "Fat",
        choice3: "Carbohydrates",
        choice4: "Vitamins",
        answer: 3,
        rationale: "Carbohydrates are the main energy-providing nutrient in poultry feed."
    },
    {
        question: "What is the recommended energy level for layers' diets?",
        choice1: "2500-2700 kcal/kg",
        choice2: "2800-2850 kcal/kg",
        choice3: "3000-3200 kcal/kg",
        choice4: "3500-3700 kcal/kg",
        answer: 2,
        rationale: "The optimal energy level for layer diets is 2800-2850 kcal/kg to maintain egg production."
    },
    {
        question: "Which of the following ingredients is NOT typically used for energy in poultry feed?",
        choice1: "Maize",
        choice2: "Wheat",
        choice3: "Soybean",
        choice4: "Palm oil",
        answer: 3,
        rationale: "Soybean is primarily a protein source rather than an energy ingredient in poultry feed."
    },
    {
        question: "Phytochemicals can be found in which of the following?",
        choice1: "Animals",
        choice2: "Plants",
        choice3: "Oceans",
        choice4: "Fungi",
        answer: 2,
        rationale: "Phytochemicals are naturally occurring compounds found in plants that contribute to their color, taste, and resistance to diseases."
    },
    {
        question: "Traditional herbs can also be used for surgical dressings.",
        choice1: "True",
        choice2: "False",
        answer: 1,
        rationale: "Certain traditional herbs have antiseptic and wound-healing properties, making them suitable for surgical dressings."
    },
    {
        question: "Carica papaya can be used to treat:",
        choice1: "Erectile dysfunction",
        choice2: "Mild convulsion",
        choice3: "Headache",
        choice4: "Coughs",
        answer: 2,
        rationale: "Carica papaya contains bioactive compounds that have been used in traditional medicine to treat mild convulsions."
    },
    {
        question: "The word 'Kinetic' stands for:",
        choice1: "Metabolism",
        choice2: "Respiration",
        choice3: "Motion",
        choice4: "Growth",
        answer: 3,
        rationale: "'Kinetic' is derived from the Greek word for motion, describing movement-related energy."
    },
    {
        question: "Which of these is the correct order in the scientific method of developing the concept of matter?",
        choice1: "Hypothesis, Law, and Theory",
        choice2: "Theory, Hypothesis, and Law",
        choice3: "Theory, Hypothesis, and Law",
        choice4: "Hypothesis, Theory, and Law",
        answer: 4,
        rationale: "Scientific inquiry begins with a hypothesis, which is tested and refined into a theory, eventually leading to a scientific law."
    },
    {
        question: "Which of the following diseases is NOT caused by insect bites?",
        choice1: "Malaria fever",
        choice2: "Dengue fever",
        choice3: "Trypanosomiasis",
        choice4: "Polio",
        answer: 4,
        rationale: "Polio is a viral disease spread through contaminated water and food, not through insect bites."
    },
    {
        question: "Which of the following actions will NOT change the state of matter?",
        choice1: "Temperature",
        choice2: "Heat",
        choice3: "Crushing a crystal",
        choice4: "Pressure",
        answer: 3,
        rationale: "Crushing a crystal alters its shape but does not change its state (solid, liquid, or gas)."
    },
    {
        question: "Which of the following is NOT a viral disease?",
        choice1: "Smallpox",
        choice2: "Dysentery",
        choice3: "Polio",
        choice4: "Yellow fever",
        answer: 2,
        rationale: "Dysentery is caused by bacteria or parasites, whereas smallpox, polio, and yellow fever are viral diseases."
    },
    {
        question: "Which of the three states of matter has both definite volume and definite shape?",
        choice1: "Solid",
        choice2: "Plasma",
        choice3: "Liquid",
        choice4: "Gas",
        answer: 1,
        rationale: "Solids have both a definite shape and volume due to tightly packed particles."
    },
    {
        question: "Which is NOT an example of renewable energy?",
        choice1: "Solar panels",
        choice2: "Wind turbines",
        choice3: "Natural Gas",
        choice4: "Geothermal",
        answer: 3,
        rationale: "Natural gas is a fossil fuel and is non-renewable, unlike solar, wind, and geothermal energy sources."
    },
    {
        question: "Which disease is caused by the bacterium Mycobacterium tuberculosis?",
        choice1: "Cholera",
        choice2: "Tuberculosis",
        choice3: "Syphilis",
        choice4: "Leprosy",
        answer: 2,
        rationale: "Mycobacterium tuberculosis is the causative agent of tuberculosis, primarily affecting the lungs."
    },
    {
        question: "What part of the body does leprosy primarily affect?",
        choice1: "Skin",
        choice2: "Lungs",
        choice3: "Reproductive organs",
        choice4: "Nervous system",
        answer: 1,
        rationale: "Leprosy mainly affects the skin, leading to lesions and nerve damage."
    },
    {
        question: "What are the clinical manifestations of tetanus?",
        choice1: "Mental impairment and skin blisters",
        choice2: "Chest pain and high fever",
        choice3: "Lockjaw spasm",
        choice4: "Difficulty in urination and sterility",
        answer: 3,
        rationale: "Tetanus causes muscle stiffness and lockjaw due to neurotoxin production."
    },
    {
        question: "What are the primary concerns of the philosophy of psychology?",
        choice1: "Ethics and metaphysics",
        choice2: "Epistemology and ethics",
        choice3: "Metaphysics and ontology",
        choice4: "Ontology and epistemology",
        answer: 4,
        rationale: "Ontology and epistemology are central to understanding the nature and knowledge of psychological phenomena."
    },
    {
        question: "What distinguishes the Deductive Nomological (D-N) Model from the Inductive Statistical (IS) Model of scientific explanation?",
        choice1: "The D-N model involves statistical analysis, while the IS model involves deductive reasoning.",
        choice2: "The D-N model involves inductive reasoning, while the IS model involves deductive reasoning.",
        choice3: "The D-N model focuses on specific instances, while the IS model focuses on general laws.",
        choice4: "The D-N model focuses on general laws, while the IS model focuses on specific instances.",
        answer: 4,
        rationale: "The D-N model emphasizes general laws, while the IS model explains specific instances through statistical reasoning."
    },
    {
        question: "What is the etymological origin of the word 'science'?",
        choice1: "Greek",
        choice2: "Latin",
        choice3: "Sanskrit",
        choice4: "Arabic",
        answer: 2,
        rationale: "The word 'science' comes from the Latin word 'scientia,' meaning knowledge."
    },
    {
        question: "How does the concept of 'philosophy of science' differ from the practice of science itself?",
        choice1: "Philosophy of science focuses on empirical observation, while science is concerned with abstract reasoning.",
        choice2: "Philosophy of science deals with the assumptions, foundations, methods, and implications of science, while science is primarily concerned with empirical investigation and experimentation.",
        choice3: "Philosophy of science relies on mathematical models, while science relies on qualitative analysis.",
        choice4: "Philosophy of science is concerned with practical applications, while science is concerned with theoretical frameworks.",
        answer: 2,
        rationale: "Philosophy of science examines the foundational principles and methodology behind scientific inquiry."
    },
    {
        question: "What does the term 'scientia' mean in Latin, from which the word 'science' is derived?",
        choice1: "Art",
        choice2: "Knowledge",
        choice3: "Wisdom",
        choice4: "Faith",
        answer: 2,
        rationale: "'Scientia' translates to 'knowledge' in Latin, forming the root of the modern term 'science.'"
    },
    {
        question: "Which of the following statements best describes the relationship between philosophy and science?",
        choice1: "Science is a branch of philosophy, focusing specifically on the study of natural phenomena.",
        choice2: "Philosophy and science are entirely separate disciplines with no overlap in their methodologies or objectives.",
        choice3: "Science provides empirical evidence to support philosophical claims, thereby validating philosophical theories.",
        choice4: "Philosophy is the foundation of science, providing the principles upon which scientific inquiry is based.",
        answer: 4,
        rationale: "Philosophy lays the groundwork for scientific inquiry by establishing foundational principles and methodologies."
    },
    {
        question: "Which of the following is NOT a characteristic of living matter?",
        choice1: "Respiration",
        choice2: "Reproduction",
        choice3: "Metabolism",
        choice4: "Magnetism",
        answer: 4,
        rationale: "Living organisms exhibit respiration, reproduction, and metabolism, but magnetism is not a defining characteristic."
    },
    {
        question: "How many kinds of matter exist in the world according to the module?",
        choice1: "One",
        choice2: "Two",
        choice3: "Three",
        choice4: "Four",
        answer: 2,
        rationale: "The module classifies matter into two primary kinds, based on fundamental properties."
    },
    {
        question: "Which disease is caused by the bacterium Neisseria gonorrhoeae?",
        choice1: "Cholera",
        choice2: "Gonorrhea",
        choice3: "Tuberculosis",
        choice4: "Tetanus",
        answer: 2,
        rationale: "Neisseria gonorrhoeae is the bacterium responsible for gonorrhea, a sexually transmitted infection."
    },
    {
        question: "Which disease is caused by the Plasmodium parasite?",
        choice1: "Malaria",
        choice2: "Gonorrhea",
        choice3: "Tetanus",
        choice4: "Leprosy",
        answer: 1,
        rationale: "Malaria is caused by the Plasmodium parasite, which is transmitted through mosquito bites."
    },
    {
        question: "What is the recommended energy level for layers' diets?",
        choice1: "2500-2700 kcal/kg",
        choice2: "2800-2850 kcal/kg",
        choice3: "3000-3200 kcal/kg",
        choice4: "3500-3700 kcal/kg",
        answer: 2,
        rationale: "The optimal energy level for layers is 2800-2850 kcal/kg to maintain productivity and health."
    },
    {
        question: "Which of the following ingredients is NOT typically used for energy in poultry feed?",
        choice1: "Maize",
        choice2: "Wheat",
        choice3: "Soybean",
        choice4: "Palm oil",
        answer: 3,
        rationale: "Soybean is primarily a protein source, not an energy source, in poultry feed."
    },
    {
        question: "How often should birds be vaccinated with Lasota to prevent Newcastle disease?",
        choice1: "Every week",
        choice2: "Every 4-6 weeks",
        choice3: "Every month",
        choice4: "Every three months",
        answer: 2,
        rationale: "Lasota vaccination is recommended every 4-6 weeks to ensure continued immunity against Newcastle disease."
    },
    {
        question: "Which of the following is a water-soluble vitamin commonly added to poultry feed?",
        choice1: "Vitamin A",
        choice2: "Vitamin D",
        choice3: "Vitamin E",
        choice4: "Vitamin C",
        answer: 4,
        rationale: "Vitamin C is water-soluble, unlike Vitamins A, D, and E, which are fat-soluble."
    },
    {
        question: "Which vaccination is administered on Day 24 of the program?",
        choice1: "Newcastle disease vaccine",
        choice2: "Fowl pox vaccine",
        choice3: "Gumboro vaccine",
        choice4: "Lasota vaccine",
        answer: 4,
        rationale: "Lasota vaccine is typically given on Day 24 to boost immunity against Newcastle disease."
    },
    {
        question: "At what age do birds typically start laying eggs?",
        choice1: "10 weeks",
        choice2: "16 weeks",
        choice3: "18 weeks",
        choice4: "24 weeks",
        answer: 3,
        rationale: "Laying hens usually begin laying eggs around 18 weeks of age."
    },
    {
        question: "What are the two types of management systems mentioned under intensive management?",
        choice1: "Cage and deep litter",
        choice2: "Free range and semi-intensive",
        choice3: "Battery cage and semi-intensive",
        choice4: "Confined and extensive",
        answer: 1,
        rationale: "Under intensive management, poultry is housed in either cage systems or deep litter systems."
    },
    {
        question: "Which management system is characterized by a fixed house with access to a fenced pasture?",
        choice1: "Free range",
        choice2: "Intensive",
        choice3: "Semi-intensive",
        choice4: "Confined",
        answer: 3,
        rationale: "The semi-intensive system allows birds some outdoor access while maintaining shelter."
    },
    {
        question: "Which of the following birds is considered a domesticated poultry species?",
        choice1: "Ostrich",
        choice2: "Goose",
        choice3: "Quail",
        choice4: "Pheasant",
        answer: 3,
        rationale: "Quails are widely farmed as poultry, unlike ostriches and pheasants, which are not commonly domesticated for large-scale poultry farming."
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
