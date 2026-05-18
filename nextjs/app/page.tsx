import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

import IndependentStudy from "@/assets/images/GDES131_FA25_6.1IndependentStudy_Poster_RBilbrey.png";
import Mascot from "@/assets/images/GDES131_FA25_2.1AnimalMascot_RBilbrey.png";
import ArtNouveau from "@/assets/images/GDES_102_FALL2025_ARTNOUVEAU_FINAL_Regina_Bilbrey_Poster.png";

import linkedin from "@/assets/images/linkedin.svg";
import instagram from "@/assets/images/instagram.svg";
import facebook from "@/assets/images/facebook.svg";

import Navigation from "./components/header/navigation";

export default function Home() {
  return (
    <>
      <Navigation />

      {/* Logo */}
      <div className="logo">
        <h1>
          <Link href="/">RLB</Link>
        </h1>
      </div>

      <main>
        <div className="carousel-container">
          <div className="carousel-wrapper">
            <div className="carousel-item">
              <Image src={IndependentStudy} alt="Independent Study" />
            </div>

            <div className="carousel-item active-center">
              <Image src={Mascot} alt="Mascot" />
            </div>

            <div className="carousel-item">
              <Image src={ArtNouveau} alt="Art Nouveau" />
            </div>
          </div>

          <div className="carousel-controls">
            <button className="carousel-btn prev">‹</button>
            <button className="carousel-btn next">›</button>
          </div>
        </div>
      </main>

      <footer className="footer">
        <h2>Contact</h2>

        <div className="row row-2 footer-row">
          <h3>Project Inquiry</h3>

          <div className="footer-form-column">
            <form>
              <label>Email</label>
              <input type="email" />

              <label>Phone</label>
              <input type="tel" />

              <label>Who are you?</label>
              <input type="text" />

              <label>What is your project?</label>
              <input type="text" />

              <label>Target Date</label>
              <input type="text" />

              <label>Budget</label>
              <input type="text" />

              <label>Location</label>
              <input type="text" />

              <label>How did you hear about me?</label>
              <input type="text" />

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>

        <div className="row row-3 footer-row">
          <h3>Contact Info</h3>

          <div className="footer-contact-column">
            <p>regbilbrey@gmail.com</p>
            <p>970-759-9224</p>

            <div className={styles.socialIcons}>
              <a
                href="https://www.linkedin.com/in/regina-bilbrey"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={linkedin} alt="LinkedIn" className={styles.icon} />
              </a>

              <a
                href="https://www.instagram.com/grit.graphix"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={instagram} alt="Instagram" className={styles.icon} />
              </a>

              <a
                href="https://facebook.com/gritgraphix"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={facebook} alt="Facebook" className={styles.icon} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}