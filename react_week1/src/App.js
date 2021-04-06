import React from 'react';
import './App.css';
import RenderTodo from './todo.js'

const toDoList = [
{
  id:1,
  description: 'Get out of bed',
  deadLine: 'Wed Sep 13 2017' 
},
{
  id:2,
  description: 'Brush teeth',
  deadLine: 'Thu Sep 14 2017' 
},
{
  id:3,
  description: 'Eat breakfast',
  deadLine: 'Fri Sep 15 2017'
}
];

function App() {
  return (
    <div className="todo-app">
     <RenderTodo toDoList = {toDoList}/>
    </div>
  
  );
}

export default App;
