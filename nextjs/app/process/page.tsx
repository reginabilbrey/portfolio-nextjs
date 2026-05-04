import Image from "next/image";
import styles from "./page.module.css"
import Link from "next/link";
import linkedin from "@/assets/images/linkedin.svg";
import instagram from "@/assets/images/instagram.svg";
import facebook from "@/assets/images/facebook.svg";

import Navigation from "@/components/header/navigation";



export default function Process() {
  return (
    <>
    <Navigation />

    {/* <!-- Logo (Right) --> */}
        <div className="logo">
            <h1><a href="index.html">RLB</a></h1>
        </div>        

    <section className="process">
        <h2>Process</h2>

        <div className="row row-1 tag-row">
            <div className="tagline">
                <p>Conceptualization to Completion
                </p>
                <a className="lets-go" href="#">Let's Go</a>
            </div>
        
            <div className="concept">
                <Image src="/images/placeholder.jpg" alt="Concept placeholder" width={800} height={600} />
            </div>
        </div>
        
        <div className="row row-2 process-row">
            <div className="design-process">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna tortor, consectetur non neque sed, auctor malesuada enim. Proin laoreet molestie justo, quis aliquam odio lacinia sit amet.
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