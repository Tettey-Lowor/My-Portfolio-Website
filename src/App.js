import HeroSection from './components/Hero-section';

import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
  <>
  <Navbar/>
  <HeroSection/>
  <About/>
  <Skills/>
  <Projects/>
  <Footer/>
  
  </>
  );
}

export default App;
