import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import heroSvg from '../assets/hero-illustration.svg';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left px-4 bg-gradient-to-b from-[#0e0e14] to-[#1a1a2e] gap-8">
      <div className="flex-1">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Aayush Singh
        </motion.h1>

        <motion.div
          className="mt-4 text-xl md:text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Typewriter
            options={{
              strings: ['Web Developer', 'Python Programmer', 'Tech Enthusiast'],
              autoStart: true,
              loop: true,
            }}
          />
        </motion.div>

        <div className="mt-8 flex gap-4 justify-center md:justify-start">
          <a href="#projects" className="px-6 py-2 bg-indigo-600 text-white rounded-full shadow hover:bg-indigo-700">Projects</a>
          <a href="/resume.pdf" className="px-6 py-2 border border-indigo-600 text-indigo-400 rounded-full hover:bg-indigo-800">Resume</a>
        </div>
      </div>
      <div className="flex-1 max-w-md">
        <img src={heroSvg} alt="Developer Illustration" className="w-full" />
      </div>
    </section>
  );
};

export default Hero;
