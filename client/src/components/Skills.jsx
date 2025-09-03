const Skills = () => {
  const skills = ["React", "Node.js", "Express", "MongoDB", "JavaScript", "HTML", "CSS"];

  return (
    <section className="max-w-3xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
