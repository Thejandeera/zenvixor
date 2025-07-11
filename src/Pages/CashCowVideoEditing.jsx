import React from 'react';
import { motion } from 'framer-motion';
import { FiFilm, FiImage, FiDollarSign, FiClock, FiCheckCircle, FiLayers, FiPlay, FiTrendingUp, FiBarChart2 } from 'react-icons/fi';

const CashCowVideoEditing = () => {
  const services = [
    {
      title: "Complete Video Editing",
      icon: <FiFilm className="w-8 h-8" />,
      description: "Professional video editing that transforms raw footage into engaging, high-converting content.",
      features: [
        "Premium transitions & effects",
        "Color grading & correction",
        "Motion graphics & animations",
        "Audio enhancement & mixing",
        "Text overlays & captions",
        "Platform-optimized formats"
      ],
      stats: [
        { value: "1000+", label: "Videos Edited" },
        { value: "3-5x", label: "ROI Increase" },
        { value: "48h", label: "Avg. Turnaround" }
      ],
      image: "/images/video-editing.jpg",
      accent: "from-green-500 to-emerald-400"
    },
    {
      title: "Slideshow Video Creation",
      icon: <FiImage className="w-8 h-8" />,
      description: "Stunning slideshow videos crafted from your images for events, promotions, and social media.",
      features: [
        "Image-to-video conversion",
        "Themed templates",
        "Music synchronization",
        "Text animations",
        "Branded intros/outros",
        "Quick 24h delivery"
      ],
      stats: [
        { value: "500+", label: "Slideshows" },
        { value: "4.9/5", label: "Client Rating" },
        { value: "20%", label: "Engagement Boost" }
      ],
      image: "/images/slideshow-editing.jpg",
      accent: "from-red-500 to-pink-400"
    }
  ];

  const workflow = [
    {
      title: "Upload Assets",
      description: "Send us your footage, images, and brand guidelines",
      icon: <FiPlay className="w-6 h-6" />,
      color: "text-green-500"
    },
    {
      title: "Editing Magic",
      description: "Our team crafts your high-converting video",
      icon: <FiFilm className="w-6 h-6" />,
      color: "text-red-500"
    },
    {
      title: "Review & Revise",
      description: "Provide feedback, we make unlimited revisions",
      icon: <FiCheckCircle className="w-6 h-6" />,
      color: "text-green-500"
    },
    {
      title: "Final Delivery",
      description: "Receive your polished, ready-to-publish video",
      icon: <FiTrendingUp className="w-6 h-6" />,
      color: "text-red-500"
    }
  ];

  const benefits = [
    {
      title: "Increased Conversions",
      description: "Videos convert 3-5x better than static content",
      icon: <FiDollarSign className="w-6 h-6" />
    },
    {
      title: "Faster Results",
      description: "Get your content delivered in 24-48 hours",
      icon: <FiClock className="w-6 h-6" />
    },
    {
      title: "Professional Quality",
      description: "Hollywood-grade editing techniques",
      icon: <FiLayers className="w-6 h-6" />
    },
    {
      title: "Data-Driven",
      description: "Optimized based on performance analytics",
      icon: <FiBarChart2 className="w-6 h-6" />
    }
  ];

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const cardHover = {
    scale: 1.03,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-64 md:h-64 rounded-full bg-green-500 blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-64 md:h-64 rounded-full bg-red-500 blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.h1 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-400">CashCow</span> Video Editing
          </motion.h1>
          
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8"
          >
            High-converting video edits designed to maximize your ROI and engagement
          </motion.p>
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg font-medium hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 text-white">
              Get Started
            </button>
            <button className="px-8 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300">
              View Portfolio
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-400">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional video editing solutions tailored to your needs
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={cardHover}
                className="group relative overflow-hidden rounded-xl border border-gray-200 shadow-lg"
              >
                <div className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-500" style={{ backgroundImage: `url(${service.image})` }} />
                <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 ${service.accent} transition-opacity duration-500`} />
                
                <div className="relative z-10 p-8 h-full flex flex-col">
                  <div className={`w-16 h-16 rounded-lg mb-6 flex items-center justify-center bg-gradient-to-br ${service.accent} text-white`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-500 mb-3">KEY FEATURES</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <FiCheckCircle className="flex-shrink-0 mt-1 mr-3 text-green-500" />
                          <span className="text-gray-800">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-auto pt-6 border-t border-gray-200">
                    <div className="flex justify-between">
                      {service.stats.map((stat, i) => (
                        <div key={i} className="text-center">
                          <div className="text-2xl font-bold">{stat.value}</div>
                          <div className="text-xs text-gray-500">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">4-Step</span> Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get professional video edits without the hassle
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {workflow.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center"
              >
                <div className={`w-12 h-12 rounded-full mb-4 mx-auto flex items-center justify-center ${step.color} bg-white border-2 border-current`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-400">Our Service</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional editing that delivers real results
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-br from-gray-100 to-white text-green-500">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-400">Boost</span> Your Conversions?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-10">
            Let's create high-converting videos that grow your business
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg font-bold hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 text-white"
            >
              Start Your Project
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-gray-300 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300"
            >
              See Pricing
            </motion.button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default CashCowVideoEditing;