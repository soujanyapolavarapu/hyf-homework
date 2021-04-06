import React,{useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Timer from './Timer.js';


 const toDo_url = 'https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw';

 const InputData =({addTodo})=>{
     const [description, setDescription] = useState('')
     const [deadline, setDeadline] = useState('')

   const onSubmit=(event)=>{
    event.preventDefault();
      addTodo(description, deadline) ;
       setDescription('')
       setDeadline('')
   }

   const minDate=()=>{
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    
  const currentDate= `${year}${'-'}${month<10?`0${month}`:`${month}`}${'-'}${date}`;
  return currentDate;

   }
            

     return(
         <div>
         <form onSubmit={onSubmit}>
         <div>
             <label htmlFor='description'>Todo Description</label>
         <input 
         type='text'
         id='description'
         value= {description}
         placeholder='Description'
         onChange={(e)=>{
            const value= e.target.value;
            console.log(value)
            setDescription(value)
        }}
         
         />
         </div>
         <div>
             <label htmlFor='deaadline'>Deadline</label>
         <input
         type='date' 
         id='deaadline'
         min={minDate()}
         value={deadline}
         placeholder='Deadline'
        onChange={(e)=>{
            const value= e.target.value;
            console.log(value)
            setDeadline(value)
        }}
         
         />
         </div>
         <button type='submit'>Add Todo</button>
         </form> 
         
         </div>  
     )
 }

 function Todo({ description, deadline, onDelete,onUpdate, id}) {
     const [check, setCheck]=useState(false)
     const [edit, setEdit]= useState(false)
     const [newDescription, setNewDescription]= useState(description)
     const onCheck=()=>{
         return setCheck(!check)
     }

     const onEdit=()=>{
         setEdit(!edit) 
        onUpdate(id,newDescription)
    }
    return (
        <div className='todo'>
            <div className='items'>
            {edit?<input type='text' value={newDescription} onChange={(e)=>setNewDescription(e.target.value)}/>:
            <h3 style={{ textDecoration : check ? 'line-through':'none' }}>
                {id} {description} {deadline}:
            </h3>
            }
            <input type="checkbox" checked={check}  onChange={onCheck}/>
            </div>
            <button onClick={onDelete}>Delete</button>
            <button onClick={onEdit}>{edit?'Update':'Edit'}</button>
        </div>
    )
}
const Children =({children})=>{
    return(
        <div className='styles'>
          {children}
        </div>
    )
}

function FetchedData(){
    const [todo, setTodo]= useState([]);
    
    
    const fetchingInfo= ()=>{
    fetch(toDo_url)
    .then(res=>res.json())
    .then(data=> setTodo(data)
    )
    } 

    useEffect(()=>{
        fetchingInfo()
        },[]);
            
     const addTodo=(description,deadline)=>{
            const id=todo.length +1;
            if(description && deadline){
                const newTodo ={id,description,deadline}
               return setTodo([...todo, newTodo])
            }
        }    
     
     const deleteTodo=(id)=>{
        const delTodo= todo.filter(todoItem=>todoItem.id !== id)
        setTodo(delTodo)

     }

     const updateTodo=(id,description)=>{
        if (description) {
            const modifyTodos = todo.map(todoItem => {
                if (todoItem.id === id) {
                    todoItem.description = description;
                } return todoItem
            })
            setTodo(modifyTodos)
        }
     }

    
    return(
        <div>
            <h1>Todolist</h1>
            <InputData addTodo={addTodo}/>
            {}
            <Timer />
           { todo.length>0?
           todo.map(todoItem=>(
               < Children >

                    < Todo
                          key={todoItem.id}
                          id={todoItem.id}
                          description={todoItem.description}
                          deadline={todoItem.deadline}
                          onDelete={() => deleteTodo(todoItem.id)}
                          onUpdate={updateTodo}  
                        
                      /> 
                </Children>        
           )
            ):'No Items to display'}
           
        </div>
    )
}

Todo.propTypes ={
     id: PropTypes.number,
     description: PropTypes.string,
     deadline :PropTypes.string,
     onDelete:PropTypes.func,
     onUpdate:PropTypes.func
      
};

export default FetchedData;