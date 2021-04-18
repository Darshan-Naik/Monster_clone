import React from 'react'
import { Link, useHistory } from 'react-router-dom'

function JobCard({job_title,Role,experience,walk_in,location,id}) {
const history = useHistory()

const handleClick = ()=>{
history.push("/result/job/"+id)
}
return (
<div className="jobCards" onClick={handleClick}>
    <h3>{job_title}</h3>
    <p className="ellipsis">{Role}</p>
    <p>Experience : {experience}</p>
    {walk_in && <p>Date : {walk_in}</p>}
    <p>Locations : {location.map(item=><small key={item}>{item}, </small>)}</p>
</div>
)
}

export default JobCard