// callabck = a function that is passed as an argumet to another unction
//          used to handle asynchronous operations:
//          1. reading a file
//          2. Network requests
//          3. Interacting with databases

hello(Goodbeye);

function hello(callabck){
    console.log("hello");
    callabck();
}

function Goodbeye(){
    console.log("Goodbeye!");
}