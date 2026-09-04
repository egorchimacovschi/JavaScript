// object - a collection of properties and methods


const person ={
    firstName: "Egor",
    lastNamw: "Chimacovschi",
    age: 20,
    isEmployed: true,

    speaking: function(name){console.log(`HI to ${name}`);},
}

person.speaking("Egor");
console.log(person.firstName)