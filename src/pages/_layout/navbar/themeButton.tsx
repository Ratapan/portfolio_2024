import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function ThemeChangerBtn({
  sidebarState,
}: {
  sidebarState: boolean;
}) {
  const { setTheme, resolvedTheme } = useTheme();
  const buttonClassName = "flex justify-center";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [resolvedTheme]);

  if (loading) return null;
  return (
    <div
      className={`grid sm:w-full w-24 py-1 gap-2 rounded-bl-xl grid-cols-2 dark:sm:bg-zinc-800 sm:bg-coffee_bg ${
        sidebarState
          ? "sm:grid-cols-2 sm:grid-rows-1"
          : "sm:grid-cols-1 sm:grid-rows-2"
      }`}
    >
      <button
        className={`${buttonClassName} ${resolvedTheme === "light" ? "hidden" : ""}`}
        onClick={() => setTheme("light")}
      >
        <Image
          src="/coffeIcons/coffe.svg"
          width={24}
          height={24}
          alt="Picture of the author"
        />
      </button>
      <button
        className={`${buttonClassName} ${resolvedTheme === "dark" ? "hidden" : ""}`}
        onClick={() => setTheme("dark")}
      >
        <Image
          src="/coffeIcons/moon.svg"
          width={22}
          height={22}
          alt="Picture of the author"
        />
      </button>
    </div>
  );
}
