import './project.css';
import { Avatar } from '@mui/material';
import { useNavigate } from "react-router-dom"
import { useRef } from 'react';
import ReactPlayer from 'react-player';
const VIDEO_PATH = 'https://www.youtube.com/watch?v=iv1r7AGz-Wg&list=PL293k1WhNDwMYZLHvqFfw3Pf5Bu0jcn0Z'
const Seating =()=>{
    const playerref=useRef(null);
        let nav=useNavigate()
    const goh =()=>{
        nav('/Home')
    }
    const goc =()=>{
        nav('/Courses')
    }
    const goa =()=>{
        nav('/Courses/Reasoning/Number_Series')
    }
    const reas =()=>{
        nav('/Courses/Reasoning/Letter_Series')
    }
    const ver =()=>{
        nav('/Courses/Reasoning/Coding_and_Decoding')
    }
    const seat =()=>{
        nav('/Courses/Reasoning/Seating_Arrangements')
    }
    const blood =()=>{
        nav('/Courses/Reasoning/Blood_Relations')
    }
    const syll =()=>{
        nav('/Courses/Reasoning/Syllogism')
    }
    const calen =()=>{
        nav('/Courses/Reasoning/Calenders')
    }
    const vis =()=>{
        nav('/Courses/Reasoning/Visual_Reasong')
    }
    const tech =()=>{
        nav('/Courses/Reasoning/Directions')
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
            <div className='bg2'>
                <h2><u>Reasoning</u></h2><br></br>
                <ol className='bg3'>
                    <li onClick={goa}>Number Series</li><br></br>
                    <li onClick={reas}>Letter Series</li><br></br>
                    <li onClick={ver}>Coding and Decoding</li><br></br>
                    <li onClick={tech}>Directions</li><br></br>
                    <li onClick={seat}>Seating Arrangement</li><br></br>
                    <li onClick={blood}>Blood Relations</li><br></br>
                    <li onClick={syll}>Syllogism</li><br></br>
                    <li onClick={calen}>Calenders</li><br></br>
                    <li onClick={vis}>Visual Reasoning</li><br></br>
                </ol>
            </div>
        
            <div className='bg7'>
                <h1>Seating Arrangements</h1><br></br><br></br>
                <div style={{paddingLeft:'300px'}}><ReactPlayer ref={playerref} url={VIDEO_PATH} controls={true}></ReactPlayer></div>
            </div>
            </div>
        </div>
    )
}
export default Seating;