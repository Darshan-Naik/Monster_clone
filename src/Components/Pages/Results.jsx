import React from 'react'
import { useParams } from 'react-router'
import ResultCard from './ResultCard'
import axios from "axios"
import "../../Styles/Results.css"
import ResultFilters from './ResultFilters'
import NoResultFound from './NoResultFound'

function Results() {
    const param = new URLSearchParams(window.location.search)
    const {id} = useParams()
        const [jobs,setJobs] = React.useState([])
        const [filters,setFilters] = React.useState(getFilters())
        const [filteredJobs,setFilteredJobs] = React.useState([])
        const [isLoading,setIsLoading] = React.useState(true)

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
            if(!filteredJobs.length){
                return <NoResultFound />
            }
            return (
                <div className="ResultBody">
                <div>
                  <div className="searchResultCount">
                      <p>Search Results - {filteredJobs.length} </p>
                    </div> 
                <ResultFilters jobs={filteredJobs} filters={filters} handleFilter={handleFilter}/>
                </div>
                
                <div>
               {filters.length?( <div className="appliedFiltersList">
                        <p>Applied Filters : {filters.map(item=><span onClick={()=>removeFilter(item)}>{item}   -</span>)}</p>
                </div>): null}
                    
                    { isLoading? <h1>Loading...</h1>   : filteredJobs.map(job=><ResultCard key={job.id} {...job} />)
                    }
                </div>
                </div>
            )
        }

export default Results
