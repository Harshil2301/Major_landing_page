import React from 'react'
import { motion } from 'framer-motion'
import { 
  Check, 
  Star, 
  Zap, 
  Crown, 
  Shield, 
  Users,
  TrendingUp,
  Infinity
} from 'lucide-react'
import './Pricing.css'

const Pricing = () => {
  const pricingPlans = [
    {
      name: 'Basic',
      icon: Shield,
      price: '0.1',
      period: 'ETH/month',
      description: 'Perfect for startups and small applications',
      popular: false,
      features: [
        'Up to 3 target applications',
        '24/7 automated scanning',
        'Basic vulnerability types (10+)',
        'Monthly security reports',
        'Email notifications',
        'Community support',
        'IPFS proof storage',
        'Smart contract payouts'
      ],
      limits: {
        targets: '3 apps',
        scans: 'Daily',
        support: 'Community'
      }
    },
    {
      name: 'Premium',
      icon: Zap,
      price: '0.5',
      period: 'ETH/month',
      description: 'Ideal for growing businesses with multiple services',
      popular: true,
      features: [
        'Up to 15 target applications',
        'Real-time continuous scanning',
        'Advanced vulnerability detection (50+)',
        'Weekly detailed reports',
        'Real-time alerts (Slack, Discord)',
        'Priority support (24h response)',
        'Custom scanning schedules',
        'Advanced analytics dashboard',
        'API integration',
        'Compliance reports (SOC2, PCI)'
      ],
      limits: {
        targets: '15 apps',
        scans: 'Real-time',
        support: 'Priority'
      }
    },
    {
      name: 'Enterprise',
      icon: Crown,
      price: 'Custom',
      period: 'pricing',
      description: 'For large organizations with complex security needs',
      popular: false,
      features: [
        'Unlimited target applications',
        'Multi-region scanning',
        'Custom vulnerability patterns',
        'Real-time threat intelligence',
        'Dedicated security consultant',
        '24/7 phone & chat support',
        'Custom integrations',
        'White-label reporting',
        'SLA guarantees',
        'On-premise deployment options',
        'Custom smart contracts',
        'Advanced DAO governance rights'
      ],
      limits: {
        targets: 'Unlimited',
        scans: 'Multi-region',
        support: 'Dedicated'
      }
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  return (
    <section className="pricing section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </h2>
          <p className="section-subtitle">
            Pay only for the security coverage you need. All plans include smart contract automation.
          </p>
        </motion.div>

        <motion.div
          className="pricing-cards"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              {plan.popular && (
                <div className="popular-badge">
                  <Star size={16} />
                  Most Popular
                </div>
              )}

              <div className="card-header">
                <div className="plan-icon">
                  <plan.icon size={28} />
                </div>
                <div className="plan-info">
                  <h3 className="plan-name">{plan.name}</h3>
                  <p className="plan-description">{plan.description}</p>
                </div>
              </div>

              <div className="plan-pricing">
                <div className="price-display">
                  <span className="price-amount gradient-text">{plan.price}</span>
                  <span className="price-period">/{plan.period}</span>
                </div>
              </div>

              <div className="plan-limits">
                <div className="limit-item">
                  <Users size={16} />
                  <span>{plan.limits.targets}</span>
                </div>
                <div className="limit-item">
                  <TrendingUp size={16} />
                  <span>{plan.limits.scans}</span>
                </div>
                <div className="limit-item">
                  <Shield size={16} />
                  <span>{plan.limits.support}</span>
                </div>
              </div>

              <div className="plan-features">
                <ul className="features-list">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="feature-item">
                      <Check size={16} className="check-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`plan-cta ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}>
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </button>

              {plan.popular && (
                <div className="card-glow"></div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="pricing-info"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="info-grid">
            <div className="info-item">
              <div className="info-icon">
                <Infinity size={24} />
              </div>
              <div className="info-content">
                <h4>No Hidden Fees</h4>
                <p>What you see is what you pay. No setup fees, no surprise charges.</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <Shield size={24} />
              </div>
              <div className="info-content">
                <h4>30-Day Guarantee</h4>
                <p>Not satisfied? Get your money back within 30 days, no questions asked.</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <Zap size={24} />
              </div>
              <div className="info-content">
                <h4>Instant Activation</h4>
                <p>Start securing your applications immediately after payment confirmation.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          className="pricing-faq"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="faq-title">Frequently Asked Questions</h3>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>How are payouts calculated?</h4>
              <p>Bot operators receive 70% of the bounty amount, while 30% goes to platform maintenance and DAO treasury.</p>
            </div>
            <div className="faq-item">
              <h4>What cryptocurrencies are supported?</h4>
              <p>We currently support ETH, USDC, USDT, and DAI. More cryptocurrencies will be added based on community demand.</p>
            </div>
            <div className="faq-item">
              <h4>Can I upgrade or downgrade anytime?</h4>
              <p>Yes, you can change your plan at any time. Changes take effect at the next billing cycle.</p>
            </div>
            <div className="faq-item">
              <h4>Is there a free trial?</h4>
              <p>We offer a 7-day free trial for the Basic plan. No credit card required to start.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
