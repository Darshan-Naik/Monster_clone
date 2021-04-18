import React from 'react'

function EmployerApplicationCard({job_title,id,description,job_id,applicantName,applicantEmail,applyed_date}) {
    return (
        <div className="employerApplicationCard">
            <div>
            <small>Job ID : {job_id} </small>
            <h4>{job_title}</h4>
            </div>
            <div>
            <p> <small>Applicant Name : </small> {applicantName}</p>
            <p> <small> Applicant Email :</small> {applicantEmail}</p>
            <p> <small> Applied On :</small> {applyed_date}</p>
            </div>
            
            
        </div>
    )
}

export default EmployerApplicationCard
