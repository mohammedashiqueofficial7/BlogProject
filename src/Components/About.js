import React from "react";
import "../Assets/Styles/About.css";
import {
  Users,
  Target,
  Heart,
  Zap,
  Award,
  Globe,
  Star,
  ArrowRight,
  CheckCircle,
  Sparkles,
  BookOpen,
  PenTool,
  TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <Sparkles className="title-icon" />
              About Our Blog Platform
            </h1>
            <p className="hero-subtitle">
              Connecting writers, creators, and readers in a vibrant community of inspiration and innovation
            </p>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <Users size={32} />
              <span className="stat-number">10K+</span>
              <span className="stat-label">Active Writers</span>
            </div>
            <div className="stat-item">
              <BookOpen size={32} />
              <span className="stat-number">50K+</span>
              <span className="stat-label">Published Blogs</span>
            </div>
            <div className="stat-item">
              <Globe size={32} />
              <span className="stat-number">100+</span>
              <span className="stat-label">Countries</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-card">
              <div className="card-icon">
                <Target />
              </div>
              <h3>Our Mission</h3>
              <p>
                To create a global platform where every voice matters. We empower writers,
                bloggers, and content creators to share their stories, connect with audiences,
                and build meaningful communities around their passions.
              </p>
            </div>

            <div className="mission-card">
              <div className="card-icon">
                <Heart />
              </div>
              <h3>Our Vision</h3>
              <p>
                A world where creativity knows no boundaries. We envision a future where
                diverse voices from every corner of the globe can share their unique
                perspectives and inspire positive change through the power of storytelling.
              </p>
            </div>

            <div className="mission-card">
              <div className="card-icon">
                <Zap />
              </div>
              <h3>Our Values</h3>
              <p>
                Innovation, inclusivity, and authenticity drive everything we do.
                We believe in fostering genuine connections, celebrating diversity,
                and providing tools that amplify creative voices worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Our Platform?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <PenTool />
              </div>
              <h4>Easy Publishing</h4>
              <p>Intuitive tools that make blogging effortless. Focus on your content while we handle the rest.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Users />
              </div>
              <h4>Community Driven</h4>
              <p>Connect with like-minded creators, build your audience, and grow together in our supportive community.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <TrendingUp />
              </div>
              <h4>Growth Focused</h4>
              <p>Analytics and insights to help you understand your audience and optimize your content strategy.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Award />
              </div>
              <h4>Quality First</h4>
              <p>We maintain high standards to ensure your content reaches the right audience in a meaningful way.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Globe />
              </div>
              <h4>Global Reach</h4>
              <p>Share your stories with a worldwide audience and discover diverse perspectives from around the globe.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Star />
              </div>
              <h4>Premium Support</h4>
              <p>Dedicated support team ready to help you succeed with personalized guidance and assistance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2023, our platform began as a simple idea: to create a space where
                every story deserves to be heard. What started as a small community of passionate
                writers has grown into a global movement of creators, thinkers, and dreamers.
              </p>
              <p>
                Today, we continue to innovate and evolve, always putting our community first.
                Every feature we build, every partnership we form, and every story we amplify
                is driven by our commitment to fostering authentic connections and celebrating
                diverse voices.
              </p>
              <div className="story-highlights">
                <div className="highlight">
                  <CheckCircle size={20} />
                  <span>100% Free to Start</span>
                </div>
                <div className="highlight">
                  <CheckCircle size={20} />
                  <span>No Hidden Fees</span>
                </div>
                <div className="highlight">
                  <CheckCircle size={20} />
                  <span>24/7 Community Support</span>
                </div>
              </div>
            </div>
            <div className="story-visual">
              <div className="floating-elements">
                <div className="floating-card card-1">
                  <BookOpen />
                  <span>Creative Writing</span>
                </div>
                <div className="floating-card card-2">
                  <Users />
                  <span>Community</span>
                </div>
                <div className="floating-card card-3">
                  <Sparkles />
                  <span>Innovation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Journey?</h2>
            <p>Join thousands of writers who are already sharing their stories and building their audience.</p>
            <div className="cta-buttons">
              <Link to="/reg" className="cta-btn primary">
                Get Started Free
                <ArrowRight size={20} />
              </Link>
              <Link to="/contactus" className="cta-btn secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
