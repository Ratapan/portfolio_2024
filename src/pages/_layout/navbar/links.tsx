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
  };
  const links = [
    {
      link: "/aboutme",
      img: "sun.svg",
      text: "About me",
      size: 24,
    },
    {
      link: "/blog",
      img: "blog.svg",
      text: "Blog",
      size: 21,
    },
    {
      link: "/projects",
      img: "project.svg",
      text: "Project",
      size: 24,
    },
  ] as linkNav[];
  
  return (
    <TooltipProvider>
      <ul className="grid max-w-full w-[90%] grid-cols-1 gap-2">
        {links.map((link, i) => (
          <Tooltip key={`nav-link-${i}`}>
            <TooltipTrigger>
              <Link
                href={link.link}
                className={`${linkClassName} ${
                  sidebarState ? "" : "w-8 mx-auto flex justify-center items-center"
                } ${
                  link.link.includes(asPath)
                    ? " shadow-coffee_foreground dark:shadow-zinc-500 shadow-[inset_0_0_4px]"
                    : ""
                }`}
              >
                <span className={sidebarState ? "w-8" : ""} >
                  <Image
                    src={`/coffeIcons/${link.img}`}
                    alt={link.text}
                    className="m-auto"
                    width={link.size}
                    height={link.size}
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
