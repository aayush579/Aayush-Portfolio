import React from 'react';
import { FaReact, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { icon: <FaReact size={30} />, name: 'React' },
    { icon: <SiTailwindcss size={30} />, name: 'TailwindCSS' },
    { icon: <SiJavascript size={30} />, name: 'JavaScript' },
    { icon: <FaPython size={30} />, name: 'Python' },
    { icon: <FaGitAlt size={30} />, name: 'Git' },
  ];

  return (
    <section className="py-16 px-6 md:px-20 bg-[#11111b] text-gray-300">
      <h2 className="text-3xl font-bold text-indigo-400 mb-6">Tech Stack</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        {skills.map((skill, i) => (
          <div key={i} className="flex flex-col items-center hover:scale-110 transition-transform">
            <div>{skill.icon}</div>
            <span className="mt-2 text-sm">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
