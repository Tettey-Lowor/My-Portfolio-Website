import HeroSection from './components/Hero-section';

import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Projects from './components/Projects';
import Skills from './components/Skills';
import SocialLinks from './components/Social-Links';
import Contact from './components/contact';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
  <>
  
  <Navbar/>
  <HeroSection/>
  <About/>
  <Skills/>
  <Projects/>
  {/* <Contact/> */}
  <Footer/>
  
  <SocialLinks/>
  
  </>
  );
}

export default App;
