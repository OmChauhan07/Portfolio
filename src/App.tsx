import { useState } from 'react'
import './index.css'
import IntroScreen from './components/IntroScreen'
import GraphCanvas from './components/GraphCanvas'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import QuoteBand from './components/QuoteBand'
import Stats from './components/Stats'
import Cards from './components/Cards'
import ToolsStack from './components/ToolsStack'
import Footer from './components/Footer'

export default function App() {
  const [introDone, setIntroDone] = useState(false)

  return (
    <>
      {/* Custom graph-arrow cursor — always on top */}
      <CustomCursor />

      {/* Intro screen — mounts until user scrolls */}
      {!introDone && <IntroScreen onDone={() => setIntroDone(true)} />}

      {/* Fixed graph-paper canvas */}
      <GraphCanvas />

      {/* Main portfolio — always in DOM so canvas & scroll position are ready */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          opacity: introDone ? 1 : 0,
          transition: 'opacity 0.5s ease 0.15s',
        }}
      >
        <Navbar />
        <Hero />
        <QuoteBand />
        <Stats />
        <Cards />
        <ToolsStack />
        <Footer />
      </div>
    </>
  )
}
