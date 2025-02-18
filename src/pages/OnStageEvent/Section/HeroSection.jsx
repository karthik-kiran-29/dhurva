import React from "react";

const HeroPage = () => {
  return (
    <div className="h-screen w-full bg-black overflow-hidden sticky">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
        style={{
          backgroundImage: `url("https://res.cloudinary.com/dglhpdf4h/image/upload/v1739867699/nfu5ebne4ygz6hwqjnsa.png")`,
          filter: "brightness(0.4) saturate(1.5)"
        }}
        data-aos="zoom-out"
      />
      
      {/* Content container */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <h1 
          className="text-white text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight"
          data-aos="fade-up"
        >
          On-Stage Events
        </h1>
        <p 
          className="text-white text-xl md:text-2xl lg:text-3xl font-medium tracking-wide"
          data-aos="fade-up"
        >
          To Bring Out the Beast in You
        </p>
      </div>
    </div>
  );
};

export default HeroPage;