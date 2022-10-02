import React from 'react';
import './transactions.css';
import "bootstrap-icons/font/bootstrap-icons.css";

const Summary = (props) => {
    // let total = props.newProductList.map((item) => {

    // })
  
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
                                <span className="text-muted text-uppercase small">Income: R
                                {props.items.map((objDataList) => objDataList.amount).reduce((total, amount)=> total + amount)}
                                </span>
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