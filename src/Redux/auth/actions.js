import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./actionTypes"
import axios from "axios"

//Login actions--------------->

const loginRequest=()=>{
    return {
        type: LOGIN_REQUEST
    }
}
const loginFailure=()=>{
    return {
        type: LOGIN_FAILURE
    }
}
const loginSuccess=(payload)=>{
    return {
        type: LOGIN_SUCCESS,
        payload
    }
}

//LogOut actions--------------->
const logoutSuccess=()=>{
    return {
        type: LOGOUT_SUCCESS
    }
}

//Register / Sign-up actions----->

const registerRequest=()=>{
    return {
        type: REGISTER_REQUEST
    }
}
const registerFailure=()=>{
    return {
        type: REGISTER_FAILURE
    }
}
const registerSuccess=(payload)=>{
    return {
        type: REGISTER_SUCCESS,
        payload
    }
}


// Login network request -----> 

const login=(payload)=>(dispatch)=>{
    dispatch(loginRequest())
    return axios.get("URL")
    .then (res=>{
        dispatch(loginSuccess(res.data))
    })
    .catch(()=>{
        dispatch(loginFailure())
    })
}

// Register network request -----> 

const register=(payload)=>(dispatch)=>{
    dispatch(registerRequest())
    return axios.post("URL")
    .then (res=>{
        dispatch(registerSuccess(res.data))
    })
    .catch(()=>{
        dispatch(registerFailure())
    })
}


export {register,login,registerFailure,registerSuccess,registerRequest,loginFailure,loginRequest,loginSuccess}