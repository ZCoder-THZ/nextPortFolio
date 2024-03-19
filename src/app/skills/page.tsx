"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SkillChart from "@/components/ui/SkillChart";

const logoIcons = [
	{ src: "/Logos/html.svg", alt: "html", percentage: 90 },
	{ src: "/Logos/css.svg", alt: "css", percentage: 80 },
	{ src: "/Logos/javascript.svg", alt: "javascript", percentage: 60 },
	{ src: "/Logos/typescript.svg", alt: "typescript", percentage: 50 },
	{ src: "/Logos/bootstrap.svg", alt: "bootstrap", percentage: 40 },
	{ src: "/Logos/tailwind.svg", alt: "tailwind", percentage: 80 },
	{ src: "/Logos/react.svg", alt: "react js", percentage: 70 },
	{ src: "/Logos/next.svg", alt: "next js", percentage: 60 },
	{ src: "/Logos/nodejs.svg", alt: "node js", percentage: 40 },
	{ src: "/Logos/prisma.svg", alt: "prisma", percentage: 40 },
	{ src: "/Logos/framer.svg", alt: "framer motion", percentage: 60 },
	{ src: "/Logos/github.svg", alt: "github", percentage: 60 },
	{ src: "/Logos/figma.svg", alt: "figma", percentage: 80 },
];

export default function Skills() {
	const [isFlipped, setIsFlipped] = useState(false);
	const [isAnimated, setIsAnimated] = useState(false);
	const handleFlip = () => {
		if (!isAnimated) {
			setIsFlipped(!isFlipped);
			setIsAnimated(true);
		}
	};
	return (
		<div className="w-full h-screen flex items-center justify-center">
			<div className="container flex flex-col items-center gap-10">
				<div className="space-y-2 md:space-y-6">
					<motion.h1
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1 }}
						className="text-4xl md:text-5xl text-center font-bold uppercase dark:text-bgColor"
					>
						skills{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-tr from-accentColor dark:from-accentColor to-white dark:to-textColor">
							&
						</span>{" "}
						technologies
					</motion.h1>
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1 }}
						className="w-full md:w-8/12 mx-auto font-gowun text-center text-textColor dark:text-accentColor"
					>
						A Closer Look at My Skill Set and Mastery in Leading-edge
						Technologies.
					</motion.p>
				</div>
				<div className="w-full md:w-9/12 lg:w-6/12 mx-auto flex flex-wrap justify-center gap-2 md:gap-8">
					{logoIcons.map((logo, index) => (
						<div
							key={index}
							onClick={handleFlip}
							className="flip-icon w-16 h-16 cursor-pointer"
						>
							<AnimatePresence>
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									whileHover={{ rotateY: isFlipped ? 0 : 180 }}
									transition={{
										duration: 0.3,
										animationDirection: "normal",
									}}
									onAnimationComplete={() => setIsAnimated(false)}
									className="flip-icon-inner w-[90%] h-[90%] md:w-full md:h-full"
								>
									<div className="flip-icon-front w-full h-full grid place-items-center p-4 rounded-xl bg-bgColor shadow-lg shadow-textColor">
										<Image
											src={logo.src}
											alt={logo.alt}
											width={30}
											height={30}
										/>
									</div>
									<div className="flip-icon-back text-white w-full h-full grid place-items-center p-4 rounded-xl bg-bgColor shadow-lg shadow-textColor/80">
										<SkillChart percentage={logo.percentage} />
									</div>
								</motion.div>
							</AnimatePresence>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
