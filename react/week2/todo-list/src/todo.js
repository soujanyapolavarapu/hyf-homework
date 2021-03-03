import React, { useState, useEffect } from "react"

const Timer =()=>{
    const [timer, setTimer]= useState(0);
    useEffect(()=>{
       const interval= setInterval(()=>{
           setTimer(timer => timer + 1);
       },1000);
       return()=> clearInterval(interval);
    },[])
    return(
        <div>
            <p>You have used {timer} seconds on this website </p>
        </div>
           )
}

const Todo= ({description , id, delTodo, check,toggleCheckbox})=>{
    //const[check,setCheckbox] = useState(false);
return(
      <div className='todoItems'>
        <h2 className={check ?'checkbox': '' }>{description}</h2>
        <input className='checkbox' type="checkbox" checked={check} onChange={()=>toggleCheckbox(id) } >
        </input>
        <button onClick={()=>delTodo(id)}>Delete</button>
      </div>
)
}
const TodosList = ({todos, delTodo,toggleCheckbox})=>{
    
    return(
        <div>
            <h1>ToDo List</h1>
            <Timer/>
            <ul>
            {todos.map(todoItom => {
             return <li key={todoItom.id}><Todo description = {todoItom.description} id={todoItom.id} delTodo={delTodo} check={todoItom.check} toggleCheckbox={toggleCheckbox}/></li>
            }
            
            )}
            </ul>
        </div>
    )
}

export default TodosList
