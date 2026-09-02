// window prompt
// HTML textbox

let username;

//username = window.prompt("Whats youre username?")
document.getElementById("mysubmit").onclick = function(){
    username = document.getElementById("MyText").value;
    document.getElementById("h1").textContent = `Hello ${username}`
}