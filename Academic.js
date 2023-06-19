import React from 'react';
import './Admission.css';
import { useNavigate } from 'react-router-dom';
const Academic =()=>{
    let nav=useNavigate()
    const goAcademic=()=>{
        nav("/")
    }
    const goAdmission =()=>{
        nav("/Admission")
    }
   return(
    <div>
        <ul className='ad'>
                <li onClick={goAcademic}>Academic</li>
                <li onClick={goAdmission}>Admission</li>
                </ul>
                <div className='section' style={{background:'skyblue'}}>
                    <h1>Academic</h1>
                </div>
    </div>
    )
} 
export default Academic;