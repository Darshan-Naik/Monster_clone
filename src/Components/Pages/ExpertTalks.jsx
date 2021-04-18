import React from 'react'
import "./../../Styles/Experttalk.css"
function ExperTalks(){

return(
<div>
    <div className="Expertbody">
        <div className="ExpertHead">
            <p>Experts Speak</p>
        </div>
        <div className="ExpertData">
            <div style={{width:"300px",height:"300px",marginRight:"45px",marginLeft:"20px"}} id="Expertimage">
                <img src="https://media.monsterindia.com/trex/prod-cdn/media/video/2018/october/1yBMObl2Bu5hPrcFXwvhU1jHuQqOaYa1iaDO59A1.jpeg"
                    alt="" />
                <p>3 Biggest Mistakes Candidates Make in an Interview </p>
            </div>
            <div id="Expertimage" style={{width:"300px",height:"300px",marginRight:"35px"}}>
                <img src="https://media.monsterindia.com/trex/prod-cdn/media/video/2018/october/xDFVITDTLGqJUc8nYQoaB2pXwaqkiZU2ksIzks50.jpeg"
                    alt="" />
                <p>Common resume mistakes that candidates make</p>
            </div>
            <div id="Expertimage">
                <img src="https://media.monsterindia.com/trex/prod-cdn/media/video/2018/october/Zbnhw3wMimpyDdYu5aKEA5u1v911ZrWfTmukcOBD.jpeg"
                    alt="" />
                <p>3 Features of a Good Resume</p>
            </div>
        </div>
    </div>
</div>
)
}export{ExperTalks}