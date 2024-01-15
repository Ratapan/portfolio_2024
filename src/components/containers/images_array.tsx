import Image from "next/image";

type sectionNameProps = {
  sectionName: string;
  size?:number;
  className?:string;
  images: string[];
};

export default function ImagesArray({
  images,
  sectionName,
  className,
  size
}: sectionNameProps) {
  const imagesLength = images.length
  return (
    <section className={`flex ${className??''}`}>
      {
        images.map((im,index)=><Image className={index == imagesLength-1?'':'mr-4'} src={im} alt={`image ${im} of section ${sectionName}`} key={`${sectionName}-${im}`} height={size??48} width={size??48}/>)
      }
    </section>
  );
}
