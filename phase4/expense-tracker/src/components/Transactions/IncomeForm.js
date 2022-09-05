import {useState, useEffect} from 'react'; // state provides 2 way data binding when working with forms, also allows clearing of form inputs
import 'bootstrap/dist/css/bootstrap.min.css';


const IncomeForm = (props) => {

    let [amount, updateAmount] = useState("");
    let [date, updateDate] = useState("");
    
    function amountInputHandler(event){
        updateAmount(event.target.value)
    }
    function dateInputHandler(event){
        updateDate(event.target.value)
    }

    function createIncomeEventHandler(event){
        event.preventDefault();
        let income = { // this object gets passed to the parent component 
            date : date, // asigning single state variable property names
            amount : amount
        }
        updateAmount(income.amount); // persisting user inputs now
        updateDate(income.date);
        // console.log(income);
        // const myUpdatedVehicle = {...income, date, amount};
        // console.log(myUpdatedVehicle)
        props.createProduct(income)
    }

return (
<>
<div className="container">
        <div className="container deposits operations-display p-2 card-widget card-widget-income">
            <div className="h-50 pb-4 pb-lg-2">
                <div className="card-body">
                    <div className="row text-left">
                        <h4 className="text-muted text-uppercase small">Deposit income into account</h4>
                        <h2>{props.message}</h2>
                    </div>
                    <div className="row">
                    <form onSubmit={createIncomeEventHandler}>
                        <div className="form-row align-items-center input-group input-group-sm">
                                <div className="col">
                                <input 
                                    type="date" 
                                    className=" form-control input-date-income input-income-border"  
                                    onChange={dateInputHandler} 
                                    name='date' 
                                    value={date}/>
                                </div>
                                <div className="col mx-2">
                                    <input 
                                        type="text" 
                                        className=" form-control input-amount-income input-income-border" 
                                        placeholder="R400" 
                                        onChange={amountInputHandler}  
                                        value={amount}/>
                                </div>
                                <div className="col">
                                    <button type="submit" value="Submit">Submit</button>
                                </div>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
)
}

export default IncomeForm;