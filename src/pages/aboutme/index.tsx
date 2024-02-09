import BgDots from "@/components/containers/bg_dots_container";
import ImagesArray from "@/components/containers/images_array";
import PresentationContainer from "@/components/containers/presentation";
import XpDetailsContainer from "@/components/containers/xp_details";
import TitleHeader from "@/components/titles/header";
import SectionTitle from "@/components/titles/section_title";
import SubTitle from "@/components/titles/sub_title";
import about from "@/locales/about";
import { localeSafety } from "@/locales/types";
import Head from "next/head";
import { useRouter } from "next/router";

export default function AboutMe() {
  const { locale } = useRouter();
  const safeLocale = localeSafety(locale);

  const content = about[safeLocale];

  const setPath = (
    arr: { image: string; link?: string; width?: number }[]
  ): { image: string; link?: string; width?: number }[] =>
    arr.map((obj) => {
      obj.image = `/coffeIcons/${obj.image}.svg`;
      return obj;
    });

  return (
    <article className="relative pt-6">
      <Head>
        <title>@ratapan</title>
      </Head>
      <BgDots />
      <header className=" relative mb-8">
        <TitleHeader> {content.title} </TitleHeader>
        <h4 className="w-full text-md text-center font-bold">
          {content.subTitle}
        </h4>
      </header>
      <main className="relative">
        <PresentationContainer imgeUrl="/images/yo.png">
          {content.content.aboutMe.split('\n').map((cont,i)=>(
            <>
            <span>{cont}</span>
            <br/>
            </>
          ))}
     
        </PresentationContainer>
        <section>
          <SubTitle>{content.sections.searchMe}</SubTitle>
          <ImagesArray
            size={{ height: 34, width: 34 }}
            className="justify-center"
            classNameChildrens="transition-transform hover:scale-125"
            sectionName="searchMe"
            imagesLink={setPath([
              {
                image: "linkedin",
                link: "https://www.linkedin.com/in/javier-sabando/",
              },
              { image: "ig", link: "https://www.instagram.com/ratapics" },
              {
                image: "youtube",
                link: "https://www.youtube.com/@rtpdev",
                width: 42,
              },
            ])}
          />
        </section>
        <br />
        <section className="m-auto sm:w-11/12 md:w-10/12">
          <SubTitle>{content.sections.xpTitle}</SubTitle>
          {content.content.xp.map(
            ({ company, position, dates, content, skillsTitle, skills }, i) => (
              <XpDetailsContainer
                key={`details-container-${i}`}
                company={company}
                position={position}
                dates={dates}
                content={content}
                skillsTitle={skillsTitle}
                skills={skills}
                name="experience"
              />
            )
          )}
        </section>
        <br />
        <section className="m-auto sm:w-11/12 md:w-10/12">
          <SubTitle>{content.sections.toolsTitle}</SubTitle>
          <SectionTitle>{content.sections.toolsBackend}</SectionTitle>
          <ImagesArray
            sectionName="toolsBackend"
            size={{ height: 34, width: 34 }}
            imagesLink={setPath([
              { image: "python" },
              { image: "django" },
              { image: "express", width: 80 },
              { image: "graphql" },
              { image: "node", width: 80 },
              { image: "mysql", width: 65 },
              { image: "mongo", width: 80 },
            ])}
          />

          <SectionTitle>{content.sections.toolsFront}</SectionTitle>
          <ImagesArray
            sectionName="toolsFront"
            size={{ height: 34, width: 34 }}
            imagesLink={setPath([
              { image: "vue" },
              { image: "nuxt" },
              { image: "js" },
              { image: "html" },
              { image: "flutter" },
            ])}
          />

          <SectionTitle>{content.sections.toolsDesign}</SectionTitle>
          <ImagesArray
            sectionName="toolsDesign"
            size={{ height: 34, width: 34 }}
            imagesLink={setPath([
              { image: "adobeXd" },
              { image: "figma" },
              { image: "css" },
            ])}
          />

          <SectionTitle>{content.sections.toolsOther}</SectionTitle>
          <ImagesArray
            sectionName="toolsOther"
            size={{ height: 34, width: 34 }}
            imagesLink={setPath([{ image: "linux" }, { image: "git" }])}
          />
        </section>
        <footer className="h-12"></footer>
      </main>
    </article>
  );
}
