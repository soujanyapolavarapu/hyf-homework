import React from 'react';
import './App.css';
import RenderTodo from './todo.js'

const toDoList = [
{
  description: 'Get out of bed',
  deadLine: 'Wed Sep 13 2017' 
},
{
  description: 'Brush teeth',
  deadLine: 'Thu Sep 14 2017' 
},
{
  description: 'Eat breakfast',
  deadLine: 'Fri Sep 15 2017'
}
];

function App() {
  return (
    <div className="todo-App">
<RenderTodo toDoList = {toDoList}/>
    
    </div>
  
  );
}

export default App;
