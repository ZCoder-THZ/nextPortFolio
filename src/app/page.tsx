import React from "react";
import Image from "next/image";
import About from "./about/page";
import Contact from "./contact/page";
import Projects from "./projects/page";
import Skills from "./skills/page";

export default function Home() {
	return (
		<main className="flex flex-col items-center bg-gradient-to-tr from-bgColor to-bgColor/80">
			<div className="container w-10/12 mx-auto mt-10 flex flex-col lg:flex-row items-center gap-10">
				<div className="w-full lg:w-8/12 text-white">
					<h1 className="text-xl text-textColor">Hello.., It's me </h1>
					<h1 className="text-6xl font-bold uppercase">may zin ei</h1>
					<h1 className="text-xl">
						And I'm a{" "}
						<span className="text-4xl font-bold">
							Frontend Developer.
						</span>
					</h1>
					<p className="w-full lg:w-10/12 text-textColor text-sm mt-2">
						I'm a Frontend Developer speciallizing in designing
						exceptional digital experiences. Currently, I'm focused on
						building responsive frontend web applications while learning
						back-end technologies.
					</p>
				</div>
				<div className="group relative w-full lg:w-4/12 h-auto lg:h-[450px] flex items-end justify-center rounded-full bg-gradient-to-br from-textColor to-transparent transition duration-300 ease-in-out">
					<Image
						src={"/my-image.png"}
						alt="my image"
						width={300}
						height={300}
					/>
					<Image
						src={"/crown.png"}
						alt="crown"
						width={100}
						height={100}
						className="absolute top-5 right-24 rotate-12 hidden group-hover:block transition duration-300 ease-in-out"
					/>
				</div>
			</div>
			<About />
			<Skills />
			<Projects />
			<Contact />
		</main>
	);
}
