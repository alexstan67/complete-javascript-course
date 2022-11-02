'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const arr = [2, 3, 4];
//const [x, y, z] = arr;
//console.log(arr);
//console.log(x, y, z);
// --------------------
const [main, , secondary] = restaurant.categories;
//console.log(main, secondary);
// Switching variables
//[main, secondary] = [secondary, main];
// --------------------
const { name, openingHours, categories } = restaurant;
//console.log(name, openingHours, categories);
//copy array
const mainMenuCopy = [...restaurant.mainMenu];
//console.log(mainMenuCopy);

// Merge array
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
//console.log(menu);
//
//CODING CHALLENGE 1
//
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1
//const [...players1] = game.players[0];
//const [...players2] = game.players[1];
//console.log(players1);
//console.log(players2);
const [players1, players2] = game.players;
//console.log(players1, players2);

// 2
//const [gk, fieldPlayers] = [players1[0], ...players1];
const [gk, ...fieldPlayers] = players1;
//console.log(gk, fieldPlayers);
// 3
const allPlayers = [...players1, ...players2];
//console.log(allPlayers);
// 4
const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
//console.log(playersFinal);
// 5
//const { team1, x, team2 } = game.odds;
//console.log(team1, x, team2);
const {
  odds: { team1, x: draw, team2 },
} = game;
//console.log(team1, draw, team2);
// 6
const printGoals = function (...players) {
  //console.log(`${players.length} goals were scored`);
};
printGoals('Davies', 'Muller');

// 7
//game.odds.team1 > game.odds.team2 && console.log('team1 more likely to win');
//game.odds.team1 < game.odds.team2 && console.log('team2 more likely to win');
//
//Coding Challenge #2
// 1
//for (const [index, scorer] of Object.entries(game.scored))
//console.log(`Goal ${Number(index) + 1}: ${scorer}`);
// 2
//console.log(game.odds);
//console.log(Object.values(game.odds).length);
let sum = 0;
for (const value of Object.values(game.odds)) {
  sum += value;
}
//console.log(`Average odds is ${sum / Object.values(game.odds).length}`);
//3
for (const [team, value] of Object.entries(game.odds)) {
  if (game[team]) {
    //console.log(`Odd of victory ${game[team]}: ${value}`);
  } else {
    //console.log(`Odd of draw: ${value}`);
  }
}
//3 Correction
for (const [team, value] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory of ${game[team]}`;
  //console.log(`Odd of ${teamStr}: ${value}`);
}

//QuizzMap
const question = new Map([
  ['question', 'What is the best coding lang in the world?'],
  [1, 'c'],
  [2, 'java'],
  [3, 'javascript'],
  ['correct', 3],
  [true, 'You won!'],
  [false, 'Try again!'],
]);
//console.log(question);
for (const [key, value] of question) {
  // We display only the 3 first (key = number)
  //if (typeof key === 'number') console.log(`${key}:${value}`);
}
// User choice
//const answer = Number(prompt('Your answer:'));
// We analyse the choice - best practice
//console.log(question.get(answer === question.get('correct')));

// Coding Challenge #3
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
// 1
// We convert the Map values to an array
const events = [...new Set(gameEvents.values())];
//console.log(events);

// 2
gameEvents.delete(64);
//console.log(gameEvents);

// 3
//console.log(
//  `An event happened, on average, every ${90 / gameEvents.size} minutes`
//);

// 4
for (const [min, event] of gameEvents) {
  const str = min < 45 ? `[FIRST HALF]` : `[SECOND HALF]`;
  //console.log(`${str} ${min}:${event}`);
}
// Coding Challenge #4
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const button = document.querySelector('button');
let text = document.querySelector('textarea');

button.textContent = 'Click';
console.log(button);
console.log(document.querySelector('textarea'));

button.addEventListener('click', function () {
  text.value = convert(text.value);
});

function convert(text) {
  let result = '';
  let i = 1;
  const words = text.toLowerCase().split('\n');
  for (const word of words) {
    console.log(word);
    if (word.includes('_')) {
      // convert
      const pos = word.indexOf('_');
      let newWord = word.trim().replace('_', '');
      newWord =
        newWord.slice(0, pos) +
        newWord[pos].toUpperCase() +
        newWord.slice(pos + 1, word.length - 1).padEnd(20, ' ');
      result += `${newWord}\n`;
    } else {
      result += `${word.trim()}\n`.padEnd(20, ' ');
    }
    i++;
  }
  return result;
}
