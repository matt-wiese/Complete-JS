'use strict';

const weekdays = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pastawith ${ing1}, ${ing2}, and ${ing3}.`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// CODING CHALLENGE #2

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

/* CODING CHALLENGE #4
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const button = document.querySelector('button');

const makeArray = function () {
  const text = document.querySelector('textarea').value;
  console.log(text);
  const rows = text.split('\n');
  console.log(rows);
  for (const [i, row] of rows.entries()) {
    const clean = row.toLowerCase().trim().split('_');
    const output = `${clean[0]}${clean[1].replace(
      clean[1][0],
      clean[1][0].toUpperCase()
    )}`;
    console.log(output.padEnd(24) + '✔'.repeat(i + 1));
  }
};

// remove preceding whatespace(s) IF ANY

// split at underscore and replace with ' '

// capitalize initial of second word IF ANY

// join at ' ' and return

button.addEventListener('click', makeArray);

/*
// spilt and join
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtman'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtman'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const captializeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

captializeName('jessica ann smith davis');
captializeName('jonas schmedtman');

// padding a string
const message = 'Go to gate 23';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('jonas'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (num) {
  const str = num + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(1564548915631245));
console.log(maskCreditCard('1564548915631245'));

// repeat
const message2 = 'Bad weather... All depatures delayed... \n';

console.log(message2.repeat(5));

const planesInLine = function (num) {
  console.log(`There are ${num} planes in line ${'✈'.repeat(num)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);

const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect);

const nameCorrection = function (str) {
  const str1 = str.toLowerCase();
  console.log(str1[0].toUpperCase() + str1.slice(1));
};

nameCorrection('jOnAS');

// comparing emails
const email = 'hello@jonas.io';
const loginEmail = '    Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

const normalizedEmail = loginEmail.toLowerCase().trim();

console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing

const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the new Airbus family');
}

// practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard');
  }
};

checkBaggage('I have a laptop, some Food, and a pocket Knife');
checkBaggage('Socka and camera');
checkBaggage('Got some snakcs and a gun for protection');

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  s === 'B' || s === 'E'
    ? console.log('Middle Seat :(')
    : console.log('NOT a Middle Seat :)');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));
console.log(typeof new String('jonas'));
console.log(typeof new String('jonas').slice(1));


// CODING CHALLENGE #3

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

// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.
const time = [...gameEvents.keys()].pop();
console.log(time);

console.log(`An event happened, on
average, every ${92 / gameEvents.size} minutes`);

// 4.
for (const [key, val] of gameEvents) {
  const half = key < 45 ? `First` : 'Second';
  console.log(`[${half} Half] ${key}: ${val}`);
}

// convert Object to Map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again'],
]);

console.log(question);

console.log(question.get('question'));

for (const [key, val] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${val}`);
}
const answer = 3;
// const answer = Number(prompt('Your Answer'));
console.log(question.get(question.get('correct') === answer));

// convert Map to Array
console.log([...question]);
console.log(question.entries());
console.log([...question.keys()]);
console.log(question.values());

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();

const arr = [1, , 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));

const orderSet = new Set([
  'Pizza',
  'Pasta',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(orderSet);

console.log(new Set('Jonas'));

console.log(orderSet.size);

console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));

orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');
// orderSet.clear();
console.log(orderSet);

for (const order of orderSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manger', 'Chef', 'Waiter'];

const staffUnique = [...new Set(staff)];

console.log(staffUnique);
console.log(new Set(staff).size);

console.log(new Set('joansschmedtman').size);

// CODING CHALLENGE #2
// 1.
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

// 2.
const odds = Object.values(game.odds);
let sum = 0;
for (const a of odds) {
  sum += a;
}
console.log((sum / odds.length).toFixed(2));

// 3.
for (const [key, val] of Object.entries(game.odds)) {
  const teamStr = key === 'x' ? 'draw' : `victory ${game[key]}`;
  console.log(`Odd of ${teamStr}: ${val}`);
}

// 4. BONUS
const scorers = {};
for (const val of game.scored) {
  scorers[val] ? scorers[val]++ : (scorers[val] = 1);
}
console.log(scorers);

// Property names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// property values
const values = Object.values(openingHours);
console.log(values);

// entrie object
const entries = Object.entries(openingHours);

// [key, value]
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

// optional chaining
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// with optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tues', 'wed', 'thrus', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// optional chaining on methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// optional chaining o arrays
const users = [
  {
    name: 'Jonas',
    email: 'hello@jonas.io',
  },
];

console.log(users[0]?.name ?? 'User array emtpy');

// for-of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) {
  console.log(item);
}

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}




// console.log([...menu.entries()]);


// CODING CHALLENGE #1



// 1.
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const playser1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(playser1Final);

// 5.
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};
printGoals(...game.scored);

// 6.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 7.
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');


// restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// nullish: null and indefined
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

console.log('-----OR-----');
// use ANY data type, return ANY data type, short circuiting
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('-----AND-----');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'Jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
restaurant.orderPasta &&
  restaurant.orderPizza('mushrooms', 'spinach', 'cheese');

// 1) destructuring

// SPREAD because right side of =
const arr = [1, 2, ...[3, 4]];

// REST because left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];

// join 2 arrays or more
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// iterables are arrays, strings, maps, and set but not Objects
const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters);
console.log(...str);

// real world example
const ingredients = [
  //   prompt(`Let's make pasta!
  // Ingredient 1?`),
  //   prompt(`Ingredient 2?`),
  //   prompt(`Ingredient 3?`),
];

console.log(ingredients);

restaurant.orderPasta(...ingredients);

//objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);
console.log(restaurant);
restaurant.name = 'Classic Italian';
console.log(newRestaurant);
console.log(restaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via Del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via Del Sole, 21',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

// nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[0];
const c = arr[0];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// default values
const [p = 1, q = 1, r = 1] = [8];
console.log(p, q, r);
*/
