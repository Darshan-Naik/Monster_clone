import React from 'react'
import { Link } from 'react-router-dom'
import '../../Styles/JobSearchBySkills.css'

function JobSearchBySkills() {
const skills = ["java","javaScript","HTML","CSS","Ruby","React","React JS","Redux","Node","Python","C++"]
return (
<div className="JobSearchBySkills">
    <h2>Jobs by Top Skills</h2>
    {skills.map(item=>
    <Link key={item+"jobs"} to={"/result/"+item}>{item} Jobs</Link>)} </div> ) } export default JobSearchBySkills