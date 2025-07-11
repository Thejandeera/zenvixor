import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Twitter, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Github,
  ChevronRight 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  // Social media links
  const socialLinks = [
    { icon: Twitter, url: "https://twitter.com/zenvixor" },
    { icon: Facebook, url: "https://facebook.com/zenvixor" },
    { icon: Instagram, url: "https://instagram.com/zenvixor" },
    { icon: Linkedin, url: "https://linkedin.com/company/zenvixor" },
    { icon: Github, url: "https://github.com/zenvixor" }
  ];

  // Services with their routes
  const services = [
    { name: 'Web Development', path: '/website-development' },
    { name: 'Social Media Management', path: '/social-media-management' },
    { name: 'Cash Cow Video Editing', path: '/cash-cow-video-editing' },
    { name: 'Youtube Channel Management', path: '/youtube-channel-management' },
    { name: 'Podcast Editing', path: '/podcast-editing' },
    { name: 'Promotion Video', path: '/promotion-video-editing' }
  ];

  // Quick links with their section IDs
  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'About Us', id: 'about' },
    { name: 'Contact', id: 'map' }
  ];

  const handleLinkClick = (id) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white text-black pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">
              <span className="text-green-500">ZEN</span>
              <span className="text-black">VIXOR</span>
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Crafting digital excellence with innovative solutions that drive business growth and customer satisfaction.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors"
                  whileHover={{ y: -3, backgroundColor: "#e5e7eb" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5 text-gray-700 hover:text-black transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-black uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <button
                    onClick={() => handleLinkClick(item.id)}
                    className="text-gray-600 hover:text-green-500 transition-colors flex items-center w-full text-left"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-red-500" />
                    {item.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-black uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <button
                    onClick={() => navigate(service.path)}
                    className="text-gray-600 hover:text-green-500 transition-colors flex items-center w-full text-left"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-red-500" />
                    {service.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-black uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mt-1 text-red-500 flex-shrink-0" />
                <span className="ml-3 text-gray-600">
                  1/4, Shanthi Mawatha, Himbutana, Colombo, Sri Lanka
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-red-500" />
                <a href="tel:+94718860959" className="ml-3 text-gray-600 hover:text-green-500 transition-colors">
                  +94 71 886 0959
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-red-500" />
                <a href="mailto:zenvixor.info@gmail.com" className="ml-3 text-gray-600 hover:text-green-500 transition-colors">
                  zenvixor.info@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Clock className="w-5 h-5 text-red-500" />
                <span className="ml-3 text-gray-600">Mon-Fri: 8AM - 11PM</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="border-t border-gray-300 my-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p
            className="text-gray-500 text-sm mb-4 md:mb-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            © {new Date().getFullYear()} ZENVIXOR. All rights reserved.
          </motion.p>

          <div className="flex space-x-6">
            <span className="text-gray-500 text-sm hover:text-red-500">Privacy Policy</span>
            <span className="text-gray-500 text-sm hover:text-red-500">Terms of Service</span>
            <span className="text-gray-500 text-sm hover:text-red-500">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;