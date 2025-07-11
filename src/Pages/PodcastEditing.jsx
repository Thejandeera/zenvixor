import React from 'react';
import { motion } from 'framer-motion';
import { FiMic, FiHeadphones, FiMusic, FiCheckCircle, FiClock, FiDollarSign, FiUsers, FiBarChart2, FiLayers, FiVolume2 } from 'react-icons/fi';

const PodcastEditing = () => {
  const services = [
    {
      title: "Basic Audio Editing",
      icon: <FiHeadphones className="w-8 h-8" />,
      description: "Clean, professional editing to make your podcast sound polished",
      features: [
        "Noise reduction & cleanup",
        "Um/ah removal",
        "Pacing adjustments",
        "Basic leveling",
        "Export in multiple formats",
        "24-48 hour turnaround"
      ],
      stats: [
        { value: "$49", label: "Per Episode" },
        { value: "24h", label: "Delivery" },
        { value: "4.9/5", label: "Rating" }
      ],
      image: "/images/podcast-basic.jpg",
      accent: "from-green-500 to-emerald-400"
    },
    {
      title: "Premium Production",
      icon: <FiMic className="w-8 h-8" />,
      description: "Full-service production for professional sounding podcasts",
      features: [
        "Advanced audio restoration",
        "Dynamic leveling & compression",
        "Custom music & sound effects",
        "Multi-track mixing",
        "Show notes creation",
        "Video podcast versions"
      ],
      stats: [
        { value: "$99", label: "Per Episode" },
        { value: "48h", label: "Delivery" },
        { value: "500+", label: "Episodes" }
      ],
      image: "/images/podcast-premium.jpg",
      accent: "from-red-500 to-pink-400"
    },
    {
      title: "Full Podcast Management",
      icon: <FiLayers className="w-8 h-8" />,
      description: "End-to-end podcast production and distribution",
      features: [
        "Complete episode production",
        "Show artwork & branding",
        "Distribution to all platforms",
        "SEO-optimized titles/descriptions",
        "Monthly analytics reports",
        "Guest booking assistance"
      ],
      stats: [
        { value: "$299", label: "Monthly" },
        { value: "24/7", label: "Support" },
        { value: "100+", label: "Clients" }
      ],
      image: "/images/podcast-management.jpg",
      accent: "from-green-600 to-teal-400"
    }
  ];

  const benefits = [
    {
      title: "Crystal Clear Audio",
      description: "Professional noise reduction and cleanup",
      icon: <FiVolume2 className="w-6 h-6" />,
      color: "text-green-500"
    },
    {
      title: "Faster Turnaround",
      description: "Get your episodes back in 24-48 hours",
      icon: <FiClock className="w-6 h-6" />,
      color: "text-red-500"
    },
    {
      title: "Increased Listeners",
      description: "Better quality = more audience retention",
      icon: <FiUsers className="w-6 h-6" />,
      color: "text-green-500"
    },
    {
      title: "Monetization Ready",
      description: "Professional sound attracts sponsors",
      icon: <FiDollarSign className="w-6 h-6" />,
      color: "text-red-500"
    }
  ];

  const workflow = [
    {
      title: "Upload Files",
      description: "Send us your raw recordings",
      icon: <FiMusic className="w-6 h-6" />,
      color: "bg-green-500"
    },
    {
      title: "Editing Magic",
      description: "We transform your audio",
      icon: <FiHeadphones className="w-6 h-6" />,
      color: "bg-red-500"
    },
    {
      title: "Review & Approve",
      description: "You check the edited version",
      icon: <FiCheckCircle className="w-6 h-6" />,
      color: "bg-green-500"
    },
    {
      title: "Final Delivery",
      description: "Get your polished episode",
      icon: <FiBarChart2 className="w-6 h-6" />,
      color: "bg-red-500"
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
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-400">Podcast Editing</span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8"
          >
            Crystal-clear audio editing that makes your podcast sound professional and keeps listeners engaged
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
              Hear Samples
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
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-400">Editing</span> Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the perfect package for your podcast needs
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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

      {/* Benefits Section */}
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
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">Choose Us</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              What makes our podcast editing service stand out
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
                <div className={`w-12 h-12 rounded-full mb-4 flex items-center justify-center ${benefit.color} bg-white border-2 border-current`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Workflow Section */}
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
              Simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-400">4-Step</span> Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              How we transform your raw recordings into polished episodes
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden lg:flex absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-green-500 via-red-500 to-green-500" />
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {workflow.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative z-10 text-center"
                >
                  <div className={`w-16 h-16 rounded-full mb-4 mx-auto flex items-center justify-center ${step.color} text-white`}>
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
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
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-400">Elevate</span> Your Podcast?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-10">
            Get professional editing that makes your podcast stand out
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
              Get a Free Sample
            </motion.button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default PodcastEditing;