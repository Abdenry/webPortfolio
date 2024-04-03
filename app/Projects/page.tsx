import Image from "next/image";
import project1 from "@/public/simpleGradient.png";

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
          <div className="flex-col bg-[#444444] min-h-[150px] rounded-lg mb-5 text-white px-2">
            <h1 className="py-2 text-center">Project 1</h1>
            <div className="sm:flex sm:pb-2">
              <Image
                className=" rounded-md"
                src={project1}
                alt="Project 1 Image"
                layout="responsive"
              />
              <p className="p-2 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Viverra mauris in aliquam sem fringilla ut morbi tincidunt.
              </p>
            </div>
          </div>
          {/* Project Card 2 */}
          <div className="flex-col bg-[#444444] min-h-[150px] rounded-lg mb-5 text-white px-2">
            <h1 className="py-2 text-center">Project 2</h1>
            <div className="sm:flex sm:pb-2">
              <Image
                className=" rounded-md"
                src={project1}
                alt="Project 1 Image"
                layout="responsive"
              />
              <p className="p-2 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Viverra mauris in aliquam sem fringilla ut morbi tincidunt.
              </p>
            </div>
          </div>
          {/* Project Card 3 */}
          <div className="flex-col bg-[#444444] min-h-[150px] rounded-lg mb-5 text-white px-2">
            <h1 className="py-2 text-center">Project 3</h1>
            <div className="sm:flex sm:pb-2">
              <Image
                className=" rounded-md"
                src={project1}
                alt="Project 1 Image"
                layout="responsive"
              />
              <p className="p-2 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Viverra mauris in aliquam sem fringilla ut morbi tincidunt.
              </p>
            </div>
          </div>
          {/* Project Card 4 */}
          <div className="flex-col bg-[#444444] min-h-[150px] rounded-lg mb-5 text-white px-2">
            <h1 className="py-2 text-center">Project 4</h1>
            <div className="sm:flex sm:pb-2">
              <Image
                className=" rounded-md"
                src={project1}
                alt="Project 1 Image"
                layout="responsive"
              />
              <p className="p-2 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Viverra mauris in aliquam sem fringilla ut morbi tincidunt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
