import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link, Redirect } from "react-router-dom";
import styles from "../../Styles/Login.module.css";
import {useDispatch, useSelector} from "react-redux"
import { useHistory } from "react-router";
import { loginFailure, loginRequest, loginSuccess } from "../../Redux/auth/actions";
import { auth } from "../../Utils/fireBase";
import Loading from "./Loading";
import firebase from "firebase/app"


export const Login = () => {
  const {isAuth,isLoading,isError}=useSelector(state=>state.auth)
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch()
  const history = useHistory()

  const handleSubmit = e => {
    e.preventDefault();
    var payload = {
      email,
      password
    };
    login(payload)
  }
  const login=({email,password})=>{
    dispatch(loginRequest())
return auth.signInWithEmailAndPassword(email, password)
  .then((userCredential) => {

    const user = userCredential.user;
    dispatch(loginSuccess(user))
    history.push("/")
  })
  .catch((error) => {
    dispatch(loginFailure(error.message))
    alert("wrong credentials")
  });
}

const handleGoogleSingIn =()=>{
  var provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
  .then((result) => {
     const user = result.user;

    dispatch(loginSuccess(user))
    history.push("/")

  }).catch((error) => {
    dispatch(loginFailure(error.message))
    alert("wrong credentials")
  });

}
const handleFacebookSignIN =()=>{
  var provider = new firebase.auth.FacebookAuthProvider();
  auth.signInWithPopup(provider)
  .then((result) => {
     const user = result.user;

    dispatch(loginSuccess(user))
    history.push("/")

  }).catch((error) => {
    dispatch(loginFailure(error.message))
    alert("wrong credentials")
  });

}

 
  return isAuth? <Redirect to="/" push/> : (
    <div className={styles.loginflex}>
      <div className={styles.car}>
      {isLoading? <Loading height={500} width={700} /> :    <Carousel showThumbs={false} showArrows={false} showStatus={false} infiniteLoop={true} autoPlay={true} interval={3000}>
          <div>
            <img className={styles.gridIm} src="https://www.monsterindia.com/rio/public/images/carousel_1.svg" />
            <h2 className={styles.head2}>Job Alerts</h2>
            <span className={styles.subHead}>Get real time alerts now for hot new Jobs</span>
          </div>
          <div>
            <img className={styles.gridIm} src="https://www.monsterindia.com/rio/public/images/carousel_2.svg" />
            <h2 className={styles.head2}>Find Better</h2>
            <span className={styles.subHead}>Find job that match your skills across top employers in the country</span>
          </div>
          <div>
            <img className={styles.gridIm} src="https://www.monsterindia.com/rio/public/images/carousel_3.svg" />
            <h2 className={styles.head2}>Apply Quickly</h2>
            <span className={styles.subHead}>Save Time and Effort with monster Quick Apply</span>
          </div>
        </Carousel> }
      </div>
      <div className={styles.logFm}>
        <h2 className={styles.mainHead}>Hello!</h2>
        <h2>Welcome Back</h2>
        <span className={styles.spaan}>You are just a step away from your dream job</span>
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
          <div className={styles.forget}>
            <Link >Forgot password</Link>
          </div>
          <br />
     <input type="submit" className={styles.btn} value={isLoading? "Loading..." : "Login"} />
          <br />
        </form>
        <div className={styles.extra}>
          <span className={styles.spaan}>Or</span>
          <br />
          <span className={styles.spaan}>Login via OTP</span>
          <br />
          <hr />
          <div className={styles.social}> 
            <span className={styles.spaan}> Or Login via socials</span>
            <button onClick={handleFacebookSignIN}>
              <img src="https://iconape.com/wp-content/png_logo_vector/facebook-f-logo-2019.png" />
            </button>
            <button onClick={handleGoogleSingIn}>
              <img src="https://freepngimg.com/download/google/67060-play-photos-search-google-account-png-file-hd.png" />
            </button>
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
