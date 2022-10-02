import React, {useEffect, useState} from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import LoginForm from './components/LoginForm';
import CreateIncome from './components/Transactions/CreateIncome';
//import TableDisplay from './components/Transactions/TableDisplay';
import Expense from './components/Transactions/Expense';
import Summary from './components/Transactions/Summary';
import IncomeForm from './components/Transactions/IncomeForm';

const objDataList = [
  {
    id: Math.random().toString(),
    date: '12-12-2020',
    amount: 100,
  },
  {
    id: Math.random().toString(),
    date: '12-12-2021',
    amount: 300,
  }

];

function App() {

  const adminUser = {
    username: "admin",
    password: "123"
  }
  const [user, setUser] = useState({password: "", username:""});
  const [error, serError] = useState("");
 
  // const [dateInput, setDateInput] = useState('')
  // const [amountInput, setAmountInput] = useState('')
  const [filteredList, setFilteredList] = useState(JSON.parse(localStorage.getItem('INCOMEDATA')) || objDataList);


  const Login = details => {

      if(details.username === adminUser.username && details.password === adminUser.password){
        console.log('we are logged in');
        setUser({
          username: details.username,
          password: details.password
        })
      } else {
        console.log("details do not match")
        serError("details do not match")
      }
  }

  const Logout = () =>{
      console.log("logout");
      setUser({ username: "", password:"" })
  }

  // function createIncomeEventHandler(event){
  //   event.preventDefault();
  //   setFilteredList((prevUsersList) =>{
  //     return [
  //       ...prevUsersList,
  //       {
  //         id: Math.random().toString(),
  //         date: dateInput,
  //         amount: parseInt(amountInput),
  //       }
  //     ]
  //   });
    // setDateInput('');
    // setAmountInput('')
  // }

  // function setDateInputHandler(event){
  //   setDateInput(event.target.value)
  // }
  // function setAmountInputHandler(event){
  //   setAmountInput(event.target.value)
  // }

  useEffect(()=>{
    localStorage.setItem('INCOMEDATA', JSON.stringify(filteredList));
  },[filteredList])
  useEffect(() => {
    const filteredList = JSON.parse(localStorage.getItem('INCOMEDATA'));
    if(filteredList){
      setFilteredList(filteredList)
    }
    }, [])

    //NOw this code is for when we destructuring
    const addIncomeHandler = (income) => {
      setFilteredList(prevIncomeEarned => {
        return [income, ...prevIncomeEarned]
      })
    }


  return (
  <>
    <div className="App">
        {(user.username !== "" ? (
          <div className="row mt-5 welcome">
            <div className="col-8">
              <h4>Good morning, <span>{user.username}</span></h4>
            </div>
            <div className="col-4">
              <button type="button" className="btn btn-outline-dark" onClick={Logout}>Logout</button>
            </div>
            <div className="container">
              <Summary items={filteredList}/>
              <div>
              {/* {filteredList.map((item) => (
                <ul key={item.id}>
                  <li>{item.date}</li>
                  <li>{item.amount}</li>
                </ul>
                ))} */}
                Total Income Accumated: R 
              {filteredList.map(item => item.amount).reduce((total, amount)=> total + amount)}
              </div>
              <div>

              </div>
              <div className="row justify-content-md-center">
                <div className="col-lg-7 mb-4 mb-lg-0">
                  {/* <TableDisplay /> */}
                </div>
                <div className="col-lg-5 mb-4 mb-lg-0">
                <CreateIncome onAddIncome={addIncomeHandler} />
                {/* <form onSubmit={createIncomeEventHandler}>
                        <div className="form-row align-items-center input-group input-group-sm">
                                <div className="col">
                                <input 
                                    type="date" 
                                    className=" form-control input-date-income input-income-border"  
                                    onChange={setDateInputHandler} 
                                    value={dateInput}/>
                                </div>
                                <div className="col mx-2">
                                    <input 
                                        type="text" 
                                        className=" form-control input-amount-income input-income-border" 
                                        placeholder="R400" 
                                        onChange={setAmountInputHandler}  
                                        value={amountInput}/>
                                </div>
                                <div className="col">
                                    <button type="submit" value="Submit">Submit</button>
                                </div>
                        </div>
                </form> */}
                </div>
              </div>
            </div>
          </div> ) : (
          <LoginForm  Login={Login} error={error}/>
          )
        )}
    </div>
  </>
  );
}

export default App;
