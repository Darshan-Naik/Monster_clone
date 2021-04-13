import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { appReducer } from "./app/appReducer";
import { authReducer } from "./auth/authReducer";
import { jobReducer } from "./job/jobReducer";



const reducer = combineReducers({
    auth :authReducer,
    app :appReducer,
    job :jobReducer
})


const store = createStore(reducer,
    compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )) 

export default store    