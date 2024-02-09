import BgDots from "@/components/containers/bg_dots_container";
import DocPaper from "@/components/containers/document_paper";
import { Skeleton } from "@/components/shadcn/ui/skeleton";
import Head from "next/head";

export default function Projects() {
  return (
    <DocPaper title="Projects" subTitle="👷‍♀️ Working on this page 👷">
      <Head>
        <title>Blog</title>
      </Head>
      <BgDots />
      <header className="mb-8"></header>
      <section className="grid gap-4 mb-8"></section>
    </DocPaper>
  );
}
