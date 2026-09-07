// methods to target and manipulate the elemnts from html document

const myHeading = document.getElementById("my-heading"); // Element or Null
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";
console.log(myHeading);

const fruits = document.getElementsByClassName("fruits"); //html collection
console.log(fruits);

fruits[0].style.backgroundColor = "yellow";
Array.from(fruits).forEach(fruit =>{
    fruit.style.backgroundColor = "yellow";
})

const h4elements = document.getElementsByTagName("h4");
console.log(h4elements);

h4elements[0].style.backgroundColor = "yellow";
for(let h4Elemnt of h4elements){
    h4Elemnt.style.backgroundColor = "yellow";
}

Array.from(h4elements).forEach(element =>{
    element.style.backgroundColor = "pink";
})

//querySelector = first maching element or NULL

const element = document.querySelector(".fruits");
element.style.backgroundColor = "gray";

//querySelectorAll // NodeList
//they dont update automatically

const fruits2 = document.querySelectorAll(".fruits");
fruits2[2].style.backgroundColor = "blue";
fruits2.forEach(food =>{
    console.log(food);
})