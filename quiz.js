const questions = [
    {
      question: "Which is the largest animal in the World?",
      answers: [
          { text: "Shark", correct: false},
          { text: "Blue Whale", correct: true},
          { text: "Tilapia", correct: false},
          { text: "Crab", correct: false}
        ]
    },
    {
      question: "Which is the largest Planet?",
      answers: [
          { text: "Pluto", correct: false},
          { text: "Earth", correct: false},
          { text: "Neptune", correct: false},
          { text: "Jupiter", correct: true}
        ]
      
    },
    {
      question: "Which is the largest continent in the World?",
      answers: [
          { text: "Africa", correct: true},
          { text: "Asia", correct: false},
          { text: "Europe", correct: false},
          { text: "America", correct: false}
        ]
      
    },
    {
      question: "Which of these is not a Country?",
      answers: [
          { text: "Los Angeles", correct: true},
          { text: "Nigeria", correct: false},
          { text: "Australia", correct: false},
          { text: "Egypt", correct: false}
        ]
    }
  ];
  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");
  const startgame = document.getElementById("startBtn");
  const startButton = document.getElementById("startbtn");
  let countSystem;
  let colors = ["#5F9EA0","#1C39BB","#082567","#082567"];
  let colorIndex = 0;
   countSystem = setInterval(()=> {
    let text = document.getElementById("text");
    text.style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
  },13000);
  function stopColorChange(){
    clearInterval(countSystem);
  }
  
 /* this is for random color cycling.
    function getRandomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
      color += letters[Math.floor(Math.random()*16)];
    }
    return color;
  }
*/
  
    let currentQuestionIndex = 0;
    let score= 0;
     function startQuiz(){
       currentQuestionIndex = 0;
       score = 0;
       nextButton.innerHTML = "Next";
       showQuestion();
       timer();
     }
    function showQuestion(){
      resetState();
      let currentQuestion = questions[currentQuestionIndex];
      let questionNo = currentQuestionIndex + 1;
      questionElement.innerHTML = questionNo +". " + currentQuestion.question;
    
      currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
         button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
      });
     }
  
     function resetState(){
        nextButton.style.display = "none";
        while(answerButtons.firstChild){
           answerButtons.removeChild(answerButtons.firstChild);
        }
     }
  
  function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
      selectedBtn.classList.add("correct");
      score++;
    }else{
      selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
      if(button.dataset.correct === "true"){
        button.classList.add("correct");
      }
      button.disabled = true;
    });
    nextButton.style.display = "block";
    
      window.addEventListener("keydown", next);
         function next(e){
          if(e.key === "ArrowRight"){
            if(nextButton.style.display === "block"){
              handleNextButton();
            }
          }
         }
  }
  
  function showScore(){
    resetState();
    let percentage = score/questions.length*100;
    questionElement.innerHTML = "you scored"+" "+score+" "+"out of"+" "+questions.length+" "+"also"+" "+percentage+"%";
    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block";
  }
  function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
      showQuestion();
    }else{
      showScore();
    }
  }
  nextButton.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length){
      handleNextButton();
    }else{
      startQuiz();
    }
  });
  
/*  let timer = setInterval( function(){
        sec--;
        if(sec <= 0){
          sec = sec;
          min--;
        }
        else if(min === 0){
          clearInterval(timer);
        }
    },1000);
*/
  let min = 1;
 let sec = 60;
 const timerElement = document.getElementById("time");
 function timer(){
   let countdown = setInterval(()=>{
       sec--;
     if(sec <= 0){
       sec = 60;
       min = min-1;
     }
     
     timerElement.innerHTML = min+":"+sec;
     if(min < 0){
       min = 0;
       showScore();
       clearInterval(countdown);
       nextButton.disabled = true;
     }
     
   },1000);
 }
 
 
  let paragraph = document.getElementById("time");
  paragraph.innerHTML = min+" "+sec;
  
  
  startButton.addEventListener("click", () => {
    startQuiz();
    startButton.disabled = true;
    startButton.style.display = "none";
  });