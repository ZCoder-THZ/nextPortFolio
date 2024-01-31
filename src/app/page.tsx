"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import About from "./about/page";
import Contact from "./contact/page";
import Projects from "./projects/page";
import Skills from "./skills/page";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineDownload } from "react-icons/ai";
import { MdArrowOutward } from "react-icons/md";
import Button from "@/components/ui/Button";
import Link from "next/link";
import SvgText from "@/components/ui/SvgText";

const icons = [
	{ link: "/", icon: <FaLinkedinIn /> },
	{ link: "/", icon: <FaFacebookF /> },
	{ link: "/", icon: <FaDiscord /> },
	{ link: "/", icon: <AiOutlineMail /> },
];

export default function Home() {
	return (
		<main className="bg-gradient-to-tr from-bgColor to-bgColor/90">
			<div className="relative w-full h-screen flex flex-col items-center">
				<SvgText />
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 2 }}
					className="container w-full lg:w-6/12 mx-auto grid place-items-center absolute top-0"
				>
					<Image
						src={"/my-image.png"}
						alt="text1"
						width={400}
						height={400}
						className="w-[250px] md:w-[380px] h-auto object-contain mt-10"
					/>
					<div className="flex items-center gap-3 md:gap-6 text-white mt-4">
						<Button>
							<div className="flex items-center gap-1 text-xs md:text-base">
								<Link href={"/"}>Get Resume</Link>
								<AiOutlineDownload className="text-lg" />
							</div>
						</Button>
						<Button>
							<div className="flex items-center gap-1 text-xs md:text-base">
								<Link href={"/"}>See Projects</Link>
								<MdArrowOutward />
							</div>
						</Button>
					</div>
				</motion.div>
			</div>
			<About />
			<Skills />
			<Projects />
			<Contact />
		</main>
	);
}
