import React from 'react';
import { BriefcaseIcon } from "@heroicons/react/solid";

export default function Experience(){
    return(
        <section id = "experience">
            <div className = "container px-5 py-10 mx-auto">
            <div className = "text-center mb-20">
                <BriefcaseIcon className = "w-10 inline-block mb-4"/>
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                    Experience
                </h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                    Aspiring full-stack software engineer with experience in cloud technolgies and developing web apps. Strong fundamental understanding in Java through tutoring Data Structures.
                </p>
                <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="bg-gray-800 shadow-lg rounded-lg p-6 max-w-lg mx-auto">
                    <h3 class="text-xl font-medium text-white mb-0.5">Cybersecurity Intern @ Gandiva Networks</h3>
                    <h2 className="text-sm title-font font-medium text-pink-400 mb-1">June 2024 - Present</h2>
                    <ul className="list-disc pl-5 text-left">
                                <li>Executed presentation on cybersecurity foundations to prepare for the Palo Alto PCCET certification, further demonstrating learned material by presenting a Python script that detects common open ports using TCP stream.</li>
                                <li>Transformed Linux development environment by creating projects that introduced AWS security features, sockets, networking, and encryption instances.</li>
                                <li>Accelerated group capstone project on AI & ML by taking into account privacy, legal implications, and ethical considerations in the cybersecurity field. </li>
                            </ul>
                </div>
                <div class="bg-gray-800 shadow-lg rounded-lg p-6 max-w-lg mx-auto">
                    <h3 class="text-xl font-medium text-white mb-0.5">Computing Academic Tutor Manager @ Rutgers University</h3>
                    <h2 className="text-sm title-font font-medium text-pink-400 mb-1">Septemeber 2023 - June 2024</h2>
                    <ul className="list-disc pl-5 text-left">
                                <li>Appointed first tutoring manager of the program to oversee over 20 computing peer tutors; provided mentorship to tutors and led hiring processes for new tutors.</li>
                                <li>Conducted weekly office hours for Introduction to Computer Science and Data Structures, providing comprehensive assistance to over 150 students per month.</li>
                                <li>Provided assignment and process documentation for tutors; collaborated with instructors and teaching assistants to identify and address common student struggles.</li>
                            </ul>
                </div>

                <div class="bg-gray-800 shadow-lg rounded-lg p-6 max-w-lg mx-auto">
                    <h3 class="text-xl font-medium text-white mb-0.5">Instructional Lab Assistant @ Rutgers University</h3>
                    <h2 className="text-sm title-font font-medium text-pink-400 mb-1">Septemeber 2023 - May 2024</h2>
                    <ul className="list-disc pl-5 text-left">
                                <li>Orchestrated the maintenance and optimization of a cluster of 30 remotely accessible Linux servers, ensuring seamless performance and reliability used by 1000+ of students.</li>
                                <li>Assumed a supervisory role overseeing day-to-day operations to uphold an environment conducive to research and academic pursuits for students and researchers.</li>
                                <li>Provided comprehensive tutoring services to fellow students requiring assistance in diverse computer science subjects, demonstrating a commitment to fostering academic excellence and collaborative learning, helping 200+ students a month. </li>
                            </ul>
                </div>


                </div>
            </div>
            </div>
        </section>
    );
}