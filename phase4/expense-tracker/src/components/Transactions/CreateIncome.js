import React from 'react';
import './transactions.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import IncomeForm from './IncomeForm';


const CreateIncome = (props) => {
    function onCreateIncome(income){
    props.createIncome(income)
    }
return (
    <>
    <div> Return total: </div>
    <IncomeForm createIncome={onCreateIncome} />
    </>
)
}

export default CreateIncome;