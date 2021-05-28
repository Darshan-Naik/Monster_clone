
import React from 'react'

function EmployerJobCard({job_title,id,description,handleDelete}) {

    


    return (
        <div className="employerJobCard">
          <div >
              <small>Job ID : {id} </small>
              <button onClick={()=>handleDelete(id)}><img width="20px" src="https://icons-for-free.com/iconfiles/png/512/delete+remove+trash+trash+bin+trash+can+icon-1320073117929397588.png" alt="Delete"/></button>
            </div>  
            <h3>
               {job_title}

            </h3>
            <p>{description}</p>
        </div>
    )
}

export default EmployerJobCard
