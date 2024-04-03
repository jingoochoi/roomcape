import { useContext } from 'react'
import '../css/room.css'
// import $ from 'jquery'
import { ctxt } from './Context'
export function Room3() {
    const codo=useContext(ctxt)
    const ment=()=>{
        const hintElement = document.querySelector('.hant');
                hintElement.innerHTML = `BEAUTIFUL NIGHT!`;
                hintElement.style.display = 'block';
                setTimeout(() => {
                    hintElement.style.display='none'
                }, 1000);
    }
        const memo=()=>{
                const hintElement = document.querySelector('.hant');
                hintElement.innerHTML = `xx${codo.cod2}`;
                hintElement.style.display = 'block';
                setTimeout(() => {
                    hintElement.style.display='none'
                }, 1000);
        }
    return(
        <>
            <div className="hant" style={{position:'absolute',width:'200px',height:'130px',display:'none',zIndex:333,backgroundColor:'white',borderRadius:'30px',lineHeight:7}}></div>
            <div className="wind" onClick={ment}>🌆
                <div className="none"></div>
            </div>
            <div className="hole" onClick={memo}></div>
        </>
    )
}