import React from 'react'
import { useParams } from 'react-router'
import ResultCard from './ResultCard'
import axios from "axios"
import "../../Styles/Results.css"

function Results() {
const [jobs,setJobs] = React.useState([])
const {id} = useParams()
const param = new URLSearchParams(window.location.search)
param.forEach((el,i)=>console.log(el,i))
console.log(id,!param.toString())

const getJobs =()=>{
    axios.get("https://ashish-first-server.herokuapp.com/job")
            .then(res=>{
              setJobs(res.data)
            })
            .catch(()=>{

            })
}
React.useEffect(()=>{
    getJobs()
},[])


    return (
        <div>
           <div>filters</div>
           <div>
               
               {jobs.map(job=><ResultCard key={job.id} {...job} />)}
           </div>
        </div>
    )
}

export default Results
