import React from 'react'
import ServiceCard from './ServiceCard'

function OurServices() {

    const data= [
        {
            img : "https://media4.monsterindia.com/recruiter_2015/india/images/resume-database-1.jpg",
            head: "Resume Database Access",
            description : "Find your next hire with all new RDA powered by Semantic Search technology that makes it easy and quick to find the talent matching your requirements."
    },
    {
        img : "https://media4.monsterindia.com/recruiter_2015/india/images/Job-Posting-1.jpg",
        head: "Job Posting",
        description : "Reach your next hire faster. Get relevant responses to your job ads with our new age technology."
    },
    {
        img : "https://media4.monsterindia.com/recruiter_2015/india/images/Monster-Social-1.jpg",
        head: "Monster Social Job Ads",
        description : "Use the power of MSJ to take your job posting to a large pool of active and passive job seekers on social media & beyond. Find Better, Faster"
    }

    ]
    return (
        <div className="OurServicesMain">
            <p>Our <strong>Services</strong></p>
            <small>For employers who need great people. Find Better, Faster.</small>
            <div className="OurServices">
            {data.map(item=><ServiceCard key={item.img} {...item}/>)}
            </div>
           
        </div>
    )
}

export default OurServices
