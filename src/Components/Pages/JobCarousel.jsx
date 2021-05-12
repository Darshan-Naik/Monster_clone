import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getJobs } from '../../Redux/job/actions'
import "../../Styles/JobCarousel.css"
import Carousel from './Carousel'
import JobSearchBySkills from './JobSearchBySkills'
import RegisterAdd from './RegisterAdd'
function JobCarousel() {

const dispatch = useDispatch()
const {jobs,isLoading,isError} = useSelector(store=>store.job)
React.useEffect(()=>{
    dispatch(getJobs())
},[dispatch])
const workFromHomeJobs = jobs.filter(item=>item.work_from_home  && !item.walk_in)
const recentJobs = jobs.filter(item=>item.id<10 && !item.walk_in)
const walkInJobs = jobs.filter(item=>item.walk_in)
    return (
        
        <div className="flexBox">
            <div className="carouselBoxContainer">
            <Carousel jobs={workFromHomeJobs} title={"Work From Home Jobs"} isLoading={isLoading} />
            <Carousel jobs={recentJobs} title={"Recent Jobs"} isLoading={isLoading} />
            <Carousel jobs={walkInJobs} title={"Walk-in Jobs"}  isLoading={isLoading}/>
           <RegisterAdd />
            </div>
            <div className="addBox">
                <img src="https://media.monsterindia.com/trex/public/default/images/beware.jpg" alt="beware"/>
                <img src="https://media.monsterindia.com/trex/public/default/images/app-images-v3.jpg" alt="app add"/>
                <JobSearchBySkills />
            </div>
        </div>
    )
}

export default JobCarousel
