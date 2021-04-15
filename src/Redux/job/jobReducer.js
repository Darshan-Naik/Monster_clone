
import { GET_JOB_FAILURE, GET_JOB_REQUEST, GET_JOB_SUCCESS } from "./actionTypes"
import store from './../store';


const init ={
    isLoading : false,
    isError : false,
    jobs :[]
}

const jobReducer =(state=init,{type,payload})=>{

    switch(type){
        case GET_JOB_REQUEST : {
            return{
                ...state,
                isLoading :true
            }
        }
        case GET_JOB_FAILURE : {
            return{
                ...state,
                isLoading :false,
                isError : true
            }
        }
        case GET_JOB_SUCCESS : {
            return{
                ...state,
                isLoading :false,
                jobs : payload
            }
        }
        
        default : {
            return state
        }
    }

}

export {jobReducer}