import React from 'react';
import '../../Styles/JobSearch.css'

import { Roledata,Companydata,Jobtypedata,Tips,Maximumsalary,Minimumsalary } from '../../Utils/localData';

import { useHistory } from 'react-router';
const init={
    job_title:"",
    Role:"",
    experience:"",
    location:"",
    company:"",
    jobtype:"",
    max_salary:"",
    min_salary:""
}
function Jobsearch(){
const [search, setSearch] = React.useState(init)

const{job_title,Role,experience,location,company,jobtype,max_salary,min_salary}=search
const handleChange=(e)=>{
    const{name,value}=e.target
    setSearch({...search,[name]:value})
}
const history=useHistory()
const handleSubmit=(e)=>{
    e.preventDefault()
    
   const params={ }
   for(let key in search)
   {
       if(search[key])
       {
           params[key]=search[key]
       }
   }
    console.log(params)
    let param= new URLSearchParams()
    for(let key in params)
    {
        param.append(key,params[key])
    }
    history.push(`/result?${param.toString()}`)
    console.log(param.toString())
}



    return(
        <div>
          <div className="searchJob_fullBody">
              <div className="searchJob_adv">  
              <h2>Advance Job Search</h2>
              </div>
              <div className="flexBox searchBoxAdvance">
                    <form onSubmit={handleSubmit}>
                    <div className="searchJob_inputBody">
                        <div className='input'>
                            <input  type="text" value={job_title} name="job_title" placeholder=
                            'Search for keyword' onChange={handleChange}/>
                        </div>
                        <div className="multipleInputs" >
                            <input className='inputi' placeholder='Experience' type="text" value={experience} name="experience" onChange={handleChange}/>
                            <input className='inputi' placeholder='Location' type="text" value={location} name="location" onChange={handleChange}/>
                        </div>
                        <div className='input'>
                            <input list="company" name="company" placeholder='Company Name' value={company} onChange={handleChange} />  
                        <datalist id="company">
                        {Companydata.map((item)=><option value={item} />) }
                        </datalist>
                        </div>
                        <div className='input'>
                            <input list="jobtype" name="jobtype" placeholder='Type' value={jobtype} onChange={handleChange} />  
                        <datalist id="jobtype">
                        {Jobtypedata.map((item)=><option value={item} />) }
                        </datalist>
                        </div>
                        <div className='input'>
                            <input list="Role" name="Role" placeholder='Job Role' value={Role} onChange={handleChange} />  
                        <datalist id="Role">
                        {Roledata.map((item)=><option value={item} />) }
                        </datalist>
                        </div>
                        <div className="multipleInputs" >
                            <input list="min_salary" className='inputi' name="min_salary" placeholder='Minimum Salary' value={min_salary} onChange={handleChange} />  
                        <datalist id="min_salary">
                        {Minimumsalary.map((item)=><option value={item} />) }
                        </datalist>
                        <input list="max_salary" className='inputi' name="max_salary" placeholder='Maximum Salary' value={max_salary} onChange={handleChange} />  
                        <datalist id="max_salary">
                        {Maximumsalary.map((item)=><option value={item} />) }
                        </datalist>
                        </div>
                        <input className="search_button" type="submit" value="SEARCH" onClick={handleSubmit}/>
                        </div>
                        </form>
                    <div className="searchjob_searchTipBody">
                        <p>search Tips</p>
                    { Tips.map((item)=> <div className="searchTip_body">
                        {/* <div className="tipImage_body">
                        <img src="" alt="logo"/>
                        </div> */}
                        <div className="tipbox">
                    <div className="tips">
                        <p>{item.title}</p>
                    </div>
                    <div className="tipData">
                    <p>{item.details}</p>
                    <hr/>
                    </div>
                    </div> 
                    </div>)}
                    </div>
              </div>
          </div>
        </div>
    )
}export{Jobsearch}
