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

const validPasswords = ["Eniola@Prime21","Hemy1","Seas1","Ramzy","Aminatu","Seyi#Pro21","Jola1","Fati1","Damilola","Ayopartner","Salam1","Jaysay","Giwa#exec","Freeman1","Otal!2024","Kanyestyles1","Sara#2024","Raphael#Pro","Ys@Pro2025","Yusuf#Elite","Ayoman1","Fikayo@Corp","Adamu$Safe","J@mes2025","Bashir#Biz"];
const passwordVersion = "v20";
const sessionExpiryTime = 1 * 60 * 60 * 1000; // 1 minute
const splashScreen = document.getElementById("splash-screen");

// Login Function
function login() {
  const enteredPassword = document.getElementById("password").value; // Fixed: Correctly reference the password input field
  const savedVersion = localStorage.getItem("passwordVersion") || passwordVersion;

  if (validPasswords.includes(enteredPassword)) {
    const currentTime = new Date().getTime();

    // Save login details in localStorage
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("passwordVersion", savedVersion);
    localStorage.setItem("loginTimeStamp", currentTime);
    splashScreen.style.display = "flex";
    setTimeout(() => {
      splashScreen.style.opacity = 1;
    }, 10);
    // Redirect after 3 seconds
    setTimeout(() => {
      window.location.href = "cgpa.html";
    }, 3000);
  } else {
    alert("Invalid password. Please try again.");
  }
}

// Protect Page Function
function protectPage() {
  const passwordVersion = "v20";
  const sessionExpiryTime = 1 * 60 * 60 * 1000; // 1 minute

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"; // Ensure type check
  const savedVersion = localStorage.getItem("passwordVersion");
  const loginTimeStamp = parseInt(localStorage.getItem("loginTimeStamp"), 10); // Parse timestamp as an integer
  const currentTime = new Date().getTime();

  // Validate session
  if (
    !isLoggedIn || // Not logged in
    savedVersion !== passwordVersion || // Password version mismatch
    (currentTime - loginTimeStamp) > sessionExpiryTime // Session expired
  ) {
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
