import React from "react";
import Link from "next/link";
import Button from "../ui/Button";
import { FiMenu } from "react-icons/fi";

export default function Navigation() {
	return (
		<div className="absolute top-0 w-full flex items-center justify-between px-10 lg:px-24 py-4">
			<Link href={"/"} className="font-serif text-white text-xl">
				mayzinei
			</Link>
			<div className="group text-xl text-white lg:hidden">
				<FiMenu />
			</div>
			<ul className="flex-col lg:flex-row items-center gap-8 lg:gap-12 text-white hidden group-hover:flex lg:flex">
				<li className="focus:text-accentColor hover:text-textColor">
					<Link href={"/about"}>About</Link>
				</li>
				<li className="focus:text-accentColor hover:text-textColor">
					<Link href={"/skills"}>Skills</Link>
				</li>
				<li className="focus:text-accentColor hover:text-textColor">
					<Link href={"/projects"}>Projects</Link>
				</li>
				<Button>
					<Link href={"/contact"}>Contact Me</Link>
				</Button>
			</ul>
		</div>
	);
}
