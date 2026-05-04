import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css"
import Monogram from "@/assets/images/Monogram_RBilbrey.png";
import RecipeOnesheet from "@/assets/images/GDES131_FA25_5.1RecipeOnesheet_RBilbrey.png";
import RepeatingPattern from "@/assets/images/GDES131_FA25_2.3RepeatingPattern_RBilbrey_Scaled Pattern.png";
import ArtNouveauPoster from "@/assets/images/GDES_102_FALL2025_ARTNOUVEAU_FINAL_Regina_Bilbrey_Poster.png";
import AnimalMascot from "@/assets/images/GDES131_FA25_2.1AnimalMascot_RBilbrey.png";
import IndependentStudyPoster from "@/assets/images/GDES131_FA25_6.1IndependentStudy_Poster_RBilbrey.png";
import linkedin from "@/assets/images/linkedin.svg";
import instagram from "@/assets/images/instagram.svg";
import facebook from "@/assets/images/facebook.svg";
import Navigation from "@/components/header/navigation";
import projects from "@/app/data/projects"

export default function ProjectsPage() {
  return (
    <main>
      <h1>Projects</h1>

      {projects.map((project) => (
        <article key={project.slug}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <Link href={`/projects/${project.slug}`}>
            View Project
          </Link>
        </article>
      ))}
    </main>
  )
}

export default function Projects() {
  return (
    <>
        <Navigation />

         {/* <!-- Logo (Right) --> */}
        <div className="logo">
            <h1><a href="index.html">RLB</a></h1>
        </div>        

        <section className="projects">
            <h2>Projects</h2>

            <div className="project-wrapper">
                {/* <!-- Row 1 --> */}
                <div className="row row-1">
                    <div className="project-box">
                        <Image src={Monogram} alt="Monogram" />
                    </div>
                </div>

                {/* <!-- Row 2 --> */}
                <div className="row row-2">
                    <div className="project-box">
                        <Image src={RecipeOnesheet} alt="Recipe One-sheet" />
                    </div>

                    <div className="project-box">
                        <Image src={RepeatingPattern} alt="Repeating Pattern" />
                    </div>
                </div>

                {/* <!-- Row 3 --> */}
                <div className="row row-3">
                    <div className="project-box">
                        <Image src={ArtNouveauPoster} alt="Art Nouveau Poster" />
                    </div>
                </div>

                {/* <!-- Row 4 --> */}
                <div className="row row-4">
                    <div className="project-box">
                        <Image src={AnimalMascot} alt="Animal Mascot" />
                    </div>

                    <div className="project-box">
                        <Image src={IndependentStudyPoster} alt="Independent Study Poster" />
                    </div>
                </div>
            </div>

            <a className="see-all" href="#">See All Projects</a>
    
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