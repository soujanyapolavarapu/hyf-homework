
const AddTodo= ({addingTodo})=>{
    const text = 'random Text';
    return(
        <button onClick={()=>addingTodo(text)}>Add todo</button>
    )
}


export default AddTodo;