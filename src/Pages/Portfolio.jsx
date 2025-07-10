import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  const testimonials = [
    {
      id: 1,
      text: "Outstanding service! The team's commitment to excellence is evident in the seamless execution of our project. Our digital landscape has been elevated, thanks to this agency.",
      author: "Chathumina Alwis",
      position: "Restaurent Owner",
      rating: 5,
      image: "/images/A.png"
    },
    {
      id: 2,
      text: "Exceptional work quality and professional approach. The team delivered beyond our expectations and transformed our vision into reality with remarkable precision.",
      author: "Dilum Shamilka",
      position: "Tec Advisor",
      rating: 5,
      image: "/images/B.JPG"
    },
    {
      id: 3,
      text: "Incredible attention to detail and customer service. They understood our needs perfectly and delivered a solution that exceeded all our requirements.",
      author: "Chamilka Pramod",
      position: "Salesman",
      rating: 5,
      image: "/images/C.JPG"
    }
  ];

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <Star 
          className={`w-5 h-5 ${i < rating ? 'text-orange-500 fill-orange-500' : 'text-gray-200'}`}
        />
      </motion.div>
    ));
  };

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

  const testimonialVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      transition: {
        duration: 0.3
      }
    })
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Left Section */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                WHAT OUR <span className="text-orange-500">CLIENTS</span> SAY
                <br />
                ABOUT US
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                Discover the firsthand experiences of our valued clients as they share their thoughts on our exceptional service and commitment.
              </p>
            </div>

            {/* Statistics */}
            <motion.div 
              className="flex flex-col sm:flex-row items-start sm:items-center gap-8"
              variants={itemVariants}
            >
              {/* Happy Customers */}
              <div className="flex items-center gap-4">
                <motion.div 
                  className="flex -space-x-2"
                  whileHover={{ scale: 1.05 }}
                >
                  {['/images/A.png', '/images/B.JPG', '/images/C.JPG', '/images/D.JPG'].map((img, index) => (
                    <motion.div
                      key={index}
                      className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                      style={{ 
                        zIndex: 4 - index
                      }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1 * index, type: 'spring' }}
                    >
                      <img src={img} alt={`Customer ${index}`} className="w-full h-full object-cover" />
                    </motion.div>
                  ))}
                </motion.div>
                <div>
                  <div className="text-xl font-bold">400+ Happy Customers</div>
                  <div className="text-gray-500 text-sm">From around the world</div>
                </div>
              </div>

              {/* Ratings */}
              <div className="border-l border-gray-200 pl-6">
                <div className="flex items-center gap-2 mb-2">
                  {renderStars(5)}
                </div>
                <div className="text-xl font-bold">4.98 Star Average</div>
                <div className="text-gray-500 text-sm">(893+ Ratings)</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Section - Testimonial Card */}
          <motion.div className="relative" variants={itemVariants}>
            <div className="relative h-full min-h-[400px] mt-8">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={currentTestimonial}
                  custom={direction}
                  variants={testimonialVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0"
                >
                  <motion.div 
                    className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-3xl p-8 shadow-2xl h-full flex flex-col"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Quote Icon */}
                    <Quote className="text-orange-500 w-8 h-8 mb-6 opacity-80" />
                    
                    {/* Testimonial Text */}
                    <p className="text-gray-200 text-lg leading-relaxed mb-8 flex-1">
                      {testimonials[currentTestimonial].text}
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-4">
                      <motion.div 
                        className="w-12 h-12 rounded-full overflow-hidden border-2 border-orange-500"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <img 
                          src={testimonials[currentTestimonial].image} 
                          alt={testimonials[currentTestimonial].author}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          {renderStars(testimonials[currentTestimonial].rating)}
                        </div>
                        <div className="font-bold text-white">
                          {testimonials[currentTestimonial].author}
                        </div>
                        <div className="text-gray-300 text-sm">
                          {testimonials[currentTestimonial].position}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <motion.button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </motion.button>
              
              <motion.div 
                className="flex items-center gap-2 text-gray-600 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-orange-500 text-lg font-bold">
                  {String(currentTestimonial + 1).padStart(2, '0')}
                </span>
                <span>/</span>
                <span>{String(testimonials.length).padStart(2, '0')}</span>
              </motion.div>
              
              <motion.button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;