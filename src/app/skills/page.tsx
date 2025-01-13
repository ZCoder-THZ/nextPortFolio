'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { TbHtml } from 'react-icons/tb';
import { MdCss, MdJavascript } from 'react-icons/md';
import {
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaLaravel,
  FaAws,
  FaDocker,
  FaGithub,
  FaPhp,
  FaDigitalOcean,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiJquery,
  SiSass,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiGitlab,
  SiPrisma,
  SiMongodb,
  SiTypescript,
  SiShell,
} from 'react-icons/si';
import { IoBanSharp } from 'react-icons/io5';

const frontEnd = [
  {
    icon: <TbHtml fontSize={45} />,
    name: 'HTML',
  },
  {
    icon: <MdCss fontSize={45} />,
    name: 'CSS',
  },
  {
    icon: <MdJavascript fontSize={45} />,
    name: 'JavaScript',
  },
  {
    icon: <FaReact fontSize={45} />,
    name: 'React',
  },
  {
    icon: <SiNextdotjs fontSize={45} />,
    name: 'Next.js',
  },
  {
    icon: <FaBootstrap fontSize={45} />,
    name: 'Bootstrap',
  },
  {
    icon: <SiTailwindcss fontSize={45} />,
    name: 'Tailwind CSS',
  },
  {
    icon: <SiSass fontSize={45} />,
    name: 'SCSS',
  },
  {
    icon: <SiTypescript fontSize={45} />,
    name: 'TypeScript',
  },
  {
    icon: <SiShell fontSize={45} />,
    name: 'TypeScript',
  },

  {
    icon: <SiJquery fontSize={45} />,
    name: 'jQuery',
  },
];
const Backend = [
  {
    icon: <FaNodeJs fontSize={45} />,
    name: 'NodeJs',
  },
  {
    icon: <FaLaravel fontSize={45} />,
    name: 'Laravel',
  },
  {
    icon: <FaPhp fontSize={45} />,
    name: 'Php',
  },
  {
    icon: <SiExpress fontSize={45} />,
    name: 'Express',
  },
];
const Database = [
  {
    icon: <SiMysql fontSize={45} />,
    name: 'Mysql',
  },
  {
    icon: <SiPostgresql fontSize={45} />,
    name: 'Postgresql',
  },
  {
    icon: <SiPrisma fontSize={45} />,
    name: 'Prisma',
  },
  {
    icon: <SiMongodb fontSize={45} />,
    name: 'Mongodb',
  },
];
const DevOps = [
  {
    icon: <FaDocker fontSize={45} />,
    name: 'Docker',
  },
  {
    icon: <FaAws fontSize={45} />,
    name: 'AWS',
  },
  {
    icon: <FaGithub fontSize={45} />,
    name: 'GitHub',
  },

  {
    icon: <SiGitlab fontSize={45} />,
    name: 'GitLab',
  },
  {
    icon: <FaDigitalOcean fontSize={45} />,
    name: 'Digital Ocean',
  },
];

export default function Skills() {
  return (
    <div className="w-full h-screen flex items-center justify-center p-4">
      <div className="container flex flex-col items-center gap-10">
        <div className="space-y-2 md:space-y-6">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl text-center font-bold uppercase text-accentColor"
          >
            Frontend{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-accentColor ">
              &
            </span>{' '}
            Technologies
          </motion.h1>
          <div className="flex flex-wrap justify-center items-center gap-8 mt-4">
            {frontEnd.map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                <button className="py-2 px-4 bg-accentColor  rounded-md shadow-md">
                  {tech.icon}
                </button>
                <p className="mt-2 text-textColor">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-2 md:space-y-6">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl text-center font-bold uppercase text-accentColor"
          >
            Backend{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-accentColor ">
              &
            </span>{' '}
            Technologies
          </motion.h1>
          <div className="flex flex-wrap justify-center items-center gap-8 mt-4">
            {Backend.map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                <button className="py-2 px-4 bg-accentColor  rounded-md shadow-md">
                  {tech.icon}
                </button>
                <p className="mt-2 text-textColor">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2 md:space-y-6">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl text-center font-bold uppercase text-accentColor"
          >
            Database{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-accentColor ">
              &
            </span>{' '}
            Tools
          </motion.h1>
          <div className="flex flex-wrap justify-center items-center gap-8 mt-4">
            {Database.map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                <button className="py-2 px-4 bg-accentColor  rounded-md shadow-md">
                  {tech.icon}
                </button>
                <p className="mt-2 text-textColor">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2 md:space-y-6">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl text-center font-bold uppercase text-accentColor"
          >
            Devops{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-accentColor ">
              &
            </span>{' '}
          </motion.h1>
          <div className="flex flex-wrap justify-center items-center gap-8 mt-4">
            {DevOps.map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                <button className="py-2 px-4 bg-accentColor  rounded-md shadow-md">
                  {tech.icon}
                </button>
                <p className="mt-2 text-textColor">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
