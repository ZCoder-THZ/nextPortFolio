"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { AiOutlineDownload } from "react-icons/ai";
import { MdArrowOutward } from "react-icons/md";
import Button from "@/components/ui/Button";
import Link from "next/link";
import SvgText from "@/components/ui/SvgText";

export default function Home() {
	return (
		<main className="relative w-full h-screen flex flex-col items-center justify-start md:justify-center">
			<SvgText />
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1, duration: 2 }}
				className="container w-full lg:w-6/12 absolute grid place-items-center"
			>
				<Image
					src={"/myImage.svg"}
					alt="text1"
					width={400}
					height={400}
					className="w-[250px] md:w-[320px] lg:w-[380px] h-auto object-contain mt-20 md:mt-10"
				/>
				<div className="flex items-center gap-3 md:gap-6 mt-4">
					<Button>
						<div className="flex items-center gap-1 text-sm md:text-base">
							<Link href={"/my_cv.pdf"}>Get Resume</Link>
							<AiOutlineDownload className="w-5 h-5" />
						</div>
					</Button>
					<Button>
						<div className="flex items-center gap-1 text-sm md:text-base">
							<Link href={"/projects"}>See Projects</Link>
							<MdArrowOutward className="w-4 h-4" />
						</div>
					</Button>
				</div>
			</motion.div>
		</main>
	);
}
