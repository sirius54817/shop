import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
// import anime from 'animejs';
import { dairyImages } from '../assets/images';
import './ModernRegisterPage.css';

const ModernRegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const formRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  useEffect(() => {
    // Temporarily disable anime.js animations for debugging
    console.log('ModernRegisterPage loaded without anime.js');
  }, []);

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (/[a-z]/.test(password)) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/\d/.test(password)) strength += 25;
    return strength;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    if (!formData.agreeToTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    alert('Registration successful! (Demo)');
    navigate('/login');
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });

    // Update password strength
    if (name === 'password') {
      setPasswordStrength(calculatePasswordStrength(value));
    }
  };

  const handleGoogleSignup = () => {
    alert('Google signup (Demo)');
  };

  const handleAppleSignup = () => {
    alert('Apple signup (Demo)');
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength < 50) return '#ef4444';
    if (passwordStrength < 75) return '#f59e0b';
    return '#10b981';
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength < 25) return 'Very Weak';
    if (passwordStrength < 50) return 'Weak';
    if (passwordStrength < 75) return 'Good';
    return 'Strong';
  };

  return (
    <div className="modern-register">
      {/* Animated Background */}
      <div className="register-background">
        <motion.div 
          className="bg-image"
          style={{ y }}
        >
          <img src={dairyImages.backgrounds.registerBg} alt="Background" />
          <div className="bg-overlay"></div>
        </motion.div>
        
        {/* Floating shapes */}
        <div className="floating-shapes">
          <div className="floating-shape shape-1">🥛</div>
          <div className="floating-shape shape-2">🧀</div>
          <div className="floating-shape shape-3">🧈</div>
          <div className="floating-shape shape-4">🍦</div>
          <div className="floating-shape shape-5">✨</div>
          <div className="floating-shape shape-6">🌟</div>
        </div>
      </div>

      {/* Content */}
      <div className="register-container">
        <motion.div
          className="register-content"
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
            className="register-form"
            ref={formRef}
          >
            <div className="form-header">
              <motion.div 
                className="logo"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                🥛
              </motion.div>
              <h1 className="form-title">Join DairyFresh</h1>
              <p className="form-subtitle">
                Create your account and start enjoying fresh dairy products delivered to your door
              </p>
            </div>

            {/* Social Signup */}
            <div className="social-logins">
              <motion.button
                className="social-login google-btn"
                onClick={handleGoogleSignup}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="social-icon">G</span>
                <span>Sign up with Google</span>
              </motion.button>
              
              <motion.button
                className="social-login apple-btn"
                onClick={handleAppleSignup}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="social-icon">🍎</span>
                <span>Sign up with Apple</span>
              </motion.button>
            </div>

            <div className="divider">
              <span className="divider-line"></span>
              <span className="divider-text">or</span>
              <span className="divider-line"></span>
            </div>

            <form onSubmit={handleSubmit} className="register-form-fields">
              <div className="form-row">
                <div className="form-field">
                  <label className="field-label">First Name</label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter your first name"
                      className="field-input"
                      required
                    />
                    <span className="input-icon">👤</span>
                  </div>
                </div>

                <div className="form-field">
                  <label className="field-label">Last Name</label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter your last name"
                      className="field-input"
                      required
                    />
                    <span className="input-icon">👤</span>
                  </div>
                </div>
              </div>

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
                    placeholder="Create a password"
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
                {formData.password && (
                  <div className="password-strength">
                    <div className="strength-bar">
                      <div 
                        className="strength-fill"
                        style={{ 
                          width: `${passwordStrength}%`,
                          backgroundColor: getPasswordStrengthColor()
                        }}
                      />
                    </div>
                    <span 
                      className="strength-text"
                      style={{ color: getPasswordStrengthColor() }}
                    >
                      {getPasswordStrengthText()}
                    </span>
                  </div>
                )}
              </div>

              <div className="form-field">
                <label className="field-label">Confirm Password</label>
                <div className="input-wrapper">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    className="field-input"
                    required
                  />
                  <motion.button
                    type="button"
                    className="input-icon password-toggle"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {showConfirmPassword ? '👁️' : '🙈'}
                  </motion.button>
                </div>
                {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                  <div className="password-mismatch">
                    Passwords do not match
                  </div>
                )}
              </div>

              <div className="form-field">
                <label className="checkbox-wrapper">
                  <input 
                    type="checkbox" 
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className="checkbox" 
                    required
                  />
                  <span className="checkmark"></span>
                  <span className="checkbox-label">
                    I agree to the{' '}
                    <button type="button" className="terms-link">
                      Terms of Service
                    </button>
                    {' '}and{' '}
                    <button type="button" className="terms-link">
                      Privacy Policy
                    </button>
                  </span>
                </label>
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
                    <span>Creating account...</span>
                  </div>
                ) : (
                  <>
                    <span>Create Account</span>
                    <span className="btn-icon">→</span>
                  </>
                )}
              </motion.button>
            </form>

            <div className="form-footer">
              <p className="signin-prompt">
                Already have an account?{' '}
                <motion.button
                  onClick={() => navigate('/login')}
                  className="signin-link"
                  whileHover={{ scale: 1.05 }}
                >
                  Sign in
                </motion.button>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ModernRegisterPage;
