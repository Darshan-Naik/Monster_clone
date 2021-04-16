import React from "react";
import styles from "../../Styles/Signup.module.css";
import {useDispatch} from "react-redux"
import {register}from "../../Redux/auth/actions";
import { useHistory } from "react-router";
export const SignUp = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();
  const history = useHistory()

  const handleSubmit = e => {
    e.preventDefault();
    var payload = {
      email,
      password
    };
    dispatch(register(payload))
      .then(history.push("/login"))
  };
  return (
    <div className={styles.mainDiv}>
      <div>
        <h1>Create an Account (it's free)</h1>
        <p>It only takes a couple of minutes to get started</p>
        <div className={styles.socialLinks}>
          <button>
            <img className={styles.socIcons} src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/google-512.png" />
            <span className={styles.goo}>Signup with Google</span>
          </button>
          <button>
            <img className={styles.socIcons} src="https://img.icons8.com/plasticine/2x/facebook-new.png" />
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
          <input value="Register" className={styles.btn} type="submit" />
        </form>
      </div>
    </div>
  );
};
