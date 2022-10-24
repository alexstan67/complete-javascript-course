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
console.log(team1, draw, team2);
// 6
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};
printGoals('Davies', 'Muller');

// 7
game.odds.team1 > game.odds.team2 && console.log('team1 more likely to win');
game.odds.team1 < game.odds.team2 && console.log('team2 more likely to win');
