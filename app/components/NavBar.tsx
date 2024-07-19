"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import MobileMenuOverlay from "./MobileMenuOverlay";

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <header>
      <div className="bg-opacity-80 backdrop-blur-md w-full h-60px fixed border-b border-[#b1b1b118] z-50">
        <div className="flex text-white justify-evenly p-4 mx-auto max-w-[1000px]">
          {/* Name Div with Logo */}
          <div className="">
            <Link
              className="flex font-extrabold text-xl group"
              href="/"
              onClick={() => setNavbarOpen(false)}
            >
              <h1>Brayden Annan</h1>
            </Link>
          </div>

          {/* Hamburger Menu */}
          <div className="sm:hidden">
            {navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(false)}
                className="text-red-500"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 9 L20 21 M20 9 L5 21"
                  />
                </svg>
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(true)}
                className="text-white "
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M4 9 h16 M4 15 h16 M4 21 h16"
                  />
                </svg>
              </button>
            )}
          </div>

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
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                target="_blank"
                className="hover:border-b"
                href="https://github.com/Abdenry"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Overlay Menu */}
        <div className="flex justify-center text-white">
          {navbarOpen ? (
            <MobileMenuOverlay setNavbarOpen={setNavbarOpen} />
          ) : (
            <div />
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
