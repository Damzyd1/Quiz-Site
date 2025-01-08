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
        question: "What is the primary purpose of dialogue in conflict resolution?",
        choice1: "To impose one party's opinion.",
        choice2: "To foster mutual understanding.",
        choice3: "To end all communication.",
        choice4: "To escalate conflict.",
        answer: "To foster mutual understanding.",
        rationale: "Dialogue aims to build understanding between conflicting parties to reach peaceful resolutions."
    },
    {
        question: "Which of the following is a key feature of effective dialogue?",
        choice1: "Listening actively.",
        choice2: "Interrupting frequently.",
        choice3: "Assuming superiority.",
        choice4: "Criticizing harshly.",
        answer: "Listening actively.",
        rationale: "Active listening ensures that each party feels heard and respected, fostering a productive conversation."
    },
    {
        question: "Dialogue is most effective when it is:",
        choice1: "One-sided.",
        choice2: "Neutral and inclusive.",
        choice3: "Aggressive.",
        choice4: "Limited to one meeting.",
        answer: "Neutral and inclusive.",
        rationale: "Neutrality and inclusivity help all parties feel equally valued, promoting fair discussions."
    },
    {
        question: "Which of these is a barrier to successful dialogue?",
        choice1: "Empathy.",
        choice2: "Cultural bias.",
        choice3: "Mutual respect.",
        choice4: "Open-mindedness.",
        answer: "Cultural bias.",
        rationale: "Cultural bias can distort understanding and lead to mistrust, hindering effective dialogue."
    },
    {
        question: "What type of communication is dialogue?",
        choice1: "One-way.",
        choice2: "Two-way.",
        choice3: "Multi-way.",
        choice4: "No communication at all.",
        answer: "Two-way.",
        rationale: "Dialogue requires two-way communication, where all parties share and listen actively."
    },
    {
        question: "Which is NOT a benefit of dialogue?",
        choice1: "Building trust.",
        choice2: "Encouraging cooperation.",
        choice3: "Resolving misunderstandings.",
        choice4: "Promoting division.",
        answer: "Promoting division.",
        rationale: "Dialogue promotes unity, not division, by addressing misunderstandings and building trust."
    },
    {
        question: "Dialogue is crucial in which of these processes?",
        choice1: "Escalating conflict.",
        choice2: "Negotiating peace agreements.",
        choice3: "Avoiding communication.",
        choice4: "Withholding information.",
        answer: "Negotiating peace agreements.",
        rationale: "Dialogue facilitates discussions that lead to mutual agreements in peace negotiations."
    },
    {
        question: "The success of dialogue depends on:",
        choice1: "Effective communication skills.",
        choice2: "Using threats.",
        choice3: "Avoiding difficult topics.",
        choice4: "Dominating the conversation.",
        answer: "Effective communication skills.",
        rationale: "Good communication skills, such as clarity and empathy, are essential for successful dialogue."
    },
    {
        question: "Which is a principle of dialogue?",
        choice1: "Winning arguments.",
        choice2: "Respecting diverse perspectives.",
        choice3: "Silencing others.",
        choice4: "Imposing views.",
        answer: "Respecting diverse perspectives.",
        rationale: "Dialogue requires openness to diverse opinions to find common ground and mutual respect."
    },
    {
        question: "What is the ultimate goal of dialogue?",
        choice1: "Creating misunderstandings.",
        choice2: "Fostering shared solutions.",
        choice3: "Breaking communication.",
        choice4: "Prolonging disputes.",
        answer: "Fostering shared solutions.",
        rationale: "Dialogue aims to create solutions that satisfy the needs of all parties involved."
    },
    {
        question: "What is the best definition of peace?",
        choice1: "The absence of war.",
        choice2: "A state of harmony and mutual understanding.",
        choice3: "A temporary ceasefire.",
        choice4: "A forced agreement between nations.",
        answer: "A state of harmony and mutual understanding.",
        rationale: "Peace is more than the absence of conflict; it involves sustained harmony and cooperation among groups or nations."
    },
    {
        question: "Which of the following is NOT a component of security?",
        choice1: "Economic stability.",
        choice2: "Access to basic needs.",
        choice3: "Persistent conflict.",
        choice4: "Political stability.",
        answer: "Persistent conflict.",
        rationale: "Security thrives on stability, not ongoing conflicts, which undermine both peace and safety."
    },
    {
        question: "What is the relationship between peace and security?",
        choice1: "They are unrelated concepts.",
        choice2: "Peace leads to security, and security supports peace.",
        choice3: "Security is irrelevant in times of peace.",
        choice4: "Peace and security cannot coexist.",
        answer: "Peace leads to security, and security supports peace.",
        rationale: "The two are interconnected, with each reinforcing the other for sustained societal harmony."
    },
    {
        question: "Which of these is a global threat to peace and security?",
        choice1: "International cooperation.",
        choice2: "Terrorism and armed conflict.",
        choice3: "Trade agreements.",
        choice4: "Cultural exchanges.",
        answer: "Terrorism and armed conflict.",
        rationale: "Such threats destabilize regions and create insecurity, undermining peace globally."
    },
    {
        question: "What is the primary goal of international peacekeeping efforts?",
        choice1: "To enforce laws without consultation.",
        choice2: "To foster dialogue and resolve conflicts.",
        choice3: "To avoid communication with local leaders.",
        choice4: "To ignore ongoing violence.",
        answer: "To foster dialogue and resolve conflicts.",
        rationale: "Peacekeeping aims to mediate disputes and build lasting resolutions to conflicts."
    },
    {
        question: "Which of the following contributes to long-lasting peace?",
        choice1: "Addressing root causes of conflict.",
        choice2: "Temporary ceasefires.",
        choice3: "Imposing strict military control.",
        choice4: "Restricting freedoms.",
        answer: "Addressing root causes of conflict.",
        rationale: "Addressing underlying issues ensures that peace is sustainable, not temporary."
    },
    {
        question: "What does 'human security' prioritize?",
        choice1: "Protection of state boundaries.",
        choice2: "Safety and well-being of individuals.",
        choice3: "Increasing military power.",
        choice4: "Ignoring social development.",
        answer: "Safety and well-being of individuals.",
        rationale: "Human security focuses on people's protection from threats to their safety and livelihoods."
    },
    {
        question: "Which organization is most recognized for promoting global peace?",
        choice1: "World Health Organization (WHO).",
        choice2: "United Nations (UN).",
        choice3: "International Olympic Committee.",
        choice4: "World Trade Organization (WTO).",
        answer: "United Nations (UN).",
        rationale: "The UN plays a central role in resolving international conflicts and fostering global peace."
    },
    {
        question: "Why is education essential to peace and security?",
        choice1: "It promotes economic disparity.",
        choice2: "It fosters understanding and reduces ignorance.",
        choice3: "It leads to more conflict.",
        choice4: "It discourages dialogue.",
        answer: "It fosters understanding and reduces ignorance.",
        rationale: "Education promotes critical thinking, tolerance, and understanding, reducing conflict triggers."
    },
    {
        question: "Which term refers to resolving conflicts without violence?",
        choice1: "Peaceful resolution.",
        choice2: "Aggressive diplomacy.",
        choice3: "Military intervention.",
        choice4: "Economic sanctions.",
        answer: "Peaceful resolution.",
        rationale: "This approach seeks to settle disputes through dialogue and compromise, avoiding violence."
    },
    {
        question: "What is the primary purpose of announcing grief?",
        choice1: "To draw attention.",
        choice2: "To express loss and seek support.",
        choice3: "To celebrate an event.",
        choice4: "To create social media content.",
        answer: "To express loss and seek support.",
        rationale: "Announcing grief helps convey a sense of loss and invites emotional and practical support from others."
    },
    {
        question: "Which of the following is the most appropriate way to announce grief?",
        choice1: "Through an emotional outburst in public.",
        choice2: "Using clear and respectful communication.",
        choice3: "By avoiding communication altogether.",
        choice4: "By exaggerating the circumstances.",
        answer: "Using clear and respectful communication.",
        rationale: "Clear communication ensures that the message is understood without causing unnecessary distress or confusion."
    },
    {
        question: "Why is it important to choose the right words when announcing grief?",
        choice1: "To avoid hurting others’ feelings.",
        choice2: "To sound poetic.",
        choice3: "To make the announcement vague.",
        choice4: "To shift focus to unrelated issues.",
        answer: "To avoid hurting others’ feelings.",
        rationale: "Carefully chosen words can minimize emotional pain and show sensitivity toward the audience."
    },
    {
        question: "Who should ideally be informed first about grief?",
        choice1: "Random acquaintances.",
        choice2: "Immediate family and close friends.",
        choice3: "Work colleagues.",
        choice4: "Social media followers.",
        answer: "Immediate family and close friends.",
        rationale: "Close relationships require priority communication, as these individuals are directly affected by the loss."
    },
    {
        question: "Which of the following is a cultural consideration when announcing grief?",
        choice1: "Using humor in the announcement.",
        choice2: "Following traditions and protocols.",
        choice3: "Making it as brief as possible.",
        choice4: "Ignoring cultural practices.",
        answer: "Following traditions and protocols.",
        rationale: "Respecting cultural norms shows sensitivity and ensures the announcement aligns with societal expectations."
    },
    {
        question: "What is a key benefit of announcing grief in a timely manner?",
        choice1: "It prevents misunderstandings.",
        choice2: "It avoids dealing with emotions.",
        choice3: "It allows for isolation.",
        choice4: "It creates drama.",
        answer: "It prevents misunderstandings.",
        rationale: "Timely announcements provide clarity and ensure that those who need to know are informed promptly."
    },
    {
        question: "Communication is said to be strategic when it?",
        choice1: "When it is sent via email.",
        choice2: "When it includes a company logo.",
        choice3: "When it produces the effect intended on the consumer of the communication",
        choice4: "When it is very long and detailed.",
        answer: "When it produces the effect intended on the consumer of the communication",
        rationale: "Strategic communication focuses on achieving specific outcomes by effectively influencing the target audience."
    },
    {
        question: "The following is the pre principles that govern strategic communication:",
        choice1: "Appreciating the place of silence",
        choice2: "Knowing the place of negotiation",
        choice3: "Pre-empting possible counter arguments",
        choice4: "All of the above",
        answer: "All of the above",
        rationale: "Each principle contributes to the effective delivery of messages in strategic communication."
    },
    {
        question: "Grief is sometimes used interchangeably with?",
        choice1: "Bereavement",
        choice2: "Euphoria",
        choice3: "Nostalgia",
        choice4: "Anxiety",
        answer: "Bereavement",
        rationale: "Bereavement refers to the state of loss, often associated with the death of a loved one, making it closely related to grief."
    },
    {
        question: "In technical terms, bereavement is the state or sense of loss while grief is the ______ to the loss.",
        choice1: "Acceptance",
        choice2: "Explanation",
        choice3: "Anticipation",
        choice4: "Reaction",
        answer: "Reaction",
        rationale: "Grief refers to the emotional response to a loss, while bereavement defines the state of experiencing the loss."
    },
    {
        question: "The order of the grief phases given by Kubler-Ross are as follows:",
        choice1: "Denial, Bargaining, Anger, Depression, Acceptance",
        choice2: "Anger, Depression, Denial, Bargaining and Acceptance",
        choice3: "Denial, Anger, Bargaining, Depression and Acceptance",
        choice4: "Denial, Acceptance, Anger, Bargaining, and Depression",
        answer: "Denial, Anger, Bargaining, Depression and Acceptance",
        rationale: "These are the five stages of grief as proposed by Elisabeth Kubler-Ross, following this specific order."
    },
    {
        question: "The following are causes of grief except:",
        choice1: "Death",
        choice2: "Separation",
        choice3: "Accident",
        choice4: "Celebration",
        answer: "Celebration",
        rationale: "Celebration is typically associated with joy rather than loss or sadness, making it an exception."
    },
    {
        question: "______ is the opposite of peace.",
        choice1: "Harmony",
        choice2: "Serenity",
        choice3: "Tranquility",
        choice4: "Conflict",
        answer: "Conflict",
        rationale: "Conflict is the absence or opposite of peace, as it involves discord and disputes between individuals or groups."
    },
    {
        question: "Unmanaged conflicts can lead to:",
        choice1: "Division",
        choice2: "Confusion",
        choice3: "Wickedness",
        choice4: "War",
        answer: "War",
        rationale: "When conflicts escalate and remain unresolved, they can lead to violent outcomes such as war."
    },
    {
        question: "Dialogue is a _____ communication.",
        choice1: "Two-way",
        choice2: "Three-way",
        choice3: "One-way",
        choice4: "No-way",
        answer: "Two-way",
        rationale: "Dialogue requires an exchange of ideas or communication between two parties, making it inherently two-way."
    },
    {
        question: "One of the causes of conflict except:",
        choice1: "Resource control",
        choice2: "Unmet demand",
        choice3: "Ethnicity",
        choice4: "Empathy",
        answer: "Empathy",
        rationale: "Empathy involves understanding and sharing others' feelings, which reduces conflict rather than causing it."
    },
    {
        question: "_____ is the act of bringing about or contesting a lawsuit.",
        choice1: "Mediation",
        choice2: "Collaboration",
        choice3: "Litigation",
        choice4: "Negotiation",
        answer: "Litigation",
        rationale: "Litigation involves resolving disputes in court, typically through legal action or lawsuits."
    },
    {
        question: "______ involves the role of a third party to provide an enabling environment for the parties involved in a conflict to enter into dialogue.",
        choice1: "Arbitration",
        choice2: "Mediation",
        choice3: "Collaboration",
        choice4: "Alternative Dispute Resolution",
        answer: "Mediation",
        rationale: "Mediation allows a neutral third party to help conflicting parties negotiate and reach an agreement."
    },

    // Culture in a pluralist society
    {
        question: "The following are the characteristics of culture except:",
        choice1: "It's universal",
        choice2: "Culture is not genetically transferred",
        choice3: "Culture is dynamic",
        choice4: "Culture is in-born",
        answer: "Culture is in-born",
        rationale: "Culture is learned through social interaction, making it not in-born but acquired over time."
    },
    {
        question: "Which of the following differentiates material culture from non-material culture?",
        choice1: "The material culture can be replaced and redesigned while the non-material cannot.",
        choice2: "The material culture cannot be replaced while the non-material can be replaced.",
        choice3: "There's no difference between the material and non-material culture.",
        choice4: "None of the above.",
        answer: "The material culture can be replaced and redesigned while the non-material cannot.",
        rationale: "Material culture includes physical objects, which can be replaced, whereas non-material culture, like beliefs, cannot."
    },
    {
        question: "Culture was used interchangeably with ______ in the eighteenth century.",
        choice1: "Universalization",
        choice2: "Enlightenment",
        choice3: "Civilization",
        choice4: "Education",
        answer: "Civilization",
        rationale: "In the eighteenth century, culture and civilization were often used synonymously to refer to societal progress."
    },
    {
        question: "One of the features of Nigeria’s pluralism is:",
        choice1: "Land",
        choice2: "Shrine",
        choice3: "Language",
        choice4: "Greeting",
        answer: "Language",
        rationale: "Nigeria is characterized by its diverse languages, reflecting its pluralist nature."
    },
    {
        question: "_____ is a society of many nations, languages, and diverse beliefs and thoughts.",
        choice1: "Pluralist",
        choice2: "Monolingual",
        choice3: "Monolithic",
        choice4: "Global",
        answer: "Pluralist",
        rationale: "A pluralist society embraces diversity in culture, language, and beliefs, as opposed to being uniform."
    },
    {
        question: "______ society is a group of people with common territory, interaction, and culture.",
        choice1: "Monolingual",
        choice2: "Monolithic",
        choice3: "Monopoly",
        choice4: "Pluralist",
        answer: "Pluralist",
        rationale: "A pluralist society reflects coexistence among different cultures and groups within a shared territory."
    },

    // Masquerade and the masquerade
    {
        question: "The masquerade for hunters is known as:",
        choice1: "Igunnuko",
        choice2: "Epa",
        choice3: "Agemo",
        choice4: "Layewu",
        answer: "Epa",
        rationale: "Epa masquerades are traditionally associated with hunters in Yoruba culture."
    },
    {
        question: "Which masquerade is referred to as the foolish masquerade?",
        choice1: "Egungun",
        choice2: "Agemo",
        choice3: "Elewe",
        choice4: "Igunnuko",
        answer: "Elewe",
        rationale: "The Elewe masquerade is humorously referred to as the foolish masquerade in some contexts."
    },
    {
        question: "How does Igunnuko collect his gift?",
        choice1: "Through a box",
        choice2: "Through Atokun",
        choice3: "Through the chief priest",
        choice4: "By his hand",
        answer: "Through Atokun",
        rationale: "Igunnuko masquerades use Atokun (a long stick) to collect their gifts as part of the tradition."
    },
    {
        question: "______ is a person responsible for seeing to the organization and management of a festival.",
        choice1: "King",
        choice2: "Chief priest",
        choice3: "Producer",
        choice4: "Entrepreneur",
        answer: "Chief priest",
        rationale: "The chief priest often oversees traditional festivals, including their organization and rituals."
    },
    {
        question: "_____ is the masquerade for children.",
        choice1: "Ara orun",
        choice2: "Egungun Alare",
        choice3: "Egungun Olore",
        choice4: "Tombolo",
        answer: "Egungun Olore",
        rationale: "Egungun Olore is a masquerade that entertains children during festivals."
    },
    {
        question: "The youngest of all masquerades is referred to as:",
        choice1: "Alagbaa",
        choice2: "Oloiko",
        choice3: "Alapinni",
        choice4: "Olojowon",
        answer: "Olojowon",
        rationale: "Olojowon is regarded as the youngest among the Yoruba masquerades due to its unique symbolism."
    },
    {
        question: "In some cultural contexts, crime is viewed as a violation of?",
        choice1: "Only laws.",
        choice2: "Moral values and societal norms.",
        choice3: "Political ideologies.",
        choice4: "Religious institutions only.",
        answer: "Moral values and societal norms.",
        rationale: "In many cultures, crime is not just a breach of law but also a violation of the collective moral values and norms that sustain social harmony."
    },
    {
        question: "Which of the following best describes the role of punishment in traditional African societies?",
        choice1: "Punishment is intended solely for deterrence.",
        choice2: "It aims at restoring social harmony and balance.",
        choice3: "It is imposed to serve as revenge for victims.",
        choice4: "Punishment is considered unnecessary in African cultures.",
        answer: "It aims at restoring social harmony and balance.",
        rationale: "In traditional African societies, the purpose of punishment often emphasizes reconciliation and the restoration of societal balance over mere deterrence or revenge."
    },
    {
        question: "Restorative justice in cultural contexts focuses on:",
        choice1: "Rehabilitation of offenders.",
        choice2: "Reconciliation between offenders and victims.",
        choice3: "Establishing the supremacy of the law.",
        choice4: "Punishing offenders harshly.",
        answer: "Reconciliation between offenders and victims.",
        rationale: "Restorative justice prioritizes healing the relationship between offenders and victims rather than focusing solely on punishment or legal principles."
    },
    {
        question: "What term is used for the crime of breaking social taboos in cultural contexts?",
        choice1: "Misbehavior.",
        choice2: "Sacrilege.",
        choice3: "Breach of decorum.",
        choice4: "Insubordination.",
        answer: "Sacrilege.",
        rationale: "Sacrilege refers to violations of sacred or highly valued societal norms, often carrying spiritual or cultural significance in many societies."
    },
    {
        question: "An example of punishment in some cultural societies is:",
        choice1: "Imprisonment.",
        choice2: "Exile or banishment.",
        choice3: "Probation.",
        choice4: "Fines payable to the government.",
        answer: "Exile or banishment.",
        rationale: "Exile or banishment is a traditional form of punishment used in many cultural societies to remove disruptive individuals and maintain social order."
    },

    // Human Rights and Cultural Relativism
    {
        question: "Cultural relativism implies that human rights should be:",
        choice1: "Applied universally, regardless of culture.",
        choice2: "Interpreted within the context of each culture.",
        choice3: "Revised completely to suit modern society.",
        choice4: "Applied only to economically advanced nations.",
        answer: "Interpreted within the context of each culture.",
        rationale: "Cultural relativism suggests that human rights should account for cultural diversity and be interpreted in ways that align with specific cultural contexts."
    },
    {
        question: "Which of the following is often debated as a human rights violation in some cultures?",
        choice1: "Freedom of speech.",
        choice2: "Harmful traditional practices like female genital mutilation.",
        choice3: "Taxation policies.",
        choice4: "Modern education systems.",
        answer: "Harmful traditional practices like female genital mutilation.",
        rationale: "Practices such as female genital mutilation are considered harmful and violate universal human rights, sparking debates about cultural relativism."
    },
    {
        question: "A challenge of cultural relativism to human rights is:",
        choice1: "Difficulty in global acceptance of common laws.",
        choice2: "Overreliance on technology.",
        choice3: "Cultural erosion due to globalization.",
        choice4: "The lack of legal institutions.",
        answer: "Difficulty in global acceptance of common laws.",
        rationale: "Cultural relativism often makes it challenging to implement universal human rights due to differing cultural interpretations and practices."
    },
    {
        question: "Which principle aligns with universal human rights?",
        choice1: "Prioritizing cultural traditions over individual rights.",
        choice2: "Balancing cultural practices with human dignity.",
        choice3: "Rejecting all traditional practices.",
        choice4: "Permitting total freedom for all individuals.",
        answer: "Balancing cultural practices with human dignity.",
        rationale: "Universal human rights advocate for respecting cultural diversity while ensuring that practices uphold human dignity."
    },
    {
        question: "The Universal Declaration of Human Rights was adopted by the United Nations in:",
        choice1: "1945.",
        choice2: "1948.",
        choice3: "1950.",
        choice4: "1951.",
        answer: "1948.",
        rationale: "The Universal Declaration of Human Rights, which established fundamental human rights principles, was adopted by the United Nations on December 10, 1948."
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
