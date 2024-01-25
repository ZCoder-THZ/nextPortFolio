import React from "react";
import Link from "next/link";
import Button from "../ui/Button";

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
				<Button>
					<Link href={"/contact"}>Contact Me</Link>
				</Button>
			</ul>
		</div>
	);
}
