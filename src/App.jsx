import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
      <Header/> 
      <main> 
        <Routes>
          <Route path="/" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/resume" element={<Resume/>}/>
        </Routes>
        </main>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
