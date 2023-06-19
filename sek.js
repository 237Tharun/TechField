import { useState } from 'react'
const Log=() => {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const click =()=>{
        
    if(name===""){
        alert("enter your Name")
    }
     else if(email===""){
        alert("enter your email")
    }
    else if(password===""){
        alert("enter your password")
    }else{
        alert("success")
    }
}
return(
    <div> 
        <center>
        Name:<input type="Name" value={name} onChange={e=>setName(e.target.value)}></input><br></br>
        email:<input type="email"  value={email} onChange={e=>setEmail(e.target.value)}></input><br></br>
        password:<input type="password"  value={password} onChange={e=>setPassword(e.target.value)}></input><br></br>
        <button onClick={click}>submit</button>
        </center>
    </div>
)
    }
export default Log;