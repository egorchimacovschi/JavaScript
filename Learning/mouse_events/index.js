const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");
//event listener = events: click,, mouseover, mouseout
// myBox.addEventListener(event, callback);
// function changeColor(event){
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "OUCH!";
// }


myButton.addEventListener("click", event => {
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "OUCH!";
});

myButton.addEventListener("mouseover", event => {
    myBox.style.backgroundColor = "yellow";
    myBox.textContent =  "Don't do it!";
})

myButton.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent =  "Click me";
})

