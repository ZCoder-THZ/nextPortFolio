import Image from "next/image";
import React from "react";

const logoIcons = [
	{ src: "/Logos/html.png", alt: "html" },
	{ src: "/Logos/css.svg", alt: "css" },
	{ src: "/Logos/js.png", alt: "javascript" },
	{ src: "/Logos/bootstrap.png", alt: "bootstrap" },
	{ src: "/Logos/tailwind.svg", alt: "tailwind" },
	{ src: "/Logos/react.svg", alt: "react js" },
	{ src: "/Logos/next.svg", alt: "next js" },
	{ src: "/Logos/framer.svg", alt: "framer motion" },
	{ src: "/Logos/figma.svg", alt: "figma" },
];

export default function Skills() {
	return (
		<div className="w-full h-screen flex items-center justify-center">
			<div className="container flex flex-col items-center gap-14">
				<div className="space-y-6">
					<h1 className="text-4xl md:text-5xl font-bold uppercase">
						skills{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-tr from-accentColor to-white">
							&
						</span>{" "}
						technologies
					</h1>
					<p className="w-full md:w-8/12 mx-auto text-center text-textColor">
						A Closer Look at My Skill Set and Mastery in Leading-edge
						Technologies.
					</p>
				</div>
				<div className="w-full md:w-8/12 lg:w-6/12 mx-auto flex flex-wrap justify-center gap-6 lg:gap-10">
					{logoIcons.map((logo, index) => (
						<div
							key={index}
							className="grid place-items-center p-4 rounded-xl bg-bgColor shadow-lg shadow-textColor/80"
						>
							<Image
								src={logo.src}
								alt={logo.alt}
								width={50}
								height={50}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
