import React, {useState} from 'react';
import './transactions.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import IncomeForm from './IncomeForm';
import Data from './Data.json'


const CreateIncome = (props) => {
    const [filteredList, setFilteredList] = useState(JSON.parse(localStorage.getItem('INCOMEDATA')) || Data);

    function saveIncomeDataHandler(enteredIncome){
    const incomeData = {
        ...enteredIncome,
        id: Math.random().toString()
    }
    props.onAddIncome(incomeData)
    }
    
return (
    <>
    <IncomeForm onSaveIncomeData={saveIncomeDataHandler} />
    </>
)
}

export default CreateIncome;