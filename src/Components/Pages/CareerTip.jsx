import React, { useEffect } from 'react'
import axios from "axios"
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
      <div className="careertip">
          <h3>Career Advice and Tips</h3>
          {data.map((item)=><div className="careerDataDiv">
               <div className="careerIdDiv">{item.id}</div>
               <div className="careerTitleDiv">{item.title}</div>
          </div>)}
      </div>
    )
}export{CareerTip}