import React from "react";
import Link from "next/link";

export default function Navigation() {
	return (
		<div className="absolute top-0 w-full flex items-center justify-between px-10 lg:px-24 py-4">
			<Link href={"/"} className="font-serif text-white text-xl">
				mayzinei
			</Link>
			<ul className="flex items-center gap-12 text-white">
				<li>
					<Link href={"/about"}>About</Link>
				</li>
				<li>
					<Link href={"/skills"}>Skills</Link>
				</li>
				<li>
					<Link href={"/projects"}>Projects</Link>
				</li>
				<li className="px-4 py-2 bg-gradient-to-tr hover:bg-gradient-to-tl shadow-md from-accentColor to-textColor rounded-lg">
					<Link href={"/contact"}>Contact Me</Link>
				</li>
			</ul>
		</div>
	);
}
