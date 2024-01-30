"use client";
import React, { useState } from "react";
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
		<div
			className={`absolute top-0 w-full flex items-start lg:items-center justify-between px-5 md:px-14 lg:px-24 py-4 ${
				navMenuOpen
					? "bg-bgColor/80 lg:bg-transparent backdrop-blur-md h-screen lg:h-auto z-10 lg:z-0"
					: ""
			}`}
		>
			<Link href={"/"} className="font-serif text-white text-xl">
				mayzinei
			</Link>

			<ul
				className={`lg:flex items-center gap-12 text-white ${
					navMenuOpen
						? "flex flex-col lg:flex-row mt-20 lg:mt-0"
						: "hidden"
				}`}
			>
				{navLinks.map((navLink, index) => (
					<li
						key={index}
						className="text-lg lg:text-base focus:text-accentColor hover:text-textColor"
					>
						<Link href={navLink.link}>{navLink.title}</Link>
					</li>
				))}
				<Button>
					<Link href={"/contact"}>Contact Me</Link>
				</Button>
			</ul>

			<button
				className="w-[80px] flex justify-end text-xl text-white lg:hidden cursor-pointer"
				onClick={() => setNavMenuOpen(!navMenuOpen)}
			>
				{navMenuOpen ? <GrClose /> : <FiMenu />}
			</button>
		</div>
	);
}
