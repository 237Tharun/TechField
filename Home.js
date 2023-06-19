import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import './project.css';
const Home =()=>{
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
            <br></br><br></br><br></br>
                <div className='home'><h1 className='wel'>WELCOME TO TECH FEILD</h1></div><br></br>
                <div className='home4'><div className='home3'><h1><b><u>| Every Thing You Need for Your Technical Feild |</u></b></h1><br></br>
                <h3 style={{color:'rgb(37, 36, 36)'}}>This is the Learning Platform for learn everything upto Technical Feild and upgrade your skills in Tech Feild web with friendly.<br></br><br></br>Deliver L&D programs that upskill your entire workforce with courses taught by instructors from across the globe in a variety of dynamic formats.<br></br><br></br>Upgrade skills to stay ahead of the curve. Offer hands-on practice and training on cutting-edge technologies.</h3>
                </div><div className='home2'></div></div><br></br><br></br><br></br>
                <div className='home7'><div className='home5'></div><div className='home6'><h1><b><u>| Learn with Tech Feild | Upto to Technical</u></b></h1><br></br><h3 style={{color:'rgb(37, 36, 36)'}}>1. Logical Skills</h3><h3 style={{color:'rgb(37, 36, 36)'}}>2. Technical Skills</h3><h3 style={{color:'rgb(37, 36, 36)'}}>3. Soft Skills</h3><h3 style={{color:'rgb(37, 36, 36)'}}>4. Communication Skills</h3><h3 style={{color:'rgb(37, 36, 36)'}}>5. Learning Skills</h3><h3 style={{color:'rgb(37, 36, 36)'}}>6. Thinking Skills</h3><h3 style={{color:'rgb(37, 36, 36)'}}>7.Interview Preperation</h3></div></div>
                <div className='home8'><div className='home9'><h1><b><u>| Get Started with Online Learning |</u></b></h1><br></br><h3 style={{color:'rgb(37, 36, 36)'}}>1. Quantitative Aptitude</h3><h3 style={{color:'rgb(37, 36, 36)'}}>2. Logical Reasoning</h3><h3 style={{color:'rgb(37, 36, 36)'}}>3. Verbal Ebility</h3><h3 style={{color:'rgb(37, 36, 36)'}}>4. Technical Languages</h3><h3 style={{color:'rgb(37, 36, 36)'}}>5. Communication Skills</h3><h3 style={{color:'rgb(37, 36, 36)'}}>6. Soft Skills</h3><h3 style={{color:'rgb(37, 36, 36)'}}>7.Interview Preperation</h3></div><div className='home10'></div></div>
                <div className='home11'><div className='home12'></div><div className='home13'><h1><b><u>| Comprehensive Video Lectures |</u></b></h1><br></br><h3 style={{color:'rgb(37, 36, 36)'}}>The subjects are taught in unique and structured pattern that enables ideal learning and logical thinking, this maximizes the retention of the content too. There is absolutely no clutter and unnecessary content!</h3><br></br><h3 style={{color:'rgb(37, 36, 36)'}}>Embodied interactive video lectures for improving learning comprehension and retention</h3><br></br><h3 style={{color:'rgb(37, 36, 36)'}}>The increased interaction with multimedia content has been recognized as a significant factor to improve learners’ learning outcomes.</h3></div></div>
            </div>
        </div>
    )
}
export default Home;