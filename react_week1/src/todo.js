import React from 'react';
const Todo = ({description, deadLine}) => { 
  return(
    <div>
        <h2>{description}</h2>
        <div>{deadLine}</div>
    </div>
  )
}
        
const RenderTodo = ({toDoList})=> {
    return (
        <div>
          <h1 className="todo-header">Todo List</h1>
          {toDoList.map(todo => (
              <Todo key={todo.id} 
                    description={todo.description} 
                    deadLine={todo.deadLine} 
               />
          ))}
        </div>
      )
} 




export default RenderTodo;