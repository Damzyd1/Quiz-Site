window.addEventListener("popstate", function(event){
  history.pushState(null, "", window.location.href);
});

document.addEventListener("keydown", e => {
  if((e.ctrlKey || e.metaKey) &&  e.key.toLowerCase() === 'r'){
    e.preventDefault();
  }
});

const topic = "CSS 305 Exam Simulation";
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
        question: "What is the primary objective of studying the history of law enforcement in Nigeria?",
        choice1: "To adopt English policing methods wholesale",
        choice2: "To integrate traditional and colonial methods of policing",
        choice3: "To eliminate traditional social control mechanisms",
        choice4: "To promote colonial superiority",
        answer: 2, // Answer: B
        rationale: "Understanding history ensures an integration of indigenous and colonial methods, rather than ignoring cultural context."
    },
    {
        question: "Which of the following scenarios best illustrates the objective of integrating traditional and English law enforcement systems?",
        choice1: "Using local chiefs to manage community disputes while enforcing colonial laws",
        choice2: "Replacing local chiefs with British administrators for law enforcement",
        choice3: "Relying solely on customary laws to resolve modern disputes",
        choice4: "Training British officers on Nigerian traditions without local participation",
        answer: 1, // Answer: A
        rationale: "This reflects a balanced approach to law enforcement, combining indigenous authority with formal legal frameworks."
    },
    {
        question: "Why is it important to preserve traditional mediums of social control in modern Nigerian law enforcement?",
        choice1: "They ensure compliance with British legal traditions.",
        choice2: "They enhance community trust and cooperation.",
        choice3: "They reduce the cost of law enforcement.",
        choice4: "They eliminate the need for police training.",
        answer: 2, // Answer: B
        rationale: "Traditional methods are deeply rooted in community culture, fostering trust and effective conflict resolution."
    },
    {
        question: "Critics argue that adopting colonial law enforcement weakened indigenous systems of social control. Do you agree or disagree, and why?",
        choice1: "Agree, because colonial laws were rigid and disconnected from local customs.",
        choice2: "Disagree, because colonial systems modernized law enforcement.",
        choice3: "Agree, because indigenous systems were inferior to colonial methods.",
        choice4: "Disagree, because colonial and indigenous systems were equally effective.",
        answer: 1, // Answer: A
        rationale: "Colonial law enforcement often ignored cultural contexts, leading to weakened trust in local systems."
    },
    {
        question: "Which of the following best describes a traditional medium of social control in precolonial Nigeria?",
        choice1: "Courtroom trials",
        choice2: "Oath-taking before deities",
        choice3: "Written codes of law",
        choice4: "Police patrols",
        answer: 2, // Answer: B
        rationale: "Indigenous societies relied on spiritual and communal methods like oath-taking for dispute resolution."
    },
    {
        question: "In a multi-ethnic Nigerian community, what traditional method of social control could complement English law enforcement practices?",
        choice1: "Imposing fines through written statutes",
        choice2: "Mediation by elders within the community",
        choice3: "Adopting British-style jury systems",
        choice4: "Appointing only colonial officers for mediation",
        answer: 2, // Answer: B
        rationale: "Elders hold cultural authority and are often trusted mediators, complementing formal law enforcement."
    },
    {
        question: "How did the imposition of colonial law enforcement impact the role of traditional leaders in Nigeria?",
        choice1: "It strengthened their authority.",
        choice2: "It marginalized their roles in conflict resolution.",
        choice3: "It allowed them to adopt colonial ranks.",
        choice4: "It left their roles unchanged.",
        answer: 2, // Answer: B
        rationale: "Colonial systems often reduced the authority of traditional leaders, centralizing power in the colonial government."
    },
    {
        question: "Which system is more effective for rural Nigerian communities: traditional social control or English policing methods? Justify your answer.",
        choice1: "Traditional, because it is culturally relevant and accessible.",
        choice2: "English, because it is modern and enforceable by law.",
        choice3: "Traditional, because English systems lack rural infrastructure.",
        choice4: "English, because traditional methods are outdated.",
        answer: 1, // Answer: A
        rationale: "Traditional systems often resonate better with rural communities due to cultural familiarity and accessibility."
    },
    {
        question: "What role did traditional religious institutions play in maintaining law and order in precolonial Nigeria?",
        choice1: "Organizing police patrols",
        choice2: "Prescribing punishments through spiritual guidance",
        choice3: "Codifying laws in written form",
        choice4: "Establishing colonial courts",
        answer: 2, // Answer: B
        rationale: "Religious institutions enforced norms through spiritual authority and guided societal behavior."
    },
    {
        question: "If a community in modern Nigeria faces a resurgence of conflicts, what historical lesson from traditional law enforcement could be applied?",
        choice1: "Involving spiritual leaders in conflict mediation",
        choice2: "Enforcing only written statutes",
        choice3: "Appointing colonial-style officers",
        choice4: "Establishing foreign courts",
        answer: 1, // Answer: A
        rationale: "Involving spiritual leaders often resolves disputes effectively, respecting local beliefs and traditions."
    },
    {
        question: "What is the primary importance of law enforcement in Nigeria?",
        choice1: "To intimidate citizens into compliance",
        choice2: "To maintain peace and protect lives and property",
        choice3: "To uphold colonial policies in modern society",
        choice4: "To restrict traditional conflict resolution mechanisms",
        answer: 2, // Answer: B
        rationale: "Law enforcement is fundamentally about ensuring societal order and safeguarding citizens."
    },
    {
        question: "How can law enforcement officers address rising crime rates in Nigerian urban areas?",
        choice1: "By adopting strategies that combine community policing and modern surveillance systems",
        choice2: "By focusing only on punitive measures",
        choice3: "By disregarding public opinion on police methods",
        choice4: "By replicating precolonial methods in urban contexts",
        answer: 1, // Answer: A
        rationale: "A hybrid approach fosters community trust while utilizing technology for efficiency."
    },
    {
        question: "Why is community involvement critical in Nigerian law enforcement?",
        choice1: "It reduces the need for formal police training.",
        choice2: "It fosters mutual trust between citizens and law enforcement.",
        choice3: "It eliminates the use of force in all cases.",
        choice4: "It ensures that only traditional methods are used.",
        answer: 2, // Answer: B
        rationale: "Community collaboration enhances law enforcement’s effectiveness by improving trust and information flow."
    },
    {
        question: "Evaluate the effectiveness of Nigeria’s law enforcement in addressing corruption within its ranks.",
        choice1: "Effective, as recent reforms have eliminated corruption.",
        choice2: "Partially effective, with ongoing challenges in implementation.",
        choice3: "Ineffective, as corruption remains widespread.",
        choice4: "Neutral, as corruption does not affect law enforcement.",
        answer: 2, // Answer: B
        rationale: "Reforms are underway, but corruption continues to hinder the full potential of law enforcement."
    },
    {
        question: "Which institution is the central authority for law enforcement in Nigeria?",
        choice1: "The National Assembly",
        choice2: "The Nigeria Police Force",
        choice3: "The Ministry of Defense",
        choice4: "The Supreme Court",
        answer: 2, // Answer: B
        rationale: "The Nigeria Police Force is constitutionally mandated to oversee law enforcement nationwide."
    },
    {
        question: "In addressing kidnapping in Nigeria, how can law enforcement agencies collaborate effectively?",
        choice1: "By improving intelligence sharing across states",
        choice2: "By limiting operations to urban areas",
        choice3: "By focusing solely on punitive justice",
        choice4: "By deploying only traditional leaders",
        answer: 1, // Answer: A
        rationale: "Effective collaboration and intelligence sharing are essential for combating organized crime like kidnapping."
    },
    {
        question: "What factors undermine the importance of law enforcement in rural Nigerian communities?",
        choice1: "High levels of illiteracy among residents",
        choice2: "Corruption and lack of adequate resources",
        choice3: "Excessive reliance on traditional systems",
        choice4: "Strict adherence to colonial practices",
        answer: 2, // Answer: B
        rationale: "Corruption and inadequate resources hinder law enforcement’s ability to serve rural areas effectively."
    },
    {
        question: "What is one way law enforcement ensures the protection of fundamental human rights in Nigeria?",
        choice1: "By training officers on constitutional provisions",
        choice2: "By enforcing colonial-style laws",
        choice3: "By delegating human rights issues to NGOs",
        choice4: "By limiting public access to the judiciary",
        answer: 1,
        rationale: "Training officers on human rights ensures they respect citizens’ rights during enforcement."
    },
    {
        question: "If tasked with reforming law enforcement in Nigeria, which area should be addressed first to ensure its importance is upheld?",
        choice1: "Public perception of law enforcement",
        choice2: "Recruitment and training of officers",
        choice3: "International collaboration on crime",
        choice4: "Privatization of police services",
        answer: 2,
        rationale: "Proper recruitment and training lay the foundation for professional and ethical law enforcement."
    },
    {
        question: "What was the primary feature of law enforcement during the precolonial era in Nigeria?",
        choice1: "Centralized policing systems",
        choice2: "Community-based dispute resolution mechanisms",
        choice3: "Codified laws enforced by military personnel",
        choice4: "Reliance on foreign systems for justice",
        answer: 2,
        rationale: "Precolonial law enforcement relied heavily on community-led mechanisms like elders and religious leaders."
    },
    {
        question: "How can lessons from precolonial law enforcement systems enhance modern Nigerian policing?",
        choice1: "By reintroducing communal leadership in rural areas",
        choice2: "By abolishing modern policing systems",
        choice3: "By rejecting any form of modernization in law enforcement",
        choice4: "By limiting law enforcement to urban centers",
        answer: 1,
        rationale: "Reintegrating communal leadership fosters localized trust and cooperation."
    },
    {
        question: "What was the role of age grades in law enforcement during the precolonial era in Nigeria?",
        choice1: "They served as professional police officers.",
        choice2: "They acted as informal enforcers of community norms.",
        choice3: "They replaced elders in decision-making processes.",
        choice4: "They formalized colonial law in villages.",
        answer: 2,
        rationale: "Age grades played a key role in enforcing community norms and maintaining order without formal structures."
    },
    {
        question: "Evaluate the effectiveness of spiritual sanctions (e.g., oaths, curses) as a form of law enforcement in precolonial Nigeria.",
        choice1: "Highly effective, as they instilled fear and ensured compliance.",
        choice2: "Moderately effective, as they depended on societal beliefs.",
        choice3: "Ineffective, as they lacked enforceability.",
        choice4: "Redundant, as formal methods were superior.",
        answer: 1,
        rationale: "Spiritual sanctions were deeply rooted in societal belief systems, making them a powerful tool for maintaining order."
    },
    {
        question: "In precolonial Nigeria, which group often mediated disputes and enforced communal laws?",
        choice1: "Colonial administrators",
        choice2: "Village elders and religious leaders",
        choice3: "British missionaries",
        choice4: "Military personnel",
        answer: 2,
        rationale: "Elders and religious leaders were respected figures in precolonial societies, trusted for fair conflict resolution."
    },
    {
        question: "Which modern scenario reflects the influence of precolonial law enforcement systems in Nigeria?",
        choice1: "A community settling disputes through elders and traditional rulers",
        choice2: "A police force adopting English-style investigative techniques",
        choice3: "An urban neighborhood creating a written code of conduct",
        choice4: "A court relying solely on forensic evidence in rural areas",
        answer: 1,
        rationale: "Community involvement in conflict resolution echoes precolonial methods of governance and law enforcement."
    },
    {
        question: "How did the absence of centralized policing in precolonial Nigeria affect societal organization?",
        choice1: "It created chaos and lawlessness.",
        choice2: "It strengthened communal bonds and accountability.",
        choice3: "It led to overreliance on colonial intervention.",
        choice4: "It rendered traditional institutions irrelevant.",
        answer: 2,
        rationale: "Decentralized systems promoted strong communal ties and local accountability, ensuring order."
    },
    {
        question: "Should modern law enforcement in Nigeria reintroduce some aspects of precolonial methods? Why or why not?",
        choice1: "Yes, because they enhance community participation.",
        choice2: "No, because they are incompatible with modern systems.",
        choice3: "Yes, because they are cheaper to implement.",
        choice4: "No, because they lack professional standards.",
        answer: 1,
        rationale: "Precolonial methods foster trust and community involvement, essential for effective policing in diverse societies."
    },
    {
        question: "What was the primary enforcement mechanism in precolonial Nigerian communities?",
        choice1: "Written laws enforced by courts",
        choice2: "Communal participation and moral sanctions",
        choice3: "Armed officers patrolling the streets",
        choice4: "Foreign legal advisors monitoring compliance",
        answer: 2,
        rationale: "Precolonial systems relied on collective responsibility and moral enforcement rather than formal policing."
    },
    {
        question: "How might precolonial communal enforcement practices be adapted to address modern issues like environmental crimes in rural areas?",
        choice1: "Through communal fines and local monitoring committees",
        choice2: "By establishing courts in every village",
        choice3: "By replacing traditional systems with modern laws",
        choice4: "By involving only national law enforcement agencies",
        answer: 1,
        rationale: "Communal approaches align with local customs and ensure collective responsibility for environmental protection."
    },
    {
        question: "When was the first formal police force established in Nigeria?",
        choice1: "1861",
        choice2: "1891",
        choice3: "1901",
        choice4: "1914",
        answer: 2,
        rationale: "The first formal police force in Nigeria was established by the British colonial government in 1891."
    },
    {
        question: "How did the colonial establishment of formal policing differ from precolonial systems in Nigeria?",
        choice1: "It centralized authority and imposed foreign laws.",
        choice2: "It strengthened traditional rulers’ authority.",
        choice3: "It relied entirely on communal enforcement mechanisms.",
        choice4: "It removed law enforcement duties from colonial administrators.",
        answer: 1,
        rationale: "Formal policing centralized power under colonial rule, often disregarding local customs."
    },
    {
        question: "What challenges arose from the establishment of formal policing in colonial Nigeria?",
        choice1: "Resistance from local communities due to cultural alienation",
        choice2: "Immediate acceptance of British systems by all regions",
        choice3: "Replacement of colonial laws with indigenous norms",
        choice4: "Elimination of community-led conflict resolution",
        answer: 1,
        rationale: "The foreign nature of colonial policing methods alienated local communities, leading to resistance."
    },
    {
        question: "Was the establishment of formal policing in Nigeria necessary for modernization?",
        choice1: "Yes, but it should have been adapted to local customs.",
        choice2: "No, because traditional systems were sufficient.",
        choice3: "Yes, as it introduced modern crime control methods.",
        choice4: "No, because it disrupted communal harmony.",
        answer: 1,
        rationale: "While formal policing introduced modern systems, it would have been more effective if tailored to Nigeria’s cultural context."
    },
    {
        question: "Which colonial administrative structure supported the creation of formal policing in Nigeria?",
        choice1: "Indirect Rule",
        choice2: "French Assimilation",
        choice3: "Portuguese Mercantilism",
        choice4: "Islamic Caliphates",
        answer: 1,
        rationale: "The British used indirect rule, blending colonial systems with traditional rulers to establish law enforcement."
    },
    {
        question: "How could the colonial policing framework have been improved to gain local acceptance?",
        choice1: "By incorporating traditional leaders in law enforcement roles",
        choice2: "By enforcing only colonial laws",
        choice3: "By ignoring cultural differences in policy implementation",
        choice4: "By replacing traditional rulers entirely",
        answer: 1,
        rationale: "Involving traditional leaders would have bridged the gap between colonial and local systems."
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
