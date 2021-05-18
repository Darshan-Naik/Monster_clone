import axios from "axios"
import React,{useEffect} from "react"
import "./../../Styles/CareerTipMainPage.css"
import { TipImage ,TrendigArticle} from './../../Utils/localData'
function CareerTipMainPage( )
{
const[data,setData]=React.useState([])
function trunket(string,n)
{
return string?.length> n ? string.substr(0,n-1)+'...' : string;
}

const config=()=>{
axios.get("https://ashish-first-server.herokuapp.com/Article")
.then((res)=>setData(res.data))
.catch((err)=>(err))
}

useEffect(() => {
config()
}, [])

return(
<div>
    <div className="MainTip_1">
        <p>CAREER CENTER - TIPS AND ADVICE</p>
        <div className="mainTip_1_1">
            <div className="mainTip_1_1_1">
                {TipImage.map(item=><div key={item.title+Math.random()} className="mainTip_1_1_1_1">
                    <div> <img src={item.image} alt="" /></div>
                    <p>{item.title}</p>
                </div>)}
            </div>
            <div className="mainTip_1_1_2">
                <div className="mainTip_1_1_2_1">
                    <img src="https://cdn1.iconfinder.com/data/icons/line-essentials-88/20/4325-512.png" alt="" />
                    <p>TRENDING ARTICLES</p>
                </div>
                {TrendigArticle.map( item=>
                <ul key={item+Math.random()} className="mainTip_1_1_2_2">
                    <li>{item}</li>
                </ul>)}
            </div>
        </div>
    </div>
    <div className="carrer_article">
        <p>LATEST CAREER ARTICLES</p>
        <div className="carrer_article_data_div">
            {data.map((item)=>
            <div key={item.title+Math.random()} className="carrer_article_data">
                <p> {trunket(item.title,40)}</p>
                <div className="carrer_article_details">
                    <p> {trunket(item.details,130)}</p>
                </div>
                <div style={{textAlign:"right", width:"97%",paddingBottom:"10px"}}>
                    <button id="btn"> Read More</button>
                   </div>
            </div>)}
        </div>
    </div>
</div>
)

}export{CareerTipMainPage}