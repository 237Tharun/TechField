import './style.css';
const Top=(a)=>{
   
return(
    <div>
<div className='Tip'>
    <h1 align="center">{a.name}</h1>
    <h1 align="center">{a.roll}</h1>
    <h1 align="center">{a.college}</h1>
</div>
</div>
)
}
const Nav=()=>{
    return(
        <div>
    <div className='nav'></div>
    </div>
    )
    }
    const Mid=()=>{
        return(
            <div>
        <div className='mid'></div>
        </div>
        )
        }
        const Foot=()=>{
            return(
                <div>
            <div className='foot'></div>
            </div>
            )
            }
export {Top,Nav,Mid,Foot};
