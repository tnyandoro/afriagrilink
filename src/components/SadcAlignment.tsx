import React from 'react';
import { Shield, Globe, Leaf, Award, Users, TrendingUp } from 'lucide-react';

const SadcAlignment = () => {
  const alignmentFeatures = [
    {
      icon: Shield,
      title: "Food Security",
      description: "Supporting SADC's vision for regional food security through improved agricultural productivity and market access.",
      color: "text-[#4CAF50]",
      bgColor: "bg-green-50"
    },
    {
      icon: Globe,
      title: "Trade Integration",
      description: "Facilitating cross-border agricultural trade within the SADC region through digital marketplace solutions.",
      color: "text-[#2196F3]",
      bgColor: "bg-blue-50"
    },
    {
      icon: Leaf,
      title: "Climate Resilience",
      description: "Promoting sustainable farming practices and climate-smart agriculture aligned with SADC environmental policies.",
      color: "text-[#4CAF50]",
      bgColor: "bg-green-50"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SADC Badge Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-[#6B4F1D] to-[#2196F3] text-white px-8 py-4 rounded-xl mb-8">
            <Award className="text-[#FFA726]" size={32} />
            <div className="text-left">
              <div className="font-bold text-lg">SADC Aligned</div>
              <div className="text-sm opacity-90">Regional Agricultural Policy Compliant</div>
            </div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-[#6B4F1D] mb-6">
            Supporting SADC Vision 2050
          </h2>
          
          <blockquote className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed italic border-l-4 border-[#4CAF50] pl-6 mb-8">
            "A common future towards economic prosperity, food security, peace and social transformation 
            for the people of Southern Africa."
          </blockquote>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            — SADC Regional Agricultural Policy Framework
          </p>
        </div>

        {/* Alignment Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {alignmentFeatures.map((feature, index) => (
            <div key={index} className="text-center">
              <div className={`${feature.bgColor} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6`}>
                <feature.icon className={feature.color} size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#6B4F1D] mb-4">{feature.title}</h3>
              <p className="text-gray-700 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* SADC Impact Section */}
        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h3 className="text-3xl font-bold text-[#6B4F1D] mb-6">
                Our SADC Impact
              </h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                AfriAgriLink directly contributes to SADC's strategic objectives by creating 
                inclusive digital infrastructure that connects smallholder farmers to regional 
                and international markets.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#4CAF50] p-2 rounded-full flex-shrink-0">
                    <Users className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#6B4F1D] mb-2">Inclusive Growth</h4>
                    <p className="text-gray-700">Empowering women and youth in agriculture through accessible technology and market opportunities.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#2196F3] p-2 rounded-full flex-shrink-0">
                    <TrendingUp className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#6B4F1D] mb-2">Economic Integration</h4>
                    <p className="text-gray-700">Facilitating intra-SADC trade through reduced barriers and improved logistics coordination.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#FFA726] p-2 rounded-full flex-shrink-0">
                    <Leaf className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#6B4F1D] mb-2">Sustainability</h4>
                    <p className="text-gray-700">Promoting climate-smart agriculture and sustainable farming practices across the region.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h4 className="text-2xl font-bold text-[#6B4F1D] mb-6 text-center">
                  SADC Coverage
                </h4>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#4CAF50] mb-2">15</div>
                    <div className="text-sm text-gray-600">SADC Countries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#2196F3] mb-2">85%</div>
                    <div className="text-sm text-gray-600">Market Penetration</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#FFA726] mb-2">250+</div>
                    <div className="text-sm text-gray-600">Local Partners</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#6B4F1D] mb-2">6</div>
                    <div className="text-sm text-gray-600">Languages</div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-gradient-to-r from-[#4CAF50] to-[#2196F3] rounded-lg text-white text-center">
                  <div className="font-semibold">Contributing to SDG 2</div>
                  <div className="text-sm opacity-90">Zero Hunger by 2030</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-[#6B4F1D] mb-8">
            Certifications & Compliance
          </h3>
          
          <div className="flex flex-wrap justify-center items-center space-x-8 space-y-4">
            <div className="bg-gray-50 px-6 py-3 rounded-lg border border-gray-200">
              <span className="text-gray-700 font-medium">SADC Trade Protocol Compliant</span>
            </div>
            <div className="bg-gray-50 px-6 py-3 rounded-lg border border-gray-200">
              <span className="text-gray-700 font-medium">AU Continental Free Trade Area</span>
            </div>
            <div className="bg-gray-50 px-6 py-3 rounded-lg border border-gray-200">
              <span className="text-gray-700 font-medium">ISO 22000 Food Safety</span>
            </div>
            <div className="bg-gray-50 px-6 py-3 rounded-lg border border-gray-200">
              <span className="text-gray-700 font-medium">Global GAP Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SadcAlignment;