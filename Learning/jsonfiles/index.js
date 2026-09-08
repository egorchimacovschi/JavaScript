//JSON (Java Script Object Notation) data-interchange for web and data-servers
// JSON file {key: value} or [value1, value2, value3]

//JSON.stringify() = convert a JS object to a JSON string
//JSON.parse() = convert a JSON string to a JS object

// const names = ["SpongeBob", "Patrick", "Squidward", "Sandy"];
// const person = {
//     "name": "SpongeBob",
//     "age": 30,
//     "isEmployed": true,
//     "hobbies": ["JellyFishing", "Karate", "Fishing"]
// }

// const poeple = [
// {
//     "name": "SpongeBob",
//     "age": 30,
//     "isEmployed": true
// },
// {
//     "name": "Patrick",
//     "age": 34,
//     "isEmployed": false
// },
// {
//     "name": "Squidward",
//     "age": 50,
//     "isEmployed": true
// },
// {
//     "name": "Sammy",
//     "age": 27,
//     "isEmployed": false
// }
// ];
// const jsonString = JSON.stringify(names);
// const personString = JSON.stringify(person);
// const poepleString = JSON.stringify(poeple);
// console.log(jsonString);
// console.log(poepleString);
// console.log(personString);

// const jsonPerson = `{"name": "Egor", "age": 30}`;

// const parsedData = JSON.parse(jsonPerson);
// console.log(parsedData);



fetch("person.json")
    .then(response => response.json())
    .then(value => console.log(value))
    .catch(error => console.log(error));