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
        "2022-04-04T23:36:17.929Z"
    ],
    pin: 111,
}
const guest = {
    owner: 'guest account',
    movements: [600, 9000, -4000, 6000, -200, -50, -600],
    categoryType: [ 'income', 'income', 'rent', 'income', 'clothing', 'clothing', 'petrol'],
    date: [
        "2019-11-18T21:31:17.178Z",
        "2019-12-23T07:42:02.383Z",
        "2020-01-28T09:15:04.904Z",
        "2020-04-01T10:17:24.185Z",
        "2020-05-08T14:11:59.604Z",
        "2022-03-29T17:01:17.194Z",
        "2022-04-04T23:36:17.929Z"
    ],
    pin: 222,
}

const accounts = [teri, guest];

/////////////////// Elements ///////////////////
const welcomeMessage = document.querySelector('.welcome-message');
const loginFormDisplay = document.querySelector('.login-form');
const inputLoginUsername = document.querySelector('.input-login-username');
const inputLoginPin = document.querySelector('.input-login-pin');
const inputLoginBtn = document.querySelector('.input-login-btn');
const inputLogoutBtn = document.querySelector('.input-logout-btn');

const displayContainerApp = document.querySelector('.main');

const containerMovements = document.querySelector('.movements');

const transactionBalance = document.querySelector('.transaction-balance')
const transactionIncome = document.querySelector('.transaction-income')
const transactionExpenses = document.querySelector('.transaction-expenses')

const formDeposits = document.getElementById('form-deposits');
const inputDateIncome = document.querySelector('.input-date-income');
const inputAmountIncome = document.querySelector('.input-amount-income');
const submitIncomeBtn = document.querySelector('.submit-income');

const formExpenses = document.getElementById('form-expenses');
const submitExpenseBtn = document.querySelector('.submit-expense');
const inputDateExpense = document.querySelector('.input-date-expense');
const inputTypeExpense = document.querySelector('.input-type-expense');
const inputAmountExpense = document.querySelector('.input-amount-expense');

const submitDeleteBtn = document.querySelector('.submit-delete-account');
const inputAccountUsername = document.querySelector('.input-account-username');
const inputAccountPassword = document.querySelector('.input-account-password');

/////////////////// Functions ///////////////////
// date functionality
const formatMovementDate = function(date){
    const calcDaysPassed = (date1, date2) => Math.round(Math.abs(date2-date1)/ (1000 * 60 *60 *24));

    const daysPassed = calcDaysPassed(new Date(), date);

    if(daysPassed === 0) return 'Today';
    if(daysPassed === 1) return 'Yesterday';
    if(daysPassed <= 7) return `${daysPassed} days ago`;
    else {
        const day = `${date.getDate()}`.padStart(2,0);
        const month = `${date.getMonth() + 1}`.padStart(2,0);
        const year = `${date.getFullYear()}`.padStart(2,0);
        // const hour = now.getHours();
        return `${day}/${month}/${year}`;
    }

}
const transactions = function(acc, sort = false)
{
    containerMovements.innerHTML = '';
    const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

    movs.forEach(function(mov, i) 
    {
            const type = mov > 0 ? `<i class="bi bi-wallet" style="font-size: initial;"></i>  deposit`: `<i class="bi bi-cash-coin" style="font-size: initial;"></i>  expense`;
            const name = acc.categoryType[i];

            const date = new Date(acc.date[i]); // create the new date object for a string method
            const displayDate = formatMovementDate (date);
            
            const html =
      `
        <tbody class="table table-striped">
        <tr class="row">
            <td class="col movements-type movements-type-deposit"> ${type}</div>
            <td class="col movements-category">${name}</div>
            <td class="col movements-date">${displayDate}</div>
            <td class="col movements-value ml-2">R ${mov}</div>
        </tr>
        </tbody>
      `;
      containerMovements.insertAdjacentHTML('afterbegin', html);
    });
}

//below now  beng called in the displayUI function

// displayBalance(teri.movements);
const displayBalance = function(acc){
    if(JSON.parse(localStorage.getItem('formData')) || []){
        acc.balance = acc.movements.reduce((accum, mov) => accum + mov, 0);
        transactionBalance.textContent = `R ${acc.balance}`;
    } else {
    let [{ amount }] = JSON.parse(localStorage.getItem('formData'));
    let formDataLS = JSON.parse(localStorage.getItem('formData', amount));

    let total = 0;
    Object.values(formDataLS).forEach(val => {

        total = total + val.amount;
        console.log(total);
        transactionBalance.textContent = `R ${total}`
        
    });
    }
};

const displayIncome = function( acc) {
    if(JSON.parse(localStorage.getItem('formData')) || []){
        acc.income = acc.movements.filter((mov, i) => mov > 0)
                            .reduce((accum, mov) => accum + mov, 0);
        transactionIncome.textContent = `R ${acc.income}`;
    } else {
    let [{ amount }] = JSON.parse(localStorage.getItem('formData'));
    let formDataLS = JSON.parse(localStorage.getItem('formData', amount));

    let total = 0;
    //Object.values(teri.movements).forEach(val => console.log(val));
    Object.values(formDataLS).forEach(val => {
        if(val.amount > 0){
        //console.log(val.amount)
        total = total + val.amount;
        console.log(total);
        transactionIncome.textContent = `R ${total}`
        }
    });
    }

}
// displayExpense(teri.movements);
const displayExpense = function(acc) {
    if(JSON.parse(localStorage.getItem('formData')) || [])
    {
        acc.expense = acc.movements.filter((mov, i) => mov < 0)
        .reduce((accum, mov) => accum + mov, 0);
        transactionExpenses.textContent = `R ${acc.expense * -1}`;
    } else {
        let [{ amount }] = JSON.parse(localStorage.getItem('formData')) || [];
    let formDataLS = JSON.parse(localStorage.getItem('formData', amount));

    let total = 0;

    Object.values(formDataLS).forEach(val => {

        if(val.amount < 0){
            total = total + val.amount;
            console.log(total);
            transactionExpenses.textContent = `R ${total}`
        }
    });
}

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
    //displaying th JS hardcoded object transactions
    transactions(acc);

    // display and call funct on balance
    displayBalance(acc);

    //display summary
    displayExpense(acc);
    displayIncome(acc);

    //new transaction table display
    dispData(acc)
}


///// Event Handlers ////
let currentAccount; // for use on the login
//fake account login
currentAccount = teri;
updateUI(currentAccount);
displayContainerApp.style.opacity = 0;

//LOGIN btn
inputLoginBtn.addEventListener('click', function(event){
    event.preventDefault();

    currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
    if(currentAccount?.pin === Number(inputLoginPin.value)){
        let myDate = new Date();
        let hrs = myDate.getHours();
        let greet;
            if (hrs < 12)
            greet = 'Good Morning';
            else if (hrs >= 12 && hrs <= 17)
            greet = 'Good Afternoon';
            else if (hrs >= 17 && hrs <= 24)
            greet = 'Good Evening';
        //display ui and welcome message
        welcomeMessage.textContent = `${greet}, ${currentAccount.owner.charAt(0).toUpperCase()+ currentAccount.owner.slice(1).split(' ')[0]}.`;
        welcomeMessage.style.padding = "10px";
        displayContainerApp.style.opacity = 100;

        //have the logins loose focus on revealing data on screen
        inputLoginUsername.value = inputLoginPin.value = '';
        inputLoginPin.blur();

        inputLoginBtn.style.display = 'none';
        
        if(inputLoginBtn.style.display = 'none'){
            inputLoginUsername.style.display = 'none';
            inputLoginPin.style.display = 'none';
            inputLogoutBtn.style.opacity = 100;
            //alert('show')
        }
        updateUI(currentAccount);
    }
});
//LOGOUT BUTTON AS TOGGLE
inputLogoutBtn.addEventListener('click', function(event){
    event.preventDefault();

    displayContainerApp.style.opacity = 0;
    inputLogoutBtn.style.display = 'none';
    welcomeMessage.textContent = 'You have successfully logged out!'


})


// transfering money logic
// tracking income earned
submitIncomeBtn.addEventListener('click', function(event){
    event.preventDefault();

    const date = inputDateIncome.value;
    const amount = Number(inputAmountIncome.value);
    const categoryType = 'income'

    if(amount <= 0 || date === "") {
        alert ('enter a number larger than 10')
    } else {

    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length &&
                JSON.parse(localStorage.getItem('formData')).some(data => {
                    data.date === inputDateIncome.value &&
                    data.amount == Number(inputAmountIncome.value) && 
                    data.categoryType == 'income'
                });
            if(!exist){
                formData.push({
                    date: inputDateIncome.value,
                    amount: Number(inputAmountIncome.value),
                    categoryType: 'income'
                });
                localStorage.setItem('formData', JSON.stringify(formData));
                // dispData()
            } else {
                alert('feild empty Select a date and enter a number greater than 0');
            }
    } 

    updateUI(currentAccount);
    formDeposits.reset();
});

function dispData(){
    if(localStorage.getItem('formData')){
        containerMovements.innerHTML ="";
        JSON.parse(localStorage.getItem('formData')).forEach(item=> {
            const type = item.amount > 0 ? `<i class="bi bi-wallet" style="font-size: initial; color:rgb(53, 182, 83);"></i>  deposit `: `<i class="bi bi-cash-coin" style="font-size: initial; color:red;"></i>  expense `;
            containerMovements.innerHTML += `
            <tbody class="table">
            <tr class="table-row-height" >
                <td class="col movements-type movements-type-deposit"> ${type}</div>
                <td class="col movements-category">${item.categoryType}</div>
                <td class="col movements-date">${item.date}</div>
                <td class="col movements-value ml-2">R ${item.amount}</div>
            </tr>
            </tbody>
            `
        })
        
    };
}

// tracking expenditure
submitExpenseBtn.addEventListener('click', function(event){
    event.preventDefault();
    const date = inputDateExpense.value;
    const amount = Number(inputAmountExpense.value);
    const categoryType = inputTypeExpense.value;

    if(amount <= 0 || date === "" || categoryType === "" )
    {
        alert('Please ensure all inputs have been added');
    } else {

        let formData = JSON.parse(localStorage.getItem('formData')) || [];
        let exist = formData.length &&
                    JSON.parse(localStorage.getItem('formData')).some(data => {
                        data.date === inputDateExpense.value &&
                        data.amount == Number(inputAmountExpense.value) && 
                        data.categoryType == inputTypeExpense.value
                    });
                if(!exist){
                    formData.push({
                        date: inputDateExpense.value,
                        amount: Number(inputAmountExpense.value * -1),
                        categoryType: inputTypeExpense.value
                    });
                    localStorage.setItem('formData', JSON.stringify(formData));
                } else {
                    alert('feild empty Select a date and enter a number greater than 0');
                }
        } 
    updateUI(currentAccount);
    formExpenses.reset();
    
})

// delete user account
submitDeleteBtn.addEventListener('click', function (e) {
    e.preventDefault();
  
    if (
        inputAccountUsername.value === currentAccount.username &&
      Number(inputAccountPassword.value) === currentAccount.pin
    ) {
        // if index found is -1, then the item does not exsist.
      const itemToDelete = accounts.findIndex(
        acc => acc.username === currentAccount.username
      );
      // Delete account
      accounts.splice(itemToDelete, 1);
      // Hide UI
      displayContainerApp.style.opacity = 0;
      loginFormDisplay.style.opacity = 0;

      successDeleteMessage = welcomeMessage;
      successDeleteMessage.textContent = "The user account has been successfully been deleted."
      successDeleteMessage.style.color = "green";
    } else {
        alert("The username/password combination is incorrect, your account cannot be deleted.")
    }
  
    inputAccountUsername.value = inputAccountPassword.value = '';
  });
