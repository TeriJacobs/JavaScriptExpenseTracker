import React from 'react';
import './transactions.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import IncomeForm from './IncomeForm';


const CreateIncome = (props) => {
    //const incomes = props.callIt;
    // console.log(props, incomes)
    function onCreateIncome(income){
    props.createIncome(income)
    // console.log('==================')
    }
return (
    <>
    <div> Return total: </div>
    <IncomeForm createIncome={onCreateIncome} />
    </>
)
}

export default CreateIncome;