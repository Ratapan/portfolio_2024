import Link from "next/link";
import { useRouter } from "next/router";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/shadcn/ui/tooltip";
import Image from "next/image";

export default function LinksNavButtons({
  sidebarState,
}: {
  sidebarState: boolean;
}) {
  const { asPath } = useRouter();
  const linkClassName =
    "p-1 rounded-lg dark:hover:bg-zinc-800 hover:bg-coffee_bg dark:bg-zinc-700 bg-coffee_bg_two flex items-center";

  type linkNav = {
    link: string;
    text: string;
    img: string;
    size: number;
    sizeMini: number;
  };
  const links = [
    {
      link: "/aboutme",
      img: "sun.svg",
      text: "About me",
      size: 24,
      sizeMini: 18,
    },
    {
      link: "/blog",
      img: "blog.svg",
      text: "Blog",
      size: 21,
      sizeMini: 16,
    },
    {
      link: "/projects",
      img: "project.svg",
      text: "Project",
      size: 24,
      sizeMini: 18,
    },
  ] as linkNav[];

  return (
    <TooltipProvider>
      <ul className="grid max-w-full w-[60%] sm:w-auto md:w-[90%] grid-cols-3 sm:grid-cols-1 sm:gap-2 overflow-clip">
        {links.map((link, i) => (
          <Tooltip key={`nav-link-${i}`}>
            <TooltipTrigger>
              <Link
                href={link.link}
                className={`${linkClassName} ${
                  sidebarState
                    ? ""
                    : "w-8 relative -right-1 py-2 mx-auto flex justify-center items-center"
                } ${
                  link.link.includes(asPath)
                    ? " shadow-coffee_foreground dark:shadow-zinc-500 shadow-[inset_0_0_4px]"
                    : ""
                }`}
              >
                <span className={sidebarState ? "w-8" : ""}>
                  <Image
                    src={`/coffeIcons/${link.img}`}
                    alt={link.text}
                    className="m-auto"
                    width={sidebarState ? link.size : link.sizeMini}
                    height={sidebarState ? link.size : link.sizeMini}
                  />
                </span>
                <span className="text-sm">{sidebarState ? link.text : ""}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Ir a "{link.text}"</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </ul>
    </TooltipProvider>
  );
}
