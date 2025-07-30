import React from 'react';
import { MapPin, Star, Truck, Check, Clock } from 'lucide-react';

const MarketplacePreview = () => {
  const products = [
    {
      id: 1,
      name: "Premium White Maize",
      farmer: "John Mwangi",
      location: "Nakuru, Kenya",
      price: 45,
      unit: "per 90kg bag",
      image: "https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      rating: 4.8,
      reviews: 156,
      status: "available",
      quantity: "50 bags",
      logistics: "Next day delivery"
    },
    {
      id: 2,
      name: "Fresh Cassava Roots",
      farmer: "Maria Santos",
      location: "Maputo, Mozambique",
      price: 25,
      unit: "per 50kg bag",
      image: "https://images.pexels.com/photos/6069116/pexels-photo-6069116.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      rating: 4.6,
      reviews: 89,
      status: "limited",
      quantity: "25 bags",
      logistics: "2-3 days delivery"
    },
    {
      id: 3,
      name: "Organic Roma Tomatoes",
      farmer: "David Tembo",
      location: "Lusaka, Zambia",
      price: 80,
      unit: "per 20kg crate",
      image: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      rating: 4.9,
      reviews: 203,
      status: "available",
      quantity: "100 crates",
      logistics: "Same day delivery"
    },
    {
      id: 4,
      name: "Sweet Potatoes",
      farmer: "Grace Mbeki",
      location: "Cape Town, South Africa",
      price: 35,
      unit: "per 25kg bag",
      image: "https://images.pexels.com/photos/7656468/pexels-photo-7656468.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      rating: 4.7,
      reviews: 124,
      status: "available",
      quantity: "40 bags",
      logistics: "Next day delivery"
    },
    {
      id: 5,
      name: "Green Bell Peppers",
      farmer: "Ahmed Hassan",
      location: "Accra, Ghana",
      price: 120,
      unit: "per 15kg crate",
      image: "https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      rating: 4.5,
      reviews: 67,
      status: "available",
      quantity: "30 crates",
      logistics: "2-3 days delivery"
    },
    {
      id: 6,
      name: "African Spinach",
      farmer: "Fatima Nkomo",
      location: "Harare, Zimbabwe",
      price: 15,
      unit: "per 5kg bundle",
      image: "https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      rating: 4.8,
      reviews: 95,
      status: "available",
      quantity: "200 bundles",
      logistics: "Same day delivery"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-[#4CAF50]';
      case 'limited': return 'bg-[#FFA726]';
      default: return 'bg-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'available': return <Check size={16} />;
      case 'limited': return <Clock size={16} />;
      default: return null;
    }
  };

  return (
    <section id="marketplace" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#6B4F1D] mb-6">
            Marketplace Preview
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
            Discover fresh, quality produce from verified farmers across Africa. 
            Every product comes with full traceability and reliable logistics support.
          </p>
          
          {/* Filter/Search Bar */}
          <div className="max-w-2xl mx-auto bg-white rounded-xl p-4 shadow-lg">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="text" 
                placeholder="Search products..." 
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4CAF50] focus:border-[#4CAF50]"
              />
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4CAF50] focus:border-[#4CAF50]">
                <option>All Countries</option>
                <option>Kenya</option>
                <option>Mozambique</option>
                <option>Zambia</option>
                <option>South Africa</option>
                <option>Ghana</option>
                <option>Zimbabwe</option>
              </select>
              <button className="bg-[#4CAF50] hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Product Image */}
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className={`absolute top-3 left-3 ${getStatusColor(product.status)} text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1`}>
                  {getStatusIcon(product.status)}
                  <span className="capitalize">{product.status}</span>
                </div>
                <div className="absolute top-3 right-3 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                  {product.quantity}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#6B4F1D] mb-2">{product.name}</h3>
                
                {/* Farmer Info */}
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-[#4CAF50] to-[#FFA726] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{product.farmer.charAt(0)}</span>
                  </div>
                  <span className="text-gray-700 font-medium">{product.farmer}</span>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-2 mb-4">
                  <MapPin className="text-[#2196F3]" size={16} />
                  <span className="text-gray-600">{product.location}</span>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center">
                    <Star className="text-[#FFA726] fill-current" size={16} />
                    <span className="text-gray-700 font-semibold ml-1">{product.rating}</span>
                  </div>
                  <span className="text-gray-500 text-sm">({product.reviews} reviews)</span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-[#6B4F1D]">${product.price}</span>
                    <span className="text-gray-600 ml-1">{product.unit}</span>
                  </div>
                </div>

                {/* Logistics */}
                <div className="flex items-center space-x-2 mb-6 text-sm text-gray-600">
                  <Truck size={16} />
                  <span>{product.logistics}</span>
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <button className="flex-1 bg-[#4CAF50] hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-colors">
                    Add to Cart
                  </button>
                  <button className="px-4 py-3 border border-[#2196F3] text-[#2196F3] hover:bg-[#2196F3] hover:text-white rounded-lg transition-colors">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-16">
          <button className="bg-[#2196F3] hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default MarketplacePreview;