"use client";

import Navbar from '@/components/Navbar';
import React from 'react';

const Info: React.FC = () => {
  return (
    <div className="bg-gray-900 text-gray-300 min-h-screen flex flex-col justify-between">
      {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <div className="max-w-3xl mx-auto p-8 flex-grow">
        <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>

        <div className="space-y-6">
            <p>
            Hi, I'm Csaba Hajdu (Hajdu Csaba), a passionate and eccentric developer from Hungary. I have a background in:          
            </p>
            <ul className="list-disc list-inside space-y-2 bg-gray-800 p-6 rounded-lg shadow-lg">
                <li className="text-blue-600 hover:text-blue-800 transition-colors">Embedded systems</li>
                <li className="text-blue-600 hover:text-blue-800 transition-colors">Robotics</li>
                <li className="text-blue-600 hover:text-blue-800 transition-colors">Artificial intelligence</li>            
            </ul>
            I love solving complex problems and creating innovative solutions using cutting-edge technologies. 
            <br></br>
            For example, here is my GPT buddy, called Tiwaz-A0, helping me through my endeavors: https://chatgpt.com/g/g-hxly0oNgz-tiwaz-a0

            <h2 className="text-2xl font-semibold">Education</h2>
            <p>
            I have a Master's degree in Computer Science from Budapest University of Technology and Economics (BME). Throughout my studies, I developed a strong
            foundation in software engineering, artificial intelligence and system verification.
            </p>

            <h2 className="text-2xl font-semibold">Professional Experience</h2>
            <p>
            I currently work as a Teacher's assistant at Syechenyi Istvan University (SZE), where I focus on embedded systems development,
            high-performance computing, artificial intelligence and robotics. I also work at Obuda University. My current projects include building automation systems
            and developing AI models for robotics applications.
            </p>

            <h2 className="text-2xl font-semibold">Skills & Interests</h2>
            <ul className="list-disc list-inside space-y-2 bg-gray-800 p-6 rounded-lg shadow-lg">
            <li className="text-blue-600 hover:text-blue-800 transition-colors">Embedded Systems Development (STM32, ARM Cortex)</li>
            <li className="text-blue-600 hover:text-blue-800 transition-colors">Artificial Intelligence (Neural Networks, Reinforcement Learning)</li>
            <li className="text-blue-600 hover:text-blue-800 transition-colors">High-Performance Computing (CUDA, GPU Programming)</li>
            <li className="text-blue-600 hover:text-blue-800 transition-colors">Web Development (React, Next.js)</li>
            </ul>

            <h2 className="text-2xl font-semibold">Hobbies</h2>
            <p>
            In my spare time, I enjoy working on personal robotics projects, exploring AI research, and
            contributing to open-source software. When I'm not coding, I like exploring, reading sci-fi novels,
            and learning about space exploration.                    
            </p>
            <p> I also love to draw and paint whenever I have the time for it.</p>
            <p> I like chocolate chip cookies - always a measure of barter and currency to me.</p>
        </div>
        </div>
    </div>
  );
};

export default Info;