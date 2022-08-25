import React from 'react';
import './transactions.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import CreateIncome from './CreateIncome';


const incomes = [
    {
        date: '12/12/2022',
        amount: 500
    },
    {
        date: '12/12/2022',
        amount: 900
    }

]

const Summary = (props) => {

    console.log(incomes)

    let y = incomes.map(x => x.amount);
    console.log(y)

    const initialValue = 0;
    const sumWithInitial = y.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
    );
    console.log(sumWithInitial);
    
return (
    <>
        <div className="container">
            <div className="row mt-5 justify-content-md-center">
                <div className="mb-4 col-lg-4 col-md-12 col-sm-12 account-summary">
                    <div className="card-widget">
                        <div className="card-widget-body">
                            <div className="dot me-3 bg-indigo"></div>
                            <div className="text">
                                <span className="transaction-income transaction-summary-text"></span>
                                <span className="text-muted text-uppercase small">Income</span>
                                {incomes.map((incomeParam) => (
                                    <div className="user">{incomeParam.amount}</div>
                                ))
                                }
                                <span>This is sum from hardcoded array{sumWithInitial}</span>
                                <p>ji</p>
                            </div>  
                            <div className="col-auto ms-auto">
                            <div className="income-icon-background">
                                <i className="bi bi-wallet"></i>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-4 col-lg-4 col-md-12 col-sm-12 account-summary">
                    <div className="card-widget">
                        <div className="card-widget-body">
                            <div className="dot me-3 bg-red"></div>
                                <div className="text">
                                    <span className="transaction-expenses transaction-summary-text"></span>
                                    <span className="text-muted text-uppercase small">Expenses</span>
                                </div>
                                <div className="col-auto ms-auto">
                                <div className="expense-icon-background">
                                    <i className="bi bi-cash-coin"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-4 col-lg-4 col-md-12 col-sm-12 account-summary">
                    <div className="card-widget card-widget-balance">
                                <div className="card-widget-body">
                                    <div className="dot me-3 bg-green"></div>
                                    <div className="text">
                                        <span className="transaction-balance transaction-summary-text"></span>
                                        <span className="text-muted text-uppercase small">Balance</span>
                                    </div>
                                    <div className="col-auto ms-auto">
                                        <div className="balance-icon-background">
                                            <i className="bi bi-wallet2"></i>
                                        </div>
                                    </div>
                                </div>
                    </div>
                </div>
            </div>
        </div>
    </>
)
}

export default Summary;