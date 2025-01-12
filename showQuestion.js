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
        question: "What is the main difference between a pre-interrogation interview and an interrogation?",
        choice1: "Pre-interrogation involves coercion, while interrogation does not.",
        choice2: "Pre-interrogation focuses on gathering information, while interrogation aims for confessions.",
        choice3: "Pre-interrogation is informal, while interrogation is legally binding.",
        choice4: "Pre-interrogation assesses physical evidence, while interrogation assesses suspects.",
        answer: "Pre-interrogation focuses on gathering information, while interrogation aims for confessions.",
        rationale: "Pre-interrogation interviews are designed to collect information, whereas interrogations focus on obtaining confessions."
    },
    {
        question: "During a pre-interrogation interview, what type of questions is most effective?",
        choice1: "Closed-ended questions to confirm facts",
        choice2: "Leading questions to prompt specific answers",
        choice3: "Open-ended questions to observe behavioral cues",
        choice4: "Yes/no questions for quick responses",
        answer: "Open-ended questions to observe behavioral cues",
        rationale: "Open-ended questions allow suspects to speak freely, enabling investigators to analyze behavioral cues."
    },
    {
        question: "How does rapport-building benefit the pre-interrogation process?",
        choice1: "It encourages suspects to confess immediately.",
        choice2: "It reduces resistance during interrogation.",
        choice3: "It eliminates the need for interrogation.",
        choice4: "It confirms the suspect’s guilt.",
        answer: "It reduces resistance during interrogation.",
        rationale: "Building rapport makes suspects more comfortable and less resistant during subsequent interrogation phases."
    },
    {
        question: "Why might an investigator assess a suspect’s baseline behavior during a pre-interrogation interview?",
        choice1: "To determine their level of intelligence",
        choice2: "To establish a comparison point for detecting deception",
        choice3: "To evaluate their likelihood of fleeing",
        choice4: "To measure their legal knowledge",
        answer: "To establish a comparison point for detecting deception",
        rationale: "Baseline behavior provides a standard for identifying behavioral deviations that may indicate dishonesty."
    },
    {
        question: "What psychological tactic is often used during pre-interrogation interviews?",
        choice1: "Direct accusations",
        choice2: "Sympathetic questioning",
        choice3: "Physical intimidation",
        choice4: "Threat of legal consequences",
        answer: "Sympathetic questioning",
        rationale: "Sympathetic questioning helps build trust and encourages suspects to open up."
    },
    {
        question: "Which of the following is not a goal of a pre-interrogation interview?",
        choice1: "Gathering biographical information",
        choice2: "Evaluating the suspect’s credibility",
        choice3: "Analyzing evidence with the suspect",
        choice4: "Establishing rapport",
        answer: "Analyzing evidence with the suspect",
        rationale: "Evidence analysis typically occurs during formal interrogation, not in pre-interrogation interviews."
    },
    {
        question: "What role does cultural sensitivity play in pre-interrogation interviews?",
        choice1: "It allows the interviewer to ignore inconsistencies.",
        choice2: "It prevents ethical violations during questioning.",
        choice3: "It ensures the suspect fully understands the process.",
        choice4: "It helps in building rapport with diverse suspects.",
        answer: "It helps in building rapport with diverse suspects.",
        rationale: "Understanding cultural differences enhances rapport-building and reduces misunderstandings."
    },
    {
        question: "Why is active listening critical during pre-interrogation?",
        choice1: "It allows investigators to dominate the conversation.",
        choice2: "It prevents the suspect from detecting deception.",
        choice3: "It reveals inconsistencies in the suspect’s story.",
        choice4: "It helps minimize legal risks for the investigator.",
        answer: "It reveals inconsistencies in the suspect’s story.",
        rationale: "Active listening aids in identifying contradictions or omissions in the suspect’s narrative."
    },
    {
        question: "What should an investigator avoid during a pre-interrogation interview?",
        choice1: "Taking detailed notes",
        choice2: "Building rapport",
        choice3: "Presenting evidence prematurely",
        choice4: "Assessing behavioral cues",
        answer: "Presenting evidence prematurely",
        rationale: "Presenting evidence too early can lead the suspect to tailor their responses to fit the evidence."
    },
    {
        question: "How does the non-confrontational approach during pre-interrogation interviews influence suspects?",
        choice1: "It pressures them to confess.",
        choice2: "It encourages truthful responses.",
        choice3: "It delays the interrogation process.",
        choice4: "It shifts focus to the legal aspects of the case.",
        answer: "It encourages truthful responses.",
        rationale: "Non-confrontational approaches create a more relaxed atmosphere, increasing the likelihood of truthfulness."
    },
    {
        question: "Why is it difficult to rely on behavioral cues for detecting deception?",
        choice1: "They are scientifically proven to be unreliable.",
        choice2: "They vary widely among individuals and cultures.",
        choice3: "They require advanced technology for observation.",
        choice4: "They only apply to seasoned criminals.",
        answer: "They vary widely among individuals and cultures.",
        rationale: "Behavioral cues are subjective and can differ based on cultural and individual factors, making them unreliable."
    },
    {
        question: "Which of the following technologies is commonly used to detect deception?",
        choice1: "Surveillance cameras",
        choice2: "Polygraph machines",
        choice3: "DNA profiling",
        choice4: "Forensic accounting",
        answer: "Polygraph machines",
        rationale: "Polygraph machines are often employed to detect physiological responses that may indicate deception."
    },
    {
        question: "What is the main criticism of polygraph tests in the justice system?",
        choice1: "They are time-consuming.",
        choice2: "They rely on subjective analysis.",
        choice3: "They produce inconsistent results.",
        choice4: "They cannot detect emotions.",
        answer: "They produce inconsistent results.",
        rationale: "Polygraphs are criticized for their inconsistency and inability to definitively distinguish lies from truth."
    },
    {
        question: "What does the truth-default theory propose about human behavior?",
        choice1: "Humans are naturally deceptive.",
        choice2: "People default to trusting others unless evidence suggests otherwise.",
        choice3: "Deceptive individuals are easily recognizable.",
        choice4: "Detecting deception requires advanced training.",
        answer: "People default to trusting others unless evidence suggests otherwise.",
        rationale: "The truth-default theory suggests that humans instinctively trust others until deception is suspected."
    },
    {
        question: "How does deception affect the fairness of criminal trials?",
        choice1: "It ensures the suspect receives fair treatment.",
        choice2: "It hinders the ability to establish guilt beyond reasonable doubt.",
        choice3: "It always leads to wrongful convictions.",
        choice4: "It simplifies the investigative process.",
        answer: "It hinders the ability to establish guilt beyond reasonable doubt.",
        rationale: "Deception can cloud evidence and testimonies, making it difficult to determine guilt with certainty."
    },
    {
        question: "Why is training in deception detection important for law enforcement officers?",
        choice1: "To ensure suspects cannot lie during interrogation",
        choice2: "To improve their ability to identify truthful accounts",
        choice3: "To prevent coercive interrogation practices",
        choice4: "To enhance their courtroom testimony",
        answer: "To improve their ability to identify truthful accounts",
        rationale: "Deception detection training enables officers to discern truthful statements more accurately."
    },
    {
        question: "What is the primary psychological burden of lying?",
        choice1: "Physical exhaustion",
        choice2: "Cognitive overload",
        choice3: "Emotional numbness",
        choice4: "Increased empathy",
        answer: "Cognitive overload",
        rationale: "Lying requires cognitive effort to fabricate and maintain false information, leading to cognitive overload."
    },
    {
        question: "Which method is most effective in detecting deception?",
        choice1: "Lie detector tests",
        choice2: "Micro-expression analysis",
        choice3: "Long-term observation of behavior",
        choice4: "Using leading questions",
        answer: "Long-term observation of behavior",
        rationale: "Long-term observation provides more reliable insights into behavioral patterns than instantaneous methods."
    },
    {
        question: "What is a significant limitation of polygraph machines?",
        choice1: "They can only be used on trained professionals.",
        choice2: "They detect arousal, not specific lies.",
        choice3: "They require a psychologist to interpret results.",
        choice4: "They are ineffective in controlled settings.",
        answer: "They detect arousal, not specific lies.",
        rationale: "Polygraph machines detect physiological arousal, which may or may not be caused by deception."
    },
    {
        question: "How does cultural bias potentially impact deception detection techniques?",
        choice1: "It improves the accuracy of behavioral analysis.",
        choice2: "It leads to misinterpretation of body language cues.",
        choice3: "It prevents the use of technology like polygraphs.",
        choice4: "It increases the reliability of interrogation techniques.",
        answer: "It leads to misinterpretation of body language cues.",
        rationale: "Cultural differences in behavior and expression can lead to incorrect assumptions in detecting deception."
    },
    {
        question: "What is the primary purpose of the Miranda Warning?",
        choice1: "To inform suspects of their legal rights.",
        choice2: "To prevent the police from conducting interrogations.",
        choice3: "To ensure suspects are detained lawfully.",
        choice4: "To facilitate faster confessions.",
        answer: "To inform suspects of their legal rights.",
        rationale: "The Miranda Warning ensures suspects are aware of their constitutional rights during custodial interrogations."
    },
    {
        question: "In which U.S. Supreme Court case was the Miranda Warning established?",
        choice1: "Gideon v. Wainwright",
        choice2: "Miranda v. Arizona",
        choice3: "Brown v. Board of Education",
        choice4: "Escobedo v. Illinois",
        answer: "Miranda v. Arizona",
        rationale: "The landmark 1966 decision in Miranda v. Arizona established the requirement for law enforcement to inform suspects of their rights."
    },
    {
        question: "When must a Miranda Warning be given?",
        choice1: "During an arrest",
        choice2: "Before an interrogation begins",
        choice3: "After a suspect confesses",
        choice4: "Only when the suspect requests it",
        answer: "Before an interrogation begins",
        rationale: "Miranda rights must be read before questioning begins if the suspect is in custody to ensure compliance with the Fifth Amendment."
    },
    {
        question: "Which right is not included in the Miranda Warning?",
        choice1: "The right to remain silent",
        choice2: "The right to an attorney",
        choice3: "The right to a fair trial",
        choice4: "The right to have an attorney appointed if unable to afford one",
        answer: "The right to a fair trial",
        rationale: "The right to a fair trial is a constitutional right but is not part of the Miranda Warning."
    },
    {
        question: "What happens if a suspect waives their Miranda rights?",
        choice1: "Their statements can be used against them in court.",
        choice2: "The police can interrogate them without restrictions.",
        choice3: "They lose all legal protections.",
        choice4: "They cannot request an attorney later.",
        answer: "Their statements can be used against them in court.",
        rationale: "A waiver of Miranda rights means the suspect’s statements can be admissible in court, provided the waiver was made voluntarily and knowingly."
    },
    {
        question: "Why might police delay giving the Miranda Warning?",
        choice1: "To build rapport with the suspect",
        choice2: "To avoid self-incrimination",
        choice3: "To gather evidence before the suspect requests a lawyer",
        choice4: "To increase the likelihood of a truthful confession",
        answer: "To gather evidence before the suspect requests a lawyer",
        rationale: "Police might delay reading Miranda rights to collect evidence during informal questioning before the suspect invokes their right to silence."
    },
    {
        question: "If a suspect invokes their right to silence during questioning, what must the police do?",
        choice1: "Stop questioning immediately.",
        choice2: "Continue questioning to confirm their intention.",
        choice3: "Proceed with questions unrelated to the crime.",
        choice4: "Obtain written confirmation of the suspect’s decision.",
        answer: "Stop questioning immediately.",
        rationale: "Once a suspect invokes their right to silence, law enforcement must cease all questioning under Miranda rules."
    },
    {
        question: "Which of the following can render a Miranda waiver invalid?",
        choice1: "The suspect is intoxicated.",
        choice2: "The suspect changes their mind after waiving their rights.",
        choice3: "The police provide legal advice.",
        choice4: "The suspect refuses to sign a written waiver.",
        answer: "The suspect is intoxicated.",
        rationale: "A waiver must be made voluntarily, knowingly, and intelligently; intoxication can impair a suspect’s understanding of their rights."
    },
    {
        question: "How does the Miranda Warning uphold the Fifth Amendment?",
        choice1: "By preventing self-incrimination during custodial interrogations",
        choice2: "By allowing suspects to confess under duress",
        choice3: "By protecting suspects from double jeopardy",
        choice4: "By guaranteeing due process",
        answer: "By preventing self-incrimination during custodial interrogations",
        rationale: "The Miranda Warning ensures suspects are informed of their right to remain silent, protecting against self-incrimination."
    },
    {
        question: "What is the consequence if police fail to issue a Miranda Warning before questioning?",
        choice1: "The case is automatically dismissed.",
        choice2: "The suspect’s statements are inadmissible in court.",
        choice3: "The police face legal penalties.",
        choice4: "The suspect cannot be arrested.",
        answer: "The suspect’s statements are inadmissible in court.",
        rationale: "Failure to give a Miranda Warning renders any statements obtained during custodial interrogation inadmissible in court."
    },
    {
        question: "What is the primary reason some innocent suspects waive their Miranda rights?",
        choice1: "They are unaware of the consequences.",
        choice2: "They believe cooperating will clear their name.",
        choice3: "They do not understand the legal system.",
        choice4: "They are pressured by law enforcement.",
        answer: "They believe cooperating will clear their name.",
        rationale: "Innocent suspects often waive their rights, thinking that cooperation will demonstrate their innocence and expedite their release."
    },
    {
        question: "How can overconfidence contribute to innocent suspects waiving their rights?",
        choice1: "They underestimate the severity of their situation.",
        choice2: "They believe the interrogation is unlawful.",
        choice3: "They think their legal knowledge surpasses the police.",
        choice4: "They assume the case will be dismissed.",
        answer: "They underestimate the severity of their situation.",
        rationale: "Innocent suspects may overestimate their ability to prove their innocence and waive their rights prematurely."
    },
    {
        question: "Which of the following factors increases the likelihood of innocent suspects waiving their rights?",
        choice1: "Fatigue during interrogation",
        choice2: "Familiarity with the justice system",
        choice3: "Access to legal counsel",
        choice4: "Media coverage of the case",
        answer: "Fatigue during interrogation",
        rationale: "Fatigue can impair judgment, making suspects more susceptible to waiving their rights without fully understanding the implications."
    },
    {
        question: "What common psychological misconception leads innocent suspects to cooperate without legal counsel?",
        choice1: "That silence implies guilt",
        choice2: "That lawyers complicate the process",
        choice3: "That police will stop the interrogation",
        choice4: "That waiving rights is mandatory",
        answer: "That silence implies guilt",
        rationale: "Many suspects falsely believe remaining silent will make them look guilty, prompting them to speak without legal counsel."
    },
    {
        question: "Why might social pressure influence innocent suspects to waive their rights?",
        choice1: "Fear of being labeled uncooperative",
        choice2: "Desire to please law enforcement",
        choice3: "Avoidance of confrontation",
        choice4: "All of the above",
        answer: "All of the above",
        rationale: "Social and psychological pressures can compel suspects to waive their rights, even when it is against their best interest."
    },
    {
        question: "Which of the following best describes the underlying principle of psychoanalytic theory in relation to confessions?",
        choice1: "Conscious guilt resolution",
        choice2: "Unconscious conflict and stress relief",
        choice3: "Rational cost-benefit analysis",
        choice4: "Compliance with authority",
        answer: "Unconscious conflict and stress relief"
    },
    {
        question: "A suspect confesses after experiencing recurring nightmares about the crime they committed. This is most aligned with:",
        choice1: "Decision-making perspective",
        choice2: "Social-psychological theory",
        choice3: "Psychoanalytic theory",
        choice4: "Cognitive-behavioural theory",
        answer: "Psychoanalytic theory"
    },
    {
        question: "A suspect is interrogated for hours but does not confess, only to break down emotionally and confess days later in a private setting. Which theory applies?",
        choice1: "Psychoanalytic theory",
        choice2: "Decision-making perspective",
        choice3: "Social-psychological theory",
        choice4: "Cognitive-behavioural theory",
        answer:  "Psychoanalytic theory"
    },
    {
        question: "The decision-making perspective on confessions assumes that suspects:",
        choice1: "Confess under subconscious stress",
        choice2: "Rationally weigh the costs and benefits of confessing",
        choice3: "Succumb to intense external pressure",
        choice4: "Act out of fear of losing familial support",
        answer: "Rationally weigh the costs and benefits of confessing"
    },
    {
        question: "A suspect confesses after their lawyer advises them that cooperating could result in a plea deal with reduced charges. This reflects:",
        choice1: "Psychoanalytic theory",
        choice2: "Decision-making perspective",
        choice3: "Cognitive-behavioural theory",
        choice4: "Social-psychological theory",
        answer: "Decision-making perspective"
    },
    {
        question: "Which scenario would most challenge the validity of the decision-making perspective?",
        choice1: "A suspect confesses to end a lengthy interrogation.",
        choice2: "A suspect confesses to avoid feelings of guilt.",
        choice3: "A suspect confesses believing it will reduce their sentence.",
        choice4: "A suspect confesses after a lawyer’s advice.",
        answer: "A suspect confesses to end a lengthy interrogation."
    },
    {
        question: "Cognitive-behavioural theory suggests that a suspect’s confession is driven by:",
        choice1: "Subconscious guilt and anxiety",
        choice2: "Rational evaluation of benefits",
        choice3: "Desire to maintain or repair relationships",
        choice4: "External pressures like stress",
        answer: "Desire to maintain or repair relationships"
    },
    {
        question: "A suspect confesses after seeing how their crime hurt their family and realizing that confessing might repair their bond. This scenario reflects:",
        choice1: "Social-psychological theory",
        choice2: "Cognitive-behavioural theory",
        choice3: "Decision-making perspective",
        choice4: "Psychoanalytic theory",
        answer: "Cognitive-behavioural theory"
    },
    {
        question: "A suspect repeatedly rehearses their denial during interrogation but confesses when confronted with undeniable evidence. This most likely demonstrates:",
        choice1: "Psychoanalytic theory",
        choice2: "Decision-making perspective",
        choice3: "Cognitive-behavioural theory",
        choice4: "Social-psychological theory",
        answer: "Decision-making perspective"
    },
    {
        question: "Social-psychological theory emphasizes that confessions often result from:",
        choice1: "Rational self-interest",
        choice2: "Unconscious guilt",
        choice3: "External pressures like stress and interrogation tactics",
        choice4: "Emotional ties to family or society",
        answer: "External pressures like stress and interrogation tactics"
    },
    {
        question: "Which of the following best describes the underlying principle of psychoanalytic theory in relation to confessions?",
        choice1: "Conscious guilt resolution",
        choice2: "Unconscious conflict and stress relief",
        choice3: "Rational cost-benefit analysis",
        choice4: "Compliance with authority",
        answer: "Unconscious conflict and stress relief"
    },
    {
        question: "A suspect confesses after experiencing recurring nightmares about the crime they committed. This is most aligned with:",
        choice1: "Decision-making perspective",
        choice2: "Social-psychological theory",
        choice3: "Psychoanalytic theory",
        choice4: "Cognitive-behavioural theory",
        answer: "Psychoanalytic theory"
    },
    {
        question: "A suspect is interrogated for hours but does not confess, only to break down emotionally and confess days later in a private setting. Which theory applies?",
        choice1: "Psychoanalytic theory",
        choice2: "Decision-making perspective",
        choice3: "Social-psychological theory",
        choice4: "Cognitive-behavioural theory",
        answer: "Psychoanalytic theory"
    },
    {
        question: "The decision-making perspective on confessions assumes that suspects:",
        choice1: "Confess under subconscious stress",
        choice2: "Rationally weigh the costs and benefits of confessing",
        choice3: "Succumb to intense external pressure",
        choice4: "Act out of fear of losing familial support",
        answer: "Rationally weigh the costs and benefits of confessing"
    },
    {
        question: "A suspect confesses after their lawyer advises them that cooperating could result in a plea deal with reduced charges. This reflects:",
        choice1: "Psychoanalytic theory",
        choice2: "Decision-making perspective",
        choice3: "Cognitive-behavioural theory",
        choice4: "Social-psychological theory",
        answer: "Decision-making perspective"
    },
    {
        question: "Which scenario would most challenge the validity of the decision-making perspective?",
        choice1: "A suspect confesses to end a lengthy interrogation.",
        choice2: "A suspect confesses to avoid feelings of guilt.",
        choice3: "A suspect confesses believing it will reduce their sentence.",
        choice4: "A suspect confesses after a lawyer’s advice.",
        answer: "A suspect confesses to end a lengthy interrogation."
    },
    {
        question: "Cognitive-behavioural theory suggests that a suspect’s confession is driven by:",
        choice1: "Subconscious guilt and anxiety",
        choice2: "Rational evaluation of benefits",
        choice3: "Desire to maintain or repair relationships",
        choice4: "External pressures like stress",
        answer: "Desire to maintain or repair relationships"
    },
    {
        question: "A suspect confesses after seeing how their crime hurt their family and realizing that confessing might repair their bond. This scenario reflects:",
        choice1: "Social-psychological theory",
        choice2: "Cognitive-behavioural theory",
        choice3: "Decision-making perspective",
        choice4: "Psychoanalytic theory",
        answer: "Cognitive-behavioural theory"
    },
    {
        question: "A suspect repeatedly rehearses their denial during interrogation but confesses when confronted with undeniable evidence. This most likely demonstrates:",
        choice1: "Psychoanalytic theory",
        choice2: "Decision-making perspective",
        choice3: "Cognitive-behavioural theory",
        choice4: "Social-psychological theory",
        answer: 2
    },
    {
        question: "Social-psychological theory emphasizes that confessions often result from:",
        choice1: "Rational self-interest",
        choice2: "Unconscious guilt",
        choice3: "External pressures like stress and interrogation tactics",
        choice4: "Emotional ties to family or society",
        answer: 3
    },
    {
        question: "After 12 hours of continuous questioning, a suspect confesses just to escape the stress. This confession aligns with:",
        choice1: "Psychoanalytic theory",
        choice2: "Decision-making perspective",
        choice3: "Social-psychological theory",
        choice4: "Cognitive-behavioural theory",
        answer: 3
    },
    {
        question: "Which of these interrogation techniques would most likely lead to a confession under social-psychological theory?",
        choice1: "Presenting evidence rationally",
        choice2: "Encouraging self-reflection and guilt",
        choice3: "Creating stress through isolation and time pressure",
        choice4: "Offering emotional support to build trust",
        answer: "Creating stress through isolation and time pressure"
    },
    {
        question: "A teenager confesses to shoplifting after being told that confessing will 'show maturity and responsibility.' Which theory best explains this confession?",
        choice1: "Psychoanalytic theory",
        choice2: "Decision-making perspective",
        choice3: "Cognitive-behavioural theory",
        choice4: "Social-psychological theory",
        answer: "Cognitive-behavioural theory"
    },
    {
        question: "A suspect confesses because they are physically and emotionally exhausted after 48 hours of isolation. Which theory applies?",
        choice1: "Social-psychological theory",
        choice2: "Decision-making perspective",
        choice3: "Cognitive-behavioural theory",
        choice4: "Psychoanalytic theory",
        answer: "Social-psychological theory"
    },
    {
        question: "A suspect is offered leniency if they confess before their co-conspirator does. Their eventual confession reflects:",
        choice1: "Psychoanalytic theory",
        choice2: "Cognitive-behavioural theory",
        choice3: "Decision-making perspective",
        choice4: "Social-psychological theory",
        answer: "Decision-making perspective"
    },
    {
        question: "A mother confesses to a minor theft after realizing her silence could lead to her children’s suffering. This demonstrates:",
        choice1: "Social-psychological theory",
        choice2: "Cognitive-behavioural theory",
        choice3: "Decision-making perspective",
        choice4: "Psychoanalytic theory",
        answer: "Cognitive-behavioural theory"
    },
    {
        question: "Which theory would best explain a false confession elicited through manipulative questioning?",
        choice1: "Decision-making perspective",
        choice2: "Cognitive-behavioural theory",
        choice3: "Psychoanalytic theory",
        choice4: "Social-psychological theory",
        answer: "Social-psychological theory"
    },
    {
        question: "If a suspect’s confession is motivated by guilt and a subconscious need to restore moral balance, this aligns with:",
        choice1: "Decision-making perspective",
        choice2: "Psychoanalytic theory",
        choice3: "Social-psychological theory",
        choice4: "Cognitive-behavioural theory",
        answer: "Psychoanalytic theory"
    },
    {
        question: "Which theory offers the strongest explanation for confessions elicited under duress?",
        choice1: "Psychoanalytic theory",
        choice2: "Decision-making perspective",
        choice3: "Social-psychological theory",
        choice4: "Cognitive-behavioural theory",
        answer: "Social-psychological theory"
    },
    {
        question: "A suspect confesses to avoid legal battles and resolve the case quickly. This confession is best explained by:",
        choice1: "Psychoanalytic theory",
        choice2: "Social-psychological theory",
        choice3: "Decision-making perspective",
        choice4: "Cognitive-behavioural theory",
        answer: "Decision-making perspective"
    },
    {
        question: "Which of the following is a common strategy police use to delay issuing the Miranda warning?",
        choice1: "Misrepresenting the law",
        choice2: "Using non-custodial interviews",
        choice3: "Coercing a confession",
        choice4: "Offering leniency",
        answer: "Using non-custodial interviews"
    },
    {
        question: "A suspect voluntarily speaks to police at their home without being arrested or detained. This situation avoids Miranda warnings because:",
        choice1: "The suspect initiated the interaction",
        choice2: "The suspect is not in custody",
        choice3: "Police did not have probable cause",
        choice4: "The crime was not serious",
        answer: "The suspect is not in custody"
    },
    {
        question: "Police conducting a two-step interrogation intentionally delay giving a Miranda warning until after a confession is obtained. This practice is known as:",
        choice1: "Non-custodial questioning",
        choice2: "The Reid Technique",
        choice3: "Question-first strategy",
        choice4: "Custodial coercion",
        answer: "Question-first strategy"
    },
    {
        question: "Under the “public safety exception,” police may delay Miranda warnings when:",
        choice1: "The suspect is uncooperative",
        choice2: "Officers need to secure immediate evidence",
        choice3: "There is an imminent threat to public safety",
        choice4: "The interrogation is taking place in public",
        answer: "There is an imminent threat to public safety"
    },
    {
        question: "Which of the following techniques might police use to elicit incriminating statements without violating Miranda?",
        choice1: "Threatening the suspect with harsher penalties",
        choice2: "Engaging in casual conversation",
        choice3: "Conducting an intense interrogation",
        choice4: "Asking leading questions after the warning",
        answer: "Engaging in casual conversation"
    },
    {
        question: "In which of these scenarios is a Miranda warning not required?",
        choice1: "A suspect is questioned at the scene of a crime.",
        choice2: "A suspect is interrogated in custody.",
        choice3: "A suspect provides a written statement in custody.",
        choice4: "A suspect confesses during booking procedures.",
        answer: "A suspect is questioned at the scene of a crime."
    },
    {
        question: "Why might police intentionally fail to clarify if a suspect is under arrest during questioning?",
        choice1: "To create confusion",
        choice2: "To establish rapport",
        choice3: "To avoid invoking Miranda warnings",
        choice4: "To reduce the chance of legal challenges",
        answer: "To avoid invoking Miranda warnings"
    },
    {
        question: "Police may use an “off-the-record” approach to bypass Miranda warnings by:",
        choice1: "Offering immunity for cooperation",
        choice2: "Suggesting the conversation is informal",
        choice3: "Questioning in the presence of a lawyer",
        choice4: "Recording the confession secretly",
        answer: "Suggesting the conversation is informal"
    },
    {
        question: "Police often minimize the severity of Miranda warnings to suspects by saying:",
        choice1: "This is just a formality.",
        choice2: "You don’t need a lawyer here.",
        choice3: "It’s better if you cooperate now.",
        choice4: "You don’t have to sign anything.",
        answer: "This is just a formality."
    },
    {
        question: "Which court ruling restricted police from using a two-step interrogation strategy to avoid Miranda compliance?",
        choice1: "Miranda v. Arizona",
        choice2: "Missouri v. Seibert",
        choice3: "Terry v. Ohio",
        choice4: "Gideon v. Wainwright",
        answer: "Missouri v. Seibert"
    },
    {
        question: "For a suspect to waive their Miranda rights, the waiver must be:",
        choice1: "Voluntary, informed, and intelligent",
        choice2: "Coerced but documented",
        choice3: "Signed by a lawyer",
        choice4: "Verified by a judge",
        answer: "Voluntary, informed, and intelligent"
    },
    {
        question: "A juvenile suspect is unlikely to validly waive their Miranda rights if:",
        choice1: "They are questioned in the presence of a parent",
        choice2: "They lack the mental capacity to understand their rights",
        choice3: "They are interrogated in a school setting",
        choice4: "They initially decline to talk but later change their mind",
        answer: "They lack the mental capacity to understand their rights"
    },
    {
        question: "In determining the validity of a Miranda waiver, courts consider:",
        choice1: "The suspect’s willingness to cooperate",
        choice2: "The suspect’s understanding of the rights they are waiving",
        choice3: "Whether the suspect has prior criminal history",
        choice4: "The severity of the alleged crime",
        answer: "The suspect’s understanding of the rights they are waiving"
    },
    {
        question: "An intoxicated suspect waives their Miranda rights and confesses. Courts are likely to:",
        choice1: "Accept the confession if the suspect showed some understanding of their rights",
        choice2: "Automatically dismiss the confession",
        choice3: "Require the suspect’s lawyer to validate the waiver",
        choice4: "Consider the confession voluntary regardless of intoxication",
        answer: "Accept the confession if the suspect showed some understanding of their rights"
    },
    {
        question: "A suspect waives their Miranda rights after being misled about the consequences. The waiver is likely:",
        choice1: "Valid because the suspect signed it",
        choice2: "Invalid because it was not informed",
        choice3: "Valid because police are not required to explain legal consequences",
        choice4: "Invalid unless a lawyer was present",
        answer: "Invalid because it was not informed"
    },
    {
        question: "In which situation might a waiver of Miranda rights be considered invalid?",
        choice1: "A suspect asks for clarification before waiving their rights.",
        choice2: "A suspect is promised leniency for cooperation.",
        choice3: "A suspect waives their rights in writing.",
        choice4: "A suspect answers questions after hearing their rights.",
        answer: "A suspect is promised leniency for cooperation."
    },
    {
        question: "Which U.S. Supreme Court case emphasized the importance of understanding Miranda rights before waiving them?",
        choice1: "Miranda v. Arizona",
        choice2: "Berghuis v. Thompkins",
        choice3: "Tinker v. Des Moines",
        choice4: "Mapp v. Ohio",
        answer: "Miranda v. Arizona"
    },
    {
        question: "A waiver of Miranda rights is presumed invalid if the suspect:",
        choice1: "Did not sign a waiver form",
        choice2: "Lacked the mental capacity to understand the waiver",
        choice3: "Requested a lawyer before waiving their rights",
        choice4: "Was arrested without probable cause",
        answer: "Lacked the mental capacity to understand the waiver"
    },
    {
        question: "If a suspect initially waives their Miranda rights but later invokes them, police must:",
        choice1: "Continue questioning unless the suspect explicitly refuses",
        choice2: "Cease questioning immediately",
        choice3: "Resume questioning after 24 hours",
        choice4: "Confirm the waiver in writing",
        answer: "Cease questioning immediately"
    },
    {
        question: "Courts assess whether a suspect knowingly waived their rights by examining:",
        choice1: "The duration of the interrogation",
        choice2: "The suspect’s background, intelligence, and experience",
        choice3: "The type of crime under investigation",
        choice4: "The interrogation setting",
        answer: "The suspect’s background, intelligence, and experience"
    },
    {
        question: "Which of the following is required for a suspect to waive their Miranda rights?",
        choice1: "Being informed of the consequences of the waiver",
        choice2: "Voluntary consent to waive the rights",
        choice3: "Having a lawyer present",
        choice4: "None of the above",
        answer: "Voluntary consent to waive the rights",
        rationale: "A suspect must voluntarily consent to waive their Miranda rights. The waiver must be made knowingly, intelligently, and voluntarily, without coercion or duress."
    },
    {
        question: "What factor is most critical in determining a suspect’s capacity to waive their Miranda rights?",
        choice1: "The seriousness of the crime",
        choice2: "The suspect’s mental state",
        choice3: "The suspect’s prior criminal record",
        choice4: "The length of the interrogation",
        answer: "The suspect’s mental state",
        rationale: "The most important factor in determining a suspect's capacity to waive their rights is their mental state. A person must be mentally competent to understand their rights and make an informed decision."
    },
    {
        question: "A juvenile suspect is considered incapable of waiving their Miranda rights if they:",
        choice1: "Are under the age of 18",
        choice2: "Have an inadequate understanding of their rights",
        choice3: "Have been arrested for a violent crime",
        choice4: "Are alone without a parent or guardian present",
        answer: "Have an inadequate understanding of their rights",
        rationale: "A juvenile suspect is presumed incapable of waiving their Miranda rights if they do not understand their rights, which is often determined by their age, maturity, and comprehension."
    },
    {
        question: "In cases where the suspect is intoxicated, courts evaluate whether they can waive their Miranda rights by considering:",
        choice1: "The suspect's ability to understand the warnings and make an informed choice",
        choice2: "Whether the intoxication was voluntary or involuntary",
        choice3: "The suspect’s history with law enforcement",
        choice4: "How long the suspect has been intoxicated",
        answer: "The suspect's ability to understand the warnings and make an informed choice",
        rationale: "The primary factor courts consider is whether the suspect is able to understand the warnings and make an informed choice about waiving their rights, regardless of the cause of intoxication."
    },
    {
        question: "Which of the following scenarios may lead to the invalidation of a Miranda waiver?",
        choice1: "The suspect was informed of their rights but did not immediately invoke them",
        choice2: "The suspect has a mental impairment affecting their ability to understand their rights",
        choice3: "The suspect is aware of the charges against them",
        choice4: "The suspect signs a waiver but does not confess immediately",
        answer: "The suspect has a mental impairment affecting their ability to understand their rights",
        rationale: "If a suspect has a mental impairment that affects their ability to understand their rights, their waiver may be considered invalid."
    },
    {
        question: "A suspect with an intellectual disability may be presumed incapable of waiving their Miranda rights if:",
        choice1: "They fail to understand the warnings provided",
        choice2: "They sign the waiver in front of a witness",
        choice3: "They are questioned outside of a detention facility",
        choice4: "They are informed of their rights in their native language",
        answer: "They fail to understand the warnings provided",
        rationale: "A person with an intellectual disability may be presumed incapable of waiving their rights if they cannot understand the rights that are being explained to them."
    },
    {
        question: "What is the primary consideration in evaluating whether a suspect's waiver of Miranda rights is valid?",
        choice1: "Whether the suspect made an informed decision based on their knowledge and experience",
        choice2: "Whether the confession was voluntary",
        choice3: "Whether the suspect is eligible for parole",
        choice4: "Whether the waiver is written or verbal",
        answer: "Whether the suspect made an informed decision based on their knowledge and experience",
        rationale: "The primary consideration is whether the suspect made an informed decision, which depends on their understanding of the rights and the consequences of waiving them."
    },
    {
        question: "For a waiver to be valid, it must be:",
        choice1: "Documented on paper only",
        choice2: "Made knowingly, voluntarily, and intelligently",
        choice3: "Done after the suspect has been arrested",
        choice4: "Done without a lawyer present",
        answer: "Made knowingly, voluntarily, and intelligently",
        rationale: "A Miranda waiver must be made knowingly, voluntarily, and intelligently. The suspect must understand the consequences of waiving their rights."
    },
    {
        question: "Which scenario best demonstrates an invalid Miranda waiver?",
        choice1: "A suspect with a mental health condition is informed of their rights and waives them",
        choice2: "A suspect who has been previously convicted of similar crimes waives their rights",
        choice3: "A suspect with an intellectual disability signs a waiver without fully understanding it",
        choice4: "A suspect is read their rights by a police officer and agrees to speak without a lawyer",
        answer: "A suspect with an intellectual disability signs a waiver without fully understanding it",
        rationale: "If a suspect with an intellectual disability signs a waiver without understanding the rights they are waiving, the waiver is likely invalid."
    },
    {
        question: "If a suspect is unable to understand the Miranda warnings due to a language barrier, they may not effectively waive their rights unless:",
        choice1: "A qualified interpreter is provided",
        choice2: "They have a lawyer present to clarify their rights",
        choice3: "The officer speaks their language fluently",
        choice4: "They are informed in writing",
        answer: "A qualified interpreter is provided",
        rationale: "If a suspect does not understand the Miranda warnings due to a language barrier, a qualified interpreter must be provided to ensure that the waiver is made knowingly and voluntarily."
    },
    {
        question: "In determining the validity of a Miranda waiver, courts may consider all of the following EXCEPT:",
        choice1: "The suspect’s age and education level",
        choice2: "The suspect’s ability to recall the exact wording of the warning",
        choice3: "The suspect’s mental and physical condition at the time of the waiver",
        choice4: "The length of time since the suspect was read their rights",
        answer: "The suspect’s ability to recall the exact wording of the warning",
        rationale: "The ability to recall the exact wording is not as important as understanding the meaning and consequences of the warning, which courts focus on."
    },
    {
        question: "Which factor is NOT a determinant of whether a suspect has the capacity to waive their Miranda rights?",
        choice1: "The length of the interrogation",
        choice2: "The emotional state of the suspect",
        choice3: "The presence of a lawyer during the waiver",
        choice4: "Whether the suspect has been previously arrested",
        answer: "Whether the suspect has been previously arrested",
        rationale: "The fact that a suspect has been previously arrested does not affect their capacity to waive Miranda rights. The focus is on their mental state, understanding, and the voluntariness of the waiver."
    },
    {
        question: "If a suspect is under significant duress (e.g., being threatened with physical harm), their waiver of Miranda rights may be invalid because:",
        choice1: "The waiver was not voluntary",
        choice2: "The suspect lacked sufficient intelligence to understand their rights",
        choice3: "The suspect did not sign the waiver form",
        choice4: "The waiver was not signed by a lawyer",
        answer: "The waiver was not voluntary",
        rationale: "If a suspect is under duress or coercion, their waiver cannot be considered voluntary, and therefore may be invalid."
    },
    {
        question: "Which of the following best demonstrates a suspect having the capacity to waive their Miranda rights?",
        choice1: "A suspect signs a waiver without fully understanding the implications",
        choice2: "A suspect refuses to sign the waiver but agrees to talk to officers",
        choice3: "A suspect who has prior legal experience is read their rights and waives them knowingly",
        choice4: "A suspect who is under the influence of drugs agrees to waive their rights",
        answer: "A suspect who has prior legal experience is read their rights and waives them knowingly",
        rationale: "A suspect who has prior legal experience is more likely to understand the implications of waiving their rights, making their waiver valid."
    },
    {
        question: "A suspect waives their Miranda rights after being informed that they will be held in detention indefinitely. The waiver may be considered invalid if:",
        choice1: "The suspect felt coerced into making the waiver",
        choice2: "The suspect is later granted release on bail",
        choice3: "The officer did not clarify the detention length",
        choice4: "The waiver was not signed in front of a witness",
        answer: "The suspect felt coerced into making the waiver",
        rationale: "If the suspect felt coerced or under pressure to waive their rights, the waiver may be considered invalid."
    },
    {
        question: "To determine whether a suspect is capable of waiving their Miranda rights, courts will review:",
        choice1: "The suspect’s criminal history and prior arrests",
        choice2: "The suspect’s understanding of the nature and consequences of their actions",
        choice3: "The time of day the interrogation occurred",
        choice4: "The location where the suspect was questioned",
        answer: "The suspect’s understanding of the nature and consequences of their actions",
        rationale: "Courts focus on whether the suspect understands the nature and consequences of their actions, which includes understanding their rights and the decision to waive them."
    },
    {
        question: "A suspect who is too young to fully understand their Miranda rights may still waive them if:",
        choice1: "They are questioned by a school resource officer",
        choice2: "A parent or guardian is present to help explain the rights",
        choice3: "They are not arrested but voluntarily speak to the police",
        choice4: "They are read their rights in a language they understand",
        answer: "A parent or guardian is present to help explain the rights",
        rationale: "A juvenile suspect may waive their rights if a parent or guardian is present to help them understand the waiver and the implications of it."
    },
    {
        question: "Which of the following is required for a suspect to waive their Miranda rights?",
        choice1: "Being informed of the consequences of the waiver",
        choice2: "Voluntary consent to waive the rights",
        choice3: "Having a lawyer present",
        choice4: "None of the above",
        answer: "Voluntary consent to waive the rights",
        rationale: "A suspect must voluntarily consent to waive their Miranda rights. The waiver must be made knowingly, intelligently, and voluntarily, without coercion or duress."
    },
    {
        question: "What factor is most critical in determining a suspect’s capacity to waive their Miranda rights?",
        choice1: "The seriousness of the crime",
        choice2: "The suspect’s mental state",
        choice3: "The suspect’s prior criminal record",
        choice4: "The length of the interrogation",
        answer: "The suspect’s mental state",
        rationale: "The most important factor in determining a suspect's capacity to waive their rights is their mental state. A person must be mentally competent to understand their rights and make an informed decision."
    },
    {
        question: "A juvenile suspect is considered incapable of waiving their Miranda rights if they:",
        choice1: "Are under the age of 18",
        choice2: "Have an inadequate understanding of their rights",
        choice3: "Have been arrested for a violent crime",
        choice4: "Are alone without a parent or guardian present",
        answer: 2,
        rationale: "A juvenile suspect is presumed incapable of waiving their Miranda rights if they do not understand their rights, which is often determined by their age, maturity, and comprehension."
    },
    {
        question: "In cases where the suspect is intoxicated, courts evaluate whether they can waive their Miranda rights by considering:",
        choice1: "The suspect's ability to understand the warnings and make an informed choice",
        choice2: "Whether the intoxication was voluntary or involuntary",
        choice3: "The suspect’s history with law enforcement",
        choice4: "How long the suspect has been intoxicated",
        answer: "The suspect's ability to understand the warnings and make an informed choice",
        rationale: "The primary factor courts consider is whether the suspect is able to understand the warnings and make an informed choice about waiving their rights, regardless of the cause of intoxication."
    },
    {
        question: "Which of the following scenarios may lead to the invalidation of a Miranda waiver?",
        choice1: "The suspect was informed of their rights but did not immediately invoke them",
        choice2: "The suspect has a mental impairment affecting their ability to understand their rights",
        choice3: "The suspect is aware of the charges against them",
        choice4: "The suspect signs a waiver but does not confess immediately",
        answer: "The suspect has a mental impairment affecting their ability to understand their rights",
        rationale: "If a suspect has a mental impairment that affects their ability to understand their rights, their waiver may be considered invalid."
    },
    {
        question: "A suspect with an intellectual disability may be presumed incapable of waiving their Miranda rights if:",
        choice1: "They fail to understand the warnings provided",
        choice2: "They sign the waiver in front of a witness",
        choice3: "They are questioned outside of a detention facility",
        choice4: "They are informed of their rights in their native language",
        answer: "They fail to understand the warnings provided",
        rationale: "A person with an intellectual disability may be presumed incapable of waiving their rights if they cannot understand the rights that are being explained to them."
    },
    {
        question: "What is the primary consideration in evaluating whether a suspect's waiver of Miranda rights is valid?",
        choice1: "Whether the suspect made an informed decision based on their knowledge and experience",
        choice2: "Whether the confession was voluntary",
        choice3: "Whether the suspect is eligible for parole",
        choice4: "Whether the waiver is written or verbal",
        answer: "Whether the suspect made an informed decision based on their knowledge and experience",
        rationale: "The primary consideration is whether the suspect made an informed decision, which depends on their understanding of the rights and the consequences of waiving them."
    },
    {
        question: "For a waiver to be valid, it must be:",
        choice1: "Documented on paper only",
        choice2: "Made knowingly, voluntarily, and intelligently",
        choice3: "Done after the suspect has been arrested",
        choice4: "Done without a lawyer present",
        answer: "Made knowingly, voluntarily, and intelligently",
        rationale: "A Miranda waiver must be made knowingly, voluntarily, and intelligently. The suspect must understand the consequences of waiving their rights."
    },
    {
        question: "Which scenario best demonstrates an invalid Miranda waiver?",
        choice1: "A suspect with a mental health condition is informed of their rights and waives them",
        choice2: "A suspect who has been previously convicted of similar crimes waives their rights",
        choice3: "A suspect with an intellectual disability signs a waiver without fully understanding it",
        choice4: "A suspect is read their rights by a police officer and agrees to speak without a lawyer",
        answer: "A suspect with an intellectual disability signs a waiver without fully understanding it",
        rationale: "If a suspect with an intellectual disability signs a waiver without understanding the rights they are waiving, the waiver is likely invalid."
    },
    {
        question: "If a suspect is unable to understand the Miranda warnings due to a language barrier, they may not effectively waive their rights unless:",
        choice1: "A qualified interpreter is provided",
        choice2: "They have a lawyer present to clarify their rights",
        choice3: "The officer speaks their language fluently",
        choice4: "They are informed in writing",
        answer: "A qualified interpreter is provided",
        rationale: "If a suspect does not understand the Miranda warnings due to a language barrier, a qualified interpreter must be provided to ensure that the waiver is made knowingly and voluntarily."
    },
    {
        question: "In determining the validity of a Miranda waiver, courts may consider all of the following EXCEPT:",
        choice1: "The suspect’s age and education level",
        choice2: "The suspect’s ability to recall the exact wording of the warning",
        choice3: "The suspect’s mental and physical condition at the time of the waiver",
        choice4: "The length of time since the suspect was read their rights",
        answer: "The suspect’s ability to recall the exact wording of the warning",
        rationale: "The ability to recall the exact wording is not as important as understanding the meaning and consequences of the warning, which courts focus on."
    },
    {
        question: "Which factor is NOT a determinant of whether a suspect has the capacity to waive their Miranda rights?",
        choice1: "The length of the interrogation",
        choice2: "The emotional state of the suspect",
        choice3: "The presence of a lawyer during the waiver",
        choice4: "Whether the suspect has been previously arrested",
        answer: "Whether the suspect has been previously arrested",
        rationale: "The fact that a suspect has been previously arrested does not affect their capacity to waive Miranda rights. The focus is on their mental state, understanding, and the voluntariness of the waiver."
    },
    {
        question: "If a suspect is under significant duress (e.g., being threatened with physical harm), their waiver of Miranda rights may be invalid because:",
        choice1: "The waiver was not voluntary",
        choice2: "The suspect lacked sufficient intelligence to understand their rights",
        choice3: "The suspect did not sign the waiver form",
        choice4: "The waiver was not signed by a lawyer",
        answer: "The waiver was not voluntary",
        rationale: "If a suspect is under duress or coercion, their waiver cannot be considered voluntary, and therefore may be invalid."
    },
    {
        question: "Which of the following best demonstrates a suspect having the capacity to waive their Miranda rights?",
        choice1: "A suspect signs a waiver without fully understanding the implications",
        choice2: "A suspect refuses to sign the waiver but agrees to talk to officers",
        choice3: "A suspect who has prior legal experience is read their rights and waives them knowingly",
        choice4: "A suspect who is under the influence of drugs agrees to waive their rights",
        answer: "A suspect who has prior legal experience is read their rights and waives them knowingly",
        rationale: "A suspect who has prior legal experience is more likely to understand the implications of waiving their rights, making their waiver valid."
    },
    {
        question: "A suspect waives their Miranda rights after being informed that they will be held in detention indefinitely. The waiver may be considered invalid if:",
        choice1: "The suspect felt coerced into making the waiver",
        choice2: "The suspect is later granted release on bail",
        choice3: "The officer did not clarify the detention length",
        choice4: "The waiver was not signed in front of a witness",
        answer: "The suspect felt coerced into making the waiver",
        rationale: "If the suspect felt coerced or under pressure to waive their rights, the waiver may be considered invalid."
    },
    {
        question: "To determine whether a suspect is capable of waiving their Miranda rights, courts will review:",
        choice1: "The suspect’s criminal history and prior arrests",
        choice2: "The suspect’s understanding of the nature and consequences of their actions",
        choice3: "The time of day the interrogation occurred",
        choice4: "The location where the suspect was questioned",
        answer: "The suspect’s understanding of the nature and consequences of their actions",
        rationale: "Courts focus on whether the suspect understands the nature and consequences of their actions, which includes understanding their rights and the decision to waive them."
    },
    {
        question: "A suspect who is too young to fully understand their Miranda rights may still waive them if:",
        choice1: "They are questioned by a school resource officer",
        choice2: "A parent or guardian is present to help explain the rights",
        choice3: "They are not arrested but voluntarily speak to the police",
        choice4: "They are read their rights in a language they understand",
        answer: "A parent or guardian is present to help explain the rights",
        rationale: "A juvenile suspect may waive their rights if a parent or guardian is present to help them understand the waiver and the implications of it."
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
