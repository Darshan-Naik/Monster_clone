import React from 'react'

function EmployerJobCard({job_title,id,description}) {
    return (
        <div className="employerJobCard">
            <small>Job ID : {id} </small>
            <h3>
               {job_title}

            </h3>
            <p>{description}</p>
        </div>
    )
}

export default EmployerJobCard
