import React from "react";
import BubbleText from "@/components/ui/BubbleText";
import ContactIcons from "@/components/ui/ContactIcons";

export default function About() {
	return (
		<div className="w-full h-screen flex items-center justify-center">
			<div className="container lg:w-9/12 mx-auto flex flex-col lg:flex-row gap-6 lg:gap-20 mt-20 md:mt-0">
				<h2 className="uppercase text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accentColor to-textColor shrink-0">
					about me
				</h2>
				<div className="p-0 lg:px-8">
					<BubbleText />
					<ContactIcons />
				</div>
			</div>
		</div>
	);
}
