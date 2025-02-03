window.addEventListener("popstate", function(event){
  history.pushState(null, "", window.location.href);
});

document.addEventListener("keydown", e => {
  if((e.ctrlKey || e.metaKey) &&  e.key.toLowerCase() === 'r'){
    e.preventDefault();
  }
});

const topic = "CSS 301 Exam Simulation";
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
        question: "Which of the following legal systems had the earliest influence on Nigerian criminal law?",
        choice1: "Common Law",
        choice2: "Islamic Law",
        choice3: "Customary Law",
        choice4: "Civil Law",
        answer: 3,
        rationale: "Before colonial rule, indigenous customary laws governed criminal behavior in Nigerian communities. These laws varied across ethnic groups and were enforced by traditional rulers and elders."
    },
    {
        question: "The introduction of English Common Law into Nigeria was primarily a result of:",
        choice1: "British colonization",
        choice2: "The influence of trade with Portugal",
        choice3: "The amalgamation of Northern and Southern Nigeria",
        choice4: "The spread of Christianity",
        answer: 1,
        rationale: "The British colonial administration introduced English Common Law into Nigeria, which later became one of the primary sources of Nigerian criminal law."
    },
    {
        question: "In what year was the first criminal code formally enacted in Nigeria?",
        choice1: "1863",
        choice2: "1914",
        choice3: "1945",
        choice4: "1960",
        answer: 2,
        rationale: "The Nigerian Criminal Code was enacted in 1914 for the Southern region based on the Queensland Criminal Code of Australia, while the Penal Code was later adopted for the Northern region in 1960."
    },
    {
        question: "The Penal Code of Northern Nigeria was primarily influenced by which of the following legal traditions?",
        choice1: "French Civil Law",
        choice2: "Islamic Law and Sudanese Criminal Code",
        choice3: "Roman Law",
        choice4: "American Legal System",
        answer: 2,
        rationale: "The Penal Code, which applies to Northern Nigeria, was influenced by Islamic legal principles and the Sudanese Penal Code, which itself was based on Indian and Islamic legal traditions."
    },
    {
        question: "Which of the following is NOT a recognized source of Nigerian criminal law?",
        choice1: "Judicial Precedents",
        choice2: "International Treaties",
        choice3: "Military Decrees",
        choice4: "Presidential Executive Orders",
        answer: 4,
        rationale: "Nigerian criminal law is derived from statutes, common law, judicial precedents, customary law, and international treaties. Unlike in some other jurisdictions, executive orders do not serve as a direct source of criminal law in Nigeria."
    },
    {
        question: "A judge in a Nigerian court refers to past Supreme Court decisions when deciding a case. This is an example of which source of law?",
        choice1: "Legislation",
        choice2: "Judicial Precedent",
        choice3: "Customary Law",
        choice4: "Natural Law",
        answer: 2,
        rationale: "Judicial precedent (stare decisis) ensures consistency in legal decisions by requiring lower courts to follow the rulings of higher courts."
    },
    {
        question: "A person in Northern Nigeria is arrested for drinking alcohol in public, which is illegal under Sharia law but not under the Penal Code. What legal principle is at play here?",
        choice1: "Federal Supremacy",
        choice2: "Legal Pluralism",
        choice3: "Rule of Law",
        choice4: "Separation of Powers",
        answer: 2,
        rationale: "Legal pluralism refers to the coexistence of multiple legal systems within a state. In Nigeria, Sharia law applies to Muslims in the North alongside the Penal Code."
    },
    {
        question: "How did the introduction of colonial laws impact pre-existing customary criminal laws in Nigeria?",
        choice1: "It completely replaced them",
        choice2: "It coexisted but overruled them in superior courts",
        choice3: "It reinforced traditional legal systems",
        choice4: "It was rejected by all Nigerian communities",
        answer: 2,
        rationale: "While customary law continued in local communities, colonial laws were supreme in courts. The courts applied customary law only if it was not repugnant to natural justice, equity, and good conscience."
    },
    {
        question: "The main difference between the Criminal Code and the Penal Code in Nigeria is that:",
        choice1: "The Criminal Code applies in the North, while the Penal Code applies in the South",
        choice2: "The Penal Code is based on Islamic law, while the Criminal Code follows common law principles",
        choice3: "The Criminal Code was introduced after independence, while the Penal Code was colonial law",
        choice4: "The Penal Code is harsher than the Criminal Code",
        answer: 2,
        rationale: "The Criminal Code (applicable in the South) is derived from English common law, while the Penal Code (applicable in the North) integrates Islamic principles with the Sudanese criminal law model."
    },
    {
        question: "In evaluating the effectiveness of Nigerian criminal law, which of the following is a major challenge?",
        choice1: "Overreliance on international legal principles",
        choice2: "Lack of separation between criminal and civil law",
        choice3: "Inefficiency in law enforcement and judicial delays",
        choice4: "The absence of legal education in Nigeria",
        answer: 3,
        rationale: "A major challenge in Nigeria's criminal justice system is slow judicial processes, corruption, and inadequate law enforcement, which hinder effective implementation of criminal law."
    },
    {
        question: "Which of the following is a significant factor influencing criminal behavior in Nigeria?",
        choice1: "High literacy rates",
        choice2: "Cultural tolerance for bribery and corruption",
        choice3: "Lack of ancestral traditions",
        choice4: "Over-reliance on Western justice systems",
        answer: 2,
        rationale: "Societal acceptance of corrupt practices fosters a permissive environment for crime."
    },
    {
        question: "A young man from a low-income community in Lagos engages in internet fraud, citing societal pressure for wealth. This behavior is best explained by:",
        choice1: "Rational choice theory",
        choice2: "Anomie theory",
        choice3: "Biological determinism",
        choice4: "Routine activity theory",
        answer: 2,
        rationale: "Anomie theory links deviance to societal disintegration, where traditional norms fail to regulate behavior."
    },
    {
        question: "The practice of 'Juju' rituals in crimes such as fraud or theft reflects:",
        choice1: "The rejection of cultural traditions",
        choice2: "A blend of spiritual beliefs and criminal intent",
        choice3: "Strict adherence to statutory laws",
        choice4: "The decline of superstitious practices",
        answer: 2,
        rationale: "Many criminals believe spiritual rituals offer protection or ensure success in illegal activities."
    },
    {
        question: "How does the concept of 'area boys' in Nigeria illustrate cultural factors in criminal behavior?",
        choice1: "They represent organized religious groups",
        choice2: "They are influenced by unemployment and urbanization",
        choice3: "They are primarily a law enforcement initiative",
        choice4: "They represent traditional vigilante systems",
        answer: 2,
        rationale: "'Area boys' reflect how socio-economic conditions drive criminal behavior in urban centers."
    },
    {
        question: "A woman is accused of stealing to feed her children, citing extreme poverty. Her actions align most closely with:",
        choice1: "Deterrence theory",
        choice2: "Strain theory",
        choice3: "Labeling theory",
        choice4: "Conflict theory",
        answer: 2,
        rationale: "Strain theory posits that individuals resort to crime when they lack legitimate means to achieve societal goals."
    },
    {
        question: "What role does peer influence play in the criminal behavior of youths in Nigeria?",
        choice1: "It is negligible in low-income communities",
        choice2: "It reinforces cultural values that oppose deviance",
        choice3: "It often leads to group-based criminal activities",
        choice4: "It decreases the likelihood of committing crime",
        answer: 3,
        rationale: "Peer groups can provide support and encouragement for deviant behavior, especially among youths."
    },
    {
        question: "The rise of cybercrime in Nigeria is often attributed to:",
        choice1: "Traditional African values",
        choice2: "Economic hardship and globalization",
        choice3: "The prevalence of manual labor jobs",
        choice4: "Strict internet monitoring laws",
        answer: 2,
        rationale: "Poverty and access to global networks create opportunities and motives for cybercrime."
    },
    {
        question: "A man commits violent crimes to avenge the death of a family member. His actions are most aligned with:",
        choice1: "Conflict theory",
        choice2: "Restorative justice principles",
        choice3: "Cultural norms of retribution",
        choice4: "Social learning theory",
        answer: 3,
        rationale: "Some Nigerian communities uphold retribution as a traditional justice mechanism."
    },
    {
        question: "Which of the following is a personal factor that contributes to criminal behavior?",
        choice1: "Geographical location",
        choice2: "Religious upbringing",
        choice3: "Substance abuse",
        choice4: "Socioeconomic status",
        answer: 3,
        rationale: "Addiction can impair judgment and lead to criminal acts to sustain habits."
    },
    {
        question: "In a tribal community, a person is ostracized after committing a crime but later reintegrated after showing remorse. This reflects:",
        choice1: "Punitive justice",
        choice2: "Transformative justice",
        choice3: "Restorative justice",
        choice4: "Deterrent justice",
        answer: 3,
        rationale: "Restorative justice focuses on repairing harm and fostering reconciliation."
    },
    {
        question: "Which of the following cultural practices in Nigeria has been linked to ritual killings?",
        choice1: "Festive masquerade dances",
        choice2: "Juju or spiritual rituals",
        choice3: "Traditional healing practices",
        choice4: "Ancestral land disputes",
        answer: 2,
        rationale: "Ritual killings are often rooted in beliefs that spiritual rituals bring wealth, power, or protection."
    },
    {
        question: "Case Scenario: A local community regularly uses ostracism as a punishment for theft. What criminological concept best explains this practice?",
        choice1: "Retributive justice",
        choice2: "Restorative justice",
        choice3: "Traditional justice",
        choice4: "Cultural deviance",
        answer: 2,
        rationale: "Ostracism aligns with restorative justice as it seeks to address harm while maintaining social harmony."
    },
    {
        question: "What is a primary reason for the persistence of traditional crime control systems in rural Nigerian communities?",
        choice1: "Lack of modern policing infrastructure",
        choice2: "High levels of urban migration",
        choice3: "Preference for Western legal systems",
        choice4: "Increasing literacy rates",
        answer: 1,
        rationale: "Many rural areas lack access to formal legal systems, making traditional methods essential."
    },
    {
        question: "Which of the following reflects the cultural deviance theory in the Nigerian context?",
        choice1: "Urban youth adopting cybercrime due to peer influence",
        choice2: "Farmers engaging in land disputes over scarce resources",
        choice3: "The normalization of bribery in business transactions",
        choice4: "The practice of street vending without permits",
        answer: 3,
        rationale: "Cultural deviance theory examines how societal norms can conflict with legal standards."
    },
    {
        question: "Case Scenario: A man from a rural community is accused of witchcraft and lynched by his neighbors. This act demonstrates:",
        choice1: "Restorative justice principles",
        choice2: "Informal social control",
        choice3: "Anomie in modern society",
        choice4: "Rational choice theory",
        answer: 2,
        rationale: "The community uses extrajudicial measures to enforce traditional norms."
    },
    {
        question: "What is a significant driver of internet fraud (Yahoo Yahoo) among Nigerian youths?",
        choice1: "Limited exposure to international systems",
        choice2: "Economic inequality and societal pressures",
        choice3: "Overregulation of the banking system",
        choice4: "Inability to access education loans",
        answer: 2,
        rationale: "Economic hardship and cultural emphasis on wealth push many youths into cybercrime."
    },
    {
        question: "Case Scenario: A woman is arrested for stealing food for her children due to extreme poverty. Which criminological theory best explains her actions?",
        choice1: "Conflict theory",
        choice2: "Strain theory",
        choice3: "Social disorganization theory",
        choice4: "Routine activity theory",
        answer: 2,
        rationale: "Strain theory highlights the link between lack of resources and deviant behavior."
    },
    {
        question: "Which personal factor is most likely to lead to criminal behavior in urban areas?",
        choice1: "Cultural adherence to traditions",
        choice2: "Substance abuse and addiction",
        choice3: "High levels of literacy",
        choice4: "Overcrowded public transport systems",
        answer: 2,
        rationale: "Addiction often compels individuals to commit crimes to sustain their habits."
    },
    {
        question: "Case Scenario: A young man involved in gang activity cites protection and belonging as his primary motives. His behavior aligns with:",
        choice1: "Rational choice theory",
        choice2: "Labeling theory",
        choice3: "Social learning theory",
        choice4: "Anomie theory",
        answer: 3,
        rationale: "Gang activity often results from learned behavior and social reinforcement."
    },
    {
        question: "Which of the following best explains the rise of child trafficking in Nigeria?",
        choice1: "Decline of community-based child-rearing systems",
        choice2: "Cultural shift toward Western values",
        choice3: "Socioeconomic desperation and weak legal enforcement",
        choice4: "Overregulation of adoption processes",
        answer: 3,
        rationale: "Poverty and lack of accountability create conditions for trafficking to thrive."
    },
    {
        question: "A young woman wearing brightly colored, unconventional clothing is frowned upon in her conservative community but not arrested. This is an example of:",
        choice1: "Crime",
        choice2: "Deviance",
        choice3: "Both crime and deviance",
        choice4: "Neither crime nor deviance",
        answer: 2,
        rationale: "Deviance involves actions that violate societal norms but are not necessarily illegal."
    },
    {
        question: "A behavior can be considered both deviant and criminal when:",
        choice1: "It breaks a law and violates social norms.",
        choice2: "It is accepted by law but not by society.",
        choice3: "It is universally acknowledged as immoral.",
        choice4: "It only receives societal disapproval.",
        answer: 1,
        rationale: "Acts like theft violate legal statutes and societal expectations."
    },
    {
        question: "In which scenario would an act be considered deviant but not criminal?",
        choice1: "A person publicly criticizes the government.",
        choice2: "A person jaywalks in a busy city street.",
        choice3: "A person refuses to shake hands in a formal meeting.",
        choice4: "A person drives under the influence of alcohol.",
        answer: 3,
        rationale: "Such behavior violates etiquette but does not break any laws."
    },
    {
        question: "Crime and deviance share which of the following characteristics?",
        choice1: "Both are determined by the individual’s moral stance.",
        choice2: "Both are socially constructed and vary by culture.",
        choice3: "Both result in formal legal sanctions.",
        choice4: "Both are universally defined across societies.",
        answer: 2,
        rationale: "Cultural norms and legal systems differ across societies."
    },
    {
        question: "A society legalizes same-sex marriage, but certain religious groups continue to condemn it. How does this reflect the relationship between crime and deviance?",
        choice1: "Deviance and crime always overlap.",
        choice2: "Deviance can persist even when the law changes.",
        choice3: "Crime becomes irrelevant in the presence of legal change.",
        choice4: "Law shapes societal norms entirely.",
        answer: 2,
        rationale: "Legal acceptance does not always eliminate societal disapproval."
    },
    {
        question: "Which of the following best illustrates the cultural relativity of deviance?",
        choice1: "Stealing is considered wrong universally.",
        choice2: "Drinking alcohol is prohibited in some countries but acceptable in others.",
        choice3: "Murder is punishable everywhere.",
        choice4: "Assault is universally deemed unacceptable.",
        answer: 2,
        rationale: "What is deviant in one culture may not be deviant in another."
    },
    {
        question: "The societal reaction to deviance differs from reactions to crime because:",
        choice1: "Crime is always punished, but deviance is ignored.",
        choice2: "Deviance often lacks formal sanctions.",
        choice3: "Crime only affects individuals, while deviance affects society.",
        choice4: "Deviance has legal consequences, while crime does not.",
        answer: 2,
        rationale: "Deviance usually attracts social disapproval rather than legal punishment."
    },
    {
        question: "A behavior classified as a crime in one culture might only be considered deviant in another. This highlights:",
        choice1: "The universal nature of deviance.",
        choice2: "The static nature of criminal law.",
        choice3: "The importance of local customs in defining norms.",
        choice4: "The irrelevance of cultural differences in law.",
        answer: 3,
        rationale: "Cultural context shapes what is defined as deviant or criminal."
    },
    {
        question: "How does the concept of 'victimless crimes' challenge the distinction between crime and deviance?",
        choice1: "It implies that all crimes have victims.",
        choice2: "It shows that crimes do not always harm others.",
        choice3: "It proves that deviance and crime are identical.",
        choice4: "It shows that societal norms are unimportant.",
        answer: 2,
        rationale: "Victimless crimes (e.g., drug use) may not harm others but are still illegal."
    },
    {
        question: "In a highly traditional society, public displays of affection are met with harsh punishment, while in modern urban settings, such behavior is accepted. This demonstrates:",
        choice1: "The rigidity of deviance across cultures.",
        choice2: "The universality of criminal behavior.",
        choice3: "The influence of cultural values on deviance.",
        choice4: "The irrelevance of societal norms.",
        answer: 3,
        rationale: "Norms and perceptions of deviance change based on cultural values."
    },
    {
        question: "A young woman wearing brightly colored, unconventional clothing is frowned upon in her conservative community but not arrested. This is an example of:",
        choice1: "Crime",
        choice2: "Deviance",
        choice3: "Both crime and deviance",
        choice4: "Neither crime nor deviance",
        answer: 2,
        rationale: "Deviance involves actions that violate societal norms but are not necessarily illegal."
    },
    {
        question: "A behavior can be considered both deviant and criminal when:",
        choice1: "It breaks a law and violates social norms.",
        choice2: "It is accepted by law but not by society.",
        choice3: "It is universally acknowledged as immoral.",
        choice4: "It only receives societal disapproval.",
        answer: 1,
        rationale: "Acts like theft violate legal statutes and societal expectations."
    },
    {
        question: "In which scenario would an act be considered deviant but not criminal?",
        choice1: "A person publicly criticizes the government.",
        choice2: "A person jaywalks in a busy city street.",
        choice3: "A person refuses to shake hands in a formal meeting.",
        choice4: "A person drives under the influence of alcohol.",
        answer: 3,
        rationale: "Such behavior violates etiquette but does not break any laws."
    },
    {
        question: "Crime and deviance share which of the following characteristics?",
        choice1: "Both are determined by the individual’s moral stance.",
        choice2: "Both are socially constructed and vary by culture.",
        choice3: "Both result in formal legal sanctions.",
        choice4: "Both are universally defined across societies.",
        answer: 2,
        rationale: "Cultural norms and legal systems differ across societies."
    },
    {
        question: "A society legalizes same-sex marriage, but certain religious groups continue to condemn it. How does this reflect the relationship between crime and deviance?",
        choice1: "Deviance and crime always overlap.",
        choice2: "Deviance can persist even when the law changes.",
        choice3: "Crime becomes irrelevant in the presence of legal change.",
        choice4: "Law shapes societal norms entirely.",
        answer: 2,
        rationale: "Legal acceptance does not always eliminate societal disapproval."
    },
    {
        question: "Which of the following best illustrates the cultural relativity of deviance?",
        choice1: "Stealing is considered wrong universally.",
        choice2: "Drinking alcohol is prohibited in some countries but acceptable in others.",
        choice3: "Murder is punishable everywhere.",
        choice4: "Assault is universally deemed unacceptable.",
        answer: 2,
        rationale: "What is deviant in one culture may not be deviant in another."
    },
    {
        question: "The societal reaction to deviance differs from reactions to crime because:",
        choice1: "Crime is always punished, but deviance is ignored.",
        choice2: "Deviance often lacks formal sanctions.",
        choice3: "Crime only affects individuals, while deviance affects society.",
        choice4: "Deviance has legal consequences, while crime does not.",
        answer: 2,
        rationale: "Deviance usually attracts social disapproval rather than legal punishment."
    },
    {
        question: "A behavior classified as a crime in one culture might only be considered deviant in another. This highlights:",
        choice1: "The universal nature of deviance.",
        choice2: "The static nature of criminal law.",
        choice3: "The importance of local customs in defining norms.",
        choice4: "The irrelevance of cultural differences in law.",
        answer: 3,
        rationale: "Cultural context shapes what is defined as deviant or criminal."
    },
    {
        question: "How does the concept of 'victimless crimes' challenge the distinction between crime and deviance?",
        choice1: "It implies that all crimes have victims.",
        choice2: "It shows that crimes do not always harm others.",
        choice3: "It proves that deviance and crime are identical.",
        choice4: "It shows that societal norms are unimportant.",
        answer: 2,
        rationale: "Victimless crimes (e.g., drug use) may not harm others but are still illegal."
    },
    {
        question: "In a highly traditional society, public displays of affection are met with harsh punishment, while in modern urban settings, such behavior is accepted. This demonstrates:",
        choice1: "The rigidity of deviance across cultures.",
        choice2: "The universality of criminal behavior.",
        choice3: "The influence of cultural values on deviance.",
        choice4: "The irrelevance of societal norms.",
        answer: 3,
        rationale: "Norms and perceptions of deviance change based on cultural values."
    },
    {
      question: "What distinguishes white-collar crime from other types of crime?",
      choice1: "It involves violence",
      choice2: "It is committed by individuals in high social positions",
      choice3: "It is always victimless",
      choice4: "It is only punishable by fines",
      answer: 2
    },
    {
      question: "Which criminological theory explains crime as a result of learned behaviour within close social groups",
      choice1: "Strain Theory",
      choice2: "Social Learning Theory",
      choice3: "Rational Choice Theory",
      choice4: "Biological Theory",
      answer: 2
    },
    {
      question: "Which of the following is a transnational crime?",
      choice1: "Robbery in a local store",
      choice2: "Money laundering through international banks",
      choice3: "Domestic violence",
      choice4: "Illegal parking",
      answer: 2
    },
    {
      question: "Which theory of crime focuses on how societal labeling cam reinforce criminal behaviour?",
      choice1: "Differential Association Theory",
      choice2: "Labeling Theory",
      choice3: "Rational Choice Theory",
      choice4: "Routine Activities Theory",
      answer: 2
    },
    {
      question: "Which of the following crimes is classified as a crime against property?",
      choice1: "Arson",
      choice2: "Murder",
      choice3: "Kidnapping",
      choice4: "Assault",
      answer: 1
    },
    {
      question: "A crime insider trading is an example of?",
      choice1: "Violent crime",
      choice2: "Property crime",
      choice3: "White-collar crime",
      choice4: "Organized crime",
      answer: 3
    },
    {
      question: "The term 'Mens Rea' refers to?",
      choice1: "The physical act of committing a crime",
      choice2: "The legal consequences of a crime",
      choice3: "The mental intent or guilty mind behind a crime",
      choice4: "The classification of crime types",
      answer: 3
    },
    {
      question: "Strain theory suggests that crime occurs when?",
      choice1: "Individuals lack self-control",
      choice2: "Social norms are unclear or absent",
      choice3: "There is a gap between goals and means to achieve them",
      choice4: "Society rewards deviant behaviour",
      answer: 3
    },
    {
      question: "According to the psychological perspective, crime is often linked to?",
      choice1: "Socioeconomic inequality",
      choice2: "Deviant peer groups",
      choice3: "Personality traits and mental health issues",
      choice4: "Genetic predispositions",
      answer: 3
    },
    {
      question: "What is an example of a victimless crime?",
      choice1: "Assault",
      choice2: "Drug use",
      choice3: "Robbery",
      choice4: "Vandalism",
      answer: 2
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
