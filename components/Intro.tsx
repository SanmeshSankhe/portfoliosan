'use client';

import Image from 'next/image';
import React from 'react'

const Intro = () => {
  return (
    <div className="flex gap-4 flex-col-reverse sm:flex-row justify-center items-center">
        <div className="flex flex-col gap-4 md:w-9/12 sm:w-full">
            <h1 className="text-4xl font-bold">Hi I am Sanmesh</h1>
            <p className="text-base text-gray-700 dark:text-gray-300">
            Seasoned Full-Stack Developer with 4+ years of experience in frontend, backend, and system design, I specialize in building scalable, impactful applications. With expertise in mainframe development and scripting, I thrive on solving complex challenges and creating seamless, cross-platform solutions. From platforms with 8K+ users to optimizing APIs and infrastructure, I focus on delivering innovative, user-driven results. Let’s build something great together!
            {/* A seasoned Full-Stack Developer with 4+ years of experience in frontend, backend, and system design. I thrive on building and optimizing applications that are not only scalable but also drive real impact. With a strong background in mainframe development and scripting, I enjoy tackling complex challenges and creating seamless solutions across platforms. I’m excited by the opportunity to craft innovative, user-focused systems that make a difference and push the boundaries of technology.
              From crafting platforms with 8K+ users to optimizing APIs and cloud infrastructure, I focus on delivering innovative, user-centric solutions that drive real impact. Let’s build something great together! */}
            </p>
        </div>
        <div className="md:w-3/12 sm:w-full">
            <Image src="/images/profile-pic.png" 
            alt="ProfilePhoto" 
            width={100} 
            height={100} 
            className="rounded-full border border-gray-100 h-36 w-36" />
        </div>  
    </div>
  );
};

export default Intro;
