import React from 'react'
import JobCard from './JobCard'
import Loading from './Loading';

function Carousel({jobs,title,isLoading}) {

const scrollBar = React.useRef()

    const handleScrollLeft=(e)=>{
       scrollBar.current.scrollLeft -= 350;
    }
    const handleScrollRight=()=>{
        scrollBar.current.scrollLeft += 350;
     }
    return (
        <div className="carouselBoxMain">
            <h2>{title}</h2>
       {isLoading?  <Loading/>  :( <> <div className="prevBtn"><button onClick={handleScrollLeft}>{"<"}</button></div>
            <div ref={scrollBar}  className="carouselBox">
                
                {jobs.map(item=><JobCard  key={item.id} {...item} />)}
           
            </div>
            <div className="nextBtn"><button onClick={handleScrollRight} >{">"}</button></div> </>)}
        </div>
      
    )
}

export default Carousel
