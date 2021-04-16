import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import styles from "../../Styles/Login.module.css";
import {useDispatch} from "react-redux"
import { login } from "../../Redux/auth/actions";

export const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch=useDispatch()
  const handleSubmit = e => {
    e.preventDefault();
    var payload = {
      email,
      password
    };
    dispatch(login(payload))
    
  };
  return (
    <div className={styles.loginflex}>
      <div className={styles.car}>
        <Carousel>
          <div>
            <img className={styles.gridIm} src="https://www.monsterindia.com/rio/public/images/carousel_1.svg" />
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
        <form onSubmit={handleSubmit}>
          <input className={styles.inp} placeholder="Email/Mobile No." type="text"  onChange={e => {
              setEmail(e.target.value);
            }} />
          <br />
          <input className={styles.inp} type="password" placeholder="Password"  onChange={e => {
              setPassword(e.target.value);
            }} />
          <br />
          <span style={{ textAlign: "right" }}>
            <Link>Forgot password</Link>
          </span>
          <br />
          <input type="submit" className={styles.btn} value="Login"/>
          <br />
        </form>
        <div className={styles.extra}>
          <span>Or</span>
          <br />
          <span>Login via OTP</span>
          <br />
          <hr />
          <div>
            <span>Login via socials</span>
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
