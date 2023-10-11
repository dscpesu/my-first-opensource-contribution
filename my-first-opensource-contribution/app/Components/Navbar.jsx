'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { VscGithub } from "react-icons/vsc";
import { AiOutlineStar } from "react-icons/ai";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <nav className={`fixed backdrop-blur-md w-full z-20 top-0 left-0 border-b border-gray-200 md:py-3 pt-3 shadow-md ${navbarOpen ? 'bg-white' : ''}`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/hackfest" className="flex items-center">
          <Image
            src={"/hack_fest.png"}
            width={110}
            height={50}
            className="h-8 mr-3"
            alt="HackFest Logo"
          />
        </a>
        <div className="flex md:order-2">
          <Link
            href="https://github.com/dscpesu/my-first-opensource-contribution"
            className="flex justify-center items-center gap-2 p-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center mr-3 md:mr-0"
          >
            <AiOutlineStar /><span>Give us a Star</span> <VscGithub />
          </Link>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            onClick={toggleNavbar}
            aria-expanded={navbarOpen}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${navbarOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <a
                href="/"
                className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/hackfest"
                className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0"
              >
                Contributions
              </a>
            </li>
            <li>
              <a
                href="https://gdscpesu.com/"
                className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0"
              >
                Visit Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
