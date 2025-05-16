import Navbar from './components/navbar'
import Footer from './components/footer'
import About from './pages/about';
import Experience from './pages/experience';
import Skills from './pages/skills';
import Education from './pages/education';
import Projects from './pages/projects';
import Contact from './pages/contact';
/////////////////////////////////////

function App() {
  return (
     <div>
      <Navbar />
      


      <div
   style={{
   backgroundImage: 'linear-gradient(100deg, hsl(232, 56.10%, 8.00%), rgb(47, 10, 114))',
      }}>

    <div id="about" style={{ height: '100vh' }}>
         <About />
    </div>

    <div id="experience" style={{ height: '80vh' }}>
          <Experience />
    </div>

    <div id="skills" style={{ height: '80vh' }}>
          <Skills />
    </div>

    <div id="education" style={{ height: '80vh' }}>
          <Education />
    </div>

    {/* <div id="projects" style={{ height: '100vh' }}>
          <Projects />
     </div> */}
    <div id="contact" style={{ height: '60vh' }}>
          <Contact />
     </div>

    <Footer/>
  </div>


    </div>
  );
}

export default App;
