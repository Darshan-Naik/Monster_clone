import React from "react"
import "./../../Styles/CareerTipMainPage.css"
import { TipImage ,TrendigArticle} from './../../Utils/localData'
function CareerTipMainPage( ) 
{

    return(
        <div>
        <div className="MainTip_1">
         <p>CAREER CENTER - TIPS AND ADVICE</p>
         <div className="mainTip_1_1">
             <div className="mainTip_1_1_1">
               {TipImage.map(item=><div className="mainTip_1_1_1_1">
                  <div> <img src={item.image} alt=""/></div>  
                     <p>{item.title}</p>
                 </div>)}
             </div>
             <div className="mainTip_1_1_2">
               <div className="mainTip_1_1_2_1">
                   <img src="https://cdn1.iconfinder.com/data/icons/line-essentials-88/20/4325-512.png" alt=""/>
                     <p>TRENDING ARTICLES</p></div>
            {TrendigArticle.map( item=> <ul className="mainTip_1_1_2">
                  <li>{item}</li>
             </ul>)}


             </div>

         </div>
        </div>
        </div>
    )
    
}export{CareerTipMainPage}