import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function ResultCard({job_title,company_url,job_type,company_name,location,experience,min_salary,max_salary,description,skills,id}) {

    const isAuth = useSelector(store=>store.auth.isAuth)
    return (
        <div className="resultCard">
            <Link to={"/result/job/"+id}><div>          
                <h4>{job_title} / {job_type}</h4>
                <a  href={company_url}>{company_name}</a>
                <div className="flexBox space">
                    <p>
                        <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-location-512.png" alt="Location"/>
                        {location?.map(item=><span key={item}>{item}, </span>)}
                    </p>
                    <p>
                        <img src="https://pics.freeicons.io/uploads/icons/png/16650192161582800237-512.png" alt="Experience"/> 
                        {experience}
                    </p>
                    <p>
                        <img src="https://www.clipartkey.com/mpngs/m/135-1353077_income-transparent-background-high-income-icon-png.png" alt="Salary"/> 
                        {min_salary} - {max_salary} INR Per Annum
                    </p>
                    
                </div>
                    <p>{description && description[0]}</p>
                    <p> <strong>Skills</strong> : {skills && skills.map(item=><span key={item +Math.random()}>{item}, </span>)}</p>
                    </div>  </Link>
            <div className="flexBox applyNow">
                     <Link to={isAuth?`/result/job/${id}`: "/login"}>{isAuth?"APPLY NOW" : "LOGIN TO APPLY"}</Link>
            </div>
        </div>
    )
}

export default ResultCard
