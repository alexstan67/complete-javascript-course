'use strict'

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log("I can drive");
*/

// Coding challenge #1
//TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
//TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);
//console.log(checkWinner(avgDolphins, avgKoalas));

function checkWinner(averageDolphins, averageKoalas) {
  let msg;
  const winDolphins = averageDolphins >= 2 * averageKoalas;
  const winKoalas   = averageKoalas >= 2 * averageDolphins;
  
  if(winDolphins) {
    msg = `Dolphins wins by a score of ${averageDolphins} - ${averageKoalas} !`
  } else if (winKoalas) {
    msg = `Koalas wins by a score of ${averageKoalas} - ${averageDolphins} !`
  } else {
    msg = "No winner!";
  }

  return msg;
}
*/

// Coding challenge #2
/*
const bill = 125;
const calcTip = (bill) => bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
console.log(calcTip(100));
const bills = [ 125, 555, 44 ];
const tips  = [ calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]) ];
console.log(tips);
const total = [ tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2] ]
console.log(total);
*/

// Coding Challenge
/*
const jonas = {
  firstName: "Jonas",
  friends:  [ "Bob", "Bill", "Michael" ]
}
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, but his best friend is called ${jonas.friends[2]}`);
*/

// Coding challenge #3

const mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function() {
    this.bmi = this.mass / (this.height ** 2);
    return this.bmi;
  }
};

const john = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function() {
    this.bmi = this.mass / (this.height ** 2);
    return this.bmi;
  }
};

mark.calcBMI();
john.calcBMI();
if(mark.bmi > john.bmi) {
  //console.log(`${mark.firstName} ${mark.lastName}'s BMI (${mark.bmi}) is higher than ${john.firstName} ${john.lastName}'s (${john.bmi})`)
} else {
  //console.log(`${john.firstName} ${john.lastName}'s BMI (${john.bmi}) is higher than ${mark.firstName} ${mark.lastName}'s (${john.bmi})`)
}
console.log(mark, john);

// Coding challenge #4
const bills   = [ 22, 295, 176, 440, 37, 105, 10, 1100, 86, 52 ];
const tips    = [];
const totals  = [];
const calcTip = bills => bills >= 50 && bills <= 300 ? 0.15 * bills : 0.2 * bills;
const arr     = [];
let sum       = 0;
for(let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(tips[i] + bills[i]);
}
console.log(bills, tips, totals);

function calcAverage(arr) {
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calcAverage(totals));

