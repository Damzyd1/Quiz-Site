window.addEventListener("popstate", function(event){
  history.pushState(null, "", window.location.href);
});

let password = document.getElementById("password");
let button = document.getElementById("button");
password.addEventListener("keyup", () => {
  button.disabled = !password.value
});

let users = ["David", "Ola", "Samuel"];
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

document.addEventListener("keydown", e => {
  if(e.key = "Enter"){
    goToNextPage();
  }
});

let countSystem;
  let colors = ["#5F9EA0","#1C39BB","#082567","#082567"];
  let colorIndex = 0;
   countSystem = setInterval(()=> {
    let text = document.getElementById("text");
    text.style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
  },13000);
