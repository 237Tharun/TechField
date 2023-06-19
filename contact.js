import { useNavigate } from 'react-router-dom';
import { TextField,Button, Avatar } from '@mui/material';
import './project.css';
const Contact =()=>{
    let nav=useNavigate()
    const goh =()=>{
        nav('/Home')
    }
    const goc =()=>{
        nav('/Courses')
    }
    const inter =()=>{
        nav('/Interview_Prep')
    }
    const about =()=>{
        nav('/About')
    }
    const contact =()=>{
        nav('/Contac_Us')
    }
    return(
        <div className='bg1'>
       <div className='beside'><h1 className='h1'>| Tech Feild | <sub>Learn Upto Technical</sub></h1></div>
            <div className='beside1'><input type='search' placeholder='search here...' className='search'></input></div>
            <div className='bg'>
            <ul>
                <li onClick={goh}>Home</li>
                <li onClick={goc}>courses</li>
                <li onClick={inter}>Interview Prep</li>
                <li onClick={about}>About</li>
                <li onClick={contact}>Contact us</li>
            </ul>
            <Avatar className='avatar' src="/broken-image.jpg" sx={{ width: 50, height: 50 }} />
            </div>
            <div className='bg8'>
                <center>
                <h1>Contact us</h1><br></br><br></br><br></br><br></br>
                <div className='container2'>
        <center>
        <h1>CONTACT US</h1><br></br>
        <TextField id="NAME-basic" label="Name" variant="outlined" /><br></br><br></br>
        <TextField id="USERNAME-basic" label="Email" variant="outlined" /><br></br><br></br>
<TextField id="EAMIL-basic" label="Mobile" variant="outlined" /><br></br><br></br>
<TextField id="PASSWORD-basic" label="Comment" variant="outlined" /><br></br><br></br>
<Button variant="contained">submit</Button><br></br><br></br>
</center>
</div>
                </center>
            </div>
        </div>
    )
}
export default Contact;