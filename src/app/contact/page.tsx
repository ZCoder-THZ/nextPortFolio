import React from "react";
import Button from "@/components/ui/Button";

const inputStyle = "px-4 py-2 col-span-2 rounded-md";

export default function Contact() {
	return (
		<div className="w-full h-screen flex items-center justify-center">
			<div className="container mt-10 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-20">
				<div>
					<h2 className="text-3xl lg:text-5xl font-extrabold leading-9 tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-textColor to-accentColor">
						I'm avaliable for freelance <br /> or fulltime positions.{" "}
						<br />
						Contact me and let's talk.
					</h2>
				</div>
				<form className="grid grid-cols-2 gap-2 lg:gap-4 text-bgColor">
					<input
						placeholder="Name"
						className="col-span-1 px-4 py-2 rounded-md"
					/>
					<input
						placeholder="Phone"
						className="col-span-1 px-4 py-2 rounded-md"
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
		</div>
	);
}
