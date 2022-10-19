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

//console.log(franceRes);
//console.log(germanyRes);
//console.log(finlandRes);

const percentageOfWorld2 = function(population) {
  return `${(population / 7900) * 100}%`;
}

const franceRes2 = percentageOfWorld2(66);
const germanyRes2 = percentageOfWorld2(80);
const finlandRes2 = percentageOfWorld2(8);

//console.log(franceRes2);
//console.log(germanyRes2);
//console.log(finlandRes2);


// Lecture Arrow functions

const percentageOfWorld3 = (population) => `${(population / 7900) * 100}%`;
const franceRes3 = percentageOfWorld3(66);
//console.log(franceRes3);

// Functions calling other functions

function describePopulation(country, population) {
  return `${country} has ${population} million people, which is about ${percentageOfWorld1(population)} of the world`;
}
//console.log(describePopulation("china", "1441"));


// Lecture Introduction to arrays
const populations = [66, 80, 32, 8];
//console.log(populations.length === 4);
const percentages = [ percentageOfWorld1(populations[0]),percentageOfWorld1(populations[1]),percentageOfWorld1(populations[2]),percentageOfWorld1(populations[3]) ];

// Lecture BasicBasic Array Operations
const neighbours = ['germany', "italy", "spain"];
neighbours.push('utopia');
//console.log(neighbours);
neighbours.pop();
//console.log(neighbours);
if(!neighbours.includes("germany")) {
  console.log("Probably not a central European country :D'");
}
const index = neighbours.indexOf('italy');
neighbours[index] = "belgium";
//console.log(neighbours);

// Lecture Introduction to objects
//const myCountry = {
//  country: "France",
//  capital: "Paris",
//  language: "french",
//  population: 66,
//  neighbours: 3
//}

// Lecture Dot vs. Brackets Notation
//console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours} neighbouring countries and a capital called ${myCountry.capital}`);

// Object Methods
const myCountry = {
  country: "France",
  capital: "Paris",
  language: "french",
  population: 66,
  neighbours: 3,

  describe: function() {
    //console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours} neighbouring countries and a capital called ${this.capital}`);
  },

 checkIsland: function() {
    this.isIsland = this.neighbours === 0 ? true : false
 }
};

//console.log(myCountry.describe());
//console.log(myCountry.checkIsland());

