import React from 'react';
import Navbar from './navbar/navbar';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <main className='flex-grow flex justify-center'>
        <section className='w-full max-w-4xl pt-4 px-2'>

        {children}
        </section>
        </main>
      <Navbar />
    </>
  );
}
