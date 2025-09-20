import React from 'react'
import { motion } from 'framer-motion'
import { 
  Clock, 
  Shield, 
  Zap, 
  Users, 
  Database, 
  Lock, 
  Globe, 
  TrendingUp 
} from 'lucide-react'
import './Features.css'

const Features = () => {
  const features = [
    {
      icon: Clock,
      title: "Continuous Scanning",
      description: "24/7 automated security testing with no downtime. Our bots never sleep, ensuring constant protection.",
      benefits: ["Real-time vulnerability detection", "Scheduled deep scans", "Multi-target monitoring"]
    },
    {
      icon: Database,
      title: "Immutable Proofs",
      description: "All findings stored on IPFS with cryptographic verification. Evidence that can't be disputed or deleted.",
      benefits: ["Blockchain-verified evidence", "IPFS distributed storage", "Tamper-proof records"]
    },
    {
      icon: Zap,
      title: "Instant Payouts",
      description: "Smart contracts automatically release cryptocurrency payments when vulnerabilities are verified.",
      benefits: ["No payment delays", "Automatic verification", "Multi-currency support"]
    },
    {
      icon: Users,
      title: "DAO-Ready Governance",
      description: "Community-driven decision making with transparent voting mechanisms for platform evolution.",
      benefits: ["Token-based voting", "Community proposals", "Transparent governance"]
    },
    {
      icon: Shield,
      title: "Multi-Vector Testing",
      description: "Comprehensive security testing covering SQLi, XSS, CSRF, port scanning, and more.",
      benefits: ["OWASP Top 10 coverage", "Custom vulnerability patterns", "Advanced threat detection"]
    },
    {
      icon: Lock,
      title: "Zero-Trust Architecture",
      description: "Built with security-first principles. Every interaction is verified and authenticated.",
      benefits: ["End-to-end encryption", "Multi-factor authentication", "Secure key management"]
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Distributed bot network providing worldwide coverage and reduced latency.",
      benefits: ["Global bot distribution", "Regional compliance", "Low-latency scanning"]
    },
    {
      icon: TrendingUp,
      title: "Advanced Analytics",
      description: "Detailed reporting and analytics to track security posture and improvement over time.",
      benefits: ["Vulnerability trends", "Risk assessment reports", "Compliance dashboards"]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const featureVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section className="features section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Platform <span className="gradient-text">Features</span>
          </h2>
          <p className="section-subtitle">
            Cutting-edge cybersecurity automation powered by blockchain technology
          </p>
        </motion.div>

        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              variants={featureVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <div className="feature-icon-wrapper">
                <div className="feature-icon">
                  <feature.icon size={28} />
                </div>
                <div className="feature-glow"></div>
              </div>

              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                
                <ul className="feature-benefits">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex}>{benefit}</li>
                  ))}
                </ul>
              </div>

              <div className="feature-hover-effect"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Core Benefits Section */}
        <motion.div
          className="core-benefits"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="benefits-content">
            <h3 className="benefits-title">
              Why Choose <span className="gradient-text">Autonomous Red Team</span>?
            </h3>
            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-stat gradient-text">99.9%</div>
                <div className="benefit-label">Uptime Guarantee</div>
              </div>
              <div className="benefit-item">
                <div className="benefit-stat gradient-text">&lt;1s</div>
                <div className="benefit-label">Payout Processing</div>
              </div>
              <div className="benefit-item">
                <div className="benefit-stat gradient-text">100+</div>
                <div className="benefit-label">Vulnerability Types</div>
              </div>
              <div className="benefit-item">
                <div className="benefit-stat gradient-text">24/7</div>
                <div className="benefit-label">Security Monitoring</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
