import React from 'react'
import { motion } from 'framer-motion'
import { 
  Github, 
  Twitter, 
  MessageSquare, 
  Mail, 
  Shield, 
  ExternalLink,
  Globe,
  FileText,
  Users,
  HelpCircle
} from 'lucide-react'
import './Footer.css'

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'How it Works', href: '#how-it-works' },
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Live Demo', href: '#demo' },
      { name: 'Roadmap', href: '#roadmap' }
    ],
    developers: [
      { name: 'Documentation', href: '#', external: true },
      { name: 'API Reference', href: '#', external: true },
      { name: 'Bot SDK', href: '#', external: true },
      { name: 'Smart Contracts', href: '#', external: true },
      { name: 'GitHub', href: '#', external: true }
    ],
    community: [
      { name: 'Discord Server', href: '#', external: true },
      { name: 'Twitter', href: '#', external: true },
      { name: 'Telegram', href: '#', external: true },
      { name: 'Blog', href: '#', external: true },
      { name: 'Newsletter', href: '#', external: true }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Security Policy', href: '#' },
      { name: 'Bug Bounty', href: '#' }
    ]
  }

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: MessageSquare, href: '#', label: 'Discord' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Mail, href: '#', label: 'Email' }
  ]

  const stats = [
    { value: '24/7', label: 'Security Monitoring' },
    { value: '100+', label: 'Vulnerability Types' },
    { value: '<1s', label: 'Payout Speed' },
    { value: '99.9%', label: 'Uptime SLA' }
  ]

  return (
    <footer className="footer">
      <div className="footer-bg"></div>
      
      <div className="container">
        {/* Footer Stats */}
        <motion.div
          className="footer-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="stat-value gradient-text">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Brand Section */}
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="brand-logo">
              <Shield size={32} />
              <span className="brand-name">RedTeam DAO</span>
            </div>
            <p className="brand-description">
              The first decentralized autonomous cyber red team platform. 
              Revolutionizing cybersecurity with blockchain-powered automation 
              and trustless bounty payments.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="social-link"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          <div className="footer-links">
            <motion.div
              className="links-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="links-title">
                <Shield size={16} />
                Product
              </h4>
              <ul className="links-list">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="links-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="links-title">
                <Globe size={16} />
                Developers
              </h4>
              <ul className="links-list">
                {footerLinks.developers.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {link.name}
                      {link.external && <ExternalLink size={12} />}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="links-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="links-title">
                <Users size={16} />
                Community
              </h4>
              <ul className="links-list">
                {footerLinks.community.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {link.name}
                      {link.external && <ExternalLink size={12} />}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="links-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="links-title">
                <FileText size={16} />
                Legal
              </h4>
              <ul className="links-list">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          className="newsletter-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="newsletter-content">
            <h3 className="newsletter-title">
              Stay Updated with <span className="gradient-text">RedTeam DAO</span>
            </h3>
            <p className="newsletter-description">
              Get the latest updates on platform development, security insights, 
              and DAO governance directly in your inbox.
            </p>
          </div>
          <div className="newsletter-form">
            <div className="input-group">
              <input
                type="email"
                placeholder="Enter your email address"
                className="newsletter-input"
              />
              <button className="newsletter-btn btn-primary">
                Subscribe
              </button>
            </div>
            <p className="newsletter-disclaimer">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2025 RedTeam DAO. All rights reserved.
            </p>
            <div className="footer-badges">
              <div className="badge">
                <Shield size={14} />
                <span>Security First</span>
              </div>
              <div className="badge">
                <Globe size={14} />
                <span>Decentralized</span>
              </div>
              <div className="badge">
                <HelpCircle size={14} />
                <span>Open Source</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
