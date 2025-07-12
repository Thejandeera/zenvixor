import { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiSend } from 'react-icons/fi';
import { MapPin, Navigation, ChevronRight, Clock, Phone, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';

const createCustomIcon = () => {
    return new L.Icon({
        iconUrl: '/images/marker.png',
        iconRetinaUrl: '/images/marker.png',
        iconSize: [70, 70],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40],
        className: 'modern-marker'
    });
};

const MapMarker = ({ position, title }) => {
    const map = useMap();

    useEffect(() => {
        map.flyTo(position, 16, {
            duration: 1,
            easeLinearity: 0.25
        });
    }, [position, map]);

    return (
        <Marker
            position={position}
            icon={createCustomIcon()}
            eventHandlers={{
                click: () => {
                    map.flyTo(position, 16, {
                        duration: 1,
                        easeLinearity: 0.25
                    });
                }
            }}
        >
            <Popup className="modern-popup">
                <motion.div
                    className="p-4"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <h3 className="font-bold text-black flex items-center gap-2">
                        <motion.span
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                        >
                            <MapPin className="text-red-500" size={18} />
                        </motion.span>
                        <span>{title}</span>
                    </h3>
                    <p className="text-gray-600 mt-1 text-sm">{position[0]}, {position[1]}</p>
                    <motion.a
                        href={`https://www.google.com/maps?q=${position[0]},${position[1]}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center mt-2 text-sm text-green-600 hover:text-green-700 transition-colors"
                        whileHover={{ x: 3 }}
                    >
                        <Navigation size={14} className="mr-1" /> Get Directions
                    </motion.a>
                </motion.div>
            </Popup>
        </Marker>
    );
};

const MyMap = () => {
    const mainPosition = [6.927611, 79.920194];
    const branchPosition = [6.962287942448409, 81.02965913037578];
    const [activeTab, setActiveTab] = useState('location');
    const [isMounted, setIsMounted] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [mapPosition, setMapPosition] = useState(mainPosition);
    const [currentTitle, setCurrentTitle] = useState('Main Office');
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });
    const [showEmailForm, setShowEmailForm] = useState(false);
    const mapRef = useRef();
    const emailFormRef = useRef();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (showEmailForm && emailFormRef.current) {
            emailFormRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }, [showEmailForm]);

    const locations = [
        {
            id: 'location',
            title: 'Main Office',
            address: '1/4 , Shanthi Mawatha , Himbutana , Colombo , Sri lanka',
            hours: 'Mon-Fri: 8AM - 11PM',
            phone: '+94 71 886 0959',
            email: 'zenvixor.info@gmail.com',
            position: mainPosition
        },
        {
            id: 'branch',
            title: 'Branch Office',
            address: 'Bogasthenna , Anthuduwawela , Haliela , Badulla , Sri lanka',
            hours: 'Mon-Sat: 8AM - 11PM',
            phone: '+94 78 532 9002',
            email: 'zenvixor.info@gmail.com',
            position: branchPosition
        }
    ];

    const handleTouchStart = (e) => {
        if (e.target.closest('.leaflet-container')) {
            setIsDragging(true);
        }
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
        const newLocation = locations.find(loc => loc.id === tabId);
        if (newLocation) {
            setMapPosition(newLocation.position);
            setCurrentTitle(newLocation.title);
        }
    };

    const handleGetDirections = () => {
        const currentLocation = locations.find(loc => loc.id === activeTab);
        if (currentLocation) {
            window.open(`https://www.google.com/maps?q=${currentLocation.position[0]},${currentLocation.position[1]}`, '_blank');
        }
    };

    const handleEmailSubmit = async (e) => {
        e.preventDefault();
        
        if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            setSubmitStatus({ success: false, message: 'Please enter a valid email address' });
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus({ success: false, message: '' });

        try {
            const SERVICE_ID = 'service_7zrivds';
            const TEMPLATE_ID = 'template_qegnpz7';
            const PUBLIC_KEY = 'ywM5RYslcBCpTUs1S';

            const response = await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                { from_email: email },
                PUBLIC_KEY
            );

            if (response.status === 200) {
                setSubmitStatus({ success: true, message: 'Thank you! We will contact you soon.' });
                setEmail('');
                setTimeout(() => {
                    setShowEmailForm(false);
                    setSubmitStatus({ success: false, message: '' });
                }, 3000);
            } else {
                throw new Error('Email sending failed');
            }
        } catch (error) {
            setSubmitStatus({ 
                success: false, 
                message: error.text || 'Failed to send your request. Please try again later.' 
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div
            className="bg-gradient-to-br from-white to-gray-50 py-16 px-4 sm:px-6 lg:px-8"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{ touchAction: isDragging ? 'none' : 'auto' }}
        >
            <div className="max-w-7xl mx-auto mt-6">
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="space-y-10">
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
                                Find Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">Locations</span>
                            </h2>
                            <motion.p
                                className="text-gray-600 text-lg max-w-lg"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                            >
                                If you have any concerns, feel free to email us for personalized assistance.
                            </motion.p>
                        </motion.div>

                        <motion.div
                            className="space-y-8"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            <div className="flex border-b border-gray-200">
                                {locations.map((location) => (
                                    <motion.button
                                        key={location.id}
                                        onClick={() => handleTabChange(location.id)}
                                        className={`relative px-6 py-4 font-medium text-sm uppercase tracking-wider ${activeTab === location.id ? 'text-green-600' : 'text-gray-500 hover:text-black'}`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {location.title}
                                        {activeTab === location.id && (
                                            <motion.div
                                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600"
                                                layoutId="tabUnderline"
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                    </motion.button>
                                ))}
                            </div>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 10 }}
                                    transition={{ duration: 0.3, type: "spring" }}
                                    className="space-y-6"
                                >
                                    {locations.filter(loc => loc.id === activeTab).map(location => (
                                        <div key={location.id} className="space-y-6">
                                            <motion.div
                                                className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                                                initial={{ scale: 0.95 }}
                                                animate={{ scale: 1 }}
                                                transition={{ delay: 0.1 }}
                                            >
                                                <motion.div
                                                    className="bg-gradient-to-br from-green-100 to-emerald-100 p-3 rounded-xl"
                                                    animate={{ rotate: [0, 5, -5, 0] }}
                                                    transition={{ duration: 1.5, repeat: Infinity }}
                                                >
                                                    <MapPin className="text-green-600" size={20} />
                                                </motion.div>
                                                <div>
                                                    <h3 className="font-bold text-black text-lg">{location.title}</h3>
                                                    <p className="text-gray-600">{location.address}</p>
                                                </div>
                                            </motion.div>

                                            <motion.div
                                                className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                                                initial={{ scale: 0.95 }}
                                                animate={{ scale: 1 }}
                                                transition={{ delay: 0.2 }}
                                            >
                                                <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-3 rounded-xl">
                                                    <Clock className="text-green-600" size={20} />
                                                </div>
                                                <p className="text-gray-600">{location.hours}</p>
                                            </motion.div>

                                            <motion.div
                                                className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                                                initial={{ scale: 0.95 }}
                                                animate={{ scale: 1 }}
                                                transition={{ delay: 0.3 }}
                                            >
                                                <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-3 rounded-xl">
                                                    <Phone className="text-green-600" size={20} />
                                                </div>
                                                <p className="text-gray-600">{location.phone}</p>
                                            </motion.div>

                                            <motion.div
                                                className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                                                initial={{ scale: 0.95 }}
                                                animate={{ scale: 1 }}
                                                transition={{ delay: 0.4 }}
                                            >
                                                <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-3 rounded-xl">
                                                    <Mail className="text-green-600" size={20} />
                                                </div>
                                                <a href={`mailto:${location.email}`} className="text-gray-600 hover:text-green-600 transition-colors">
                                                    {location.email}
                                                </a>
                                            </motion.div>

                                            <div className="flex flex-col sm:flex-row gap-4">
                                                <motion.button
                                                    onClick={handleGetDirections}
                                                    className="flex-1 flex items-center justify-center bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
                                                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.3)" }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    Get Directions <ChevronRight className="ml-1" size={16} />
                                                </motion.button>

                                                <motion.button
                                                    onClick={() => setShowEmailForm(!showEmailForm)}
                                                    className={`flex-1 flex items-center justify-center px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all ${showEmailForm ? 'bg-black text-white hover:bg-gray-800' : 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'}`}
                                                    whileHover={{ scale: 1.05, boxShadow: showEmailForm ? "0 10px 25px -5px rgba(0, 0, 0, 0.3)" : "0 10px 25px -5px rgba(16, 185, 129, 0.3)" }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <FiMail className="mr-2" />
                                                    {showEmailForm ? 'Cancel' : 'Click Here to Email Us'}
                                                </motion.button>
                                            </div>

                                            <div ref={emailFormRef}>
                                                <AnimatePresence>
                                                    {showEmailForm && (
                                                        <motion.div
                                                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                                            animate={{ opacity: 1, height: 'auto', marginTop: '1.5rem' }}
                                                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-200">
                                                                <div className="text-center mb-6">
                                                                    <motion.div
                                                                        className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4"
                                                                        initial={{ scale: 0 }}
                                                                        animate={{ scale: 1 }}
                                                                        transition={{ delay: 0.2 }}
                                                                    >
                                                                        <FiMail className="w-8 h-8 text-white" />
                                                                    </motion.div>
                                                                    <motion.h3
                                                                        className="text-2xl font-bold text-black mb-2"
                                                                        initial={{ y: 10, opacity: 0 }}
                                                                        animate={{ y: 0, opacity: 1 }}
                                                                        transition={{ delay: 0.3 }}
                                                                    >
                                                                        Get in Touch
                                                                    </motion.h3>
                                                                    <motion.p
                                                                        className="text-gray-600"
                                                                        initial={{ y: 10, opacity: 0 }}
                                                                        animate={{ y: 0, opacity: 1 }}
                                                                        transition={{ delay: 0.4 }}
                                                                    >
                                                                        We'll respond to your inquiry within 24 hours
                                                                    </motion.p>
                                                                </div>

                                                                <form onSubmit={handleEmailSubmit} className="space-y-4">
                                                                    <motion.div
                                                                        initial={{ y: 10, opacity: 0 }}
                                                                        animate={{ y: 0, opacity: 1 }}
                                                                        transition={{ delay: 0.5 }}
                                                                    >
                                                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                                                            Your Email Address
                                                                        </label>
                                                                        <div className="relative">
                                                                            <input
                                                                                type="email"
                                                                                id="email"
                                                                                value={email}
                                                                                onChange={(e) => setEmail(e.target.value)}
                                                                                required
                                                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                                                                                placeholder="Enter your email"
                                                                            />
                                                                        </div>
                                                                    </motion.div>

                                                                    {submitStatus.message && (
                                                                        <motion.div
                                                                            initial={{ opacity: 0, y: 10 }}
                                                                            animate={{ opacity: 1, y: 0 }}
                                                                            className={`p-3 rounded-lg text-sm ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
                                                                        >
                                                                            {submitStatus.message}
                                                                        </motion.div>
                                                                    )}

                                                                    <motion.div
                                                                        className="pt-2"
                                                                        initial={{ y: 10, opacity: 0 }}
                                                                        animate={{ y: 0, opacity: 1 }}
                                                                        transition={{ delay: 0.6 }}
                                                                    >
                                                                        <button
                                                                            type="submit"
                                                                            disabled={isSubmitting}
                                                                            whileHover={{ scale: 1.03 }}
                                                                            whileTap={{ scale: 0.98 }}
                                                                            className={`w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-lg font-medium text-white ${isSubmitting ? 'bg-gray-500' : 'bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800'} shadow-sm transition-all duration-300`}
                                                                        >
                                                                            {isSubmitting ? (
                                                                                'Sending...'
                                                                            ) : (
                                                                                <>
                                                                                    <FiSend className="mr-2" />
                                                                                    Send Message
                                                                                </>
                                                                            )}
                                                                        </button>
                                                                    </motion.div>
                                                                </form>

                                                                <motion.div
                                                                    className="mt-4 text-center text-xs text-gray-500"
                                                                    initial={{ y: 10, opacity: 0 }}
                                                                    animate={{ y: 0, opacity: 1 }}
                                                                    transition={{ delay: 0.7 }}
                                                                >
                                                                    By submitting, you agree to our privacy policy
                                                                </motion.div>
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </motion.div>
                    </div>

                    <motion.div
                        className="h-[300px] lg:h-[550px] rounded-2xl overflow-hidden shadow-2xl border border-gray-900 relative z-0 mx-6 lg:mx-0"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6, duration: 0.6, type: "spring" }}
                        onHoverStart={() => setIsHovered(true)}
                        onHoverEnd={() => setIsHovered(false)}
                        style={{ marginTop: "1rem" }}
                    >
                        {isMounted && (
                            <MapContainer
                                center={mapPosition}
                                zoom={15}
                                scrollWheelZoom={false}
                                className="h-full w-full z-0"
                                dragging={!isDragging}
                                touchZoom={false}
                                doubleClickZoom={false}
                                boxZoom={false}
                                ref={mapRef}
                            >
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    className="map-tiles"
                                />
                                <MapMarker position={mapPosition} title={currentTitle} />
                            </MapContainer>
                        )}
                        <motion.div
                            className="absolute inset-0 pointer-events-none z-0"
                            animate={{
                                boxShadow: isHovered
                                    ? "0 0 0 4px rgba(16, 185, 129, 0.4)"
                                    : "0 0 0 0px rgba(16, 185, 129, 0)"
                            }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>
                </motion.div>
            </div>

            <style jsx="true" global="true">{`
                .modern-marker {
                    transition: all 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
                    filter: drop-shadow(0 8px 15px rgba(0, 0, 0, 0.2));
                }
                .modern-marker:hover {
                    transform: translateY(-8px) scale(1.15);
                    filter: drop-shadow(0 12px 20px rgba(0, 0, 0, 0.25));
                }
                .modern-popup .leaflet-popup-content-wrapper {
                    border-radius: 16px;
                    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
                    border: none;
                    padding: 0;
                    overflow: hidden;
                }
                .modern-popup .leaflet-popup-content {
                    margin: 0;
                }
                .modern-popup .leaflet-popup-tip {
                    background: white;
                    box-shadow: none;
                    width: 16px;
                    height: 16px;
                }
                .map-tiles {
                    filter: grayscale(30%) contrast(105%) brightness(0.96) saturate(110%) !important;
                    transition: filter 0.5s ease;
                }
                .map-tiles:hover {
                    filter: grayscale(10%) contrast(110%) brightness(1) saturate(120%) !important;
                }
            `}</style>
        </div>
    );
};

export default MyMap;