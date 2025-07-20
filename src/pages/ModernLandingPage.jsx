import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ModernLandingPage.css';

const ModernLandingPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: '🥛',
      title: 'Premium Quality',
      description: 'Fresh dairy products sourced directly from local farms'
    },
    {
      icon: '🧀',
      title: 'Artisan Crafted',
      description: 'Handcrafted with traditional methods and modern care'
    },
    {
      icon: '🚚',
      title: 'Fast Delivery',
      description: 'Same-day delivery to keep your products fresh'
    },
    {
      icon: '🌱',
      title: 'Organic Options',
      description: 'Wide selection of certified organic dairy products'
    }
  ];

  return (
    <div className="modern-landing">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-icon">🥛</span>
              <span className="badge-text">Farm Fresh Since 1985</span>
            </div>

            <h1 className="hero-title">DairyFresh</h1>

            <p className="hero-subtitle">
              Experience the pure taste of nature with our premium dairy products, 
              delivered fresh from local farms to your doorstep every morning.
            </p>

            <div className="hero-cta-container">
              <button
                className="hero-cta primary"
                onClick={() => navigate('/register')}
              >
                <span>Start Shopping</span>
                <div className="cta-icon">→</div>
              </button>

              <button
                className="hero-cta secondary"
                onClick={() => navigate('/login')}
              >
                <span>Login</span>
              </button>
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
            <div className="hero-image-container">
              <div className="image-wrapper">
                <div className="hero-placeholder">
                  <div className="placeholder-icon">🥛</div>
                  <p>Fresh Dairy Products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">
          <div className="section-header">
            <h2 className="section-title">Why Choose DairyFresh?</h2>
            <p className="section-subtitle">
              Discover what makes our dairy products special
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <span>{feature.icon}</span>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to taste the difference?</h2>
            <p className="cta-subtitle">
              Join thousands of happy customers enjoying fresh dairy products every day.
            </p>
            <button
              className="cta-button"
              onClick={() => navigate('/register')}
            >
              Get Started Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ModernLandingPage;
