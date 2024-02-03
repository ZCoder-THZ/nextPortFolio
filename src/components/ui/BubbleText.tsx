"use client";
import React, { useEffect } from "react";

export default function BubbleText() {
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
		<h2 className="hover-text font-gowun text-justify text-xl md:text-2xl tracking-tighter leading-7 md:leading-9 font-thin text-textColor">
			<Text>
				Hello, I am May Zin Ei, a Frontend Developer with a passion for
				creating interactive and responsive web applications. I have
				experience working with Html, Css, Bootstrap, Tailwind Css,
				Javascript, React, Nextjs, Ghost CMS and Git.
			</Text>
			<br />
			<Text>
				Currently, I am focused on building responsive frontend web
				applications while learning backend technologies.
			</Text>
			<br />
			<Text>
				My collaborative spirit shines within teams and I am excited to work
				with others to create amazing web applications.
			</Text>
		</h2>
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
