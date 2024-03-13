import Link from "next/link";
import { useRouter } from "next/router";

export default function LangChangerBtn({
  sidebarState,
}: {
  sidebarState: boolean;
}) {
  const { locales, asPath, locale } = useRouter();
  const buttonClassName =
    "flex justify-center text-coffee_icon_1 font-semibold";
  return (
    <div
      className={`grid sm:w-full w-24 py-1 gap-2 rounded-tl-xl grid-cols-2 dark:sm:bg-zinc-800 sm:bg-coffee_bg ${
        sidebarState
          ? "sm:grid-cols-2 sm:grid-rows-1"
          : "sm:grid-cols-1 sm:grid-rows-2"
      }`}
    >
      {locales?.map((el) => (
        <Link
          key={`local-${el}`}
          className={buttonClassName + ` ${locale === el ? "hidden" : ""}`}
          href={el + asPath}
          locale={el}
        >
          {el}
        </Link>
      ))}
    </div>
  );
}
