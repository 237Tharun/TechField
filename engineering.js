import './project.css';
import { useNavigate } from "react-router-dom"
const Engineering =()=>{
        let nav=useNavigate()
    const goh =()=>{
        nav('/Home')
    }
    const goc =()=>{
        nav('/Courses')
    }
    const goa =()=>{
        nav('/Courses/Aptitude')
    }
    const reas =()=>{
        nav('/Courses/Reasoning')
    }
    const ver =()=>{
        nav('/Courses/Verbal_Ebility')
    }
    const tech =()=>{
        nav('/Courses/Technical_Languages')
    }
    const eng =()=>{
        nav('/Courses/Engineering')
    }
    return(
        <div className="bg6">
            <div className='bg'>
            <h1 align='center'className='h1'>Wellcome Buddy</h1>
            <ul>
                <li onClick={goh}>Home</li>
                <li onClick={goc}>courses</li>
            </ul>
            </div>
            <div>
            <div className='bg2'>
                <h2><u>Courses</u></h2><br></br>
                <ol className='bg3'>
                    <li onClick={goa}>Aptitude</li><br></br>
                    <li onClick={reas}>Reasoning</li><br></br>
                    <li onClick={ver}>Verbal Ebility</li><br></br>
                    <li onClick={tech}>Technical Languages</li><br></br>
                    <li onClick={eng}>Engineering</li><br></br>
                    <li></li>
                </ol>
            </div>
        
            <div className='bg7'>
                <h1>Engineering</h1>
            </div>
            </div>
        </div>
    )
}
export default Engineering;