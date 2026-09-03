import React, { useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from './Container';

const defaultDescription = "As a certified IT company, Sapphire helps organizations thrive digitally by offering innovative solutions using cutting-edge tools and frameworks. Contact us to learn more!";

// Enterprise 3D Interactive Card Component with Parallax, Cursor Reflection & 60fps RAF Tracking
const Enterprise3DCard = ({ item, idx, cardVariants }) => {
  const cardRef = useRef(null);
  const rafId = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [transformState, setTransformState] = useState({
    rotateX: 0,
    rotateY: 0,
    glareX: 50,
    glareY: 50
  });

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
    }

    rafId.current = requestAnimationFrame(() => {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Max 12deg tilt
      const rotateX = -((y - centerY) / centerY) * 12;
      const rotateY = ((x - centerX) / centerX) * 12;

      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;

      setTransformState({ rotateX, rotateY, glareX, glareY });
    });
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
    }
    setTransformState({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });
  };

  return (
    <motion.div
      variants={cardVariants}
      animate={{
        y: isHovered ? -15 : [-4, 4, -4],
        scale: isHovered ? 1.05 : 1
      }}
      transition={{
        y: isHovered
          ? { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
          : { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: (idx % 5) * 0.4 },
        scale: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
      }}
      className="[perspective:1200px]"
    >
      <Link
        ref={cardRef}
        to={item.link}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${transformState.rotateX}deg) rotateY(${transformState.rotateY}deg)`,
          transformStyle: 'preserve-3d',
          transition: isHovered
            ? 'transform 0.15s ease-out, box-shadow 0.4s cubic-bezier(0.22,1,0.36,1)'
            : 'transform 0.5s cubic-bezier(0.22,1,0.36,1), box-shadow 0.5s cubic-bezier(0.22,1,0.36,1)'
        }}
        className={`p-4 rounded-[20px] bg-white text-slate-900 flex items-center space-x-3.5 h-20 sm:h-22 text-left border relative overflow-hidden group cursor-pointer transition-all duration-400 ${
          isHovered
            ? 'shadow-[0_25px_60px_rgba(0,93,149,0.4)] border-[#005D95]/60'
            : 'shadow-md border-slate-100'
        }`}
      >
        {/* Moving Gradient Light Border Accent */}
        <div
          className="absolute inset-0 rounded-[20px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-400"
          style={{
            background: `radial-gradient(400px circle at ${transformState.glareX}% ${transformState.glareY}%, rgba(0,93,149,0.15), transparent 80%)`
          }}
        />

        {/* Glossy Light Reflection Overlay Following Cursor */}
        <div
          className="absolute inset-0 rounded-[20px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(220px circle at ${transformState.glareX}% ${transformState.glareY}%, rgba(255,255,255,0.65) 0%, transparent 70%)`
          }}
        />

        {/* Left Technology Icon - Layered 3D Depth */}
        <div
          style={{
            transform: isHovered ? 'translateZ(30px)' : 'translateZ(0px)',
            transition: 'transform 0.4s cubic-bezier(0.22,1,0.36,1)'
          }}
          className="w-11 h-11 rounded-xl bg-blue-50/90 flex items-center justify-center shrink-0 shadow-sm border border-blue-100/60 group-hover:bg-[#005D95] transition-colors duration-400 relative z-10"
        >
          <img
            src={item.icon}
            alt={item.name}
            className="w-7 h-7 object-contain animate-[sideSway_3s_ease-in-out_infinite] group-hover:brightness-0 group-hover:invert transition-all"
            style={{ animationDelay: `${(idx % 5) * 0.35}s` }}
          />
        </div>

        {/* Right Service Title - Layered 3D Depth */}
        <span
          style={{
            transform: isHovered ? 'translateZ(20px)' : 'translateZ(0px)',
            transition: 'transform 0.4s cubic-bezier(0.22,1,0.36,1)'
          }}
          className="text-xs sm:text-sm font-extrabold text-slate-900 leading-snug group-hover:text-[#005D95] transition-colors relative z-10 font-sans"
        >
          {item.name}
        </span>
      </Link>
    </motion.div>
  );
};

export const PremiumServicesGrid = ({ title, subtitle }) => {
  const services = [
    { name: 'Mobile App Development', icon: '/images/ic_mobile_app.svg', link: '/services/mobile-app-development' },
    { name: 'Software Development', icon: '/images/ic_software_development.svg', link: '/services/software-development' },
    { name: 'Web Development', icon: '/images/ic_web_development.svg', link: '/services/web-development' },
    { name: '.NET Development', icon: '/images/ic_net.svg', link: '/services/dot-net-development' },
    { name: 'Flutter App Development', icon: '/images/ic_flutter.svg', link: '/services/flutter-app-development' },
    { name: 'PHP Development', icon: '/images/ic_php.svg', link: '/services/php-development' },
    { name: 'Hire Dedicated Developers', icon: '/images/ic_hirededicated.svg', link: '/hire-developers' },
    { name: 'Mern Stack Development', icon: '/images/ic_mern.svg', link: '/services/mern-stack-development' },
    { name: 'Full Stack Development', icon: '/images/ic_fullstack.svg', link: '/services/full-stack-development' },
    { name: 'Laravel Development', icon: '/images/ic_laravel.svg', link: '/services/laravel-development' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-[#005D95] text-white font-sans text-left overflow-hidden relative">
      {/* Subtle Animated Radial Ambient Gradients Background */}
      <div className="absolute inset-0 bg-glow-radial opacity-35 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-blue-400/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none" />

      <Container>
        {/* Center Aligned Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-3 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl lg:text-[40px] font-black text-white tracking-tight font-sans"
          >
            {title || "Our Premium Services"}
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm sm:text-base text-blue-100 font-normal leading-relaxed font-sans"
          >
            {subtitle || defaultDescription}
          </motion.p>
        </div>

        {/* 10 White Service Cards Grid (5-column Desktop, 2-column Mobile) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4 max-w-6xl mx-auto relative z-10"
        >
          {services.map((item, idx) => (
            <Enterprise3DCard key={idx} item={item} idx={idx} cardVariants={cardVariants} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default PremiumServicesGrid;
