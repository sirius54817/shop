import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
// import anime from 'animejs';
import { dairyImages } from '../assets/images';
import './ModernLandingPage.css';

const ModernLandingPage = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const featuresInView = useInView(featuresRef, { once: true });

  // Parallax effects
  const yHero = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    // Temporarily disable anime.js animations for debugging
    console.log('ModernLandingPage loaded without anime.js');
  }, []);

  const createAnimatedText = (text) => {
    return text.split('').map((char, index) => (
      <span key={index} className="char">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  const features = [
    {
      icon: '🥛',
      title: 'Premium Quality',
      description: 'Fresh dairy products sourced directly from local farms',
      color: 'from-blue-400 to-blue-600',
      delay: 0
    },
    {
      icon: '🧀',
      title: 'Artisan Crafted',
      description: 'Handcrafted with traditional methods and modern care',
      color: 'from-yellow-400 to-orange-500',
      delay: 0.1
    },
    {
      icon: '🚚',
      title: 'Fast Delivery',
      description: 'Same-day delivery to keep your products fresh',
      color: 'from-green-400 to-green-600',
      delay: 0.2
    },
    {
      icon: '🌱',
      title: 'Organic Options',
      description: 'Wide selection of certified organic dairy products',
      color: 'from-emerald-400 to-emerald-600',
      delay: 0.3
    }
  ];

  return (
    <div className="modern-landing">
      {/* Hero Section */}
      <motion.section 
        className="hero-section"
        ref={heroRef}
        style={{ y: yHero, opacity }}
      >
        <div className="hero-container">
          <div className="hero-content">
            <motion.div
              className="hero-badge"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOutBack" }}
            >
              <span className="badge-icon">🥛</span>
              <span className="badge-text">Farm Fresh Since 1985</span>
            </motion.div>

            <h1 className="hero-title">
              {createAnimatedText('DairyFresh')}
            </h1>

            <p className="hero-subtitle">
              Experience the pure taste of nature with our premium dairy products, 
              delivered fresh from local farms to your doorstep every morning.
            </p>

            <div className="hero-cta-container">
              <motion.button
                className="hero-cta primary"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/register')}
              >
                <span>Start Shopping</span>
                <motion.div 
                  className="cta-icon"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.div>
              </motion.button>

              <motion.button
                className="hero-cta secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/login')}
              >
                <span>Learn More</span>
              </motion.button>
            </div>

            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">50K+</div>
                <div className="stat-label">Happy Customers</div>
              </div>
              <div className="stat">
                <div className="stat-number">100%</div>
                <div className="stat-label">Organic</div>
              </div>
              <div className="stat">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Fresh Delivery</div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <motion.div 
              className="hero-image-container"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1, ease: "easeOutBack" }}
            >
              <div className="image-wrapper">
                <img 
                  src={dairyImages.hero.milkSplash} 
                  alt="Fresh Dairy Products"
                  className="hero-image"
                />
                <div className="image-overlay">
                  <div className="floating-element">✨</div>
                  <div className="floating-element">🥛</div>
                  <div className="floating-element">🧀</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="scroll-line"></div>
          <div className="scroll-text">Scroll to explore</div>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="features-section"
        ref={featuresRef}
      >
        <div className="features-container">
          <motion.div 
            className="section-header"
            initial={{ y: 50, opacity: 0 }}
            animate={featuresInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Why Choose DairyFresh?</h2>
            <p className="section-subtitle">
              Discover what makes our dairy products special
            </p>
          </motion.div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ y: 50, opacity: 0 }}
                animate={featuresInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: feature.delay, duration: 0.6 }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <div className={`feature-icon bg-gradient-to-br ${feature.color}`}>
                  <span>{feature.icon}</span>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <div className="feature-arrow">→</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section className="cta-section">
        <div className="cta-container">
          <motion.div
            className="cta-content"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="cta-title">Ready to taste the difference?</h2>
            <p className="cta-subtitle">
              Join thousands of happy customers enjoying fresh dairy products every day.
            </p>
            <motion.button
              className="cta-button"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.2)"
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/register')}
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default ModernLandingPage;
