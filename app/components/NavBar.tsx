import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav>
      <div className="bg-black w-full">
        <div className="text-white flex flex-row justify-between p-6">
          <div>
            <Link href="/">Header Section</Link>
          </div>
          <div className="flex flex-row gap-3">
            <Link href="/About"> About</Link>
            <Link href="/Projects"> Projects</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
