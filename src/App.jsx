import { useState } from "react";
import Header from "./components/Header";
import AddProjectForm from "./components/AddProjectForm";
import ProjectList from "./components/ProjectList";

export default function App() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Portfolio Website",
      description: "Personal portfolio built with React",
    },
    {
      id: 2,
      title: "E-commerce App",
      description: "Online store with shopping cart",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  function addProject(newProject) {
    setProjects([...projects, newProject]);
  }

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <main className="container">
        <AddProjectForm addProject={addProject} />
        <ProjectList projects={filteredProjects} />
      </main>
    </>
  );
}
