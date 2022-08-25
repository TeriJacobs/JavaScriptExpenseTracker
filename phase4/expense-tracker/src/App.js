import React, {useState} from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import LoginForm from './components/LoginForm';
import CreateIncome from './components/Transactions/CreateIncome';
import TableDisplay from './components/Transactions/TableDisplay';
import Expense from './components/Transactions/Expense';
import Summary from './components/Transactions/Summary';


const incomes = [
  {
      date: '12/12/2022',
      amount: 500
  },
  {
      date: '12/12/2022',
      amount: 600
  }

]

function App() {

  const [data, setData] = useState('')
  const adminUser = {
    username: "admin",
    password: "123"
  }

  const [user, setUser] = useState({password: "", username:""});
  const [error, serError] = useState("");

  //let[newIncome, updateIncome] = useState(null)
  let[newIncomeList, updateIncomeList] = useState(incomes)

  const Login = details => {
      console.log(details)

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

  function createIncome(income){
    //console.log(income);
    //updateIncome(income);
    updateIncomeList([income, ...newIncomeList])
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
              {/* <Summary newIncome={newIncome}/> */}
              <Summary newIncomeList={newIncomeList}/>

                <h4 createIncome={createIncome}>Income Summary: R </h4>
              <div className="row justify-content-md-center">
                <div className="col-lg-7 mb-4 mb-lg-0">
                  <TableDisplay />
                </div>
                <div className="col-lg-5 mb-4 mb-lg-0">
                <CreateIncome createIncome={createIncome} />
                  <Expense />
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
