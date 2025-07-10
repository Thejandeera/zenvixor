import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: "Cash Cow Editing",
      description: "High-converting video edits for maximum ROI",
      image: "/images/image1.jpg",
      stats: ["2000+ Projects", "28g/m Efficiency"],
      accent: "bg-gradient-to-br from-amber-500 to-yellow-300"
    },
    {
      title: "Reels Editing",
      description: "Scroll-stopping short-form content",
      image: "/images/image2.jpg",
      stats: ["100% Satisfaction", "48h Delivery"],
      accent: "bg-gradient-to-br from-blue-500 to-cyan-300"
    },
    {
      title: "Slide Show Video",
      description: "Dynamic visual storytelling",
      image: "/images/image3.jpg",
      stats: ["500+ Clients", "4K Quality"],
      accent: "bg-gradient-to-br from-purple-500 to-fuchsia-300"
    },
    {
      title: "Podcast Editing",
      description: "Crystal-clear audio production",
      image: "/images/image4.jpg",
      stats: ["AI Noise Removal", "Multi-track"],
      accent: "bg-gradient-to-br from-green-500 to-emerald-300"
    },
    {
      title: "Promotion Video",
      description: "High-impact marketing assets",
      image: "/images/image5.jpg",
      stats: ["A.4.2 Standards", "A.7A Compliance"],
      accent: "bg-gradient-to-br from-red-500 to-pink-300"
    },
    {
      title: "YouTube Management",
      description: "End-to-end channel growth",
      image: "/images/image6.jpg",
      stats: ["SEO Optimized", "Analytics Driven"],
      accent: "bg-gradient-to-br from-gray-800 to-gray-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    hover: {
      y: -15,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white    ">  
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-blue-500 blur-3xl animate-float" />
        <div className="absolute top-1/2 -right-20 w-96 h-96 rounded-full bg-purple-500 blur-3xl animate-float delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <span className="inline-block text-sm font-medium text-amber-400 mb-3 tracking-wider">
            PROFESSIONAL SERVICES
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
            Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">Content</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Premium editing services designed to elevate your digital presence
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="group relative h-[400px] rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-500"
            >
              {/* Image background with parallax effect */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              
              {/* Gradient overlay */}
              <div className={`absolute inset-0 ${service.accent} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
              
              {/* Content container */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 flex flex-col justify-end">
                {/* Stats chips */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.stats.map((stat, i) => (
                    <span 
                      key={i}
                      className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-black/30 backdrop-blur-sm text-white border border-white/10"
                    >
                      {stat}
                    </span>
                  ))}
                </div>
                
                {/* Service info */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <button className="px-5 py-2.5 rounded-lg bg-white text-gray-900 font-medium hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2">
                    <span>Explore Service</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Hover accent */}
              <div className={`absolute bottom-0 left-0 h-1 w-0 ${service.accent} group-hover:w-full transition-all duration-500`} />
            </motion.div>
          ))}
        </motion.div>

        
      </div>

      {/* Global styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Services;