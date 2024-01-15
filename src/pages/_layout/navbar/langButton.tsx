import Link from "next/link";
import { useRouter } from "next/router";

export default function LangChangerBtn({
  sidebarState,
}: {
  sidebarState: boolean;
}) {
  const { locale, locales, defaultLocale, asPath } = useRouter();

  const buttonClassName =
    "flex justify-center text-coffee_icon_1 font-semibold";
  return (
    <div
      className={`grid w-full py-2 gap-2 rounded-tl-xl dark:bg-zinc-800 bg-coffee_bg ${
        sidebarState ? "grid-cols-2 grid-rows-1" : "grid-cols-1 grid-rows-2"
      }`}
    >
      {
      locales?.map((el) => (
        <Link
          key={`local-${el}`}
          className={buttonClassName}
          href={el+asPath}
          locale={el}
        >
          {el}
        </Link>
      ))
      }
    </div>
  );
}
