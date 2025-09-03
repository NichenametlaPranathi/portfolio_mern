import React from "react";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal website built with MERN stack.",
      link: "#"
    },
    {
      title: "E-commerce App",
      description: "Full stack shopping app with payments integration.",
      link: "#"
    }
  ];

  return (
    <div className="p-8 bg-white min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="p-6 shadow-lg rounded-xl border">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
            <a href={project.link} className="text-blue-500 hover:underline">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
