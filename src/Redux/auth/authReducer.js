
import { loadData, saveData } from "../../Utils/localStorage.js"
import { EMPLOYER_LOGIN_SUCCESS, EMPLOYER_REGISTER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./actionTypes"



const init =  loadData("userData") ||  {
    isAuth : false,
    isLoading : false,
    isError : false,
    userData : {},
    isAdmin : false,
    admin : {}
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
                isError :false,
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
        case EMPLOYER_REGISTER_SUCCESS :{
            const updateState = {
                ...state,
                isLoading :false,
                isError :false,
                isAdmin : true,
                admin : payload
            }
           saveData("userData",updateState)
            return updateState
        }
        case EMPLOYER_LOGIN_SUCCESS :{
            const updateState = {
                ...state,
                isLoading :false,
                isError :false,
                isAdmin : true,
                admin : payload
            }
           saveData("userData",updateState)
            return updateState
        }
        case LOGOUT_SUCCESS : {
            const updateState = {
                ...state,
                isAuth : false,
                userData : {},
                isAdmin : false,
                admin : {}
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