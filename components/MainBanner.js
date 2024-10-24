"use client";
import React from 'react';
import { ReactTyped } from "react-typed";

const MainBanner = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/video.mp4" // Replace with your video file path
        autoPlay
        loop
        muted
      ></video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Welcome to Our Platform
        </h1>

        {/* Subheading with typing effect */}
        <div className="text-2xl md:text-4xl">
          <ReactTyped
            strings={[
              'Innovate with us!',
              'Your Success, Our Mission',
              'Technology at its Best',
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
