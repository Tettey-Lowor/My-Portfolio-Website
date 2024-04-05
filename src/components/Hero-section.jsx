import React from 'react';
import Image1 from '../Assets/Headshot.jpg'

import { MdCloudDownload } from "react-icons/md";


export default function HeroSection() {
  return (
    <>
   
<div name="home" class=" w-full h-screen  bg-gray-900 py-20">
    <div class="container mx-auto px-6 md:px-12">
        <div class="flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 lg:w-2/3">
                <h1 class="text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6">
                    My name is  <br class="hidden md:block" />
                    <span class="text-indigo-500">Fredericka Tettey</span> Lowor
                </h1>
                <p class="text-lg md:text-xl lg:text-2xl text-gray-400 mb-8">
                    Welcome to my Portfolio Website!
                </p>
                <div class="flex gap-2">
                    <a href="/Tettey-Lowor Fredericka-Resume.pdf" class="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-md">Download CV
                    <span className="group-hover:rotate-360 duration-300">
                  <MdCloudDownload size={25} className="ml-1" />
                </span>
                    </a>
                    <a href="#" class="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-md">Learn

                        More
                    </a>
                </div>
            </div>
            <div class="md:w-1/2 lg:w-1/3 mt-8 md:mt-0">
                <img src={Image1} alt="Hero Image" class="rounded-lg shadow-lg" />
            </div>
        </div>
    </div>
</div>
</>
  )
}
