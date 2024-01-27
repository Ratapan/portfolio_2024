import DocPaper from "@/components/containers/document_paper";
import about from "@/locales/about";
import { localeSafety } from "@/locales/types";
import { useRouter } from "next/router";

export default function Blog() {
  const { locale } = useRouter();
  const safeLocale = localeSafety(locale);

  const content = about[safeLocale];

  return (
    <DocPaper title="Blog" subTitle="Este es un espacio en donde comparto mis ideas y trabajos" >
      <p>sdfg</p>
    </DocPaper>
  );
}
