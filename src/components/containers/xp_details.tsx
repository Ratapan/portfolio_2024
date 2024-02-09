import Image from "next/image";
import { useState } from "react";
type XpDetailsContainerProps = {
  company: string;
  position: string;
  dates: string;
  content: string;
  skillsTitle: string;
  skills: string;
  name: string;
};

export default function XpDetailsContainer({
  company,
  position,
  dates,
  content,
  skillsTitle,
  skills,
  name,
}: XpDetailsContainerProps) {
  const [isOpen, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!isOpen);
  };
  return (
    <details name={name} onToggle={handleToggle}>
      <summary className="flex items-center select-none">
        <span>
          <Image
            src="/coffeIcons/arrow.svg"
            alt="Arrow"
            width={20}
            height={20}
            className={`transition-transform ${isOpen ? "" : "-rotate-90"}`}
          />
        </span>
        <h3 className="pl-4 py-4 text-xl font-semibold">{company} | &nbsp; </h3>
        {position}
      </summary>
      <article
        className={`bg-coffee_bg_two dark:bg-zinc-700 rounded-xl p-4 grid grid-cols-1 gap-2 md:text-sm  ${
          isOpen ? "animate-sweep-content" : "opacity-0"
        }`}
      >
        <p className="text-coffee_foreground_acent dark:text-teal-200">
          {dates}
        </p>
        {content.split("\n").map((cont, i) => (
          <p key={`${company.split(" ").join("-")}-${i}`}>{cont}</p>
        ))}
        <p>{skillsTitle}</p>
        <p className="text-coffee_foreground_acent dark:text-teal-200">
          {skills}
        </p>
      </article>
    </details>
  );
}
