window.addEventListener("popstate", function(event){
  history.pushState(null, "", window.location.href);
});

document.addEventListener("keydown", e => {
  if((e.ctrlKey || e.metaKey) &&  e.key.toLowerCase() === 'r'){
    e.preventDefault();
  }
});

const topic = "CSS 315 Exam Simulation";
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
      question: "What is the primary goal of prosecution in a criminal trial?",
      choice1: "To defend the accused",
      choice2: "To investigate crimes",
      choice3: "To prove the accused guilty beyond reasonable doubt",
      choice4: "To enforce civil penalties",
      answer: 3
    },
    {
      question: "Which of the following is NOT a purpose of prosecution?",
      choice1: "Upholding the rule of law",
      choice2: "Protecting society",
      choice3: "Imposing arbitrary punishments",
      choice4: "Deterring potential offenders",
      answer: 3
    },
    {
      question: "Actors of Prosecution who represents the state or government in criminal cases is called?",
      choice1: "Defense counsel",
      choice2: "Prosecutor",
      choice3: "Jury",
      choice4: "Victim",
      answer: 2
    },
    {
      question: "Which actor ensures the trial adheres to legal standards?",
      choice1: "Jury",
      choice2: "Judge",
      choice3: "Law enforcement officer",
      choice4: "Witness",
      answer: 2
    },
    {
      question: "What is the role of witnesses in a crimninal prosecution?",
      choice1: "Deliberate on the case",
      choice2: "Investigate the crime",
      choice3: "Provide testimony supporting or refuting the case",
      choice4: "Represent the accused",
      answer: 3
    },
    {
      question: "At which stage are charges filed in a court of law?",
      choice1: "Investigation",
      choice2: "Pretrial proceedings",
      choice3: "Filing of charges",
      choice4: "Sentencing",
      answer: 3
    },
    {
      question: "What is the primary focus during the trial stage of prosecution?",
      choice1: "Filing motions",
      choice2: "Gathering evidence",
      choice3: "Presenting arguments and evidence in court",
      choice4: "Determing the sentence",
      answer: 3
    },
    {
      question: "What typically happens after a guilty verdict is given?",
      choice1: "Pretrial motions",
      choice2: "Sentencing",
      choice3: "Arraignment",
      choice4: "Discovery phase",
      answer: 2
    },
    {
      question: "Which of the following principles of sentencing aims to reform the offender for reintegration into society?",
      choice1: "Retribution",
      choice2: "Deterrence",
      choice3: "Rehabilitation",
      choice4: "Proportionality",
      answer: 3
    },
    {
      question: "The principle of proportionality ensures?",
      choice1: "The punishment fits the crime's severity",
      choice2: "Consistency with similar cases",
      choice3: "Public protection from dangerous individuals",
      choice4: "Restoring harm caused to victims",
      answer: 1
    },
    {
      question: "Specific deterrence focuses on?",
      choice1: "Deterring the general public from committing crimes",
      choice2: "Removing the offender from society permanently",
      choice3: "Preventing the convicted offender from re-offending",
      choice4: "Ensuring fairness in sentencing",
      answer: 3
    },
    {
        question: "What is the first stage in the criminal prosecution process?",
        choice1: "Trial",
        choice2: "Arraignment",
        choice3: "Investigation",
        choice4: "Sentencing",
        answer: 3,
        rationale: "The prosecution process begins with an investigation to gather evidence and ascertain the facts of the case."
    },
    {
        question: "What is the primary purpose of the arraignment stage?",
        choice1: "To determine guilt",
        choice2: "To inform the accused of the charges and take their plea",
        choice3: "To sentence the accused",
        choice4: "To call witnesses to testify",
        answer: 2,
        rationale: "The arraignment is where the accused is formally charged and asked to plead guilty or not guilty."
    },
    {
        question: "Which of the following occurs during the trial stage?",
        choice1: "Charges are formally filed against the accused",
        choice2: "The accused presents evidence for their defense",
        choice3: "The judge determines the punishment",
        choice4: "The prosecutor conducts investigations",
        answer: 2,
        rationale: "The trial stage involves presenting evidence from both the prosecution and defense to establish the facts."
    },
    {
        question: "What happens during the judgment stage?",
        choice1: "The case is sent back for investigation",
        choice2: "The court delivers its verdict based on the trial proceedings",
        choice3: "The prosecutor decides on the sentence",
        choice4: "Witnesses are cross-examined",
        answer: 2,
        rationale: "This is the stage where the court decides whether the accused is guilty or not guilty."
    },
    {
        question: "What is the purpose of the sentencing stage?",
        choice1: "To determine the admissibility of evidence",
        choice2: "To punish the accused if found guilty",
        choice3: "To review the charges against the accused",
        choice4: "To acquit the accused",
        answer: 2,
        rationale: "The sentencing stage involves determining the appropriate punishment for the convicted individual."
    },
    {
        question: "Which stage in prosecution involves the prosecution presenting its case and evidence?",
        choice1: "Investigation",
        choice2: "Trial",
        choice3: "Sentencing",
        choice4: "Plea bargaining",
        answer: 2,
        rationale: "During the trial stage, the prosecution calls witnesses and presents evidence to prove the accused’s guilt."
    },
    {
        question: "What role does the preliminary hearing serve in prosecution?",
        choice1: "To convict the accused",
        choice2: "To determine if there is sufficient evidence to proceed to trial",
        choice3: "To sentence the accused",
        choice4: "To take the accused’s plea",
        answer: 2,
        rationale: "Preliminary hearings assess whether the evidence is strong enough to warrant a trial."
    },
    {
        question: "Which stage allows the accused to plead guilty or not guilty?",
        choice1: "Investigation",
        choice2: "Trial",
        choice3: "Arraignment",
        choice4: "Judgment",
        answer: 3,
        rationale: "Arraignment is the stage where the accused is asked to enter a plea."
    },
    {
        question: "What is the main focus of the prosecution during the pre-trial stage?",
        choice1: "Presenting evidence in court",
        choice2: "Filing charges and preparing the case",
        choice3: "Cross-examining the accused",
        choice4: "Delivering the verdict",
        answer: 2,
        rationale: "During the pre-trial stage, the prosecution prepares its case and files the necessary charges."
    },
    {
        question: "At what stage can the accused file a preliminary objection?",
        choice1: "Judgment stage",
        choice2: "Arraignment stage",
        choice3: "Investigation stage",
        choice4: "Trial stage",
        answer: 2,
        rationale: "Preliminary objections are raised at the arraignment to challenge the charges or jurisdiction."
    },
    {
        question: "What does a 'no case submission' mean in a criminal trial?",
        choice1: "The defendant pleads guilty to the charges",
        choice2: "The defense argues that the prosecution has not provided enough evidence to continue the trial",
        choice3: "The defendant refuses to testify in court",
        choice4: "The judge dismisses the case without hearing the defense",
        answer: 2,
        rationale: "A 'no case submission' is when the defense argues that the prosecution has failed to establish a prima facie case, and thus, the trial should not proceed."
    },
    {
        question: "When a defendant chooses to 'rest their case on the prosecution,' what does it mean?",
        choice1: "The defendant admits guilt",
        choice2: "The defense relies entirely on the weaknesses in the prosecution’s case without presenting their own evidence",
        choice3: "The prosecution is given additional time to present evidence",
        choice4: "The defense calls additional witnesses to support their case",
        answer: 2,
        rationale: "Resting the case on the prosecution means the defense chooses not to present any evidence, relying instead on the argument that the prosecution has not proven guilt beyond a reasonable doubt."
    },
    {
        question: "What is the primary objective of the defense during trial?",
        choice1: "To discredit the prosecution’s evidence and prove the defendant’s innocence",
        choice2: "To delay the trial proceedings",
        choice3: "To negotiate a plea bargain",
        choice4: "To determine the sentencing of the accused",
        answer: 1,
        rationale: "The defense’s role in trial is to challenge the prosecution’s evidence and establish reasonable doubt in the case."
    },
    {
        question: "What is the difference between consecutive and concurrent sentencing?",
        choice1: "Consecutive sentences run at the same time, while concurrent sentences run one after another",
        choice2: "Consecutive sentences are shorter than concurrent sentences",
        choice3: "Concurrent sentences run at the same time, while consecutive sentences are served one after another",
        choice4: "Consecutive sentences only apply to minor offenses",
        answer: 3,
        rationale: "In consecutive sentencing, the offender serves each sentence one after another, while in concurrent sentencing, multiple sentences are served simultaneously."
    },
    {
        question: "Which of the following is true about the death penalty?",
        choice1: "It is always applied to any serious crime",
        choice2: "It is a form of capital punishment reserved for the most serious offenses",
        choice3: "It can be given for minor crimes like theft",
        choice4: "It is only applied in military courts",
        answer: 2,
        rationale: "The death penalty, or capital punishment, is reserved for crimes considered extremely serious, such as murder and treason, depending on the jurisdiction."
    },
    {
        question: "Which of the following is an example of a fine as a form of punishment?",
        choice1: "An offender is sentenced to life in prison",
        choice2: "An offender is required to pay a specific sum of money as punishment",
        choice3: "An offender is sentenced to community service",
        choice4: "An offender is given probation instead of prison time",
        answer: 2,
        rationale: "A fine is a monetary penalty imposed by the court as punishment for an offense."
    },
    {
        question: "Hadd (Haddi) flogging is primarily associated with which legal system?",
        choice1: "Common law",
        choice2: "Islamic law (Sharia)",
        choice3: "Civil law",
        choice4: "Military law",
        answer: 2,
        rationale: "Hadd (Haddi) flogging is a form of corporal punishment under Islamic law, prescribed for specific offenses such as theft and adultery."
    },
    {
        question: "Which of the following is a key feature of Hadd (Haddi) punishments?",
        choice1: "They are discretionary and vary based on the judge’s ruling",
        choice2: "They are fixed punishments prescribed by Islamic law for certain offenses",
        choice3: "They only involve imprisonment without physical punishment",
        choice4: "They are reserved for cases involving financial crimes only",
        answer: 2,
        rationale: "Hadd punishments are fixed under Islamic law for specific crimes and include penalties such as flogging and amputation."
    },
    {
        question: "Which of the following is a criticism of the death penalty?",
        choice1: "It does not serve as a deterrent to crime",
        choice2: "It is more cost-effective than life imprisonment",
        choice3: "It provides justice to victims without controversy",
        choice4: "It is the most humane form of punishment",
        answer: 1,
        rationale: "One of the major criticisms of the death penalty is that it does not necessarily deter crime, and there is a risk of wrongful executions."
    },
    {
        question: "What is one potential issue with imposing fines as a punishment?",
        choice1: "They disproportionately affect low-income offenders",
        choice2: "They are only used for serious crimes",
        choice3: "They are impossible to enforce",
        choice4: "They replace all other forms of punishment",
        answer: 1,
        rationale: "Fines can disproportionately impact low-income offenders, as they may struggle to pay, leading to further legal consequences."
    },
    {
        question: "Which of the following best describes a ‘no case submission’ by the defense?",
        choice1: "A motion arguing that the prosecution has not presented enough evidence for a conviction",
        choice2: "An admission of guilt by the defendant",
        choice3: "A request for a lighter sentence due to lack of evidence",
        choice4: "An appeal to a higher court before the trial concludes",
        answer: 1,
        rationale: "A 'no case submission' is made when the defense argues that the prosecution has not provided sufficient evidence to justify continuing the trial."
    },
    {
        question: "If a defendant rests their case on the prosecution, what does it imply?",
        choice1: "They accept the prosecution’s arguments as valid",
        choice2: "They rely on the prosecution’s failure to prove guilt and do not present a defense",
        choice3: "They challenge the prosecution’s witnesses through additional cross-examination",
        choice4: "They automatically receive a reduced sentence",
        answer: 2,
        rationale: "Resting the case on the prosecution means the defense does not present evidence, arguing that the prosecution’s case is weak enough that no defense is necessary."
    },
    {
        question: "Which of the following is a key characteristic of a defense on trial?",
        choice1: "The prosecution is required to prove the innocence of the defendant",
        choice2: "The defense presents evidence and witnesses to counter the prosecution's case",
        choice3: "The defendant is not allowed to testify in court",
        choice4: "The judge directly determines guilt without considering the defense’s case",
        answer: 2,
        rationale: "A defense on trial involves presenting evidence, witnesses, and arguments to refute the prosecution's claims and establish reasonable doubt."
    },
    {
        question: "Which statement is true about consecutive sentencing?",
        choice1: "All sentences are served at the same time",
        choice2: "The defendant serves each sentence separately, one after another",
        choice3: "The sentence is determined by the judge’s discretion only",
        choice4: "It only applies to crimes involving violence",
        answer: 2,
        rationale: "Consecutive sentences require a convicted person to serve each sentence separately, unlike concurrent sentences, which run simultaneously."
    },
    {
        question: "In a concurrent sentence, how are the prison terms served?",
        choice1: "One after the other",
        choice2: "Only the longest sentence is served",
        choice3: "All sentences run at the same time",
        choice4: "Sentences are automatically reduced",
        answer: 3,
        rationale: "Concurrent sentencing allows multiple sentences to be served at the same time, reducing the overall time spent in prison."
    },
    {
        question: "Which of the following is NOT a common justification for the death penalty?",
        choice1: "Deterrence of serious crimes",
        choice2: "Retribution for heinous offenses",
        choice3: "Reducing overcrowding in prisons",
        choice4: "Providing justice for victims’ families",
        answer: 3,
        rationale: "While the death penalty is often justified by deterrence and retribution, it is not primarily used as a solution for prison overcrowding."
    },
    {
        question: "What is the primary criticism of the death penalty?",
        choice1: "It is an inexpensive method of punishment",
        choice2: "It prevents rehabilitation of offenders",
        choice3: "It ensures that no innocent person is ever punished",
        choice4: "It is the only effective deterrent to crime",
        answer: 2,
        rationale: "Critics argue that the death penalty removes the possibility of rehabilitation and poses the risk of executing innocent individuals."
    },
    {
        question: "Which of the following factors can influence a judge's decision to impose a fine as punishment?",
        choice1: "The financial status of the offender",
        choice2: "The emotional state of the victim",
        choice3: "The defendant’s religious beliefs",
        choice4: "The level of public interest in the case",
        answer: 1,
        rationale: "Judges consider the offender’s financial ability to pay when imposing fines, ensuring that the punishment is effective without being overly punitive."
    },
    {
        question: "Which of the following best describes Hadd (Haddi) flogging?",
        choice1: "A discretionary punishment decided by the judge",
        choice2: "A fixed punishment under Islamic law for specific crimes",
        choice3: "A form of execution used in military courts",
        choice4: "A rare practice no longer used in any legal system",
        answer: 2,
        rationale: "Hadd punishments, including flogging, are prescribed punishments in Islamic law for offenses like theft, adultery, and false accusations."
    },
    {
        question: "Which of the following is a crime that can attract Hadd (Haddi) flogging under Islamic law?",
        choice1: "Murder",
        choice2: "Theft",
        choice3: "Tax evasion",
        choice4: "Forgery",
        answer: 2,
        rationale: "Theft is one of the crimes for which Hadd punishments, such as flogging or amputation, can be applied under Islamic law."
    },
    {
        question: "Which factor determines whether a crime receives a Hadd punishment?",
        choice1: "The presence of clear and specific evidence",
        choice2: "The personal feelings of the judge",
        choice3: "The wealth of the accused",
        choice4: "The number of witnesses in court",
        answer: 1,
        rationale: "Hadd punishments require strong and specific evidence, such as witnesses or confessions, before they can be applied."
    },
    {
        question: "What is a key difference between Hadd punishments and Ta’zir punishments under Islamic law?",
        choice1: "Hadd punishments are fixed, while Ta’zir punishments are discretionary",
        choice2: "Ta’zir punishments are always harsher than Hadd punishments",
        choice3: "Hadd punishments only apply to financial crimes",
        choice4: "Ta’zir punishments require approval from religious authorities",
        answer: 1,
        rationale: "Hadd punishments are strictly defined by Islamic law, whereas Ta’zir punishments are left to judicial discretion based on the circumstances of the case."
    },
    {
        question: "Which of the following is a major concern with imposing excessive fines?",
        choice1: "They are too lenient on offenders",
        choice2: "They may disproportionately punish poorer individuals",
        choice3: "They do not generate revenue for the government",
        choice4: "They are only applicable in capital offenses",
        answer: 2,
        rationale: "Excessive fines can unfairly impact lower-income offenders, making them an issue of economic inequality in justice systems."
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

let durationInMinutes = 20;
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
