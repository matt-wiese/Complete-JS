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
*/

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
