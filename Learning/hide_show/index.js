const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");

myButton.addEventListener("click", event =>{
    
    if(myImg.style.visibility === "none"){
        myImg.style.visibility = "block";
        myButton.textContent = "hide";
    }else{
        myImg.style.visibility = "none";
        myButton.textContent = "show";
    }
});

