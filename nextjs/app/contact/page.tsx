import Image from "next/image";
import styles from "./page.module.css";
import linkedin from "@/assets/images/linkedin.svg";
import instagram from "@/assets/images/instagram.svg";
import facebook from "@/assets/images/facebook.svg";

export default function Contact() {
  return (
    <>
        <header className="header">
            <nav className="nav-menu">
                {/* <!-- Navigation List (Left) --> */}
                <ul>
                    <li><a href="projects.html">Projects</a></li>
                    <li><a href="profile.html">Profile</a></li>
                    <li><a href="process.html">Process</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>

            {/* <!-- Logo (Right) --> */}
            <div className="logo">
                <h1><a href="index.html">RLB</a></h1>
            </div>            
        </header>

        <footer className="footer">
            <h2>Contact</h2>
            
            {/* <!-- ROW 2: Project Inquiry --> */}
            <div className="row row-2 footer-row">
                <h3>Project Inquiry</h3>

                <div className="footer-form-column">
                    <form>
                        <label>Email</label>
                        <input type="email"/>

                        <label>Phone</label>
                        <input type="tel"/>

                        <label>Who are you?</label>
                        <input type="text"/>

                        <label>What is your project?</label>
                        <input type="text"/>

            
                        <label>Target Commencement Date</label>
                        <input type="text"/>

        
                        <label>Budget</label>
                        <input type="text"/>

                        <label>Project Location</label>
                        <input type="text"/>

                        <label>How did you hear about me?</label>
                        <input type="text"/>

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>

            {/* <!-- ROW 3: Contact Info --> */}
            <div className="row row-3 footer-row">
                <h3>Contact Info</h3>

                <div className="footer-contact-column">
                    <p>regbilbrey@gmail.com</p>
                    <p>970-759-9224</p>

                                        
                     <div className={styles.socialIcons}>
                            <a href="https://www.linkedin.com/in/regina-bilbrey" target="_blank" title="LinkedIn">
                                <Image src={linkedin} alt="LinkedIn Icon" className={styles.icon} />
                            </a>

                            <a href="https://www.instagram.com/grit.graphix" target="_blank" title="Instagram">
                                <Image src={instagram} alt="Instagram Icon" className={styles.icon} />
                            </a>

                            <a href="http://facebook.com/gritgraphix" target="_blank" title="Facebook">
                                <Image src={facebook} alt="Facebook Icon" className={styles.icon} />
                            </a>
                </div>
                </div>
            </div>


        
        </footer>
    </>
  );
}