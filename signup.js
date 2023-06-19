import'./project.css'
import { TextField,Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
const Signup = () =>{
    let nav=useNavigate()
    const go =()=>{
        nav('/')
    }
    const[name,setName]=useState("")
    const[username,setUsername]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const gointo =async(e)=>{
        e.preventDefault()
        if(name===""){
            alert("enter your name");
        }
        else if(username===""){
            alert("enter username")
        }
        else if(email===""){
            alert("enter email")
        }
        else if(password===""){
            alert('enter password');
        }
        else{
            let mydata={name:name, username:username, email:email, password:password}
            let result=await axios.post("http://localhost:8080/Signup/postdata", mydata)
            if(result.data==="added"){
                nav('/Home')
            }
            else{
                alert(result.data)
            }
        }
    }
return(
    <div className='div'>
        <div className='container2'>
        <center>
        <h1>SIGN UP</h1><br></br>
        <TextField value={name} onChange={e=>setName(e.target.value)} id="NAME-basic" label="Name" variant="outlined" /><br></br><br></br>
        <TextField value={username} onChange={e=>setUsername(e.target.value)} id="USERNAME-basic" label="Username" variant="outlined" /><br></br><br></br>
<TextField value={email} onChange={e=>setEmail(e.target.value)} id="EAMIL-basic" label="Email Id" variant="outlined" /><br></br><br></br>
<TextField value={password} onChange={e=>setPassword(e.target.value)} id="PASSWORD-basic" label="Set Password" variant="outlined" /><br></br><br></br>
<Button onClick={gointo}variant="contained">SIGNUP</Button><br></br><br></br>
<Typography>
    Already have account <a onClick={go}>Login</a>
</Typography>
</center>
</div>
</div>
)
}
export default Signup;