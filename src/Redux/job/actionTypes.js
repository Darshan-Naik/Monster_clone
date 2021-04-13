import { GET_JOB_FAILURE, GET_JOB_REQUEST, GET_JOB_SUCCESS } from "./actions"
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
   return axios.get("URL")
            .then(res=>{
                dispatch(getJobsSuccess(res.data))
            })
            .catch(()=>{
                dispatch(getJobsFailure)
            })

}

export {getJobs,getJobsFailure,getJobsSuccess,getJobsRequest}