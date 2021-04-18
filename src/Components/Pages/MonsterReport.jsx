import React from 'react'
import "./../../Styles/Monsterreport.css"

function MonsterReport() {


return(
<div className="Reportbody">
  <div className="ReportHead">
    <p>Monster Research and Reports</p>
  </div>
  <div className="ReportData">
    <div className="Report1Data">
      <div className="Report1DataHead">
        <img src="https://cdn1.iconfinder.com/data/icons/graph-1/100/03-512.png" alt="" />
        <p>Monster Employment Index</p>
      </div>
      <p> The Monster Employment Index is a broad and comprehensive monthly analysis of online job posting activity
        conducted by Monster India. </p>
    </div>
    <div className="Report1Data">
      <div className="Report1DataHead">
        <img src="https://cdn1.iconfinder.com/data/icons/graph-1/100/03-512.png" alt="" />
        <p>Monster Salary Index</p>
      </div>
      <p> Know whether you earn more or less than your peers, without violating privacy with Monster Career Benchmarking
      </p>
    </div>
  </div>
</div>

)

}export{MonsterReport}