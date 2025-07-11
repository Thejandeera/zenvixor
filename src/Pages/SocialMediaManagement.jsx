import React from 'react';
import { motion } from 'framer-motion';
import { FiInstagram, FiFacebook, FiTwitter, FiYoutube, FiCheckCircle, FiBarChart2, FiCalendar, FiDollarSign, FiUsers, FiImage, FiVideo } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
const SocialMediaManagement = () => {
  const services = [
    {
      title: "Post Creation Service",
      icon: <FiImage className="w-8 h-8" />,
      description: "Professionally designed social media posts that capture attention and drive engagement.",
      features: [
        "Custom graphics & visuals",
        "Platform-optimized designs",
        "Engagement-focused copywriting",
        "Brand consistency",
        "Quick turnaround (24-48 hours)",
        "Unlimited revisions"
      ],
      stats: [
        { value: "500+", label: "Posts Created" },
        { value: "3x", label: "Avg. Engagement" },
        { value: "24h", label: "Delivery Time" }
      ],
      image: "/images/social-post.jpg",
      accent: "from-red-500 to-pink-400"
    },
    {
      title: "Full Management",
      icon: <FiUsers className="w-8 h-8" />,
      description: "End-to-end social media management that grows your audience and builds your brand.",
      features: [
        "Content strategy & calendar",
        "Daily posting & engagement",
        "Community management",
        "Analytics & reporting",
        "Ad campaign management",
        "Monthly performance reviews"
      ],
      stats: [
        { value: "200+", label: "Clients" },
        { value: "40%", label: "Avg. Growth" },
        { value: "5/5", label: "Satisfaction" }
      ],
      image: "/images/social-management.jpg",
      accent: "from-green-500 to-emerald-400"
    }
  ];

  const platforms = [
    { name: "Instagram", icon: <FiInstagram className="w-6 h-6" />, color: "bg-gradient-to-br from-pink-500 to-purple-600" },
    { name: "Facebook", icon: <FiFacebook className="w-6 h-6" />, color: "bg-gradient-to-br from-blue-600 to-blue-400" },
    { name: "Twitter", icon: <FiTwitter className="w-6 h-6" />, color: "bg-gradient-to-br from-blue-400 to-cyan-400" },
    { name: "YouTube", icon: <FiYoutube className="w-6 h-6" />, color: "bg-gradient-to-br from-red-600 to-red-400" }
  ];

  const processSteps = [
    {
      title: "Strategy Session",
      description: "We analyze your brand and audience to create a customized content strategy.",
      icon: <FiBarChart2 className="w-6 h-6" />,
      color: "text-green-500"
    },
    {
      title: "Content Creation",
      description: "Our designers craft visually stunning posts tailored to your brand identity.",
      icon: <FiImage className="w-6 h-6" />,
      color: "text-red-500"
    },
    {
      title: "Scheduling",
      description: "We optimize posting times for maximum reach and engagement.",
      icon: <FiCalendar className="w-6 h-6" />,
      color: "text-green-500"
    },
    {
      title: "Engagement",
      description: "Our team interacts with your audience to build community and loyalty.",
      icon: <FiUsers className="w-6 h-6" />,
      color: "text-red-500"
    },
    {
      title: "Analysis",
      description: "Monthly reports with actionable insights to improve performance.",
      icon: <FiDollarSign className="w-6 h-6" />,
      color: "text-green-500"
    },
    {
      title: "Optimization",
      description: "Continuous improvement based on data and industry trends.",
      icon: <FiCheckCircle className="w-6 h-6" />,
      color: "text-red-500"
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

  const navigate = useNavigate();

  const scrollToPortfolio = () => {
     if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById('portfolio');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      const element = document.getElementById('portfolio');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToMap = () => {
     if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById('map');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      const element = document.getElementById('map');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigation = (url, newTab = false) => {
    if (newTab) {
      window.open(url, '_blank');
    } else {
      navigate(url);
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
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 mt-5 "
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-400">Social Media</span> Management
          </motion.h1>
          
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8"
          >
            We create scroll-stopping content and manage your social presence so you can focus on your business.
          </motion.p>
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <button onClick={() => handleNavigation('https://wa.me/94785329002', true)} className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg font-medium hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 text-white">
              Get Started
            </button>
            <button onClick={scrollToPortfolio} className="px-8 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300">
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
              Choose the perfect solution for your social media needs
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

      {/* Platforms Section */}
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
              We <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">Master</span> All Platforms
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our expertise spans all major social media networks
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6"
          >
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center"
              >
                <div className={`w-16 h-16 rounded-2xl mb-4 flex items-center justify-center ${platform.color} text-white`}>
                  {platform.icon}
                </div>
                <h3 className="text-lg font-medium">{platform.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
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
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-400">Process</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A proven workflow that delivers consistent results
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-green-500 via-red-500 to-green-500" />
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24"
            >
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative ${index % 2 === 0 ? 'lg:mr-auto lg:pr-8 lg:text-right' : 'lg:ml-auto lg:pl-8 lg:text-left'}`}
                >
                  <div className={`absolute top-0 ${index % 2 === 0 ? '-right-4 lg:right-0' : '-left-4 lg:left-0'} w-8 h-8 rounded-full flex items-center justify-center ${step.color} bg-white border-2 border-current`}>
                    {step.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{step.title}</h3>
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
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-400">Transform</span> Your Social Media?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-10">
            Let's create content that converts and grows your audience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigation('https://wa.me/94785329002', true)}
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg font-bold hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 text-white"
            >
              Start Your Project
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToMap}
              className="px-8 py-4 border border-gray-300 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300"
            >
              Contact Our Team
            </motion.button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default SocialMediaManagement;