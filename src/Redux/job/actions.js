import { GET_JOB_FAILURE, GET_JOB_REQUEST, GET_JOB_SUCCESS } from "./actionTypes"
import axios from "axios"

//Get jobs dta actions----->

const getJobsRequest=()=>{
    return {
        type:GET_JOB_REQUEST
    }
}
const getJobsFailure=()=>{
    return {
        type:GET_JOB_FAILURE
    }
}
const getJobsSuccess=(payload)=>{
    return {
        type:GET_JOB_SUCCESS,
        payload
    }
}

//Get jobs Network request------->

const getJobs = (payload) => (dispatch)=>{
    dispatch(getJobsRequest())
   return axios.get("https://ashish-first-server.herokuapp.com/job?_sort=id&_order=desc")
            .then(res=>{
                dispatch(getJobsSuccess(res.data))
            })
            .catch(()=>{
                dispatch(getJobsFailure)
            })

}

export {getJobs,getJobsFailure,getJobsSuccess,getJobsRequest}