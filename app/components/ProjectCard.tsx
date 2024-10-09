import Image from "next/image";

interface CardProps {
  title: string;
  link: string;
  img: string;
  desc: string;
  external: boolean;
}

const ProjectCard: React.FC<CardProps> = ({
  title,
  link,
  img,
  desc,
  external,
}) => {
  const targetVal = external ? "_blank" : "";
  return (
    <a
      href={link}
      target={targetVal}
      className="group"
      rel={external ? "noopener noreferrer" : ""}
    >
      <div className="flex-col bg-[#444444] min-h-[150px] rounded-lg mb-5 text-white px-2 group-hover:scale-105">
        <h1 className="my-2 text-center text-lg border-b-2 border-[#707070]">
          {title}
        </h1>
        <div className="sm:flex sm:pb-2">
          <Image
            className=" rounded-md max-w-[272px] max-h-[153px]"
            src={img} // Image should be 1280 x 720
            alt="Project 1 Image"
            width={272}
            height={153}
          />
          <p className="px-2 text-center">{desc}</p>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
