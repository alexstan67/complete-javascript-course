// Coding Challenge #1
/*
const massMark = 72;
const massJohn = 92;
const heightMark = 1.83;
const heightJohn = 1.95;

const bmiMark = massMark / ( heightMark ** 2 )
const bmiJohn = massJohn / ( heightJohn ** 2 )

const markHigherBMI = bmiMark > bmiJohn;
*/
//console.log("mass: " + massMark + " " + massJohn);
//console.log("height: " + heightMark + " " + heightJohn);
//console.log("bmi: " + bmiMark + " " + bmiJohn);
//console.log(markHigherBMI);


// Coding Challenge #2
/*
if(bmiMark > bmiJohn) {
  console.log("Mark's BMI is higher than John's!");
} else {
  console.log("John's BMI is higher than Mark's!");
}
if(bmiMark > bmiJohn) {
  console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn}) !`);
} else {
  console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark}) !`);
}
*/

// Coding challenge #3
/*
const averageDolphins = (97 + 112 + 101) / 3;
const averageKoalas = (109 + 95 + 106) / 3;

const draw = averageDolphins === averageKoalas && averageDolphins >= 100 && averageKoalas >= 100;
const winDolphins = averageDolphins > averageKoalas && averageDolphins >= 100;
const winKoalas = averageDolphins < averageKoalas && averageKoalas >= 100;

if(winDolphins && !draw) {
  console.log(`Dolphins wins by a score of ${averageDolphins} - ${averageKoalas} !`);
} else if (winKoalas && !draw) {
  console.log(`Koalas wins by a score of ${averageKoalas} - ${averageDolphins} !`);
} else if (draw) {
  console.log(`Draw! ${averageKoalas} - ${averageDolphins}`);
} else {
  console.log("No winner! Scores must be more than 100!");
}
*/

// Coding challenge #4
/*
const bill = 430;

const tip = bill <= 300 && bill >=50 ? bill * 0.15 : bill * 0.20
console.log(`The bill is ${bill}, tip is ${tip}, total value is ${bill + tip}`);
*/
