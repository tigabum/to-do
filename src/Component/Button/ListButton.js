import React from 'react';
import classes from './ListButton.module.css'

const listButton = ({text, handleDeleteItem} )=>(
    <div>
        <button className={classes.listbutton}
        onClick={handleDeleteItem}> 
            {text}
        </button>
   </div>

);
export default listButton;