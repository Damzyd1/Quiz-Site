window.addEventListener("popstate", function(event){
  history.pushState(null, "", window.location.href);
});

document.addEventListener("keydown", e => {
  if((e.ctrlKey || e.metaKey) &&  e.key.toLowerCase() === 'r'){
    e.preventDefault();
  }
});

const topic = "CSS 311 Exam Simulation";
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
        question: "What is the primary purpose of confession in religion?",
        choice1: "To seek forgiveness from a higher power",
        choice2: "To gain social acceptance",
        choice3: "To avoid legal consequences",
        choice4: "To achieve financial gain",
        answer: 1,
        rationale: "Confession in religion is primarily a spiritual act aimed at seeking forgiveness and reconciliation with a higher power."
    },
    {
        question: "In psychotherapy, what is the main goal of encouraging a patient to confess?",
        choice1: "To punish the patient for past actions",
        choice2: "To help the patient achieve emotional relief and self-awareness",
        choice3: "To gather evidence for legal proceedings",
        choice4: "To satisfy the therapist's curiosity",
        answer: 2,
        rationale: "Confession in psychotherapy is therapeutic, helping patients process emotions and gain insight into their behavior."
    },
    {
        question: "In criminal law, what is the legal significance of a confession?",
        choice1: "It is considered definitive proof of guilt",
        choice2: "It must be corroborated by other evidence",
        choice3: "It is inadmissible in court",
        choice4: "It automatically leads to a reduced sentence",
        answer: 2,
        rationale: "While confessions are powerful, they must be supported by additional evidence to ensure their validity and reliability."
    },
    {
        question: "What is the primary goal of the preinterrogation interview?",
        choice1: "To gather evidence for trial",
        choice2: "To establish rapport and assess the suspect's demeanor",
        choice3: "To intimidate the suspect into confessing",
        choice4: "To inform the suspect of their rights",
        answer: 2,
        rationale: "The preinterrogation interview helps investigators build rapport and evaluate the suspect's behavior and truthfulness."
    },
    {
        question: "Which of the following is a function of the preinterrogation interview?",
        choice1: "To obtain a confession at all costs",
        choice2: "To assess the suspect's credibility and gather information",
        choice3: "To bypass Miranda rights",
        choice4: "To prepare the suspect for trial",
        answer: 2,
        rationale: "The preinterrogation interview is designed to assess credibility and gather preliminary information, not to force a confession."
    },
    {
        question: "What is a key challenge in distinguishing truth from deception during interrogations?",
        choice1: "Deceptive individuals always display obvious signs of lying",
        choice2: "Truthful individuals may exhibit nervous behaviors",
        choice3: "Polygraph tests are 100% accurate",
        choice4: "Investigators can always rely on intuition",
        answer: 2,
        rationale: "Truthful individuals may exhibit nervous behaviors, making it difficult to distinguish them from deceptive individuals."
    },
    {
        question: "What is the 'Investigator Response Bias'?",
        choice1: "The tendency to believe all suspects are guilty",
        choice2: "The tendency to interpret evidence in a way that confirms preexisting beliefs",
        choice3: "The tendency to avoid interrogating suspects",
        choice4: "The tendency to rely solely on physical evidence",
        answer: 2,
        rationale: "Investigator Response Bias refers to the tendency to interpret evidence in a way that aligns with preexisting beliefs about a suspect's guilt."
    },
    {
        question: "What is the purpose of the Miranda warning?",
        choice1: "To inform suspects of their right to remain silent and have an attorney",
        choice2: "To intimidate suspects into confessing",
        choice3: "To expedite the interrogation process",
        choice4: "To provide legal advice to suspects",
        answer: 1,
        rationale: "The Miranda warning is designed to inform suspects of their constitutional rights, including the right to remain silent and the right to an attorney."
    },
    {
        question: "What is required for a suspect to waive their Miranda rights?",
        choice1: "They must do so in writing",
        choice2: "They must demonstrate an understanding of their rights",
        choice3: "They must have a lawyer present",
        choice4: "They must be over the age of 21",
        answer: 2,
        rationale: "A suspect must knowingly, intelligently, and voluntarily waive their Miranda rights, demonstrating an understanding of those rights."
    },
    {
        question: "How do some police officers attempt to overcome Miranda protections?",
        choice1: "By ignoring Miranda requirements entirely",
        choice2: "By using persuasive tactics to encourage suspects to waive their rights",
        choice3: "By refusing to speak to suspects",
        choice4: "By providing incorrect information about rights",
        answer: 2,
        rationale: "Some officers use persuasive tactics to convince suspects to waive their Miranda rights voluntarily."
    },
    {
        question: "Why might an innocent person waive their Miranda rights?",
        choice1: "They believe they have nothing to hide",
        choice2: "They are unaware of their rights",
        choice3: "They are coerced by law enforcement",
        choice4: "All of the above",
        answer: 4,
        rationale: "Innocent individuals may waive their rights due to a belief in their innocence, lack of awareness, or perceived pressure from law enforcement."
    },
    {
        question: "What characterizes modern police interrogation techniques?",
        choice1: "They rely heavily on physical coercion",
        choice2: "They use psychological tactics to elicit confessions",
        choice3: "They avoid direct questioning",
        choice4: "They prioritize physical evidence over confessions",
        answer: 2,
        rationale: "Modern interrogations often employ psychological tactics to persuade suspects to confess."
    },
    {
        question: "What does it mean for interrogation to be a 'guilt-presumptive process'?",
        choice1: "Investigators assume the suspect is innocent until proven guilty",
        choice2: "Investigators assume the suspect is guilty and seek confirmation",
        choice3: "Investigators avoid making assumptions about guilt",
        choice4: "Investigators rely solely on physical evidence",
        answer: 2,
        rationale: "Interrogation as a guilt-presumptive process means investigators assume the suspect's guilt and seek to confirm it."
    },
    {
        question: "How is interrogation a process of social influence?",
        choice1: "It relies on physical force to extract information",
        choice2: "It uses psychological tactics to persuade suspects to confess",
        choice3: "It avoids any form of persuasion",
        choice4: "It focuses solely on gathering physical evidence",
        answer: 2,
        rationale: "Interrogation uses social influence techniques, such as persuasion and manipulation, to elicit confessions."
    },
    {
        question: "What is a key factor that leads people to confess during interrogations?",
        choice1: "Physical torture",
        choice2: "Psychological pressure and the desire to end the interrogation",
        choice3: "Financial incentives",
        choice4: "Legal advice from attorneys",
        answer: 2,
        rationale: "Psychological pressure and the desire to end the stressful interrogation process are key factors that lead to confessions."
    },
    {
        question: "What is a false confession?",
        choice1: "A confession made under duress",
        choice2: "A confession made by an innocent person",
        choice3: "A confession made without Miranda warnings",
        choice4: "A confession made in exchange for a reward",
        answer: 2,
        rationale: "A false confession occurs when an innocent person admits to a crime they did not commit."
    },
    {
        question: "Which theoretical perspective explains confessions as a result of compliance?",
        choice1: "Cognitive dissonance theory",
        choice2: "Social influence theory",
        choice3: "Behavioral theory",
        choice4: "Psychoanalytic theory",
        answer: 2,
        rationale: "Social influence theory explains confessions as a result of compliance with the demands or expectations of others."
    },
    {
        question: "What does research suggest about the impact of lengthy interrogations?",
        choice1: "They increase the likelihood of truthful confessions",
        choice2: "They increase the risk of false confessions",
        choice3: "They have no impact on confession rates",
        choice4: "They decrease the likelihood of any confessions",
        answer: 2,
        rationale: "Research shows that lengthy interrogations can lead to false confessions due to psychological exhaustion and pressure."
    },
    {
        question: "What is the role of coercion in false confessions?",
        choice1: "Coercion has no impact on false confessions",
        choice2: "Coercion increases the likelihood of false confessions",
        choice3: "Coercion ensures truthful confessions",
        choice4: "Coercion is illegal in all interrogations",
        answer: 2,
        rationale: "Coercive tactics, such as threats or promises, can lead innocent individuals to confess falsely."
    },
    {
        question: "What is the primary ethical concern regarding confessions in criminal law?",
        choice1: "Ensuring confessions are voluntary and not coerced",
        choice2: "Maximizing the number of confessions obtained",
        choice3: "Minimizing the use of Miranda warnings",
        choice4: "Prioritizing confessions over physical evidence",
        answer: 1,
        rationale: "The primary ethical concern is ensuring that confessions are voluntary and not the result of coercion or undue influence."
    },
    {
        question: "What is the significance of the Miranda decision in U.S. law?",
        choice1: "It eliminated the need for confessions in criminal cases",
        choice2: "It established the requirement to inform suspects of their rights",
        choice3: "It made all confessions inadmissible in court",
        choice4: "It allowed for the use of physical coercion in interrogations",
        answer: 2,
        rationale: "The Miranda decision established the requirement that suspects must be informed of their constitutional rights before interrogation."
    },
    {
        question: "What is a common psychological tactic used in modern interrogations?",
        choice1: "Physical intimidation",
        choice2: "Minimization of the crime's seriousness",
        choice3: "Offering financial rewards",
        choice4: "Avoiding all forms of communication",
        answer: 2,
        rationale: "Minimization is a common tactic where investigators downplay the seriousness of the crime to make confessing seem less consequential."
    },
    {
        question: "What is the primary risk of using guilt-presumptive interrogation techniques?",
        choice1: "They increase the likelihood of false confessions",
        choice2: "They ensure truthful confessions",
        choice3: "They eliminate the need for physical evidence",
        choice4: "They reduce the length of interrogations",
        answer: 1,
        rationale: "Guilt-presumptive techniques can lead to false confessions by pressuring suspects to confirm the investigator's assumptions of guilt."
    },
    {
        question: "What is the role of cognitive dissonance in confessions?",
        choice1: "It reduces the likelihood of confessions",
        choice2: "It helps suspects rationalize their decision to confess",
        choice3: "It eliminates the need for Miranda warnings",
        choice4: "It ensures confessions are always truthful",
        answer: 2,
        rationale: "Cognitive dissonance theory suggests that suspects may rationalize their decision to confess to reduce the psychological discomfort of the interrogation."
    },
    {
        question: "What is the primary purpose of the 'Reid Technique' in interrogations?",
        choice1: "To gather physical evidence",
        choice2: "To elicit confessions through psychological tactics",
        choice3: "To avoid interrogating suspects",
        choice4: "To provide legal advice to suspects",
        answer: 2,
        rationale: "The Reid Technique is a widely used method designed to elicit confessions through psychological manipulation and persuasion."
    },
    {
        question: "What is a key criticism of the Reid Technique?",
        choice1: "It is too lenient on suspects",
        choice2: "It increases the risk of false confessions",
        choice3: "It avoids using any psychological tactics",
        choice4: "It is ineffective in obtaining confessions",
        answer: 2,
        rationale: "Critics argue that the Reid Technique's high-pressure tactics can lead to false confessions, especially among vulnerable individuals."
    },
    {
        question: "What is the primary goal of interrogation as a social influence process?",
        choice1: "To intimidate suspects into silence",
        choice2: "To persuade suspects to confess",
        choice3: "To avoid all forms of communication",
        choice4: "To gather physical evidence",
        answer: 2,
        rationale: "Interrogation as a social influence process aims to persuade suspects to confess through psychological tactics."
    },
    {
        question: "What is the significance of the 'voluntariness' of a confession?",
        choice1: "It determines the admissibility of the confession in court",
        choice2: "It ensures the confession is false",
        choice3: "It eliminates the need for Miranda warnings",
        choice4: "It guarantees a reduced sentence",
        answer: 1,
        rationale: "A confession must be voluntary to be admissible in court; coerced confessions are typically excluded."
    },
    {
        question: "What is a common reason innocent people confess to crimes they did not commit?",
        choice1: "They are seeking financial gain",
        choice2: "They are under extreme psychological pressure",
        choice3: "They are unaware of their rights",
        choice4: "They are motivated by a desire for fame",
        answer: 2,
        rationale: "Innocent individuals may confess due to psychological pressure, exhaustion, or a belief that confessing will end the interrogation."
    },
    {
        question: "What is the primary purpose of the 'preinterrogation interview'?",
        choice1: "To gather evidence for trial",
        choice2: "To assess the suspect's demeanor and credibility",
        choice3: "To intimidate the suspect",
        choice4: "To inform the suspect of their rights",
        answer: 2,
        rationale: "The preinterrogation interview is designed to assess the suspect's behavior and credibility before formal interrogation begins."
    },
    {
        question: "What is the primary risk of using minimization techniques in interrogations?",
        choice1: "They increase the likelihood of false confessions",
        choice2: "They ensure truthful confessions",
        choice3: "They eliminate the need for physical evidence",
        choice4: "They reduce the length of interrogations",
        answer: 1,
        rationale: "Minimization techniques can lead to false confessions by making the consequences of confessing seem less severe."
    },
    {
        question: "What is the primary ethical concern regarding the use of psychological tactics in interrogations?",
        choice1: "They may lead to false confessions",
        choice2: "They are too lenient on suspects",
        choice3: "They eliminate the need for physical evidence",
        choice4: "They are ineffective in obtaining confessions",
        answer: 1,
        rationale: "The primary ethical concern is that psychological tactics can lead to false confessions, especially among vulnerable individuals."
    },
    {
        question: "What is the primary purpose of the Miranda warning?",
        choice1: "To inform suspects of their constitutional rights",
        choice2: "To intimidate suspects into confessing",
        choice3: "To expedite the interrogation process",
        choice4: "To provide legal advice to suspects",
        answer: 1,
        rationale: "The Miranda warning is designed to inform suspects of their rights, including the right to remain silent and the right to an attorney."
    },
    {
        question: "What is required for a suspect to waive their Miranda rights?",
        choice1: "They must do so in writing",
        choice2: "They must demonstrate an understanding of their rights",
        choice3: "They must have a lawyer present",
        choice4: "They must be over the age of 21",
        answer: 2,
        rationale: "A suspect must knowingly, intelligently, and voluntarily waive their Miranda rights, demonstrating an understanding of those rights."
    },
    {
        question: "How do some police officers attempt to overcome Miranda protections?",
        choice1: "By ignoring Miranda requirements entirely",
        choice2: "By using persuasive tactics to encourage suspects to waive their rights",
        choice3: "By refusing to speak to suspects",
        choice4: "By providing incorrect information about rights",
        answer: 2,
        rationale: "Some officers use persuasive tactics to convince suspects to waive their Miranda rights voluntarily."
    },
    {
        question: "Why might an innocent person waive their Miranda rights?",
        choice1: "They believe they have nothing to hide",
        choice2: "They are unaware of their rights",
        choice3: "They are coerced by law enforcement",
        choice4: "All of the above",
        answer: 4,
        rationale: "Innocent individuals may waive their rights due to a belief in their innocence, lack of awareness, or perceived pressure from law enforcement."
    },
    {
        question: "What characterizes modern police interrogation techniques?",
        choice1: "They rely heavily on physical coercion",
        choice2: "They use psychological tactics to elicit confessions",
        choice3: "They avoid direct questioning",
        choice4: "They prioritize physical evidence over confessions",
        answer: 2,
        rationale: "Modern interrogations often employ psychological tactics to persuade suspects to confess."
    },
    {
        question: "What does it mean for interrogation to be a 'guilt-presumptive process'?",
        choice1: "Investigators assume the suspect is innocent until proven guilty",
        choice2: "Investigators assume the suspect is guilty and seek confirmation",
        choice3: "Investigators avoid making assumptions about guilt",
        choice4: "Investigators rely solely on physical evidence",
        answer: 2,
        rationale: "Interrogation as a guilt-presumptive process means investigators assume the suspect's guilt and seek to confirm it."
    },
    {
        question: "How is interrogation a process of social influence?",
        choice1: "It relies on physical force to extract information",
        choice2: "It uses psychological tactics to persuade suspects to confess",
        choice3: "It avoids any form of persuasion",
        choice4: "It focuses solely on gathering physical evidence",
        answer: 2,
        rationale: "Interrogation uses social influence techniques, such as persuasion and manipulation, to elicit confessions."
    },
    {
        question: "What is a key factor that leads people to confess during interrogations?",
        choice1: "Physical torture",
        choice2: "Psychological pressure and the desire to end the interrogation",
        choice3: "Financial incentives",
        choice4: "Legal advice from attorneys",
        answer: 2,
        rationale: "Psychological pressure and the desire to end the stressful interrogation process are key factors that lead to confessions."
    },
    {
        question: "What is a false confession?",
        choice1: "A confession made under duress",
        choice2: "A confession made by an innocent person",
        choice3: "A confession made without Miranda warnings",
        choice4: "A confession made in exchange for a reward",
        answer: 2,
        rationale: "A false confession occurs when an innocent person admits to a crime they did not commit."
    },
    {
        question: "Which theoretical perspective explains confessions as a result of compliance?",
        choice1: "Cognitive dissonance theory",
        choice2: "Social influence theory",
        choice3: "Behavioral theory",
        choice4: "Psychoanalytic theory",
        answer: 2,
        rationale: "Social influence theory explains confessions as a result of compliance with the demands or expectations of others."
    },
    {
        question: "What does research suggest about the impact of lengthy interrogations?",
        choice1: "They increase the likelihood of truthful confessions",
        choice2: "They increase the risk of false confessions",
        choice3: "They have no impact on confession rates",
        choice4: "They decrease the likelihood of any confessions",
        answer: 2,
        rationale: "Research shows that lengthy interrogations can lead to false confessions due to psychological exhaustion and pressure."
    },
    {
        question: "What is the role of coercion in false confessions?",
        choice1: "Coercion has no impact on false confessions",
        choice2: "Coercion increases the likelihood of false confessions",
        choice3: "Coercion ensures truthful confessions",
        choice4: "Coercion is illegal in all interrogations",
        answer: 2,
        rationale: "Coercive tactics, such as threats or promises, can lead innocent individuals to confess falsely."
    },
    {
        question: "What is the primary ethical concern regarding confessions in criminal law?",
        choice1: "Ensuring confessions are voluntary and not coerced",
        choice2: "Maximizing the number of confessions obtained",
        choice3: "Minimizing the use of Miranda warnings",
        choice4: "Prioritizing confessions over physical evidence",
        answer: 1,
        rationale: "The primary ethical concern is ensuring that confessions are voluntary and not the result of coercion or undue influence."
    },
    {
        question: "Which theoretical perspective explains that people confess due to external pressures or coercion?",
        choice1: "Behavioral Theory",
        choice2: "Rational Choice Theory",
        choice3: "Social Influence Theory",
        choice4: "Strain Theory",
        answer: 3,
        rationale: "Social Influence Theory explains that confessions often result from external pressures, such as coercion or manipulation, during interrogations."
    },
    {
        question: "According to Rational Choice Theory, why might a suspect confess?",
        choice1: "To escape immediate consequences like prolonged interrogation.",
        choice2: "Due to fear of physical harm by the interrogators.",
        choice3: "Because they feel compelled by moral guilt.",
        choice4: "Because they are unaware of their rights.",
        answer: 1,
        rationale: "Rational Choice Theory posits that individuals make decisions based on the costs and benefits, such as confessing to avoid the discomfort of prolonged interrogation."
    },
    {
        question: "Which perspective suggests that a confession may arise from a suspect's internalized guilt?",
        choice1: "Psychoanalytic Theory",
        choice2: "Learning Theory",
        choice3: "Conflict Theory",
        choice4: "Social Control Theory",
        answer: 1,
        rationale: "Psychoanalytic Theory focuses on internal psychological processes, suggesting that guilt and a need for catharsis can drive individuals to confess."
    },
    {
        question: "According to Learning Theory, how do suspects learn to confess during interrogation?",
        choice1: "Through repeated exposure to coercive tactics.",
        choice2: "Through reinforcement, such as promises of leniency.",
        choice3: "Through observing confessions in media portrayals.",
        choice4: "Through internal moral reflection.",
        answer: 2,
        rationale: "Learning Theory suggests that suspects may confess due to reinforcement mechanisms, such as promises of reduced punishment or other perceived rewards."
    },
    {
        question: "Which theoretical framework emphasizes that people may confess due to moral and social obligations?",
        choice1: "Social Bond Theory",
        choice2: "Neutralization Theory",
        choice3: "Labeling Theory",
        choice4: "Social Exchange Theory",
        answer: 1,
        rationale: "Social Bond Theory emphasizes the role of moral and social obligations, arguing that strong bonds to societal norms can lead individuals to confess to maintain integrity."
    },
    {
        question: "What is one of the main reasons research suggests innocent people confess during interrogations?",
        choice1: "They are convinced of their guilt by the interrogator.",
        choice2: "They want to protect someone else.",
        choice3: "They feel overwhelmed by the interrogation process.",
        choice4: "They are offered monetary rewards.",
        answer: 3,
        rationale: "Research shows that the stress and fatigue from prolonged interrogations can lead innocent individuals to confess falsely just to escape the situation."
    },
    {
        question: "Which factor, according to research, significantly increases the likelihood of a false confession?",
        choice1: "The suspect's age and cognitive ability.",
        choice2: "The suspect's prior criminal history.",
        choice3: "The number of interrogators present.",
        choice4: "The type of crime committed.",
        answer: 1,
        rationale: "Young individuals and those with limited cognitive ability are more susceptible to manipulation and may confess falsely under pressure."
    },
    {
        question: "What did research find about the use of promises of leniency during interrogations?",
        choice1: "It makes suspects more cooperative.",
        choice2: "It leads to both true and false confessions.",
        choice3: "It only affects guilty suspects.",
        choice4: "It is ineffective in most cases.",
        answer: 2,
        rationale: "Promises of leniency can motivate both guilty and innocent suspects to confess, regardless of the truth of their statements."
    },
    {
        question: "Which method is most associated with reducing the risk of false confessions according to research?",
        choice1: "Recording the entire interrogation process.",
        choice2: "Using multiple interrogators.",
        choice3: "Increasing interrogation time.",
        choice4: "Presenting fabricated evidence.",
        answer: 1,
        rationale: "Recording the entire interrogation process increases transparency and allows for accountability, reducing the likelihood of coercive techniques leading to false confessions."
    },
    {
        question: "What has research revealed about the relationship between interrogation duration and confession quality?",
        choice1: "Shorter interrogations always yield better confessions.",
        choice2: "Long interrogations increase the likelihood of false confessions.",
        choice3: "There is no significant relationship between duration and confession quality.",
        choice4: "Longer interrogations yield more reliable confessions.",
        answer: 2,
        rationale: "Long interrogations can wear down suspects psychologically, leading to higher chances of false confessions rather than accurate ones."
    },
    {
        question: "Which of the following is a key factor in determining the voluntariness of a confession?",
        choice1: "The suspect’s age and intelligence.",
        choice2: "The length of the interrogation.",
        choice3: "Whether the suspect was given food and water.",
        choice4: "All of the above.",
        answer: 4,
        rationale: "Courts consider multiple factors, including age, intelligence, duration of interrogation, and whether basic needs were met, to determine if a confession was given voluntarily."
    },
    {
        question: "Why is coercion a major issue in evaluating the voluntariness of a confession?",
        choice1: "It can lead to unreliable confessions.",
        choice2: "It violates the suspect’s rights.",
        choice3: "It can render the confession inadmissible in court.",
        choice4: "All of the above.",
        answer: 4,
        rationale: "Coerced confessions raise reliability concerns, violate legal protections, and can be excluded from trial as they go against due process."
    },
    {
        question: "Which legal case established that confessions must be voluntary to be admissible in court?",
        choice1: "Miranda v. Arizona (1966).",
        choice2: "Brown v. Mississippi (1936).",
        choice3: "Gideon v. Wainwright (1963).",
        choice4: "Terry v. Ohio (1968).",
        answer: 2,
        rationale: "Brown v. Mississippi (1936) ruled that confessions obtained through physical coercion violate due process and are inadmissible."
    },
    {
        question: "Which of the following would most likely indicate that a confession was involuntary?",
        choice1: "The suspect had a lawyer present.",
        choice2: "The suspect was denied sleep and interrogated for 24 hours.",
        choice3: "The suspect voluntarily walked into the police station and confessed.",
        choice4: "The confession was made in a written statement with legal counsel.",
        answer: 2,
        rationale: "Extended sleep deprivation, prolonged interrogation, and physical or psychological pressure can render a confession involuntary."
    },
    {
        question: "How does the presence of an attorney impact the voluntariness of a confession?",
        choice1: "It ensures the suspect understands their rights.",
        choice2: "It prevents coercive tactics from being used.",
        choice3: "It strengthens the admissibility of the confession.",
        choice4: "All of the above.",
        answer: 4,
        rationale: "An attorney safeguards the suspect’s rights, prevents coercion, and increases the likelihood that any confession made is truly voluntary and legally admissible."
    },
    {
        question: "Which of the following is a key requirement for a confession to be admissible in court?",
        choice1: "It must be given voluntarily.",
        choice2: "It must be recorded on video.",
        choice3: "It must be written and signed.",
        choice4: "It must be obtained within 24 hours of arrest.",
        answer: 1,
        rationale: "A confession is only admissible if given voluntarily, without coercion, threats, or inducements."
    },
    {
        question: "What legal principle ensures that a confession obtained through coercion is inadmissible?",
        choice1: "The Exclusionary Rule.",
        choice2: "The Doctrine of Precedent.",
        choice3: "The Felony-Murder Rule.",
        choice4: "The Double Jeopardy Clause.",
        answer: 1,
        rationale: "The Exclusionary Rule prevents evidence, including coerced confessions, from being used in court if obtained unlawfully."
    },
    {
        question: "Which of the following could render a confession inadmissible?",
        choice1: "Failure to administer the Miranda warning.",
        choice2: "Physical or psychological coercion.",
        choice3: "Denial of legal counsel.",
        choice4: "All of the above.",
        answer: 4,
        rationale: "Any of these violations can make a confession inadmissible as they infringe on the suspect's legal rights."
    },
    {
        question: "Under Nigerian law, which provision primarily governs the admissibility of confessions?",
        choice1: "The Evidence Act, Section 29.",
        choice2: "The Criminal Code Act, Section 10.",
        choice3: "The Constitution of Nigeria, Section 36.",
        choice4: "The Administration of Criminal Justice Act, Section 15.",
        answer: 1,
        rationale: "Section 29 of the Evidence Act (2011) states that a confession is inadmissible if obtained through oppression, including torture, inhumane treatment, or undue influence."
    },
    {
        question: "Which factor would most likely support the admissibility of a confession?",
        choice1: "The confession was made after a long, aggressive interrogation.",
        choice2: "The suspect voluntarily confessed after being informed of their rights.",
        choice3: "The suspect was denied legal representation during the confession.",
        choice4: "The confession was made in response to police deception.",
        answer: 2,
        rationale: "A voluntary confession given with full awareness of legal rights is generally admissible in court."
    },
    {
        question: "What is a retracted confession?",
        choice1: "A confession made in open court.",
        choice2: "A confession later denied by the suspect.",
        choice3: "A confession obtained through coercion.",
        choice4: "A confession that is ruled inadmissible.",
        answer: 2,
        rationale: "A retracted confession is one that the suspect initially made but later denies, claiming it was false or improperly obtained."
    },
    {
        question: "What distinguishes a repudiated confession from a retracted one?",
        choice1: "A repudiated confession is completely denied as never made.",
        choice2: "A repudiated confession is always made under coercion.",
        choice3: "A retracted confession is always true, while a repudiated confession is false.",
        choice4: "A repudiated confession is automatically inadmissible.",
        answer: 1,
        rationale: "A repudiated confession is one where the accused denies ever making the statement, unlike a retracted confession, which is admitted but later withdrawn."
    },
    {
        question: "How does a court assess the validity of a retracted confession?",
        choice1: "By checking if the confession aligns with independent evidence.",
        choice2: "By determining if the accused was in custody at the time.",
        choice3: "By asking the suspect to confirm it again in court.",
        choice4: "By dismissing it automatically.",
        answer: 1,
        rationale: "Courts evaluate whether a retracted confession is supported by other independent evidence to determine its credibility."
    },
    {
        question: "Under Nigerian law, what happens if a suspect claims their confession was coerced?",
        choice1: "The confession is automatically excluded from evidence.",
        choice2: "The burden shifts to the prosecution to prove voluntariness.",
        choice3: "The suspect must prove they were coerced.",
        choice4: "The confession is still admissible if written and signed.",
        answer: 2,
        rationale: "If a confession is alleged to be coerced, the prosecution must prove beyond reasonable doubt that it was given voluntarily."
    },
    {
        question: "Which of the following is most likely to make a court reject a confession?",
        choice1: "The suspect later claims they were tortured.",
        choice2: "There is evidence of coercion, oppression, or inducement.",
        choice3: "The suspect argues they were tired during interrogation.",
        choice4: "The suspect retracted their confession after consulting a lawyer.",
        answer: 2,
        rationale: "For a confession to be inadmissible, the court must find credible evidence of coercion, oppression, or inducement."
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

let durationInMinutes = 30;
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
