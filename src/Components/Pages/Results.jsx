import React from 'react'
import { useParams } from 'react-router'
import ResultCard from './ResultCard'
import axios from "axios"
import "../../Styles/Results.css"
import ResultFilters from './ResultFilters'
import NoResultFound from './NoResultFound'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Loading from './Loading'
import JobSearchBySkills from './JobSearchBySkills'

function Results() {
    const param = new URLSearchParams(window.location.search)
    const {id} = useParams()
        const [jobs,setJobs] = React.useState([])
        const [filters,setFilters] = React.useState(getFilters())
        const [filteredJobs,setFilteredJobs] = React.useState([])
        const [isLoading,setIsLoading] = React.useState(true)
        const isAuth = useSelector(store=>store.auth.isAuth)

    function getFilters(){
        let paramValue = []
        for(var value of param.values()){
            paramValue.push(value.toLowerCase())
            }
            if(paramValue.length){
                return paramValue
            }
            const filterValue = id.split(" ").pop().toLowerCase() 
            return [filterValue];
        }

        const getJobs =()=>{
            axios.get("https://ashish-first-server.herokuapp.com/job")
                    .then(res=>{
                    setJobs(res.data)
                   setIsLoading(false)
                    })
                    .catch(()=>{
                        
                    })
        }
        React.useEffect(()=>{
            getJobs()
                   
        },[])

        const handleFilter=(e)=>{ 
            const{checked,name} = e.target
            if(checked){
                setFilters([...filters,name])
            } else{
                setFilters(filters=>filters.filter(item=>item !==name))
            }
           
        }
        const removeFilter=(name)=>{ 
            
                setFilters(filters=>filters.filter(item=>item !==name))
            
           
        }
        React.useEffect(()=>{
            const newJobs = jobs.filter(el=>{
                let flag = true;
                for(let i=0;i<filters.length;i++){
                    let find = JSON.stringify(el).toLowerCase().includes(filters[i].toLowerCase());
                    if(!find){
                        flag = false;
                        break;
                    }
                }
                return flag;
            })
            setFilteredJobs(newJobs)
        },[jobs,filters])


            if(!filteredJobs.length && !isLoading){
                return <NoResultFound />
            }
            return (
                <div className="ResultBody">
                <div className="resultFilterBody">
                  <div className="searchResultCount">
                      <p>Search Results - {filteredJobs.length} </p>
                    </div> 
                <ResultFilters jobs={filteredJobs} filters={filters} handleFilter={handleFilter}/>
                </div>
                
                <div className="resultCardContainer">
               {filters.length?( <div className="appliedFiltersList">
                        <p>Applied Filters : {filters.map(item=><span onClick={()=>removeFilter(item)}>{item}   -</span>)}</p>
                </div>): null}
                    
                    { isLoading?<div className="loadingBox"> <Loading/> </div>: filteredJobs.map(job=><ResultCard key={job.id} {...job} />)
                    }
                </div>
                <div className="resultAddBox">
                {!isAuth &&  (  <div className="registerAddBox">
                            <h4>NEW TO MONSTER?</h4>
                            <Link to="/seeker/registration">REGISTER WITH US</Link>
                            <p>or</p>
                            <div className="resumeBox">
                                <h4>UPLOAD RESUME</h4>
                                <p>We will create your profile</p>
                            </div>
                        </div>) }
                    <div className="careerAddBox" >
                        <img src="https://www.monsterindia.com/srp/images/career-booster-icon.png" alt="add"/>
                        <h2>CAREER BOOSTER</h2>
                        <p>GIVE YOUR CAREER A BOOST WITH MONSTER'S RESUME SERVICES.</p>
                        <Link>Know more</Link>
                    </div>
                    <JobSearchBySkills />
                </div>
                
                </div>
            )
        }

export default Results
