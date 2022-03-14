import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Resume } from './components/Resume';
import { Footer } from './components/Footer';
import cbBuilds from './Images/logo.png';

function App() {
  return (
<Router basename={process.env.PUBLIC_URL}>
  <div className='App'>
    <Navbar bg="nav-item" sticky="top" expand="lg"  className='mx-5'>
      <Navbar.Brand>
        <Nav.Link href="/">
          <img className='header-logo' src={cbBuilds} alt='CB Builds Logo'/>
        </Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle className='m-3 border-0'/>
      <Navbar.Collapse  className='justify-content-end'>
        <Nav className='m-0'>
          <Nav.Link className='header-nav-item' as={Link} to="/get-to-know-me">Get To Know Me</Nav.Link>
          <Nav.Link className='header-nav-item' as={Link} to="/my-work">My Work</Nav.Link>
          <Nav.Link className='header-nav-item' as={Link} to="/reach-out">Reach Out</Nav.Link>
          <Nav.Link className='header-nav-item' as={Link} to="/skills-experience">Skills/Experience</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <div>
      <Routes>
        <Route path="/" element={<About />}/>
        <Route path="/get-to-know-me" element={<About />}/>
        <Route path="/my-work" element={<Portfolio />}/>
        <Route path="/reach-out" element={<Contact />}/>
        <Route path="/skills-experience" element={<Resume />}/>
      </Routes>
    </div>
    <Footer />
  </div>
</Router>    

  );
}

export default App;