import { Box, Container } from '@mui/material';
import Navbar from './components/navbar';
import Footer from './components/footer';
import About from './pages/about';
import Experience from './pages/experience';
import Skills from './pages/skills';
import Education from './pages/education';
import Projects from './pages/projects';
import Contact from './pages/contact';

function App() {
  return (
    <Box>
      <Navbar />

      <Box
        sx={{
          background: 'linear-gradient(100deg, hsl(232, 56.10%, 8.00%), rgb(47, 10, 114))',
          color: 'white',
          overflowX: 'hidden',
        }}
      >
        <Container maxWidth="lg">

          <Box id="about" sx={{ py: { xs: 6, md: 10 }, minHeight: '100vh' }}>
            <About />
          </Box>

          <Box id="experience" sx={{ py: { xs: 6, md: 10 }, minHeight: '80vh' }}>
            <Experience />
          </Box>

          <Box id="skills" sx={{ py: { xs: 6, md: 10 }, minHeight: '80vh' }}>
            <Skills />
          </Box>

          <Box id="education" sx={{ py: { xs: 6, md: 10 }, minHeight: '80vh' }}>
            <Education />
          </Box>

          <Box id="projects" sx={{ py: { xs: 6, md: 10 }, minHeight: { xs: 'auto', md: '160vh' } }}>
            <Projects />
          </Box>

          <Box id="contact" sx={{ py: { xs: 6, md: 10 }, minHeight: '60vh' }}>
            <Contact />
          </Box>

        </Container>

        <Footer />
      </Box>
    </Box>
  );
}

export default App;
