import { useTheme } from "next-themes";
import Image from "next/image";

export default function ThemeChangerBtn({
  sidebarState,
}: {
  sidebarState: boolean;
}) {
  const { setTheme } = useTheme();
  const buttonClassName = "flex justify-center";
  return (
    <div
      className={`grid w-full py-2 gap-2 rounded-bl-xl dark:bg-zinc-800 bg-coffee_bg ${
        sidebarState ? "grid-cols-2 grid-rows-1" : "grid-cols-1 grid-rows-2"
      }`}
    >
      <button className={buttonClassName} onClick={() => setTheme("light")}>
        <Image
          src="/coffeIcons/coffe.svg"
          width={20}
          height={20}
          alt="Picture of the author"
        />
      </button>
      <button className={buttonClassName} onClick={() => setTheme("dark")}>
        <Image
          src="/coffeIcons/moon.svg"
          width={24}
          height={24}
          alt="Picture of the author"
        />
      </button>
    </div>
  );
}
