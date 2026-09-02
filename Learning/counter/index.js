const decrease = document.getElementById("decreasebutton");
const increase = document.getElementById("increasebutton");
const reset = document.getElementById("resetbutton");
const countLabel = document.getElementById("countlabel");
let count = 0;

increase.onclick = function(){
    count ++;
    countLabel.textContent = count;
}

reset.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}

decrease.onclick = function(){
    count --;
    countLabel.textContent = count;
}