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
        question: "Which of the following is NOT part of the prelude in a research report?",
        choice1: "Abstract",
        choice2: "Acknowledgment",
        choice3: "Literature Review",
        choice4: "Table of Contents",
        answer: "Literature Review",
        rationale: "The literature review is not part of the prelude components. Instead, it is a main chapter that evaluates previous studies related to the research topic."
    },
    {
        question: "What is the main purpose of an abstract in a research report?",
        choice1: "To provide a summary of the research.",
        choice2: "To acknowledge contributors to the research.",
        choice3: "To list all the sections of the report.",
        choice4: "To introduce the research problem.",
        answer: "To provide a summary of the research.",
        rationale: "The abstract is a concise summary of the research, including objectives, methodology, findings, and conclusions, designed to give readers an overview of the entire study."
    },
    {
        question: "What is typically included in an acknowledgment section?",
        choice1: "Research findings",
        choice2: "References to previous studies",
        choice3: "Gratitude to contributors and funders",
        choice4: "Definition of terms",
        answer: "Gratitude to contributors and funders",
        rationale: "Acknowledgments are used to express gratitude to individuals or organizations that provided support, funding, or assistance during the research."
    },
    {
        question: "In what part of the research is the page numbering typically done with Roman numerals?",
        choice1: "Chapters",
        choice2: "Abstract",
        choice3: "Prelude",
        choice4: "Conclusion",
        answer: "Prelude",
        rationale: "Roman numerals are typically used for numbering pages in the prelude section, such as the abstract, acknowledgment, and table of contents."
    },
    {
        question: "Which of the following is the correct sequence of prelude components?",
        choice1: "Abstract, Table of Contents, Dedication, Acknowledgment",
        choice2: "Dedication, Abstract, Table of Contents, Acknowledgment",
        choice3: "Dedication, Acknowledgment, Abstract, Table of Contents",
        choice4: "Abstract, Dedication, Acknowledgment, Table of Contents",
        answer: "Dedication, Acknowledgment, Abstract, Table of Contents",
        rationale: "The prelude components are typically arranged in this order: dedication, acknowledgment, abstract, and table of contents, following academic standards."
    },
    {
        question: "What is the primary function of the Table of Contents?",
        choice1: "To summarize the research objectives",
        choice2: "To list and organize all sections and subsections of the research",
        choice3: "To introduce the research topic",
        choice4: "To reference all sources used in the research",
        answer: "To list and organize all sections and subsections of the research",
        rationale: "The Table of Contents organizes the structure of the research by listing all chapters, sections, and subsections with their corresponding page numbers."
    },
    {
        question: "Where should keywords be included in a research report?",
        choice1: "Dedication",
        choice2: "Table of Contents",
        choice3: "Abstract",
        choice4: "Literature Review",
        answer: "Abstract",
        rationale: "Keywords are typically included in the abstract to help readers and researchers identify the main themes and topics of the study quickly."
    },
    {
        question: "Which prelude component recognizes financial or emotional support provided by individuals?",
        choice1: "Abstract",
        choice2: "Acknowledgment",
        choice3: "Preface",
        choice4: "Methodology",
        answer: "Acknowledgment",
        rationale: "The acknowledgment section is used to formally thank individuals or organizations for their financial, emotional, or technical support during the research."
    },
    {
        question: "What is the ideal word count for an abstract in most academic research?",
        choice1: "50–100 words",
        choice2: "150–250 words",
        choice3: "300–500 words",
        choice4: "500–700 words",
        answer: "150–250 words",
        rationale: "Most academic research guidelines recommend an abstract word count between 150 and 250 words to provide a concise but comprehensive overview."
    },
    {
        question: "The dedication page is meant to:",
        choice1: "Explain the research process.",
        choice2: "Thank contributors to the research.",
        choice3: "Express gratitude to specific individuals or groups.",
        choice4: "Outline the research findings.",
        answer: "Express gratitude to specific individuals or groups.",
        rationale: "The dedication page is used to express personal gratitude to specific individuals or groups, such as family, mentors, or friends, for their support."
    },
    {
        question: "Which chapter introduces the research problem?",
        choice1: "Literature Review",
        choice2: "Introduction",
        choice3: "Methodology",
        choice4: "Conclusion",
        answer: "Introduction",
        rationale: "The introduction chapter sets the stage for the research by presenting the research problem, objectives, and significance of the study."
    },
    {
        question: "What section of a research report explains why the study is important?",
        choice1: "Background of the Study",
        choice2: "Literature Review",
        choice3: "Methodology",
        choice4: "Results",
        answer: "Background of the Study",
        rationale: "The background of the study explains the context, relevance, and importance of the research to justify why the study was conducted."
    },
    {
        question: "What is the main focus of the Literature Review?",
        choice1: "Defining the research problem",
        choice2: "Summarizing previous studies related to the topic",
        choice3: "Describing the data collection tools used",
        choice4: "Discussing the findings",
        answer: "Summarizing previous studies related to the topic",
        rationale: "The literature review critically analyzes and summarizes existing studies, identifying gaps and how the current research addresses them."
    },
    {
        question: "Which chapter typically contains the research questions?",
        choice1: "Abstract",
        choice2: "Literature Review",
        choice3: "Introduction",
        choice4: "Conclusion",
        answer: "Introduction",
        rationale: "Research questions are typically included in the introduction to guide the study and define its scope."
    },
    {
        question: "In which chapter is the research design discussed?",
        choice1: "Methodology",
        choice2: "Literature Review",
        choice3: "Results",
        choice4: "Conclusion",
        answer: "Methodology",
        rationale: "The methodology chapter outlines the research design, data collection methods, and tools used to conduct the study."
    },
    {
        question: "What is the purpose of the methodology chapter?",
        choice1: "To describe how the research was conducted.",
        choice2: "To review past studies.",
        choice3: "To summarize the research findings.",
        choice4: "To introduce the research topic.",
        answer: "To describe how the research was conducted.",
        rationale: "The methodology chapter explains the research process, including techniques, tools, and procedures used to collect and analyze data."
    },
    {
        question: "The population and sampling are discussed in which chapter?",
        choice1: "Literature Review",
        choice2: "Methodology",
        choice3: "Introduction",
        choice4: "Conclusion",
        answer: "Methodology",
        rationale: "The methodology chapter provides details about the research population, sampling techniques, and how participants were selected."
    },
    {
        question: "Which chapter interprets the research findings?",
        choice1: "Introduction",
        choice2: "Results and Discussion",
        choice3: "Literature Review",
        choice4: "Methodology",
        answer: "Results and Discussion",
        rationale: "The results and discussion chapter presents the findings and interprets them in the context of the research questions and objectives."
    },
    {
        question: "What is the main goal of the Conclusion chapter?",
        choice1: "To summarize the findings and provide recommendations.",
        choice2: "To present the data collection process.",
        choice3: "To analyze the research problem.",
        choice4: "To compare findings with previous studies.",
        answer: "To summarize the findings and provide recommendations.",
        rationale: "The conclusion chapter summarizes the research outcomes and provides actionable recommendations based on the findings."
    },
    {
        question: "Which of the following is NOT included in the methodology chapter?",
        choice1: "Data collection methods",
        choice2: "Research instruments",
        choice3: "Theoretical framework",
        choice4: "Sampling techniques",
        answer: "Theoretical framework",
        rationale: "The theoretical framework is typically discussed in the literature review to provide a foundation for the research."
    },
    {
        question: "Where are research objectives typically found?",
        choice1: "Literature Review",
        choice2: "Introduction",
        choice3: "Abstract",
        choice4: "Methodology",
        answer: "Introduction",
        rationale: "Research objectives are presented in the introduction chapter, outlining the purpose and goals of the study."
    },
    {
        question: "The literature review chapter should primarily:",
        choice1: "Provide original findings.",
        choice2: "Discuss the research’s methodology.",
        choice3: "Critically evaluate existing studies on the topic.",
        choice4: "Summarize the research’s conclusions.",
        answer: "Critically evaluate existing studies on the topic.",
        rationale: "A literature review critically examines existing research to highlight gaps, contradictions, and the relevance of the current study."
    },
    {
        question: "What type of data is typically discussed in the results chapter?",
        choice1: "Primary data only",
        choice2: "Secondary data only",
        choice3: "Both primary and secondary data",
        choice4: "Theoretical data",
        answer: "Both primary and secondary data",
        rationale: "The results chapter can include both primary (collected during the study) and secondary data (sourced from other studies)."
    },
    {
        question: "Research hypotheses are commonly discussed in:",
        choice1: "Abstract",
        choice2: "Methodology",
        choice3: "Results",
        choice4: "Introduction",
        answer: "Introduction",
        rationale: "Hypotheses are formulated in the introduction chapter as part of the research problem and objectives."
    },
    {
        question: "In which chapter is the research gap typically identified?",
        choice1: "Literature Review",
        choice2: "Introduction",
        choice3: "Methodology",
        choice4: "Results",
        answer: "Literature Review",
        rationale: "The literature review identifies gaps in existing research to establish the need for the current study."
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
