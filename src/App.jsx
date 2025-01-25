import {
  BrowserRouter,
  Routes, 
  Route,
 
} from 'react-router-dom'
import './App.css'
import Header from './components/header/Header.jsx'

import Home from './pages/home/Home.jsx'
import About from './pages/about/About.jsx'
import Contact from './pages/contact-us/Contact.jsx'
import Footer from './pages/footer/Footer.jsx'


function App() {
 

  return (
    <BrowserRouter> 
      <Header />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
    
      )
}

export default App
