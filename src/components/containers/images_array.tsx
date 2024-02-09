import Image from "next/image";

type ImagesArrayProps = {
  sectionName: string;
  size?: { height: number; width: number };
  className?: string;
  classNameChildrens?: string;
  imagesLink: { image: string; link?: string; width?: number }[];
};

export default function ImagesArray({
  imagesLink,
  sectionName,
  className,
  classNameChildrens,
  size,
}: ImagesArrayProps) {
  return (
    <section className={`flex ${className ?? ""}`}>
      {imagesLink.map((im) => {
        if (im.link) {
          return (
            <a
              href={im.link}
              key={`${sectionName}-${im.image}`}
              target="_blank"
              className={"flex items-center " + classNameChildrens || ""}
            >
              <div
                style={{
                  height: size?.height ?? 48,
                }}
                className={`flex items-center overflow-clip justify-center mr-4`}
              >
                <Image
                  className={"object-cover object-center"}
                  src={im.image}
                  alt={`image ${im} of section ${sectionName}`}
                  height={size?.height ?? 48}
                  width={im.width ?? size?.width ?? 48}
                />
              </div>
            </a>
          );
        }
        return (
          <div
            style={{
              height: size?.height ?? 48,
            }}
            key={`${sectionName}-${im.image}`}
            className={`flex items-center overflow-clip justify-center mr-4`}
          >
            <Image
              className={"object-cover object-center"}
              src={im.image}
              alt={`image ${im} of section ${sectionName}`}
              height={size?.height ?? 48}
              width={im.width ?? size?.width ?? 48}
            />
          </div>
        );
      })}
    </section>
  );
}
