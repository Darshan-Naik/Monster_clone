
import { loadData, saveData } from "../../Utils/localStorage"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./actionTypes"



const init =  loadData("userData") ||  {
    isAuth : false,
    isLoading : false,
    isError : false,
    userData : {}
}

const authReducer =(state=init,{type,payload})=>{

    switch(type){
        case LOGIN_REQUEST :{
            return {
                ...state,
                isLoading :true
            }
        }
        case LOGIN_FAILURE :{
            return {
                ...state,
                isLoading :false,
                isError : true
            }
        }
        case LOGIN_SUCCESS :{
            const updateState = {
                ...state,
                isLoading :false,
                isAuth : true,
                userData : payload
            }
           saveData("userData",updateState)
            return updateState
        }

        case REGISTER_REQUEST :{
            return {
                ...state,
                isLoading :true
            }
        }
        case REGISTER_FAILURE :{
            return {
                ...state,
                isLoading :false,
                isError : true
            }
        }
        case REGISTER_SUCCESS :{
            return {
                ...state,
                isLoading :false
            }
        }
        case LOGOUT_SUCCESS : {
            const updateState = {
                ...state,
                isAuth : false,
                userData : {}
            }
            saveData("userData",updateState)
            return updateState
        }

        default : {
            return state
        }
    }

}

export {authReducer}