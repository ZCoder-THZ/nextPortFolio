'use client';
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const roles = ['Full Stack Web Developer'];
const colors = [' #3F4A99'];

import Button from '@/components/ui/Button';

export default function Home() {
  const [role, setRole] = useState(roles[0]);
  const [color, setColor] = useState(colors[0]);
  const controls = useAnimation();
  const imageControls = useAnimation();

  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const shakeVariants = {
    shake: {
      y: [0, -10, 10, -10, 10, 0],
      transition: { duration: 0.5 },
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      controls.start('visible');
      setRole(roles[Math.floor(Math.random() * roles.length)]);
      setColor(colors[Math.floor(Math.random() * colors.length)]);
    }, 500); // Adjust the interval duration as needed

    return () => clearInterval(interval);
  }, [controls]);

  useEffect(() => {
    const handleScroll = () => {
      imageControls.start('shake');
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [imageControls]);

  return (
    <div className="min-h-screen mt-36">
      <div className="flex justify-center mt-5">
        <motion.div animate={imageControls} >
          <Image
            width={600}
            height={600}
            src="/myimg2.png"
            alt="home"
            className=""
          />
        </motion.div>
      </div>
      <div className="text-white flex justify-center items-center">
        <main className="text-center">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <h1
              className="text-6xl font-bold mb-4 dark:text-black"
              style={{ color: '#3F4A99' }}
            >
              Hello, I &apos;m Than Htike Zaw
            </h1>
            <motion.p
              className="text-2xl"
              style={{ color: color }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              key={role} // Ensure the key changes to trigger re-animation
            >
              I &apos; m a {role}
            </motion.p>
          </motion.div>
          <div className="mt-8 mx-auto w-full md:w-2/3">
            <p className="text-lg text-gray-300 mt-4 dark:text-black">
              I &apos;m passionate about creating efficient and scalable web
              applications. With expertise in both front-end and back-end
              technologies, I bring a comprehensive approach to building
              seamless user experiences.
            </p>
            <div className="mt-8"></div>
            <Link
              href="https://github.com/ZCoder-THZ"
              className=" mt-4 inline-block px-4 rounded-md py-2"
              style={{ backgroundColor: '#3F4A99' }}
            >
              Github
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}



