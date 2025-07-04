import React from 'react';

const Projects = () => {
  const projectList = [
    { title: 'To-Do List App', link: '#', desc: 'React-based to-do manager with localStorage support.' },
    { title: 'Rock Paper Scissors', link: '#', desc: 'Fun game built with Python + Tkinter and React version.' },
    { title: 'Calculator', link: '#', desc: 'Simple calculator built with HTML, CSS, JS or React.' },
  ];

  return (
    <section id="projects" className="py-16 px-6 md:px-20 bg-[#0e0e14] text-white">
      <h2 className="text-3xl font-bold text-purple-400 mb-8">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projectList.map((proj, idx) => (
          <div key={idx} className="bg-[#1e1e2f] p-6 rounded-xl shadow hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-semibold text-indigo-300">{proj.title}</h3>
            <p className="text-sm my-2">{proj.desc}</p>
            <a href={proj.link} className="text-sm text-purple-400 hover:underline">View Project →</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
