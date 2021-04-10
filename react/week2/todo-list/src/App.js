import React, {useState} from 'react'
import './App.css';
import TodoList from './todo.js'
import AddTodo  from './AddTodo.js'


const todos = [
  {
    id: 1,
    description: "Get out of bed",
    check:false,
  },
  {
    id: 2,
    description: "Brush teeth",
    check:false,
  },
  {
    id: 3,
    description: "Eat breakfast",
    check:false,
  },
  {
    id: 4,
    description: "Clean Dishes",
    check:false,
  },
  {
    id: 5,
    description: "Wash Clothes",
    check:false,
  },
  {
    id: 6,
    description: "Prepare Lunch",
    check:false,
  },
  {
    id: 7,
    description: "Coding",
    check:false,
  },
  {
    id: 8,
    description: "Eat Lunch",
    check:false,
  },
  {
    id: 9,
    description: "Again Coding ",
    check:false,
  },
  {
    id: 10,
    description: "Bring kid",
    check:false,
  },
];


function App() {
 const [todo, setTodos] = useState(todos)
const addingTodo =(description)=>{
  const id = Math.floor(Math.random() * (100 - 5 + 1)) + 5;
  setTodos(todo.concat({id: id ,description: description, check: false}))
  console.log(todo)
}
const delTodo = (id)=>{
  console.log(id)
 setTodos(todo.filter(todoItom=>todoItom.id !== id))

}
const toggleCheckbox =(id)=>{
setTodos(todo.map(todoItem=> todoItem.id ===id ? {...todoItem,check:!todoItem.check} : todoItem))
}
  return (
    <div className='App'>
     <AddTodo addingTodo={addingTodo}/>
     {todo.length >0 ?
       <TodoList todos={todo} delTodo ={delTodo} toggleCheckbox ={toggleCheckbox}/>: 'No items'}
    </div>
  );
}

export default App
