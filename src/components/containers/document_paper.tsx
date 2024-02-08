import { ReactNode} from "react";
import TitleHeader from "../titles/header";
import BgDots from "./bg_dots_container";

type DocPapersProps = {
  title: string;
  subTitle: string;
  children: ReactNode;
};

export default function DocPaper({
  title,
  subTitle,
  children,
}: DocPapersProps) {
  return (
    <article className="relative pt-6 min-h-dvh">
      <BgDots />
      {title !== '' ? (
        <header className="relative mb-8">
          <TitleHeader>{title}</TitleHeader>
          <h2 className="w-full text-md text-center font-bold">{subTitle}</h2>
        </header>
      ) : (
        <div className="h-8"></div>
      )}
      <main className="relative w-10/12 mx-auto">
        {children}
      </main>
    </article>
  );
}
