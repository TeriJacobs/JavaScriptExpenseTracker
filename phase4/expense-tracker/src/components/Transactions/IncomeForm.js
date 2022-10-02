import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const IncomeForm = (props) => {

    let [amount, setAmount] = useState("");
    let [date, setDate] = useState("");
    
    function amountInputHandler(event){
        setAmount(event.target.value)
    }
    function dateInputHandler(event){
        setDate(event.target.value)
    }

    function submitHandler(event){
        event.preventDefault();
        const incomeData = { // this object gets passed to the parent component 
            id: Math.random().toString(),
            date : date, // asigning single state variable property names
            amount : parseInt(amount)
        }
        props.onSaveIncomeData(incomeData);
        setAmount('')
        setDate('')
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
                    <form onSubmit={submitHandler}>
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