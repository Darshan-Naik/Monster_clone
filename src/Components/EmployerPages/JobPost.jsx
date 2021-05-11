import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router'
import "../../Styles/Employer/JobPost.css"
const init = {
    job_title : "",
    job_type : "",
    experience : "",
    min_salary : "",
    max_salary : "",
    skills : "",
    Role : "",
    location  : "",
    description : "",
    walk_in : "",
    work_from_home : false

}
function JobPost() {

    const [job,setJob] = React.useState(init)
    const [isLoading,setIsLoading] = React.useState(false)
    const history = useHistory()
    const employerId = useSelector(store=>store.auth.admin.id)
    const isAdmin = useSelector(store=>store.auth.isAdmin)
    const {job_title,job_type,experience,min_salary,max_salary,skills,Role,location,description,walk_in,work_from_home} = job;
    const handleChange = (e)=>{
        const {name,value,type,checked} = e.target
      let val=  type !== "checkbox"? value : checked;
      setJob({...job,[name] : val})
    }
    const processJob = (job)=>{
            const newJob = {...job,employerId}
            newJob.skills = job.skills.split(" ")
            newJob.location = job.location.split(" ")
            newJob.description = job.description.split("\n")
            return newJob
    }
    const handlePost =(e)=>{
        e.preventDefault()
        setIsLoading(true)
        const data = processJob(job)

        axios.post("https://ashish-first-server.herokuapp.com/job",data)
        .then((res)=>{
            
            setIsLoading(false)
            setJob(init)
            history.push("/employer")
        })
        .catch(()=>{
            alert("something went wrong")
        })
    }

    return isAdmin ?(
        <div>
            <div className="jobPostMainBox">
                <h3> Post a new Job</h3>
                <form className="jobPostForm" onSubmit={handlePost}>
                <input type="text" name="job_title" placeholder="Job Title" value={job_title} onChange={handleChange} required/>
                <input type="text" name="job_type" placeholder="Job Type" value={job_type} onChange={handleChange} required/>
                <input type="text" name="experience" placeholder="Experience" value={experience} onChange={handleChange} required/>
                <input type="number" name="min_salary" placeholder="Min Salary" value={min_salary} onChange={handleChange} required/>
                <input type="number" name="max_salary" placeholder="Max Salary" value={max_salary} onChange={handleChange} required/>
                <input type="text" name="skills" placeholder="Skills" value={skills} onChange={handleChange} required/>
                <input type="text" name="Role" placeholder="Role" value={Role} onChange={handleChange} required/>
                <input type="text" name="location" placeholder="Locations" value={location} onChange={handleChange} required/>
               
                <input type="date" name="walk_in" placeholder="walk in Date" value={walk_in} onChange={handleChange}/>
                <textarea type="text" cols="60" rows="4" name="description" placeholder="Description" value={description} onChange={handleChange} required/>

                <div>
                <input type="checkbox" name="work_from_home" checked={work_from_home}  onChange={handleChange} /> <label>Remote working</label>
                </div>
                <button type="submit">{isLoading? "Loading..." : "Post" }</button>
                </form>
            </div>
        </div>
    ) : <Redirect to= "/employer/login" />
}

export default JobPost
