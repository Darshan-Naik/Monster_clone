import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import styles from "./../css/Login.module.css"
// const LoginFlex = styled.div`
//   display: grid;
//   width: 69%;
//   height: 600px;
//   grid-template: "cr lf";
//   margin: auto;
//   margin-top: 20px;
// `;

// const Car = styled.div`
//   grid-area: cr;
//   width: 70%;
//   height: 500px;
//   margin-top: 100px;
// `;
// const LogFm = styled.div`
//   grid-area: lf;
//   max-height: 600px;
//   width: 100%;
//   box-shadow: 2px 2px 10px 1px #000000;
//   text-align: left;
//   padding: 20px;
// `;
// const Img = styled.img`
//   width: 250px;
//   height: 250px;
// `;
// const H2 = styled.h2`
//   margin: 0px;
//   font-size: 28px;
//   font-weight: 600px;
//   color: blue;
// `;
// const H4 = styled.h4`
//   margin: 5px;
// `;
// const Input = styled.input`
//   width: 90%;
//   height: 30px;
//   color: black;
//   background-color: #f8f7f7;
//   margin: 15px 0px;
//   border: 1px solid #474646;
//   padding: 10px;
// `;
// const Span = styled.span`
//   font-size: 14px;
// `;

// const Button = styled.button`
//   width: 98%;
//   color: whitesmoke;
//   height: 40px;
//   background-color: #3f1bc0;
//   border-radius: 10px;
//   font-size: 20px;
//   margin: auto;
//   margin-top: 2%;
//   :hover& {
//     background-color: #03032e;
//   }
// `;
// const Icon = styled.img`
//   width: 50px;
//   height: 30px;
//   border-radius: 50%;
// `;
const Socials = styled.span`
  font-size: 16px;
  width: 90px;
  align-items: left;
  margin-right: 100px;
`;
const Signbutton = styled.button`
  width: 100%;
  color: #0826bb;
  height: 40px;
  background-color: #fbf9fc;
  border-radius: 10px;
  font-size: 20px;
  margin: auto;
  margin: 20px 0px;
  :hover& {
    background-color: #0909ce;
    color: white;
  }
`;
export const Login = () => {
  return (
    <div className={styles.loginflex}>
      <div className={styles.car}>
        <Carousel>
          <div>
            <img className={styles.gridIm} src="https://www.monsterindia.com/rio/public/images/carousel_1.svg"/>
            <h2 className={styles.head2}>Job Alerts</h2>
            <span>Get real time alerts now for hot new Jobs</span>
          </div>
          <div>
            <img className={styles.gridIm} src="https://www.monsterindia.com/rio/public/images/carousel_2.svg" />
            <h2 className={styles.head2}>Find Better</h2>
            <span>Find job that match your skills across top employers in the country</span>
          </div>
          <div>
            <img className={styles.gridIm} src="https://www.monsterindia.com/rio/public/images/carousel_3.svg" />
            <h2 className={styles.head2}>Apply Quickly</h2>
            <span>Save Time and Effort with monster Quick Apply</span>
          </div>
        </Carousel>
      </div>
      <div className={styles.logFm}>
        <h4>Hello!</h4>
        <h2>Welcome Back</h2>
        <span>You are just a step away from your dream job</span>
        <br />
        <input className={styles.inp} placeholder="Email/Mobile No." type="text" />
        <br />
        <input className={styles.inp} type="password" placeholder="Password" />
        <br />
        <span  style={{ textAlign: "right" }}>
          <Link>Forgot password</Link>
        </span>
        <br />
        <button className={styles.btn}>Login</button>
        <br />
        <div className={styles.extra} style={{ textAlign: "center", fontSize: "20px" }}>
          <span>Or</span>
          <br />
          <span>Login via OTP</span>
          <br />
          <hr />
          <div>
            <Socials>Login via socials</Socials>
            <Link>
              <img className={styles.imIcon} src="https://www.nicepng.com/png/detail/448-4482584_fb-icon-facebook-icon.png" />
            </Link>
            <Link>
              <img className={styles.imIcon} src=" https://cdn2.iconfinder.com/data/icons/font-awesome/1792/google-512.png" />
            </Link>
          </div>
          <hr />
          <Link to={"/seeker/registration"}>
            
            <button className={styles.btn2}>New to Monster? Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
