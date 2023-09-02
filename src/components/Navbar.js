import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0 cursor-pointer">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="ml-3 text-xl"
          >
            Kusum Gandham
          </Link>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center ml-auto">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="mr-5 hover:text-pink-400 cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="mr-5 hover:text-pink-400 cursor-pointer"
          >
            Skills
          </Link>
          <Link
            to="education"
            smooth={true}
            duration={500}
            className="mr-5 hover:text-pink-400 cursor-pointer"
          >
            Education
          </Link>
          <Link
            to="timeline"
            smooth={true}
            duration={500}
            className="mr-5 hover:text-pink-400 cursor-pointer"
          >
            Hackathons
          </Link>
          <a
            href="../Resume (10).pdf"
            target="_blank"
            className="mr-5 hover:text-pink-400"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
