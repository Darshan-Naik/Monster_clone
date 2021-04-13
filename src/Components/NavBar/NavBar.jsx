import React from 'react'
import "../../Styles/NavBar.css"
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div className="navBar">        
            <div className="logo"> 
               <Link to="/"><img src="https://media.monsterindia.com/trex/public/default/images/monster-logo.svg" alt="logo"/></Link>              
            </div>
            <div>
                <Link to="/job-search">JOB SEARCH</Link>
               <Link to="/work-from-home">WORK FROM HOME</Link>
               <Link to="/career-tips">CAREER TIPS</Link>
               <Link to="/resume-services">RESUME SERVICES</Link>
               <Link>MORE</Link>
            </div>
            <div className="navBarCards">
                <div className="covidCard">
                    <strong>job affected by COVID-19</strong>
                </div>
                <div >
                    <Link to="/login" className="loginBtn" ><img width="20px" src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png" alt="user"/>  JOBSEEKER LOGIN</Link>
                    <Link to="/login" className="loginBtnEmp" >Login as Employer instead</Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar
