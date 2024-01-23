import { useState } from "react";
import ThemeChangerBtn from "./themeButton";
import LangChangerBtn from "./langButton";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const sidebarClass =
    "inset-0 z-1 relative flex flex-col max-h-dvh justify-center items-center bg-coffee_bg_two dark:bg-zinc-700 pt-4 pb-0 py-2 rounded-tl-xl rounded-bl-xl shadow-[0_0_4px] dark:shadow-zinc-400 transition duration-500 select-none";
  return (
    <nav className={`${sidebarClass} ${sidebar ? "w-40" : "w-12"}`}>
      <Image
        src="/coffeIcons/RTP.svg"
        className="p-1"
        width={96}
        height={96}
        alt="Logo"
      />
      <section className="flex-grow flex items-center justify-center relative w-full">
        <button
          className={`absolute -left-2 top-4 transition-transform ${
            sidebar ? "-rotate-90" : "rotate-90"
          }`}
          onClick={() => setSidebar(!sidebar)}
        >
          <Image
            src="/coffeIcons/arrow.svg"
            alt="Arrow"
            width={24}
            height={24}
          />
        </button>
        <ul className="grid max-w-full w-[90%] grid-cols-1 gap-2">
          <Link
            href="/blog"
            className="p-1 rounded-lg dark:hover:bg-zinc-800 hover:bg-coffee_bg dark:bg-zinc-700 bg-coffee_bg_two flex items-center"
          >
            <span className="w-8">
              <Image
                src="/coffeIcons/blog.svg"
                alt="Blog"
                className="m-auto"
                width={22}
                height={22}
              />
            </span>
            <span className="text-lg">{sidebar ? "Blog" : ""}</span>
          </Link>
          <Link
            href="/projects"
            className="p-1 rounded-lg dark:hover:bg-zinc-800 hover:bg-coffee_bg dark:bg-zinc-700:bg-coffee_bg_two flex items-center"
          >
            <span className="w-8">
              <Image
                src="/coffeIcons/project.svg"
                alt="Projects"
                className="m-auto"
                width={24}
                height={24}
              />
            </span>
            <span className="text-lg">{sidebar ? "Projects" : ""}</span>
          </Link>
          <Link
            href="/aboutme"
            className="p-1 rounded-lg dark:hover:bg-zinc-800 hover:bg-coffee_bg dark:bg-zinc-700:bg-coffee_bg_two flex items-center"
          >
            <span className="w-8">
              <Image
                src="/coffeIcons/sun.svg"
                alt="Projects"
                className="m-auto"
                width={24}
                height={24}
              />
            </span>
            <span className="text-lg">{sidebar ? "About me" : ""}</span>
          </Link>
        </ul>
      </section>
      <LangChangerBtn sidebarState={sidebar} />
      <ThemeChangerBtn sidebarState={sidebar} />
    </nav>
  );
}
