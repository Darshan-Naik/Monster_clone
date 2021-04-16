import React from 'react'
import { CareerTip } from './CareerTip'
import { ExperTalks } from './ExpertTalks'
import JobCarousel from './JobCarousel'
import MainSearchBox from './MainSearchBox'

function Home() {
    return (
        <div className="HomePageBody">
            <MainSearchBox />
            <JobCarousel />
            
           
            {/* <CareerTip/> */}
        </div>
    )
}

export default Home
