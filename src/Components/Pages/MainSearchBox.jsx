import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import "../../Styles/MainSearchBox.css"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

function MainSearchBox() {
const [query,setQuery] = React.useState("")
const history = useHistory()
const { transcript, resetTranscript } = useSpeechRecognition()
const handleSearch = ()=>{
        if(query){
            history.push("/result/"+query)
        }
}
React.useEffect(()=>{
    setQuery(transcript)
},[transcript])
const handleVoice=()=>{
    resetTranscript()
    SpeechRecognition.startListening()    
}

    return (
        <div className="MainSearchBox">
            <h1>300,000+ Jobs. <span>Find Better. Faster</span> </h1>
            <div className="flexBox">
            
                    <div className="SearchBar">
                        <div className="SearchBarButtons">
                            <Link to="/result/jobs">All Jobs</Link>
                            <Link to="/result/work from home">Work From Home</Link>
                            <Link to="/result/Covid" className="alertButton">Covid-19 Resources</Link>
                            <Link to="/result/Contract">Contract Jobs</Link>
                            <Link to="/result/Fresher">Fresher Jobs</Link>
                        </div>
                        <div className="SearchBarInputs">
                            <img width="20px" src="https://images.vexels.com/media/users/3/132068/isolated/preview/f9bb81e576c1a361c61a8c08945b2c48-search-icon-by-vexels.png" alt="search"/>
                            <input type="text" placeholder= "Search by skills company & job title" value={query} onChange={(e)=>setQuery(e.target.value)} /> 
                            <img width="20px" src="https://static.thenounproject.com/png/755355-200.png" alt="search" onClick={handleVoice}/>                  
                            <button onClick={handleSearch}>Search</button>
                        </div>
                        <div className="advanceSearchButton">              
                            <Link to="/job-search">Advance Search</Link>
                        </div>
                        <div  className="TrendingSearch">
                            <strong>Trending Searches : </strong>
                            <Link to="/result/Jobs in Delhi">Jobs in Delhi,</Link> <Link to="/result/Jobs in Mumbai"> Jobs in Mumbai,</Link> <Link to="/result/Jobs in Hyderabad"> Jobs in Hyderabad,</Link> <Link to="/result/Jobs in Bangalore"> Jobs in Bangalore,</Link> <Link to="/result/Jobs in Chennai"> Jobs in Chennai</Link>
                        </div>
                    </div>
                    <div className="flexBox registerBox">
                        <div>
                            <h4>NEW TO MONSTER?</h4>
                            <Link to="/seeker/registration">REGISTER WITH US</Link>
                            <p>or</p>
                            <div className="resumeBox">
                                <h4>UPLOAD RESUME</h4>
                                <p>We will create your profile</p>
                            </div>
                        </div>
                        <div>
                            <h4>FREE JOB ALERT</h4>
                            <h5>Get an email on jobs matching your criteria</h5>
                            <p>No registration required</p>
                            <div className="jobAlert">
                                <h4>CREATE A JOB ALERT</h4>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default MainSearchBox
