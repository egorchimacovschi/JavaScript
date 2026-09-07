document.getElementById("");
console.log(document); // shows the html file
console.dir(document);
document.title = "my website";
document.body.style.backgroundColor = "hsl(0, 61%, 47%)";

const username = "Egor";
const welcomeMsg = document.getElementById("welcome-msg");
welcomeMsg.textContent += username === "" ? `Guest` : username;