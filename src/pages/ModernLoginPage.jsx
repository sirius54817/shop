import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
// import anime from 'animejs';
import { dairyImages } from '../assets/images';
import './ModernLoginPage.css';

const ModernLoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const formRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  useEffect(() => {
    // Temporarily disable anime.js animations for debugging
    console.log('ModernLoginPage loaded without anime.js');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    alert('Login successful! (Demo)');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleGoogleLogin = () => {
    alert('Google login (Demo)');
  };

  const handleAppleLogin = () => {
    alert('Apple login (Demo)');
  };

  return (
    <div className="modern-login">
      {/* Animated Background */}
      <div className="login-background">
        <motion.div 
          className="bg-image"
          style={{ y }}
        >
          <img src={dairyImages.backgrounds.loginBg} alt="Background" />
          <div className="bg-overlay"></div>
        </motion.div>
        
        {/* Floating shapes */}
        <div className="floating-shapes">
          <div className="floating-shape shape-1">🥛</div>
          <div className="floating-shape shape-2">🧀</div>
          <div className="floating-shape shape-3">🧈</div>
          <div className="floating-shape shape-4">✨</div>
        </div>
      </div>

      {/* Content */}
      <div className="login-container">
        <motion.div
          className="login-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Back Button */}
          <motion.button
            className="back-btn"
            onClick={() => navigate('/')}
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="back-icon">←</span>
            <span>Back to Home</span>
          </motion.button>

          {/* Form */}
          <motion.div 
            className="login-form"
            ref={formRef}
          >
            <div className="form-header">
              <motion.div 
                className="logo"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                🥛
              </motion.div>
              <h1 className="form-title">Welcome Back</h1>
              <p className="form-subtitle">
                Sign in to your DairyFresh account and continue your journey
              </p>
            </div>

            {/* Social Login */}
            <div className="social-logins">
              <motion.button
                className="social-login google-btn"
                onClick={handleGoogleLogin}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="social-icon">G</span>
                <span>Continue with Google</span>
              </motion.button>
              
              <motion.button
                className="social-login apple-btn"
                onClick={handleAppleLogin}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="social-icon">🍎</span>
                <span>Continue with Apple</span>
              </motion.button>
            </div>

            <div className="divider">
              <span className="divider-line"></span>
              <span className="divider-text">or</span>
              <span className="divider-line"></span>
            </div>

            <form onSubmit={handleSubmit} className="login-form-fields">
              <div className="form-field">
                <label className="field-label">Email Address</label>
                <div className="input-wrapper">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="field-input"
                    required
                  />
                  <span className="input-icon">📧</span>
                </div>
              </div>

              <div className="form-field">
                <label className="field-label">Password</label>
                <div className="input-wrapper">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="field-input"
                    required
                  />
                  <motion.button
                    type="button"
                    className="input-icon password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {showPassword ? '👁️' : '🙈'}
                  </motion.button>
                </div>
              </div>

              <div className="form-options">
                <label className="checkbox-wrapper">
                  <input type="checkbox" className="checkbox" />
                  <span className="checkmark"></span>
                  <span className="checkbox-label">Remember me</span>
                </label>
                
                <button type="button" className="forgot-password">
                  Forgot password?
                </button>
              </div>

              <motion.button
                type="submit"
                className="submit-btn"
                disabled={isLoading}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {isLoading ? (
                  <div className="loading-spinner">
                    <div className="spinner"></div>
                    <span>Signing in...</span>
                  </div>
                ) : (
                  <>
                    <span>Sign In</span>
                    <span className="btn-icon">→</span>
                  </>
                )}
              </motion.button>
            </form>

            <div className="form-footer">
              <p className="signup-prompt">
                Don't have an account?{' '}
                <motion.button
                  onClick={() => navigate('/register')}
                  className="signup-link"
                  whileHover={{ scale: 1.05 }}
                >
                  Sign up for free
                </motion.button>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ModernLoginPage;
