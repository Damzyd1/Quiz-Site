window.addEventListener("popstate", function(event){
  history.pushState(null, "", window.location.href);
});

document.addEventListener("keydown", e => {
  if((e.ctrlKey || e.metaKey) &&  e.key.toLowerCase() === 'r'){
    e.preventDefault();
  }
});

const topic = "GNS 211: Powered by DamzyNextGen & Giwa";
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
        question: "What is the primary purpose of dialogue in conflict resolution?",
        choice1: "To impose one party's opinion.",
        choice2: "To foster mutual understanding.",
        choice3: "To end all communication.",
        choice4: "To escalate conflict.",
        answer: 2
    },
    {
        question: "Which of the following is a key feature of effective dialogue?",
        choice1: "Listening actively.",
        choice2: "Interrupting frequently.",
        choice3: "Assuming superiority.",
        choice4: "Criticizing harshly.",
        answer: 1
    },
    {
        question: "Which of these is a barrier to successful dialogue?",
        choice1: "Empathy.",
        choice2: "Cultural bias.",
        choice3: "Mutual respect.",
        choice4: "Open-mindedness.",
        answer: 2
    },
    {
        question: "What type of communication is dialogue?",
        choice1: "One-way.",
        choice2: "Two-way.",
        choice3: "Multi-way.",
        choice4: "No communication at all.",
        answer: 2
    },
    {
        question: "Dialogue is crucial in which of these processes?",
        choice1: "Escalating conflict.",
        choice2: "Negotiating peace agreements.",
        choice3: "Avoiding communication.",
        choice4: "Withholding information.",
        answer: 2
    },
    {
        question: "The success of dialogue depends on:",
        choice1: "Effective communication skills.",
        choice2: "Using threats.",
        choice3: "Avoiding difficult topics.",
        choice4: "Dominating the conversation.",
        answer: 1
    },
    {
        question: "Which is a principle of dialogue?",
        choice1: "Winning arguments.",
        choice2: "Respecting diverse perspectives.",
        choice3: "Silencing others.",
        choice4: "Imposing views.",
        answer: 2
    },
    {
        question: "Which of the following is NOT a component of security?",
        choice1: "Economic stability.",
        choice2: "Access to basic needs.",
        choice3: "Persistent conflict.",
        choice4: "Political stability.",
        answer: 3
    },
    {
        question: "What is the relationship between peace and security?",
        choice1: "They are unrelated concepts.",
        choice2: "Peace leads to security, and security supports peace.",
        choice3: "Security is irrelevant in times of peace.",
        choice4: "Peace and security cannot coexist.",
        answer: 2
    },
    {
        question: "Which of these is a global threat to peace and security?",
        choice1: "International cooperation.",
        choice2: "Terrorism and armed conflict.",
        choice3: "Trade agreements.",
        choice4: "Cultural exchanges.",
        answer: 2
    },
    {
        question: "What is the primary goal of international peacekeeping efforts?",
        choice1: "To enforce laws without consultation.",
        choice2: "To foster dialogue and resolve conflicts.",
        choice3: "To avoid communication with local leaders.",
        choice4: "To ignore ongoing violence.",
        answer: 2
    },
    {
        question: "Which of the following contributes to long-lasting peace?",
        choice1: "Addressing root causes of conflict.",
        choice2: "Temporary ceasefires.",
        choice3: "Imposing strict military control.",
        choice4: "Restricting freedoms.",
        answer: 1
    },
    {
        question: "What does 'human security' prioritize?",
        choice1: "Protection of state boundaries.",
        choice2: "Safety and well-being of individuals.",
        choice3: "Increasing military power.",
        choice4: "Ignoring social development.",
        answer: 2
    },
    {
        question: "Which organization is most recognized for promoting global peace?",
        choice1: "World Health Organization (WHO).",
        choice2: "United Nations (UN).",
        choice3: "International Olympic Committee.",
        choice4: "World Trade Organization (WTO).",
        answer: 2
    },
    {
        question: "Why is education essential to peace and security?",
        choice1: "It promotes economic disparity.",
        choice2: "It fosters understanding and reduces ignorance.",
        choice3: "It leads to more conflict.",
        choice4: "It discourages dialogue.",
        answer: 2
    },
    {
        question: "Which term refers to resolving conflicts without violence?",
        choice1: "Peaceful resolution.",
        choice2: "Aggressive diplomacy.",
        choice3: "Military intervention.",
        choice4: "Economic sanctions.",
        answer: 1
    },
    {
        question: "Which of the following is the most appropriate way to announce grief?",
        choice1: "Through an emotional outburst in public.",
        choice2: "Using clear and respectful communication.",
        choice3: "By avoiding communication altogether.",
        choice4: "By exaggerating the circumstances.",
        answer: 2
    },
    {
        question: "Why is it important to choose the right words when announcing grief?",
        choice1: "To avoid hurting others’ feelings.",
        choice2: "To sound poetic.",
        choice3: "To make the announcement vague.",
        choice4: "To shift focus to unrelated issues.",
        answer: 1
    },
    {
        question: "Who should ideally be informed first about grief?",
        choice1: "Random acquaintances.",
        choice2: "Immediate family and close friends.",
        choice3: "Work colleagues.",
        choice4: "Social media followers.",
        answer: 2
    },
    {
        question: "Which of the following is a cultural consideration when announcing grief?",
        choice1: "Using humor in the announcement.",
        choice2: "Following traditions and protocols.",
        choice3: "Making it as brief as possible.",
        choice4: "Ignoring cultural practices.",
        answer: 2
    },
    {
        question: "What is a key benefit of announcing grief in a timely manner?",
        choice1: "It prevents misunderstandings.",
        choice2: "It avoids dealing with emotions.",
        choice3: "It allows for isolation.",
        choice4: "It creates drama.",
        answer: 1
    },
    {
        question: "The following is the pre principles that govern strategic communication:",
        choice1: "Appreciating the place of silence",
        choice2: "Knowing the place of negotiation",
        choice3: "Pre-empting possible counter arguments",
        choice4: "All of the above",
        answer: 4
    },
    {
        question: "Grief is sometimes used interchangeably with?",
        choice1: "Bereavement",
        choice2: "Euphoria",
        choice3: "Nostalgia",
        choice4: "Anxiety",
        answer: 1
    },
    {
        question: "In technical terms, bereavement is the state or sense of loss while grief is the ______ to the loss.",
        choice1: "Acceptance",
        choice2: "Explanation",
        choice3: "Anticipation",
        choice4: "Reaction",
        answer: 4
    },

    // The role of Dialogue in conflict resolution
    {
        question: "______ is the opposite of peace.",
        choice1: "Harmony",
        choice2: "Serenity",
        choice3: "Tranquility",
        choice4: "Conflict",
        answer: 4
    },
    {
        question: "Unmanaged conflicts can lead to:",
        choice1: "Division",
        choice2: "Confusion",
        choice3: "Wickedness",
        choice4: "War",
        answer: 4
    },
    {
        question: "One of the causes of conflict except:",
        choice1: "Resource control",
        choice2: "Unmet demand",
        choice3: "Ethnicity",
        choice4: "Empathy",
        answer: 4
    },
    {
        question: "_____ is the act of bringing about or contesting a lawsuit.",
        choice1: "Mediation",
        choice2: "Collaboration",
        choice3: "Litigation",
        choice4: "Negotiation",
        answer: 3
    },
    {
        question: "______ involves the role of a third party to provide an enabling environment for the parties involved in a conflict to enter into dialogue.",
        choice1: "Arbitration",
        choice2: "Mediation",
        choice3: "Collaboration",
        choice4: "Alternative Dispute Resolution",
        answer: 2
    },
    {
        question: "Communication is said to be strategic when it?",
        choice1: "When it is sent via email.",
        choice2: "When it includes a company logo.",
        choice3: "When it produces the effect intended on the consumer of the communication.",
        choice4: "When it is very long and detailed.",
        answer: 3
    },
    {
        question: "The following is the pre principles that govern strategic communication:",
        choice1: "Appreciating the place of silence.",
        choice2: "Knowing the place of negotiation.",
        choice3: "Pre-empting possible counter argument.",
        choice4: "All of the above.",
        answer: 4
    },
    {
        question: "Grief is sometimes used interchangeably with?",
        choice1: "Bereavement.",
        choice2: "Euphoria.",
        choice3: "Nostalgia.",
        choice4: "Anxiety.",
        answer: 1
    },
    {
        question: "In technical terms, bereavement is the state or sense of loss while grief is the ______ to the loss.",
        choice1: "Acceptance.",
        choice2: "Explanation.",
        choice3: "Anticipation.",
        choice4: "Reaction.",
        answer: 4
    },
    {
        question: "The following are causes of grief except:",
        choice1: "Death.",
        choice2: "Separation.",
        choice3: "Accident.",
        choice4: "Celebration.",
        answer: 4
    },

    // The role of Dialogue in conflict resolution
    {
        question: "______ is the opposite of peace.",
        choice1: "Harmony.",
        choice2: "Serenity.",
        choice3: "Tranquility.",
        choice4: "Conflict.",
        answer: 4
    },
    {
        question: "Unmanaged conflicts can lead to:",
        choice1: "Division.",
        choice2: "Confusion.",
        choice3: "Wickedness.",
        choice4: "War.",
        answer: 4
    },
    {
        question: "One of the causes of conflict except:",
        choice1: "Resource control.",
        choice2: "Unmet demand.",
        choice3: "Ethnicity.",
        choice4: "Empathy.",
        answer: 4
    },
    {
        question: "_____ is the act of bringing about or contesting a lawsuit.",
        choice1: "Mediation.",
        choice2: "Collaboration.",
        choice3: "Litigation.",
        choice4: "Negotiation.",
        answer: 3
    },
    {
        question: "______ involves the role of a third party to provide an enabling environment for the parties involved in a conflict to enter into dialogue.",
        choice1: "Arbitration.",
        choice2: "Mediation.",
        choice3: "Collaboration.",
        choice4: "Alternative Dispute Resolution.",
        answer: 2
    },

    // Culture in a pluralist society
    {
        question: "The following are the characteristics of culture except:",
        choice1: "It's universal.",
        choice2: "Culture is not genetically transferred.",
        choice3: "Culture is dynamic.",
        choice4: "Culture is in-born.",
        answer: 4
    },
    {
        question: "Which of the following differentiates material culture from non-material culture?",
        choice1: "The material culture can be replaced and redesigned while the non-material cannot.",
        choice2: "The material culture cannot be replaced while the non-material can be replaced.",
        choice3: "There's no difference between the material and non-material culture.",
        choice4: "None of the above.",
        answer: 1
    },
    {
        question: "Culture was used interchangeably with ______ in the eighteenth century.",
        choice1: "Universalization.",
        choice2: "Enlightenment.",
        choice3: "Civilization.",
        choice4: "Education.",
        answer: 3
    },
    {
        question: "One of the features of Nigeria’s pluralism is:",
        choice1: "Land.",
        choice2: "Shrine.",
        choice3: "Language.",
        choice4: "Greeting.",
        answer: 3
    },
    {
        question: "_____ is a society of many nations, languages, and diverse beliefs and thoughts.",
        choice1: "Pluralist.",
        choice2: "Monolingual.",
        choice3: "Monolithic.",
        choice4: "Global.",
        answer: 1
    },
    {
        question: "______ society is a group of people with common territory, interaction, and culture.",
        choice1: "Monolingual.",
        choice2: "Monolithic.",
        choice3: "Monopoly.",
        choice4: "Pluralist.",
        answer: 4
    },

    // Masquerade and the masquerade
    {
        question: "The masquerade for hunters is known as:",
        choice1: "Igunnuko.",
        choice2: "Epa.",
        choice3: "Agemo.",
        choice4: "Layewu.",
        answer: 2
    },
    {
        question: "Which masquerade is referred to as the foolish masquerade?",
        choice1: "Egungun.",
        choice2: "Agemo.",
        choice3: "Elewe.",
        choice4: "Igunnuko.",
        answer: 3
    },
    {
        question: "How does Igunnuko collect his gift?",
        choice1: "Through a box.",
        choice2: "Through Atokun.",
        choice3: "Through the chief priest.",
        choice4: "By his hand.",
        answer: 2
    },
    {
        question: "______ is a person responsible for seeing to the organization and management of a festival.",
        choice1: "King.",
        choice2: "Chief priest.",
        choice3: "Producer.",
        choice4: "Entrepreneur.",
        answer: 2
    },
    {
        question: "_____ is the masquerade for children.",
        choice1: "Ara orun.",
        choice2: "Egungun Alare.",
        choice3: "Egungun Olore.",
        choice4: "Tombolo.",
        answer: 3
    },
    {
        question: "In some cultural contexts, crime is viewed as a violation of?",
        choice1: "Only laws.",
        choice2: "Moral values and societal norms.",
        choice3: "Political ideologies.",
        choice4: "Religious institutions only.",
        answer: 2
    },
    {
        question: "Which of the following best describes the role of punishment in traditional African societies?",
        choice1: "Punishment is intended solely for deterrence.",
        choice2: "It aims at restoring social harmony and balance.",
        choice3: "It is imposed to serve as revenge for victims.",
        choice4: "Punishment is considered unnecessary in African cultures.",
        answer: 2
    },
    {
        question: "Restorative justice in cultural contexts focuses on:",
        choice1: "Rehabilitation of offenders.",
        choice2: "Reconciliation between offenders and victims.",
        choice3: "Establishing the supremacy of the law.",
        choice4: "Punishing offenders harshly.",
        answer: 2
    },
    {
        question: "What term is used for the crime of breaking social taboos in cultural contexts?",
        choice1: "Misbehavior.",
        choice2: "Sacrilege.",
        choice3: "Breach of decorum.",
        choice4: "Insubordination.",
        answer: 2
    },
    {
        question: "An example of punishment in some cultural societies is:",
        choice1: "Imprisonment.",
        choice2: "Exile or banishment.",
        choice3: "Probation.",
        choice4: "Fines payable to the government.",
        answer: 2
    },

    // Human Rights and Cultural Relativism
    {
        question: "Cultural relativism implies that human rights should be:",
        choice1: "Applied universally, regardless of culture.",
        choice2: "Interpreted within the context of each culture.",
        choice3: "Revised completely to suit modern society.",
        choice4: "Applied only to economically advanced nations.",
        answer: 2
    },
    {
        question: "Which of the following is often debated as a human rights violation in some cultures?",
        choice1: "Freedom of speech.",
        choice2: "Harmful traditional practices like female genital mutilation.",
        choice3: "Taxation policies.",
        choice4: "Modern education systems.",
        answer: 2
    },
    {
        question: "A challenge of cultural relativism to human rights is:",
        choice1: "Difficulty in global acceptance of common laws.",
        choice2: "Overreliance on technology.",
        choice3: "Cultural erosion due to globalization.",
        choice4: "The lack of legal institutions.",
        answer: 1
    },
    {
        question: "Which principle aligns with universal human rights?",
        choice1: "Prioritizing cultural traditions over individual rights.",
        choice2: "Balancing cultural practices with human dignity.",
        choice3: "Rejecting all traditional practices.",
        choice4: "Permitting total freedom for all individuals.",
        answer: 2
    },
    {
        question: "The Universal Declaration of Human Rights was adopted by the United Nations in:",
        choice1: "1945.",
        choice2: "1948.",
        choice3: "1950.",
        choice4: "1951.",
        answer: 2
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
