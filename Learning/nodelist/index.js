// nodelist = static collection of HTML elements by (is, class, elemnt), doesnt update automatically
const newButton = document.createElement("button");
newButton.textContent = "Button 5";
newButton.classList = "myButtons";
document.body.appendChild(newButton);


let buttons = document.querySelectorAll(".myButtons");

console.log(buttons);
//add html/css propeties

buttons.forEach(button =>{
    button.style.backgroundColor = "green";
    button.textContent += " ;)"
});

buttons.forEach(button =>{
    button.addEventListener("click", event =>{
        event.target.style.backgroundColor = "red";
        setTimeout(() => {
            event.target.style.backgroundColor = "green";
        }, 1000);
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseover", event =>{
        event.target.style.backgroundColor = "hsl(195, 53%, 50%)"
    });
})

buttons.forEach(button => {
    button.addEventListener("mouseout", event =>{
        event.target.style.backgroundColor = "green"
    });
})

buttons.forEach(button => {
    button.addEventListener("click", event =>{
        event.target.remove();
        buttons = document.querySelectorAll(".myButtons");
    });
})
