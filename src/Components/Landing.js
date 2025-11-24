import React from "react";
import land from "../Assets/Images/unsplash.jpg";
import land2 from "../Assets/Images/newunsplash.jpg";
import "../Assets/Styles/Landing.css";
import {
  Sparkles,
  Users,
  BookOpen,
  Zap,
  TrendingUp,
  Award,
  Star,
  ArrowRight,
  Play,
  CheckCircle,
  Globe,
  PenTool,
  Heart,
  MessageSquare
} from "lucide-react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="animated-bg">
            <div className="floating-shape shape-1"></div>
            <div className="floating-shape shape-2"></div>
            <div className="floating-shape shape-3"></div>
            <div className="floating-shape shape-4"></div>
          </div>
        </div>

        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles className="badge-icon" />
            <span>The Future of Creative Writing</span>
          </div>

          <h1 className="hero-title">
            Where <span className="gradient-text">Stories</span> Come to Life
          </h1>

          <p className="hero-subtitle">
            Join millions of writers, creators, and readers in the most vibrant
            blogging community. Share your voice, discover amazing content, and
            build connections that matter.
          </p>

          <div className="hero-stats">
            <div className="stat-item">
              <Users size={24} />
              <div>
                <span className="stat-number">2M+</span>
                <span className="stat-label">Active Writers</span>
              </div>
            </div>
            <div className="stat-item">
              <BookOpen size={24} />
              <div>
                <span className="stat-number">15M+</span>
                <span className="stat-label">Published Stories</span>
              </div>
            </div>
            <div className="stat-item">
              <Globe size={24} />
              <div>
                <span className="stat-number">120+</span>
                <span className="stat-label">Countries</span>
              </div>
            </div>
          </div>

          <div className="hero-actions">
            <Link to="/reg" className="cta-button primary">
              Start Writing Free
              <ArrowRight size={20} />
            </Link>
            <button className="cta-button secondary">
              <Play size={20} />
              Watch Demo
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="floating-cards">
            <div className="card-preview card-1">
              <div className="card-header">
                <div className="avatar"></div>
                <div className="card-info">
                  <h4>Amazing Journey</h4>
                  <span>by Sarah Chen</span>
                </div>
              </div>
              <div className="card-content">
                <p>Every story has a beginning, but the journey is what makes it unforgettable...</p>
              </div>
              <div className="card-footer">
                <div className="engagement">
                  <Heart size={16} />
                  <span>2.3K</span>
                  <MessageSquare size={16} />
                  <span>89</span>
                </div>
              </div>
            </div>

            <div className="card-preview card-2">
              <div className="card-header">
                <div className="avatar"></div>
                <div className="card-info">
                  <h4>Tech Revolution</h4>
                  <span>by Alex Rodriguez</span>
                </div>
              </div>
              <div className="card-content">
                <p>The digital age has transformed how we connect, create, and communicate...</p>
              </div>
              <div className="card-footer">
                <div className="engagement">
                  <Heart size={16} />
                  <span>1.8K</span>
                  <MessageSquare size={16} />
                  <span>67</span>
                </div>
              </div>
            </div>

            <div className="card-preview card-3">
              <div className="card-header">
                <div className="avatar"></div>
                <div className="card-info">
                  <h4>Nature's Wisdom</h4>
                  <span>by Maya Patel</span>
                </div>
              </div>
              <div className="card-content">
                <p>In the quiet moments with nature, we find the deepest truths about ourselves...</p>
              </div>
              <div className="card-footer">
                <div className="engagement">
                  <Heart size={16} />
                  <span>3.1K</span>
                  <MessageSquare size={16} />
                  <span>124</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-header">
            <h2 className="section-title">
              Everything You Need to <span className="gradient-text">Succeed</span>
            </h2>
            <p className="section-subtitle">
              Powerful tools and features designed to help you create, grow, and monetize your content
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <PenTool className="feature-icon" />
              </div>
              <h3>Smart Writing Tools</h3>
              <p>AI-powered editor with grammar checking, style suggestions, and content optimization to make your writing shine.</p>
              <ul className="feature-list">
                <li><CheckCircle size={16} />Real-time grammar correction</li>
                <li><CheckCircle size={16} />SEO optimization</li>
                <li><CheckCircle size={16} />Style enhancement</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Users className="feature-icon" />
              </div>
              <h3>Growing Community</h3>
              <p>Connect with writers, readers, and influencers. Build your network, collaborate on projects, and grow together.</p>
              <ul className="feature-list">
                <li><CheckCircle size={16} />Global networking</li>
                <li><CheckCircle size={16} />Collaboration tools</li>
                <li><CheckCircle size={16} />Community events</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <TrendingUp className="feature-icon" />
              </div>
              <h3>Analytics & Insights</h3>
              <p>Track your performance with detailed analytics. Understand your audience and optimize your content strategy.</p>
              <ul className="feature-list">
                <li><CheckCircle size={16} />Reader demographics</li>
                <li><CheckCircle size={16} />Engagement metrics</li>
                <li><CheckCircle size={16} />Growth tracking</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Award className="feature-icon" />
              </div>
              <h3>Monetization</h3>
              <p>Turn your passion into profit with multiple revenue streams including ads, sponsorships, and premium content.</p>
              <ul className="feature-list">
                <li><CheckCircle size={16} />Ad revenue sharing</li>
                <li><CheckCircle size={16} />Premium subscriptions</li>
                <li><CheckCircle size={16} />Sponsored content</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Zap className="feature-icon" />
              </div>
              <h3>AI Assistant</h3>
              <p>Get help with content creation, research, and optimization using our advanced AI writing assistant.</p>
              <ul className="feature-list">
                <li><CheckCircle size={16} />Content generation</li>
                <li><CheckCircle size={16} />Research assistance</li>
                <li><CheckCircle size={16} />Idea brainstorming</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Star className="feature-icon" />
              </div>
              <h3>Premium Support</h3>
              <p>24/7 customer support, priority features, and exclusive access to new tools and beta features.</p>
              <ul className="feature-list">
                <li><CheckCircle size={16} />Priority support</li>
                <li><CheckCircle size={16} />Early access</li>
                <li><CheckCircle size={16} />Advanced features</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="social-proof">
        <div className="container">
          <h2 className="section-title">Trusted by Writers Worldwide</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                "This platform transformed my writing career. The community is incredibly supportive and the tools are game-changing."
              </div>
              <div className="testimonial-author">
                <div className="author-avatar"></div>
                <div className="author-info">
                  <h4>Jessica Martinez</h4>
                  <span>Travel Blogger • 500K+ readers</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                "The AI features helped me overcome writer's block and improved my content quality significantly. Highly recommended!"
              </div>
              <div className="testimonial-author">
                <div className="author-avatar"></div>
                <div className="author-info">
                  <h4>Michael Chen</h4>
                  <span>Tech Writer • 200K+ readers</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                "Finally found a platform that understands writers. The monetization options and community support are outstanding."
              </div>
              <div className="testimonial-author">
                <div className="author-avatar"></div>
                <div className="author-info">
                  <h4>Sarah Johnson</h4>
                  <span>Lifestyle Blogger • 1M+ readers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="final-cta">
        <div className="cta-background">
          <div className="cta-overlay"></div>
        </div>
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Share Your Story?</h2>
            <p>Join our community of passionate writers and start creating content that resonates with readers worldwide.</p>
            <div className="cta-actions">
              <Link to="/reg" className="cta-button primary large">
                Start Your Free Account
                <ArrowRight size={20} />
              </Link>
              <Link to="/userlogin" className="cta-button secondary large">
                Sign In to Continue
              </Link>
            </div>
            <div className="cta-features">
              <span><CheckCircle size={16} />Free forever</span>
              <span><CheckCircle size={16} />No credit card required</span>
              <span><CheckCircle size={16} />Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
