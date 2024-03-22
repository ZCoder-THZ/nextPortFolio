"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CiLocationArrow1 } from "react-icons/ci";

const projects = [
	{
		link: "https://thz.shwemmhost.com/",
		src: "/Projects/repohub.svg",
		alt: "RepoHub",
		title: "RepoHub",
		description: "Degital Marketing Agency project.",
		techStack: ["html", "css", "javascript"],
	},
	{
		link: "https://jarvis.ori0n.team/",
		src: "/Projects/jarvis.svg",
		alt: "Jarvis OS",
		title: "Jarvis OS UI",
		description: "Creating Circle Animation",
		techStack: ["html", "css", "javascript", "anime.js", "scrollreveal.js"],
	},
	{
		link: "https://ori0n.team/Js-Calculator/",
		src: "/Projects/calculator.svg",
		alt: "JS Calculator",
		title: "Calculator",
		description: "Creating Javascript Calculator",
		techStack: ["html", "css", "javascript"],
	},
	{
		link: "https://calendar-96zg.onrender.com/",
		src: "/Projects/calendar.svg",
		alt: "JS Calendar",
		title: "Calendar",
		description: "Creating Javascript Calendar",
		techStack: ["html", "css", "javascript"],
	},
	// {
	// 	link: "https://ori0n.team/Js-Calculator/",
	// 	src: "/Projects/calculator.png",
	// 	alt: "JS Calculator",
	// 	title: "Calculator",
	// 	description: "Creating Javascript Calculator",
	// 	techStack: ["html", "css", "javascript"],
	// },
];

export default function Projects() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className="container w-full h-screen flex flex-col items-center justify-center gap-4"
		>
			<h1 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-textColor to-white dark:from-bgColor dark:to-accentColor pt-8 pb-2">
				My Projects
			</h1>
			<div className="w-full lg:w-10/12 mx-auto h-[70vh] overflow-y-auto dark:text-bgColor">
				{projects.map((project, index) => (
					<div
						key={index}
						className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b-[0.5px] border-textColor px-2 md:px-5 pb-10 pt-5 md:p-10"
					>
						<div className="flex flex-col justify-between gap-2">
							<div>
								<h1 className="text-2xl font-bold">{project.title}</h1>
								<p className="font-gowun text-sm">
									{project.description}
								</p>
							</div>
							<div className="flex flex-wrap items-center gap-2">
								{project.techStack.map((tech, index) => (
									<p
										key={index}
										className="text-sm px-2 py-1 bg-gradient-to-tr from-accentColor to-textColor rounded-full"
									>
										{tech}
									</p>
								))}
							</div>
						</div>
						<div className="flex flex-col items-center gap-4">
							<Image
								src={project.src}
								alt={project.alt}
								width={400}
								height={400}
								className="w-full h-full object-contain"
							/>
							<Link
								href={project.link}
								target="blank"
								className="flex items-center gap-1 font-gowun underline text-textColor"
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
