import React from 'react'
import JobCarousel from './JobCarousel'
import MainSearchBox from './MainSearchBox'

function Home() {
    return (
        <div className="HomePageBody">
            <MainSearchBox />
            <JobCarousel />
        </div>
    )
}

export default Home
