import React,{useEffect} from 'react'
import "./../../Styles/JobResultDetails.css"
import  axios  from 'axios';
import { useHistory, useParams } from 'react-router';
import { useSelector } from 'react-redux';
import ResultCard from './ResultCard';
import Loading from './Loading';  
import RegisterAdd from './RegisterAdd';
const init={
    id:"",
    job_title:"",
    experience:"",
    min_salary: "",
    max_salary: "",
    job_type: "",
    company_name: "",
    company_url: "",
    location:[],
    description:[],
    about:"",
    contact_hr:""
}
function JobResultDetails() {
   const [data,setData]=React.useState(init)
   const {id}=useParams()
  const jobs = useSelector(store=>store.job.jobs)
  const [isLoading,setIsLoading] = React.useState(true)
  const isAuth = useSelector(store=>store.auth.isAuth)
  const userEmail = useSelector(store=>store.auth.userData.email)
const userName = useSelector(store=>store.auth.userData.displayName)
const config=()=>{
  setIsLoading(true)
axios.get("https://ashish-first-server.herokuapp.com/job/"+id)
.then((res)=>{
  setIsLoading(false)
  setData(res.data)
})
 .catch((err)=>(err))   
}
 useEffect(() => {
    config()
 }, [id])   
const history = useHistory()
 const handleApply=(e)=>{
   if(!isAuth){
      history.push("/login")
   } else{
      const application ={
        employerId : data.employerId,
        job_title : data.job_title,
        applyed_date : new Date,
        job_id : data.id,
        applicantName: userName,
        applicantEmail : userEmail,
        status : false
      }
    axios.post("https://ashish-first-server.herokuapp.com/applications",application)
    .then(()=>{
      e.target.innerText = "Applied"
      e.target.style.background = "green"
      e.target.disabled = true;
      setTimeout(()=>{
        history.push("/")
      },1000)
    })
    .catch(()=>{
      alert("Something wmt wrong")
    })
   }
 }
    return isLoading?<div className="loadingBox"><Loading /></div> : (
   <div>
      <div id="jobCardDetailsBody">
         <div id="JobCard_1"> 
         <div id="JobCard_1_1">
             <h4>{data.job_title}</h4>
             <button onClick={handleApply}>{isAuth?"APPLY" : "LOGIN TO APPLY"}</button>
             </div>
          <div id="JobCard_1_2">
              <p>{data.company_name}</p>
              <div id="JobCard_1_2_1" >
              <div>
                  <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-location-512.png" alt=""/>
                <p style={{marginTop:"-24px",marginLeft:"20px"}}>{data?.location.map((item)=><span>{item}, </span>)}</p> 
              </div>
              <div>
                <img src="https://pics.freeicons.io/uploads/icons/png/16650192161582800237-512.png" alt=""/>
                {data.experience}
              </div>
              <div>
                <img src="https://www.clipartkey.com/mpngs/m/135-1353077_income-transparent-background-high-income-icon-png.png" alt=""/>
                {data.min_salary}-{data.max_salary} 
              </div>
              </div>
          </div>
         </div>
         <div id="JobCard_2"> 
            <div>
             <p>Job Description</p>
             </div>  
             <div id="JobCard_2_1">
                 <ul>
                {data.description.map((item)=><li>{item}</li>)}
                 </ul>
             </div>
         </div>
       <RegisterAdd />
         <div id="JobCard_3_1">
              <p>Job Details</p>
              <div><strong>Role : </strong>{data.Role}</div>
              <div><strong>Company Url : </strong>{data.company_url}</div>
              { data.skills && <div className="skill"><strong>Skills:</strong> {data.skills.map((item)=><span><div className="JobCard_3_1_skill">{item}</div></span>)}</div>}
              <div><strong>Contact Hr : </strong>{data.contact_hr}</div>
          </div>
         <div id="JobCard_3">
             <p>About {data.company_name}</p>
             <div>{data.about}</div>
         </div>
       </div>
      {jobs.filter(item=>JSON.stringify(item).includes(data.job_title) &&item.id !== id).length? <div className="similarJobs">
          <h2>Similar Jobs</h2>
          {jobs.filter(item=>JSON.stringify(item).includes(data.job_title) &&item.id !== id)
          .map(item=><ResultCard {...item}/>)}
        </div> : null}
    </div>
    )
}
export default JobResultDetails