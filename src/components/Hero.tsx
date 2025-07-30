import React from "react";
import { ArrowRight, Users, Globe, TrendingUp } from "lucide-react";
import heroImage from "../assets/images/hero.jpg"; // Ensure this path is correct

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-white text-center max-w-3xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Transforming Agriculture with Technology
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Connecting farmers, buyers, and service providers for a smarter,
          sustainable future.
        </p>
        <div className="flex justify-center gap-4 mb-8">
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition-all flex items-center gap-2">
            Get Started <ArrowRight size={20} />
          </button>
          <button className="bg-white hover:bg-gray-100 text-green-700 font-semibold py-2 px-6 rounded-lg transition-all">
            Learn More
          </button>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-sm md:text-base">
          <div className="flex items-center justify-center gap-2">
            <Users size={20} /> Community of Experts
          </div>
          <div className="flex items-center justify-center gap-2">
            <Globe size={20} /> Global Access
          </div>
          <div className="flex items-center justify-center gap-2">
            <TrendingUp size={20} /> Data-Driven Insights
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
