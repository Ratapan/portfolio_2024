import type { AppProps } from "next/app";
import "@/assets/style/globals.css";
import { ThemeProvider } from "next-themes";

import { Montserrat } from "next/font/google";
import Layout from "./_layout/default";
const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" 
      themes={["light", "dark"]}>
      <div className={`${montserrat.className} bg-coffee_bg text-coffee_foreground dark:bg-zinc-800 dark:text-gray-200 h-dvh flex`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </ThemeProvider>
  );
}
