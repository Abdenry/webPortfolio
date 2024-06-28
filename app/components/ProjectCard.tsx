import Image from "next/image";
import project4 from "@/public/simpleGradient.png";

interface CardProps {
  title: string;
  link: string;
}

const ProjectCard: React.FC<CardProps> = ({ title, link }) => {
  return (
    <a href={link} target="_blank" className="group">
      <div className="flex-col bg-[#444444] min-h-[150px] rounded-lg mb-5 text-white px-2 group-hover:scale-105">
        <h1 className="py-2 text-center">{title}</h1>
        <div className="sm:flex sm:pb-2">
          <Image
            className=" rounded-md max-w-[272px] max-h-[153px]"
            src={project4}
            alt="Project 1 Image"
            width={272}
            height={153}
          />
          <p className="p-2 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra
            mauris in aliquam sem fringilla ut morbi tincidunt.
          </p>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
