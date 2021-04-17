import React from 'react'
import "../../Styles/NavBar.css"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logoutSuccess } from '../../Redux/auth/actions'

function NavBar() {


const isAuth = useSelector(store=>store.auth.isAuth)
const userEmail = useSelector(store=>store.auth.userData.email)
const userName = useSelector(store=>store.auth.userData.displayName)
const profilePic = useSelector(store=>store.auth.userData.photoURL)
console.log(profilePic)
const [state,setState] = React.useState(true)
const dispatch = useDispatch()
const handleLogout=()=>{
    dispatch(logoutSuccess())
}
    
    return (
        <div className="navBar">        
            <div className="logo"> 
               <Link to="/"><img src="https://media.monsterindia.com/trex/public/default/images/monster-logo.svg" alt="logo"/></Link>              
            </div>
            <div>
                <Link to="/job-search">JOB SEARCH</Link>
               <Link to="/result/work from home">WORK FROM HOME</Link>
               <Link to="/career-tips">CAREER TIPS</Link>
               <Link to="/resume-services">RESUME SERVICES</Link>
               <Link>MORE</Link>
            </div>
            <div className="navBarCards">
                <div className="covidCard">
                    <strong>Job affected by COVID-19</strong>
                </div>
             {isAuth? 
                <div className="userProfile" onMouseEnter={()=>setState(false)} onMouseLeave={()=>setState(true)}>
                    <img src={profilePic || "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png"} alt="Profile"/>
                    <div>
                      {state? <> <p>{userName || "User"}</p>
                        <p>{userEmail}</p> </> :
                        <button onClick={handleLogout}>Log Out</button>
             }
                    </div>

                </div>


             : (  <div >
                    <Link to="/login" className="loginBtn" ><img width="20px" src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png" alt="user"/>  JOBSEEKER LOGIN</Link>
                    <Link to="/login" className="loginBtnEmp" >Login as Employer instead</Link>
                </div>) }
            </div>
        </div>
    )
}

export default NavBar
