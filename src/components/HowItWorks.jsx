import React from 'react'
import { motion } from 'framer-motion'
import { UserPlus, Bot, CreditCard, ArrowRight } from 'lucide-react'
import './HowItWorks.css'

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Register",
      description: "Companies fund bounty smart contracts and register their targets for continuous security testing.",
      details: ["Set bounty amounts", "Define scope & targets", "Smart contract deployment"]
    },
    {
      icon: Bot,
      title: "Bots Scan",
      description: "Autonomous security bots continuously scan websites, APIs, and applications for vulnerabilities.",
      details: ["24/7 automated scanning", "Multiple vulnerability types", "Cryptographic proof generation"]
    },
    {
      icon: CreditCard,
      title: "Smart Contract Pays",
      description: "When vulnerabilities are found, smart contracts automatically verify proofs and release payments.",
      details: ["Instant verification", "Automatic payouts", "Immutable evidence on IPFS"]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3
      }
    }
  }

  const stepVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const arrowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: 0.5 }
    }
  }

  return (
    <section className="how-it-works section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Three simple steps to revolutionize cybersecurity bounty hunting
          </p>
        </motion.div>

        <motion.div
          className="steps-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <motion.div
                className="step-card"
                variants={stepVariants}
                whileHover={{ 
                  scale: 1.05, 
                  transition: { duration: 0.3 }
                }}
              >
                <div className="step-icon">
                  <step.icon size={32} />
                  <div className="step-number">{index + 1}</div>
                </div>
                
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                  
                  <ul className="step-details">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                </div>

                <div className="step-glow"></div>
              </motion.div>

              {index < steps.length - 1 && (
                <motion.div
                  className="step-arrow"
                  variants={arrowVariants}
                  whileInView={{ 
                    x: [0, 10, 0],
                    transition: { 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut" 
                    }
                  }}
                  viewport={{ once: true }}
                >
                  <ArrowRight size={24} />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </motion.div>

        {/* Animated Process Flow */}
        <motion.div
          className="process-flow"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flow-line">
            <motion.div
              className="flow-progress"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 3, delay: 1 }}
              viewport={{ once: true }}
            />
          </div>
          
          <div className="flow-nodes">
            {['Start', 'Scan', 'Verify', 'Pay'].map((node, index) => (
              <motion.div
                key={node}
                className="flow-node"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 1 + (index * 0.3),
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
              >
                <span>{node}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks
