import { useState } from 'react';
import './Form.css';

function Form(props){
    const[enteredtitle,settitle]=useState('');
    const[enteredamount,setamount]=useState('');
    const[entereddate,setdate]=useState('');
    const changetitlehandler= (event)=> {
        settitle(event.target.value);
    };
    const changeamounthandler= (event)=> {
        setamount(event.target.value);
    };

    const changedatehandler= (event)=> {
        setdate(event.target.value);
    };

    function submitHandler(event){
          event.preventDefault();
          const expenseData={
            title:enteredtitle,
            amount:enteredamount,
            date:new Date(entereddate)
          };
          props.onSaveExpenseData(expenseData);
          settitle('')
          setamount('')
          setdate('')

    }
    const[notshow,setnotshow]=useState(false);
    function addexpenseHandler(){
        setnotshow(true);

    }
    function cancelexpenseHandler(){
        setnotshow(false);

    }




    return( 
        <div>
            { notshow===false &&

           <button onClick={addexpenseHandler}>addexpense</button>
            }
            { notshow &&
        <form className="new-expense" onSubmit={submitHandler}>
             
            <div>
            <label>Title</label>
            <input type="text" onChange={changetitlehandler} value={enteredtitle}></input>
            </div>
            <div>
            <label>Amount</label>
            <input type="number" onChange={changeamounthandler} value={enteredamount}></input>
            </div>
             <div>
             <label>Date</label>
             <input type="date" onChange={changedatehandler} value={entereddate}></input>
             </div>
             <div>
                <button  className="new-expense button" type="submit">addexpense</button>
            
             </div>
             <button onClick={cancelexpenseHandler}>cancel</button>
             
        </form>
}
       
    </div>
           

    );
}
export default Form;