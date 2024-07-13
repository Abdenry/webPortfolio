"use client";
import React from "react";
import Link from "next/link";

interface MobileProp {
  setNavbarOpen: Function;
}

const MobileMenuOverlay: React.FC<MobileProp> = ({ setNavbarOpen }) => {
  return (
    <div className="sm:hidden" onClick={() => setNavbarOpen(false)}>
      <div className="flex flex-col gap-10">
        <Link className="hover:border-b" href="/Projects">
          Projects
        </Link>
        <a
          target="_blank"
          className="hover:border-b"
          href="https://www.linkedin.com/in/brayden-a-5590bb192"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          target="_blank"
          className="hover:border-b pb-4"
          href="https://github.com/Abdenry"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default MobileMenuOverlay;
