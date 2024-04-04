import '../css/room.css'
import $ from 'jquery'
export function Room1() {
    const rota=()=>{
        const hintElement = document.querySelector('.sult');
        if ($('.poto').text()==='🔑') {
            hintElement.textContent = 'LOCKED!!';
            hintElement.style.display = 'block';
            setTimeout(() => {
                hintElement.style.display='none'
            }, 1000);
        } else if ($('.poto').text()==='') {
            // Make sure coco.cod1 is defined and accessible
            // alert('oo')
            hintElement.textContent = 'YEAH!!';
            hintElement.style.display = 'block';
            $('#root').fadeOut(2000)
            setTimeout(() => {
                window.close()
            }, 2300);
        }
    }
    return(
        <>
            <div className="sult" style={{position:'absolute',width:'200px',height:'130px',display:'none',zIndex:333,backgroundColor:'white',borderRadius:'30px',lineHeight:7}}></div>
            <div className="door woodleft">
                <div className="hand" onClick={rota}></div>
            </div>
        </>
    )
}