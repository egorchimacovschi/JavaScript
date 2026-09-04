const person = {
    name: "Egor",
    age: 20,
    hobbies: ["Sport", "Reading"],
    address: {
        country: "Moldova",
        city: "Bucharest",
    }
}

console.log(person.hobbies[0]);
console.log(person.address.city);

for (const property in person.address){
    console.log(person.address[property]);
}

class Person{
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{
    constructor(country, city, street){
        this.country = country;
        this.city = city;
        this.street = street;
    }
}