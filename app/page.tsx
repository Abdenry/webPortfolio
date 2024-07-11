import Image from "next/image";
import heroImage from "@/public/gifTest.gif";

export default function Home() {
  return (
    <main>
      {/* Hero Card w/Gif*/}
      <div className="flex flex-col  px-6 text-white  items-center mb-10">
        <Image
          className="rounded-t-lg"
          src={heroImage}
          layout="responsive"
          alt="Hero Image"
          quality={100}
        />
        <div className="bg-[#333333] p-6 px-12 mb-3 rounded-b-lg ">
          <h1 className="text-center line-clamp-3">
            {" "}
            Hello, I'm a Mechatronics and Computer Science student from
            Brisbane!{" "}
          </h1>
        </div>
      </div>
      {/* Detailed Info */}
      <div className="text-white flex-col justify-between px-6">
        {/* Who Am I? */}
        <div className="mb-10">
          <h1 className=" font-extrabold border-b-2 border-[#333333] text-2xl">
            Who Am I?
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra
            mauris in aliquam sem fringilla ut morbi tincidunt.
          </p>
        </div>
        {/* My Favourite Projects */}
        <div className="mb-10">
          <h1 className=" font-extrabold border-b-2 border-[#333333] text-2xl ">
            My Favourite Projects
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra
            mauris in aliquam sem fringilla ut morbi tincidunt.
          </p>
        </div>
        {/* What have I done? */}
        <div className="mb-10">
          <h1 className=" font-extrabold border-b-2 border-[#333333] text-2xl ">
            How Did I Learn?
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra
            mauris in aliquam sem fringilla ut morbi tincidunt.
          </p>
        </div>
        {/* What experience do you have? */}
        <div className="mb-10">
          <h1 className=" font-extrabold border-b-2 border-[#333333] text-2xl ">
            What Experience Do I Have?
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra
            mauris in aliquam sem fringilla ut morbi tincidunt.
          </p>
        </div>
      </div>
    </main>
  );
}
