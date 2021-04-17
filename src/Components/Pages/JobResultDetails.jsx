import React,{useEffect} from 'react'
import "./../../Styles/JobCardDetails.css"
import  axios  from 'axios';
import { useParams } from 'react-router';
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



    const config=()=>{
   axios.get("https://ashish-first-server.herokuapp.com/job/"+id)
.then((res)=>setData(res.data))
 .catch((err)=>(err))   
}

console.log(data)
 useEffect(() => {
   
    config()
 }, [])   

  
    return (
   <div>
      <div id="jobCardDetailsBody">
         <div id="JobCard_1"> 
         <div id="JobCard_1_1">
             <h4>{data.job_title}</h4>
             <button>APPLY</button>
             </div>
          <div id="JobCard_1_2">
              <p>{data.company_name}</p>
              <div id="JobCard_1_2_1" >
              <div>
                  <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-location-512.png" alt=""/>
                <p style={{marginTop:"-24px",marginLeft:"20px"}}>{data.location.map((item)=><span>{item}, </span>)}</p> 
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
         <div id="JobCard_3">
             <p>About Company</p>
             <div>{data.about}</div>
          <div id="JobCard_3_1">
              <p>Job Details</p>
              <div><strong>Role :</strong>{data.Role}</div>
            
              <div><strong>Company Url : </strong>{data.company_url}</div>
              { data.skills && <div className="skill"><strong>Skills:</strong> {data.skills.map((item)=><span><div className="JobCard_3_1_skill">{item}</div></span>)}</div>}
              <div><strong>Contact Hr : </strong>{data.contact_hr}</div>
              

            
          </div>
         </div>
       </div>

     
    </div>
    )
}

export default JobResultDetails