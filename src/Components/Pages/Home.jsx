import React from 'react'
import { CareerTip } from './CareerTip'
import { ExperTalks } from './ExpertTalks'
import JobCardDetails from './JobCardDetails'
import JobCarousel from './JobCarousel'
import MainSearchBox from './MainSearchBox'
import { MonsterReport } from './MonsterReport'

function Home() {
    return (
        <div className="HomePageBody">
            <MainSearchBox />
            <JobCarousel />
           <MonsterReport/>
           <ExperTalks/>
           {/* <JobCardDetails/> */}
            <CareerTip/>
        </div>
    )
}

export default Home
