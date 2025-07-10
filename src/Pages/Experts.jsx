import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';

const Experts = () => {
  const founders = [
    {
      id: 1,
      name: "K.M Thejandeera Sandeepana",
      role: "Co-Founder & CTO",
      description: "Visionary technologist with expertise in full-stack development and system architecture. Leads our technical innovation with a focus on scalable solutions.",
      image: "/images/thejan.png",
      social: {
        linkedin: "https://www.linkedin.com/in/thejandeera-sandeepana-6baa17208/",
        twitter: "https://thejandeerasandeepana.netlify.app/",
        github: "https://github.com/Thejandeera",
        email: "mailto:thejan.info@gmail.com"
      }
    },
    {
      id: 2,
      name: "S.B. Samitha Bandara",
      role: "Co-Founder & CEO",
      description: "Strategic leader driving business growth and client relationships. Combines industry knowledge with a passion for digital transformation.",
      image: "/images/samitha.png",
      social: {
        linkedin: "https://www.linkedin.com/in/samitha-bandara-97a536253/",
        twitter: "#",
        github: "#",
        email: "mailto:samitha@zenvixor.com"
      }
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
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const cardVariants = {
    hover: {
      y: -10,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="bg-white mt-2 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* <motion.span 
            className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wide mb-4 shadow-md"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            MEET OUR FOUNDERS
          </motion.span> */}
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">Minds</span> Behind Zenvixor
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Our founders combine technical brilliance with business acumen to drive innovation and deliver exceptional results.
          </motion.p>
        </motion.div>

        {/* Founders Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {founders.map((founder) => (
            <motion.div 
              key={founder.id}
              variants={itemVariants}
              whileHover="hover"
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500"
            >
              <motion.div 
                className="flex flex-col md:flex-row h-full"
                variants={cardVariants}
              >
                {/* Image Container */}
                <div className="md:w-1/3 relative">
                  <div className="relative h-full min-h-[300px] md:min-h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-600 opacity-10" />
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <motion.div 
                        className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-white shadow-2xl overflow-hidden"
                        initial={{ scale: 0.9 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.6, type: "spring" }}
                        viewport={{ once: true }}
                      >
                        <img 
                          src={founder.image} 
                          alt={founder.name}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Content Container */}
                <div className="md:w-2/3 p-8 flex flex-col justify-center">
                  <motion.h3 
                    className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
                    initial={{ x: -20 }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    {founder.name}
                  </motion.h3>
                  <motion.p 
                    className="text-green-600 font-medium mb-4"
                    initial={{ x: -20 }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {founder.role}
                  </motion.p>
                  <motion.p 
                    className="text-gray-600 mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {founder.description}
                  </motion.p>

                  {/* Social Links */}
                  <motion.div 
                    className="flex space-x-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <motion.a 
                      href={founder.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-green-500 hover:text-white transition-colors"
                      whileHover={{ y: -3 }}
                    >
                      <Linkedin size={18} />
                    </motion.a>
                    <motion.a 
                      href={founder.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-green-500 hover:text-white transition-colors"
                      whileHover={{ y: -3 }}
                    >
                      <Twitter size={18} />
                    </motion.a>
                    <motion.a 
                      href={founder.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-green-500 hover:text-white transition-colors"
                      whileHover={{ y: -3 }}
                    >
                      <Github size={18} />
                    </motion.a>
                    <motion.a 
                      href={founder.social.email}
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-green-500 hover:text-white transition-colors"
                      whileHover={{ y: -3 }}
                    >
                      <Mail size={18} />
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        
      </div>
    </section>
  );
};

export default Experts;