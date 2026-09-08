//classList add() remove() 
// toggle(Remove if present, Add if not) 
// replace(oldClass, newClass) contains()

//used to make reusable classes for many elements across your webpage

// const myButton= document.getElementById("myButton");
// myButton.classList.add("hover");
// myButton.classList.remove("hover");
// myButton.addEventListener("mouseover", event => {
//     event.target.classList.toggle("hover");
// });
// myButton.addEventListener("mouseout", event => {
//     event.target.classList.toggle("hover");
// });
// myButton.classList.add("enabled");
// myButton.addEventListener("click", event =>{
//     if(event.target.classList.contains("disabled")){
//         event.target.textContent += "+";
//     }else{
//         event.target.classList.replace("enabled", "disabled");
//     }
    
// });


// const myH1 = document.getElementById("myH1");
// myH1.classList.add("enabled");

// myH1.addEventListener("click", event =>{
//     if(event.target.classList.contains("disabled")){
//         event.target.textContent += "+";
//     }else{
//         event.target.classList.replace("enabled", "disabled");
//     }
    
// });


let buttons = document.querySelectorAll(".myButtons");

buttons.forEach(button => {
    button.classList.add("enabled");

    button.addEventListener("mouseover", event => {
        event.target.classList.add("hover");
    });

    button.addEventListener("mouseout", event => {
        event.target.classList.remove("hover");
    });
});