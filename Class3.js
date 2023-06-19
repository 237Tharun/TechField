import React from'react';
const Tharun =()=>{
    const marks=[56,23,45,67,24,5,32]
    const marks2=[{name:"tharun",roll:"237",mobile:"123455679"},{name:"sekhar",roll:"236",mobile:"324254352"},{nane:"mahesh",roll:"221",mobile:"1234124"}]
    const mark3=marks2[0];
    console.log(mark3)
    return(
        <div>
            {
                marks.map((t)=>{
                   return <h1>{t}</h1>
                })
            }
            {
                marks2.slice(0,2).map((t)=>{
                    return <h1>name={t.name}, roll={t.roll}, mobile={t.mobile}</h1>
                 })
            }
        </div>
    )
}
export default Tharun;