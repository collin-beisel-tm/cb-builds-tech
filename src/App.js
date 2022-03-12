import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { About } from './components/About';
import { Resume } from './components/Resume';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';

function App() {
  return (
<Router>
  <div className='App'>
        <Navbar bg="color" sticky="top" expand="sm">
          <Navbar.Brand>
            <Nav.Link href="">
              <h1>CB Builds</h1>
              <h4>Est. 2021</h4>
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav>
              <Nav.Link as={Link} to="/get-to-know-me">Get To Know Me</Nav.Link>
              <Nav.Link as={Link} to="/my-work">My Work</Nav.Link>
              <Nav.Link as={Link} to="/reach-out">Reach Out</Nav.Link>
              <Nav.Link as={Link} to="/skills-experience">Skills/Experience</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div>
          <Routes>
            <Route path="/get-to-know-me" element={<About />}/>
            <Route path="/my-work" element={<Portfolio />}/>
            <Route path="/reach-out" element={<Contact />}/>
            <Route path="/skills-experience" element={<Resume />}/>
          </Routes>
        </div>
      </div>
</Router>    

  );
}

export default App;