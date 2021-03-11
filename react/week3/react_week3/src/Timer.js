import React,{useState, useEffect} from 'react';

const Timer= ()=> {
    const [time, setTime] = useState(0);

    useEffect(()=>{
        const timer= setTimeout(()=>{
                setTime (prevTime=>prevTime +1) 
            },1000)
        
        return() => {
           clearTimeout(timer)
       }
    })
        

     

    return(
        <div>
            <h1>You have used {time} seconds</h1>
        </div>
    )
}

export default Timer;