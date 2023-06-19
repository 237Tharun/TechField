import {React,useState} from 'react'
const Tharun =()=>{
    const[status,setStatus]=useState("i am sleeping")
    const alarm =()=>{
        alert("alarm ringing")
    }
        const wakeup =()=>{
            setStatus("ok i am waking")
        }
        const study =()=>{
            setStatus("i am studying")
        }
        const bath =()=>{
            setStatus("i am bathing")
        }
return(
        <div>
            <h1>{status}</h1>
            <button onClick={alarm}>alarm</button>
            <button onClick={wakeup}>submit</button>
            <button onClick={study}>study</button>
            <button onClick={bath}>bath</button>
        </div>
    )
}
export default Tharun;