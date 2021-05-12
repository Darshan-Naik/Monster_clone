import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import FilterCard from './FilterCard'

function ResultFilters({jobs,filters,handleFilter}) {
const [func,setFunc] = React.useState([]) //function filter
const [role,setRole] = React.useState([]) //role filter
const [experience,setExperience] = React.useState([]) //experience filter
const [city,setCity] = React.useState([]) //city filter
const [skills,setSkills] = React.useState([]) //skills filter
const isAuth = useSelector(store=>store.auth.isAuth)

React.useEffect(()=>{
    let data =[]
     jobs.forEach(job=>{
         if(!data.includes(job.job_type.toLowerCase())){
            job.job_type &&  data.push(job.job_type.toLowerCase())
         }       
    })
    setFunc(data)
    data = []
    jobs.forEach(job=>{
        job.location.forEach(location=>{
            if(!data.includes(location.toLowerCase())){
                location && data.push(location.toLowerCase())
             }
        })        
   })
   setCity(data)
   data =[]
     jobs.forEach(job=>{
         if(!data.includes(job.Role.toLowerCase())){
            job.Role &&   data.push(job.Role.toLowerCase())
         }       
    })
    setRole(data)
    data =[]
     jobs.forEach(job=>{
         if(!data.includes(job.experience.toLowerCase())){
            job.experience &&  data.push(job.experience.toLowerCase())
         }       
    })
    setExperience(data)
    data = []
    jobs.forEach(job=>{
        job.skills.forEach(skills=>{
            if(!data.includes(skills.toLowerCase())){
                skills &&  data.push(skills.toLowerCase())
             }
        })        
   })
   setSkills(data)
},[jobs])

    return (
        <div className="filter">
            <p className="filterHead" >Filter By</p>
            <FilterCard title="Function" data={func} filters={filters} handleFilter={handleFilter}/>
            <FilterCard title="City" data={city} filters={filters} handleFilter={handleFilter}/>
            <FilterCard title="Role" data={role} filters={filters} handleFilter={handleFilter}/>
            <FilterCard title="Experience" data={experience} filters={filters} handleFilter={handleFilter}/>
            <FilterCard title="Skills" data={skills} filters={filters} handleFilter={handleFilter}/>
            {!isAuth &&  (  <div className="AddBox">
                            <h4>NEW TO MONSTER?</h4>
                            <Link to="/seeker/registration">REGISTER WITH US</Link>
                            <p>or</p>
                            <div className="resumeBox">
                                <h4>UPLOAD RESUME</h4>
                                <p>We will create your profile</p>
                            </div>
                        </div>) }
        </div>
    )
}

export default ResultFilters
