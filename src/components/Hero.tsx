import React from 'react';
import { ArrowRight, Users, Globe, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/2131784/pexels-photo-2131784.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Connecting Africa's
            <span className="text-[#FFA726] block">Farmers to the World</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Empowering small-scale farmers across Africa through digital marketplace solutions, 
            seamless logistics, and direct buyer connections.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-[#4CAF50] hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 flex items-center space-x-2 min-w-[200px]">
              <Users size={24} />
              <span>Join as Farmer</span>
            </button>
            
            <button className="bg-[#2196F3] hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 flex items-center space-x-2 min-w-[200px]">
              <Globe size={24} />
              <span>Explore Marketplace</span>
            </button>
            
            <button className="bg-[#FFA726] hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 flex items-center space-x-2 min-w-[200px]">
              <TrendingUp size={24} />
              <span>Become a Partner</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-white">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold text-[#4CAF50] mb-2">10,000+</div>
              <div className="text-gray-200">Active Farmers</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold text-[#FFA726] mb-2">15</div>
              <div className="text-gray-200">SADC Countries</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold text-[#2196F3] mb-2">$2M+</div>
              <div className="text-gray-200">Trade Volume</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <ArrowRight className="text-white rotate-90" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;