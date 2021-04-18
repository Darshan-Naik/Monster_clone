import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import "../../Styles/RegisterAdd.css"
function RegisterAdd() {
  const isAuth = useSelector(store=>store.auth.isAuth)
  
    return isAuth? null : (
        <div className="flexBox registerAdd">
        <div className="flexBox registerAddImg">
          <img src="https://lh3.googleusercontent.com/proxy/iTu0RcJeQy4iiayqJcKwL2KyWsSVTKgTO7q0qAbo7oB8b8shxbQAUnpKkkgdAi0sdv_DfrP5M9MgMDms-DdP6TBAXU-dC-OH2F-mHNNTfwpMPXkr_OI_Kf4anMx4" alt="user"/>
          <p> Not Registered on monster yet?</p>
          </div>
       
        <Link to="/login">REGISTER NOW</Link>
      </div>
    )
}

export default RegisterAdd
