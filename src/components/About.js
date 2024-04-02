import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center  bg-gray-900">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            <span className="typewriter">
              <span className="hi-kusum">Hi, I'm Kusum!</span>
            </span>
            <br className="hidden lg:inline-block" />
            <span className="cs-major hidden lg:inline-block">
              CS Major and HRM Minor at Rutgers University
            </span>
          </h1>
          <p className="mb-8 leading-relaxed">
            <div className= "about-me">
            As an aspiring full-stack developer, I'm passionate about exploring various areas of computer science, including database management, data science, and artificial intelligence. 
            To gain hands-on experience and hone my skills, I've participated in 15+ hackathons to date and plan to attend many more in the future.
            When I'm not coding, I enjoy indulging in hobbies such as crocheting/knitting, tending to my plant collection, rollerblading, watching anime, and lifting weights.
            </div>
          </p>
          
          <div className="flex justify-center">
          <a
              href="https://github.com/koolkusum"
              className="github-btn ml-2 inline-flex border-0 py-3 px-8 focus:outline-none items-center text-color:white font-medium rounded-lg text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub className ="w-6 h-6 mr-2" />
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/kg1110/"
              className="linkedin-btn ml-4 inline-flex border-0 py-3 px-8 focus:outline-none text-color:white items-center font-medium rounded-lg text-lg space-x-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin className = "w-6 h-6 mr-2"/>
              LinkedIn
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6" >
  {/* <div className="about-img-container"> */}
    <img
      className="about-img animated rounded-full"
      alt="hero"
      src="./me33.jpg"
    />
  {/* </div> */}
</div>
      </div>
    </section>
  );
}