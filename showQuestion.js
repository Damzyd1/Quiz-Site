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
    // Knowledge-based question
    {
        question: "According to feminist criminology, what has traditional criminology often failed to address about female offenders?",
        choice1: "Their biological predispositions to crime",
        choice2: "The unique social and cultural factors influencing their behavior",
        choice3: "The severity of punishment they receive",
        choice4: "The lack of male offenders in similar circumstances",
        answer: "The unique social and cultural factors influencing their behavior"
    },
    // Application-based question
    {
        question: "A study finds that most women who commit crimes have experienced poverty and abuse. Which feminist criminological theory explains this pathway?",
        choice1: "Strain theory",
        choice2: "Pathways theory",
        choice3: "Routine activities theory",
        choice4: "Labeling theory",
        answer: "Pathways theory"
    },
    // Evaluation-based question
    {
        question: "Feminist criminology suggests that harsh punishments for female offenders who defy gender norms reinforce what societal issue?",
        choice1: "Patriarchal power structures",
        choice2: "Gender neutrality in law enforcement",
        choice3: "Overrepresentation of women in prisons",
        choice4: "Economic inequality",
        answer: "Patriarchal power structures"
    },
    // Knowledge-based question
    {
        question: "Which scholar argued that female criminality is shaped by patriarchal systems and societal expectations?",
        choice1: "Carol Smart",
        choice2: "Kathleen Daly",
        choice3: "Freda Adler",
        choice4: "Émile Durkheim",
        answer: "Carol Smart"
    },
    // Application-based question
    {
        question: "When female victims of domestic violence retaliate against their abusers and are prosecuted harshly, this reflects which feminist criminological critique of justice systems?",
        choice1: "Intersectionality of gender and race",
        choice2: "Double deviance theory",
        choice3: "Chivalry hypothesis",
        choice4: "Routine activities theory",
        answer: "Double deviance theory"
    },
    // Knowledge-based question
    {
        question: "According to feminist criminology, why are women considered a socially disadvantaged sex?",
        choice1: "Due to their biological vulnerability",
        choice2: "Because of systemic inequalities and patriarchal norms",
        choice3: "Because they commit fewer crimes than men",
        choice4: "Due to their emotional instability",
        answer: "Because of systemic inequalities and patriarchal norms"
    },
    // Application-based question
    {
        question: "A woman commits theft to provide for her children after experiencing domestic violence and unemployment. Which feminist criminological concept explains her actions?",
        choice1: "Pathways theory",
        choice2: "Strain theory",
        choice3: "Double deviance",
        choice4: "Rational choice theory",
        answer: "Pathways theory"
    },
    // Evaluation-based question
    {
        question: "When female offenders are punished harshly for defying gender norms, which societal issue does feminist criminology argue is being reinforced?",
        choice1: "Economic inequality",
        choice2: "Patriarchal power structures",
        choice3: "Overrepresentation of women in prison",
        choice4: "Gender equality",
        answer: "Patriarchal power structures"
    },
    // Knowledge-based question
    {
        question: "What is the main focus of feminist criminology regarding female victimization?",
        choice1: "Exploring gendered power imbalances in crimes like domestic violence",
        choice2: "Studying the biological causes of victimization",
        choice3: "Analyzing psychological differences between male and female victims",
        choice4: "Examining financial restitution for victims",
        answer: "Exploring gendered power imbalances in crimes like domestic violence"
    },
    // Application-based question
    {
        question: "A woman retaliates against her abusive partner and faces severe legal penalties. This reflects which feminist criminological critique of justice systems?",
        choice1: "Intersectionality",
        choice2: "Pathways theory",
        choice3: "Double deviance",
        choice4: "Chivalry hypothesis",
        answer: "Double deviance"
    },
    // Knowledge-based question
    {
        question: "What does pathways theory suggest about female criminal behavior?",
        choice1: "It results from innate biological traits.",
        choice2: "It is often a response to trauma and socio-economic challenges.",
        choice3: "It is primarily motivated by greed.",
        choice4: "It mirrors male criminal behavior.",
        answer: "It is often a response to trauma and socio-economic challenges."
    },
    // Application-based question
    {
        question: "A woman steals food to feed her children after leaving an abusive relationship. Which feminist criminological concept explains this behavior?",
        choice1: "Double deviance",
        choice2: "Pathways theory",
        choice3: "Routine activities theory",
        choice4: "Biological determinism",
        answer: "Pathways theory"
    },
    // Evaluation-based question
    {
        question: "Why does feminist criminology critique the justice system’s treatment of female offenders?",
        choice1: "It focuses too much on leniency for women.",
        choice2: "It often ignores the socio-economic and victimization factors driving female criminality.",
        choice3: "It is too harsh on all offenders, regardless of gender.",
        choice4: "It overemphasizes psychological theories of crime.",
        answer: "It often ignores the socio-economic and victimization factors driving female criminality."
    },
    [4:32 am, 28/01/2025] Ayomide Partner: let questions = [
    // Knowledge-based question
    {
        question: "What does the concept of 'double deviance' refer to in feminist criminology?",
        choice1: "Women committing crimes in pairs",
        choice2: "Women being punished for both breaking the law and violating gender norms",
        choice3: "The dual roles of women as victims and offenders",
        choice4: "The tendency of women to reoffend",
        answer: "Women being punished for both breaking the law and violating gender norms"
    },
    // Application-based question
    {
        question: "A woman is punished more harshly for a violent crime because she does not conform to societal expectations of femininity. What feminist criminological concept explains this phenomenon?",
        choice1: "Chivalry hypothesis",
        choice2: "Double deviance",
        choice3: "Routine activities theory",
        choice4: "Pathways theory",
        answer: "Double deviance"
    },
    // Evaluation-based question
    {
        question: "Why does feminist criminology critique the legal system’s handling of female victimization?",
        choice1: "It tends to ignore crimes against men.",
        choice2: "It often blames female victims and minimizes their experiences.",
        choice3: "It focuses excessively on women’s psychological conditions.",
        choice4: "It imposes harsher punishments on female offenders.",
        answer: "It often blames female victims and minimizes their experiences."
    },
    // Knowledge-based question
    {
        question: "What is the primary goal of feminist criminology regarding discrimination against women?",
        choice1: "To increase incarceration rates for female offenders",
        choice2: "To expose and address systemic inequalities affecting women in the justice system",
        choice3: "To advocate for harsher punishments for male offenders",
        choice4: "To eliminate all gender distinctions in criminal law",
        answer: "To expose and address systemic inequalities affecting women in the justice system"
    },
    // Application-based question
    {
        question: "A female victim of domestic violence is hesitant to report her abuser due to societal stigma and victim-blaming attitudes. What feminist criminological critique does this scenario illustrate?",
        choice1: "The chivalry hypothesis",
        choice2: "The normalization of violence against women",
        choice3: "The overrepresentation of women in prisons",
        choice4: "The biological determinism of victimization",
        answer: "The normalization of violence against women"
    },
    // Knowledge-based question
    {
        question: "What does the concept of 'double deviance' in feminist criminology refer to?",
        choice1: "Women who commit crimes with male partners",
        choice2: "Women being judged for both criminal behavior and violating gender norms",
        choice3: "The tendency of women to reoffend",
        choice4: "The intersection of criminality and victimization in women",
        answer: "Women being judged for both criminal behavior and violating gender norms"
    },
    // Application-based question
    {
        question: "A woman of color from a low-income background is harshly sentenced for a minor offense. Which feminist concept explains her experience?",
        choice1: "Pathways theory",
        choice2: "Chivalry hypothesis",
        choice3: "Intersectionality",
        choice4: "Double deviance",
        answer: "Intersectionality"
    },
    // Evaluation-based question
    {
        question: "Why do feminist theories critique traditional criminology?",
        choice1: "For focusing too much on female offenders",
        choice2: "For applying male-centered theories to explain female criminality",
        choice3: "For ignoring crimes committed by men",
        choice4: "For prioritizing victimology over criminology",
        answer: "For applying male-centered theories to explain female criminality"
    },
    // Knowledge-based question
    {
        question: "Which feminist criminological theory examines how trauma and abuse influence women’s pathways into crime?",
        choice1: "Strain theory",
        choice2: "Pathways theory",
        choice3: "Routine activities theory",
        choice4: "Biological determinism",
        answer: "Pathways theory"
    },
    // Application-based question
    {
        question: "A woman who has been trafficked commits a crime while trying to escape her abuser. How would feminist criminology explain her actions?",
        choice1: "As a result of innate criminal tendencies",
        choice2: "As a coping mechanism shaped by victimization and survival",
        choice3: "As a random act of violence",
        choice4: "As an outcome of economic opportunity",
        answer: "As a coping mechanism shaped by victimization and survival"
    },
    // Knowledge-based question
    {
        question: "Which feminist criminological theory focuses on achieving gender equality by addressing disparities in opportunities and treatment?",
        choice1: "Liberal feminist theory",
        choice2: "Radical feminist theory",
        choice3: "Postmodern feminist theory",
        choice4: "Pathways theory",
        answer: "Liberal feminist theory"
    },
    // Application-based question
    {
        question: "A woman engages in theft due to economic hardship in a patriarchal and capitalist society. Which feminist theory explains this behavior?",
        choice1: "Marxist and socialist feminism",
        choice2: "Radical feminist theory",
        choice3: "Postmodern feminist theory",
        choice4: "Critical race feminism",
        answer: "A woman engages in theft due to economic hardship in a patriarchal and capitalist society. Which feminist theory explains this behavior?"
    },
    // Evaluation-based question
    {
        question: "How does radical feminist theory explain women’s pathways into crime?",
        choice1: "As a result of innate biological differences",
        choice2: "As an outcome of efforts to survive or escape patriarchal control",
        choice3: "As an intersection of race and economic factors",
        choice4: "As a result of inadequate education systems",
        answer: "As an outcome of efforts to survive or escape patriarchal control"
    },
    // Knowledge-based question
    {
        question: "Which feminist criminological theory emphasizes intersectionality and diverse experiences over universal narratives?",
        choice1: "Liberal feminist theory",
        choice2: "Postmodern feminist theory",
        choice3: "Critical race feminism",
        choice4: "Radical feminist theory",
        answer: "Postmodern feminist theory"
    },
    // Application-based question
    {
        question: "A justice system that criminalizes survival behaviors like prostitution in economically disadvantaged women aligns with which feminist critique?",
        choice1: "Liberal feminism",
        choice2: "Marxist and socialist feminism",
        choice3: "Pathways theory",
        choice4: "Radical feminism",
        answer: "Pathways theory"
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
