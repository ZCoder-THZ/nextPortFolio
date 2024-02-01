import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

const icons = [
	{ link: "/", icon: <FaLinkedinIn /> },
	{ link: "/", icon: <FaFacebookF /> },
	{ link: "/", icon: <FaDiscord /> },
	{ link: "/", icon: <AiOutlineMail /> },
];

export default function About() {
	return (
		<div className="w-full h-screen flex items-center justify-center">
			<div className="container lg:w-9/12 mx-auto flex flex-col md:flex-row gap-8 md:gap-20">
				<h2 className="uppercase text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accentColor to-textColor shrink-0">
					about me
				</h2>
				<div>
					<p className="font-unna text-justify leading-8 tracking-tight text-2xl text-transparent bg-transparent bg-clip-text bg-gradient-to-b from-textColor to-white/90">
						Hello, I'm May Zin Ei, a dedicated Frontend Developer with a
						passion for creating responsive web applications. I specialize
						in designing interfaces that seamlessly adapt to diverse
						devices, prioritizing accessibility for a broad audience.{" "}
						<br />
						My collaborative spirit shines within teams, contributing
						creativity and effective communication. Continual learning
						sets me apart, mastering both frontend and backend for
						comprehensive development skills.
						<br /> Join me in creating captivating and seamless digital
						experiences. Let's embark on the journey of crafting something
						amazing together!
					</p>
					<div className="flex items-center gap-4 mt-4">
						{icons.map((icon, index) => (
							<div
								key={index}
								className="p-2 border rounded-md hover:bg-white/20 duration-300"
							>
								<Link href={icon.link}>{icon.icon}</Link>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
