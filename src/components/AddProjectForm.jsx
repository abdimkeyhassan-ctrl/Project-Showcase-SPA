import { useState } from "react";

export default function AddProjectForm({ addProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newProject = {
      id: Date.now(),
      title,
      description,
    };

    addProject(newProject);
    setTitle("");
    setDescription("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add New Project</h2>

      <input
        type="text"
        placeholder="Project title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        placeholder="Project description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <button type="submit">Add Project</button>
    </form>
  );
}
