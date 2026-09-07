//.firstElementChild

const element = document.getElementById("fruits");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "yellow";
const lastChild = element.lastElementChild;
lastChild.style.backgroundColor = "blue";

const element2 = document.getElementById("apple");
const nextSibling = element2.nextElementSibling;
nextSibling.style.backgroundColor = "orange";
const element3 = document.getElementById("food");
const lastSibling = element3.previousElementSibling;
lastSibling.style.backgroundColor = "gray";


const element4 = document.getElementById("apple");
const parent = element4.parentElement;
const children = element4.children;

Array.from(children).forEach(); //need to typecast