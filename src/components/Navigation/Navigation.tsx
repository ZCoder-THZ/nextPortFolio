"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "../ui/Button";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";

export default function Navigation() {
	const navLinks = [
		{ link: "/about", title: "About" },
		{ link: "/skills", title: "Skills" },
		{ link: "/projects", title: "Projects" },
	];

	const [navMenuOpen, setNavMenuOpen] = useState(false);

	return (
		<motion.div
			initial={{ opacity: 0, y: 5 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 1, duration: 0.5 }}
			className={`fixed top-0 w-full flex items-start lg:items-center justify-between px-5 md:px-14 lg:px-24 py-3 md:py-6 z-10 bg-transparent  backdrop-blur-md${
				navMenuOpen ? "bg-bgColor backdrop-blur-md h-screen lg:h-auto" : ""
			}`}
		>
			<Link
				href={"/"}
				className="font-sacra text-white dark:text-bgColor text-2xl md:text-3xl"
			>
				Mayzinei
			</Link>

			<ul
				className={`lg:flex items-center gap-12 text-white dark:text-bgColor ${
					navMenuOpen
						? "flex flex-col lg:flex-row mt-20 lg:mt-0"
						: "hidden"
				}`}
			>
				{navLinks.map((navLink, index) => (
					<li
						key={index}
						className="text-lg lg:text-base hover:text-textColor dark:hover:text-accentColor"
					>
						<Link href={navLink.link} passHref>
							<a>{navLink.title}</a>
						</Link>
					</li>
				))}
				<Button>
					<Link href={"/contact"}>Contact Me</Link>
				</Button>
			</ul>

			<button
				className="w-[70px] h-auto flex justify-end mt-2 text-xl text-white dark:text-bgColor lg:hidden cursor-pointer"
				onClick={() => setNavMenuOpen(!navMenuOpen)}
			>
				{navMenuOpen ? <GrClose /> : <FiMenu />}
			</button>
		</motion.div>
	);
}
