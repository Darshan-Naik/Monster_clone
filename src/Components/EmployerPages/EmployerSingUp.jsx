import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router'
import { employerRegister } from '../../Redux/auth/actions'
import "../../Styles/Employer/EmployerSingUp.css"
const init={
    name : "",
    email : "",
    password : "",
    mobile : "",
    companyName : "",
    aboutCompany : "",
    industry : "",
    func : ""
}
function EmployerSingUp() {
const [user,setUser] = React.useState(init)
const {name,password,email,mobile,companyName,aboutCompany,industry,func} = user
const [state,setState] = React.useState(true)
const isAdmin = useSelector(store=>store.auth.isAdmin)
const dispatch = useDispatch()
const history = useHistory()
const handleChange =(e)=>{
    const {name,value} = e.target
    setUser({...user,[name]: value})
}

const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(employerRegister(user))
    .then(()=>{
        history.push("/employer")
    })
    .catch(()=>{
        alert("Something went wrong")
    })
}
    return isAdmin? <Redirect to="/employer" /> : (
        <div>
            <div className="EmployerSingUpBox">
               <div><h2>Create Recruiter Profile</h2></div> 
               <form onSubmit={handleSubmit} >
                <input type="text" name="name" placeholder="Name" value={name} onChange={handleChange} required={true}/>
                <input type="email" name="email" placeholder="Email" value={email} onChange={handleChange} required={true}/>
                <input type="password" name="password" placeholder="Password" value={password} onChange={handleChange} required={true}/>
                <input type="number" name="mobile" placeholder="Mobile" value={mobile} onChange={handleChange}/>
                <p>Professional Details</p>
                <input type="text" name="companyName" placeholder="Company Name" value={companyName} onChange={handleChange} required={true}/>
                
                <input type="text" name="industry" placeholder="Industry" value={industry} onChange={handleChange} required={true}/>
                <input type="text" name="func" placeholder="Function" value={func} onChange={handleChange} required={true}/>
                <textarea  type="text" name="aboutCompany" placeholder="About Company" rows="4" cols="96" value={aboutCompany} onChange={handleChange} required={true}/>
               <div>
               <input type="checkbox" checked={state} onChange={()=>setState(!state)}/> <label>{"I agree to use the aforesaid details to create my Recruiter Profile & display it on the Monster site and also agree to be bound by the Terms of Use & Privacy of Monster"}</label>
               
                </div> 
                <button type="submit" disabled={!state}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default EmployerSingUp
