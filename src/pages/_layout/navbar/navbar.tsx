import { useState } from "react";
import ThemeChangerBtn from "./themeButton";
import LangChangerBtn from "./langButton";

import Image from "next/image";
import LinksNavButtons from "./links";



export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  

  const sidebarClass =
    "inset-0 z-1 relative flex flex-col max-h-dvh justify-center items-center bg-coffee_bg_two dark:bg-zinc-700 pt-4 pb-0 py-2 rounded-tl-xl rounded-bl-xl shadow-[0_0_4px] dark:shadow-zinc-400 select-none";

  return (
    <nav
      className={`${sidebarClass} transition-width duration-200 ease-linear ${
        sidebar ? "w-44" : "w-12"
      }`}
    >
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

        <LinksNavButtons sidebarState={sidebar} />
      </section>
      <LangChangerBtn sidebarState={sidebar} />
      <ThemeChangerBtn sidebarState={sidebar} />
    </nav>
  );
}
