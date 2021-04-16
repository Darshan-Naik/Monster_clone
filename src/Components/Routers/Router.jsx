import React from 'react'
import { Route, Switch } from 'react-router'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import ErrorPage from '../Pages/ErrorPage'
import Home from '../Pages/Home'
import { Jobsearch } from '../Pages/JobSearchPage'
import Results from '../Pages/Results'

function Router() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/job-search" exact>
                    <Jobsearch />
                </Route>
                <Route path="/result" exact>
                    <Results />
                </Route>
                <Route path="/result/:id" exact>
                    <Results />
                </Route>

                <Route>
                    <ErrorPage />
                </Route>
            </Switch>


            <Footer />
        </div>
    )
}

export default Router
