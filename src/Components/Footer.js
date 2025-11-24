import React from 'react';
import { Link } from 'react-router-dom';
import "../Assets/Styles/Footer.css";
import { Mail, Phone, MapPin, Twitter, Facebook, Instagram, Linkedin, Heart, ArrowUp } from 'lucide-react';
import img from "../Assets/Images/mainlogo.png";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="modern-footer">
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-container">
          {/* Brand Section */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src={img} alt="Blog Platform" className="footer-logo-img" />
            </Link>
            <p className="footer-description">
              Empowering writers and readers to share stories, insights, and knowledge. 
              Join our community of passionate content creators.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3 className="footer-title">Platform</h3>
            <ul className="footer-links">
              <li><Link to="/userHomepage">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/upload">Create Blog</Link></li>
              <li><Link to="/ai">AI Assistant</Link></li>
              <li><Link to="/proupgarde">Premium</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-column">
            <h3 className="footer-title">Resources</h3>
            <ul className="footer-links">
              <li><a href="#">Writing Guide</a></li>
              <li><a href="#">Blog Templates</a></li>
              <li><a href="#">SEO Tips</a></li>
              <li><a href="#">Community Guidelines</a></li>
              <li><a href="#">Help Center</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer-column">
            <h3 className="footer-title">Support</h3>
            <ul className="footer-links">
              <li><Link to="/contactus">Contact Us</Link></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Report Issue</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-column">
            <h3 className="footer-title">Get in Touch</h3>
            <div className="footer-contact">
              <div className="contact-item">
                <Mail size={16} />
                <span>hello@blogplatform.com</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © 2025 Blog Platform. Made with <Heart size={14} className="heart-icon" /> by passionate developers.
            </p>
            <button 
              className="scroll-to-top"
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;