window.addEventListener("popstate", function(event){
  history.pushState(null, "", window.location.href);
});

document.addEventListener("keydown", e => {
  if((e.ctrlKey || e.metaKey) &&  e.key.toLowerCase() === 'r'){
    e.preventDefault();
  }
});

const topic = "CSS 311: Powered by DamzyNextGen";
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
        question: "What is the main difference between a pre-interrogation interview and an interrogation?",
        choice1: "Pre-interrogation involves coercion, while interrogation does not.",
        choice2: "Pre-interrogation focuses on gathering information, while interrogation aims for confessions.",
        choice3: "Pre-interrogation is informal, while interrogation is legally binding.",
        choice4: "Pre-interrogation assesses physical evidence, while interrogation assesses suspects.",
        answer: 2,
        rationale: "Pre-interrogation interviews are designed to collect information, whereas interrogations focus on obtaining confessions."
    },
    {
        question: "During a pre-interrogation interview, what type of questions is most effective?",
        choice1: "Closed-ended questions to confirm facts",
        choice2: "Leading questions to prompt specific answers",
        choice3: "Open-ended questions to observe behavioral cues",
        choice4: "Yes/no questions for quick responses",
        answer: 3,
        rationale: "Open-ended questions allow suspects to speak freely, enabling investigators to analyze behavioral cues."
    },
    {
        question: "How does rapport-building benefit the pre-interrogation process?",
        choice1: "It encourages suspects to confess immediately.",
        choice2: "It reduces resistance during interrogation.",
        choice3: "It eliminates the need for interrogation.",
        choice4: "It confirms the suspect’s guilt.",
        answer: 2,
        rationale: "Building rapport makes suspects more comfortable and less resistant during subsequent interrogation phases."
    },
    {
        question: "What psychological tactic is often used during pre-interrogation interviews?",
        choice1: "Direct accusations",
        choice2: "Sympathetic questioning",
        choice3: "Physical intimidation",
        choice4: "Threat of legal consequences",
        answer: 2,
        rationale: "Sympathetic questioning helps build trust and encourages suspects to open up."
    },
    {
        question: "Which of the following is not a goal of a pre-interrogation interview?",
        choice1: "Gathering biographical information",
        choice2: "Evaluating the suspect’s credibility",
        choice3: "Analyzing evidence with the suspect",
        choice4: "Establishing rapport",
        answer: 3,
        rationale: "Evidence analysis typically occurs during formal interrogation, not in pre-interrogation interviews."
    },
    {
        question: "What role does cultural sensitivity play in pre-interrogation interviews?",
        choice1: "It allows the interviewer to ignore inconsistencies.",
        choice2: "It prevents ethical violations during questioning.",
        choice3: "It ensures the suspect fully understands the process.",
        choice4: "It helps in building rapport with diverse suspects.",
        answer: 4,
        rationale: "Understanding cultural differences enhances rapport-building and reduces misunderstandings."
    },
    {
        question: "Why is active listening critical during pre-interrogation?",
        choice1: "It allows investigators to dominate the conversation.",
        choice2: "It prevents the suspect from detecting deception.",
        choice3: "It reveals inconsistencies in the suspect’s story.",
        choice4: "It helps minimize legal risks for the investigator.",
        answer: 3,
        rationale: "Active listening aids in identifying contradictions or omissions in the suspect’s narrative."
    },
    {
        question: "What should an investigator avoid during a pre-interrogation interview?",
        choice1: "Taking detailed notes",
        choice2: "Building rapport",
        choice3: "Presenting evidence prematurely",
        choice4: "Assessing behavioral cues",
        answer: 3,
        rationale: "Presenting evidence too early can lead the suspect to tailor their responses to fit the evidence."
    },
    {
        question: "Why is it difficult to rely on behavioral cues for detecting deception?",
        choice1: "They are scientifically proven to be unreliable.",
        choice2: "They vary widely among individuals and cultures.",
        choice3: "They require advanced technology for observation.",
        choice4: "They only apply to seasoned criminals.",
        answer: 2,
        rationale: "Behavioral cues are subjective and can differ based on cultural and individual factors, making them unreliable."
    },
    {
        question: "What does the truth-default theory propose about human behavior?",
        choice1: "Humans are naturally deceptive.",
        choice2: "People default to trusting others unless evidence suggests otherwise.",
        choice3: "Deceptive individuals are easily recognizable.",
        choice4: "Detecting deception requires advanced training.",
        answer: 2,
        rationale: "The truth-default theory suggests that humans instinctively trust others until deception is suspected."
    },
    {
        question: "How does deception affect the fairness of criminal trials?",
        choice1: "It ensures the suspect receives fair treatment.",
        choice2: "It hinders the ability to establish guilt beyond reasonable doubt.",
        choice3: "It always leads to wrongful convictions.",
        choice4: "It simplifies the investigative process.",
        answer: 2,
        rationale: "Deception can cloud evidence and testimonies, making it difficult to determine guilt with certainty."
    },
    {
        question: "Why is training in deception detection important for law enforcement officers?",
        choice1: "To ensure suspects cannot lie during interrogation",
        choice2: "To improve their ability to identify truthful accounts",
        choice3: "To prevent coercive interrogation practices",
        choice4: "To enhance their courtroom testimony",
        answer: 2,
        rationale: "Deception detection training enables officers to discern truthful statements more accurately."
    },
    {
        question: "What is the primary psychological burden of lying?",
        choice1: "Physical exhaustion",
        choice2: "Cognitive overload",
        choice3: "Emotional numbness",
        choice4: "Increased empathy",
        answer: 2,
        rationale: "Lying requires cognitive effort to fabricate and maintain false information, leading to cognitive overload."
    },
    {
        question: "How does cultural bias potentially impact deception detection techniques?",
        choice1: "It improves the accuracy of behavioral analysis.",
        choice2: "It leads to misinterpretation of body language cues.",
        choice3: "It prevents the use of technology like polygraphs.",
        choice4: "It increases the reliability of interrogation techniques.",
        answer: 2,
        rationale: "Cultural differences in behavior and expression can lead to incorrect assumptions in detecting deception."
    },
    {
        question: "What is the primary purpose of the Miranda Warning?",
        choice1: "To inform suspects of their legal rights.",
        choice2: "To prevent the police from conducting interrogations.",
        choice3: "To ensure suspects are detained lawfully.",
        choice4: "To facilitate faster confessions.",
        answer: 1,
        rationale: "The Miranda Warning ensures suspects are aware of their constitutional rights during custodial interrogations."
    },
    {
        question: "When must a Miranda Warning be given?",
        choice1: "During an arrest",
        choice2: "Before an interrogation begins",
        choice3: "After a suspect confesses",
        choice4: "Only when the suspect requests it",
        answer: 2,
        rationale: "Miranda rights must be read before questioning begins if the suspect is in custody to ensure compliance with the Fifth Amendment."
    },
    {
        question: "Which right is not included in the Miranda Warning?",
        choice1: "The right to remain silent",
        choice2: "The right to an attorney",
        choice3: "The right to a fair trial",
        choice4: "The right to have an attorney appointed if unable to afford one",
        answer: 3,
        rationale: "The right to a fair trial is a constitutional right but is not part of the Miranda Warning."
    },
    {
        question: "What happens if a suspect waives their Miranda rights?",
        choice1: "Their statements can be used against them in court.",
        choice2: "The police can interrogate them without restrictions.",
        choice3: "They lose all legal protections.",
        choice4: "They cannot request an attorney later.",
        answer: 1,
        rationale: "A waiver of Miranda rights means the suspect’s statements can be admissible in court, provided the waiver was made voluntarily and knowingly."
    },
    {
        question: "Why might police delay giving the Miranda Warning?",
        choice1: "To build rapport with the suspect",
        choice2: "To avoid self-incrimination",
        choice3: "To gather evidence before the suspect requests a lawyer",
        choice4: "To increase the likelihood of a truthful confession",
        answer: 3,
        rationale: "Police might delay reading Miranda rights to collect evidence during informal questioning before the suspect invokes their right to silence."
    },
    {
        question: "If a suspect invokes their right to silence during questioning, what must the police do?",
        choice1: "Stop questioning immediately.",
        choice2: "Continue questioning to confirm their intention.",
        choice3: "Proceed with questions unrelated to the crime.",
        choice4: "Obtain written confirmation of the suspect’s decision.",
        answer: 1,
        rationale: "Once a suspect invokes their right to silence, law enforcement must cease all questioning under Miranda rules."
    },
    {
        question: "Which of the following can render a Miranda waiver invalid?",
        choice1: "The suspect is intoxicated.",
        choice2: "The suspect changes their mind after waiving their rights.",
        choice3: "The police provide legal advice.",
        choice4: "The suspect refuses to sign a written waiver.",
        answer: 1,
        rationale: "A waiver must be made voluntarily, knowingly, and intelligently; intoxication can impair a suspect’s understanding of their rights."
    },
    {
        question: "What common psychological misconception leads innocent suspects to cooperate without legal counsel?",
        choice1: "That silence implies guilt",
        choice2: "That lawyers complicate the process",
        choice3: "That police will stop the interrogation",
        choice4: "That waiving rights is mandatory",
        answer: 1,
        rationale: "Many suspects falsely believe remaining silent will make them look guilty, prompting them to speak without legal counsel."
    },
    {
        question: "Why might social pressure influence innocent suspects to waive their rights?",
        choice1: "Fear of being labeled uncooperative",
        choice2: "Desire to please law enforcement",
        choice3: "Avoidance of confrontation",
        choice4: "All of the above",
        answer: 4,
        rationale: "Social and psychological pressures can compel suspects to waive their rights, even when it is against their best interest."
    },
    {
        question: "Which of the following best describes the underlying principle of psychoanalytic theory in relation to confessions?",
        choice1: "Conscious guilt resolution",
        choice2: "Unconscious conflict and stress relief",
        choice3: "Rational cost-benefit analysis",
        choice4: "Compliance with authority",
        answer: 2
    },
    {
        question: "A suspect confesses after experiencing recurring nightmares about the crime they committed. This is most aligned with:",
        choice1: "Decision-making perspective",
        choice2: "Social-psychological theory",
        choice3: "Psychoanalytic theory",
        choice4: "Cognitive-behavioural theory",
        answer: 3
    },
    {
        question: "A suspect is interrogated for hours but does not confess, only to break down emotionally and confess days later in a private setting. Which theory applies?",
        choice1: "Psychoanalytic theory",
        choice2: "Decision-making perspective",
        choice3: "Social-psychological theory",
        choice4: "Cognitive-behavioural theory",
        answer: 1
    },
    {
        question: "The decision-making perspective on confessions assumes that suspects:",
        choice1: "Confess under subconscious stress",
        choice2: "Rationally weigh the costs and benefits of confessing",
        choice3: "Succumb to intense external pressure",
        choice4: "Act out of fear of losing familial support",
        answer: 2
    },
    
    {
        question: "A teenager confesses to shoplifting after being told that confessing will 'show maturity and responsibility.' Which theory best explains this confession?",
        choice1: "Psychoanalytic theory",
        choice2: "Decision-making perspective",
        choice3: "Cognitive-behavioural theory",
        choice4: "Social-psychological theory",
        answer: 3
    },
    {
        question: "A suspect confesses because they are physically and emotionally exhausted after 48 hours of isolation. Which theory applies?",
        choice1: "Social-psychological theory",
        choice2: "Decision-making perspective",
        choice3: "Cognitive-behavioural theory",
        choice4: "Psychoanalytic theory",
        answer: 1
    },
    {
        question: "A suspect is offered leniency if they confess before their co-conspirator does. Their eventual confession reflects:",
        choice1: "Psychoanalytic theory",
        choice2: "Cognitive-behavioural theory",
        choice3: "Decision-making perspective",
        choice4: "Social-psychological theory",
        answer: 3
    },
    {
        question: "A mother confesses to a minor theft after realizing her silence could lead to her children’s suffering. This demonstrates:",
        choice1: "Social-psychological theory",
        choice2: "Cognitive-behavioural theory",
        choice3: "Decision-making perspective",
        choice4: "Psychoanalytic theory",
        answer: 2
    },
    {
        question: "Which theory would best explain a false confession elicited through manipulative questioning?",
        choice1: "Decision-making perspective",
        choice2: "Cognitive-behavioural theory",
        choice3: "Psychoanalytic theory",
        choice4: "Social-psychological theory",
        answer: 4
    },
    {
        question: "If a suspect’s confession is motivated by guilt and a subconscious need to restore moral balance, this aligns with:",
        choice1: "Decision-making perspective",
        choice2: "Psychoanalytic theory",
        choice3: "Social-psychological theory",
        choice4: "Cognitive-behavioural theory",
        answer: 2
    },
    {
        question: "Which theory offers the strongest explanation for confessions elicited under duress?",
        choice1: "Psychoanalytic theory",
        choice2: "Decision-making perspective",
        choice3: "Social-psychological theory",
        choice4: "Cognitive-behavioural theory",
        answer: 3
    },
    {
        question: "A suspect confesses to avoid legal battles and resolve the case quickly. This confession is best explained by:",
        choice1: "Psychoanalytic theory",
        choice2: "Social-psychological theory",
        choice3: "Decision-making perspective",
        choice4: "Cognitive-behavioural theory",
        answer: 3
    },
    {
        question: "Which of the following is a common strategy police use to delay issuing the Miranda warning?",
        choice1: "Misrepresenting the law",
        choice2: "Using non-custodial interviews",
        choice3: "Coercing a confession",
        choice4: "Offering leniency",
        answer: 2
    },
    {
        question: "A suspect voluntarily speaks to police at their home without being arrested or detained. This situation avoids Miranda warnings because:",
        choice1: "The suspect initiated the interaction",
        choice2: "The suspect is not in custody",
        choice3: "Police did not have probable cause",
        choice4: "The crime was not serious",
        answer: 2
    },
    {
        question: "Police conducting a two-step interrogation intentionally delay giving a Miranda warning until after a confession is obtained. This practice is known as:",
        choice1: "Non-custodial questioning",
        choice2: "The Reid Technique",
        choice3: "Question-first strategy",
        choice4: "Custodial coercion",
        answer: 3
    },
    {
        question: "Under the “public safety exception,” police may delay Miranda warnings when:",
        choice1: "The suspect is uncooperative",
        choice2: "Officers need to secure immediate evidence",
        choice3: "There is an imminent threat to public safety",
        choice4: "The interrogation is taking place in public",
        answer: 3
    },
    {
        question: "Which of the following techniques might police use to elicit incriminating statements without violating Miranda?",
        choice1: "Threatening the suspect with harsher penalties",
        choice2: "Engaging in casual conversation",
        choice3: "Conducting an intense interrogation",
        choice4: "Asking leading questions after the warning",
        answer: 2
    },
    {
        question: "In which of these scenarios is a Miranda warning not required?",
        choice1: "A suspect is questioned at the scene of a crime.",
        choice2: "A suspect is interrogated in custody.",
        choice3: "A suspect provides a written statement in custody.",
        choice4: "A suspect confesses during booking procedures.",
        answer: 1
    },
    {
        question: "For a suspect to waive their Miranda rights, the waiver must be:",
        choice1: "Voluntary, informed, and intelligent",
        choice2: "Coerced but documented",
        choice3: "Signed by a lawyer",
        choice4: "Verified by a judge",
        answer: 1
    },
    {
        question: "A juvenile suspect is unlikely to validly waive their Miranda rights if:",
        choice1: "They are questioned in the presence of a parent",
        choice2: "They lack the mental capacity to understand their rights",
        choice3: "They are interrogated in a school setting",
        choice4: "They initially decline to talk but later change their mind",
        answer: 2
    },
    {
        question: "In determining the validity of a Miranda waiver, courts consider:",
        choice1: "The suspect’s willingness to cooperate",
        choice2: "The suspect’s understanding of the rights they are waiving",
        choice3: "Whether the suspect has prior criminal history",
        choice4: "The severity of the alleged crime",
        answer: 2
    },
    {
        question: "An intoxicated suspect waives their Miranda rights and confesses. Courts are likely to:",
        choice1: "Accept the confession if the suspect showed some understanding of their rights",
        choice2: "Automatically dismiss the confession",
        choice3: "Require the suspect’s lawyer to validate the waiver",
        choice4: "Consider the confession voluntary regardless of intoxication",
        answer: 1
    },
    {
        question: "What factor is most critical in determining a suspect’s capacity to waive their Miranda rights?",
        choice1: "The seriousness of the crime",
        choice2: "The suspect’s mental state",
        choice3: "The suspect’s prior criminal record",
        choice4: "The length of the interrogation",
        answer: 2
    },
    {
        question: "A juvenile suspect is considered incapable of waiving their Miranda rights if they:",
        choice1: "Are under the age of 18",
        choice2: "Have an inadequate understanding of their rights",
        choice3: "Have been arrested for a violent crime",
        choice4: "Are alone without a parent or guardian present",
        answer: 2
    },
    {
        question: "In cases where the suspect is intoxicated, courts evaluate whether they can waive their Miranda rights by considering:",
        choice1: "The suspect's ability to understand the warnings and make an informed choice",
        choice2: "Whether the intoxication was voluntary or involuntary",
        choice3: "The suspect’s history with law enforcement",
        choice4: "How long the suspect has been intoxicated",
        answer: 1
    },
    {
        question: "Which of the following scenarios may lead to the invalidation of a Miranda waiver?",
        choice1: "The suspect was informed of their rights but did not immediately invoke them",
        choice2: "The suspect has a mental impairment affecting their ability to understand their rights",
        choice3: "The suspect is aware of the charges against them",
        choice4: "The suspect signs a waiver but does not confess immediately",
        answer: 2
    },
    {
        question: "A suspect with an intellectual disability may be presumed incapable of waiving their Miranda rights if:",
        choice1: "They fail to understand the warnings provided",
        choice2: "They sign the waiver in front of a witness",
        choice3: "They are questioned outside of a detention facility",
        choice4: "They are informed of their rights in their native language",
        answer: 1
    },
    {
        question: "What is the primary consideration in evaluating whether a suspect's waiver of Miranda rights is valid?",
        choice1: "Whether the suspect made an informed decision based on their knowledge and experience",
        choice2: "Whether the confession was voluntary",
        choice3: "Whether the suspect is eligible for parole",
        choice4: "Whether the waiver is written or verbal",
        answer: 1
    },
    {
        question: "For a waiver to be valid, it must be:",
        choice1: "Documented on paper only",
        choice2: "Made knowingly, voluntarily, and intelligently",
        choice3: "Done after the suspect has been arrested",
        choice4: "Done without a lawyer present",
        answer: 2
    },
    {
        question: "Which scenario best demonstrates an invalid Miranda waiver?",
        choice1: "A suspect with a mental health condition is informed of their rights and waives them",
        choice2: "A suspect who has been previously convicted of similar crimes waives their rights",
        choice3: "A suspect with an intellectual disability signs a waiver without fully understanding it",
        choice4: "A suspect is read their rights by a police officer and agrees to speak without a lawyer",
        answer: 3
    },
    {
        question: "If a suspect is unable to understand the Miranda warnings due to a language barrier, they may not effectively waive their rights unless:",
        choice1: "A qualified interpreter is provided",
        choice2: "They have a lawyer present to clarify their rights",
        choice3: "The officer speaks their language fluently",
        choice4: "They are informed in writing",
        answer: 1
    },
    {
        question: "Which factor is NOT a determinant of whether a suspect has the capacity to waive their Miranda rights?",
        choice1: "The length of the interrogation",
        choice2: "The emotional state of the suspect",
        choice3: "The presence of a lawyer during the waiver",
        choice4: "Whether the suspect has been previously arrested",
        answer: 4
    },
    {
        question: "If a suspect is under significant duress (e.g., being threatened with physical harm), their waiver of Miranda rights may be invalid because:",
        choice1: "The waiver was not voluntary",
        choice2: "The suspect lacked sufficient intelligence to understand their rights",
        choice3: "The suspect did not sign the waiver form",
        choice4: "The waiver was not signed by a lawyer",
        answer: 1
    },
    {
        question: "Which of the following best demonstrates a suspect having the capacity to waive their Miranda rights?",
        choice1: "A suspect signs a waiver without fully understanding the implications",
        choice2: "A suspect refuses to sign the waiver but agrees to talk to officers",
        choice3: "A suspect who has prior legal experience is read their rights and waives them knowingly",
        choice4: "A suspect who is under the influence of drugs agrees to waive their rights",
        answer: 3
    },
    {
        question: "A suspect waives their Miranda rights after being informed that they will be held in detention indefinitely. The waiver may be considered invalid if:",
        choice1: "The suspect felt coerced into making the waiver",
        choice2: "The suspect is later granted release on bail",
        choice3: "The officer did not clarify the detention length",
        choice4: "The waiver was not signed in front of a witness",
        answer: 1
    },
    {
        question: "To determine whether a suspect is capable of waiving their Miranda rights, courts will review:",
        choice1: "The suspect’s criminal history and prior arrests",
        choice2: "The suspect’s understanding of the nature and consequences of their actions",
        choice3: "The time of day the interrogation occurred",
        choice4: "The location where the suspect was questioned",
        answer: 2
    },
    {
        question: "A suspect who is too young to fully understand their Miranda rights may still waive them if:",
        choice1: "They are questioned by a school resource officer",
        choice2: "A parent or guardian is present to help explain the rights",
        choice3: "They are not arrested but voluntarily speak to the police",
        choice4: "They are read their rights in a language they understand",
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
