"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const style = "text-2xl text-accentColor";

export default function ThemeSwitch() {
	const [mounted, setMounted] = useState(false);
	const { setTheme, resolvedTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	if (!mounted) return <div></div>;

	if (resolvedTheme === "light") {
		return <FiSun onClick={() => setTheme("dark")} className={style} />;
	}

	if (resolvedTheme === "dark") {
		return <FiMoon onClick={() => setTheme("light")} className={style} />;
	}
}
