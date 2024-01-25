import React, { Children } from "react";

export default function Button({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="inline-block px-4 py-2 bg-gradient-to-tr hover:bg-gradient-to-tl shadow-md from-accentColor to-textColor rounded-lg">
			{children}
		</div>
	);
}
