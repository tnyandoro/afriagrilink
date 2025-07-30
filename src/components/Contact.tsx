import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#6B4F1D] mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your agricultural business? We're here to help farmers, 
            logistics partners, and buyers across Africa connect and thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-[#6B4F1D] mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4CAF50] focus:border-[#4CAF50] transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4CAF50] focus:border-[#4CAF50] transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4CAF50] focus:border-[#4CAF50] transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="farmer">I'm a Farmer - Want to Join</option>
                  <option value="logistics">I'm a Logistics Provider</option>
                  <option value="buyer">I'm a Buyer - Interested in Products</option>
                  <option value="partnership">Partnership Opportunities</option>
                  <option value="support">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4CAF50] focus:border-[#4CAF50] transition-colors resize-vertical"
                  placeholder="Tell us more about your needs, location, and how we can help..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#4CAF50] hover:bg-green-600 text-white py-4 px-6 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-[#6B4F1D] mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#4CAF50] p-3 rounded-full flex-shrink-0">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#6B4F1D] mb-1">Email</h4>
                    <p className="text-gray-700">info@afriagrilink.com</p>
                    <p className="text-gray-700">support@afriagrilink.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#2196F3] p-3 rounded-full flex-shrink-0">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#6B4F1D] mb-1">Phone</h4>
                    <p className="text-gray-700">+254 700 123 456 (Kenya)</p>
                    <p className="text-gray-700">+27 11 234 5678 (South Africa)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#FFA726] p-3 rounded-full flex-shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#6B4F1D] mb-1">Headquarters</h4>
                    <p className="text-gray-700">Nairobi, Kenya</p>
                    <p className="text-gray-700">Cape Town, South Africa</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#6B4F1D] p-3 rounded-full flex-shrink-0">
                    <Clock className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#6B4F1D] mb-1">Support Hours</h4>
                    <p className="text-gray-700">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-700">Saturday: 9:00 AM - 2:00 PM (EAT)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-[#6B4F1D] mb-6">Our Presence</h3>
              
              <div className="bg-gradient-to-br from-[#4CAF50] to-[#2196F3] rounded-xl p-8 text-white text-center">
                <Globe size={64} className="mx-auto mb-4 text-[#FFA726]" />
                <h4 className="text-xl font-bold mb-2">15 SADC Countries</h4>
                <p className="opacity-90 mb-4">Active in all Southern African Development Community nations</p>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>• South Africa</div>
                  <div>• Kenya</div>
                  <div>• Zimbabwe</div>
                  <div>• Zambia</div>
                  <div>• Mozambique</div>
                  <div>• Tanzania</div>
                  <div>• Ghana</div>
                  <div>• And 8 more...</div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-gradient-to-r from-[#6B4F1D] to-[#4CAF50] rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white py-3 px-4 rounded-lg transition-colors text-left">
                  📱 Download Mobile App
                </button>
                <button className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white py-3 px-4 rounded-lg transition-colors text-left">
                  📋 Farmer Registration
                </button>
                <button className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white py-3 px-4 rounded-lg transition-colors text-left">
                  🚛 Logistics Partnership
                </button>
                <button className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white py-3 px-4 rounded-lg transition-colors text-left">
                  📊 Market Analytics
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;