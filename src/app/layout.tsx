import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation/Navigation";
import { Providers } from "./Provider";
import ThemeSwitch from "@/components/darkmode/ThemeSwitch";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "mayzinei",
	description: "My Portfolio Website",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Providers>
					<Navigation />
					{children}
					<div className="absolute bottom-5 right-5 md:bottom-8 md:right-10">
						<ThemeSwitch />
					</div>
				</Providers>
			</body>
		</html>
	);
}
