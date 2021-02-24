import React from 'react';

const Todo = (props) =>{
    return(
        <h2>
        {props.description},
        {props.deadLine}
        </h2>
    );

}


const RenderTodo = (props)=> {
    return(
        <ol>
            <h1 className = 'todo-header'>
               Todo List 
            </h1>
        { 
    props.toDoList.map(todo => <li><Todo description = {todo.description} deadLine = {todo.deadLine}/> </li>)
    } 
        </ol>
    );

}



export default RenderTodo;