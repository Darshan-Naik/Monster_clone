import React from 'react'
import  {ImageCarousel} from "./../../Utils/localData"
import './../../Styles/HomeImageCarousel.css'

function HomeCarousel() {
const timer=React.useRef()
const scrollBar = React.useRef()

    const handleScrollLeft=(e)=>{
        
            scrollBar.current.scrollLeft -= 100;
    
      
    }

    React.useEffect(() => {
        
        timer.current= setInterval(() => {
            scrollBar.current.scrollLeft += 130;
            if(scrollBar.current.scrollLeft>600)
            {
                scrollBar.current.scrollLeft=0
            }
        }, 2000);
       return ()=>{
           clearInterval(timer.current)
       }
    }, [])
    const handleScrollRight=()=>{
        
            scrollBar.current.scrollLeft += 200;
     }
    return (
        <div className="MainImageBox">
            <h2>Employers Choice</h2>
     <div className="PrvBtn"><button onClick={handleScrollLeft}>{"<"}</button></div>
            <div ref={scrollBar}  className="ImageBox">
               
                { ImageCarousel.map(item=><img style={{marginRight:"20px"}} src={item} alt="logo"/>)}
           
            </div>
            <div className="NxtBtn"><button onClick={handleScrollRight} >{">"}</button></div> 
        </div>
      
    )
}

export default HomeCarousel
