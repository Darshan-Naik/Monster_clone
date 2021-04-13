import React from 'react'
import { useStore } from 'react-redux'
import { Redirect, Route } from 'react-router'


function PrivateRouter({path,children,redirectPath="/",exact = false,push = false}) {

    const isAuth = useStore(store=>store.auth.isAuth);
    return isAuth? (
        <Route path={path} exact={exact}>
            {children}
        </Route>
    ) : <Redirect to={redirectPath} push={push}/>
}

export default PrivateRouter
