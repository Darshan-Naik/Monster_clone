import React from 'react'
import './../../Styles/Resumeservices.css'
function Resumeservices() {
    return (
        <div className="monster">
            <div className="header"><h2>Resume Services</h2></div>
            <div className="resume__card">
                <img src="https://media.monsterindia.com/trex/prod-cdn/media/product/2018/october/1lVkq2Yfi8Hg1rOMrLYrljGmkHzWCpetLiZTFjkT.png" alt=""/>
                <div className="resume__description" >
                <h4>Right Resume</h4>
                <p>
                    Get a professionally written
                     resume that is just right for
                      your career 
                </p>
                  <h3>Read More</h3>
                </div>
            </div>
            <div className="resume__card">
                <img src="https://media.monsterindia.com/trex/prod-cdn/media/product/2018/october/wNt90Vciwjtw05UbukHOpwS7RMYiGCkw9cKwWiAG.png" alt=""/>
                <div className="resume__description" >
                <h4>Xpress Resume+</h4>
                <p>
                Speed up your job hunt with XpressResume+ Find Better. Faster!
                </p>
                  <h3>Read More</h3>
                </div>
            </div>
            <div className="resume__card">
                <img src="https://media.monsterindia.com/trex/prod-cdn/media/product/2018/october/DZjYfGoeHQ8Ese8lZnCaAWQwkmh0cMd9LCphNIJi.png" alt=""/>
                <div className="resume__description" >
                <h4>Career Booster </h4>
                <p>
                The best pack to better your chances of finding a job faster.
                </p>
                  <h3>Read More</h3>
                </div>
            </div>
            <div className="mobile__number">
                <div>
                <p>Find Better & Faster with Monster Career Services</p>
                <p>Call 1-800-4196666 now! (Toll-free)</p>
                </div>
                <input placeholder='Enter your mobile number'></input>
                <button>Get a Call</button>
            </div>
            
        </div>
    )
}

export default Resumeservices
