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
    <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="bg-gray-800 shadow-lg rounded-lg p-6">
        <h3 class="text-xl font-medium text-white mb-0.5">Data Structures</h3>
        <h2 className="text-sm title-font font-medium text-pink-400 mb-1">Java</h2>
        <p class="text-white">This course focuses the essential properties of data structures and algorithms for operating on them; to use these structures as tools to assist algorithm design; to extend exposure to searching, sorting and hashing techniques.</p>
      </div>

      <div class="bg-gray-800 shadow-lg rounded-lg p-6">
        <h3 class="text-xl font-medium text-white mb-0.5">Computer Architecture</h3>
        <h2 className="text-sm title-font font-medium text-pink-400 mb-1">C</h2>
        <p class="text-white">This course covers the fundamental issues in the design of modern computer systems, including the design and implementation of key hardware components such as the processor, memory, and I/O devices, and the software/hardware interface.</p>
      </div>

      <div class="bg-gray-800 shadow-lg rounded-lg p-6">
        <h3 class="text-xl font-medium text-white mb-0.5">Discrete Structures</h3>
        <h2 className="text-sm title-font font-medium text-pink-400 mb-1">Probability and Logic</h2>
        <p class="text-white">This course is broken up into 2 classes. Discrete I covers the fundamentals of proof, logic, and induction. Discrete II covers combinatorics and probability theory required in design and analysis of algorithms and in other areas of computer science.</p>
      </div>
      <div class="bg-gray-800 shadow-lg rounded-lg p-6">
        <h3 class="text-xl font-medium text-white mb-0.5">Systems Programming</h3>
        <h2 className="text-sm title-font font-medium text-pink-400 mb-1">C</h2>
        <p class="text-white">This course uses POSIX functions on Linux and covers to handle memory management, child processes, file system concepts, sockets, networking, and multithreading. The course also stresses how programs execute and how to measure and optimize performance.</p>
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