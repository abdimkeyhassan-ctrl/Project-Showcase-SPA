import ProjectCard from "./ProjectCard";

export default function ProjectList({ projects }) {
  if (projects.length === 0) {
    return <p>No projects found.</p>;
  }

  return (
    <section className="grid">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}
