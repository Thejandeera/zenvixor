import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiCode, FiServer, FiLayers, FiCheckCircle, FiClock, FiDollarSign, FiUsers } from 'react-icons/fi';


const WebsiteDevelopment = () => {
  const services = [
    {
      title: "Frontend Development",
      icon: <FiCode className="w-6 h-6 md:w-8 md:h-8" />,
      description: "Crafting pixel-perfect, responsive interfaces that captivate users and drive engagement.",
      features: [
        "React.js & Next.js development",
        "Tailwind CSS & Styled Components",
        "Interactive animations",
        "Mobile-first responsive design",
        "Performance optimization",
        "Accessibility compliance"
      ],
      image: "/images/frontend-dev.jpg",
      stats: [
        { value: "200+", label: "Projects" },
        { value: "24h", label: "Response" },
        { value: "98%", label: "Satisfaction" }
      ],
      accent: "from-emerald-500 to-green-300"
    },
    {
      title: "Backend Development",
      icon: <FiServer className="w-6 h-6 md:w-8 md:h-8" />,
      description: "Building robust, scalable server architectures that power your applications securely.",
      features: [
        "Node.js & Express APIs",
        "Python Django & Flask",
        "Database design",
        "Authentication systems",
        "Cloud deployment",
        "API documentation"
      ],
      image: "/images/backend-dev.jpg",
      stats: [
        { value: "10M+", label: "Requests" },
        { value: "99.9%", label: "Uptime" },
        { value: "50ms", label: "Latency" }
      ],
      accent: "from-red-500 to-rose-300"
    },
    {
      title: "Fullstack Development",
      icon: <FiLayers className="w-6 h-6 md:w-8 md:h-8" />,
      description: "End-to-end solutions that combine beautiful interfaces with powerful functionality.",
      features: [
        "MERN & MEAN stack",
        "Serverless architecture",
        "Real-time applications",
        "Progressive Web Apps",
        "CI/CD pipelines",
        "End-to-end testing"
      ],
      image: "/images/fullstack-dev.jpg",
      stats: [
        { value: "360°", label: "Solutions" },
        { value: "2x", label: "Delivery" },
        { value: "1.5M", label: "Users" }
      ],
      accent: "from-green-600 to-emerald-400"
    }
  ];

  const navigate = useNavigate();

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

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  const handleNavigation = (url, newTab = false) => {
    if (newTab) {
      window.open(url, '_blank');
    } else {
      navigate(url);
    }
  };

  const scrollToSupport = () => {
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

  return (
    <div className="bg-white text-black min-h-screen">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-100 to-white"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-64 md:h-64 rounded-full bg-green-500 blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-64 md:h-64 rounded-full bg-red-500 blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.h1 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-5 mb-4 md:mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">Website</span> Development
          </motion.h1>
          
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto mb-8 md:mb-10"
          >
            We build high-performance web applications that drive business growth and user engagement.
          </motion.p>
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
          >
            <button 
              onClick={() => handleNavigation('https://wa.me/94785329002', true)}
              className="px-6 py-2.5 sm:px-8 sm:py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg font-medium hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 text-white text-sm sm:text-base"
            >
              Get Started
            </button>
            <button 
              onClick={scrollToPortfolio}
              className="px-6 py-2.5 sm:px-8 sm:py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 text-sm sm:text-base"
            >
              View Portfolio
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={cardHover}
                className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg h-full"
              >
                <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 ${service.accent} transition-opacity duration-500`} />
                
                <div className="relative z-10 p-6 md:p-8 h-full flex flex-col">
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-lg mb-4 md:mb-6 flex items-center justify-center bg-gradient-to-br ${service.accent} text-white`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{service.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6">{service.description}</p>
                  
                  <div className="mb-6 md:mb-8">
                    <h4 className="text-xs md:text-sm font-semibold text-gray-500 mb-2 md:mb-3">KEY FEATURES</h4>
                    <ul className="space-y-2 md:space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <FiCheckCircle className="flex-shrink-0 mt-0.5 md:mt-1 mr-2 md:mr-3 text-green-500 text-sm md:text-base" />
                          <span className="text-gray-800 text-sm md:text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-auto pt-4 md:pt-6 border-t border-gray-200">
                    <div className="flex justify-between">
                      {service.stats.map((stat, i) => (
                        <div key={i} className="text-center">
                          <div className="text-lg md:text-2xl font-bold text-gray-900">{stat.value}</div>
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

      {/* Process Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">Development</span> Process
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto">
              A streamlined workflow that delivers exceptional results on time, every time.
            </p>
          </motion.div>
          
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 h-full w-0.5">
              <motion.div
                initial={{ scaleY: 0, originY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="h-full bg-gradient-to-b from-green-500 via-red-500 to-green-500 relative"
              >
                <motion.div
                  variants={timelineVariants}
                  initial="hidden"
                  animate="visible"
                  className="absolute top-0 left-0 w-full h-6 md:h-8 bg-white rounded-full"
                  style={{ boxShadow: "0 0 10px rgba(16, 185, 129, 0.7)" }}
                />
              </motion.div>
            </div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-8 md:gap-12 lg:gap-24"
            >
              {[
                {
                  title: "Discovery",
                  description: "We analyze your requirements and business goals to create a comprehensive project plan.",
                  icon: <FiUsers className="w-5 h-5 md:w-6 md:h-6" />,
                  color: "text-green-500"
                },
                {
                  title: "Design",
                  description: "Our designers create wireframes and prototypes for your approval before development.",
                  icon: <FiLayers className="w-5 h-5 md:w-6 md:h-6" />,
                  color: "text-red-500"
                },
                {
                  title: "Development",
                  description: "Agile sprints with weekly deliverables ensure you're always in the loop.",
                  icon: <FiCode className="w-5 h-5 md:w-6 md:h-6" />,
                  color: "text-green-500"
                },
                {
                  title: "Testing",
                  description: "Rigorous QA testing across devices and browsers guarantees flawless performance.",
                  icon: <FiCheckCircle className="w-5 h-5 md:w-6 md:h-6" />,
                  color: "text-red-500"
                },
                {
                  title: "Deployment",
                  description: "We handle everything from server setup to DNS configuration for seamless launch.",
                  icon: <FiServer className="w-5 h-5 md:w-6 md:h-6" />,
                  color: "text-green-500"
                },
                {
                  title: "Maintenance",
                  description: "Ongoing support and updates keep your application running smoothly.",
                  icon: <FiClock className="w-5 h-5 md:w-6 md:h-6" />,
                  color: "text-red-500"
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative ${index % 2 === 0 ? 'lg:mr-auto lg:pr-8 lg:text-right' : 'lg:ml-auto lg:pl-8 lg:text-left'}`}
                >
                  <div className={`absolute top-0 ${index % 2 === 0 ? '-right-3 lg:right-0' : '-left-3 lg:left-0'} w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center ${step.color} bg-white border-2 border-current`}>
                    {step.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{step.description}</p>
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
        className="py-16  md:py-32 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-br from-white to-gray-100"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-gray-900">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">Elevate</span> Your Web Presence?
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-8 md:mb-10">
            Let's build something extraordinary together. Get started with a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigation('https://wa.me/94785329002', true)}
              className="px-6 py-2.5 sm:px-8 sm:py-4 bg-gradient-to-r from-green-600 to-emerald-500 rounded-lg font-bold hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 text-white text-sm sm:text-base"
            >
              Start Your Project
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToSupport}
              className="px-6 py-2.5 sm:px-8 sm:py-4 border border-gray-300 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 text-gray-900 text-sm sm:text-base"
            >
              Contact Our Team
            </motion.button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default WebsiteDevelopment;