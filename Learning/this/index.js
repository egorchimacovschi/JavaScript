// this = reference to the object where THIS is used 
const person1 = {
    name: "Egor",
    favFood: "banana",
    sayHello: function(name){console.log(`Hi ${this.name}`);},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`);},
}

person1.sayHello();
person1.eat();