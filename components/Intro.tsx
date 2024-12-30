'use client';

import Image from 'next/image';
import React from 'react'

const Intro = () => {
  return (
    <div className="flex gap-4 flex-col-reverse sm:flex-row justify-center items-center">
        <div className="flex flex-col gap-4 md:w-9/12 sm:w-full">
            <h1 className="text-4xl font-bold">Hi I am Sanmesh</h1>
            <p className="text-base text-gray-700 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Amet fugit in nam assumenlore
                da maiores minima Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, earum!lorem67
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dicta quibusdam labore veritatis ad saepe tempore qui magnam. Dignissimos, sequi.</p>
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
