import Image from "next/image";
import project1 from "@/public/egb320Project.png";
import project2 from "@/public/simpleGradient.png";
import project3 from "@/public/simpleGradient.png";
import project4 from "@/public/simpleGradient.png";

export default function ProjectsPage() {
  return (
    <main className="py-[60px] bg-[#212121] min-h-screen">
      {/* Main Contatiner */}
      <div className="container mx-auto max-w-[600px] pt-6 px-3">
        <div className="px-6">
          {/* Page Description */}
          <div className="text-white">
            <h1 className="border-b w-auto font-extrabold sm:text-lg">
              Projects
            </h1>
            <p className=" my-5">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Viverra mauris in aliquam sem fringilla ut morbi tincidunt.
            </p>
          </div>
          {/* Project Card 1 */}
          <a
            href="https://youtu.be/Dr_o5N65tek?t=120"
            target="_blank"
            className="group"
          >
            <div className="flex-col bg-[#444444] min-h-[150px] rounded-lg mb-5 text-white px-2 group-hover:scale-105">
              <h1 className="py-2 text-center">Sample Collecting Robot</h1>
              <div className="sm:flex sm:pb-2 ">
                <Image
                  className="rounded-md max-w-[272px] max-h-[153px]"
                  src={project1}
                  alt="Project 1 Image"
                />
                <p className="p-2 text-balance text-center text-sm sm:text-start">
                  In 2022, I completed the EGB320: Mechatronics Design 2 unit
                  and built a prototype mars rover! The mission was to search,
                  collect and return "moon rocks" scattered around the
                  environment.
                </p>
              </div>
            </div>
          </a>
          {/* Project Card 2 */}
          <a href="" className="group">
            <div className="flex-col bg-[#444444] min-h-[150px] rounded-lg mb-5 text-white px-2 group-hover:scale-105">
              <h1 className="py-2 text-center">Project 2</h1>
              <div className="sm:flex sm:pb-2">
                <Image
                  className=" rounded-md max-w-[272px] max-h-[153px]"
                  src={project2}
                  alt="Project 1 Image"
                />
                <p className="p-2 text-center ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Viverra mauris in aliquam sem fringilla ut morbi tincidunt.
                </p>
              </div>
            </div>
          </a>
          {/* Project Card 3 */}
          <a href="" className="group">
            <div className="flex-col bg-[#444444] min-h-[150px] rounded-lg mb-5 text-white px-2 group-hover:scale-105">
              <h1 className="py-2 text-center">Project 3</h1>
              <div className="sm:flex sm:pb-2">
                <Image
                  className=" rounded-md max-w-[272px] max-h-[153px]"
                  src={project3}
                  alt="Project 1 Image"
                  width={272}
                  height={153}
                />
                <p className="p-2 text-center ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Viverra mauris in aliquam sem fringilla ut morbi tincidunt.
                </p>
              </div>
            </div>
          </a>
          {/* Project Card 4 */}
          <a href="" className="group">
            <div className="flex-col bg-[#444444] min-h-[150px] rounded-lg mb-5 text-white px-2 group-hover:scale-105">
              <h1 className="py-2 text-center">Project 4</h1>
              <div className="sm:flex sm:pb-2">
                <Image
                  className=" rounded-md max-w-[272px] max-h-[153px]"
                  src={project4}
                  alt="Project 1 Image"
                  width={272}
                  height={153}
                />
                <p className="p-2 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Viverra mauris in aliquam sem fringilla ut morbi tincidunt.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}
