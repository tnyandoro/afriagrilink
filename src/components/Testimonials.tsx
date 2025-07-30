import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Amina Kone",
      role: "Smallholder Farmer",
      location: "Bamako, Mali",
      image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      quote: "AfriAgriLink transformed my farming business. I now sell directly to buyers in 3 countries and earn 40% more than before. The platform is easy to use even with my basic phone.",
      rating: 5,
      category: "farmer"
    },
    {
      id: 2,
      name: "Joseph Nkrumah",
      role: "Logistics Manager",
      location: "TransCargo Ghana",
      image: "https://images.pexels.com/photos/2232981/pexels-photo-2232981.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      quote: "Our delivery efficiency improved by 60% since joining AfriAgriLink. The route optimization and farmer coordination features help us serve more communities profitably.",
      rating: 5,
      category: "logistics"
    },
    {
      id: 3,
      name: "Sarah Mitchell",
      role: "Food Procurement Manager",
      location: "Fresh Foods International",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      quote: "The quality and traceability of products on AfriAgriLink is exceptional. We've built strong relationships with farmers and reduced our procurement costs by 25%.",
      rating: 5,
      category: "buyer"
    },
    {
      id: 4,
      name: "Emmanuel Musoni",
      role: "Coffee Farmer",
      location: "Kigali, Rwanda",
      image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      quote: "Through AfriAgriLink, my coffee reached European buyers for the first time. The platform's support team helped me understand international quality standards.",
      rating: 5,
      category: "farmer"
    },
    {
      id: 5,
      name: "Fatou Diallo",
      role: "Vegetable Farmer",
      location: "Dakar, Senegal", 
      image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      quote: "As a woman farmer, AfriAgriLink gave me access to markets I never thought possible. My children can now attend better schools thanks to increased income.",
      rating: 5,
      category: "farmer"
    },
    {
      id: 6,
      name: "Marcus van der Berg",
      role: "Regional Buyer",
      location: "Cape Town Wholesale Markets",
      image: "https://images.pexels.com/photos/2232981/pexels-photo-2232981.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      quote: "AfriAgriLink's marketplace gives us access to diverse, high-quality produce from across SADC. The logistics integration makes cross-border trading seamless.",
      rating: 5,
      category: "buyer"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'farmer': return 'bg-[#4CAF50]';
      case 'logistics': return 'bg-[#FFA726]';
      case 'buyer': return 'bg-[#2196F3]';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#6B4F1D] to-[#4CAF50]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            What Our Community Says
          </h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            Real stories from farmers, logistics partners, and buyers who are 
            transforming African agriculture together.
          </p>
        </div>

        <div className="relative">
          {/* Main Testimonial */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 md:p-12 mx-auto max-w-4xl">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              {/* Avatar and Info */}
              <div className="flex-shrink-0 text-center md:text-left">
                <div className="relative">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-24 h-24 rounded-full mx-auto md:mx-0 object-cover border-4 border-white shadow-lg"
                  />
                  <div className={`${getCategoryColor(testimonials[currentIndex].category)} absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center`}>
                    <span className="text-white text-xs font-bold">
                      {testimonials[currentIndex].category.charAt(0).toUpperCase()}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mt-4">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-green-200">{testimonials[currentIndex].role}</p>
                <p className="text-green-300 text-sm">{testimonials[currentIndex].location}</p>
                
                {/* Rating */}
                <div className="flex justify-center md:justify-start space-x-1 mt-3">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="text-[#FFA726] fill-current" size={16} />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="flex-1">
                <Quote className="text-[#FFA726] mb-4 mx-auto md:mx-0" size={48} />
                <blockquote className="text-lg md:text-xl text-white leading-relaxed italic">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-[#FFA726] w-8' 
                    : 'bg-white bg-opacity-40 hover:bg-opacity-60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#FFA726] mb-2">4.8/5</div>
            <div className="text-white">Average Rating</div>
            <div className="text-green-200 text-sm">From 2,500+ reviews</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#FFA726] mb-2">98%</div>
            <div className="text-white">Customer Satisfaction</div>
            <div className="text-green-200 text-sm">Would recommend to others</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#FFA726] mb-2">24/7</div>
            <div className="text-white">Support Available</div>
            <div className="text-green-200 text-sm">In multiple languages</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;