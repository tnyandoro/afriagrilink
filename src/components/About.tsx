import React from 'react';
import { Target, Eye, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-green-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#6B4F1D] mb-6">
            About AfriAgriLink
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We are dedicated to transforming agriculture across Africa by creating 
            sustainable connections between farmers, logistics providers, and global markets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/2383013/pexels-photo-2383013.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="African farmers working together"
              className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#6B4F1D] via-transparent to-transparent opacity-30 rounded-2xl"></div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-[#4CAF50] p-3 rounded-full">
                <Target className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#6B4F1D] mb-3">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To empower smallholder farmers across Africa by providing them with direct access 
                  to markets, fair pricing, and efficient logistics solutions that drive sustainable 
                  agricultural growth and food security.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-[#2196F3] p-3 rounded-full">
                <Eye className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#6B4F1D] mb-3">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  A connected Africa where every farmer has the opportunity to thrive, 
                  contributing to regional food security and economic prosperity through 
                  integrated digital agricultural systems.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-[#FFA726] p-3 rounded-full">
                <Heart className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#6B4F1D] mb-3">Our Values</h3>
                <p className="text-gray-700 leading-relaxed">
                  Transparency, sustainability, and community empowerment guide everything we do. 
                  We believe in fair trade, environmental stewardship, and the power of 
                  technology to bridge gaps and create opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;