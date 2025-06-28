import React from 'react'

const Benefits = () => {
  const benefits = [
    {
      icon: "⚡",
      title: "Increased Energy",
      description: "Feel more energized throughout the day with our advanced TB3 formula."
    },
    {
      icon: "🧠",
      title: "Enhanced Focus",
      description: "Improve mental clarity and concentration for better productivity."
    },
    {
      icon: "💪",
      title: "Better Vitality",
      description: "Boost your overall health and wellness with natural ingredients."
    },
    {
      icon: "🛡️",
      title: "Immune Support",
      description: "Strengthen your immune system with powerful antioxidants."
    },
    {
      icon: "😴",
      title: "Better Sleep",
      description: "Improve sleep quality and wake up feeling refreshed."
    },
    {
      icon: "❤️",
      title: "Heart Health",
      description: "Support cardiovascular health with our scientifically proven formula."
    }
  ]

  return (
    <section id="benefits" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Magic Blue Drops?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the transformative power of our TB3 supplement with these incredible benefits
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits