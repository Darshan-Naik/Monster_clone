import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router'


function PrivateRouter({path,children,redirectPath="/employer",exact = false,push = false}) {

    const isAdmin = useSelector(store=>store.auth.isAdmin);
    return isAdmin?<Redirect to={redirectPath} push={push}/> : (
        <Route path={path} exact={exact}>
            {children}
        </Route>
    ) 
}

export default PrivateRouter
