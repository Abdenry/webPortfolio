import Image from "next/image";
import heroImage from "@/public/gifTest.gif";

export default function Home() {
  return (
    <main>
      {/* Hero Card w/Gif*/}
      <div className="flex flex-col  text-white  items-center mb-10">
        <Image
          className="rounded-t-lg w-full"
          src={heroImage}
          layout="responsive"
          alt="Hero Image"
          quality={100}
        />
        <div className="bg-[#333333] rounded-b-lg p-6 w-full ">
          <h1 className="text-center line-clamp-3">
            {" "}
            Hello, I'm a Mechatronics and Computer Science graduate from
            Brisbane!{" "}
          </h1>
        </div>
      </div>
      {/* Detailed Info */}
      <div className="text-white flex-col justify-between">
        {/* Who Am I? */}
        <div className="mb-10">
          <h1 className="font-extrabold border-b-2 border-[#333333] text-2xl mb-2">
            Who Am I?
          </h1>
          <p>
            My name is Brayden Annan. I graduated from Queensland University of
            Technology (QUT) in 2024 with a Second Class Honours (Division A) in
            Mechatronic Engineering, and a Bachelor of Computer Science with
            Disctinction.
          </p>
          <p className="pt-2">
            I enjoy the design process and ideation of projects then putting
            them to long term use. You can see the projects I have made by
            clicking the projects tab at the top of the screen!
          </p>
        </div>
        {/* What have I done? */}
        <div className="mb-10">
          <h1 className="font-extrabold border-b-2 border-[#333333] text-2xl mb-2">
            How Did I Learn?
          </h1>
          <p>
            Most of what I have learnt has been outside of formal education! I
            found that while useful for being introduced to new concepts,
            university has fallen slightly short for me when it came to actually
            using these concepts in a practical setting. Hence a lot of my
            implementation of projects has been achieved outside of university.
          </p>
        </div>
        {/* What experience do you have? */}
        <div className="mb-10">
          <h1 className="font-extrabold border-b-2 border-[#333333] text-2xl mb-2">
            What Experience Do I Have?
          </h1>
          <p>
            For a 3 month period during the end of my academic studies, I was
            provided the opportunity to work as a Mechatronics Engineering
            Intern with Gelomics Pty Ltd in Brisbane! This experience has
            exposed me to the Biotech Industry with a focus primarily on
            mechanical design and testing.
          </p>
          <p className="pt-2">
            I am currently seeking a Graduate Program while also continuing to
            create more projects to stimulate my learning.
          </p>
        </div>
      </div>
    </main>
  );
}
