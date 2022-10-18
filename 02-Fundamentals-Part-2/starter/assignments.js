'use strict'
/*
// Lecture functions
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital is ${capitalCity}`
}

const country1 = describeCountry("Finland", 6, "Helsinki");
const country2 = describeCountry("France", 66, "Paris");
const country3 = describeCountry("Germany", 80, "Berlin");
console.log(country1);
console.log(country2);
console.log(country3);
*/


// Lecture functions declarations vs. expressions
function percentageOfWorld1(population) {
  return `${(population / 7900) * 100}%`;
}
const franceRes = percentageOfWorld1(66);
const germanyRes = percentageOfWorld1(80);
const finlandRes = percentageOfWorld1(8);

console.log(franceRes);
console.log(germanyRes);
console.log(finlandRes);

const percentageOfWorld2 = function(population) {
  return `${(population / 7900) * 100}%`;
}

const franceRes2 = percentageOfWorld2(66);
const germanyRes2 = percentageOfWorld2(80);
const finlandRes2 = percentageOfWorld2(8);

console.log(franceRes2);
console.log(germanyRes2);
console.log(finlandRes2);


// Lecture Arrow functions

const percentageOfWorld3 = (population) => `${(population / 7900) * 100}%`;
const franceRes3 = percentageOfWorld3(66);
console.log(franceRes3);

// Functions calling other functions

function describePopulation(country, population) {
  return `${country} has ${population} million people, which is about ${percentageOfWorld1(population)} of the world`;
}
console.log(describePopulation("china", "1441"));
