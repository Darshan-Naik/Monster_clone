import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { logoutSuccess } from '../../Redux/auth/actions'
import "../../Styles/Employer/EmployerNavBar.css"

function EmployerNavbar() {
    const idAdmin = useSelector(store=>store.auth.isAdmin)
    const {name} = useSelector(store=>store.auth.admin)
    const dispatch = useDispatch()
    const history =useHistory()
    const handleLogout =()=>{
        dispatch(logoutSuccess())
        history.push("/employer/login")
    }
    return (
        <div className="employerNavBar">
            <Link to="/employer"><img src="https://media.monsterindia.com/recruiter_2015/india/images/logo.png" alt="logo"/></Link>
            <div>
                <Link to="/employer">Dash Board</Link>
                <Link to="/employer/post-job">POST JOB</Link>

            </div>
            <div>
              {idAdmin? 
             <> <strong>{name}</strong> 
             <button onClick={handleLogout}>Logout</button>
             </>
              :
               ( <> <Link to="/employer/login">Login</Link>
                <Link to="/login">Job seeker Login</Link> </>)}
            </div>
        </div>
    )
}

export default EmployerNavbar
