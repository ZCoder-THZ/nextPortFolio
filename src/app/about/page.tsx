"use client";
import React, { useEffect } from "react";
import ContactIcons from "@/components/ui/ContactIcons";
import { motion } from "framer-motion";

export default function About() {
	useEffect(() => {
		const spans = document.querySelectorAll(
			".hover-text span"
		) as NodeListOf<HTMLSpanElement>;

		spans.forEach((span) => {
			span.addEventListener("mouseenter", function (this: typeof span) {
				this.style.fontWeight = "900";
				this.style.color = "rgb(238, 242, 255)";

				const leftNeighbor = this.previousElementSibling as HTMLSpanElement;
				const rightNeighbor = this.nextElementSibling as HTMLSpanElement;

				if (leftNeighbor) {
					leftNeighbor.style.fontWeight = "500";
					leftNeighbor.style.color = "rgb(199, 210, 254)";
				}
				if (rightNeighbor) {
					rightNeighbor.style.fontWeight = "500";
					rightNeighbor.style.color = "rgb(199, 210, 254)";
				}
			});

			span.addEventListener("mouseleave", function (this: typeof span) {
				this.style.fontWeight = "100";
				this.style.color = "rgb(199, 210, 254)";

				const leftNeighbor = this.previousElementSibling as HTMLSpanElement;
				const rightNeighbor = this.nextElementSibling as HTMLSpanElement;

				if (leftNeighbor) {
					leftNeighbor.style.fontWeight = "100";
					leftNeighbor.style.color = "rgb(199, 210, 254)";
				}

				if (rightNeighbor) {
					rightNeighbor.style.fontWeight = "100";
					rightNeighbor.style.color = "rgb(199, 210, 254)";
				}
			});
		});
	}, []);
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className="w-full h-screen flex items-center justify-center"
		>
			<div className="container lg:w-9/12 mx-auto flex flex-col lg:flex-row gap-6 lg:gap-20 mt-20 md:mt-0">
				<h2 className="uppercase text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accentColor to-textColor shrink-0">
					about me
				</h2>
				<div className="p-0 lg:px-8">
					<p className="hover-text font-gowun text-justify text-xl md:text-2xl tracking-tighter leading-7 md:leading-9 font-thin text-textColor">
						<Text>
							Hello, I am May Zin Ei, a Frontend Developer with a passion
							for creating interactive and responsive web applications. I
							have experience working with Html, Css, Bootstrap, Tailwind
							Css, Javascript, React, Nextjs, Ghost CMS and Git.
						</Text>
						<br />
						<Text>
							Currently, I am focused on building responsive frontend web
							applications while learning backend technologies.
						</Text>
						<br />
						<Text>
							My collaborative spirit shines within teams and I am
							excited to work with others to create amazing web
							applications.
						</Text>
					</p>
					<ContactIcons />
				</div>
			</div>
		</motion.div>
	);
}
const Text = ({ children }: { children: string }) => {
	return (
		<>
			{children.split("").map((child, idx) => (
				<span
					style={{
						transition: "0.35s font-weight, 0.35s color",
					}}
					key={idx}
				>
					{child}
				</span>
			))}
		</>
	);
};
