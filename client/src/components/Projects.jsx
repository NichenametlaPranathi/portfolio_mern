const Projects = () => {
  const projects = [
    { title: "Portfolio Website", link: "https://github.com/your-username/portfolio" },
    { title: "Todo App", link: "https://github.com/your-username/todo-app" },
    { title: "E-commerce App", link: "https://github.com/your-username/ecommerce" },
  ];

  return (
    <section className="max-w-4xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <ul className="space-y-4">
        {projects.map((project, index) => (
          <li key={index} className="p-4 border rounded shadow hover:bg-gray-100">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold">
              {project.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
