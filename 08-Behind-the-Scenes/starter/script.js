'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`;
    //console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Alex';
calcAge(1991);

const alex = {
  name: 'stan',
  first: 'alex',
};

console.log(alex);

const alex2 = Object.assign({}, alex);
console.log(alex2);
