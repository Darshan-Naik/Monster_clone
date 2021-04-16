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
                <Link >Jobs by Locations : </Link>
                <div className="subflex">
                    <Link>Jobs in Bangalore </Link>
                    <Link>| Jobs in Delhi </Link>
                    <Link>| Jobs in Mumbai </Link>
                    <Link>| Jobs in Chennai </Link>
                    <Link>| Jobs in Hyderabad </Link>
                    <Link>| Jobs in Kolkata </Link>
                    <Link>| Jobs in Pune </Link>
                    <Link>| Jobs in Chandigarh </Link>
                    <Link>| Jobs in Lucknow </Link>
                    <Link>| Jobs in Coimbatore </Link>
                </div>
            </div>

            <div className="flex">
                <Link>Jobs by Skill - IT : </Link>
                <div className="subflex">
                    <Link>Biotechnology Jobs </Link>
                    <Link>| Digital Marketing Jobs </Link>
                    <Link>| Graphic Design Jobs </Link>
                    <Link>| Networking Jobs </Link>
                    <Link>| Oracle Jobs </Link>
                    <Link>| SEO Jobs </Link>
                    <Link>| Software Testing Jobs </Link>
                    <Link>| SQL Jobs </Link>
                    <Link>| Web Design Jobs </Link>
                </div>
            </div>

            <div className="flex">
                <Link>Jobs by Skill - Non IT : </Link>
                <div className="subflex">
                    <Link>Accounting Jobs </Link>
                    <Link>| BPO Jobs </Link>
                    <Link>| Call Center Jobs </Link>
                    <Link>| Civil Engineering Jobs </Link>
                    <Link>| Content Writing Jobs </Link>
                    <Link>| Electrical Engineering Jobs </Link>
                    <Link>| Event Management Jobs </Link>
                    <Link>| Hotel Management Jobs </Link>
                    <Link>| HR Jobs </Link>
                    <Link>| Sales Jobs </Link>
                </div>
            </div>

            <div className="flex">
                <Link>Jobs by Role : </Link>
                <div className="subflex">
                    <Link>Air Hostess Jobs </Link>
                    <Link>| Accountant Jobs </Link>
                    <Link>| Assistant Professor Jobs </Link>
                    <Link>| Busines Analyst Jobs </Link>
                    <Link>| Computer Operator Jobs </Link>
                    <Link>| Data Analyst Jobs </Link>
                    <Link>| Data Entry Operator Jobs </Link>
                    <Link>| Fashion Designer Jobs </Link>
                    <Link>| Graphic Designer Jobs </Link>
                    <Link>| Software Engineer Jobs </Link>
                </div>
            </div>

            <div className="flex">
                <Link>International Jobs : </Link>
                <div className="subflex">
                    <Link>Jobs in Gulf </Link>
                    <Link>| Jobs in Singapore </Link>
                    <Link>| Jobs in Malaysia </Link>
                    <Link>| Jobs in Philippines </Link>
                    <Link>| Jobs in Hong Kong </Link>
                    <Link>| Jobs in Vietnam </Link>
                    <Link>| Jobs in Indonesia </Link>
                    <Link>| Jobs in Thailand </Link>
                    <Link>| Jobs in Dubai </Link>
                    <Link>| Jobs in UAE </Link>
                </div>
            </div>

            <div className="flex">
                <Link>Other Jobs : </Link>
                <div className="subflex">
                    <Link>Walk-in Jobs </Link>
                    <Link>| Part Time Jobs </Link>
                    <Link>| Contract Jobs </Link>
                    <Link>| Jobs for Women </Link>
                    <Link>| Fresher Jobs </Link>
                    <Link>| Freelance Jobs </Link>
                    <Link>| Wor from Home Jobs </Link>
                    <Link>| 12th Pass Jobs </Link>
                    <Link>| 10th Pass Jobs </Link>
                    <Link>| Diploma Jobs </Link>
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
            <img width="30px" src="https://iconape.com/wp-content/png_logo_vector/facebook-f-logo-2019.png" />
            <img width="30px" src="https://freepngimg.com/download/google/67060-play-photos-search-google-account-png-file-hd.png" />
            <img width="40px" src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png" />
            
            </div>
        </div>

        {/* -----------------------------footer part-3------------------------------- */}

        <div className="flex3">
            <ul>Job Seekers
                <li> <Link>Job Search</Link> </li>
                <li> <Link>Job Seekers login</Link> </li>
                <li> <Link>Upload Resume</Link> </li>
                <li> <Link>Career Advice</Link> </li>
                <li> <Link>Search Tips</Link> </li>
                <li> <Link>Free Job Alert</Link> </li>
                <li> <Link>Find Companies</Link> </li>
                <li> <Link>Help</Link> </li>
            </ul>

            <ul>Employers
                <li> <Link>Employer Login</Link> </li>
                <li> <Link>Job Posting</Link> </li>
                <li> <Link>Access Resume Database</Link> </li>
                <li> <Link>Join mRecruiters</Link> </li>
                <li> <Link>Advertise with us</Link> </li>
                <li> <Link>Research Reports</Link> </li>
                <li> <Link>Buy Online</Link> </li>
            </ul>

            <ul>Monster
                <li> <Link>About Us</Link> </li>
                <li> <Link>Contact Us</Link> </li>
                <li> <Link>Career with Us</Link> </li>
                <li> <Link>Send Feedback</Link> </li>
                <li> <Link>Testimonials</Link> </li>
                <li> <Link>HTML Sitemap</Link> </li>
                <li> <Link>XML Sitemap</Link> </li>
                <li> <Link>Jobs App</Link> </li>
            </ul>

            <ul>Stay Connected
                <li> <Link to="https://www.facebook.com/monsterindia">Facebook</Link> </li>
                <li> <Link to="https://twitter.com/monster_india">Twitter</Link> </li>
                <li> <Link to="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQGnrx5Xsfo27AAAAXjQRAkYw_2jRN5Q8-P8H_FjbZDJKCDEhPt-NiRPkdFjj3-T0_YhFyMkd4PEfKYHPfTs5ib2sy5SF6w1gN9u2NkA_y9getdQPj73GQU3ZvabLNYXkGxkXrE=&originalReferer=https://www.monsterindia.com/&sessionRedirect=https%3A%2F%2Fin.linkedin.com%2Fcompany%2Fmonster-india">Linkedin</Link> </li>
                <li> <Link to="https://www.instagram.com/accounts/login/">Instagram</Link> </li>
                <li> <Link to="https://www.youtube.com/channel/UCY_u5QE1QR-Rsem1ZexT6LQ/MonsterTV">Youtube</Link> </li>
            </ul>

            <ul>Legal
                <li> <Link>Security and Fraud</Link> </li>
                <li> <Link>Privacy Policy</Link> </li>
                <li> <Link>Terms of Use</Link> </li>
                <li> <Link>Be Safe</Link> </li>
                <li> <Link>Complaints</Link> </li>
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
