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
        question: "In the context of the criminal justice system, what is the primary role of a confessor?",
        choice1: "To provide evidence against the victim",
        choice2: "To admit involvement in a crime",
        choice3: "To assist in the defense's case preparation",
        choice4: "To influence public opinion about the crime",
        answer: "To admit involvement in a crime",
        rationale: "The primary role of a confessor is to admit involvement in a crime, which can serve as evidence in legal proceedings."
    },
    {
        question: "Which of the following is a key factor determining the credibility of a confessor's statement in the criminal justice system?",
        choice1: "The social status of the confessor",
        choice2: "The circumstances under which the confession was obtained",
        choice3: "The relationship between the confessor and the victim",
        choice4: "The length of time it took to obtain the confession",
        answer: "The circumstances under which the confession was obtained",
        rationale: "The circumstances under which the confession was obtained are critical in determining its credibility and admissibility in court."
    },
    {
        question: "What is the significance of corroborating evidence alongside a confession in criminal proceedings?",
        choice1: "It confirms the confession's authenticity and reliability",
        choice2: "It ensures the confessor receives leniency",
        choice3: "It reduces the need for a trial",
        choice4: "It simplifies the legal process for the prosecutor",
        answer: "It confirms the confession's authenticity and reliability",
        rationale: "Corroborating evidence is essential to confirm the authenticity and reliability of a confession, preventing wrongful convictions."
    },
    {
        question: "What legal safeguard is essential to protect a confessor’s rights during interrogation?",
        choice1: "Public access to the confession process",
        choice2: "Access to a jury during interrogation",
        choice3: "The presence of legal counsel",
        choice4: "The option to provide anonymous testimony",
        answer: "The presence of legal counsel",
        rationale: "The presence of legal counsel ensures that the confessor's rights are protected during interrogation and prevents coercion."
    },
    {
        question: "How does a confessor's mental state impact the admissibility of their confession in court?",
        choice1: "It determines whether the confession can be broadcast to the public",
        choice2: "It affects the court's decision to accept the confession as voluntary",
        choice3: "It allows the confessor to withdraw their statement at any time",
        choice4: "It influences the severity of the punishment",
        answer: "It affects the court's decision to accept the confession as voluntary",
        rationale: "A confessor's mental state is crucial in assessing whether the confession was made voluntarily, a key requirement for admissibility."
    },
    {
        question: "What is the primary characteristic of a forced confession?",
        choice1: "It is obtained through persuasion",
        choice2: "It is given willingly by the suspect",
        choice3: "It is extracted using threats or coercion",
        choice4: "It is provided anonymously",
        answer: "It is extracted using threats or coercion",
        rationale: "A forced confession is characterized by its extraction through threats, coercion, or other forms of duress."
    },
    {
        question: "Why are forced confessions often deemed inadmissible in court?",
        choice1: "They are obtained without evidence",
        choice2: "They do not comply with legal ethical standards",
        choice3: "They take too long to obtain",
        choice4: "They are always made in private",
        answer: "They do not comply with legal ethical standards",
        rationale: "Forced confessions are inadmissible because they violate ethical standards and may not reflect the truth."
    },
    {
        question: "Which of the following is a common effect of obtaining a forced confession?",
        choice1: "It ensures a fair trial",
        choice2: "It undermines the integrity of the justice system",
        choice3: "It guarantees the suspect’s cooperation",
        choice4: "It eliminates the need for further investigation",
        answer: "It undermines the integrity of the justice system",
        rationale: "Forced confessions undermine the integrity of the justice system by prioritizing coercion over truth."
    },
    {
        question: "What legal safeguard is designed to prevent forced confessions?",
        choice1: "Recording interrogations",
        choice2: "Allowing unlimited detention of suspects",
        choice3: "Prohibiting the presence of legal counsel",
        choice4: "Removing all rights to remain silent",
        answer: "Recording interrogations",
        rationale: "Recording interrogations ensures transparency and protects against coercive practices that lead to forced confessions."
    },
    {
        question: "What is one major ethical issue associated with forced confessions?",
        choice1: "They are obtained too quickly",
        choice2: "They are not detailed enough",
        choice3: "They can lead to wrongful convictions",
        choice4: "They make suspects too cooperative",
        answer: "They can lead to wrongful convictions",
        rationale: "Forced confessions are a major ethical concern because they can lead to wrongful convictions, harming innocent individuals."
    },
    {
        question: "Which of the following is a primary cause of false confessions?",
        choice1: "Effective legal representation",
        choice2: "Physical and psychological coercion during interrogation",
        choice3: "Access to all evidence by the suspect",
        choice4: "Strict adherence to ethical interrogation techniques",
        answer: "Physical and psychological coercion during interrogation",
        rationale: "False confessions often result from coercive interrogation methods, such as physical intimidation or psychological pressure."
    },
    {
        question: "What is a major consequence of false confessions in the criminal justice system?",
        choice1: "Increased public trust in law enforcement",
        choice2: "The conviction of the actual perpetrator",
        choice3: "Wrongful convictions of innocent individuals",
        choice4: "Faster resolution of cases",
        answer: "Wrongful convictions of innocent individuals",
        rationale: "False confessions can lead to the wrongful conviction of innocent people, undermining justice and public confidence."
    },
    {
        question: "Which psychological factor can lead to a false confession?",
        choice1: "A strong sense of self-esteem",
        choice2: "An intellectual understanding of legal rights",
        choice3: "High susceptibility to suggestion or compliance",
        choice4: "Confidence in the judicial system",
        answer: "High susceptibility to suggestion or compliance",
        rationale: "Individuals who are highly suggestible or eager to comply with authority are more likely to provide false confessions."
    },
    {
        question: "What is a common reason for an innocent person to provide a false confession?",
        choice1: "The promise of reduced charges or lighter sentences",
        choice2: "A deep understanding of interrogation strategies",
        choice3: "A desire to expose the actual perpetrator",
        choice4: "Access to legal counsel during interrogation",
        answer: "The promise of reduced charges or lighter sentences",
        rationale: "Promises of leniency or reduced punishment often compel innocent individuals to falsely confess, hoping for a quick resolution."
    },
    {
        question: "What is one systemic consequence of false confessions in the justice system?",
        choice1: "Reduced case backlog",
        choice2: "Improved interrogation standards",
        choice3: "Erosion of trust in law enforcement and judicial processes",
        choice4: "Increased accuracy of verdicts",
        answer: "Erosion of trust in law enforcement and judicial processes",
        rationale: "False confessions harm the justice system by eroding public trust in law enforcement and judicial fairness."
    },
    {
        question: "What is a primary cause of forced confessions in interrogation practices?",
        choice1: "A suspect's strong legal representation",
        choice2: "Coercion through physical abuse or threats",
        choice3: "Availability of video-recorded interrogations",
        choice4: "Use of rapport-building techniques",
        answer: "Coercion through physical abuse or threats",
        rationale: "Physical abuse or threats are common coercive methods used to force confessions during interrogations."
    },
    {
        question: "Which of the following is a significant consequence of forced confessions?",
        choice1: "Higher rates of accurate convictions",
        choice2: "The preservation of human rights",
        choice3: "The wrongful conviction of innocent individuals",
        choice4: "Strengthened trust in the justice system",
        answer: "The wrongful conviction of innocent individuals",
        rationale: "Forced confessions often lead to wrongful convictions, harming both the accused and the integrity of the justice system."
    },
    {
        question: "How does fear play a role in forced confessions?",
        choice1: "It motivates suspects to provide truthful statements",
        choice2: "It compels suspects to fabricate confessions to avoid further harm",
        choice3: "It ensures that suspects understand their legal rights",
        choice4: "It encourages a collaborative relationship with interrogators",
        answer: "It compels suspects to fabricate confessions to avoid further harm",
        rationale: "Fear of harm or punishment can pressure suspects into falsely confessing, regardless of their guilt or innocence."
    },
    {
        question: "What is a systemic cause that enables forced confessions to occur?",
        choice1: "Strict enforcement of ethical interrogation practices",
        choice2: "Lack of oversight or accountability during interrogations",
        choice3: "Presence of a defense attorney during questioning",
        choice4: "Mandatory recording of interrogation sessions",
        answer: "Lack of oversight or accountability during interrogations",
        rationale: "A lack of oversight allows unethical practices, such as coercion, to occur during interrogations, leading to forced confessions."
    },
    {
        question: "What is one long-term consequence of using forced confessions in the justice system?",
        choice1: "Increased public confidence in law enforcement",
        choice2: "Improved methods of evidence collection",
        choice3: "Erosion of trust in legal and judicial institutions",
        choice4: "More rapid resolution of criminal cases",
        answer: "Erosion of trust in legal and judicial institutions",
        rationale: "Forced confessions undermine public trust in the justice system by violating ethical standards and human rights."
    },
    {
        question: "What is the primary purpose of testimony in the criminal justice system?",
        choice1: "To provide physical evidence in a case",
        choice2: "To offer a firsthand account of events relevant to a case",
        choice3: "To ensure the defendant remains silent",
        choice4: "To determine sentencing guidelines",
        answer: "To offer a firsthand account of events relevant to a case",
        rationale: "Testimony provides a firsthand account of events, which is crucial for establishing facts in a legal case."
    },
    {
        question: "Which of the following types of testimony is considered most reliable in court?",
        choice1: "Eyewitness testimony",
        choice2: "Expert testimony",
        choice3: "Hearsay testimony",
        choice4: "Character testimony",
        answer: "Expert testimony",
        rationale: "Expert testimony is often considered reliable because it is based on specialized knowledge and expertise."
    },
    {
        question: "What is a common challenge associated with eyewitness testimony?",
        choice1: "It requires no verification",
        choice2: "It is often influenced by the witness's memory and perception",
        choice3: "It is only admissible if corroborated by physical evidence",
        choice4: "It is rarely used in criminal trials",
        answer: "It is often influenced by the witness's memory and perception",
        rationale: "Eyewitness testimony can be unreliable due to the limitations of human memory and perception."
    },
    {
        question: "Why is cross-examination a critical part of evaluating testimony in court?",
        choice1: "It allows the witness to restate their testimony",
        choice2: "It helps to verify the accuracy and credibility of the testimony",
        choice3: "It prevents the defense from presenting their case",
        choice4: "It ensures the witness remains neutral during questioning",
        answer: "It helps to verify the accuracy and credibility of the testimony",
        rationale: "Cross-examination tests the accuracy and credibility of testimony, ensuring it stands up to scrutiny."
    },
    {
        question: "What is one major factor that can affect the credibility of a witness’s testimony?",
        choice1: "The age of the defendant",
        choice2: "The witness’s bias or personal interest in the case",
        choice3: "The type of crime being prosecuted",
        choice4: "The presence of a jury during the testimony",
        answer: "The witness’s bias or personal interest in the case",
        rationale: "A witness's bias or personal interest in a case can undermine the credibility of their testimony."
    },
    {
        question: "What is the main goal of criminal profiling in investigations?",
        choice1: "To identify potential witnesses",
        choice2: "To create a psychological and behavioral profile of an unknown offender",
        choice3: "To analyze forensic evidence at a crime scene",
        choice4: "To establish motive for the crime",
        answer: "To create a psychological and behavioral profile of an unknown offender",
        rationale: "Criminal profiling aims to provide a psychological and behavioral description of the offender to aid in their identification."
    },
    {
        question: "What is the primary purpose of a pre-interrogation interview?",
        choice1: "To intimidate the suspect into confessing",
        choice2: "To gather information and assess the suspect's credibility",
        choice3: "To present evidence to the suspect",
        choice4: "To record the suspect's confession",
        answer: "To gather information and assess the suspect's credibility",
        rationale: "A pre-interrogation interview is designed to gather preliminary information and evaluate the suspect's behavior and credibility."
    },
    {
        question: "During a pre-interrogation interview, which of the following is typically analyzed?",
        choice1: "The suspect's alibi and financial records",
        choice2: "The suspect's body language and verbal responses",
        choice3: "The suspect's relationship with witnesses",
        choice4: "The suspect's education and employment history",
        answer: "The suspect's body language and verbal responses",
        rationale: "Body language and verbal responses are assessed to detect signs of deception or truthfulness during the pre-interrogation phase."
    },
    {
        question: "What distinguishes a pre-interrogation interview from an interrogation?",
        choice1: "The use of evidence during questioning",
        choice2: "The presence of the suspect’s lawyer",
        choice3: "The level of coercion involved",
        choice4: "The goal of establishing rapport rather than eliciting a confession",
        answer: "The goal of establishing rapport rather than eliciting a confession",
        rationale: "Pre-interrogation interviews focus on building rapport and gathering information, whereas interrogations aim to elicit confessions."
    },
    {
        question: "Which technique is often used in a pre-interrogation interview to establish rapport with the suspect?",
        choice1: "Presenting evidence to the suspect",
        choice2: "Using aggressive questioning techniques",
        choice3: "Engaging in casual conversation to build trust",
        choice4: "Isolating the suspect from their surroundings",
        answer: "Engaging in casual conversation to build trust",
        rationale: "Building rapport through casual conversation creates a more cooperative atmosphere for obtaining truthful information."
    },
    {
        question: "Why is understanding the suspect's baseline behavior important during a pre-interrogation interview?",
        choice1: "To confirm their motive for the crime",
        choice2: "To identify deviations that may indicate deception",
        choice3: "To ensure the suspect feels comfortable",
        choice4: "To validate the evidence against the suspect",
        answer: "To identify deviations that may indicate deception",
        rationale: "Knowing the suspect's baseline behavior helps detect changes that may signal dishonesty or concealment."
    },
    {
        question: "What is the primary purpose of the Miranda warning?",
        choice1: "To inform suspects of their rights during a criminal investigation",
        choice2: "To force suspects to confess to their crimes",
        choice3: "To determine the guilt of the suspect before interrogation",
        choice4: "To ensure the suspect cooperates with law enforcement",
        answer: "To inform suspects of their rights during a criminal investigation",
        rationale: "The Miranda warning ensures suspects are aware of their rights, such as remaining silent and having legal representation, during a criminal investigation."
    },
    {
        question: "Which constitutional rights are emphasized in the Miranda warning?",
        choice1: "Right to a fair trial and right to privacy",
        choice2: "Right to remain silent and right to an attorney",
        choice3: "Right to due process and right to free speech",
        choice4: "Right to vote and right to legal counsel",
        answer: "Right to remain silent and right to an attorney",
        rationale: "The Miranda warning highlights the suspect's right to remain silent and their right to an attorney during questioning to prevent self-incrimination."
    },
    {
        question: "When must the Miranda warning be administered?",
        choice1: "Immediately after a suspect is arrested",
        choice2: "Before any custodial interrogation begins",
        choice3: "At the time of the suspect's trial",
        choice4: "Only if the suspect requests it",
        answer: "Before any custodial interrogation begins",
        rationale: "The Miranda warning must be given before a custodial interrogation to ensure that any statements made are admissible in court."
    },
    {
        question: "What happens if law enforcement fails to give a suspect the Miranda warning before interrogation?",
        choice1: "The suspect's statements can still be used in court",
        choice2: "The suspect is automatically released",
        choice3: "The suspect's statements may be excluded from evidence",
        choice4: "The suspect cannot be questioned further",
        answer: "The suspect's statements may be excluded from evidence",
        rationale: "If the Miranda warning is not provided, any statements made by the suspect may be inadmissible as evidence due to a violation of their rights."
    },
    {
        question: "Which of the following is NOT part of the Miranda warning?",
        choice1: "You have the right to remain silent",
        choice2: "You are entitled to a public defender",
        choice3: "Anything you say can be used against you in court",
        choice4: "You can choose to confess to the crime immediately",
        answer: "You can choose to confess to the crime immediately",
        rationale: "The Miranda warning does not compel suspects to confess; instead, it informs them of their rights to avoid self-incrimination."
    },
    {
        question: "What does it mean for a suspect to waive their Miranda rights?",
        choice1: "They refuse to answer any questions during interrogation",
        choice2: "They voluntarily give up their right to remain silent and to an attorney",
        choice3: "They request the presence of a public defender",
        choice4: "They decide to go to trial immediately",
        answer: "They voluntarily give up their right to remain silent and to an attorney",
        rationale: "Waiving Miranda rights means the suspect knowingly and voluntarily relinquishes their rights to remain silent and to legal counsel."
    },
    {
        question: "Which factor is most important in determining whether a suspect can validly waive their Miranda rights?",
        choice1: "The suspect's age and level of education",
        choice2: "Whether the suspect was coerced into waiving their rights",
        choice3: "The amount of evidence against the suspect",
        choice4: "The length of the interrogation",
        answer: "Whether the suspect was coerced into waiving their rights",
        rationale: "A valid waiver must be made voluntarily, without any coercion, and with full understanding of the rights being waived."
    },
    {
        question: "How can law enforcement ensure that a suspect's waiver of Miranda rights is valid?",
        choice1: "By forcing the suspect to sign a document",
        choice2: "By explaining the rights clearly and confirming the suspect understands them",
        choice3: "By recording the entire interrogation process",
        choice4: "By making the suspect waive the rights before a lawyer",
        answer: "By explaining the rights clearly and confirming the suspect understands them",
        rationale: "Law enforcement must clearly explain the Miranda rights and confirm the suspect understands them before accepting a waiver."
    },
    {
        question: "Which of the following could invalidate a suspect’s waiver of Miranda rights?",
        choice1: "The suspect was under emotional stress",
        choice2: "The suspect was intoxicated or mentally impaired",
        choice3: "The suspect was informed of their rights in a non-verbal manner",
        choice4: "The suspect initially refused to waive their rights but later agreed",
        answer: "The suspect was intoxicated or mentally impaired",
        rationale: "A waiver may be invalid if the suspect lacked the capacity to understand their rights due to intoxication, mental impairment, or other factors."
    },
    {
        question: "What legal standard is used to determine if a suspect knowingly waived their Miranda rights?",
        choice1: "Reasonable person standard",
        choice2: "Beyond a reasonable doubt",
        choice3: "Preponderance of evidence",
        choice4: "Totality of the circumstances",
        answer: "Totality of the circumstances",
        rationale: "Courts assess the totality of the circumstances, including the suspect’s age, intelligence, and conditions of the waiver, to determine if it was knowing and voluntary."
    },
    {
        question: "Which fundamental assumption underlies the Psychoanalytical Theory of confession?",
        choice1: "Confession is a rational choice made to reduce punishment",
        choice2: "Confession arises from unconscious guilt and the need for psychological relief",
        choice3: "Confession is solely influenced by external coercion",
        choice4: "Confession is a result of social conditioning and reinforcement",
        answer: "Confession arises from unconscious guilt and the need for psychological relief",
        rationale: "The Psychoanalytical Theory suggests that confessions stem from deep-seated guilt and an unconscious desire for punishment (Freud, 1923)."
    },
    {
        question: "According to the Decision-Making Theory, why might an innocent suspect falsely confess?",
        choice1: "Due to a pathological desire for notoriety",
        choice2: "To align with internalized guilt and trauma",
        choice3: "As a result of a cost-benefit analysis where confession seems like the best option",
        choice4: "Because of social pressure from peers",
        answer: "As a result of a cost-benefit analysis where confession seems like the best option",
        rationale: "Decision-Making Theory posits that suspects weigh potential outcomes and may confess if they believe it minimizes harm (Kassin & Gudjonsson, 2004)."
    },
    {
        question: "How does Cognitive-Behavioral Theory explain the process of confession?",
        choice1: "Confession is conditioned through reinforcement and learned behaviors",
        choice2: "Confession is an instinctive response to fear",
        choice3: "Confession occurs due to internal moral conflicts",
        choice4: "Confession is solely a legal construct with no psychological basis",
        answer: "Confession is conditioned through reinforcement and learned behaviors",
        rationale: "Cognitive-Behavioral Theory argues that confession results from learned responses, where individuals associate confession with potential rewards or relief from stress (Bandura, 1977)."
    },
    {
        question: "Which of the following best characterizes the Social-Psychological Theory of confession?",
        choice1: "Confession is influenced by the individual’s need to maintain social relationships and avoid disapproval",
        choice2: "Confession is primarily a result of cognitive dissonance",
        choice3: "Confession is a product of rational calculations",
        choice4: "Confession stems from an individual’s biological predisposition to honesty",
        answer: "Confession is influenced by the individual’s need to maintain social relationships and avoid disapproval",
        rationale: "Social-Psychological Theory suggests that social influence, pressure, and the need to maintain relationships play a crucial role in confessions (Asch, 1951)."
    },
    {
        question: "What is a key limitation of the Decision-Making Theory of confession?",
        choice1: "It does not consider the role of social influence",
        choice2: "It assumes that all individuals are rational actors",
        choice3: "It ignores the impact of psychological coercion",
        choice4: "It overlooks the biological basis of confessions",
        answer: "It assumes that all individuals are rational actors",
        rationale: "A major critique of Decision-Making Theory is that it assumes suspects make rational choices, which is not always true under duress (Kassin, 2012)."
    },
    {
        question: "Which theoretical framework best explains why juveniles are more susceptible to false confessions?",
        choice1: "Psychoanalytical Theory",
        choice2: "Decision-Making Theory",
        choice3: "Cognitive-Behavioral Theory",
        choice4: "Social-Psychological Theory",
        answer: "Social-Psychological Theory",
        rationale: "Social-Psychological Theory suggests that juveniles are highly susceptible to peer pressure and authority influence, making them more vulnerable to false confessions (Drizin & Leo, 2004)."
    },
    {
        question: "How does the Cognitive-Behavioral Theory relate to police interrogation tactics?",
        choice1: "It explains how suspects can be conditioned to confess through reward and punishment",
        choice2: "It suggests that suspects confess due to unconscious guilt",
        choice3: "It argues that suspects make rational choices in high-pressure situations",
        choice4: "It states that confessions are primarily influenced by legal knowledge",
        answer: "It explains how suspects can be conditioned to confess through reward and punishment",
        rationale: "Cognitive-Behavioral Theory indicates that suspects learn behaviors through reinforcement, making them more likely to confess under repeated psychological pressure (Skinner, 1953)."
    },
    {
        question: "Which of the following is a primary critique of the Psychoanalytical Theory of confession?",
        choice1: "It fails to explain coerced confessions",
        choice2: "It does not account for individual agency in decision-making",
        choice3: "It focuses too much on external social influences",
        choice4: "It assumes all confessions stem from external coercion",
        answer: "It fails to explain coerced confessions",
        rationale: "Psychoanalytical Theory is criticized for overlooking the impact of external coercion and interrogation tactics in false confessions (Gudjonsson, 2003)."
    },
    {
        question: "How does Social-Psychological Theory explain the role of authority figures in eliciting confessions?",
        choice1: "Authorities condition individuals through behavioral reinforcement",
        choice2: "Authorities create social pressure that influences compliance and conformity",
        choice3: "Authorities trigger unconscious desires for punishment",
        choice4: "Authorities use legal incentives to secure confessions",
        answer: "Authorities create social pressure that influences compliance and conformity",
        rationale: "Social-Psychological Theory suggests that authority figures can manipulate social dynamics, leading individuals to conform and confess (Milgram, 1963)."
    },
    {
        question: "Which of the following theories would best explain why a suspect confesses even when presented with exculpatory evidence?",
        choice1: "Psychoanalytical Theory",
        choice2: "Decision-Making Theory",
        choice3: "Cognitive-Behavioral Theory",
        choice4: "Social-Psychological Theory",
        answer: "Social-Psychological Theory",
        rationale: "Social-Psychological Theory accounts for how suspects may confess due to authority pressure, social expectations, or psychological manipulation despite evidence in their favor (Kassin & Wrightsman, 1985)."
    },
    {
        question: "Which of the following best describes the purpose of the 'Rapport Building' technique in interrogation?",
        choice1: "To establish a trusting relationship with the suspect, making them more likely to talk.",
        choice2: "To intimidate the suspect into confessing to a crime.",
        choice3: "To ensure the suspect waives their right to remain silent.",
        choice4: "To confuse the suspect and force an accidental confession.",
        answer: 1
    },
    {
        question: "How does the 'Isolation' technique influence a suspect during interrogation?",
        choice1: "It forces the suspect to feel lonely and guilty, ensuring they confess.",
        choice2: "It creates a psychological environment where the suspect feels powerless, making them more likely to comply.",
        choice3: "It gives the suspect time to think and prepare a strong legal defense.",
        choice4: "It prevents the suspect from making any false statements under pressure.",
        answer: "It creates a psychological environment where the suspect feels powerless, making them more likely to comply."
    },
    {
        question: "Which interrogation technique involves falsely presenting fabricated evidence to convince a suspect of their guilt?",
        choice1: "Accusation Strategy",
        choice2: "False Evidence Ploy",
        choice3: "Theme Development",
        choice4: "Pretext Phone Call",
        answer: "False Evidence Ploy"
    },
    {
        question: "What is the primary goal of using 'Open-Ended Questions' in interrogation?",
        choice1: "To limit the suspect’s responses to simple 'yes' or 'no' answers.",
        choice2: "To encourage the suspect to provide detailed explanations that can be analyzed for inconsistencies.",
        choice3: "To pressure the suspect into confessing quickly.",
        choice4: "To confuse the suspect and make them reveal hidden information unconsciously.",
        answer: "To encourage the suspect to provide detailed explanations that can be analyzed for inconsistencies."
    },
    {
        question: "Which of the following correctly defines the 'Theme Development' technique in interrogation?",
        choice1: "The interrogator presents a moral or psychological justification for the suspect’s actions to make confession seem acceptable.",
        choice2: "The interrogator aggressively accuses the suspect of committing the crime until they break down.",
        choice3: "The interrogator isolates the suspect and prevents them from speaking until they confess.",
        choice4: "The interrogator uses misleading statements to confuse the suspect into admitting guilt.",
        answer: "The interrogator presents a moral or psychological justification for the suspect’s actions to make confession seem acceptable."
    },
    {
        question: "Which of the following is considered a primary source of confession in criminal investigations?",
        choice1: "Hearsay statements from third parties",
        choice2: "Direct verbal admission by the suspect",
        choice3: "Speculative media reports",
        choice4: "Psychological profiling of the suspect",
        answer: "Direct verbal admission by the suspect"
    },
    {
        question: "How do 'spontaneous confessions' differ from other sources of confession?",
        choice1: "They are obtained through extensive interrogation techniques.",
        choice2: "They occur voluntarily, without external pressure or questioning.",
        choice3: "They require corroborating forensic evidence to be admissible in court.",
        choice4: "They are always considered inadmissible due to lack of procedural formality.",
        answer: "They occur voluntarily, without external pressure or questioning."
    },
    {
        question: "Which of the following is NOT a legally recognized source of confession?",
        choice1: "Statements made to a police officer during an interrogation",
        choice2: "Admissions recorded in a properly documented pretext phone call",
        choice3: "A suspect's involuntary confession obtained through coercion",
        choice4: "Voluntary written statements given at the police station",
        answer: "A suspect's involuntary confession obtained through coercion"
    },
    {
        question: "What role does a 'co-defendant confession' play in criminal investigations?",
        choice1: "It is considered direct evidence and leads to an automatic conviction.",
        choice2: "It can be used as evidence but requires corroboration to be admissible in court.",
        choice3: "It is only valid if both defendants confess at the same time.",
        choice4: "It is never admissible due to potential bias from the co-defendant.",
        answer: "It can be used as evidence but requires corroboration to be admissible in court."
    },
    {
        question: "Why must 'confessions made to undercover officers' be carefully evaluated?",
        choice1: "They are often given in informal settings and may not reflect the suspect’s true intentions.",
        choice2: "They are automatically excluded from trial due to entrapment laws.",
        choice3: "They are considered more reliable than confessions made under formal interrogation.",
        choice4: "They are legally binding regardless of the suspect’s state of mind.",
        answer: "They are often given in informal settings and may not reflect the suspect’s true intentions."
    },
    {
        question: "Which of the following best explains the paradox of false confessions in relation to rational choice theory?",
        choice1: "Suspects always make decisions that maximize their personal benefit, making false confessions unlikely.",
        choice2: "Under psychological distress, suspects may perceive confessing—even falsely—as a rational means of reducing immediate suffering.",
        choice3: "Rational actors in the justice system can always distinguish between false and genuine confessions.",
        choice4: "False confessions only occur when an individual is mentally impaired, contradicting rational choice principles.",
        answer: "Under psychological distress, suspects may perceive confessing—even falsely—as a rational means of reducing immediate suffering."
    },
    {
        question: "What is the primary critique of using behavioral analysis techniques (e.g., Reid Technique) in eliciting confessions?",
        choice1: "They lack empirical validation and disproportionately lead to false confessions due to coercive tactics.",
        choice2: "They are ineffective in high-stakes criminal investigations and are only useful in minor offenses.",
        choice3: "They prioritize deception detection over information gathering, making them unreliable in the courtroom.",
        choice4: "They are exclusively used in the United States and have no international application.",
        answer: "They lack empirical validation and disproportionately lead to false confessions due to coercive tactics."
    },
    {
        question: "In psychological studies on false confession, what factor has been identified as the strongest predictor of a suspect falsely confessing?",
        choice1: "The presence of corroborating physical evidence.",
        choice2: "The suspect’s prior criminal history and exposure to law enforcement.",
        choice3: "The length and intensity of the interrogation, particularly when exceeding recommended time limits.",
        choice4: "The use of leading questions that suggest crime details not publicly available.",
        answer: "The length and intensity of the interrogation, particularly when exceeding recommended time limits."
    },
    {
        question: "Which of the following legal precedents set a framework for evaluating the admissibility of confessions in relation to coercion?",
        choice1: "Miranda v. Arizona (1966)",
        choice2: "Gideon v. Wainwright (1963)",
        choice3: "Terry v. Ohio (1968)",
        choice4: "Mapp v. Ohio (1961)",
        answer: "Miranda v. Arizona (1966)"
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
