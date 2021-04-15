import React from 'react'

function JobCard({job_title,Role,experience,walk_in,location,id}) {
    return (
    <div className="jobCards">
        <h3>{job_title}</h3>
        <p className="ellipsis">{Role}</p>
        <p>Experience : {experience}</p>
        {walk_in && <p>Date : {walk_in}</p>}
        <p>Locations : {location.map(item=><small key={item}>{item}, </small>)}</p>
    </div>
    )
}

export default JobCard
