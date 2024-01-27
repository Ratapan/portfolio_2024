import Link from "next/link";
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
  const linkClassName =
    "p-1 rounded-lg dark:hover:bg-zinc-800 hover:bg-coffee_bg dark:bg-zinc-700 bg-coffee_bg_two flex items-center";

  type linkNav = {
    link: string;
    text: string;
    img: string;
  };
  const links = [
    {
      link: "/blog",
      img: "blog.svg",
      text: "Blog",
    },
    {
      link: "/projects",
      img: "project.svg",
      text: "Project",
    },

    {
      link: "/aboutme",
      img: "sun.svg",
      text: "About me",
    },
  ] as linkNav[];
  return (
    <TooltipProvider>
      <ul className="grid max-w-full w-[90%] grid-cols-1 gap-2">
        {links.map((link, i) => (

          <Tooltip key={`nav-link-${i}`}>
            <TooltipTrigger>
              <Link href={link.link} className={linkClassName}>
                <span className="w-8">
                  <Image
                    src={`/coffeIcons/${link.img}`}
                    alt={link.text}
                    className="m-auto"
                    width={22}
                    height={22}
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
