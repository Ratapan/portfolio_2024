import React from "react";
import Navbar from "./navbar/navbar";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <main className="flex-grow flex justify-center pl-2  bg-transparent">
        <section className="w-full max-w-4xl max-h-dvh rtp_scroll mr-1 px-2 pb-12 sm:pb-0">
          {children}
        </section>
      </main>
      <Navbar />
    </>
  );
}
