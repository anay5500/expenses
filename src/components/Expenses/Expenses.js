import React,{useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';


                                                                      //this is the parent component reagarding the year filter componenet       
const Expenses = (props) => {                                          //you create a clone function or small code which is similar to the child component
                                                                   //but only the variables or objects are different and user defined and what react 
                                                                    //does is that it connects these objects and variables to you child components objecys and variables    
  const [filteredYear, setFilteredYear] = useState('2020');
                                                                 //yahan bas jo data child se ayya hai vo associate ho jata function ke arguments se
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
                                                                  //yahan sab nakli banta hai
  };
  const filteredExpenses=props.items.filter(expenses=>{
    return expenses.date.getFullYear().toString===filteredYear;
  });

  
  return (
    <div>
      
    <Card className="expenses">
    <ExpensesFilter  selected={filteredYear} onChangeFilter={filterChangeHandler}/>
    
    { filteredExpenses.map(dummyexpenses=><ExpenseItem 
    key={Expenses.id}
    title={dummyexpenses.title}
    amount={dummyexpenses.amount}
    date={dummyexpenses.date}
    /> ) }
    
    
    </Card>
    </div>
  );
}

export default Expenses;