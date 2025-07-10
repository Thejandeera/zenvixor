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

const Footer = () => {
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
              {[Twitter, Facebook, Instagram, Linkedin, Github].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors"
                  whileHover={{ y: -3, backgroundColor: "#e5e7eb" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-5 h-5 text-gray-700 hover:text-black transition-colors" />
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
              {['Home', 'Services', 'Portfolio', 'About Us', 'Contact'].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <a
                    href="#"
                    className="text-gray-600 hover:text-green-500 transition-colors flex items-center"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-red-500" />
                    {item}
                  </a>
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
              {['Web Development', 'UI/UX Design', 'Mobile Apps', 'Digital Marketing', 'SEO'].map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <a
                    href="#"
                    className="text-gray-600 hover:text-green-500 transition-colors flex items-center"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-red-500" />
                    {service}
                  </a>
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
                <a href="mailto:info@zenvixor.com" className="ml-3 text-gray-600 hover:text-green-500 transition-colors">
                  info@zenvixor.com
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
            {['Privacy Policy', 'Terms of Service', 'Cookies'].map((item, index) => (
              <motion.a
                key={index}
                href="#"
                className="text-gray-500 hover:text-green-500 text-sm transition-colors"
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;