import React from "react";
import styles from "../../Styles/Signup.module.css";
import {useDispatch, useSelector} from "react-redux"
import {register, registerFailure, registerRequest, registerSuccess}from "../../Redux/auth/actions";
import { useHistory } from "react-router";
import firebase from "firebase/app"
import { auth } from "../../Utils/fireBase";

export const SignUp = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();
  const history = useHistory()
  const {isLoading,isError,iaAuth} = useSelector(store=>store.auth)

  const handleSubmit = e => {
    e.preventDefault();
    var payload = {
      email,
      password
    };
    dispatch(register(payload))
      .then(()=>{
        alert("Registration  Successful")
        history.push("/login")
      });
    }

    const handleGoogleSingIn =()=>{
      dispatch(registerRequest())
      var provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider)
      .then((result) => {
         const user = result.user;
    
        dispatch(registerSuccess(user))
        history.push("/login")
    
      }).catch((error) => {
        dispatch(registerFailure(error.message))

      });
    
    }
    const handleFacebookSignIN =()=>{
      dispatch(registerRequest())
      var provider = new firebase.auth.FacebookAuthProvider();
      auth.signInWithPopup(provider)
      .then((result) => {
         const user = result.user;
    
         dispatch(registerSuccess(user))
        history.push("/")
    
      }).catch((error) => {
        dispatch(registerFailure(error.message))

      });
    
    }

  return (
    <div className={styles.mainDiv}>
      <div className={styles.center}>
        <h2 className={styles.mainHead}>Create an Accounts <small>(it's free)</small> </h2>
        <p className={styles.subHead}>It only takes a couple of minutes to get started</p>
        <div className={styles.socialLinks}>
          <button onClick={handleGoogleSingIn}>
            <img className={styles.socIcons} src="https://freepngimg.com/download/google/67060-play-photos-search-google-account-png-file-hd.png" />
            <span className={styles.goo}>Signup with Google</span>
          </button>
          <button onClick={handleFacebookSignIN}>
            <img className={styles.socIcons} src="https://iconape.com/wp-content/png_logo_vector/facebook-f-logo-2019.png" />
            <span className={styles.goo}>Signup with Facebook</span>
          </button>
        </div>
      </div>
      <hr />
      <div>
        <label className={styles.label}>
          Upload Resume<span>(*.doc,.pdf,*.docs,*.rtf)</span>
        </label>
        <br />
        <div className={styles.res}>
          <input className={styles.resume} required type="file" />
        </div>
        <br/>
        <form onSubmit={handleSubmit}>
          <label className={styles.label}>Full Name</label>
          <br />
          <input required className={styles.inp} type="text" placeholder="Enter your full name" />
          <br />
          <label className={styles.label}>Email ID</label>
          <br />
          <input
            required
            className={styles.inp}
            type="email"
            placeholder="Please enter your email"
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <label className={styles.label}>Password</label>
          <br />
          <input
            required
            className={styles.inp}
            type="password"
            onChange={e => setPassword(e.target.value)}
            placeholder="Password should be minimum 6 characters"
          />{" "}
          <br />
          <label className={styles.label}>Mobile Number</label>
          <br />
          <select required className={styles.pincode}>
            <option value="+93">+93 Afghanistan </option>
            <option value="+213">+213 Algeria</option>
            <option value="+672">+672 Antarctica</option>
            <option value="+254">+254 Argentina</option>
            <option value="+91">+91 India</option>
          </select>
          <input required className={styles.selec} placeholder="Your number for employers to reach you" />
          <br />
          <label className={styles.label}>Current Location</label>
          <br />
          <input required className={styles.inp} placeholder="Please select your current location" />
          <br />
          <label className={styles.label}>Total Experience</label>
          <br />
          <input required className={styles.inp} placeholder="select experience(e.g. Fresher or Experience)" />
          <br />
          <label className={styles.label}>Key Skills</label>
          <br />
          <input required className={styles.inp} placeholder="Enter or select your skills" />
          <br />
          <label className={styles.label}>Preferred Industry</label>
          <br />
          <select required className={styles.sel} placeholder="Maximum 2 Industries can be selected">
            <option>Agriculture/Dairy/Forestry/Fishing</option>
            <option>Alternate Energy</option>
            <option>Airlines/Aviation/Aerospace</option>
            <option>Beverages/Liquor</option>
          </select>
          <br />
          <label className={styles.label}>Preferred Function</label>
          <br />
          <select required className={styles.sel} placeholder="Maximum 2 functionS can be selected">
            <option>Construction</option>
            <option>Education/Teaching</option>
            <option>Health Care</option>
            <option>IT</option>
          </select>
          <br />
          <p className={styles.para}>
            By registering, you agree to our Terms and Conditions, Privacy Policy and default mailer and communications settings
            governing the use of monsterindia.com.
          </p>
          {isError && <small style={{color :"red"}} >wrong credentials</small>}
          <input value={isLoading?"Loading..." : "Register"} className={styles.btn} type="submit" />
        </form>
      </div>
    </div>
  );
}
