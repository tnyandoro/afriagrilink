import React from 'react';
import { Users, Truck, TrendingUp, MapPin, DollarSign, Award } from 'lucide-react';

const CallToActions = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#6B4F1D] mb-6">
            Join Our Growing Community
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Whether you're a farmer, logistics provider, or buyer, AfriAgriLink 
            offers opportunities for growth and sustainable impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Farmers CTA */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 md:p-12">
            <div className="flex items-center mb-6">
              <div className="bg-[#4CAF50] p-3 rounded-full mr-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-[#6B4F1D]">For Farmers</h3>
            </div>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Expand your market reach, get fair prices for your produce, and connect 
              directly with buyers across Africa and beyond.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <MapPin className="text-[#4CAF50]" size={20} />
                <span className="text-gray-700">Access to regional and international markets</span>
              </div>
              <div className="flex items-center space-x-3">
                <DollarSign className="text-[#4CAF50]" size={20} />
                <span className="text-gray-700">Up to 30% higher income potential</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="text-[#4CAF50]" size={20} />
                <span className="text-gray-700">Quality certification and training support</span>
              </div>
            </div>

            <button className="bg-[#4CAF50] hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 flex items-center space-x-2 w-full justify-center">
              <Users size={24} />
              <span>Register as Farmer</span>
            </button>
          </div>

          {/* Logistics CTA */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 md:p-12">
            <div className="flex items-center mb-6">
              <div className="bg-[#FFA726] p-3 rounded-full mr-4">
                <Truck className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-[#6B4F1D]">For Logistics Partners</h3>
            </div>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Grow your business by joining our verified logistics network and 
              contribute to agricultural development across SADC regions.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <TrendingUp className="text-[#FFA726]" size={20} />
                <span className="text-gray-700">Consistent business growth opportunities</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-[#FFA726]" size={20} />
                <span className="text-gray-700">Expand routes across 15 SADC countries</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="text-[#FFA726]" size={20} />
                <span className="text-gray-700">Professional certification and recognition</span>
              </div>
            </div>

            <button className="bg-[#FFA726] hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 flex items-center space-x-2 w-full justify-center">
              <Truck size={24} />
              <span>Join Logistics Network</span>
            </button>
          </div>
        </div>

        {/* Success Stories Preview */}
        <div className="mt-16 bg-gradient-to-r from-[#6B4F1D] to-[#2196F3] rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Success Stories</h3>
            <p className="text-lg opacity-90">Real impact from our community members</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-2xl font-bold text-[#4CAF50] mb-2">2,500+</div>
              <div className="text-sm opacity-90">Farmers Empowered</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-2xl font-bold text-[#FFA726] mb-2">500+</div>
              <div className="text-sm opacity-90">Logistics Partners</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-2xl font-bold text-white mb-2">1,200+</div>
              <div className="text-sm opacity-90">Active Buyers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActions;