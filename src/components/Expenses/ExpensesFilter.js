import React, {useState} from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {                                
    const dropdownChangeHandler = (event) => {                //this is the actual component which does the particular work
      props.onChangeFilter(event.target.value);              // (in this case gives the year filter part )
    };                                                       //  here you use variables or objects which are
                                                             //react defined like(onChange or value orevent.target.value)
  return (                                                  //child component batata hai kya aur kahan bhejna hai
                                                              // jaise ye bata raha ki event.target.value bhej do onchangeFilter mai basically yahn parameter pass ho rahey hai
    <div className='expenses-filter'>                       
      <div className='expenses-filter__control'>                 
        <label>Filter by year</label>                                   
        <select ondChange={dropdownChangeHandler} value={props.selected}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;