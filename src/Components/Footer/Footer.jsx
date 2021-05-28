import React from 'react'
import { Link } from 'react-router-dom'
import "../../Styles/Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return (
        <>
        {/* -----------------------------footer part-1------------------------------- */}

        <div className="footer-part-1">
            <div className="flex">
                <p >Jobs by Locations : </p>
                <div className="subflex">
                    <Link to="/result/Bangalore">Jobs in Bangalore </Link>
                    <Link to="/result/Delhi">| Jobs in Delhi </Link>
                    <Link to="/result/Mumbai">| Jobs in Mumbai </Link>
                    <Link to="/result/Chennai">| Jobs in Chennai </Link>
                    <Link to="/result/Hyderabad">| Jobs in Hyderabad </Link>
                    <Link to="/result/Kolkata">| Jobs in Kolkata </Link>
                    <Link to="/result/Pune">| Jobs in Pune </Link>
                    <Link to="/result/Chandigarh">| Jobs in Chandigarh </Link>
                    <Link to="/result/Lucknow">| Jobs in Lucknow </Link>
                    <Link to="/result/Coimbatore">| Jobs in Coimbatore </Link>
                </div>
            </div>

            <div className="flex">
                <p>Jobs by Skill - IT : </p>
                <div className="subflex">
                    <Link to="/result/Biotechnology">Biotechnology Jobs </Link>
                    <Link to="/result/Digital Marketing">| Digital Marketing Jobs </Link>
                    <Link to="/result/Graphic Design">| Graphic Design Jobs </Link>
                    <Link to="/result/Networking">| Networking Jobs </Link>
                    <Link to="/result/Oracle">| Oracle Jobs </Link>
                    <Link to="/result/SEO">| SEO Jobs </Link>
                    <Link to="/result/Software Testing">| Software Testing Jobs </Link>
                    <Link to="/result/SQL">| SQL Jobs </Link>
                    <Link to="/result/Web Design">| Web Design Jobs </Link>
                </div>
            </div>

            <div className="flex">
                <p>Jobs by Skill - Non IT : </p>
                <div className="subflex">
                    <Link to="/result/Accounting">Accounting Jobs </Link>
                    <Link to="/result/BPO">| BPO Jobs </Link>
                    <Link to="/result/Call">| Call Center Jobs </Link>
                    <Link to="/result/Civil">| Civil Engineering Jobs </Link>
                    <Link to="/result/Content Writing">| Content Writing Jobs </Link>
                    <Link to="/result/Electrical">| Electrical Engineering Jobs </Link>
                    <Link to="/result/Event">| Event Management Jobs </Link>
                    <Link to="/result/Hotel">| Hotel Management Jobs </Link>
                    <Link to="/result/HR">| HR Jobs </Link>
                    <Link to="/result/Sales">| Sales Jobs </Link>
                </div>
            </div>

            <div className="flex">
                <p>Jobs by Role : </p>
                <div className="subflex">
                    <Link to="/result/Air Hostess">Air Hostess Jobs </Link>
                    <Link to="/result/Accountant">| Accountant Jobs </Link>
                    <Link to="/result/Professor">| Assistant Professor Jobs </Link>
                    <Link to="/result/Analyst">| Business Analyst Jobs </Link>
                    <Link to="/result/Operator">| Computer Operator Jobs </Link>
                    <Link to="/result/Data Analyst">| Data Analyst Jobs </Link>
                    <Link to="/result/Data Entry">| Data Entry Operator Jobs </Link>
                    <Link to="/result/Fashion Designer">| Fashion Designer Jobs </Link>
                    <Link to="/result/Graphic Designer">| Graphic Designer Jobs </Link>
                    <Link to="/result/Software Engineer">| Software Engineer Jobs </Link>
                </div>
            </div>

            <div className="flex">
                <p>International Jobs : </p>
                <div className="subflex">
                    <Link to="/result/Gulf">Jobs in Gulf </Link>
                    <Link to="/result/Singapore">| Jobs in Singapore </Link>
                    <Link to="/result/Malaysia">| Jobs in Malaysia </Link>
                    <Link to="/result/Philippines">| Jobs in Philippines </Link>
                    <Link to="/result/Hong Kong">| Jobs in Hong Kong </Link>
                    <Link to="/result/Vietnam">| Jobs in Vietnam </Link>
                    <Link to="/result/Indonesia">| Jobs in Indonesia </Link>
                    <Link to="/result/Thailand">| Jobs in Thailand </Link>
                    <Link to="/result/Dubai">| Jobs in Dubai </Link>
                    <Link to="/result/UAE">| Jobs in UAE </Link>
                </div>
            </div>

            <div className="flex">
                <p>Other Jobs : </p>
                <div className="subflex">
                    <Link to="/result/Walk-in">Walk-in Jobs </Link>
                    <Link to="/result/Part Time">| Part Time Jobs </Link>
                    <Link to="/result/Contract">| Contract Jobs </Link>
                    <Link to="/result/Women">| Jobs for Women </Link>
                    <Link to="/result/Fresher">| Fresher Jobs </Link>
                    <Link to="/result/Freelance">| Freelance Jobs </Link>
                    <Link to="/result/Work from Home">| Work from Home Jobs </Link>
                    <Link to="/result/12th Pass">| 12th Pass Jobs </Link>
                    <Link to="/result/10th Pass">| 10th Pass Jobs </Link>
                    <Link to="/result/Diploma">| Diploma Jobs </Link>
                </div>
            </div>
        </div>

        {/* -----------------------------footer part-2------------------------------- */}

        <div className="flex2">
            <div>
                <select className="selectFooter">
                    <option value="India">India</option>
                </select>
            </div>

            <div className="relative">
                <ul>
                    <div className="icon"> <FontAwesomeIcon icon={faPhone} /> </div>
                    <li>Toll No: +91-40-66116611</li>
                    <li>Toll Free No: 1-800-4196666</li>
                </ul>
            </div>

            <div className="relative">
                <div className="icon2"> <FontAwesomeIcon icon={faEnvelope} /> </div>
                <div>info@monsterindia.com</div>
            </div>

            <div className="relative flexBox">
            <img width="30px" src="https://iconape.com/wp-content/png_logo_vector/facebook-f-logo-2019.png" alt="logo" />
            <img width="30px" src="https://freepngimg.com/download/google/67060-play-photos-search-google-account-png-file-hd.png" alt="logo"/>
            <img width="40px" src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png" alt="logo" />
            
            </div>
        </div>

        {/* -----------------------------footer part-3------------------------------- */}

        <div className="flex3">
            <ul>Job Seekers
                <li> <Link to="/job-search">Job Search</Link> </li>
                <li> <Link to="/login">Job Seekers login</Link> </li>
                <li> <Link  to="/login">Upload Resume</Link> </li>
                <li> <Link to="/career-tips">Career Advice</Link> </li>
                <li> <Link to="/job-search" >Search Tips</Link> </li>
                <li> <Link to="/">Free Job Alert</Link> </li>
                <li> <Link to="/job-search">Find Companies</Link> </li>
                <li> <Link to="/">Help</Link> </li>
            </ul>

            <ul>Employers
                <li> <Link to="/">Employer Login</Link> </li>
                <li> <Link to="/">Job Posting</Link> </li>
                <li> <Link to="/">Access Resume Database</Link> </li>
                <li> <Link to="/">Join mRecruiters</Link> </li>
                <li> <Link to="/">Advertise with us</Link> </li>
                <li> <Link to="/">Research Reports</Link> </li>
                <li> <Link to="/">Buy Online</Link> </li>
            </ul>

            <ul>Monster
                <li> <Link to="/">About Us</Link> </li>
                <li> <Link to="/">Contact Us</Link> </li>
                <li> <Link to="/">Career with Us</Link> </li>
                <li> <Link to="/">Send Feedback</Link> </li>
                <li> <Link to="/">Testimonials</Link> </li>
                <li> <Link to="/">HTML Sitemap</Link> </li>
                <li> <Link to="/">XML Sitemap</Link> </li>
                <li> <Link to="/">Jobs App</Link> </li>
            </ul>

            <ul>Stay Connected
                <li> <Link to="https://www.facebook.com/monsterindia">Facebook</Link> </li>
                <li> <Link to="https://twitter.com/monster_india">Twitter</Link> </li>
                <li> <Link to="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQGnrx5Xsfo27AAAAXjQRAkYw_2jRN5Q8-P8H_FjbZDJKCDEhPt-NiRPkdFjj3-T0_YhFyMkd4PEfKYHPfTs5ib2sy5SF6w1gN9u2NkA_y9getdQPj73GQU3ZvabLNYXkGxkXrE=&originalReferer=https://www.monsterindia.com/&sessionRedirect=https%3A%2F%2Fin.linkedin.com%2Fcompany%2Fmonster-india">Linkedin</Link> </li>
                <li> <Link to="https://www.instagram.com/accounts/login/">Instagram</Link> </li>
                <li> <Link to="https://www.youtube.com/channel/UCY_u5QE1QR-Rsem1ZexT6LQ/MonsterTV">Youtube</Link> </li>
            </ul>

            <ul>Legal
                <li> <Link to="/">Security and Fraud</Link> </li>
                <li> <Link to="/">Privacy Policy</Link> </li>
                <li> <Link to="/">Terms of Use</Link> </li>
                <li> <Link to="/">Be Safe</Link> </li>
                <li> <Link to="/">Complaints</Link> </li>
            </ul>
        </div>

        {/* -----------------------------footer part-4------------------------------- */}

        <div style={{textAlign: "left", padding: "0.5% 2%", fontSize: "14px"}} >
            © 2021 Monster - All Rights Reserved
        </div>
        </>
    )
}

export default Footer
