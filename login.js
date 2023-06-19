import { useNavigate } from 'react-router-dom';
import './project.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import axios from 'axios';
const Login =()=>{
    let nav=useNavigate()
    const[username,setUsername]=useState("")
    const[password,setPassword]=useState("")
    const gointo =async(e)=>{
        e.preventDefault();
        if(username===""){
            alert("enter username");
        }
        else if(password===""){
            alert('enter password');
        }
        else{
            let result=await axios.post("http://localhost:8080/checkdata/"+username+"/"+password)
            if(result.data==="Success"){
                nav('/Home')
                localStorage.setItem("user",username);
            }
            else{
                alert(result.data)
            }
        }
    }
    const signup =()=>{
        nav('/Signup')
    }   
    return(
        <div className='div'>
            <div className='container2'>
                <center>
                    <h1>Login</h1><br></br>
            <TextField value={username} onChange={e=>setUsername(e.target.value)}id="outlined-basic" label="User Name" variant="filled" required /><br></br><br></br>
            <TextField value={password} onChange={e=>setPassword(e.target.value)}id="filled-basic" label="Password" variant="filled" type='password' required /><br></br><br></br>
            <Button onClick={gointo} variant="contained">Submit</Button><br></br><br></br>
            <Typography>
             Don't have an account<a onClick={signup}>Signup</a>
            </Typography>
                </center>
            </div>
        </div>
    )
}
export default Login;