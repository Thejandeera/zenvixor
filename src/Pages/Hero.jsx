import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const backgroundTextVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 0.2,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    float: {
      y: [-10, 10],
      transition: {
        y: {
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      }
    }
  };

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {/* Large Background Text */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            initial="hidden"
            animate="visible"
            variants={backgroundTextVariants}
          >
            <h1 className="text-[120px] sm:text-[180px] md:text-[220px] lg:text-[260px] xl:text-[300px] font-black text-yellow-400 select-none leading-none tracking-tighter">
              SOLUTIONS
            </h1>
          </motion.div>

          {/* Content Container */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between min-h-[400px] lg:min-h-[500px]">
            {/* Left Side - Script Text */}
            <motion.div
              className="flex-1 mb-8 lg:mb-0"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 font-script"
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-green-600">ZENVIXOR</span> STUDIOS
              </motion.h2>
              <motion.p
                className="text-lg md:text-xl text-gray-600 max-w-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                whileHover={{ x: 5 }}
              >
                Crafting digital excellence with innovative solutions
              </motion.p>

            </motion.div>

            {/* Right Side - Man Image */}
            <motion.div
              className="flex-1 flex justify-center lg:justify-end"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                <motion.img
                  src="/images/hero.jpg"
                  alt="Professional man working on laptop"
                  className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-2xl border-4 border-white"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  variants={floatingVariants}
                  animate="float"
                />
                {/* Decorative elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full opacity-20"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.3, 0.2]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute -bottom-6 -left-6 w-12 h-12 bg-green-600 rounded-full opacity-30"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.4, 0.3]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Statistics Section */}
        <motion.div
          className="mt-8 lg:mt-12 rounded-3xl shadow-xl p-6 lg:p-8 border border-gray-100"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          whileHover={{ y: -5 }}
          style={{
            background: "linear-gradient(135deg, rgba(209, 250, 229, 0.8) 0%, rgba(254, 202, 202, 0.8) 100%)"
          }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Customer Avatars and Count */}
            <motion.div
              className="flex items-center space-x-4"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex -space-x-3">
                <motion.div
                  className="w-14 h-14 rounded-full border-3 border-white flex items-center justify-center overflow-hidden shadow-md"
                  whileHover={{ y: -5, rotate: 5 }}
                >
                  <img src="/images/A.png" alt="Customer A" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div
                  className="w-14 h-14 rounded-full border-3 border-white flex items-center justify-center overflow-hidden shadow-md"
                  whileHover={{ y: -5, rotate: -5 }}
                >
                  <img src="/images/B.JPG" alt="Customer B" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div
                  className="w-14 h-14 rounded-full border-3 border-white flex items-center justify-center overflow-hidden shadow-md"
                  whileHover={{ y: -5, rotate: 5 }}
                >
                  <img src="/images/C.JPG" alt="Customer C" className="w-full h-full object-cover" />
                </motion.div>
              </div>
              <div>
                <motion.div
                  className="text-3xl font-bold text-green-600"
                  whileHover={{ scale: 1.05 }}
                >400+</motion.div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
            </motion.div>

            {/* Divider */}
            <motion.div
              className="hidden md:block h-16 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent"
              variants={itemVariants}
            />

            {/* Awards */}
            <motion.div
              className="text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold text-green-600">20+</div>
              <div className="text-sm text-gray-600 mt-1">Industry Awards</div>
            </motion.div>

            {/* Divider */}
            <motion.div
              className="hidden md:block h-16 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent"
              variants={itemVariants}
            />

            {/* Services */}
            <motion.div
              className="text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold text-green-600">600+</div>
              <div className="text-sm text-gray-600 mt-1">Services Offered</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Custom CSS for script font */}
      <style jsx>{`
        .font-script {
          font-family: 'Brush Script MT', cursive;
        }
        @media (max-width: 640px) {
          .font-script {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;