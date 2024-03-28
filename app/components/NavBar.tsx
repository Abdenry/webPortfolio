import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <header>
      <div className="bg-opacity-80 backdrop-blur-md w-full h-60px fixed border-b border-[#b1b1b118]">
        <div className="text-white flex flex-row sm:justify-evenly p-4 mx-auto justify-start">
          <div className=" font-extrabold text-xl">
            <Link href="/">Brayden Annan</Link>
          </div>
          <div className="hidden sm:block">
            <div className="flex flex-row gap-3">
              <Link className="hover:border-b" href="/About">
                About
              </Link>
              <Link className="hover:border-b" href="/Projects">
                Projects
              </Link>
              <a
                className="hover:border-b"
                href="https://www.linkedin.com/in/brayden-a-5590bb192"
              >
                LinkedIn
              </a>
              <a className="hover:border-b" href="https://github.com/Abdenry">
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
