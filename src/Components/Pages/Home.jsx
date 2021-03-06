import React from 'react'
import { CareerTip } from './CareerTip'
import Courses from './Courses'
import { ExperTalks } from './ExpertTalks'
import HomeCarousel from './HomeImageCarousel'
import JobCarousel from './JobCarousel'
import MainSearchBox from './MainSearchBox'
import { MonsterReport } from './MonsterReport'
import Resumeservices from './Resumeservices'
function Home() {
return (
<div className="HomePageBody">
    <MainSearchBox />
    <HomeCarousel />
    <JobCarousel />
    <Resumeservices />
    <Courses />
    <MonsterReport />
    <ExperTalks />
    <CareerTip />
  
    

</div>
)
}

export default Home