import React from 'react'
import { useSelector } from 'react-redux'
import "../../Styles/Employer/EmployerHome.css"
import axios from "axios"
import EmployerJobCard from './EmployerJobCard'
import { Redirect } from 'react-router'
import Loading from '../Pages/Loading'
import EmployerApplicationCard from './EmployerApplicationCard'
import WelCome from './WelCome'

function EmployerHome() {
    const admin = useSelector(store=>store.auth.admin)
    const isAdmin = useSelector(store=>store.auth.isAdmin)
    const [jobs,setJobs] = React.useState([])
    const [applications,setApplications] = React.useState([])
    const [isLoading,setIsLoading] = React.useState(true)
    const getData = ()=>{
        setIsLoading(true)
        axios.get("https://ashish-first-server.herokuapp.com/job?employerId="+admin.id)
        .then(res=>{
            setJobs(res.data)
            setIsLoading(false)
        })      
        .catch(()=>{
            alert("Something went wrong")
        })
        axios.get("https://ashish-first-server.herokuapp.com/applications?employerId="+admin.id)
        .then(res=>{
            setApplications(res.data)
            setIsLoading(false)
        })
        .catch(()=>{
            alert("Something went wrong")
        })
    }
    const handleDelete=(id)=>{
        // axios.delete("https://ashish-first-server.herokuapp.com/job/"+id)
        // .then(()=>{
        //     getData();
        // })
    }
    const handleApplicationDelete=(id)=>{
        axios.delete("https://ashish-first-server.herokuapp.com/applications/"+id)
        .then(()=>{
            getData();
        })
    }

    const handleToggle=(id,status)=>{
        axios.patch("https://ashish-first-server.herokuapp.com/applications/"+id,{status:!status})
        .then(()=>{
            getData();
        })
     }
    React.useEffect(getData,[])
    console.log(jobs,applications)
    return isAdmin? (
        <div>
            <div className="employerHomeBanner">
                <img src="https://play-lh.googleusercontent.com/1kJygXRdW7PuBmMiWOGHy7c9QbeJ56eNcaNYdQviXi5xtI9ZF3gFIjLmhQTZG2CwpqX2" alt="logo"/>
                <div>
                    <h2>{admin.name}</h2>
                    <p> <strong>Company - </strong> {admin.companyName} | {admin.industry}</p>
                </div>
            </div>
        {isLoading?<Loading width="200" height="200"/> :  jobs.length?  <div className="employerHomeMainBox">
                <div className="employerJobsBox">
                    <div className="employerHomeMainBoxHead">
                         <h3>Current active posts</h3>
                    </div>
                    <div className="dataBox">
                {jobs.length? (
                    jobs.map(job=><EmployerJobCard key={"employerJob" + job.id } {...job} handleDelete={handleDelete}/>)
                ) : <h4>Empty</h4>}
                    </div>
                    
                </div>
                <div className="employerApplicationBox">
                    <div  className="employerHomeMainBoxHead">
                        <h3>Applications</h3>
                    </div>
                    <div className="dataBox">
                    {applications.length? (
                    applications.map(application=><EmployerApplicationCard key={"employerApplication" + application.id } {...application} handleToggle={handleToggle} handleApplicationDelete={handleApplicationDelete}/>)
                ) : <h4>Empty</h4>}

                    </div>
                </div>
            </div> : <WelCome />}
        </div>
    ) : <Redirect to="/employer/login" />
}

export default EmployerHome
