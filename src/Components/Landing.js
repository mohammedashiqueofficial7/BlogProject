import React from "react";
import land from "../Assets/Images/unsplash.jpg";
import land2 from "../Assets/Images/newunsplash.jpg";
import "../Assets/Styles/Landing.css";
import { Info, MoveRight, Sparkles, Users, BookOpen, Zap } from "lucide-react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="landing-wrapper">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img src={land} alt="Hero Background" className="hero-image" />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content animate-fade-in">
          <div className="hero-badge">
            <Sparkles size={16} />
            <span>Welcome to the Future of Blogging</span>
          </div>
          
          <h1 className="hero-title">
            Share Your <span className="text-gradient">Stories</span>,<br />
            Inspire the <span className="text-gradient">World</span>
          </h1>
          
          <p className="hero-description">
            Join thousands of writers and readers in our vibrant community.
            Create, discover, and engage with content that matters.
          </p>
          
          <div className="hero-actions">
            <Link to="/reg" className="btn-modern btn-primary hero-cta">
              Get Started Free
              <MoveRight size={18} />
            </Link>
            
            <button
              className="btn-modern btn-secondary"
              data-bs-toggle="modal"
              data-bs-target="#infoModal"
            >
              <Info size={18} />
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-header">
            <h2 className="section-title">Why Choose Our Platform?</h2>
            <p className="section-subtitle">
              Everything you need to create, share, and grow your audience
            </p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card card-modern">
              <div className="feature-icon">
                <BookOpen size={24} />
              </div>
              <h3>Rich Content Creation</h3>
              <p>Create beautiful blogs with our intuitive editor and AI assistance</p>
            </div>
            
            <div className="feature-card card-modern">
              <div className="feature-icon">
                <Users size={24} />
              </div>
              <h3>Vibrant Community</h3>
              <p>Connect with like-minded writers and engaged readers worldwide</p>
            </div>
            
            <div className="feature-card card-modern">
              <div className="feature-icon">
                <Zap size={24} />
              </div>
              <h3>AI-Powered Tools</h3>
              <p>Leverage AI for content generation, editing, and optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-background">
          <img src={land2} alt="CTA Background" className="cta-image" />
          <div className="cta-overlay"></div>
        </div>
        
        <div className="cta-content">
          <h2 className="cta-title">Ready to Start Your Journey?</h2>
          <p className="cta-description">
            Join our community today and discover the power of storytelling
          </p>
          
          <Link to="/reg" className="btn-modern btn-primary cta-button">
            Create Your Account
            <MoveRight size={18} />
          </Link>
        </div>
      </section>

      {/* Info Modal */}
      <div
        className="modal fade"
        id="infoModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="infoModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content modern-modal">
            <div className="modal-header">
              <h5 className="modal-title" id="infoModalLabel">
                <Info size={20} className="me-2" />
                Platform Information
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="info-content">
                <h6>🚀 Get Started in Minutes</h6>
                <p>Create your account and start publishing immediately</p>
                
                <h6>✨ AI-Powered Features</h6>
                <p>Use our AI assistant for content creation and optimization</p>
                
                <h6>🌟 Premium Features Available</h6>
                <p>Upgrade to unlock advanced analytics and customization</p>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn-modern btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <Link
                to="/reg"
                className="btn-modern btn-primary"
                data-bs-dismiss="modal"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
