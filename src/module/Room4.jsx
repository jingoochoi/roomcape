import { useContext } from 'react'
import '../css/room.css'
import { ctxt } from './Context'
import $ from 'jquery'
export function Room4() {
    const codi=useContext(ctxt)
    const pops=()=>{
        const hintElement = document.querySelector('.bank');
        hintElement.style.display = 'block';
    }
    const numb=()=>{
        if ($('input').val()===codi.code) {
            $('.poto').text('')
            const hintElement = document.querySelector('.bank');
            hintElement.innerHTML = `YOU GOT KEY!`;
            setTimeout(() => {
                hintElement.style.display='none'
            }, 1000);
        }
    }
    return(
        <>
            <div className="bank" style={{position:'absolute',width:'200px',height:'130px',display:'none',zIndex:333,backgroundColor:'white',borderRadius:'30px',lineHeight:7}}>
                <input type="text" name="text" id="text" onChange={numb} placeholder='password'/>
            </div>
            <div className="poto" onClick={pops}>🔑</div>
        </>
    )
}