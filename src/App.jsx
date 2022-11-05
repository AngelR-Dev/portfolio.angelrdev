import './App.css'
import About from './components/About'
import Header from './components/Header'
import Home from './components/Home'
import Skills from './components/Skills'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Tech from './components/Tech'
import Projects from './components/Projects'
import Contact from './components/Contact'

AOS.init();

function App() {


  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Skills />
      <Tech />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
