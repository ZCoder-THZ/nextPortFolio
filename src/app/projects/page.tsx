'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CiLocationArrow1 } from 'react-icons/ci';

const projects = [
  {
    link: 'https://repohub-digital-agency.onrender.com/',
    src: '/PjImages/repohub.svg',
    alt: 'RepoHub',
    title: 'RepoHub',
    description: 'Digital Marketing Agency project.',
    techStack: ['html', 'css', 'javascript'],
  },
  {
    link: 'https://vapestore.vercel.app/',
    src: '/PjImages/vapestore.svg',
    alt: 'Vape Store',
    title: 'Vape Store',
    description: 'Ecommerce Project UI Design.',
    techStack: ['nextjs', 'tailwind', 'typescript'],
  },
  {
    link: 'https://jarvis.ori0n.team/',
    src: '/PjImages/jarvis.svg',
    alt: 'Jarvis OS',
    title: 'Jarvis OS UI',
    description: 'Creating Circle Animation.',
    techStack: ['html', 'css', 'javascript', 'anime.js', 'scrollreveal.js'],
  },
  {
    link: 'https://ori0n.team/Js-Calculator/',
    src: '/PjImages/calculator.svg',
    alt: 'JS Calculator',
    title: 'Calculator',
    description: 'Creating Javascript Calculator.',
    techStack: ['html', 'css', 'javascript'],
  },
  {
    link: 'https://calendar-96zg.onrender.com/',
    src: '/PjImages/calendar.svg',
    alt: 'JS Calendar',
    title: 'Calendar',
    description: 'Creating Javascript Calendar.',
    techStack: ['html', 'css', 'javascript'],
  },
];

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="container w-full h-screen flex flex-col items-center justify-center gap-4 mx-auto"
    >
      <h1 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-textColor to-white dark:from-bgColor dark:to-accentColor pt-8 pb-2">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full lg:w-10/12 mx-auto mt-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-200 dardrk:boer-gray-800 p-4 rounded-lg flex flex-col justify-between"
          >
            <div>
              <h1 className="text-xl lg:text-2xl font-bold">{project.title}</h1>
              <p className="font-gowun text-sm">{project.description}</p>
              <div className="flex flex-wrap mt-2">
                {project.techStack.map((tech, index) => (
                  <p
                    key={index}
                    className="text-xs px-2 py-1 bg-gradient-to-tr from-accentColor to-textColor rounded-full mr-2 mb-2"
                  >
                    {tech}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center mt-4">
              <Image
                src={project.src}
                alt={project.alt}
                width={200}
                height={200}
                className="rounded-md"
              />
              <Link
                href={project.link}
                target="_blank"
                className="flex items-center gap-1 font-gowun underline text-textColor mt-2"
              >
                View Demo <CiLocationArrow1 />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
