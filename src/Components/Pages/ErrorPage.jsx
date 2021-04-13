import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
    return (
        <div>
            <h1>404 || Page Note Found</h1>
            <Link to="/"> Go To Home</Link>
        </div>
    )
}

export default ErrorPage
