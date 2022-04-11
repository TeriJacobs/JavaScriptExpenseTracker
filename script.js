// 'use strict';

/////////////////// Expense Tracker /////////////////

/////////////////// Data ///////////////////
const teri = {
    owner: 'teri jacobs',
    movements: [600, 9000, -4000, 6000, -200, -50, -600],
    categoryType: [ 'income', 'income', 'rent', 'income', 'clothing', 'clothing', 'petrol'],
    date: [
        "2019-11-18T21:31:17.178Z",
        "2019-12-23T07:42:02.383Z",
        "2020-01-28T09:15:04.904Z",
        "2020-04-01T10:17:24.185Z",
        "2020-05-08T14:11:59.604Z",
        "2022-03-29T17:01:17.194Z",
        "2022-04-04T23:36:17.929Z",
        "2022-04-05T10:51:36.790Z",
    ],
    pin: 111,
}

const accounts = [teri];

/////////////////// Elements ///////////////////
const welcomeMessage = document.querySelector('.welcome-message');
const inputLoginUsername = document.querySelector('.input-login-username');
const inputLoginPin = document.querySelector('.input-login-pin');
const inputLoginBtn = document.querySelector('.input-login-btn');

const displayContainerApp = document.querySelector('.main');

const containerMovements = document.querySelector('.movements');

const transactionBalance = document.querySelector('.transaction-balance')
const transactionIncome = document.querySelector('.transaction-income')
const transactionExpenses = document.querySelector('.transaction-expenses')

const inputDateIncome = document.querySelector('.input-date-income');
const inputAmountIncome = document.querySelector('.input-amount-income');
const submitIncomeBtn = document.querySelector('.submit-income');

const submitExpenseBtn = document.querySelector('.submit-expense');
const inputDateExpense = document.querySelector('.input-date-expense');
const inputTypeExpense = document.querySelector('.input-type-expense');
const inputAmountExpense = document.querySelector('.input-amount-expense');

/////////////////// Functions ///////////////////
const greeting = function(){
    console.log('upon time of day - greet user with name and evening/moring/afternoon');
}
greeting();

// date functionality
const formatMovementDate = function(date){
    const calcDaysPassed = (date1, date2) => Math.round(Math.abs(date2-date1)/ (1000 * 60 *60 *24));

    const daysPassed = calcDaysPassed(new Date(), date);

    // const now = new Date();
    // const daysPassed = calcDaysPassed(new Intl.DateTimeFormat('en-GB').format(now));

    if(daysPassed === 0) return 'Today';
    if(daysPassed === 1) return 'Yesterday';
    if(daysPassed <= 7) return `${daysPassed} days ago`;
    else {
        const day = `${date.getDate()}`.padStart(2,0);
        const month = `${date.getMonth()}`.padStart(2,0);
        const year = `${date.getFullYear()}`.padStart(2,0);
        return `${day}/${month}/${year}`;
    }

}

const transactions = function(acc, sort = false)
{
    containerMovements.innerHTML = '';

    const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

    movs.forEach(function(mov, i) 
    {
            const type = mov > 0 ? 'deposit': 'withdrawal';
            const name = acc.categoryType[i];
            
            const date = new Date(acc.date[i]); // create the new date object for a string method
            const displayDate = formatMovementDate (date);
            
            const html =
      `
        <div class="row">
            <div class="col movements-type movements-type--deposit">${i + 1} ${type}</div>
            <div class="col movements-category">${name}</div>
            <div class="col movements-date">${displayDate}</div>
            <div class="col movements-value">${mov}</div>
        </div>
      `;
      containerMovements.insertAdjacentHTML('afterbegin', html);
    });
}

//below now  beng called in the displayUI function
// transactions(teri.movements, teri.categoryType);

// displayBalance(teri.movements);
const displayBalance = function(acc){
    acc.balance = acc.movements.reduce((accum, mov) => accum + mov, 0);
    transactionBalance.textContent = `R ${acc.balance}`;
};
//const displayIncome = function(movements){
const displayIncome = function(acc) {
    acc.income = acc.movements.filter((mov, i) => mov > 0)
                            .reduce((accum, mov) => accum + mov, 0);
        transactionIncome.textContent = `R ${acc.income}`;
    }
// displayExpense(teri.movements);
const displayExpense= function(acc) {
    acc.expense = acc.movements.filter((mov, i) => mov < 0)
                            .reduce((accum, mov) => accum + mov, 0);
        transactionExpenses.textContent = `R ${acc.expense * -1}`;
    }


// function creating the username
const createUserName = function(account){
    account.forEach(function(accountHolder){
        accountHolder.username = accountHolder.owner
            .toLowerCase()
            .split(' ')
            .map(function(name){return name[0]})
            .join('');
    })
};
createUserName(accounts);
console.log(accounts);
/////////////////////// Displaying purpose of the ui
const updateUI = function(acc) {

    //display and calculate the transactions via a call to funtion
    transactions(acc);

    // display and call funct on balance
    displayBalance(acc);

    //display summary
    displayExpense(acc);
    displayIncome(acc);
}


///// Event Handlers ////
let currentAccount; // for use on the login
//fake account login
currentAccount = teri;
updateUI(currentAccount);
displayContainerApp.style.opacity = 100;

//LOGIN btn
inputLoginBtn.addEventListener('click', function(event){
    event.preventDefault();

    currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
    console.log(currentAccount);
    if(currentAccount?.pin === Number(inputLoginPin.value)){
        //display ui and welcome message
        welcomeMessage.textContent = `Welcome back ${currentAccount.owner.split(' ')[0]}`;
        displayContainerApp.style.opacity = 100;

        //have the logins loose focus on revealing data on screen
        inputLoginUsername.value = inputLoginPin.value = '';
        inputLoginPin.blur();
        
        // //display and calculate the transactions via a call to funtion
        // transactions(currentAccount.movements, currentAccount.categoryType);

        // // display and call funct on balance
        // displayBalance(currentAccount.movements);

        // //display summary
        // displayExpense(currentAccount.movements);
        // displayIncome(currentAccount.movements);
        updateUI(currentAccount);
    }
});

// transfering money logic
submitIncomeBtn.addEventListener('click', function(event){
    event.preventDefault();
    const date = inputDateIncome.value;
    const amount = Number(inputAmountIncome.value);
    const categoryType = 'income'

    // console.log(date);
    // console.log(amount);

    if( amount > 0 && currentAccount.balance >= amount)
    {
        currentAccount.movements.push(amount);
        currentAccount.categoryType.push(categoryType);
        currentAccount.date.push(date);
        // updateUI(teri.movements);
        updateUI(currentAccount);
        // amount = ' ';
        //console.log(accounts);
    }
    // else {
    //     console.log('Transfer Invalid');
    // }
});

submitExpenseBtn.addEventListener('click', function(event){
    event.preventDefault();
    const date = inputDateExpense.value;
    const amount = Number(inputAmountExpense.value);
   // const categoryType = inputTypeExpense.value;
    const categoryType = 'inputTypeExpense.value;'

    if(amount > 0 && currentAccount.balance >= amount)
    {
        currentAccount.movements.push(-amount);
        currentAccount.categoryType.push(categoryType);
        currentAccount.date.push(date);
        // updateUI(teri.movements);
        updateUI(currentAccount);
        // amount = ' ';
        //console.log(accounts);
    }
})