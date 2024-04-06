import { useContext, useEffect } from 'react'
import '../css/room.css'
import $ from 'jquery'
import { ctxt } from './Context'
export function Room3() {
    const codo=useContext(ctxt)
    useEffect(()=>{
        $('.swiper-button-prev,.swiper-button-next').hide()
    })
    const clck=()=>{
        $('.swiper-button-prev,.swiper-button-next').show()
        $('.bgin').hide()
        $('#root').css({filter:'grayscale(100%) blur(10px)'})
        setTimeout(() => {
            $('#root').css({filter:'grayscale(0%) blur(0px)',transition:'1s'})
        }, 1000);
    }
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
            <div className="bgin" style={{width:'100%',height:'100%',backgroundColor:'white',display:'flex',justifyContent:'center',alignItems:'center',zIndex:333}}>
                <div className="bttn" style={{width:'100px',height:'30px',border:'1px solid black',display:'flex',justifyContent:'center',alignItems:'center'}} onClick={clck}>START</div>
            </div>
            <div className="hant" style={{position:'absolute',width:'200px',height:'130px',display:'none',zIndex:333,backgroundColor:'white',borderRadius:'30px',lineHeight:7}}></div>
            <div className="wind" onClick={ment}>🌆
                <div className="none"></div>
            </div>
            <div className="hole" onClick={memo}></div>
        </>
    )
}