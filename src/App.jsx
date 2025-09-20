import React, { useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import DualAudience from './components/DualAudience'
import LiveDemo from './components/LiveDemo'
import Pricing from './components/Pricing'
import Roadmap from './components/Roadmap'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <div className="App">
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      <Hero />
      <HowItWorks />
      <Features />
      <DualAudience />
      <LiveDemo />
      <Pricing />
      <Roadmap />
      <Footer />
    </div>
  )
}

export default App
