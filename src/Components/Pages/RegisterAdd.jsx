import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import "../../Styles/RegisterAdd.css"
function RegisterAdd() {
  const isAuth = useSelector(store=>store.auth.isAuth)
  
    return isAuth? null : (
        <div className="flexBox registerAdd">
        <div className="flexBox registerAddImg">
          <img src="https://lh3.googleusercontent.com/proxy/PPcrCXyyB67jcsqPIkj8kFZb0nGK2koqjfyJdtEpSo29dQ-maKFoxCUWWAt9zYZJjrF8TmTZTKrjnkzc5bQpH4EwKNRLwCd9dWEEt3q_LhmRj3txDd_cWafJg8md" alt="user"/>
          <p> Not Registered on monster yet?</p>
          </div>
       
        <Link to="/login">REGISTER NOW</Link>
      </div>
    )
}

export default RegisterAdd
