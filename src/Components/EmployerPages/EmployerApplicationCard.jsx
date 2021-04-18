import React from 'react'

function EmployerApplicationCard({job_title,id,description,job_id,applicantName,applicantEmail,applyed_date,status,handleToggle,handleApplicationDelete}) {
    return (
        <div className="employerApplicationCard">
            <div>
            <small>Job ID : {job_id} </small>
            <h4>{job_title}</h4>
            </div>
            <div>
              <div className="flexBoxx">
                   <p > Applicant </p>
                   <div>

                   
                    <input type="checkbox" checked={status} onChange={()=>handleToggle(id,status)} />
                    <button onClick={()=>handleApplicationDelete(id)}><img width="20px" src="https://icons-for-free.com/iconfiles/png/512/delete+remove+trash+trash+bin+trash+can+icon-1320073117929397588.png" alt="Delete"/></button>
                    </div>
                    </div> 
            <p> <small>Name : </small> {applicantName}</p>
            <p> <small>Email :</small> {applicantEmail}</p>
            <p> <small> Applied On :</small> {applyed_date}</p>
            </div>
            
            
        </div>
    )
}

export default EmployerApplicationCard
