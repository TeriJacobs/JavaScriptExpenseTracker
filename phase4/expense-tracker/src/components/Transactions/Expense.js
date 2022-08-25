import React from 'react';

const Expense = (props) => {

return (
<>
    <div className="container">
        <div className="container withdrawals operations-display mt-2 p-2 card-widget card-widget-expenses">
            <div className="h-50 pb-4 pb-lg-2">
                <div className="card-body">
                    <div className="row mb-2">
                        <h4 className="text-muted text-uppercase small text-left">Add an Expense to account</h4>
                        <h2> {props.message}</h2>
                    </div>
                    <div className="form-row align-items-center input-group input-group-sm">
                        <form id="form-expenses" className="input-group input-group-sm">
                            <div className="form-row">
                                <div className="mb-1">
                                    <select className="form-control input-type-expense expense-income-border" required="true">
                                            <option value="" disabled selected hidden>-Please Select-</option>
                                            <option>Food</option>
                                            <option>Petrol</option>
                                            <option>Clothing</option>
                                            <option>Rent</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-row align-items-center input-group input-group-sm">
                                <div className="col">
                                        <input type="date" className=" form-control input-date-expense expense-income-border" placeholder="Date" required="true" />
                                </div>
                                <div className="col mx-2">
                                        <input type="amount" className=" form-control input-amount-expense expense-income-border" placeholder="R400" required="true" />
                                </div>
                                <div className="col">
                                       <button type="button" className="btn btn-outline-dark submit-expense">Submit</button>
                                </div>
                            </div>                                            
                        </form>
                    </div>
                 </div>
            </div> 
        </div>
        
        <div className="container close-account operations-display mt-2 p-2 card-widget card-widget-close">
            <div className="h-50 pb-4 pb-lg-2 closure">
                <div className="card-body">
                    <div className="row">
                        <h4 className="text-muted text-uppercase small text-left">Close your account</h4>
                    </div>
                </div>
                <div className="row mx-1">
                    <form>
                        <div className="form-row align-items-center input-group input-group-sm">
                            <div className="col">
                                <input type="text" className=" form-control input-account-username input-account-border" placeholder="username" />
                            </div>
                            <div className="col mx-2">
                                <input type="password" className=" form-control input-account-password input-account-border" placeholder="password" />
                            </div>
                            <div className="col">
                                <button type="button" className="btn btn-outline-dark submit-delete-account">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</>
)
}

export default Expense