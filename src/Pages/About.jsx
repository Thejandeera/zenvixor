import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "backOut"
      }
    }
  };

  const badgeVariants = {
    hidden: { scale: 0, rotate: -45 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    },
    hover: {
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto mt-7">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Left Content */}
          <div className="space-y-6">
            {/* Section Tag */}
            <motion.div 
              className="inline-block"
              variants={itemVariants}
            >
              <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wide shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                ABOUT US
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              variants={itemVariants}
            >
              Navigating the Digital Landscape with Excellence
            </motion.h2>

            {/* Description */}
            <motion.p 
              className="text-gray-700 text-lg leading-relaxed max-w-2xl"
              variants={itemVariants}
            >
              Our journey is rooted in a client-centric approach, where we prioritize understanding unique needs and crafting bespoke strategies. From concept to execution, we seamlessly integrate creativity and technical prowess to deliver solutions that resonate and drive tangible results.
            </motion.p>

            {/* Founder Info */}
            <motion.div 
              className="pt-8"
              variants={itemVariants}
            >
              <p className="text-gray-600 text-sm font-medium uppercase tracking-wide mb-2">
                Founder & CEO
              </p>
              <h3 className="text-2xl font-bold text-gray-900">
                THEJANDEERA SANDEEPANA 
              </h3>
            </motion.div>
          </div>

          {/* Right Content - Image with Badge */}
          <motion.div 
            className="relative flex justify-center lg:justify-end"
            variants={imageVariants}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="w-80 h-96 md:w-96 md:h-[450px] bg-gradient-to-br from-green-400 to-green-600 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                <img 
                  src="/images/man.jpg" 
                  alt="Szekeres Dalma - Founder & CEO" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Circular Badge */}
              <motion.div 
                className="absolute -bottom-8 -left-8 w-32 h-32 bg-green-800 rounded-full flex items-center justify-center shadow-xl cursor-pointer"
                variants={badgeVariants}
                whileHover="hover"
              >
                <div className="text-center">
                  <div className="text-white text-xs font-bold uppercase mb-1 transform -rotate-12">
                    ABOUT US
                  </div>
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mx-auto">
                    <svg 
                      className="w-4 h-4 text-green-800 transition-transform duration-300 hover:scale-125" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M7 17l9.2-9.2M17 17H7V7" 
                      />
                    </svg>
                  </div>
                  <div className="text-white text-xs font-bold uppercase mt-1 transform rotate-12">
                    ABOUT US
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;