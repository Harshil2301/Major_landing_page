import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Zap, Bot, Network } from 'lucide-react'
import ParticleField from './ParticleField'
import DataStream from './DataStream'
import NetworkPulse from './NetworkPulse'
import TerminalEffect from './TerminalEffect'
import GlitchText from './GlitchText'
import './Hero.css'

const Hero = () => {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const terminalCommands = [
    'nmap -sS -O target.domain.com',
    'sqlmap -u "http://target.com/page?id=1" --dbs',
    'nikto -h http://target.com',
    'dirb http://target.com /usr/share/wordlists/dirb/common.txt',
    'hydra -l admin -P passwords.txt target.com ssh',
    'VULNERABILITIES DETECTED: 7 HIGH, 12 MEDIUM',
    'BOUNTY PAYMENT INITIATED: 0.5 ETH'
  ]

  return (
    <section className="hero">
      <div className="grid-overlay"></div>
      <div className="floating-elements"></div>
      <ParticleField count={50} className="hero-particles" />
      <DataStream direction="vertical" density={20} className="background cyber-green right-side" />
      <DataStream direction="vertical" density={15} className="background cyber-blue right-side-alt" />
      <DataStream direction="horizontal" density={12} className="background cyber-green horizontal-flow" />
      <DataStream direction="diagonal" density={8} className="background cyber-blue diagonal-flow" />
      
      <motion.div 
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Content */}
        <div className="hero-content">
          <motion.h1 
            className="hero-title"
            variants={itemVariants}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              POWER UP
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              WITH
            </motion.span>
            <br />
            <motion.span 
              className="gradient-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              NEXT-GEN
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              CYBER DEFENSE
            </motion.span>
          </motion.h1>

          <motion.p 
            className="hero-subtitle"
            variants={itemVariants}
          >
            Revolutionary AI-powered autonomous security bots that continuously
            hunt for vulnerabilities while blockchain smart contracts ensure
            instant, trustless bounty payments. The future of cybersecurity is here.
          </motion.p>

          <motion.div 
            className="hero-cta"
            variants={itemVariants}
          >
            <motion.button 
              className="btn-primary"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 30px rgba(255, 255, 255, 0.3)" 
              }}
              whileTap={{ scale: 0.98 }}
            >
              Create a Bounty
            </motion.button>
            <motion.button 
              className="btn-secondary"
              whileHover={{ 
                scale: 1.05,
                borderColor: "rgba(255, 255, 255, 0.8)",
                boxShadow: "0 8px 25px rgba(160, 160, 160, 0.2)" 
              }}
              whileTap={{ scale: 0.98 }}
            >
              Run a Bot
            </motion.button>
          </motion.div>

          {/* Floating Icons Section */}
          <motion.div 
            className="hero-icons-section"
            variants={itemVariants}
          >
            <div className="floating-icons-grid">
              <motion.div 
                className="floating-icon"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                whileHover={{ scale: 1.2, rotate: 15 }}
              >
                <Shield className="icon-shield" />
              </motion.div>
              <motion.div 
                className="floating-icon"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.7 }}
                whileHover={{ scale: 1.2, rotate: -15 }}
              >
                <Bot className="icon-bot" />
              </motion.div>
              <motion.div 
                className="floating-icon"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.9 }}
                whileHover={{ scale: 1.2, rotate: 15 }}
              >
                <Zap className="icon-zap" />
              </motion.div>
              <motion.div 
                className="floating-icon"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 2.1 }}
                whileHover={{ scale: 1.2, rotate: -15 }}
              >
                <Network className="icon-network" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="hero-stats"
            variants={itemVariants}
          >
            <motion.div 
              className="stat"
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="stat-number gradient-text">24/7</span>
              <span className="stat-label">Continuous Scanning</span>
            </motion.div>
            <motion.div 
              className="stat"
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="stat-number gradient-text">100%</span>
              <span className="stat-label">Automated Payouts</span>
            </motion.div>
            <motion.div 
              className="stat"
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="stat-number gradient-text">∞</span>
              <span className="stat-label">Blockchain Verified</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Network Lines */}
        <div className="network-animation">
          <svg className="network-svg" viewBox="0 0 800 600">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
                <stop offset="50%" stopColor="rgba(255, 255, 255, 0.4)" />
                <stop offset="100%" stopColor="rgba(229, 229, 229, 0)" />
              </linearGradient>
            </defs>
            
            {/* Animated connection lines */}
            <motion.path
              d="M100,100 Q400,50 700,150"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, delay: 1, repeat: Infinity, repeatDelay: 2 }}
            />
            <motion.path
              d="M150,300 Q400,200 650,350"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, delay: 2, repeat: Infinity, repeatDelay: 2 }}
            />
            <motion.path
              d="M200,500 Q500,400 700,450"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, delay: 3, repeat: Infinity, repeatDelay: 2 }}
            />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
