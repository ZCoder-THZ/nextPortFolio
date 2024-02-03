"use client";
import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import ContactIcons from "@/components/ui/ContactIcons";

const inputStyle =
	"text-sm lg:text-base p-2 lg:px-4 lg:py-2 col-span-2 rounded-md bg-bgColor/80 backdrop-blur-md shadow-md shadow-textColor/40";

export default function Contact() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className="w-full h-screen flex items-center justify-center"
		>
			<div className="container mt-10 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-20">
				<div className="space-y-3 lg:space-y-8">
					<h2 className="text-3xl lg:text-5xl font-extrabold leading-9 tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-textColor to-accentColor duration-300">
						I&apos;m avaliable for freelance <br /> or fulltime positions.{" "}
						<br />
						Contact me and let&apos;s talk.
					</h2>
					<ContactIcons />
				</div>
				<form className="grid grid-cols-2 gap-2 lg:gap-4">
					<input
						placeholder="Name"
						className="col-span-1 text-sm lg:text-base p-2 lg:px-4 lg:py-2 rounded-md bg-bgColor/80 backdrop-blur-md shadow-md shadow-textColor/40"
					/>
					<input
						placeholder="Phone"
						className="col-span-1 text-sm lg:text-base p-2 lg:px-4 lg:py-2 rounded-md bg-bgColor/80 backdrop-blur-md shadow-md shadow-textColor/40"
					/>
					<input placeholder="Email" className={inputStyle} />
					<input placeholder="Subject" className={inputStyle} />
					<textarea
						rows={4}
						placeholder="Message"
						className={inputStyle}
					/>
					<div className="w-full col-start-2 flex justify-end">
						<Button>
							<div className="text-white">Send Message</div>
						</Button>
					</div>
				</form>
			</div>
		</motion.div>
	);
}
