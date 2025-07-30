import React from 'react';
import { Store, MapPin, BarChart3, Smartphone, Star, Shield } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Store,
      title: "Marketplace Listings",
      description: "Comprehensive product catalog with detailed information, pricing, and availability tracking for all agricultural products.",
      color: "text-[#4CAF50]",
      bgColor: "bg-green-50"
    },
    {
      icon: MapPin,
      title: "Logistics Hub",
      description: "Real-time tracking, route optimization, and integrated delivery management for seamless supply chain operations.",
      color: "text-[#FFA726]",
      bgColor: "bg-orange-50"
    },
    {
      icon: BarChart3,
      title: "Agri-Intel Dashboard",
      description: "Market analytics, price trends, weather data, and crop insights to help farmers make informed decisions.",
      color: "text-[#2196F3]",
      bgColor: "bg-blue-50"
    },
    {
      icon: Smartphone,
      title: "Mobile Payments",
      description: "Secure, instant mobile money integration supporting multiple payment methods across African markets.",
      color: "text-[#6B4F1D]",
      bgColor: "bg-amber-50"
    },
    {
      icon: Star,
      title: "Rating System",
      description: "Transparent feedback system building trust between farmers, logistics providers, and buyers in the ecosystem.",
      color: "text-[#4CAF50]",
      bgColor: "bg-green-50"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Certified quality checks, traceability standards, and compliance with international agricultural regulations.",
      color: "text-[#2196F3]",
      bgColor: "bg-blue-50"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#6B4F1D] mb-6">
            Core Features
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Powerful tools and features designed specifically for the African agricultural ecosystem, 
            supporting growth and sustainability at every level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`${feature.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                <feature.icon className={feature.color} size={32} />
              </div>
              
              <h3 className="text-xl font-bold text-[#6B4F1D] mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-700 leading-relaxed">
                {feature.description}
              </p>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <button className={`${feature.color} font-semibold hover:underline flex items-center space-x-2`}>
                  <span>Learn More</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Highlight */}
        <div className="mt-20 bg-gradient-to-r from-[#4CAF50] to-[#2196F3] rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Mobile-First Design
              </h3>
              <p className="text-xl mb-6 opacity-90 leading-relaxed">
                Optimized for African mobile networks with offline capabilities, 
                SMS integration, and data-light interfaces that work everywhere.
              </p>
              <button className="bg-white text-[#4CAF50] px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Download App
              </button>
            </div>
            <div className="text-center">
              <div className="inline-block bg-white p-8 rounded-2xl shadow-xl">
                <Smartphone className="text-[#4CAF50] mx-auto mb-4" size={80} />
                <div className="text-[#6B4F1D] font-bold text-lg">Available on iOS & Android</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;