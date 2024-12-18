window.addEventListener("popstate", function(event){
  history.pushState(null, "", window.location.href);
});

let password = document.getElementById("password");
let button = document.getElementById("button");
password.addEventListener("keyup", () => {
  button.disabled = !password.value
});
button.addEventListener("click", function(){
  login();
});
/*let users = ["David", "Ola", "Samuel"];
function goToNextPage(){
    for(i=0; i < users.length; i++){
      if(password.value == users[i]){
        alert("validating...")
        setTimeout(delay,3000);
        function delay(){
        window.location.assign("cgpa.html");
      }
    }
    
  }
}

*/

const validPasswords = ["Damilola", "Ayomide", "Shittu"];
const passwordVersion = "v1";
const sessionExpiryTime = 1 * 60  * 1000;

function login(){
  const enteredPassword = password.value;
  if(validPasswords.includes(enteredPassword)){
    const currentTime = new Date().getTime();
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("passwordVersion",passwordVersion);
    localStorage.setItem("loginTimeStamp",currentTime);
    setTimeout(delay,3000);
      function delay(){
      window.location.href = "cgpa.html";
  }
  
  }else{
    alert("Invalid password, Please try again.")
  }
}


function protectPage(){
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const savedVersion = localStorage.getItem("passwordVersion");
  const loginTimeStamp = localStorage.getItem("loginTimeStamp");
  const currentTime = new Date().getTime();
  
  if(
      !isloggedIn &
      savedVersion !== passwordVersion &
      (currentTime - loginTimeStamp) > sessionExpiryTime
    ){
      alert("Session expired or invalid. Please log in again.");
      localStorage.clear();
      window.location.href = "index.html";
    }
}
/*document.addEventListener("keydown", e => {
  if(e.key = "Enter"){
    login();
  }
});
*/

let countSystem;
  let colors = ["#5F9EA0","#1C39BB","#082567","#082567"];
  let colorIndex = 0;
   countSystem = setInterval(()=> {
    let text = document.getElementById("text");
    text.style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
  },13000);
