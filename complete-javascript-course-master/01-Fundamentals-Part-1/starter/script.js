/*
////////////////////////////////////
// Linking a JavaScript File
let js = "amazing";
console.log(40 + 8 + 23 - 10);

////////////////////////////////////
// Values and Variables
console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob); 

////////////////////////////////////
// Data Types
let javascriptIsFun = true;
console.log(true);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Matt");

javascriptIsFun = "YES!";

console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1983;
// birthYear = 1982;

// const job;

var job = "programmer";
job = "teacher";

lastName = "Wiese";
console.log(lastName);

const now = 2037;
const ageMatt = now - 1983;
const ageJensine = now - 1984;
console.log(ageMatt, ageJensine);

console.log(ageMatt * 2, ageMatt / 10, 2 ** 3);
// 2 ** 3 mean 2 to the power of 3 =  2 * 2 * 2

const firstName = "Matt";
const lastName = "Wiese";
console.log(firstName + " " + lastName);

// assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1
x--;
console.log(x);

// comparison operators
console.log(ageMatt > ageJensine); // > < >= <=
console.log(ageJensine >= 18);

const isFullAge = ageJensine >= 18;

console.log(now - 1991 > -1984);

const now = 2037;
const ageMatt = now - 1983;
const ageJensine = now - 1984;

console.log(now - 1991 > -1984);

let x, y;

x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageMatt + ageJensine) / 2;
console.log(ageMatt, ageJensine, averageAge);

const massMark = 95;
const massJohn = 85;
const heightMark = 1.88;
const heightJohn = 1.76;

//CODING CHALLENGE #1
const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;

const markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);

const firstName = "Matt";
const job = "DevOps engineer";
const birthYear = 1983;
const year = 2037;

const matt =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + ".";

console.log(matt);

const mattNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;

console.log(mattNew);
console.log(`Just another string...`);
console.log("String with \n\
    multiple \n\
    lines");
console.log(`String with
mulitple
lines`);

const age = 15;
// const isOldEnough = age >= 18;

if (age >= 18) {
  console.log("Sarah can start driving licensed");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years.`);
}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

//CODING CHALLENGE #2
const massMark = 95;
const massJohn = 85;
const heightMark = 1.88;
const heightJohn = 1.76;

const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;

if (bmiMark > bmiJohn) {
  console.log(
    `Mark's BMI (${bmiMark.toFixed(
      1
    )}) is higher than John's (${bmiJohn.toFixed(1)})!`
  );
} else {
  console.log(
    `John's BMI (${bmiJohn.toFixed(
      1
    )}) is higher than Mark's (${bmiMark.toFixed(1)})!`
  );
}

// type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Matt"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("I am " + 23 + " years old");
console.log("23" + "10" + 3);
console.log("23" / "2");
console.log("23" > "18");

let n = "1" + 1;
n = n - 1;

console.log(n);

// 5 falsey values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Matt"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job");
}

let height = 0;
if (height) {
  console.log("YAY height is defined");
} else {
  console.log("height is undefined");
}

const age = "18";
if (age === 18) console.log("you just became an adult (strict)");

if (age == 18) console.log("you just became an adult (loose)");

const favorite = Number(prompt("what your favorite nuber"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
  // 23 == 23
  console.log("cool - 23 is an amazing number");
} else if (favorite === 7) {
  console.log("7 is also cool");
} else if (favorite === 9) {
  console.log("9 is also cool");
} else {
  console.log("number is not 23 or 7");
}

if (favorite !== 23) {
  console.log("why not the 23");
}

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah can drive");
// } else {
//   console.log("someone else should drive");
// }

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah can drive");
} else {
  console.log("someone else should drive");
}

//CODING CHALLENGE #3
// const dolphinsData = [96, 108, 89];
// const koalasData = [88, 91, 110];

// function avgGymData(gymData) {
//   let total = 0;
//   for (let i = 0; i < gymData.length; i++) {
//     total += gymData[i];
//   }
//   return (total / gymData.length).toFixed(2);
// }

// if (avgGymData(dolphinsData) > avgGymData(koalasData)) {
//   console.log(
//     `Dolphins win! the scores were ${avgGymData(dolphinsData)} to ${avgGymData(
//       koalasData
//     )}`
//   );
// } else if (avgGymData(dolphinsData) < avgGymData(koalasData)) {
//   console.log(
//     `Koalas win! the scores were ${avgGymData(koalasData)} to ${avgGymData(
//       dolphinsData
//     )}`
//   );
// } else if (avgGymData(dolphinsData) === avgGymData(koalasData)) {
//   console.log("Draw!");
// }

//BONUS 1
// const dolphinsData = [97, 112, 101];
// const koalasData = [109, 95, 123];

// function avgGymData(gymData) {
//   let total = 0;
//   for (let i = 0; i < gymData.length; i++) {
//     total += gymData[i];
//   }
//   return (total / gymData.length).toFixed(2);
// }

// if (
//   avgGymData(dolphinsData) > avgGymData(koalasData) &&
//   avgGymData(dolphinsData) >= 100
// ) {
//   console.log(
//     `Dolphins win! the scores were ${avgGymData(dolphinsData)} to ${avgGymData(
//       koalasData
//     )}`
//   );
// } else if (
//   avgGymData(dolphinsData) < avgGymData(koalasData) &&
//   avgGymData(koalasData) >= 100
// ) {
//   console.log(
//     `Koalas win! the scores were ${avgGymData(koalasData)} to ${avgGymData(
//       dolphinsData
//     )}`
//   );
// } else if (avgGymData(dolphinsData) === avgGymData(koalasData)) {
//   console.log("Draw!");
// }

//BONUS 2
const dolphinsData = [97, 112, 81];
const koalasData = [109, 95, 86];

function avgGymData(gymData) {
  let total = 0;
  for (let i = 0; i < gymData.length; i++) {
    total += gymData[i];
  }
  return (total / gymData.length).toFixed(2);
}

if (
  avgGymData(dolphinsData) > avgGymData(koalasData) &&
  avgGymData(dolphinsData) >= 100
) {
  console.log(
    `Dolphins win! the scores were ${avgGymData(dolphinsData)} to ${avgGymData(
      koalasData
    )}`
  );
} else if (
  avgGymData(dolphinsData) < avgGymData(koalasData) &&
  avgGymData(koalasData) >= 100
) {
  console.log(
    `Koalas win! the scores were ${avgGymData(koalasData)} to ${avgGymData(
      dolphinsData
    )}`
  );
} else if (
  avgGymData(dolphinsData) === avgGymData(koalasData) &&
  avgGymData(dolphinsData) &&
  avgGymData(koalasData) > 100
) {
  console.log(
    `Draw! team scores: Dolphoins - ${avgGymData(
      dolphinsData
    )} to Koalas - ${avgGymData(koalasData)}`
  );
} else {
  console.log("None wins!");
}

const day = "monday";

switch (day) {
  case "monday": // day === 'monday'
    console.log("plan course structure");
    console.log("go to coding meetup");
    break;
  case "tuesday":
    console.log("prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("write code examples");
    break;
  case "friday":
    console.log("record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("enjoy the weekend");
    break;
  default:
    console.log("not a valid day");
}

if (day === "monday") {
  console.log("plan course structure");
  console.log("go to coding meetup");
} else if (day === "tuesday") {
  console.log("prepare theory videos");
} else if (day === ("thursday" || "wednesday")) {
  console.log("write code examples");
} else if (day === ("friday" || "saturday")) {
  console.log("record videos");
} else if (day === "sunday") {
  console.log("enjoy the weekend");
} else {
  console.log("not a valid day");
}

const age = 42;
// age >= 18
//   ? console.log("I like to drink wine 🍷")
//   : console.log("I like to drink water 💧");

const drink = age >= 18 ? "wine 🍷" : "water 💧";

console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);

//CODING CHALLENGE #4

function tipCalc(bill) {
  let total = 0;
  50 < bill > 300 ? (total = bill + bill * 0.15) : (total = bill + bill * 0.2);
  return `The bill was ${bill.toFixed(2)}, the tip was ${(total - bill).toFixed(
    2
  )}, and the total value ${total.toFixed(2)}`;
}

console.log(tipCalc(275));
*/
