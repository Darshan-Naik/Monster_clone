import React from 'react'
import JobCard from './JobCard'

function Carousel({jobs,title}) {
    return (
        <div className="carouselBoxMain">
            <h2>{title}</h2>
            <div className="carouselBox">
                <div className="prevBtn"><button>{"<"}</button></div>
                
                {jobs.map(item=><JobCard key={item.id} {...item} />)}
                <div className="nextBtn"><button >{">"}</button></div>
                
            </div>
        </div>
      
    )
}

export default Carousel
