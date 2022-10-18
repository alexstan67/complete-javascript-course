/*
// Values and variables
const country = "France";
const continent = "Europe";
let population = 65;
console.log(country);
console.log(continent);
console.log(population);

// Data Types
const isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// let, const and var
language = "French";

// Basic operators
console.log(population / 2);
population += 1
console.log(population);
const popFinland = 6;
console.log(population > popFinland);
const popAverage = 11;
console.log(population < popAverage);
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

if(population > popAverage) {
  console.log(`${country} population is above average`);
} else {
  console.log(`${country} population is below average`);
}

// Type conversion and coercion
// "9" - "5"                -> 4
// "19" - "13" + "17"       -> "617"
// "19" - "13" + 17         -> 23
// "123" < 57               -> false
// 5 + 6 + "4" + 9 - 4 - 2  -> 1143
*/
// Equality Operators: == vs. ===
/*
const numNeighbours = prompt("How many neighbours countries does your country have?");
if( Number(numNeighbours) === 1 ) {
  console.log("Only 1 border!");
} else if( Number(numNeighbours) > 1 ) { 
  console.log("More than 1 border!");
} else {
  console.log("No borders");
}
*/

// Logical Operators
/*
const country = "France";
const isIsland = false;
const language = "english";
let population = 45;

if(language == "english" && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`)
} else {
  console.log(`${country} does not meet your criteria :(`)
}
*/

// The Switch Statement
const language = "english";
switch(language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers:");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");

}

