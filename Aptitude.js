import './project.css';
import { useNavigate } from "react-router-dom"
const Aptitude =()=>{
        let nav=useNavigate()
    const goh =()=>{
        nav('/Home')
    }
    const goc =()=>{
        nav('/Courses')
    }
    const number =()=>{
        nav('/Courses/Aptitude/Number_systems')
    }
    const reas =()=>{
        nav('/Courses/Aptitude/Percentages')
    }
    const ver =()=>{
        nav('/Courses/Aptitude/Time_and_Work')
    }
    const profit =()=>{
        nav('/Courses/Aptitude/Profit_and_Loss')
    }
    const proba =()=>{
        nav('/Courses/Aptitude/Probability')
    }
    const ratio =()=>{
        nav('/Courses/Aptitude/Ratio_and_proportion')
    }
    const ave =()=>{
        nav('/Courses/Aptitude/Averages_and_Ages')
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
    const tech =()=>{
        nav('/Courses/Aptitude/T_S_D')
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
            <div className='bg10'><button className='bg9'></button></div>
            </div>
            <div>
            <div className='bg2'>
                <h2>APTITUDE</h2><br></br>
                <ol className='bg3'>
                    <li onClick={number}>Number Systems</li><br></br>
                    <li onClick={reas}>Percentages</li><br></br>
                    <li onClick={ver}>Time and Work</li><br></br>
                    <li onClick={tech}>Time, Speed and Distance</li><br></br>
                    <li onClick={profit}>Profit and loss</li><br></br>
                    <li onClick={proba}>Probability</li><br></br>
                    <li onClick={ratio}>Ratio and Proprtion</li><br></br>
                    <li onClick={ave}>Averages and Ages</li><br></br>
                </ol>
            </div>
        
            <div className='bg7'>
                <h1>Aptitude</h1>
            </div>
            </div>
        </div>
    )
}
export default Aptitude;