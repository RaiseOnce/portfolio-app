import { HashRouter } from 'react-router-dom'

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Footer,
} from './components/index'

function App() {
  return (
    <HashRouter>
      <div className="relative z-0 bg-primary">
        <div className="h-[100vh]">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App
