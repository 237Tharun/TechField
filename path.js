import React from 'react';
import Home from './Home';
import Courses from './Courses';
import Login from './login';
import Signup from './signup';
import Aptitude from './Aptitude';
import Numseries from './numseries';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Verbal from './verbal';
import Interview from './interview';
import About from './about';
import Contact from './contact';
import C from './c';
import Java from './java';
import Python from './python';
import Cplus from './c++';
import Reactjs from './reactjs';
import Number from './number';
import Percent from './percent';
import Profit from './profit';
import Time from './time';
import Tds from './tds';
import Prob from './prob';
import Ratio from './ratio';
import Average from './Average';
import Letter from './letter';
import Coding from './coding';
import Directios from './directions';
import Seating from './seating';
import Blood from './blood';
import Syllogism from './syllaogism';
import Calenders from './calender';
import Visual from './visual';
const Path =()=>{
    return(
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Courses' element={<Courses/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
        <Route path='/Courses/Aptitude' element={<Aptitude/>}></Route>
        <Route path='/Courses/Reasoning/Number_Series' element={<Numseries/>}></Route>
        <Route path='/Courses/Reasoning/Letter_Series' element={<Letter/>}></Route>
        <Route path='/Courses/Reasoning/Coding_and_Decoding' element={<Coding/>}></Route>
        <Route path='/Courses/Reasoning/Directions' element={<Directios/>}></Route>
        <Route path='/Courses/Reasoning/Seating_Arrangements' element={<Seating/>}></Route>
        <Route path='/Courses/Reasoning/Blood_Relations' element={<Blood/>}></Route>
        <Route path='/Courses/Reasoning/Syllogism' element={<Syllogism/>}></Route>
        <Route path='/Courses/Reasoning/Calenders' element={<Calenders/>}></Route>
        <Route path='/Courses/Reasoning/Visual_Reasong' element={<Visual/>}></Route>
        <Route path='/Courses/Verbal_Ebility' element={<Verbal/>}></Route>
        <Route path='/Courses/c' element={<C/>}></Route>
        <Route path='/Courses/C++' element={<Cplus/>}></Route>
        <Route path='/Courses/Java' element={<Java/>}></Route>
        <Route path='/Courses/React_js' element={<Reactjs/>}></Route>
        <Route path='/Courses/Python' element={<Python/>}></Route>
        <Route path='/Interview_Prep' element={<Interview/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Contac_Us' element={<Contact/>}></Route>
        <Route path='/Courses/Aptitude/Number_systems' element={<Number/>}></Route>
        <Route path='/Courses/Aptitude/Percentages' element={<Percent/>}></Route>
        <Route path='/Courses/Aptitude/Time_and_Work' element={<Time/>}></Route>
        <Route path='/Courses/Aptitude/T_S_D' element={<Tds/>}></Route>
        <Route path='/Courses/Aptitude/Profit_and_Loss' element={<Profit/>}></Route>
        <Route path='/Courses/Aptitude/Probability' element={<Prob/>}></Route>
        <Route path='/Courses/Aptitude/Ratio_and_proportion' element={<Ratio/>}></Route>
        <Route path='/Courses/Aptitude/Averages_and_Ages' element={<Average/>}></Route>
       </Routes>
       </BrowserRouter>
    )
}
export default Path;
