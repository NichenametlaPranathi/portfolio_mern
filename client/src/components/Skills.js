import React from "react";

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-900">
      <h2 className="text-4xl font-bold mb-4">Skills</h2>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 text-lg">
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>JavaScript (ES6+)</li>
        <li>TailwindCSS</li>
        <li>Git & GitHub</li>
        <li>REST APIs</li>
      </ul>
    </section>
  );
}
