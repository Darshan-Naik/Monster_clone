import React from 'react'
import { useSelector } from 'react-redux';
import "./../../Styles/MyProfilePage.css"

import { pending,UserData } from './../../Utils/localData';

function MyProfilePage() {

const Data = useSelector(store=>store.auth.userData)

return (
<div>
    <div className="profile_head">
        <h2>MyProfile</h2>
        <p>{Data.lastLoginAt}</p>
    </div>
    <div className="profile_body">
        <div className="profile_details">
            <div className="profile_score">
                <p>Profile score</p>
                <div className="score_bar">
                    <div className="completed"></div>
                    <div className="notcompleted"></div>
                </div>
                <p id="percentage">40%</p>
            </div>
            <div id="pendding_action">
                <div id="pendding_action1">
                    <strong style={{color:"black"}}>8</strong> Pending Actions
                </div>
                {pending.map((item)=><div id="add_data">
                   <p>{item.title}</p>
                   <p style={{color:'rgb(109, 85, 218)',marginTop:"10px"}}>{item.action}</p>
               </div>)}
            </div>
           <div className="profile_data">
               <div className="pic_data">
                   <img style={{borderRadius:"50px",marginTop:"20px"}} src={Data.photoURL} alt=""/>
               </div>
               <div className="user_details">
                   <p>{Data.displayName}</p>
                   <p>+91 8342094808 <span style={{color:"rgb(109, 85, 218)",fontSize:"13px",marginLeft:"43px"}}>verified</span></p>
                   <p>{Data.email}   <span style={{color:"rgb(109, 85, 218)",fontSize:"13px",marginLeft:"20px"}}>verify</span></p>
               </div>
           </div>
        </div>
        <div className="Edit_details_part">
       {UserData.map((item)=>
            <div className="Add_information" >
                <p><strong style={{color:"black",fontSize:"16px"}}>{item.title}</strong>+Add</p>
                <p>{item.details}</p>
                
            </div>)}
            </div>
    </div>
</div>
)
}

export default MyProfilePage