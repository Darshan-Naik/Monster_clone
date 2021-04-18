import React from 'react'
import { Link } from 'react-router-dom'

function WelCome() {
    return (
        <div className="welCome">
            <h2>No Jobs Posted  yet!</h2>
            <Link to="/employer/post-job">Post New Job</Link>
        </div>
    )
}

export default WelCome
