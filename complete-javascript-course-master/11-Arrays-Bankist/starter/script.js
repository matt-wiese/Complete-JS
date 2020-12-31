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

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
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

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((accum, cv, ci, arr) => accum + cv, 0);
  labelBalance.textContent = `${acc.balance} €`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((accum, mov) => accum + mov, 0);
  labelSumIn.textContent = `${incomes} €`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((accum, mov) => accum + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)} €`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((accum, int) => accum + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)} €`;
};

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

const updateUI = function (acc) {
  // display movements
  displayMovements(currentAccount.movements);
  // display balance
  calcDisplayBalance(currentAccount);
  // display summary
  calcDisplaySummary(currentAccount);
};

// event handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // prevent form from reloading
  e.preventDefault();
  currentAccount = accounts.find(
    /* assigning to variable 'currentAccount' the ACCOUNT OBJECT whose
    **newly created username** (createUsernames();) is entered into the
   inputLoginUsername element (document.querySelector('.login__input--user');)
    */
    acc => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // display UI and welcome message
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    // clear input fields and remove focus
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  // prevent form from reloading
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const transferAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    transferAccount &&
    currentAccount.balance >= amount &&
    transferAccount?.username !== currentAccount
  ) {
    console.log('Transfer valid');
    transferAccount.movements.push(amount);
    currentAccount.movements.push(-amount);
    updateUI(currentAccount);
  } else if (!transferAccount) {
    alert('INVALID TRANSFER - TRANSFER DOES NOT EXIST');
    updateUI(currentAccount);
  } else if (amount > currentAccount.balance) {
    alert('INVALID TRANSFER - INSUFFICIENT FUNDS');
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  // prevent form from reloading
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // add movement
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  // prevent form from reloading
  e.preventDefault();
  const index = accounts.findIndex(
    acc => acc.username === currentAccount.username
  );
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    // delte account
    accounts.splice(index, 1);
    // hide UI
    containerApp.style.opacity = 0;
  } else if (
    inputCloseUsername.value !== currentAccount.username ||
    Number(inputClosePin.value) !== currentAccount.pin
  ) {
    alert('INVALID ACCOUNT or PIN - TRY AGAIN');
    updateUI(currentAccount);
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;

btnSort.addEventListener('click', function (e) {
  // prevent form from reloading
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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
  // correct Julia's array w/ shallow copy and join both arrays
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

// find method
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');

console.log(account);

const accountFor = function (arr) {
  for (const acc of arr) {
    if (acc.owner === 'Jessica Davis') {
      return acc;
    }
  }
};

console.log(accountFor(accounts));

console.log(movements);

// equality
console.log(movements.includes(-130));

// SOME condition
console.log(movements.some(mov => mov > 1500));

const anyDeposits = movements.some(mov => mov > 1500);
console.log(anyDeposits);

// EVERY condition
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// separate callback
const deposit = mov => mov > 0;
console.log(movements.every(deposit));
console.log(movements.some(deposit));
console.log(account4.movements.filter(deposit));
console.log(account4.movements.includes(deposit));

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];

console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(1));
console.log(arrDeep.flat(2));
const accountMovements = accounts.map(acc => acc.movements);

// flat
const overallBallance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((accum, mov) => accum + mov, 0);
console.log(overallBallance);

// flatMap
const overallBallance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((accum, mov) => accum + mov, 0);
console.log(overallBallance2);

// strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];

console.log(owners.sort());
console.log(owners);

// Numbers
console.log(movements);

// return < 0, a before b
// return > 0, b before a
//ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });

movements.sort((a, b) => a - b);

console.log(movements);

// descending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });
movements.sort((a, b) => b - a);

console.log(movements);

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// empty arrays plus fill methods
const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5));

x.fill(1, 3, 5);

console.log(x);

arr.fill(23, 2, 6);

console.log(arr);

// array.from
const y = Array.from({ length: 7 }, () => 2);
console.log(y);

const z = Array.from({ length: 8 }, (_, i) => i + 1);
console.log(z);

labelBalance.addEventListener('click', () => {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);
});
*/

// CODING CHALLENGE #4

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);

const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));

console.log(sarahDog);

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood * 1.1)
  .flatMap(dog => dog.owners);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood * 0.9)
  .flatMap(dog => dog.owners);

// const ownersEatTooMuch4 = [];
// const ownersEatTooLittle4 = [];

// dogs.forEach(dog =>
//   dog.curFood > (dog.recFood + dog.recFood * 0.1)
//     ? ownersEatTooMuch4.push(dog.owners.flat(3))
//     : ownersEatTooLittle4.push(dog.owners.flat(3))
// );

console.log(dogs);
console.log(sarahDog);
console.log(
  `Sarah's dog is eating too ${
    sarahDog.curFood > sarahDog.recFood ? 'much' : 'little'
  } `
);

console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

// console.log(ownersEatTooMuch4);
// console.log(ownersEatTooLittle4);

// "Matilda and Alice and Bob's dogs eat too much!"
//  "Sarah and John and Michael's dogs eat too little!"
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// dogs.forEach(dog =>
//   dog.curFood < (dog.recFood + dog.recFood * 0.1) &&
//   dog.curFood > (dog.recFood - dog.recFood * 0.1)
//     ? true
//     : false
// );

// current > (recommended * 0.90) && current < (recommended *
// 1.10).

const checkEatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log(dogs.some(dog => dog.curFood === dog.recFood));

console.log(dogs.some(checkEatingOkay));
console.log(dogs.filter(checkEatingOkay));

const sortDogs = dogs.slice().sort((a, b) => {
  if (a.recFood > b.recFood) return 1;
  if (b.recFood > a.recFood) return -1;
});
console.log(sortDogs);
