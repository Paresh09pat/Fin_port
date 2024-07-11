import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Technology from './components/Technology/Technology'
import Contact from './components/Contact/Contact'
import Navbar from './components/Navbar/Navbar'
import { ProjectComp } from './components/Projects/ProjectCompData'

function App() {


  return (
    <>
      <ProjectComp>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </ProjectComp>
    </>
  )
}

export default App
