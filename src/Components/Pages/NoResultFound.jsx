import React from 'react'

function NoResultFound() {
    return (
        <div className="noResult">
            <img src="https://media.monsterindia.com/trex/search/images/no-result.svg" alt=""/>
            <h3>No Result</h3>
            <p>Sorry, there are no results for</p>
            <p>this search, Please try another phrase</p>
        </div>
    )
}

export default NoResultFound
