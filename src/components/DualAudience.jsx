import React from 'react'
import { motion } from 'framer-motion'
import { 
  Building, 
  Bot, 
  DollarSign, 
  Shield, 
  TrendingUp, 
  Cpu, 
  Clock, 
  Award,
  ArrowRight
} from 'lucide-react'
import './DualAudience.css'

const DualAudience = () => {
  const companyFeatures = [
    {
      icon: Shield,
      title: "Continuous Protection",
      description: "24/7 security monitoring without the overhead of maintaining an internal red team."
    },
    {
      icon: DollarSign,
      title: "Cost-Effective",
      description: "Pay only for verified vulnerabilities found, not hourly consultant rates."
    },
    {
      icon: TrendingUp,
      title: "Scalable Security",
      description: "Easily scale security testing across multiple applications and environments."
    },
    {
      icon: Award,
      title: "Compliance Ready",
      description: "Meet regulatory requirements with documented, immutable security testing records."
    }
  ]

  const operatorFeatures = [
    {
      icon: Cpu,
      title: "Automated Revenue",
      description: "Deploy bots once and earn passive income from successful vulnerability discoveries."
    },
    {
      icon: Clock,
      title: "Instant Payouts",
      description: "Get paid immediately when your bots find legitimate security issues."
    },
    {
      icon: TrendingUp,
      title: "Scalable Operations",
      description: "Run multiple bots across different targets to maximize earning potential."
    },
    {
      icon: Shield,
      title: "Reputation System",
      description: "Build credibility and unlock higher-paying bounties with successful findings."
    }
  ]

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section className="dual-audience section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Built for <span className="gradient-text">Everyone</span>
          </h2>
          <p className="section-subtitle">
            Whether you're securing your business or earning from security expertise
          </p>
        </motion.div>

        <div className="audience-cards">
          {/* For Companies Card */}
          <motion.div
            className="audience-card company-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <div className="card-header">
              <div className="card-icon">
                <Building size={32} />
              </div>
              <div className="card-title-section">
                <h3 className="card-title">For Companies</h3>
                <p className="card-subtitle">Secure your digital assets with automated penetration testing</p>
              </div>
            </div>

            <div className="card-content">
              <div className="features-list">
                {companyFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="feature-item"
                    variants={featureVariants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="feature-icon">
                      <feature.icon size={20} />
                    </div>
                    <div className="feature-content">
                      <h4 className="feature-title">{feature.title}</h4>
                      <p className="feature-description">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="card-stats">
                <div className="stat-item">
                  <span className="stat-value gradient-text">90%</span>
                  <span className="stat-label">Cost Reduction</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value gradient-text">24/7</span>
                  <span className="stat-label">Monitoring</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value gradient-text">100%</span>
                  <span className="stat-label">Verifiable</span>
                </div>
              </div>

              <button className="card-cta btn-primary">
                Start Securing
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>

          {/* For Bot Operators Card */}
          <motion.div
            className="audience-card operator-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <div className="card-header">
              <div className="card-icon">
                <Bot size={32} />
              </div>
              <div className="card-title-section">
                <h3 className="card-title">For Bot Operators</h3>
                <p className="card-subtitle">Monetize your security expertise with autonomous bots</p>
              </div>
            </div>

            <div className="card-content">
              <div className="features-list">
                {operatorFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="feature-item"
                    variants={featureVariants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="feature-icon">
                      <feature.icon size={20} />
                    </div>
                    <div className="feature-content">
                      <h4 className="feature-title">{feature.title}</h4>
                      <p className="feature-description">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="card-stats">
                <div className="stat-item">
                  <span className="stat-value gradient-text">$10k+</span>
                  <span className="stat-label">Monthly Avg</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value gradient-text">&lt;1s</span>
                  <span className="stat-label">Payout Time</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value gradient-text">0%</span>
                  <span className="stat-label">Platform Fee</span>
                </div>
              </div>

              <button className="card-cta btn-secondary">
                Deploy Bots
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Partnership Section */}
        <motion.div
          className="partnership-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="partnership-content">
            <h3 className="partnership-title">
              Join the <span className="gradient-text">Ecosystem</span>
            </h3>
            <p className="partnership-description">
              Be part of the first decentralized cybersecurity marketplace where companies 
              get continuous protection and security experts earn fair compensation.
            </p>
            <div className="partnership-cta">
              <button className="btn-primary">Get Early Access</button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DualAudience
