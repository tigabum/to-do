import React from 'react';
import List from '../List/List';


const lists = ({todos, handleDelete})=>{
        const todo = todos.map((todo, i)=>{
                return (
                        <List key={i} todo={todo}
                        handleDelete={handleDelete} />
                
                );
                
                
              
        })
      
        return (
                <div>
                        {todo}
                        
                </div>
        );
}
export default lists;