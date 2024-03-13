import { useState } from "react";
import ThemeChangerBtn from "./themeButton";
import LangChangerBtn from "./langButton";

import Image from "next/image";
import LinksNavButtons from "./links";

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const sidebarClass = `inset-0 z-1 sm:relative 
    absolute flex flex-row sm:flex-col
    sm:h-auto left-0 bottom-0 sm:bottom-auto sm:left-auto
    max-h-dvh justify-center items-center top-auto
    bg-coffee_bg_two dark:bg-zinc-700 pt-0 sm:pt-4 pb-0 py-2 
    sm:rounded-tl-xl sm:rounded-bl-xl shadow-[0_0_4px] 
    dark:shadow-zinc-400 select-none `;

  return (
    <nav
      className={`${sidebarClass} w-full h-12 transition-width duration-200 ease-linear ${
        sidebar ? "sm:w-44" : "sm:w-14"
      }`}
    >
      <Image
        src="/coffeIcons/RTP.svg"
        className="p-1 hidden sm:block"
        width={96}
        height={96}
        alt="Logo"
      />
      <section className="flex-grow flex items-center justify-around sm:justify-center relative w-full">
        <button
          className={`absolute -left-2 top-4 transition-transform ${
            sidebar ? "-rotate-90" : "rotate-90"
          }`}
          onClick={() => setSidebar(!sidebar)}
        >
          <Image
            src="/coffeIcons/arrow.svg"
            alt="Arrow"
            className="hidden sm:block"
            width={24}
            height={24}
          />
        </button>

        <LinksNavButtons sidebarState={sidebar} />
      </section>
      <LangChangerBtn sidebarState={sidebar} />
      <ThemeChangerBtn sidebarState={sidebar} />
    </nav>
  );
}
