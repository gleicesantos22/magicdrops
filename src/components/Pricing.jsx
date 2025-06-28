import React, { useState } from 'react'

const Pricing = () => {
  const [selectedPackage, setSelectedPackage] = useState(1)

  const packages = [
    {
      id: 0,
      bottles: 1,
      title: "Starter Pack",
      originalPrice: 79,
      price: 39,
      savings: 40,
      popular: false,
      features: ["1 Bottle (30 days)", "Free Shipping", "30-Day Guarantee"]
    },
    {
      id: 1,
      bottles: 3,
      title: "Most Popular",
      originalPrice: 237,
      price: 99,
      savings: 138,
      popular: true,
      features: ["3 Bottles (90 days)", "Free Shipping", "30-Day Guarantee", "Save $138"]
    },
    {
      id: 2,
      bottles: 6,
      title: "Best Value",
      originalPrice: 474,
      price: 179,
      savings: 295,
      popular: false,
      features: ["6 Bottles (180 days)", "Free Shipping", "30-Day Guarantee", "Save $295", "Bonus eBook"]
    }
  ]

  return (
    <section id="pricing" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose Your <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Package</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the perfect package for your health transformation journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg) => (
            <div 
              key={pkg.id}
              className={`relative bg-white rounded-3xl p-8 shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer ${
                pkg.popular ? 'border-2 border-blue-500 transform scale-105' : 'border border-gray-200'
              } ${selectedPackage === pkg.id ? 'ring-4 ring-blue-300' : ''}`}
              onClick={() => setSelectedPackage(pkg.id)}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-blue-600">${pkg.price}</span>
                  <span className="text-lg text-gray-500 line-through ml-2">${pkg.originalPrice}</span>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-6">
                  <span className="text-green-700 font-semibold">Save ${pkg.savings}!</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
                    pkg.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl' 
                      : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                  }`}
                  onClick={() => {
                    // Add checkout logic here
                    window.location.href = `https://orders.cartpanda.com/checkout?package=${pkg.id}&bottles=${pkg.bottles}&price=${pkg.price}`
                  }}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-lg">
            <img 
              src="https://ed.tb3pages.fun/wp-content/uploads/2025/04/SELO-180-DAYS.svg" 
              alt="180 Day Guarantee" 
              className="w-16 h-16 mr-3"
            />
            <div className="text-left">
              <div className="font-semibold text-gray-900">180-Day Money Back Guarantee</div>
              <div className="text-sm text-gray-600">Try risk-free for 6 months</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing