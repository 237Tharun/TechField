import { useNavigate } from 'react-router-dom';
import { Button, Avatar } from '@mui/material';
import './project.css';
const Courses =()=>{
    let nav=useNavigate()
    const goh =()=>{
        nav('/Home')
    }
    const goc =()=>{
        nav('/Courses')
    }
    const goa =()=>{
        nav('/Courses/Aptitude/Number_systems')
    }
    const reas =()=>{
        nav('/Courses/Reasoning/Number_Series')
    }
    const ver =()=>{
        nav('/Courses/Verbal_Ebility')
    }
    const ctech =()=>{
        nav('/Courses/c')
    }
    const java =()=>{
        nav('/Courses/Java')
    }
    const python =()=>{
        nav('/Courses/Python')
    }
    const cplus =()=>{
        nav('/Courses/C++')
    }
    const reactjs =()=>{
        nav('/Courses/React_js')
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
        <div>
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
            <div className='home'><h1 className='wel'>Select your Interested One</h1></div>
               <div className='course'>
                <div>
                <h1>Logical Courses</h1><br></br><br></br>
               <div className='course2'><h2 style={{color:'blue'}}>1. Quantitative Aptitude</h2></div><div className='course3'><Button variant="contained" onClick={goa}>Start Preperation</Button></div>
               <div className='course2'><h2 style={{color:'blue'}}>2. Logical Reasoning</h2></div><div className='course3'><Button variant="contained" onClick={reas}>Start Preperation</Button></div>
               <div className='course2'><h2 style={{color:'blue'}}>3. Verbal Ebility</h2></div><div className='course3'><Button variant="contained" onClick={ver}>Start Preperation</Button></div>
               </div>
               </div>
               <div className='coursee'>
                <h1>Technical Courses</h1><br></br><br></br>
               <div className='course2'><h2 style={{color:'blue'}}>1. C Language</h2></div><div className='course3'><Button variant="contained" onClick={ctech}>Start Preperation</Button></div>
               <div className='course2'><h2 style={{color:'blue'}}>2. JAVA Language</h2></div><div className='course3'><Button variant="contained" onClick={java}>Start Preperation</Button></div>
               <div className='course2'><h2 style={{color:'blue'}}>3. Python</h2></div><div className='course3'><Button variant="contained" onClick={python}>Start Preperation</Button></div>
               <div className='course2'><h2 style={{color:'blue'}}>4. c++</h2></div><div className='course3'><Button variant="contained" onClick={cplus}>Start Preperation</Button></div>
               <div className='course2'><h2 style={{color:'blue'}}>5. React js</h2></div><div className='course3'><Button variant="contained" onClick={reactjs}>Start Preperation</Button></div>
               </div>
               
            </div>
        </div>
    )
}
export default Courses;