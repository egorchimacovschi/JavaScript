const fullName = "Egor Chimacovschi";
// slice(start, end) you can put -values startign from behind
let firstname = fullName.slice(0,4);
firstname = fullName.slice(0, fullName.indexOf(" "));
