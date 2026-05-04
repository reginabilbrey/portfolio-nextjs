import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css"
import headshot from "@/assets/images/Headshot.jpg";
import linkedin from "@/assets/images/linkedin.svg";
import instagram from "@/assets/images/instagram.svg";
import facebook from "@/assets/images/facebook.svg";
import Navigation from "@/components/header/navigation";

export default function About() {
  return (
        <>
            <Navigation />

            {/* <!-- Logo (Right) --> */}
        <div className="logo">
            <h1><a href="index.html">RLB</a></h1>
        </div>        

                <section className="profile">
                    <h2>Profile</h2>

                    <div className="row row-1 tag-row">
                        <div className="tagline">
                            <p>Solving problems through visual communication.
                            </p>
                            <a className="learn-more" href="#">Learn More</a>
                        </div>
                    
                        <div className={styles.headshot}>
                            <Image src={headshot} alt="Headshot"/>
                        </div>
                    </div>

                    <div className="row row-2 experience-row">
                        <div className="experience">
                            <p>
                                Currently working towards my Associate of Applied Science Degree in the Graphic and Web Design program at North Idaho College, located in Coeur d'Alene, Idaho.  Slated to graduate in Spring 2027. 
                            </p>
                        </div>
                    </div>
                    
                    <div className="row row-3 education-row">
                        <div className="education">
                            <p>
                                I did not start my design journey through the traditional door. Its been a long and winding path of trial and error, victories and defeats, introspection and reinvention of self.  I have always been drawn to the creative process and I am looking forward to expanding and improving my skills to design with clarity, purpose and intention.
                            </p>                  
                        </div>
                    </div>
                </section>

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
        </>
    );
}