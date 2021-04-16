import React from 'react'
import FilterCard from './FilterCard'

function ResultFilters({jobs,filters,handleFilter}) {
const [func,setFunc] = React.useState([])
const [role,setRole] = React.useState([])
const [experience,setExperience] = React.useState([])
const [city,setCity] = React.useState([])
const [skills,setSkills] = React.useState([])

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
        </div>
    )
}

export default ResultFilters
