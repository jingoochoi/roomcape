import { useContext } from 'react'
import '../css/room.css'
// import $ from 'jquery'
import { ctxt } from './Context'
export function Room2() {
    const coco=useContext(ctxt)
    const hint = (event) => {
        const parent = event.currentTarget.parentElement;
        const hintElement = document.querySelector('.hint');
        
        if (parent.classList.contains('up')) {
            hintElement.textContent = 'EMPTY!';
            hintElement.style.display = 'block';
            setTimeout(() => {
                hintElement.style.display='none'
            }, 1000);
        } else if (parent.classList.contains('down')) {
            // Make sure coco.cod1 is defined and accessible
            hintElement.innerHTML = `${coco.cod1}xx`;
            hintElement.style.display = 'block';
            setTimeout(() => {
                hintElement.style.display='none'
            }, 1000);
        }
    };
    return(
        <>
            <div className="hint" style={{position:'absolute',width:'200px',height:'130px',display:'none',zIndex:333,backgroundColor:'white',borderRadius:'30px',lineHeight:7}}></div>
            <div className="draw wood">
                <div className="pock up wooddown">
                    <div className="open wood" onClick={hint}></div>
                </div>
                <div className="pock down wooddown">
                    <div className="open wood" onClick={hint}></div>
                </div>
            </div>
        </>
    )
}