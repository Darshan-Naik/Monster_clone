import React from 'react'
import './../../Styles/Courses.css'

function Courses() {
    return (
        <div className="courses">
        <div className="courses__header">
            <h2>Courses & Certifications</h2>
            <h3>View All </h3>
        </div>
        <div className="courses__description">
            <p>Fast track your way up the career 
                ladder! Expand learning and skills, 
                take an online certificate course or opt 
                for an e-learning certification to<span> fast track
                 your way up the career ladder.</span></p>
        </div>
        <div className="courses__cards">
            <div className="courses__card">
                <div className="coursescard__header"><h4>Certified Compensation and Benefits Manager</h4>
                <p>Bachelor Degree Courses</p>
                </div>
                <div className="courses__footer">
                  <p>Keywords</p>
                      <li>Certificate in Compensation and...</li>
                      <li>Compensation and Benefits Man...</li>
                      <li>Compensation and Benefits Man...</li>
                      <div style={{color:"rgb(93,108,196)" , marginLeft:"150px"}}>Read More</div>
                </div>
            </div>
            <div className="courses__card">
                <div className="coursescard__header"> 
                     <h4>Certified WiMAX (4G) Professional VS-1053</h4>
                    <p>Master Degree Courses</p>
                </div>
                <div className="courses__footer">
                    <p>Keywords</p>
                        <li>Certificate in WiMAX</li>
                        <li>WiMAX (4G) Professional</li>
                        <li>WiMAX Professional</li>
                        <div style={{color:"rgb(93,108,196)" , marginLeft:"150px"}}>Read More</div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Courses