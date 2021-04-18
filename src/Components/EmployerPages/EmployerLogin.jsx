import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect, useHistory } from 'react-router-dom'
import { employerLogin, employerLoginSuccess, loginFailure, loginRequest } from '../../Redux/auth/actions'
import "../../Styles/Employer/EmployerLogin.css"
import OurServices from './OurServices'

const init = {
    email :"",
    password : ""
}
function EmployerLogin() {

const [user,setUser] = React.useState(init)
const dispatch = useDispatch()
const history = useHistory()
const isAdmin = useSelector(store=>store.auth.isAdmin)

const handleChange =(e)=>{
    const {name,value} = e.target
    setUser({...user,[name]: value})
}


const handleLogin=()=>{
    dispatch(loginRequest())
    axios.get("https://ashish-first-server.herokuapp.com/employers?"+"email="+user.email+"&&" + "password="+user.password)
    .then((res)=> {
        const user = res.data[0]
        if(user){
            dispatch(employerLoginSuccess(user))
            history.push("/employer")
        } else{
            alert("User not found")
        }
    })
    .catch((error) => {
        dispatch(loginFailure(error.message))
    });
}
    return isAdmin? <Redirect to="/employer" /> : (
        <div>
            <div className="EmployerLoginMainBanner">
                <div>              
                    <ul>
                        <li>AI in Recruiting Technology</li>
                        <li>Conversational UI</li>
                        <li>Data Security</li>
                        <li>Power Recruiting</li>
                    </ul>
                    <div>
                        <p>Introducing</p>
                        <h2>Monster Better Together Experience</h2>
                    </div>
                    
                </div>
                <div className="EmployerLoginMainBox">
                    <div className="EmployerLoginSubBox">
                        <h2>Login</h2>
                        <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange}/>
                        <input type="text" name="password" placeholder="Password" value={user.password} onChange={handleChange}/>
                    </div>
                    <div className="EmployerLoginForget">
                        <small>Forgot Password?</small>
                    </div>
                    <button onClick={handleLogin}>Login</button>
                    <div className="EmployerLoginNew">
                    New User <Link to="/employer/sign-up" ><strong>?Sign UP</strong> </Link>
                    </div>
                </div>
            </div>
            <OurServices />
        </div>
    )
}

export default EmployerLogin
