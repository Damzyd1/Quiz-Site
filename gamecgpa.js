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
        question: "Which of the following is NOT part of the prelude in a research report?",
        choice1: "Abstract",
        choice2: "Acknowledgment",
        choice3: "Literature Review",
        choice4: "Table of Contents",
        answer: 3,
        rationale: "The literature review is not part of the prelude components. Instead, it is a main chapter that evaluates previous studies related to the research topic."
    },
    {
        question: "What is the main purpose of an abstract in a research report?",
        choice1: "To provide a summary of the research.",
        choice2: "To acknowledge contributors to the research.",
        choice3: "To list all the sections of the report.",
        choice4: "To introduce the research problem.",
        answer: 1,
        rationale: "The abstract is a concise summary of the research, including objectives, methodology, findings, and conclusions, designed to give readers an overview of the entire study."
    },
    {
        question: "What is typically included in an acknowledgment section?",
        choice1: "Research findings",
        choice2: "References to previous studies",
        choice3: "Gratitude to contributors and funders",
        choice4: "Definition of terms",
        answer: 3,
        rationale: "Acknowledgments are used to express gratitude to individuals or organizations that provided support, funding, or assistance during the research."
    },
    {
        question: "In what part of the research is the page numbering typically done with Roman numerals?",
        choice1: "Chapters",
        choice2: "Abstract",
        choice3: "Prelude",
        choice4: "Conclusion",
        answer: 3,
        rationale: "Roman numerals are typically used for numbering pages in the prelude section, such as the abstract, acknowledgment, and table of contents."
    },
    {
        question: "Which of the following is the correct sequence of prelude components?",
        choice1: "Abstract, Table of Contents, Dedication, Acknowledgment",
        choice2: "Dedication, Abstract, Table of Contents, Acknowledgment",
        choice3: "Dedication, Acknowledgment, Abstract, Table of Contents",
        choice4: "Abstract, Dedication, Acknowledgment, Table of Contents",
        answer: 3,
        rationale: "The prelude components are typically arranged in this order: dedication, acknowledgment, abstract, and table of contents, following academic standards."
    },
    {
        question: "What is the primary function of the Table of Contents?",
        choice1: "To summarize the research objectives",
        choice2: "To list and organize all sections and subsections of the research",
        choice3: "To introduce the research topic",
        choice4: "To reference all sources used in the research",
        answer: 2,
        rationale: "The Table of Contents organizes the structure of the research by listing all chapters, sections, and subsections with their corresponding page numbers."
    },
    {
        question: "Where should keywords be included in a research report?",
        choice1: "Dedication",
        choice2: "Table of Contents",
        choice3: "Abstract",
        choice4: "Literature Review",
        answer: 3,
        rationale: "Keywords are typically included in the abstract to help readers and researchers identify the main themes and topics of the study quickly."
    },
    {
        question: "Which prelude component recognizes financial or emotional support provided by individuals?",
        choice1: "Abstract",
        choice2: "Acknowledgment",
        choice3: "Preface",
        choice4: "Methodology",
        answer: 2,
        rationale: "The acknowledgment section is used to formally thank individuals or organizations for their financial, emotional, or technical support during the research."
    },
    {
        question: "What is the ideal word count for an abstract in most academic research?",
        choice1: "50–100 words",
        choice2: "150–250 words",
        choice3: "300–500 words",
        choice4: "500–700 words",
        answer: 2,
        rationale: "Most academic research guidelines recommend an abstract word count between 150 and 250 words to provide a concise but comprehensive overview."
    },
    {
        question: "The dedication page is meant to:",
        choice1: "Explain the research process.",
        choice2: "Thank contributors to the research.",
        choice3: "Express gratitude to specific individuals or groups.",
        choice4: "Outline the research findings.",
        answer: 3,
        rationale: "The dedication page is used to express personal gratitude to specific individuals or groups, such as family, mentors, or friends, for their support."
    },
    {
        question: "Which chapter introduces the research problem?",
        choice1: "Literature Review",
        choice2: "Introduction",
        choice3: "Methodology",
        choice4: "Conclusion",
        answer: 2,
        rationale: "The introduction chapter sets the stage for the research by presenting the research problem, objectives, and significance of the study."
    },
    {
        question: "What section of a research report explains why the study is important?",
        choice1: "Background of the Study",
        choice2: "Literature Review",
        choice3: "Methodology",
        choice4: "Results",
        answer: 1,
        rationale: "The background of the study explains the context, relevance, and importance of the research to justify why the study was conducted."
    },
    {
        question: "What is the main focus of the Literature Review?",
        choice1: "Defining the research problem",
        choice2: "Summarizing previous studies related to the topic",
        choice3: "Describing the data collection tools used",
        choice4: "Discussing the findings",
        answer: 2,
        rationale: "The literature review critically analyzes and summarizes existing studies, identifying gaps and how the current research addresses them."
    },
    {
        question: "Which chapter typically contains the research questions?",
        choice1: "Abstract",
        choice2: "Literature Review",
        choice3: "Introduction",
        choice4: "Conclusion",
        answer: 3,
        rationale: "Research questions are typically included in the introduction to guide the study and define its scope."
    },
    {
        question: "In which chapter is the research design discussed?",
        choice1: "Methodology",
        choice2: "Literature Review",
        choice3: "Results",
        choice4: "Conclusion",
        answer: 1,
        rationale: "The methodology chapter outlines the research design, data collection methods, and tools used to conduct the study."
    },
    {
        question: "What is the purpose of the methodology chapter?",
        choice1: "To describe how the research was conducted.",
        choice2: "To review past studies.",
        choice3: "To summarize the research findings.",
        choice4: "To introduce the research topic.",
        answer: 1,
        rationale: "The methodology chapter explains the research process, including techniques, tools, and procedures used to collect and analyze data."
    },
    {
        question: "The population and sampling are discussed in which chapter?",
        choice1: "Literature Review",
        choice2: "Methodology",
        choice3: "Introduction",
        choice4: "Conclusion",
        answer: 2,
        rationale: "The methodology chapter provides details about the research population, sampling techniques, and how participants were selected."
    },
    {
        question: "Which chapter interprets the research findings?",
        choice1: "Introduction",
        choice2: "Results and Discussion",
        choice3: "Literature Review",
        choice4: "Methodology",
        answer: 2,
        rationale: "The results and discussion chapter presents the findings and interprets them in the context of the research questions and objectives."
    },
    {
        question: "What is the main goal of the Conclusion chapter?",
        choice1: "To summarize the findings and provide recommendations.",
        choice2: "To present the data collection process.",
        choice3: "To analyze the research problem.",
        choice4: "To compare findings with previous studies.",
        answer: 1,
        rationale: "The conclusion chapter summarizes the research outcomes and provides actionable recommendations based on the findings."
    },
    {
        question: "Which of the following is NOT included in the methodology chapter?",
        choice1: "Data collection methods",
        choice2: "Research instruments",
        choice3: "Theoretical framework",
        choice4: "Sampling techniques",
        answer: 3,
        rationale: "The theoretical framework is typically discussed in the literature review to provide a foundation for the research."
    },
    {
        question: "Where are research objectives typically found?",
        choice1: "Literature Review",
        choice2: "Introduction",
        choice3: "Abstract",
        choice4: "Methodology",
        answer: 2,
        rationale: "Research objectives are presented in the introduction chapter, outlining the purpose and goals of the study."
    },
    {
        question: "The literature review chapter should primarily:",
        choice1: "Provide original findings.",
        choice2: "Discuss the research’s methodology.",
        choice3: "Critically evaluate existing studies on the topic.",
        choice4: "Summarize the research’s conclusions.",
        answer: 3,
        rationale: "A literature review critically examines existing research to highlight gaps, contradictions, and the relevance of the current study."
    },
    {
        question: "What type of data is typically discussed in the results chapter?",
        choice1: "Primary data only",
        choice2: "Secondary data only",
        choice3: "Both primary and secondary data",
        choice4: "Theoretical data",
        answer: 3,
        rationale: "The results chapter can include both primary (collected during the study) and secondary data (sourced from other studies)."
    },
    {
        question: "Research hypotheses are commonly discussed in:",
        choice1: "Abstract",
        choice2: "Methodology",
        choice3: "Results",
        choice4: "Introduction",
        answer: 4,
        rationale: "Hypotheses are formulated in the introduction chapter as part of the research problem and objectives."
    },
    {
        question: "In which chapter is the research gap typically identified?",
        choice1: "Literature Review",
        choice2: "Introduction",
        choice3: "Methodology",
        choice4: "Results",
        answer: 1,
        rationale: "The literature review identifies gaps in existing research to establish the need for the current study."
    },
    {
        question: "A criminologist is studying the relationship between poverty and youth involvement in crime. They hypothesize that 'increased poverty levels lead to higher youth crime rates.' What type of hypothesis is this?",
        choice1: "Null hypothesis",
        choice2: "Alternative hypothesis",
        choice3: "Statistical hypothesis",
        choice4: "Descriptive hypothesis",
        answer: 2,
        rationale: "This statement predicts a specific relationship between two variables, which is characteristic of an alternative hypothesis."
    },
    {
        question: "A researcher observes that areas with more CCTV cameras experience fewer property crimes. They form a hypothesis that 'CCTV installations reduce property crime by 20%.' What makes this hypothesis scientifically testable?",
        choice1: "It is vague and qualitative.",
        choice2: "It makes a clear, measurable prediction.",
        choice3: "It is unrelated to criminological theories.",
        choice4: "It focuses on ethical concerns only.",
        answer: 2,
        rationale: "Testable hypotheses must provide measurable criteria, such as the 20% reduction mentioned."
    },
    {
        question: "During a study on sentencing disparities, a criminologist hypothesizes that 'female offenders are less likely to receive maximum sentences compared to male offenders for similar crimes.' What is the role of this hypothesis?",
        choice1: "To outline research limitations.",
        choice2: "To define variables for statistical testing.",
        choice3: "To provide a philosophical argument.",
        choice4: "To summarize existing theories.",
        answer: 2,
        rationale: "The hypothesis identifies gender as a variable for analyzing sentencing patterns."
    },
    {
        question: "A criminologist is testing whether youth crime rates are higher during school vacations. The null hypothesis states:",
        choice1: "Youth crime rates are unrelated to school vacations.",
        choice2: "School vacations increase youth crime rates.",
        choice3: "School vacations have no effect on youth crime rates.",
        choice4: "Youth crime rates vary across different age groups.",
        answer: 3,
        rationale: "Null hypotheses assert no relationship or effect between variables."
    },
    {
        question: "If a study finds evidence that supports the hypothesis 'Increased police patrols reduce violent crimes in urban areas,' what can the researcher conclude?",
        choice1: "The null hypothesis is confirmed.",
        choice2: "The null hypothesis is rejected.",
        choice3: "The hypothesis is inconclusive.",
        choice4: "The hypothesis is invalid.",
        answer: 2,
        rationale: "Supporting evidence for the hypothesis means rejecting the null hypothesis."
    },
    {
        question: "A criminologist is studying the effect of drug decriminalization on drug-related arrests. They hypothesize, 'Decriminalization of certain drugs decreases arrest rates by 30%.' Which of the following would disprove this hypothesis?",
        choice1: "A decrease of 10% in arrest rates.",
        choice2: "A 40% decrease in arrest rates.",
        choice3: "A 30% increase in arrest rates.",
        choice4: "No change in arrest rates.",
        answer: 3,
        rationale: "An opposite trend disproves the hypothesis."
    },
    {
        question: "A research project examining the relationship between neighborhood watch programs and burglary rates hypothesizes that 'neighborhood watch programs significantly lower burglary rates.' How should the researcher structure their analysis?",
        choice1: "By studying a neighborhood with no burglary history.",
        choice2: "By comparing burglary rates before and after program implementation.",
        choice3: "By focusing solely on police reports.",
        choice4: "By collecting anecdotal evidence from residents.",
        answer: 2,
        rationale: "This approach directly tests the impact of the program."
    },
    {
        question: "Which of the following best defines a research hypothesis?",
        choice1: "A proven fact about a subject",
        choice2: "A testable statement about the relationship between variables",
        choice3: "A personal opinion on a topic",
        choice4: "A summary of past research findings",
        answer: 2,
        rationale: "A research hypothesis is a testable statement that predicts the relationship between two or more variables. It serves as the foundation for empirical research and can be confirmed or refuted through data collection and analysis."
    },
    {
        question: "In criminology research, an independent variable is:",
        choice1: "The variable that is measured as an outcome",
        choice2: "The variable that influences or causes a change in another variable",
        choice3: "A variable that remains constant",
        choice4: "A variable that has no effect on the study",
        answer: 2,
        rationale: "An independent variable is the factor that is manipulated or categorized to observe its effect on a dependent variable. For example, in a study on crime rates, law enforcement policies could be an independent variable affecting crime levels."
    },
    {
        question: "Which of the following is an example of qualitative research?",
        choice1: "Surveying 500 people about their views on crime",
        choice2: "Analyzing crime statistics over the past decade",
        choice3: "Conducting in-depth interviews with ex-convicts about their experiences",
        choice4: "Using an experimental design to test deterrence strategies",
        answer: 3,
        rationale: "Qualitative research focuses on non-numerical data such as interviews, observations, and open-ended surveys. Conducting in-depth interviews with ex-convicts allows researchers to explore personal experiences and perspectives."
    },
    {
        question: "Which research method involves studying subjects in their natural environment without interference?",
        choice1: "Experimental research",
        choice2: "Survey research",
        choice3: "Ethnographic research",
        choice4: "Longitudinal research",
        answer: 3,
        rationale: "Ethnographic research involves immersing oneself in a particular social setting to observe and interact with participants in their natural environment. This method is commonly used in criminology to study criminal subcultures."
    },
    {
        question: "What is the primary purpose of a literature review in research?",
        choice1: "To summarize the entire study",
        choice2: "To provide background information and identify gaps in existing research",
        choice3: "To prove that the researcher's hypothesis is correct",
        choice4: "To list all previous studies on a topic",
        answer: 2,
        rationale: "A literature review helps establish the foundation for a study by providing background information, identifying existing gaps, and demonstrating how the research fits into the broader academic context."
    },
    {
        question: "Which type of data consists of numbers and can be analyzed statistically?",
        choice1: "Qualitative data",
        choice2: "Quantitative data",
        choice3: "Subjective data",
        choice4: "Descriptive data",
        answer: 2,
        rationale: "Quantitative data consists of numerical values that can be measured, counted, and analyzed statistically. Examples include crime rates, survey results, and experimental data."
    },
    {
        question: "Operationalization in research refers to:",
        choice1: "Choosing a research topic",
        choice2: "Defining concepts in measurable terms",
        choice3: "Conducting field research",
        choice4: "Analyzing statistical data",
        answer: 2,
        rationale: "Operationalization is the process of defining abstract concepts in measurable terms. For example, if studying 'police effectiveness,' one might operationalize it using response time, arrest rates, or public satisfaction surveys."
    },
    {
        question: "Which of the following best describes a cross-sectional research design?",
        choice1: "Collecting data from the same group at multiple time points",
        choice2: "Comparing multiple groups at a single point in time",
        choice3: "Following a single individual over a long period",
        choice4: "Using only historical data for analysis",
        answer: 2,
        rationale: "A cross-sectional research design involves collecting data from multiple groups at a single point in time to examine relationships and differences between them."
    },
    {
        question: "Which sampling method gives every member of a population an equal chance of being selected?",
        choice1: "Convenience sampling",
        choice2: "Random sampling",
        choice3: "Snowball sampling",
        choice4: "Purposive sampling",
        answer: 2,
        rationale: "Random sampling ensures that every individual in the population has an equal chance of being selected, reducing selection bias and increasing the generalizability of the study."
    },
    {
        question: "Why is it important to use a control group in experimental research?",
        choice1: "To make sure the research hypothesis is correct",
        choice2: "To compare outcomes and isolate the effect of the independent variable",
        choice3: "To introduce bias into the study",
        choice4: "To ensure all participants receive the treatment",
        answer: 2,
        rationale: "A control group allows researchers to compare results with and without the independent variable, helping to isolate its effect and ensure that observed changes are due to the variable being studied rather than other factors."
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
