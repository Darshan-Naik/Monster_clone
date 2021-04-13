import React from 'react'
import { Route, Switch } from 'react-router'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import ErrorPage from '../Pages/ErrorPage'
import Home from '../Pages/Home'

function Router() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/" exact>
                    <Home />
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
