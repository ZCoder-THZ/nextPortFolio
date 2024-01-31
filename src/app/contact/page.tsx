import React from "react";
import Button from "@/components/ui/Button";

const inputStyle = "text-sm px-4 py-2 col-span-2 rounded-md";

export default function Contact() {
	return (
		<div className="container mt-10 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
			<div>
				<h2 className="text-3xl lg:text-4xl leading-9 tracking-wide text-textColor font-bold">
					I'm avaliable for freelance <br /> or fulltime positions. <br />
					Contact me and let's talk.
				</h2>
			</div>
			<form className="grid grid-cols-2 gap-3 text-bgColor">
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
				<textarea rows={4} placeholder="Message" className={inputStyle} />
				<div className="w-full col-start-2 flex justify-end">
					<Button>
						<div className="text-white">Send Message</div>
					</Button>
				</div>
			</form>
		</div>
	);
}
