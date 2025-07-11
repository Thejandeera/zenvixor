import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSocialRaining, setIsSocialRaining] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

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

  useEffect(() => {
    if (isSocialRaining) {
      const timer = setTimeout(() => {
        setIsSocialRaining(false);
      }, 10000); // Changed to 10 seconds
      return () => clearTimeout(timer);
    }
  }, [isSocialRaining]);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMobileMenuOpen(false);

    const sectionId = link.toLowerCase() === 'support' || link.toLowerCase() === 'meet experts'
      ? 'map'
      : link.toLowerCase();

    const scrollToSection = () => {
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 300);
      }
    };

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(scrollToSection, 500);
    } else {
      scrollToSection();
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogoClick = () => {
    setIsSocialRaining(true);
  };

  // Social media icons with SVG
  const socialIcons = [
    { 
      name: 'facebook', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#1877F2">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
        </svg>
      ),
      color: 'text-blue-600'
    },
    { 
      name: 'whatsapp', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#25D366">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
      color: 'text-green-500'
    },
    { 
      name: 'instagram', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#E4405F">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      ),
      color: 'text-pink-500'
    },
    { 
      name: 'youtube', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FF0000">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
        </svg>
      ),
      color: 'text-red-600'
    },
    { 
      name: 'twitter', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#1DA1F2">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
        </svg>
      ),
      color: 'text-blue-400'
    },
    { 
      name: 'linkedin', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#0077B5">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      color: 'text-blue-700'
    },
    { 
      name: 'tiktok', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#000000">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      ),
      color: 'text-black'
    },
    { 
      name: 'reddit', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FF5700">
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.01 12.547c0 1.518-1.235 2.75-2.758 2.75-1.517 0-2.758-1.232-2.758-2.75s1.235-2.75 2.758-2.75c1.522 0 2.758 1.232 2.758 2.75zm-9.506 0c0 1.518-1.235 2.75-2.758 2.75-1.518 0-2.758-1.232-2.758-2.75s1.235-2.75 2.758-2.75c1.523 0 2.758 1.232 2.758 2.75zm10.123-3.099c-.669-.33-1.462-.33-2.131 0-.399.196-.729.527-.896.921-.669-.132-1.372-.198-2.085-.198-.713 0-1.413.066-2.086.197-.167-.393-.499-.724-.896-.92-.669-.331-1.462-.331-2.131 0-.656.324-1.074 1.01-1.074 1.764v6.671c0 .753.418 1.44 1.074 1.765.669.33 1.462.33 2.131 0 .397-.196.729-.527.896-.931.402.098.814.166 1.231.196.311.023.625.034.938.034.313 0 .627-.011.938-.034.417-.03.829-.098 1.231-.196.167.404.499.735.896.931.669.33 1.462.33 2.131 0 .656-.325 1.074-1.012 1.074-1.765v-6.671c0-.754-.418-1.44-1.074-1.764zm-7.598 5.403c-.718 0-1.3-.582-1.3-1.3s.582-1.3 1.3-1.3 1.3.582 1.3 1.3-.582 1.3-1.3 1.3zm6.003 0c-.718 0-1.3-.582-1.3-1.3s.582-1.3 1.3-1.3 1.3.582 1.3 1.3-.582 1.3-1.3 1.3z"/>
        </svg>
      ),
      color: 'text-orange-500'
    }
  ];

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

  const socialDropVariants = {
    initial: { y: -50, opacity: 0 },
    animate: (i) => ({
      y: window.innerHeight,
      opacity: [0, 1, 1, 0],
      x: Math.random() * window.innerWidth - window.innerWidth / 2,
      rotate: Math.random() * 360,
      scale: [0.8, 1, 1, 0.8],
      transition: {
        duration: 5 + Math.random() * 5, // Random duration between 5-10 seconds
        delay: i * 0.1,
        ease: "linear",
        repeat: Infinity,
        repeatDelay: 0
      }
    })
  };

  return (
    <nav className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white py-3'}`}>
      {/* Social Media Rain Effect */}
      <AnimatePresence>
        {isSocialRaining && (
          <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
            {[...Array(40)].map((_, i) => {
              const randomIcon = socialIcons[Math.floor(Math.random() * socialIcons.length)];
              return (
                <motion.div
                  key={i}
                  className={`absolute ${randomIcon.color}`}
                  custom={i}
                  variants={socialDropVariants}
                  initial="initial"
                  animate="animate"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: '-50px',
                    width: '24px',
                    height: '24px'
                  }}
                >
                  {randomIcon.icon}
                </motion.div>
              );
            })}
          </div>
        )}
      </AnimatePresence>

      {/* Rest of the navbar code remains exactly the same */}
      <div className="max-w-7xl mb-0 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <motion.div
            className="flex items-center cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            onClick={handleLogoClick}
            whileTap={{ scale: 0.95 }}
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