import React, { Component } from 'react';
import Input from '../../Component/Input/Input';
import Button from '../../Component/Button/Button';
import Lists from '../../Component/Lists/Lists';
import Heading from '../../Component/Heading/Heading';
import classes from './Layout.module.css';


let todoIndex = 0;
class Layout extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            inputValue: '',
            todos: []
        }
        this.changedTextHandler = this.changedTextHandler.bind(this);
    }
changedTextHandler = (e)=>{
    this.setState({inputValue:e.target.value});
  
    
}
buttonClickedHandler = ()=>{
    if(this.state.inputValue.match(/^\s*$/) ){
        return
    }
    const todo ={
        title: this.state.inputValue,
        todoIndex
        
    }
    todoIndex++;
    
                
            const todos = [...this.state.todos, todo];
            this.setState({inputValue: '', todos});
}
handleDelete = (todoIndex)=>{
    // console.log("I'm clicked");
    // let previoustodos = [...this.state.todos];
    // let index = previoustodos.indexOf(e.target.value)
    // if(index != -1){
    //     previoustodos.splice(index, 1);
    //     this.setState({todos:previoustodos});
    // }
    console.log(todoIndex);
    let {todos} = this.state
     todos = todos.filter((item)=> 
         item.todoIndex !== todoIndex)
    this.setState({todos});

    //  console.log(index);
}
 render(){

            const {inputValue, todos} = this.state
            return(
                <div className={classes.Layout} >

                    <div className={classes.content} >
                        <Heading/>
                     <Input
                     inputValue ={inputValue}
                    changedText ={(e)=> this.changedTextHandler(e)}
                   />
                <Button  
                text="Save"
                    buttonClicked ={this.buttonClickedHandler}
                />
                <Lists
                handleDelete={(e)=> this.handleDelete(e)}
                 todos={todos} />
                 </div>
                    </div>
                  
         );
        }
}

export default Layout;