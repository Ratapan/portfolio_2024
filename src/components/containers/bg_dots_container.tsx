import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
export default function BgDots() {
  const { theme } = useTheme();

  const [bgColor, setBgColor] = useState("bg-[radial-gradient(#8b8b8b_1px,transparent_1px)]");

  useEffect(() => {

    if (theme === "dark") {
      setBgColor("bg-[radial-gradient(#fffcf450_1px,transparent_1px)]");
    }
    if (theme === "light") {
      setBgColor("bg-[radial-gradient(#9b580095_1px,transparent_1px)]");
    }
  }, [theme]);

  return (
    <div
      className={`absolute inset-0 -z-9 h-full w-full 
      [background-size:32px_32px] ${bgColor}`}
    ></div>
  );
}
