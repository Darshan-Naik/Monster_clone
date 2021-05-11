import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Switch } from 'react-router'
import EmployerHome from '../EmployerPages/EmployerHome'
import EmployerLogin from '../EmployerPages/EmployerLogin'
import EmployerNavbar from '../EmployerPages/EmployerNavbar'
import EmployerSingUp from '../EmployerPages/EmployerSingUp'
import JobPost from '../EmployerPages/JobPost'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import { CareerTipMainPage } from '../Pages/CareerTipMainPage'
import ErrorPage from '../Pages/ErrorPage'
import Home from '../Pages/Home'
import JobResultDetails from '../Pages/JobResultDetails'
import { Jobsearch } from '../Pages/JobSearchPage'
import { Login } from '../Pages/Login'
import MyProfilePage from '../Pages/MyProfilePage'
import Results from '../Pages/Results'
import { SignUp } from '../Pages/SignUp'
import PrivateRouter from './PrivateRouter'

function Router() {
    const isAdmin = useSelector(store=>store.auth.isAdmin)
    return (
        <div>
            {isAdmin?<EmployerNavbar /> : <NavBar /> }
               
            <Switch>
                <PrivateRouter path="/" exact>
                    <Home />
                </PrivateRouter>
                <PrivateRouter path="/job-search" exact>
                    <Jobsearch />
                </PrivateRouter>
                <PrivateRouter path="/result" exact>
                    <Results />
                </PrivateRouter>
                <PrivateRouter path="/result/:id" exact>
                    <Results />
                </PrivateRouter>
                <PrivateRouter path="/login">
                    <Login />
                </PrivateRouter>
                <PrivateRouter path="/seeker/registration">
                    <SignUp/>
                </PrivateRouter>
                <PrivateRouter path="/result/job/:id">
                    <JobResultDetails/>
                </PrivateRouter>
                <PrivateRouter path="/career-tips">
                    <CareerTipMainPage/>
                </PrivateRouter>
                <PrivateRouter path="/user-profile">
                    <MyProfilePage/>
                </PrivateRouter>
                <Route exact path="/employer">
                    <EmployerHome/>
                </Route> 
                
                <Route path="/employer/login">
                    <EmployerLogin/>
                </Route> 
                  <Route path="/employer/sign-up">
                    <EmployerSingUp/>
                </Route>   
                <Route path="/employer/post-job">
                    <JobPost/>
                </Route>           
                    <Route>
                        <ErrorPage />
                    </Route>
                </Switch>
            
            {isAdmin?<div style={{textAlign: "left", padding: "0.5% 2%", fontSize: "14px"}} >
            © 2021 Monster - All Rights Reserved
        </div>: <Footer /> }
        </div>
    )

}

export default Router;
