import './index.css'
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
  return (
    <>
      {/* Custom graph-arrow cursor */}
      <CustomCursor />

      {/* Fixed graph-paper canvas behind everything */}
      <GraphCanvas />

      {/* Main page content (z-index: 2 to sit above canvas & texture) */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
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
