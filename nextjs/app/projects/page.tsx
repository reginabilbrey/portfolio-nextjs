import Image from "next/image";
import Link from "next/link";
import projects from "@/app/data/projects"

import Navigation from "@/components/header/navigation";


export default function ProjectsPage() {
  return (

    <>
      <Navigation />

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
</>
  )
}