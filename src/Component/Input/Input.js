import React from 'react';
import classes from './Input.module.css';
import Button from '../Button/Button';


const  input= ({inputValue, changedText, buttonClicked})=>(
    <div className={classes.inputcontainer} >
      <input className={classes.input}
            value={inputValue}
             type="text" 
             placeholder="what do you needs to do..."
             onChange={changedText} />
             
            
        </div>


);
  
export default input;