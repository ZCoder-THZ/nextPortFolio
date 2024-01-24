import React from "react";
import Link from "next/link";

export default function Navigation() {
  return (
    <div className="bg-slate-300 flex items-center justify-between px-10 lg:px-24 py-2">
      <Link href={"/"}>Logo</Link>
      <ul className="flex items-center gap-6">
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/skills"}>Skills</Link>
        </li>
        <li>
          <Link href={"/projects"}>Projects</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact Me</Link>
        </li>
      </ul>
    </div>
  );
}
