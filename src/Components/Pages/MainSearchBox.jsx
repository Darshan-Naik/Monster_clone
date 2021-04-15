import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import "../../Styles/MainSearchBox.css"
function MainSearchBox() {
const [query,setQuery] = React.useState("")
const history = useHistory()
const handleSearch = ()=>{
        if(query){
            history.push("/result/"+query)
        }
}

    return (
        <div className="MainSearchBox">
            <h1>300,000+ Jobs. <span>Find Better. Faster</span> </h1>
            <div className="flexBox">
            
                    <div className="SearchBar">
                        <div className="SearchBarButtons">
                            <button>All Jobs</button>
                            <button>Work From Home</button>
                            <button className="alertButton">Covid-19 Resources</button>
                            <button>Contract Jobs</button>
                            <button>Fresher Jobs</button>
                        </div>
                        <div className="SearchBarInputs">
                            <img width="20px" src="https://images.vexels.com/media/users/3/132068/isolated/preview/f9bb81e576c1a361c61a8c08945b2c48-search-icon-by-vexels.png" alt="search"/>
                            <input type="text" placeholder= "Search by skills company & job title" value={query} onChange={(e)=>setQuery(e.target.value)} /> 
                            <img width="20px" src="https://static.thenounproject.com/png/755355-200.png" alt="search"/>                  
                            <button onClick={handleSearch}>Search</button>
                        </div>
                        <div className="advanceSearchButton">              
                            <Link>Advance Search</Link>
                        </div>
                        <div  className="TrendingSearch">
                            <strong>Trending Searches : </strong>
                            <small>Jobs in Delhi,</small> <small> Jobs in Mumbai,</small> <small> Jobs in Hyderabad,</small> <small> Jobs in Bangalore,</small> <small> Jobs in Chennai</small>
                        </div>
                    </div>
                    <div className="flexBox registerBox">
                        <div>
                            <h4>NEW TO MONSTER?</h4>
                            <Link>REGISTER WITH US</Link>
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
