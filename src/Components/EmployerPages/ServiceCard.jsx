import React from 'react'
import "../../Styles/Employer/ServiceCard.css"
function ServiceCard({img,head,description}) {
    return (
        <div className="serviceCard">
            <img src={img} alt="logo"/>
           <div>
                <h2>{head}</h2>
                <p>{description}</p>
                <button>KNOW MORE</button>
            </div> 
        </div>
    )
}

export default ServiceCard
