import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <header>
      <div className="bg-opacity-80 backdrop-blur-sm w-full h-60px fixed border-b border-[#b1b1b118]">
        <div className="text-white flex flex-row justify-between p-4">
          <div className=" font-extrabold text-xl">
            <Link href="/">Brayden Annan</Link>
          </div>
          <div className="flex flex-row gap-3">
            <Link href="/About"> About</Link>
            <Link href="/Projects"> Projects</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
