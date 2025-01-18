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
        question: "Which of the following philosophers is most associated with the principle of deterrence in classical theories of punishment?",
        choice1: "Jeremy Bentham",
        choice2: "Jean-Jacques Rousseau",
        choice3: "Immanuel Kant",
        choice4: "Cesare Beccaria",
        answer:"Cesare Beccaria" ,
        rationale: "Cesare Beccaria emphasized deterrence as a core principle in his work *On Crimes and Punishments*, advocating for punishment to prevent crime rather than retribution."
    },
    {
        question: "What distinguishes retributive theories of punishment from utilitarian ones?",
        choice1: "Retributive theories focus on the offender's past actions, while utilitarian theories focus on future societal benefits.",
        choice2: "Retributive theories focus on deterrence, while utilitarian theories focus on retribution.",
        choice3: "Retributive theories prioritize rehabilitation, while utilitarian theories emphasize incapacitation.",
        choice4: "Retributive theories focus on the offender's remorse, while utilitarian theories disregard it.",
        answer: "Retributive theories focus on the offender's past actions, while utilitarian theories focus on future societal benefits.",
        rationale: "Retributive theories are backward-looking, focusing on giving offenders their 'just deserts,' whereas utilitarian theories are forward-looking, prioritizing societal benefits like deterrence and rehabilitation."
    },
    {
        question: "In contemporary punishment theories, restorative justice primarily aims to:",
        choice1: "Inflict proportionate punishment on the offender.",
        choice2: "Rehabilitate the offender through mandatory programs.",
        choice3: "Repair harm caused to victims and communities.",
        choice4: "Reduce the costs of the penal system.",
        answer: "Repair harm caused to victims and communities.",
        rationale: "Restorative justice focuses on repairing the harm caused by crime, emphasizing dialogue between the offender, the victim, and the community."
    },
    {
        question: "Which classical theory of punishment assumes that humans are rational actors who weigh costs and benefits before committing a crime?",
        choice1: "Biological determinism",
        choice2: "Social contract theory",
        choice3: "Rational choice theory",
        choice4: "Psychological determinism",
        answer: "Rational choice theory",
        rationale: "Rational choice theory, rooted in classical criminology, argues that individuals are rational actors who calculate the potential costs and benefits of their actions."
    },
    {
        question: "According to Immanuel Kant, the primary justification for punishment is:",
        choice1: "Deterrence of future crimes.",
        choice2: "Restoration of societal order.",
        choice3: "Moral retribution for wrongdoing.",
        choice4: "Rehabilitation of the offender.",
        answer: "Moral retribution for wrongdoing.",
        rationale: "Kant believed in retributive justice, asserting that punishment is morally justified because it holds offenders accountable for their actions as a matter of justice."
    },
    {
        question: "Which contemporary theory of punishment critiques the penal system for perpetuating systemic inequalities?",
        choice1: "Feminist theory of punishment",
        choice2: "Restorative justice theory",
        choice3: "Marxist theory of punishment",
        choice4: "Positivist criminology",
        answer: "Marxist theory of punishment",
        rationale: "Marxist theories view punishment as a tool for maintaining class-based inequalities and perpetuating state power."
    },
    {
        question: "The principle of proportionality in punishment is most aligned with which theory?",
        choice1: "Retributive theory",
        choice2: "Deterrence theory",
        choice3: "Rehabilitation theory",
        choice4: "Restorative justice",
        answer: "Retributive theory",
        rationale: "The principle of proportionality, where the punishment matches the gravity of the crime, is central to retributive theories of justice."
    },
    {
        question: "In utilitarian theories of punishment, the primary focus is on:",
        choice1: "Moral accountability.",
        choice2: "Future societal benefits.",
        choice3: "Retributive justice.",
        choice4: "Equal application of law.",
        answer: "Future societal benefits.",
        rationale: "Utilitarian theories prioritize outcomes like crime prevention, rehabilitation, and societal safety over retribution or moral accountability."
    },
    {
        question: "Which punishment theory aligns with Cesare Beccaria's view that laws should only punish to the extent necessary to deter crime?",
        choice1: "Retribution",
        choice2: "Restorative justice",
        choice3: "Deterrence",
        choice4: "Rehabilitation",
        answer: "Deterrence",
        rationale: "Beccaria advocated for deterrence as the main justification for punishment, arguing for proportionate and necessary penalties to prevent crime."
    },
    {
        question: "The shift from punitive to rehabilitative approaches in the mid-20th century reflects which broader societal trend?",
        choice1: "An increase in crime rates.",
        choice2: "A focus on offender reintegration.",
        choice3: "Stronger public support for capital punishment.",
        choice4: "Global economic recession.",
        answer: "A focus on offender reintegration.",
        rationale: "The rehabilitative approach emerged alongside a growing emphasis on offender reintegration and addressing root causes of criminal behavior."
    },
    {
        question: "Which of the following challenges the ethical foundation of deterrence-based punishment?",
        choice1: "It may punish the innocent to deter others.",
        choice2: "It ignores the harm caused to victims.",
        choice3: "It disproportionately targets certain offenders.",
        choice4: "It prioritizes societal goals over individual rights.",
        answer: "It may punish the innocent to deter others.",
        rationale: "One criticism of deterrence-based punishment is the possibility of punishing innocent individuals to achieve broader societal deterrence."
    },
    {
        question: "In restorative justice frameworks, offenders are encouraged to:",
        choice1: "Serve mandatory prison sentences.",
        choice2: "Make amends directly to victims.",
        choice3: "Focus solely on personal rehabilitation.",
        choice4: "Avoid formal criminal proceedings.",
        answer: "Make amends directly to victims.",
        rationale: "Restorative justice emphasizes direct offender accountability and making amends to victims, often through mediation and restitution."
    },
    {
        question: "In contemporary punishment theories, the concept of 'incapacitation' is most closely related to:",
        choice1: "Preventing future crimes by deterring others.",
        choice2: "Removing offenders from society to ensure public safety.",
        choice3: "Rehabilitating offenders to reduce recidivism.",
        choice4: "Restoring community harmony.",
        answer: "Removing offenders from society to ensure public safety.",
        rationale: "Incapacitation involves isolating offenders to protect society and prevent further crimes, often through imprisonment or other restrictive measures."
    },
    {
        question: "Which punishment theory is least likely to support life imprisonment for a non-violent crime?",
        choice1: "Retribution",
        choice2: "Deterrence",
        choice3: "Rehabilitation",
        choice4: "Restorative justice",
        answer: "Restorative justice",
        rationale: "Restorative justice seeks alternatives to incarceration, especially for non-violent crimes, focusing on repairing harm and community reintegration."
    },
    {
        question: "The idea that punishment serves to reaffirm societal norms and values aligns with which sociological theory?",
        choice1: "Conflict theory",
        choice2: "Functionalism",
        choice3: "Strain theory",
        choice4: "Labeling theory",
        answer: "Functionalism",
        rationale: "Functionalist theories view punishment as a means of reinforcing social cohesion and reaffirming collective values."
    },
    {
        question: "Which alternative to incarceration focuses on the offender’s ability to maintain employment and family ties while under supervision?",
        choice1: "Electronic monitoring",
        choice2: "Restorative justice programs",
        choice3: "Probation",
        choice4: "Halfway houses",
        answer: 3,
        rationale: "Probation allows offenders to serve their sentences in the community under supervision, enabling them to work and maintain social relationships."
    },
    {
        question: "Restorative justice programs differ from traditional incarceration by prioritizing:",
        choice1: "Punitive measures over reconciliation.",
        choice2: "Deterrence over rehabilitation.",
        choice3: "Community engagement and victim-offender dialogue.",
        choice4: "Mandatory sentencing laws.",
        answer: "Community engagement and victim-offender dialogue.",
        rationale: "Restorative justice programs emphasize repairing harm through dialogue, accountability, and active participation of victims, offenders, and the community."
    },
    {
        question: "Electronic monitoring is most effective when combined with:",
        choice1: "Daily in-person supervision.",
        choice2: "Therapeutic and rehabilitative interventions.",
        choice3: "Strict solitary confinement policies.",
        choice4: "A zero-tolerance policy for violations.",
        answer: "Therapeutic and rehabilitative interventions.",
        rationale: "Electronic monitoring is enhanced when paired with programs that address underlying issues like substance abuse or mental health, supporting long-term rehabilitation."
    },
    {
        question: "Which of the following is a criticism of community service as an alternative to incarceration?",
        choice1: "It fails to address the root causes of criminal behavior.",
        choice2: "It is costlier than traditional incarceration.",
        choice3: "It leads to higher rates of recidivism compared to prison sentences.",
        choice4: "It offers no opportunity for offender accountability.",
        answer: "It fails to address the root causes of criminal behavior.",
        rationale: "Community service is criticized for not addressing deeper issues like addiction or socioeconomic factors that contribute to criminal behavior."
    },
    {
        question: "Which alternative to incarceration is most appropriate for non-violent offenders with substance abuse issues?",
        choice1: "Probation",
        choice2: "Drug courts",
        choice3: "Restorative justice",
        choice4: "Mandatory sentencing",
        answer: 2,
        rationale: "Drug courts provide treatment and close supervision for non-violent offenders with substance abuse issues, aiming to reduce recidivism and support recovery."
    },
    {
        question: "In comparison to incarceration, diversion programs are designed to:",
        choice1: "Shorten prison sentences for non-violent offenders.",
        choice2: "Prevent offenders from entering the criminal justice system altogether.",
        choice3: "Delay punishment until further investigations are completed.",
        choice4: "Provide mandatory counseling sessions in prison.",
        answer:"Delay punishment until further investigations are completed." ,
        rationale: "Diversion programs aim to keep offenders out of the formal criminal justice system by addressing their behavior through education, counseling, or community service."
    },
    {
        question: "Halfway houses are designed primarily to:",
        choice1: "Replace imprisonment for all offenders.",
        choice2: "Provide transitional support for recently released prisoners.",
        choice3: "Monitor offenders through electronic surveillance.",
        choice4: "Offer alternatives to incarceration for violent criminals.",
        answer: "Provide transitional support for recently released prisoners.",
        rationale: "Halfway houses provide transitional living arrangements and support services to help individuals reintegrate into society after incarceration."
    },
    {
        question: "A significant advantage of alternative sentencing over incarceration is its ability to:",
        choice1: "Completely eliminate recidivism.",
        choice2: "Reduce the financial burden on the justice system.",
        choice3: "Ensure uniform sentencing across jurisdictions.",
        choice4: "Deter high-risk offenders from committing crimes.",
        answer: "Reduce the financial burden on the justice system.",
        rationale: "Alternative sentencing often costs less than incarceration, alleviating financial strain on the justice system while still holding offenders accountable."
    },
    {
        question: "Why might restorative justice be considered a more ethical alternative to incarceration?",
        choice1: "It eliminates the need for offender accountability.",
        choice2: "It focuses on punishment rather than reconciliation.",
        choice3: "It gives victims an active role in the justice process.",
        choice4: "It removes all consequences for the offender.",
        answer: "It gives victims an active role in the justice process.",
        rationale: "Restorative justice is ethical because it allows victims to express their needs, offenders to take accountability, and communities to heal collectively."
    },
    {
        question: "Which of the following is a challenge associated with implementing alternatives to incarceration?",
        choice1: "The lack of public trust in the efficacy of such programs.",
        choice2: "Higher costs compared to traditional incarceration.",
        choice3: "Increased risks of violent crime among participants.",
        choice4: "Lower rates of offender accountability.",
        answer: "The lack of public trust in the efficacy of such programs.",
        rationale: "Public skepticism about the effectiveness of alternatives to incarceration can hinder their implementation and widespread adoption."
    },
    {
        question: "Day reporting centers primarily serve offenders by:",
        choice1: "Providing a safe residential environment.",
        choice2: "Allowing them to serve prison sentences remotely.",
        choice3: "Requiring regular check-ins and participation in rehabilitative programs.",
        choice4: "Eliminating the need for court appearances.",
        answer: "Requiring regular check-ins and participation in rehabilitative programs.",
        rationale: "Day reporting centers are non-residential facilities where offenders check in daily and participate in services such as job training, counseling, and substance abuse treatment."
    },
    {
        question: "What is a potential drawback of relying on fines as an alternative to incarceration?",
        choice1: "They are only applicable to repeat offenders.",
        choice2: "They disproportionately affect low-income individuals.",
        choice3: "They fail to generate revenue for the justice system.",
        choice4: "They are rarely used for non-violent crimes.",
        answer: "They disproportionately affect low-income individuals.",
        rationale: "Fines can disproportionately burden low-income offenders, potentially leading to further financial hardship and inequality within the justice system."
    },
    {
        question: "Why are mental health courts considered a viable alternative to incarceration?",
        choice1: "They provide financial incentives for offenders to seek treatment.",
        choice2: "They focus exclusively on violent crimes involving mental illness.",
        choice3: "They address the underlying causes of criminal behavior related to mental health.",
        choice4: "They reduce the need for victim participation in trials.",
        answer: "They address the underlying causes of criminal behavior related to mental health.",
        rationale: "Mental health courts aim to treat the root causes of criminal behavior in individuals with mental illnesses, reducing recidivism and promoting recovery."
    },
    {
        question: "Home confinement is often combined with which other alternative to incarceration for maximum effectiveness?",
        choice1: "Restorative justice programs",
        choice2: "Community service requirements",
        choice3: "Electronic monitoring",
        choice4: "Halfway houses",
        answer: "Electronic monitoring",
        rationale: "Home confinement is frequently paired with electronic monitoring to ensure compliance with sentencing conditions while allowing offenders to remain in the community."
    },
    {
        question: "A restorative justice circle differs from traditional sentencing by:",
        choice1: "Replacing the judge with an offender's attorney.",
        choice2: "Removing all consequences for the offender.",
        choice3: "Including victims, offenders, and community members in decision-making.",
        choice4: "Eliminating any focus on the offender’s accountability.",
        answer: "Including victims, offenders, and community members in decision-making.",
        rationale: "Restorative justice circles prioritize collaboration and accountability by including victims, offenders, and the community to find mutually agreeable resolutions."
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
  text+= questionNo+"."+" "+questions[i].question+'<br>'+"Answer:"+" "+questions[i].answer+'<br>'+questions[i].rationale+'<br>'+'<br>';
}

questionBox.innerHTML = text;
