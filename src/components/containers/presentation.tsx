import Image from "next/image";
import React, { ReactNode } from "react";
type PresentationContainerProps = {
  imgeUrl: string;
  children: ReactNode;
};

export default function PresentationContainer({
  imgeUrl,
  children,
}: PresentationContainerProps) {
  return (
    <div className="bg-coffee_bg_two dark:bg-zinc-700 rounded-xl p-4 grid gap-4  m-auto sm:w-11/12 md:w-10/12  md:grid-cols-3">
      <div className="flex items-center justify-center w-full ">
        <Image
          width="400"
          height="400"
          priority={true}
          className="rounded-xl object-cover object-center h-full w-full"
          src={imgeUrl}
          alt="Mi fotografia"
        />
      </div>
      <p className="md:col-span-2  md:text-sm">{children}</p>
    </div>
  );
}
