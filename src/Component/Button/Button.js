
import React from 'react';
import classes from './Button.module.css'


const button = ({buttonClicked, text})=>(
    <div className={classes.Button} >
         <button 
         className={classes.button}
         onClick={buttonClicked}>
             
            <p className={classes.submit}>{text} </p>
          </button>
    </div>
    

);

   


export default button;