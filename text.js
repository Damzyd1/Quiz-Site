/*let x = 5%2;
alert(x);
const timeDisplay = document.getElementById("timeDisplay");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

let startTime = 0;
let elapsedTime = 0;
let currentTIme = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;

startBtn.addEventListener("click",()=> {
    if(paused){
      paused = false;
      startTime = Date.now() - elapsedTime;
      intervalId = setInterval(updateTime, 1000);
    }
});
pauseBtn.addEventListener("click",()=>{
  
});
resetBtn.addEventListener("click",()=>{
  
});

//update time

function updateTime(){
  elapsedTime = Date.now() - startTime;
  
  secs = Math.floor((elapsedTime/ 1000) % 60);
  mins = Math.floor((elapsedTime/ (1000 * 60)) % 60);
  hrs = Math.floor((elapsedTime/ (1000 * 60 * 60)) % 60);
  
  timeDisplay.textContent = hrs+":"+mins+":"+secs;
}

let timeLeft = 3600;
 function startTimer(){
   const timerElement = document.getElementById("timer");
   
   const countdown = setInterval(() => {
     let hours = Math.floor(timeLeft / 3600);
     let minutes = Math.floor((timeLeft % 3600)/60);
     let seconds = (timeLeft % 60);
     
     hours = hours < 10? '0'+ hours : hours;
     minutes = minutes < 10? '0'+ minutes : minutes;
     seconds = seconds < 10? '0'+ seconds : seconds;
     
     timerElement.innerHTML = hours+":"+":"+seconds;
     
     if (timeLeft <= 0){
       clearInterval(countdown);
     }
     
     timeLeft--;
   },1000);
 }
 startTimer();
 */
 let min = 10;
 let sec = 60;
 const timerElement = document.getElementById("timer");
 function timer(){
   let countdown = setInterval(()=>{
       sec--;
     if(sec <= 0){
       sec = 60;
       min = min-1;
     }
     
     timerElement.innerHTML = min+":"+sec;
     if(min <=0){
       clearInterval(countdown);
     }
     
   },1000);
 }
 timer();
 
 