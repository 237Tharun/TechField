import './project.css';
import { Avatar } from '@mui/material';
import { useNavigate } from "react-router-dom"
const Verbal =()=>{
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
        <div className="bg6">
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
            <div>
            <center style={{backgroundColor:'rgb(186, 200, 228)',height:'100vh'}}>
                    <h1><h1>Verbal Ebility</h1></h1><br></br><br></br>
                    <h1><a href='https://www.javatpoint.com/verbal-ability'>click</a></h1>
                </center>
            </div>
        </div>
    )
}
export default Verbal;