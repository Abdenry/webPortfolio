import Image from "next/image";
import heroImage from "@/public/gifTest.gif";

export default function Home() {
  return (
    <main className="pt-[60px] bg-[#212121] min-h-[4000px]">
      {/* Main Contatiner */}
      <div className="container mx-auto max-w-[600px] px-3 pt-6">
        {/* Hero Card w/Image*/}
        <div className="flex flex-col  px-6 text-white  items-center ">
          <Image
            className="rounded-t-lg"
            src={heroImage}
            layout="responsive"
            alt="Hero Image"
            quality={100}
          />
          <div className="bg-[#333333] p-6 px-12 mb-3 rounded-b-lg ">
            <h1 className="text-center text-sm line-clamp-3 sm:text-base">
              {" "}
              Hello, I'm a mechatronics and computer science student from
              Brisbane!{" "}
            </h1>
          </div>
        </div>
        {/* Detailed Info */}
        <div className="text-white text-3xl text-nowrap flex justify-between px-6">
          <h1 className=" font-extrabold"> Brayden Annan</h1>
        </div>
      </div>
    </main>
  );
}
