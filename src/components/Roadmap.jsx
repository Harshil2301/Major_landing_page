import React from 'react'
import { motion } from 'framer-motion'
import { 
  CheckCircle, 
  Circle, 
  Clock, 
  Rocket, 
  Users, 
  Globe, 
  Cpu, 
  Shield,
  Target,
  Zap,
  Database,
  Bot
} from 'lucide-react'
import DataStream from './DataStream'
import NetworkPulse from './NetworkPulse'
import './Roadmap.css'

const Roadmap = () => {
  const roadmapPhases = [
    {
      phase: 'Phase 1',
      title: 'Foundation',
      period: 'Q1 2025',
      status: 'completed',
      icon: Rocket,
      description: 'Core platform development and initial security bot framework',
      milestones: [
        'Smart contract architecture design',
        'Basic vulnerability scanning bots',
        'IPFS integration for proof storage',
        'Ethereum mainnet deployment',
        'Alpha testing with select partners'
      ]
    },
    {
      phase: 'Phase 2',
      title: 'Platform Launch',
      period: 'Q2 2025',
      status: 'in-progress',
      icon: Target,
      description: 'Public platform launch with core features and initial bot marketplace',
      milestones: [
        'Public beta launch',
        'Bot operator onboarding system',
        'Company dashboard and bounty creation',
        'Real-time scanning infrastructure',
        'Initial DAO governance framework'
      ]
    },
    {
      phase: 'Phase 3',
      title: 'Scale & Expand',
      period: 'Q3 2025',
      status: 'upcoming',
      icon: Globe,
      description: 'Multi-chain support and advanced security features',
      milestones: [
        'Polygon and BSC integration',
        'Advanced AI-powered vulnerability detection',
        'Mobile app for monitoring',
        'Enterprise API and integrations',
        'Compliance reporting tools'
      ]
    },
    {
      phase: 'Phase 4',
      title: 'DAO Evolution',
      period: 'Q4 2025',
      status: 'upcoming',
      icon: Users,
      description: 'Full decentralization with community governance and token economics',
      milestones: [
        'Native token launch (REDTEAM)',
        'Full DAO governance implementation',
        'Staking and rewards system',
        'Community-driven bot development',
        'Global regulatory compliance'
      ]
    },
    {
      phase: 'Phase 5',
      title: 'AI & Automation',
      period: 'Q1-Q2 2026',
      status: 'planned',
      icon: Cpu,
      description: 'Next-generation AI-powered autonomous security ecosystem',
      milestones: [
        'ML-based threat prediction',
        'Autonomous bot evolution',
        'Cross-platform security orchestration',
        'Zero-knowledge proof integration',
        'Quantum-resistant security measures'
      ]
    }
  ]

  const daoFeatures = [
    {
      icon: Users,
      title: 'Community Governance',
      description: 'Token holders vote on platform upgrades, fee structures, and strategic decisions'
    },
    {
      icon: Database,
      title: 'Treasury Management',
      description: 'Decentralized treasury funding platform development and community rewards'
    },
    {
      icon: Shield,
      title: 'Security Standards',
      description: 'Community-driven security standards and bot certification processes'
    },
    {
      icon: Zap,
      title: 'Innovation Fund',
      description: 'Grants for developers building new security tools and bot improvements'
    }
  ]

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return CheckCircle
      case 'in-progress':
        return Clock
      default:
        return Circle
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return '#22c55e'
      case 'in-progress':
        return '#f59e0b'
      default:
        return '#64748b'
    }
  }

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  return (
    <section className="roadmap section">
      <div className="container">
        <DataStream direction="horizontal" density={5} className="sparse cyber-red" />
        <NetworkPulse nodeCount={8} className="background" />
        
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Platform <span className="gradient-text">Roadmap</span>
          </h2>
          <p className="section-subtitle">
            Our journey to building the world's first fully autonomous cybersecurity ecosystem
          </p>
        </motion.div>

        {/* Roadmap Timeline */}
        <motion.div
          className="roadmap-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {roadmapPhases.map((phase, index) => {
            const StatusIcon = getStatusIcon(phase.status)
            const PhaseIcon = phase.icon
            
            return (
              <motion.div
                key={phase.phase}
                className={`timeline-item ${phase.status}`}
                variants={itemVariants}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                <div className="timeline-marker">
                  <div className="marker-icon">
                    <StatusIcon 
                      size={20} 
                      style={{ color: getStatusColor(phase.status) }}
                    />
                  </div>
                  {index < roadmapPhases.length - 1 && (
                    <div className="timeline-line"></div>
                  )}
                </div>

                <div className="timeline-content">
                  <div className="phase-header">
                    <div className="phase-icon">
                      <PhaseIcon size={24} />
                    </div>
                    <div className="phase-info">
                      <div className="phase-meta">
                        <span className="phase-number">{phase.phase}</span>
                        <span className="phase-period">{phase.period}</span>
                      </div>
                      <h3 className="phase-title">{phase.title}</h3>
                      <p className="phase-description">{phase.description}</p>
                    </div>
                  </div>

                  <div className="phase-milestones">
                    <h4>Key Milestones</h4>
                    <ul className="milestones-list">
                      {phase.milestones.map((milestone, milestoneIndex) => (
                        <li key={milestoneIndex} className="milestone-item">
                          <CheckCircle size={16} className="milestone-check" />
                          <span>{milestone}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="roadmap-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="stats-grid">
            <div className="stat-card">
              <Bot className="stat-icon" />
              <div className="stat-value gradient-text">500+</div>
              <div className="stat-label">Security Bots Planned</div>
            </div>
            <div className="stat-card">
              <Globe className="stat-icon" />
              <div className="stat-value gradient-text">5+</div>
              <div className="stat-label">Blockchain Networks</div>
            </div>
            <div className="stat-card">
              <Shield className="stat-icon" />
              <div className="stat-value gradient-text">100+</div>
              <div className="stat-label">Vulnerability Types</div>
            </div>
            <div className="stat-card">
              <Users className="stat-icon" />
              <div className="stat-value gradient-text">10k+</div>
              <div className="stat-label">Community Members</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Roadmap
