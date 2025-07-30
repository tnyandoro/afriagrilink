import React from 'react';
import { Sprout, Truck, ShoppingCart, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Sprout,
      title: "Farmer",
      description: "Small-scale farmers list their produce with quality photos, pricing, and availability on our platform.",
      color: "bg-[#4CAF50]",
      details: ["Create profile", "List products", "Set prices", "Track orders"]
    },
    {
      icon: Truck,
      title: "Logistics",
      description: "Verified logistics partners provide reliable transportation, storage, and delivery services.",
      color: "bg-[#FFA726]",
      details: ["Pickup from farm", "Quality checks", "Safe transport", "Timely delivery"]
    },
    {
      icon: ShoppingCart,
      title: "Buyer",
      description: "Buyers browse, compare, and purchase fresh produce directly from farmers with full traceability.",
      color: "bg-[#2196F3]",
      details: ["Browse products", "Compare prices", "Place orders", "Rate experience"]
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#6B4F1D] mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Our streamlined process connects the entire agricultural value chain, 
            from farm to table, ensuring quality and fair pricing for everyone.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Flow */}
          <div className="hidden lg:flex items-center justify-between mb-12">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="flex-1 text-center">
                  <div className={`${step.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <step.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#6B4F1D] mb-4">{step.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="text-sm text-gray-600 bg-gray-50 py-2 px-4 rounded-lg">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                {index < steps.length - 1 && (
                  <div className="px-8">
                    <ArrowRight className="text-[#6B4F1D]" size={32} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile Flow */}
          <div className="lg:hidden space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <step.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#6B4F1D] mb-3">{step.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{step.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {step.details.map((detail, i) => (
                    <div key={i} className="text-sm text-gray-600 bg-gray-50 py-2 px-3 rounded-lg">
                      {detail}
                    </div>
                  ))}
                </div>
                {index < steps.length - 1 && (
                  <div className="mt-8 flex justify-center">
                    <ArrowRight className="text-[#6B4F1D] rotate-90" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Impact Stats */}
        <div className="mt-20 bg-gradient-to-r from-[#6B4F1D] to-[#4CAF50] rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-lg opacity-90">Successful Deliveries</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">48hrs</div>
              <div className="text-lg opacity-90">Average Delivery Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">30%</div>
              <div className="text-lg opacity-90">Higher Farmer Income</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;