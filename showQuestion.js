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
        question: "Which aspect of sound pattern in English focuses on the variation in pitch to convey meaning?",
        choice1: "Phonetics",
        choice2: "Intonation",
        choice3: "Phonology",
        choice4: "Stress",
        answer: "Intonation"
    },
    {
        question: "What is the term for a group of words containing a subject and predicate, functioning as a unit in a sentence?",
        choice1: "Phrase",
        choice2: "Clause",
        choice3: "Syntax",
        choice4: "Morpheme",
        answer: "Clause"
    },
    {
        question: "Which of the following writing activities is most effective for improving sentence construction skills?",
        choice1: "Reading extensively",
        choice2: "Summarizing texts",
        choice3: "Sentence combining",
        choice4: "Memorizing vocabulary",
        answer: "Sentence combining"
    },
    {
        question: "In comprehension strategies, what does the term 'inferencing' refer to?",
        choice1: "Predicting the next event in a story",
        choice2: "Decoding unfamiliar words",
        choice3: "Drawing conclusions from implicit details",
        choice4: "Summarizing the main idea",
        answer: "Drawing conclusions from implicit details"
    },
    {
        question: "Which of these is NOT a characteristic of a complete sentence in English?",
        choice1: "A subject",
        choice2: "A predicate",
        choice3: "A conjunction",
        choice4: "A complete thought",
        answer: "A conjunction"
    },
    {
        question: "What is the most appropriate ICT tool to enhance collaboration in writing activities?",
        choice1: "Google Docs",
        choice2: "Spreadsheet software",
        choice3: "Image editing software",
        choice4: "Audio recording apps",
        answer: "Google Docs"
    },
    {
        question: "Which English word class modifies nouns or pronouns?",
        choice1: "Adjective",
        choice2: "Verb",
        choice3: "Adverb",
        choice4: "Pronoun",
        answer: "Adjective"
    },
    {
        question: "What is the function of stress in spoken English?",
        choice1: "To differentiate word meanings",
        choice2: "To lengthen speech sounds",
        choice3: "To create rhyming patterns",
        choice4: "To replace punctuation",
        answer: "To differentiate word meanings"
    },
    {
        question: "Which of the following is an example of an imperative sentence?",
        choice1: "What a beautiful day it is!",
        choice2: "Are you going to the party?",
        choice3: "Please close the door.",
        choice4: "She ran quickly to the station.",
        answer: "Please close the door."
    },
    {
        question: "What comprehension strategy is involved when a reader connects new information to their prior knowledge?",
        choice1: "Inferring",
        choice2: "Skimming",
        choice3: "Predicting",
        choice4: "Activating background knowledge",
        answer: "Activating background knowledge"
    },
    {
        question: "Which sentence contains an example of alliteration?",
        choice1: "Peter Piper picked a peck of pickled peppers.",
        choice2: "She sells seashells by the seashore.",
        choice3: "The rain in Spain stays mainly in the plain.",
        choice4: "None of the above",
        answer: "Peter Piper picked a peck of pickled peppers."
    },
    {
        question: "What word class does the word 'however' belong to?",
        choice1: "Adverb",
        choice2: "Conjunction",
        choice3: "Preposition",
        choice4: "Interjection",
        answer: "Adverb"
    },
    {
        question: "Which of these ICT tools is best suited for real-time collaboration in writing activities?",
        choice1: "Slack",
        choice2: "Google Docs",
        choice3: "Microsoft Paint",
        choice4: "Zoom",
        answer: "Google Docs"
    },
    {
        question: "What role does an adverb play in a sentence?",
        choice1: "Modifies a noun",
        choice2: "Connects clauses",
        choice3: "Modifies a verb, adjective, or another adverb",
        choice4: "Expresses emotion",
        answer: "Modifies a verb, adjective, or another adverb"
    },
    {
        question: "Which of the following is an example of a compound sentence?",
        choice1: "Although she was tired, she kept working.",
        choice2: "She finished her homework and went to bed.",
        choice3: "He is tall.",
        choice4: "To read is to learn.",
        answer: "She finished her homework and went to bed."
    },
    {
        question: "What is the main purpose of paraphrasing in comprehension activities?",
        choice1: "To memorize details",
        choice2: "To rewrite the text in simpler terms",
        choice3: "To eliminate difficult words",
        choice4: "To mimic the author’s style",
        answer: "To rewrite the text in simpler terms"
    },
    {
        question: "Which of the following is a key feature of ICT-supported writing tasks?",
        choice1: "Immediate feedback",
        choice2: "Delayed communication",
        choice3: "Limited collaboration",
        choice4: "Offline-only functionality",
        answer: "Immediate feedback"
    },
    {
        question: "Identify the stressed syllable in the word 'pronunciation':",
        choice1: "pro",
        choice2: "nun",
        choice3: "ci",
        choice4: "a",
        answer: "nun"
    },
    {
        question: "What comprehension strategy involves quickly locating specific information in a text?",
        choice1: "Skimming",
        choice2: "Scanning",
        choice3: "Summarizing",
        choice4: "Inferencing",
        answer: "Scanning"
    },
    {
        question: "Which sentence demonstrates a correct use of punctuation in English?",
        choice1: "Lets go to the park?",
        choice2: "We’ll meet at 5 o’clock, won’t we?",
        choice3: "Why dont we eat now.",
        choice4: "I’m going home now;",
        answer: "We’ll meet at 5 o’clock, won’t we?"
    },
    {
        question: "How can ICT tools improve understanding of English word classes?",
        choice1: "By translating words automatically",
        choice2: "By using interactive games for word classification",
        choice3: "By highlighting parts of speech in a PDF",
        choice4: "By removing grammar rules",
        answer: "By using interactive games for word classification"
    },
    {
        question: "Which of these sentences best demonstrates the passive voice?",
        choice1: "She completed the project on time.",
        choice2: "The project was completed on time by her.",
        choice3: "The project completes her schedule.",
        choice4: "She was completing the project.",
        answer: "The project was completed on time by her."
    },
    {
        question: "What comprehension strategy involves creating mental images to aid understanding?",
        choice1: "Skimming",
        choice2: "Visualization",
        choice3: "Predicting",
        choice4: "Inferencing",
        answer: "Visualization"
    },
    {
        question: "Which English word class includes words such as 'because,' 'although,' and 'since'?",
        choice1: "Conjunctions",
        choice2: "Adverbs",
        choice3: "Pronouns",
        choice4: "Prepositions",
        answer: "Conjunctions"
    },
    {
        question: "What does the concept of 'scaffolding' mean in writing activities?",
        choice1: "Providing students with structured support",
        choice2: "Encouraging students to work independently",
        choice3: "Focusing on grammar exclusively",
        choice4: "Ignoring student errors for creative freedom",
        answer: "Providing students with structured support"
    },
    {
        question: "In comprehension, which strategy is most effective for understanding unfamiliar vocabulary?",
        choice1: "Using context clues",
        choice2: "Memorizing word lists",
        choice3: "Reading the dictionary",
        choice4: "Guessing the meaning",
        answer: "Using context clues"
    },
    {
        question: "Which of the following is an example of a simple sentence?",
        choice1: "She enjoys reading and he enjoys writing.",
        choice2: "Although it was raining, they went outside.",
        choice3: "The dog barked loudly.",
        choice4: "She ran to the store, but it was closed.",
        answer: "The dog barked loudly."
    },
    {
        question: "Which ICT tool is most suitable for creating multimedia presentations for writing tasks?",
        choice1: "Microsoft Word",
        choice2: "PowerPoint",
        choice3: "Google Sheets",
        choice4: "Zoom",
        answer: "PowerPoint"
    },
    {
        question: "What is the primary function of punctuation in English writing?",
        choice1: "To add aesthetic value to text",
        choice2: "To organize sentences for clarity",
        choice3: "To replace certain words",
        choice4: "To create sentence fragments",
        answer: "To organize sentences for clarity"
    },
    {
        question: "Which sentence demonstrates correct agreement between subject and verb?",
        choice1: "The group of students are studying.",
        choice2: "The team play well together.",
        choice3: "The list of items is on the table.",
        choice4: "The books on the shelf needs rearranging.",
        answer: "The list of items is on the table."
    },
    {
        question: "In sound patterns, what does 'alliteration' refer to?",
        choice1: "The repetition of vowel sounds",
        choice2: "The repetition of consonant sounds at the beginning of words",
        choice3: "A pattern of rising and falling intonation",
        choice4: "The stress on certain syllables",
        answer: "The repetition of consonant sounds at the beginning of words"
    },
    {
        question: "Which combination of comprehension strategies is most effective for analyzing complex texts?",
        choice1: "Scanning and predicting",
        choice2: "Inferring and summarizing",
        choice3: "Skimming and memorizing",
        choice4: "Guessing and paraphrasing",
        answer: "Inferring and summarizing"
    },
    {
        question: "What is the primary purpose of a topic sentence in a paragraph?",
        choice1: "To introduce the main idea",
        choice2: "To summarize the paragraph",
        choice3: "To conclude the argument",
        choice4: "To transition between ideas",
        answer: "To introduce the main idea"
    },
    {
        question: "How can stress patterns in spoken English improve comprehension during listening tasks?",
        choice1: "By focusing solely on vowels",
        choice2: "By highlighting key information",
        choice3: "By ensuring grammatical accuracy",
        choice4: "By eliminating redundancies",
        answer: "By highlighting key information"
    },
    {
        question: "What ICT tool can best aid students in collaborative editing of essays?",
        choice1: "Google Drive",
        choice2: "Google Docs",
        choice3: "Canva",
        choice4: "Adobe Acrobat",
        answer: "Google Docs"
    },
    {
        question: "Which English word class typically conveys action or state of being?",
        choice1: "Adverb",
        choice2: "Verb",
        choice3: "Noun",
        choice4: "Pronoun",
        answer: "Verb"
    },
    {
        question: "Which sentence uses proper punctuation for direct speech?",
        choice1: "She asked, 'Are you coming?'",
        choice2: "'She asked are you coming.'",
        choice3: "She asked 'Are you coming.'",
        choice4: "'She asked', Are you coming?",
        answer: "She asked, 'Are you coming?'"
    },
    {
        question: "Which strategy combines comprehension and writing to improve critical thinking skills?",
        choice1: "Highlighting key ideas",
        choice2: "Summarizing arguments",
        choice3: "Answering multiple-choice questions",
        choice4: "Paraphrasing complex ideas",
        answer: "Paraphrasing complex ideas"
    },
    {
        question: "What is the primary purpose of skimming a text?",
        choice1: "To analyze word classes",
        choice2: "To locate specific information",
        choice3: "To get a general idea of the content",
        choice4: "To memorize key details",
        answer: "To get a general idea of the content"
    },
    {
        question: "What is the grammatical function of the word 'but' in the sentence: 'She was tired but continued working'?",
        choice1: "Adverb",
        choice2: "Conjunction",
        choice3: "Preposition",
        choice4: "Noun",
        answer: "Conjunction"
    },
    {
        question: "Which sound pattern involves the repetition of similar sounds at the end of words?",
        choice1: "Alliteration",
        choice2: "Rhyme",
        choice3: "Consonance",
        choice4: "Assonance",
        answer: "Rhyme"
    },
    {
        question: "Which syllable is stressed in the word 'photograph'?",
        choice1: "First syllable",
        choice2: "Second syllable",
        choice3: "Third syllable",
        choice4: "None of the above",
        answer: "First syllable",
        rationale: "In the word 'photograph,' the primary stress falls on the first syllable ('PHO-to-graph'), following the standard stress pattern for many three-syllable nouns in English."
    },
    {
        question: "Which pair of words demonstrates a shift in stress between noun and verb forms?",
        choice1: "Present (noun) and present (verb)",
        choice2: "Conduct (noun) and conduct (verb)",
        choice3: "Record (noun) and record (verb)",
        choice4: "All of the above",
        answer: "All of the above",
        rationale: "All options demonstrate a stress shift between noun (first syllable stress) and verb forms (second syllable stress), a common feature in English."
    },
    {
        question: "In which word is the stress on the second syllable?",
        choice1: "Teacher",
        choice2: "Balloon",
        choice3: "Garden",
        choice4: "Cinema",
        answer: "Balloon",
        rationale: "The word 'balloon' has stress on the second syllable ('ba-LOON'), unlike the other options where the stress is on the first syllable."
    },
    {
        question: "What type of vowel is present in the word 'cat'?",
        choice1: "Diphthong",
        choice2: "Short vowel",
        choice3: "Long vowel",
        choice4: "Schwa",
        answer: "Short vowel",
        rationale: "The vowel sound in 'cat' ('æ') is a short vowel, produced with a quick and concise sound."
    },
    {
        question: "Which of the following words contains a consonant cluster at the beginning?",
        choice1: "Spring",
        choice2: "Orange",
        choice3: "Idea",
        choice4: "Happy",
        answer: "Spring",
        rationale: "'Spring' begins with a consonant cluster ('spr'), a sequence of consonants without intervening vowels."
    },
    {
        question: "What is the stress pattern of the word 'information'?",
        choice1: "First syllable",
        choice2: "Second syllable",
        choice3: "Third syllable",
        choice4: "Fourth syllable",
        answer: "Third syllable",
        rationale: "The stress in 'information' falls on the third syllable ('in-for-MA-tion'), typical for many four-syllable words ending in -tion."
    },
    {
        question: "Which word has a schwa sound?",
        choice1: "Banana",
        choice2: "Dog",
        choice3: "Book",
        choice4: "Chair",
        answer: "Banana",
        rationale: "The word 'banana' contains two schwa sounds ('bə-NA-nə'), a weak vowel sound commonly found in unstressed syllables."
    },
    {
        question: "In terms of stress patterns, which is a compound noun?",
        choice1: "Blackbird",
        choice2: "Black bird",
        choice3: "Blackened",
        choice4: "Birdhouse",
        answer: "Blackbird",
        rationale: "'Blackbird' (compound noun) has stress on the first syllable, while 'black bird' is a phrase with stress on both words."
    },
    {
        question: "Which of the following pairs demonstrates minimal pairs based on vowels?",
        choice1: "Cat and Bat",
        choice2: "Hit and Heat",
        choice3: "Spin and Spun",
        choice4: "Map and Man",
        answer: "Hit and Heat",
        rationale: "'Hit' and 'Heat' differ only in vowel sounds ('ɪ' vs. 'i:'), making them minimal pairs. Other pairs differ in consonants or involve multiple sound changes."
    },
    {
        question: "What is the phonetic term for the repeated sound at the end of 'buzz'?",
        choice1: "Voiced consonant",
        choice2: "Unvoiced consonant",
        choice3: "Nasal sound",
        choice4: "Aspirated sound",
        answer: "Voiced consonant",
        rationale: "The 'z' sound in 'buzz' is a voiced consonant produced by vibrating the vocal cords."
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
