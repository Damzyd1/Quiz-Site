window.addEventListener("popstate", function(event){
  history.pushState(null, "", window.location.href);
});

document.addEventListener("keydown", e => {
  if((e.ctrlKey || e.metaKey) &&  e.key.toLowerCase() === 'r'){
    e.preventDefault();
  }
});

const topic = "CSS 309 Exam Simulation";
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
question: "What is the primary role of the media in Nigeria’s justice administration?",
choice1: "To determine judicial rulings",
choice2: "To inform the public and act as a watchdog",
choice3: "To prosecute offenders",
choice4: "To create laws for legal proceedings",
answer: 2,
rationale: "The media serves as a watchdog, ensuring transparency, informing the public, and holding justice actors accountable."
},

{
question: "Which media-related challenge most significantly affects justice administration in Nigeria?",
choice1: "Excessive judicial independence",
choice2: "Limited media ownership",
choice3: "Media sensationalism",
choice4: "Strict government regulation of press freedom",
answer: 3,
rationale: "Sensationalism distorts facts, influences public perception, and can pressure justice actors into biased decisions."
},

{
question: "How does media coverage impact public confidence in the Nigerian justice system?",
choice1: "It has no impact on public trust",
choice2: "It always strengthens public trust in the system",
choice3: "It can either strengthen or weaken trust depending on how cases are reported",
choice4: "It replaces the judiciary’s role in delivering justice",
answer: 3,
rationale: "Media can enhance trust by exposing corruption or reduce confidence through biased or inaccurate reporting."
},

{
question: "Which of the following is a major ethical concern in media reporting of court cases?",
choice1: "Ensuring public interest is maintained",
choice2: "Balancing press freedom with fair trial rights",
choice3: "Maximizing viewership through dramatic storytelling",
choice4: "Supporting only the government’s stance on legal matters",
answer: 2,
rationale: "While press freedom is essential, it must be balanced against the accused’s right to a fair trial to avoid prejudicial reporting."
},

{
question: "What legal framework in Nigeria regulates media freedom in justice administration?",
choice1: "Freedom of Information Act (2011)",
choice2: "Nigerian Criminal Code",
choice3: "National Broadcasting Commission Act",
choice4: "Electoral Act",
answer: 1,
rationale: "The FOI Act (2011) grants journalists access to public records, enhancing media oversight of justice administration."
},
{
question: "Which of the following best describes the primary distinction between traditional and new media?",
choice1: "Traditional media is more interactive than new media",
choice2: "New media allows instant two-way communication, while traditional media is one-directional",
choice3: "Traditional media is exclusively digital, whereas new media relies on print",
choice4: "New media does not require technological advancements",
answer: 2,
rationale: "New media (social media, blogs, digital platforms) facilitates real-time, two-way communication, unlike traditional media (TV, newspapers) which delivers content one-directionally."
},

{
question: "How has social media transformed political engagement in contemporary society?",
choice1: "By eliminating the need for traditional media in political discourse",
choice2: "By enabling direct citizen participation and rapid mobilization",
choice3: "By ensuring that all online political information is accurate",
choice4: "By restricting freedom of expression",
answer: 2,
rationale: "Social media enhances political engagement by allowing real-time interaction, mobilization for protests, and direct communication between politicians and citizens."
},

{
question: "Which form of media is most effective in combating misinformation in today’s digital era?",
choice1: "Television",
choice2: "Newspapers",
choice3: "Fact-checking digital platforms",
choice4: "Billboards",
answer: 3,
rationale: "Fact-checking platforms (e.g., Full Fact, Africa Check) play a crucial role in verifying online claims and countering misinformation."
},

{
question: "In what way does broadcast media remain relevant despite the rise of digital media?",
choice1: "It provides real-time reporting and remains accessible to audiences without internet access",
choice2: "It is the only credible form of news dissemination",
choice3: "It completely replaced print media",
choice4: "It is more affordable than digital media",
answer: 1,
rationale: "Broadcast media, such as radio and television, remains crucial for reaching remote areas, offering real-time news, and providing authoritative reporting."
},

{
question: "Which of the following is a key advantage of digital media over print media in contemporary society?",
choice1: "Lower risk of misinformation",
choice2: "Greater audience interactivity and real-time updates",
choice3: "It is always more credible than print media",
choice4: "It operates independently of technology",
answer: 2,
rationale: "Digital media enables dynamic engagement through social platforms, immediate updates, and a broader reach compared to static print media."
},
{
question: "Which of the following is a fundamental role of the media in a democratic society?",
choice1: "To control government decision-making",
choice2: "To act as a watchdog and hold power accountable",
choice3: "To replace the judiciary in interpreting laws",
choice4: "To dictate public policies directly",
answer: 2,
rationale: "Media serves as a watchdog, exposing corruption, holding government accountable, and ensuring transparency in democratic societies."
},

{
question: "How does media contribute to political participation in a democracy?",
choice1: "By suppressing opposition voices to maintain order",
choice2: "By providing unbiased information that informs voter decisions",
choice3: "By determining election outcomes through selective reporting",
choice4: "By preventing public access to political debates",
answer: 2,
rationale: "Media informs citizens about political issues, debates, and candidates, helping them make informed voting decisions."
},

{
question: "Which media-related principle is essential for sustaining democracy?",
choice1: "Government control over media content",
choice2: "Press freedom and independence",
choice3: "State funding of all media outlets",
choice4: "Banning of investigative journalism",
answer: 2,
rationale: "A free and independent press ensures unbiased reporting, prevents government overreach, and promotes transparency in democratic governance."
},

{
question: "What is a major way in which media influences public opinion in a democracy?",
choice1: "By distorting facts to align with state propaganda",
choice2: "By shaping discourse through agenda-setting and framing",
choice3: "By ensuring that all political actors receive equal coverage",
choice4: "By preventing critical journalism to avoid social unrest",
answer: 2,
rationale: "Media influences public perception by selecting issues to highlight (agenda-setting) and presenting them in a way that shapes public interpretation (framing)."
},

{
question: "Why is access to diverse media sources important in a democratic society?",
choice1: "To reinforce government narratives",
choice2: "To provide citizens with multiple perspectives for informed decision-making",
choice3: "To ensure state media dominates public discourse",
choice4: "To reduce media competition",
answer: 2,
rationale: "A diversity of media sources exposes citizens to multiple viewpoints, fostering critical thinking and informed decision-making in a democracy."
},
{
question: "Which of the following best describes the role of media in shaping political discourse in Nigeria?",
choice1: "It serves as a mouthpiece for the ruling government only",
choice2: "It provides a platform for diverse political opinions and accountability",
choice3: "It operates independently without any influence from political actors",
choice4: "It functions solely as an entertainment and advertisement platform",
answer: 2,
rationale: "The media in Nigeria plays a crucial role in fostering democratic participation by offering diverse perspectives, holding government accountable, and shaping public discourse."
},

{
question: "How has social media influenced political participation in Nigeria?",
choice1: "It has led to increased civic engagement and political mobilization",
choice2: "It has reduced the interest of citizens in governance",
choice3: "It has completely replaced traditional media as a political tool",
choice4: "It has been ineffective in shaping political opinions",
answer: 1,
rationale: "Social media has revolutionized political activism in Nigeria, allowing for real-time discourse, mobilization of protests, and increased youth participation in elections."
},

{
question: "What is a major challenge faced by Nigerian media in reporting political issues?",
choice1: "Excessive press freedom leading to misinformation",
choice2: "Government censorship and harassment of journalists",
choice3: "Lack of interest from the public in political affairs",
choice4: "Over-reliance on international media for political news",
answer: 2,
rationale: "Journalists in Nigeria often face threats, censorship, and arrests when reporting on sensitive political issues, limiting press freedom."
},

{
question: "Which of the following is an effect of media ownership on political reporting in Nigeria?",
choice1: "It ensures completely unbiased coverage of political events",
choice2: "It leads to editorial bias depending on the owner's political affiliation",
choice3: "It has no impact on how political news is reported",
choice4: "It prevents political interference in journalism",
answer: 2,
rationale: "Many media houses in Nigeria are owned by politicians or business elites, leading to biased reporting that aligns with the interests of their owners."
},

{
question: "What impact did the #EndSARS movement have on the relationship between media and politics in Nigeria?",
choice1: "It demonstrated the power of social media in shaping political narratives",
choice2: "It showed that traditional media is more influential than digital platforms",
choice3: "It reduced media influence on political activism",
choice4: "It had no significant effect on Nigerian politics",
answer: 1,
rationale: "The #EndSARS movement highlighted how social media could mobilize protests, influence policy discussions, and challenge state narratives, reshaping political discourse in Nigeria."
},
{
question: "How has social media transformed interpersonal relationships in contemporary society?",
choice1: "By enabling instant communication and global networking",
choice2: "By making traditional face-to-face interaction obsolete",
choice3: "By preventing misinformation and online conflicts",
choice4: "By restricting interactions to personal and private networks",
answer: 1,
rationale: "Social media has revolutionized interpersonal communication by allowing real-time interactions, relationship-building, and cross-cultural engagements."
},

{
question: "What is a significant negative impact of media on social relationships?",
choice1: "It fosters emotional intelligence and deepens empathy",
choice2: "It can lead to reduced face-to-face interactions and social isolation",
choice3: "It completely eradicates traditional means of communication",
choice4: "It ensures absolute transparency in online communication",
answer: 2,
rationale: "Over-reliance on digital media for communication can weaken real-life social bonds, leading to reduced emotional connection and social alienation."
},

{
question: "Which theoretical perspective explains the media’s influence on shaping social norms and relationships?",
choice1: "Cultivation Theory",
choice2: "Strain Theory",
choice3: "Labeling Theory",
choice4: "Rational Choice Theory",
answer: 1,
rationale: "Cultivation Theory suggests that long-term exposure to media content gradually shapes an individual's perceptions, attitudes, and social expectations."
},

{
question: "How has media influenced the concept of identity in modern social relationships?",
choice1: "It has allowed individuals to construct and negotiate multiple identities",
choice2: "It has eliminated the influence of cultural norms on identity formation",
choice3: "It has restricted identity formation to traditional societal expectations",
choice4: "It has had no significant impact on self-perception and identity",
answer: 1,
rationale: "Digital and social media provide platforms where individuals can present curated identities, negotiate social roles, and engage in identity experimentation."
},
{
question: "How does media influence social identity formation?",
choice1: "By exposing individuals to diverse cultures and perspectives",
choice2: "By limiting self-expression to traditional values",
choice3: "By preventing people from engaging with global trends",
choice4: "By reinforcing a single, unchanging identity for everyone",
answer: 1,
rationale: "Media plays a critical role in shaping social identity by exposing individuals to different cultures, ideas, and perspectives, influencing how they see themselves."
},

{
question: "Which of the following is a major concern regarding media’s influence on social identity?",
choice1: "Media encourages absolute uniformity in identity",
choice2: "Media creates unrealistic beauty and lifestyle standards",
choice3: "Media prevents individuals from forming group identities",
choice4: "Media eliminates the need for personal experiences in identity formation",
answer: 2,
rationale: "Media often promotes idealized images of beauty and success, leading to self-esteem issues and distorted perceptions of social identity."
},

{
question: "Which of these media platforms has the most significant impact on youth identity formation today?",
choice1: "Newspapers",
choice2: "Television",
choice3: "Social media",
choice4: "Radio",
answer: 3,
rationale: "Social media allows for active participation, self-expression, and engagement with peers, making it highly influential in shaping youth identity."
},

{
question: "What role does media representation play in shaping social identity?",
choice1: "It helps marginalized groups gain visibility and recognition",
choice2: "It eliminates stereotypes and biases completely",
choice3: "It ensures equal representation for all identities at all times",
choice4: "It has no impact on identity formation",
answer: 1,
rationale: "Media representation gives marginalized groups a voice and helps shape public perceptions, but it can also reinforce stereotypes if misrepresented."
},

{
question: "Which theory explains how media exposure influences people's perception of social identity?",
choice1: "Cultivation Theory",
choice2: "Routine Activity Theory",
choice3: "Broken Windows Theory",
choice4: "Strain Theory",
answer: 1,
rationale: "Cultivation Theory suggests that prolonged exposure to media content influences individuals' worldviews and social identity over time."
},
{
question: "Which criminological theory best explains the media’s role in amplifying moral panics about crime?",
choice1: "Routine Activity Theory",
choice2: "Labeling Theory",
choice3: "Social Learning Theory",
choice4: "Broken Windows Theory",
answer: 2,
rationale: "Labeling Theory suggests that media can stigmatize certain groups, reinforcing public fear and moral panic, which in turn influences crime control policies."
},

{
question: "How does the concept of 'agenda-setting' apply to media coverage of crime?",
choice1: "Media dictates public opinion by directly telling people what to think",
choice2: "Media shapes what issues people consider important without dictating opinions",
choice3: "Media ensures balanced coverage of all crimes to avoid bias",
choice4: "Media coverage has no impact on crime perception",
answer: 2,
rationale: "The agenda-setting function of the media influences which crimes receive public attention, shaping discourse without explicitly dictating opinions."
},

{
question: "Which of the following is an example of 'crime news framing' in media?",
choice1: "Using terms like 'thug' or 'predator' to describe suspects",
choice2: "Providing only factual, neutral descriptions of criminal events",
choice3: "Reporting crime statistics without contextual analysis",
choice4: "Ignoring crime stories to focus on political events",
answer: 1,
rationale: "Crime news framing involves the use of language, imagery, and selective reporting to shape public perception of crime and criminals."
},

{
question: "What is a primary criticism of the media’s representation of crime?",
choice1: "It accurately reflects actual crime trends",
choice2: "It often focuses disproportionately on violent and sensational crimes",
choice3: "It completely ignores crimes committed by marginalized groups",
choice4: "It promotes restorative justice approaches over punitive measures",
answer: 2,
rationale: "Media coverage tends to overrepresent violent crimes, creating a distorted perception of crime rates and public safety."
},

{
question: "How does media sensationalism influence criminal justice policies?",
choice1: "It leads to evidence-based policymaking that reduces crime",
choice2: "It increases public fear, often resulting in harsher sentencing laws",
choice3: "It encourages decriminalization of non-violent offenses",
choice4: "It has no measurable impact on criminal justice policies",
answer: 2,
rationale: "Media-driven moral panics can pressure lawmakers to adopt punitive measures, such as 'three-strikes' laws, regardless of actual crime trends."
},
{
question: "Which journalistic principle is most critical when reporting crime to ensure ethical and responsible coverage?",
choice1: "Maximizing audience engagement",
choice2: "Preserving presumption of innocence",
choice3: "Using sensational headlines for impact",
choice4: "Avoiding coverage of controversial cases",
answer: 2,
rationale: "The presumption of innocence is a fundamental legal principle, and responsible journalism must avoid prejudicing public opinion before a fair trial."
},

{
question: "Which of the following is a major criticism of media coverage of crime?",
choice1: "It frequently provides excessive legal analysis",
choice2: "It often exaggerates or distorts crime prevalence",
choice3: "It completely ignores violent crimes",
choice4: "It focuses only on corporate and white-collar crimes",
answer: 2,
rationale: "Media coverage tends to overrepresent violent and rare crimes, creating a 'crime wave' perception that does not reflect statistical realities."
},

{
question: "What role does crime reporting play in shaping public fear of crime?",
choice1: "It accurately reflects crime trends with no bias",
choice2: "It reduces fear by educating the public on crime prevention",
choice3: "It can amplify fear by focusing on rare but violent crimes",
choice4: "It eliminates misinformation by presenting balanced coverage",
answer: 3,
rationale: "Media tends to focus on sensational crimes, contributing to moral panics and public fear disproportionate to actual crime rates."
},

{
question: "Which of these reporting practices can lead to 'trial by media'?",
choice1: "Balanced reporting with multiple perspectives",
choice2: "Sensationalist coverage that assumes guilt before trial",
choice3: "Minimal reporting to respect privacy laws",
choice4: "Providing only factual updates on a case",
answer: 2,
rationale: "When media outlets imply a suspect's guilt before trial, it influences public perception and can compromise the fairness of judicial proceedings."
},

{
question: "What is the primary concern regarding the media’s influence on criminal justice policy?",
choice1: "Media ensures that only factual crime data informs policies",
choice2: "Media-driven moral panics can pressure policymakers into reactionary laws",
choice3: "Media has no influence on crime legislation or enforcement",
choice4: "Media promotes exclusively rehabilitative justice measures",
answer: 2,
rationale: "Intense media coverage of specific crimes can lead to public outcry, pressuring policymakers into adopting punitive laws, sometimes without sufficient evidence."
},
{
question: "Which pattern of crime reporting is most likely to contribute to moral panic?",
choice1: "Contextual reporting with expert analysis",
choice2: "Sensationalist reporting with exaggerated headlines",
choice3: "Data-driven reporting using verified statistics",
choice4: "Balanced reporting with multiple sources",
answer: 2,
rationale: "Sensationalist reporting amplifies fear and anxiety among the public by exaggerating crime trends, often leading to moral panic."
},

{
question: "What is the primary characteristic of episodic crime reporting?",
choice1: "It focuses on individual crime incidents without broader context",
choice2: "It examines crime trends over time and their root causes",
choice3: "It provides a critical analysis of law enforcement strategies",
choice4: "It only reports on corporate and white-collar crimes",
answer: 1,
rationale: "Episodic reporting isolates crimes as individual events rather than situating them within broader social, economic, or policy contexts."
},

{
question: "Which crime reporting pattern is most effective in educating the public on systemic issues?",
choice1: "Episodic crime reporting",
choice2: "Thematic crime reporting",
choice3: "Breaking news crime updates",
choice4: "Crime scene reporting",
answer: 2,
rationale: "Thematic reporting connects individual crime incidents to larger trends, policies, and systemic issues, promoting deeper public understanding."
},

{
question: "How does 'if it bleeds, it leads' influence crime reporting patterns?",
choice1: "It prioritizes violent crimes for maximum audience engagement",
choice2: "It ensures a balanced approach to crime journalism",
choice3: "It focuses only on crime prevention strategies",
choice4: "It reduces the media’s focus on crime to minimize fear",
answer: 1,
rationale: "This media principle prioritizes violent and shocking crimes because they attract more viewers, often at the expense of balanced reporting."
},

{
question: "What is a major criticism of crime reporting patterns in mainstream media?",
choice1: "They rely too much on criminal justice statistics",
choice2: "They often reinforce stereotypes and racial biases",
choice3: "They focus exclusively on white-collar crimes",
choice4: "They prioritize accuracy over sensationalism",
answer: 2,
rationale: "Crime reporting often disproportionately portrays certain groups as criminals, reinforcing biases and shaping public perceptions negatively."
},
{
question: "Which of the following best describes the watchdog role of the media in crime reporting?",
choice1: "Sensationalizing crime stories to attract viewership",
choice2: "Monitoring law enforcement and judicial processes for accountability",
choice3: "Focusing only on high-profile criminal cases",
choice4: "Reporting crimes based solely on police press releases",
answer: 2,
rationale: "The watchdog role ensures transparency and accountability in the criminal justice system by critically examining law enforcement and judicial actions."
},

{
question: "How does media framing influence public perception of crime?",
choice1: "By shaping narratives that emphasize certain aspects while downplaying others",
choice2: "By objectively presenting crime statistics without bias",
choice3: "By only reporting crime cases verified by government sources",
choice4: "By ensuring crime news is completely neutral and unfiltered",
answer: 1,
rationale: "Media framing influences how audiences interpret crime by selecting, emphasizing, or omitting certain details, shaping public opinion accordingly."
},

{
question: "What is the main ethical dilemma faced by journalists in crime reporting?",
choice1: "Balancing the public's right to know with privacy and fair trial rights",
choice2: "Ensuring crime reports are as dramatic as possible",
choice3: "Protecting the identity of all criminals regardless of their crime",
choice4: "Relying solely on eyewitness accounts for reporting",
answer: 1,
rationale: "Journalists must balance transparency with ethical considerations, such as avoiding harm to victims, suspects, and ongoing legal proceedings."
},

{
question: "Which of the following is a negative consequence of media sensationalism in crime reporting?",
choice1: "It increases public awareness of crime trends",
choice2: "It fosters critical thinking about crime policies",
choice3: "It distorts reality and creates unnecessary fear",
choice4: "It promotes balanced discourse on criminal justice reforms",
answer: 3,
rationale: "Sensationalist crime reporting often exaggerates crime prevalence, leading to fear, moral panic, and sometimes punitive criminal justice policies."
},

{
question: "Why is investigative journalism important in crime reporting?",
choice1: "It exposes corruption, misconduct, and systemic failures in the justice system",
choice2: "It ensures all news is presented in an entertaining format",
choice3: "It replaces law enforcement’s role in crime-solving",
choice4: "It focuses only on reporting official statements from authorities",
answer: 1,
rationale: "Investigative journalism uncovers hidden truths about crime, corruption, and justice system failures, promoting transparency and accountability."
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
