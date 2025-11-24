import React, { useState } from "react";
import "../Assets/Styles/ProUpgrade.css";
import { Crown, Check, Star, Zap, Shield, Sparkles, ArrowRight, X } from "lucide-react";

function ProUpgrade() {
  const [selectedPlan, setSelectedPlan] = useState('yearly');

  const plans = [
    {
      id: 'weekly',
      name: 'Weekly',
      price: '$2.99',
      originalPrice: '$5.99',
      period: '/week',
      badge: '7-Day Trial',
      features: ['Unlimited Articles', 'Ad-Free Experience', 'Priority Support', '7-Day Free Trial'],
      popular: false
    },
    {
      id: 'monthly',
      name: 'Monthly',
      price: '$8.99',
      originalPrice: '$12.99',
      period: '/month',
      badge: 'Most Flexible',
      features: ['Unlimited Articles', 'Ad-Free Experience', 'Priority Support', 'Advanced Analytics'],
      popular: false
    },
    {
      id: 'yearly',
      name: 'Yearly',
      price: '$19.99',
      originalPrice: '$25.99',
      period: '/year',
      badge: 'Best Value',
      features: ['Unlimited Articles', 'Ad-Free Experience', 'Priority Support', '3 Months Free', 'Advanced Analytics', 'Custom Themes'],
      popular: true
    }
  ];

  const premiumFeatures = [
    { icon: <Zap />, title: 'Unlimited Publishing', desc: 'Create and publish unlimited blog posts' },
    { icon: <Shield />, title: 'Ad-Free Experience', desc: 'Enjoy reading without any advertisements' },
    { icon: <Star />, title: 'Priority Support', desc: '24/7 premium customer support' },
    { icon: <Sparkles />, title: 'Advanced Analytics', desc: 'Detailed insights about your content performance' }
  ];

  return (
    <div className="premium-wrapper">
      {/* Hero Section */}
      <section className="premium-hero">
        <div className="hero-content">
          <div className="hero-badge">
            <Crown size={20} />
            <span>Premium Experience</span>
          </div>
          
          <h1 className="hero-title">
            Unlock Your <span className="text-gradient">Creative Potential</span>
          </h1>
          
          <p className="hero-subtitle">
            Join thousands of creators who've upgraded to premium and transformed their blogging experience
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-showcase">
        <div className="container">
          <h2 className="section-title">Why Go Premium?</h2>
          <div className="features-grid">
            {premiumFeatures.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <div className="container">
          <div className="pricing-header">
            <h2 className="section-title">Choose Your Plan</h2>
            <p className="section-subtitle">Start your premium journey today with our flexible pricing options</p>
          </div>

          <div className="pricing-grid">
            {plans.map((plan) => (
              <div 
                key={plan.id}
                className={`pricing-card ${plan.popular ? 'popular' : ''} ${selectedPlan === plan.id ? 'selected' : ''}`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.popular && (
                  <div className="popular-badge">
                    <Star size={16} />
                    Most Popular
                  </div>
                )}
                
                <div className="plan-badge">{plan.badge}</div>
                
                <h3 className="plan-name">{plan.name}</h3>
                
                <div className="plan-pricing">
                  <div className="original-price">
                    <X size={16} />
                    {plan.originalPrice}
                  </div>
                  <div className="current-price">
                    <span className="price">{plan.price}</span>
                    <span className="period">{plan.period}</span>
                  </div>
                </div>

                <ul className="plan-features">
                  {plan.features.map((feature, index) => (
                    <li key={index}>
                      <Check size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`plan-button ${plan.popular ? 'primary' : 'secondary'}`}>
                  Get Started
                  <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="premium-cta">
        <div className="cta-content">
          <Crown className="cta-icon" />
          <h2>Ready to Transform Your Blogging?</h2>
          <p>Join our premium community and unlock unlimited possibilities</p>
          <button className="cta-button">
            Start Free Trial
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}

export default ProUpgrade;