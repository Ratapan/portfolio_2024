import ImagesArray from "@/components/containers/images_array";
import PresentationContainer from "@/components/containers/presentation";
import TitleHeader from "@/components/titles/header";
import SectionTitle from "@/components/titles/section_title";
import SubTitle from "@/components/titles/sub_title";
import about from "@/locales/about";
import { localeSafety } from "@/locales/types";
import { useRouter } from "next/router";

export default function Blog() {
  const { locale } = useRouter();
  const safeLocale = localeSafety(locale);
  const setPath = (arr: string[]): string[] =>
    arr.map((name) => `/coffeIcons/${name}.svg`);

  return (
    <article>
      <header className="mb-8">
        <TitleHeader> {about[safeLocale].title} </TitleHeader>
        <SubTitle>{about[safeLocale].subTitle}</SubTitle>
      </header>

      <main>
        <PresentationContainer imgeUrl="/images/yo.png">
          {about[safeLocale].content.aboutMe}
        </PresentationContainer>

        <section>
          <SubTitle>{about[safeLocale].sections.searchMe}</SubTitle>
          <ImagesArray
            size={28}
            className="justify-center"
            sectionName="searchMe"
            images={setPath(["RTP", "linkedin", "ig", "youtube"])}
          />
        </section>

<br />

        <section>
            <SubTitle>{about[safeLocale].sections.toolsTitle}</SubTitle>
          <SectionTitle>{about[safeLocale].sections.toolsBackend}</SectionTitle>
          <ImagesArray sectionName="toolsBackend" size={34} images={setPath(['python','django','express','graphql','firebase','node','mysql','mongo'])} />
        
          <SectionTitle>{about[safeLocale].sections.toolsFront}</SectionTitle>
          <ImagesArray sectionName="toolsFront" size={34} images={setPath(["vue","nuxt","js", 'html','flutter' ])} />
       
          <SectionTitle>{about[safeLocale].sections.toolsDesign}</SectionTitle>
          <ImagesArray sectionName="toolsDesign" size={34} images={setPath(["adobeXd", "figma", "css"])} />
       
          <SectionTitle>{about[safeLocale].sections.toolsOther}</SectionTitle>
          <ImagesArray sectionName="toolsOther" size={34} images={setPath(["linux", "git"])} />
        </section>
        <footer className="h-12"></footer>
      </main>
    </article>
  );
}
