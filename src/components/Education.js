import React from "react";
import { AcademicCapIcon } from "@heroicons/react/solid";

export default function Education(){
    return(
        <section id = "education">
            <div className="container px-5 py-10 mx-auto">
            <div className="text-center mb-20">
          <AcademicCapIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Education
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Relevant Courses related to major
          </p>
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
    <div class="text-left">
      <p class="text-2xl text-white font-medium">Rutgers University - New Brunswick</p>
    </div>
    <div class="text-left">
      <p class="text-lg text-gray-300">Major: B.A in Computer Science </p>
    </div>
    <div class="text-left">
      <p class="text-lg text-gray-300">Minor: Human Resource Management </p>
    </div>
        <div class="text-left">
      <p class="text-lg text-gray-300">Certifications: Harvard CS50x </p>
    </div>
    <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="bg-gray-800 shadow-lg rounded-lg p-6">
        <h3 class="text-xl font-medium text-white mb-0.5">Data Structures</h3>
        <h2 className="text-sm title-font font-medium text-pink-400 mb-1">Java</h2>
        <p class="text-white">This course focuses the essential properties of data structures and algorithms for operating on them; to use these structures as tools to assist algorithm design; to extend exposure to searching, sorting and hashing techniques.</p>
      </div>

      <div class="bg-gray-800 shadow-lg rounded-lg p-6">
        <h3 class="text-xl font-medium text-white mb-0.5">Introduction to Artificial Intelligence</h3>
        <h2 className="text-sm title-font font-medium text-pink-400 mb-1">Python</h2>
        <p class="text-white">The course will cover both fundamental concepts such as search and knowledge representation on grpah structures, as well as applied work in areas such as planning and vision.</p>
      </div>
      <div class="bg-gray-800 shadow-lg rounded-lg p-6">
        <h3 class="text-xl font-medium text-white mb-0.5">Computer Architecture</h3>
        <h2 className="text-sm title-font font-medium text-pink-400 mb-1">C</h2>
        <p class="text-white">This course covers the fundamental issues in the design of modern computer systems, including the design and implementation of key hardware components such as the processor, memory, and I/O devices, and the software/hardware interface.</p>
      </div>

      <div class="bg-gray-800 shadow-lg rounded-lg p-6">
        <h3 class="text-xl font-medium text-white mb-0.5">Systems Programming</h3>
        <h2 className="text-sm title-font font-medium text-pink-400 mb-1">C</h2>
        <p class="text-white">This course uses POSIX functions on Linux and covers to handle memory management, child processes, file system concepts, sockets, networking, and multithreading. The course also stresses how programs execute and how to measure and optimize performance.</p>
      </div>
      <div class="bg-gray-800 shadow-lg rounded-lg p-6">
        <h3 class="text-xl font-medium text-white mb-0.5">Software Methodology</h3>
        <h2 className="text-sm title-font font-medium text-pink-400 mb-1">Java, JavaFX, Android Studio</h2>
        <p class="text-white">This course teaches in Java object-oriented programming and design, UML, testing and debugging, using and documenting APIs, asynchronous (event-driven) programming in GUI framework, code maintenance and version management using CVS, introduction to building software on mobile platforms. </p>
      </div>
      <div class="bg-gray-800 shadow-lg rounded-lg p-6">
        <h3 class="text-xl font-medium text-white mb-0.5">Principles of Information and Data Management</h3>
        <h2 className="text-sm title-font font-medium text-pink-400 mb-1">SQL, Java, JDBC, HTML/CSS</h2>
        <p class="text-white">Querying various forms of information such as structured data in relational databases, unstructured text (IR), semi-structured data (XML, web), deductive knowledge. Conceptual modeling and schema design. Basics of database management system services.</p>
      </div>
      <div class="bg-gray-800 shadow-lg rounded-lg p-6">
        <h3 class="text-xl font-medium text-white mb-0.5">Discrete Structures</h3>
        <h2 className="text-sm title-font font-medium text-pink-400 mb-1">Probability and Logic</h2>
        <p class="text-white">This course is broken up into 2 classes. Discrete I covers the fundamentals of proof, logic, and induction. Discrete II covers combinatorics and probability theory required in design and analysis of algorithms and in other areas of computer science.</p>
      </div>
      <div class="bg-gray-800 shadow-lg rounded-lg p-6">
        <h3 class="text-xl font-medium text-white mb-0.5">Data Management for Data Science</h3>
        <h2 className="text-sm title-font font-medium text-pink-400 mb-1">Python</h2>
        <p class="text-white"> This course teaches to learn various domain independent/dependent ways to curate the data, and get the curated data into a form that can be explored, managed and analyzed. Students will also learn how to get datasets into database-ready form and do basic analysis of such datasets using  SQL.</p>
      </div>
      
      <div class="bg-gray-800 shadow-lg rounded-lg p-6">
        <h3 class="text-xl font-medium text-white mb-0.5">Data 101</h3>
        <h2 className="text-sm title-font font-medium text-pink-400 mb-1">R and Stats</h2>
        <p class="text-white">This course focuses on data literacy and covers fundamental and basic concepts in statistics and probability such as: Hypothesis testing, Null and Alt
                              Hypothesis, Permutation test, z-test, sig level, p-value, Chi
                              square test, Bayesian Theorem, Post odds, Linear regression.</p>
      </div>
      
    
    </div>
  </div>
        </div>
            </div>
            



        </section>
    );
}