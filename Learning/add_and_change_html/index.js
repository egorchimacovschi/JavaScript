const newH1 = document.createElement("h1");


newH1.textContent = "I like pizza";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

//document.body.append(newH1);
//document.body.prepend(newH1);

document.getElementById("box1").append(newH1);
document.getElementById("box1").prepend(newH1);

const box2 = document.getElementById("box2");
document.body.insertBefore(newH1, box2);



//if there is no id

// const boxes = document.querySelectorAll("box");
// document.body.insertBefore(newH1, boxes[2]);

document.body.removeChild(newH1);


const newListItem = document.createElement("li");
newListItem.textContent = "banana";
newListItem.id = "banana";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "red";



document.getElementById("fruits").append(newListItem);
const orange = document.getElementById("orange");
document.getElementById("fruits").insertBefore(newListItem, orange);


//if there isn't id
//const listItems = document.querySelectorAll("#fruits li");
//document.getElementById("fruits").insertBefore(newListItem, listItem[4]);

document.getElementById("fruits").removeChild(newListItem);