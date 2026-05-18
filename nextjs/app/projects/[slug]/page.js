import projects from "@/app/data/projects";
import Image from "next/image";
import Placeholder from "@/assets/images/placeholder.jpg";

export default function ProjectPage({ params }) {
  const project = projects.find(
    (project) => project.slug === params.slug
  );

  if (!project) {
    return <h1>Project not found</h1>;
  }

  return (
    <main>
      <h1>{project.title}</h1>
      <p>{project.description}</p>

      {/* Main project image */}
      <Image
        src={project.image?.src || Placeholder}
        alt={project.image?.alt || project.title}
        width={800}
        height={600}
      />

      {/* Process steps */}
      <section>
        <h2>Process</h2>

        {project.process?.map((step, index) => (
          <div key={index}>
            <h3>{step.title}</h3>
            <p>{step.description}</p>

            <Image
              src={step.image?.src || Placeholder}
              alt={step.image?.alt || step.title}
              width={600}
              height={400}
            />
          </div>
        ))}
      </section>
    </main>
  );
}