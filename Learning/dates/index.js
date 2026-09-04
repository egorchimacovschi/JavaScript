//Date(year, month, day, hour, minute, second, ms)
//or Date("2026-09-03T12:00:00Z")
const date = new Date(2024, 0, 1, 2, 3, 4, 5);

console.log(date);

const date2 = new Date(0);
console.log(date2);
const date3 = new Date();
console.log(date3);
const date4 = new Date(1700000000000);
console.log(date4);

console.log(`${date.getDate()}` + `${date.getDay()}` + `${date.getFullYear()}` + `${date.getHours()}`);
date4.setFullYear(2026);

if(date2 > date3){}