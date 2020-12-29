'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}€</div>
  </div>
  `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

// pipeline
const euroToUSD = 1.1;
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * euroToUSD)
  // .map((mov, i, arr) => {
  //   // if you want to watch the values per iterations
  //   console.log(arr[i]);
  //   return mov * euroToUSD;
  // })
  .reduce((accum, mov) => accum + mov, 0);

console.log(totalDepositsUSD);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((accum, cv, ci, arr) => accum + cv, 0);
  labelBalance.textContent = `${balance} €`;
};

calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((accum, mov) => accum + mov, 0);
  labelSumIn.textContent = `${incomes} €`;

  const out = movements
    .filter(mov => mov < 0)
    .reduce((accum, mov) => accum + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)} €`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((accum, int) => accum + int, 0);
  labelSumInterest.textContent = `${interest} €`;
};

calcDisplaySummary(account1.movements);

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);

// console.log(containerMovements.innerHTML);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/*
/////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];

// slice method
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log(arr.slice([...arr]));

// splice method
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// reverse method
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// concat method
const letters = arr.concat(arr2);
console.log(letters);
console.log(...arr, ...arr2);

// join method
console.log(letters.join(' - '));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement: ${i + 1} -- You deposited $${movement}`);
  } else {
    console.log(`Movement: ${i + 1} -- You withrew $${Math.abs(movement)}`);
  }
}

console.log('------FOREACH------');
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement: ${i + 1} -- You deposited $${mov}`);
  } else {
    console.log(`Movement: ${i + 1} -- You withrew $${Math.abs(mov)}`);
  }
});

// 0: function(200)
// 1: function(450)
// 2: function(-400)
// 3: function(3000)
// 4: function(-650)
// 5: .....

// map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (v, k, map) {
  console.log(`${k}: ${v}`);
});

// set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (v, k, map) {
  console.log(`${k}: ${v}`);
});

// CODING CHALLENGE #1
// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];
const dogsJulia = [9, 16, 6, 8, 3];
const dogsKate = [10, 5, 6, 1, 4];

const checkDogs = function (arr0, arr1) {
  // correct Julia's array w/ shallo copy and join both arrays
  const newArr = [...arr0.slice(1, -2), ...arr1];
  newArr.forEach(function (d, i, arr) {
    const dogType =
      d >= 3
        ? `an adult, and is ${d} years old`
        : `still a puppy
    🐶`;
    console.log(`Dog number ${i + 1} is ${dogType}`);
  });
};

checkDogs(dogsJulia, dogsKate);

const euroToUSD = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * euroToUSD;
// });

const movementsUSD = movements.map(mov => mov * euroToUSD);

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * euroToUSD);
}

console.log(movementsUSDfor);

const movementsDesc = movements.map(
  (mov, i) =>
    `Movement: ${i + 1} -- You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
  // if (mov > 0) {
  //   return `Movement: ${i + 1} -- You deposited ${mov}`;
  // } else {
  //   return `Movement: ${i + 1} -- You withrew ${Math.abs(mov)}`;
  // }
);

console.log(movementsDesc);

const deposits = movements.filter(mov => mov > 0);
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) {
  if (mov > 0) {
    depositsFor.push(mov);
  }
}

console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(movements);
console.log(withdrawals);

console.log(movements);

// accumulator is like a snowball
// const balance = movements.reduce((accum, cv, ci, arr) => {
//   console.log(`Iteration ${ci}:::${accum}`);
//   return accum + cv;
// }, 0);

const balance = movements.reduce((accum, cv, ci, arr) => accum + cv, 0);

console.log(balance);

let balanceFor = 0;
for (const mov of movements) {
  balanceFor += mov;
}
console.log(balanceFor);

// maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements[0]);

console.log(max);

// CODING CHALLENGE #2

const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (arr) {
  const humanAge = arr.map(age => {
    return age <= 2 ? 2 * age : 16 + age * 4;
  });
  // const adults = humanAge.filter(age => age >= 18);
  // return Math.round(
  //   adults.reduce((accum, cv, i, arr) => accum + cv / arr.length, 0)
  // );
  return Math.round(
    humanAge
      .filter(age => age >= 18)
      .reduce((accum, cv, i, arr) => accum + cv / arr.length, 0)
  );
};

console.log(calcAverageHumanAge(data2));
*/

// CODING CHALLENGE #2

const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = arr => {
  return Math.round(
    arr
      .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
      .filter(age => age >= 18)
      .reduce((accum, cv, i, arr) => accum + cv / arr.length, 0)
  );
};

console.log(calcAverageHumanAge(data1));
