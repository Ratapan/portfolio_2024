import Image from "next/image";

type ImagesArrayProps = {
  sectionName: string;
  size?: { height: number; width: number };
  className?: string;
  imagesLink: { image: string; link?: string }[];
};

export default function ImagesArray({
  imagesLink,
  sectionName,
  className,
  size,
}: ImagesArrayProps) {
  const imagesLinkLength = imagesLink.length;
  return (
    <section className={`flex ${className ?? ""}`}>
      {imagesLink.map((im, index) => {
        if (im.link) {
          return (
            <a
              href={im.link}
              key={`${sectionName}-${im.image}`}
              target="_blank"
              className="flex items-center"
            >
              <Image
                className={index == imagesLinkLength - 1 ? "" : "mr-4"}
                src={im.image}
                alt={`image ${im} of section ${sectionName}`}
                height={size?.height ?? 48}
                width={size?.width ?? 48}
              />
            </a>
          );
        }
        return (
          <Image
            className={index == imagesLinkLength - 1 ? "" : "mr-4"}
            src={im.image}
            alt={`image ${im} of section ${sectionName}`}
            key={`${sectionName}-${im.image}`}
            height={size?.height ?? 48}
            width={size?.width ?? 48}
          />
        );
      })}
    </section>
  );
}
