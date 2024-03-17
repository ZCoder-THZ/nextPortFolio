import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

const icons = [
	{ link: "/", icon: <FaGithub /> },
	{ link: "/", icon: <FaFacebookF /> },
	{ link: "/", icon: <FaDiscord /> },
	{ link: "/", icon: <AiOutlineMail /> },
];
export default function ContactIcons() {
	return (
		<div className="flex items-center gap-4 mt-4">
			{icons.map((icon, index) => (
				<div
					key={index}
					className="p-2 text-textColor dark:text-bgColor hover:text-white dark:hover:text-white border border-textColor dark:border-bgColor hover:border-white rounded-md hover:bg-textColor/20 dark:hover:bg-bgColor hover:shadow-2xl duration-300"
				>
					<Link href={icon.link}>{icon.icon}</Link>
				</div>
			))}
		</div>
	);
}
