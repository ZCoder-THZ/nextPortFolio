'use client';
import React, { useEffect } from 'react';
import ContactIcons from '@/components/ui/ContactIcons';
import { motion } from 'framer-motion';

export default function About() {
  useEffect(() => {
    const spans = document.querySelectorAll(
      '.hover-text span'
    ) as NodeListOf<HTMLSpanElement>;

    spans.forEach((span) => {
      span.addEventListener('mouseenter', function (this: typeof span) {
        this.style.fontWeight = '900';
        this.style.color = 'rgb(238, 242, 255)';

        const leftNeighbor = this.previousElementSibling as HTMLSpanElement;
        const rightNeighbor = this.nextElementSibling as HTMLSpanElement;

        if (leftNeighbor) {
          leftNeighbor.style.fontWeight = '500';
          leftNeighbor.style.color = 'rgb(238, 242, 255)';
        }
        if (rightNeighbor) {
          rightNeighbor.style.fontWeight = '500';
          rightNeighbor.style.color = 'rgb(238, 242, 255)';
        }
      });

      span.addEventListener('mouseleave', function (this: typeof span) {
        this.style.fontWeight = '100';
        this.style.color = 'rgb(238, 242, 255)';

        const leftNeighbor = this.previousElementSibling as HTMLSpanElement;
        const rightNeighbor = this.nextElementSibling as HTMLSpanElement;

        if (leftNeighbor) {
          leftNeighbor.style.fontWeight = '100';
          leftNeighbor.style.color = 'rgb(238, 242, 255)';
        }

        if (rightNeighbor) {
          rightNeighbor.style.fontWeight = '100';

          rightNeighbor.style.color = 'rgb(238, 242, 255)';
        }
      });
    });
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full h-screen flex items-center justify-center"
    >
      <div className="container  mx-auto flex flex-col lg:flex-row gap-4 lg:gap-20">
        <h2 className="uppercase text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accentColor dark:from-bgColor to-textColor dark:to-accentColor shrink-0">
          about me
        </h2>
        <div>
          <p className="hover-text font-gowun text-justify text-lg md:text-2xl tracking-tighter leading-6 md:leading-9 font-thin text-textColor dark:text-bgColor">
            <Text>
              Hello, I'm Ihan Htike Zaw, a Fullstack Developer with a strong
              passion for crafting dynamic and efficient web applications. Over
              the past 5 years, I've honed my skills through 2 years of
              dedicated learning and 3 years of hands-on experience in the
              industry.
            </Text>
            <br />
            <Text>
              My technical expertise spans a diverse range of technologies
              including HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, React,
              Next.js, PHP, Laravel, jQuery, Node.js, and Git. This
              comprehensive skill set enables me to build robust and scalable
              web applications from the ground up.
            </Text>
            <br />
            <Text>
              In addition to development, I have substantial deployment
              experience on AWS EC2 and Digital Ocean, utilizing tools such as
              Docker and GitHub Actions to ensure smooth and efficient
              application launches.
            </Text>
            <br />
            <Text>
              I thrive in collaborative environments and take pride in my
              ability to work seamlessly within teams to bring innovative
              projects to life. My proactive approach and strong communication
              skills allow me to contribute effectively to any project.
            </Text>
            <br />
            <Text>
              I'm eager to bring my expertise to a forward-thinking company
              where I can contribute to exciting projects and grow alongside a
              talented team.
            </Text>
          </p>
          <ContactIcons />
        </div>
      </div>
    </motion.div>
  );
}
const Text = ({ children }: { children: string }) => {
  return (
    <>
      {children.split('').map((child, idx) => (
        <span
          style={{
            transition: '0.35s font-weight, 0.35s color',
          }}
          key={idx}
        >
          {child}
        </span>
      ))}
    </>
  );
};
