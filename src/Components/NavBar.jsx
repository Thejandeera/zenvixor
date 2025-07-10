import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMobileMenuOpen(false);
    
    // Scroll to the relevant section
    const sectionId = link.toLowerCase();
    let targetElement;
    
    if (sectionId === 'support' || sectionId === 'meet experts') {
      targetElement = document.getElementById('map');
    } else {
      targetElement = document.getElementById(sectionId);
    }

    if (targetElement) {
      // Close mobile menu first
      setIsMobileMenuOpen(false);
      
      // Wait for menu to close before scrolling
      setTimeout(() => {
        targetElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 300); // Match this with your mobile menu close animation duration
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Animation variants
  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" },
    exit: { opacity: 0, height: 0 }
  };

  const navItemVariants = {
    hidden: { y: -10, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    })
  };

  return (
    <nav className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white py-3'}`}>
      <div className="max-w-7xl mb-0 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/zenvixor.png"
              alt="EchoHub"
              className="h-15 w-auto transition-all duration-300 hover:scale-105"
            />
          </motion.div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {['HOME', 'ABOUT', 'SERVICES', 'PORTFOLIO', 'EXPERTS', 'SUPPORT'].map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ease-in-out ${activeLink === link
                  ? 'text-green-600'
                  : 'text-gray-700 hover:text-green-600'
                  }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link);
                }}
              >
                {link}
                {activeLink === link && (
                  <motion.span
                    className="absolute bottom-0 left-3 w-[calc(100%-1.5rem)] h-0.5 bg-red-500"
                    layoutId="navUnderline"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* Meet Experts Button - Desktop */}
          <motion.div
            className="hidden md:flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <button 
              className="bg-white border-2 border-black text-black px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105 shadow hover:shadow-lg hover:bg-gradient-to-r from-green-200 to-red-200"
              onClick={() => {
                setActiveLink('MEET EXPERTS');
                handleLinkClick('MEET EXPERTS');
              }}
            >
              MEET EXPERTS
            </button>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-green-600 focus:outline-none"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.9 }}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Animated */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white shadow-lg overflow-hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-2 pt-2 pb-4 space-y-1">
              {['HOME', 'ABOUT', 'SERVICES', 'PORTFOLIO','EXPERTS', 'SUPPORT'].map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className={`block px-3 py-3 rounded-md text-base font-medium transition-colors duration-300 ease-in-out ${activeLink === link
                    ? 'text-green-600 bg-green-50'
                    : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                    }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link);
                  }}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                >
                  {link}
                  {activeLink === link && (
                    <span className="block w-6 h-0.5 bg-red-500 mt-1"></span>
                  )}
                </motion.a>
              ))}
              <motion.button
                className="w-full mt-2 bg-white border-2 border-black text-black px-6 py-3 rounded-full text-base font-medium transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-green-200 to-red-200"
                onClick={() => {
                  setActiveLink('MEET EXPERTS');
                  handleLinkClick('MEET EXPERTS');
                }}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                MEET EXPERTS
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;