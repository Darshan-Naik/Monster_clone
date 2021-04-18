import React, { useEffect } from 'react'
import axios from "axios"
import "./../../Styles/CareerTip.css"
function CareerTip() {
const [data,setData]=React.useState([])
const getData=()=>{
axios.get("https://ashish-first-server.herokuapp.com/article")
.then((res)=>(setData(res.data)))
.catch((err)=>(err))
}
useEffect(() => {
getData()
}, [])

return(
<div className="careerTip">
    <h3>Career Advice and Tips</h3>
    {data.map((item)=><div className="careerDataDiv">
        <div className="careerIdDiv">
            <h3>{item.id}</h3>
        </div>
        <div className="careerTitleDiv">
            <h5>{item.title}</h5>
            <p>{item.date}</p>
        </div>
    </div>)}
</div>
)
}export{CareerTip}