import Image from "next/image";
import Link from "next/link";
import React from "react";
import circuit from "@/public/circuit.png";

const NavBar = () => {
  return (
    <header>
      <div className="bg-opacity-80 backdrop-blur-md w-full h-60px fixed border-b border-[#b1b1b118] z-50">
        <div className="flex text-white sm:justify-evenly p-4 container mx-auto max-w-[1100px]">
          {/* Name Div with Logo */}
          <Link className="flex font-extrabold text-xl group " href="/">
            <Image
              className="mx-2 group-hover:-rotate-6"
              src={circuit}
              width={30}
              height={30}
              alt="Circuit Icon"
            />
            <h1>Brayden Annan</h1>
          </Link>

          {/* Main Links Div */}
          <div className="hidden sm:block">
            <div className="flex flex-row gap-10">
              <Link className="hover:border-b" href="/Projects">
                Projects
              </Link>
              <a
                target="_blank"
                className="hover:border-b"
                href="https://www.linkedin.com/in/brayden-a-5590bb192"
              >
                LinkedIn
              </a>
              <a
                target="_blank"
                className="hover:border-b"
                href="https://github.com/Abdenry"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
