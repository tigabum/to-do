import React from 'react';
import classes from './List.module.css';
import ListButton from '../Button/ListButton';


const list = ({todo, handleDelete})=>(
<div className={classes.listcontainer} >
        <div className={classes.List}>
            {todo.title} 
             </div>
             {/* <div className={classes.button} >
              {/* <ListButton text="Delete" /> */}
             {/* </div> */}
             <div className={classes.button} >
                  <ListButton  className={classes.ListButton} text="Delete" handleDeleteItem={()=>handleDelete(todo.todoIndex)} ></ListButton>
             </div>
             
            

</div>
        
);

export default list;