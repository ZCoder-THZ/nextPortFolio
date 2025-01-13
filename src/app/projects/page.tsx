'use client';
import React, { Suspense, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CiLocationArrow1 } from 'react-icons/ci';
import Button from '@/components/ui/Button';
import FsLightbox from 'fslightbox-react';
const projects = [
  {
    link: 'https://nex-commerce.vercel.app/',
    src: '/PjImages/next-commerce.png',
    images: [
      '/PjImages/repohub.svg',
      '/PjImages/repohub.svg',
      '/PjImages/repohub.svg',
    ],
    id: 1,
    alt: 'NexCommerce',
    title: 'NexCommerce',
    description: 'Digital Marketing Agency project.',
    techStack: ['html', 'css', 'javascript', 'react', 'nextjs', 'tailwindcss'],
  },
  {
    link: 'https://issue-tracker-six-mu.vercel.app',
    src: '/PjImages/repohub.svg',
    alt: 'IssueTracker',
    images: [
      '/PjImages/repohub.svg',
      '/PjImages/next-commerce.png',
      '/PjImages/repohub.svg',
    ],
    id: 2,
    title: 'IssueTracker',
    description: 'Digital Marketing Agency project.',
    techStack: ['html', 'css', 'javascript', 'react', 'nextjs', 'tailwindcss'],
  },
  {
    link: 'https://issue-tracker-six-mu.vercel.app',
    src: '/PjImages/repohub.svg',
    alt: 'Pizza Order',
    images: [
      '/PjImages/repohub.svg',
      '/PjImages/next-commerce.png',
      '/PjImages/repohub.svg',
    ],
    id: 3,
    title: 'Pizza Order',
    description: 'Digital Marketing Agency project.',
    techStack: ['html', 'css', 'javascript', 'react', 'nextjs', 'tailwindcss'],
  },
  {
    link: 'https://issue-tracker-six-mu.vercel.app',
    src: '/PjImages/repohub.svg',
    alt: 'Resume Builder',
    images: [
      '/PjImages/repohub.svg',
      '/PjImages/next-commerce.png',
      '/PjImages/repohub.svg',
    ],
    id: 2,
    title: 'Resume Builder',
    description: 'Digital Marketing Agency project.',
    techStack: ['html', 'css', 'javascript', 'react', 'nextjs', 'tailwindcss'],
  },
  {
    link: 'https://issue-tracker-six-mu.vercel.app',
    src: '/PjImages/repohub.svg',
    alt: 'Uni Search',
    images: [
      '/PjImages/repohub.svg',
      '/PjImages/next-commerce.png',
      '/PjImages/repohub.svg',
    ],
    id: 2,
    title: 'Uni Search',
    description: 'Digital Marketing Agency project.',
    techStack: ['html', 'css', 'javascript', 'react', 'nextjs', 'tailwindcss'],
  },
];

function FallbackImage() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-700">
      <p className="text-xs text-gray-500">Image failed to load</p>
    </div>
  );
}

function ImageWithFallback({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  const [imgSrc, setImgSrc] = useState(src);
  const [error, setError] = useState(false);

  return (
    <>
      {!error ? (
        <Image
          src={imgSrc}
          alt={alt}
          width={width}
          height={height}
          className="rounded-md"
          onError={() => setError(true)}
        />
      ) : (
        <FallbackImage />
      )}
    </>
  );
}

export default function Projects() {
  const [toggler, setToggler] = useState(false);
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
            className="border border-gray-200 dark:border-gray-800 p-4 rounded-lg flex flex-col justify-between"
          >
            <div>
              <h1 className="text-xl lg:text-2xl font-bold text-textColor">
                {project.title}
              </h1>
              <p className="font-gowun text-sm dark:text-textColor">
                {project.description}
              </p>
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
              <Suspense
                fallback={
                  <div className="w-48 h-48 flex items-center justify-center bg-gray-300 dark:bg-gray-800">
                    <p className="text-sm text-gray-500">Loading image...</p>
                  </div>
                }
              >
                <div
                  onClick={() => setToggler(!toggler)}
                  className="cursor-pointer"
                >
                  <ImageWithFallback
                    src={project.src}
                    alt={project.alt}
                    width={200}
                    height={200}
                  />
                </div>
              </Suspense>

              <>
                <FsLightbox toggler={toggler} sources={project.images} />
              </>

              <div className="flex justify-between">
                <a
                  href={project.link}
                  target="_blank"
                  className="flex items-center gap-1 font-gowun underline text-textColor mt-2"
                >
                  View Demo <CiLocationArrow1 />
                </a>
                <Link
                  href={'/projects/' + project.id}
                  className="flex items-center gap-1 font-gowun underline text-textColor mt-2"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
