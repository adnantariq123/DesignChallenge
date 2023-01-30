
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function App() {
  return (
   <>
    <Container>
      <Row >
      
        
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Orange People</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Blog</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Community</NavDropdown.Item>

            </NavDropdown>
            <Nav.Link href="#Service">Service</Nav.Link>
            <Nav.Link href="#Service">Service</Nav.Link>
            <Nav.Link href="#Team">Team Members</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Col sm={2} className="CenterFlex"><Button variant="info">FIND YOUR JOB</Button></Col>
    </Navbar>

        
        
      </Row>
      <Row className="justify-content-md-center Splash">
        <Col><span className='Bared'><h1>We strengthen our clients' capacity to solve complex business problems. </h1></span></Col>
      </Row>

      <Row className='bkGrey'>
      <Col sm={6} className="CenterFlex"><h3 className='WhitePLan'>Our technology advisors and consultants are problem definers, solvers, simplifiers, impartial sounding boards, and sparring partners.</h3></Col>
      <Col sm={6}>
        <div className='whiteBg'>

        <Accordion flush> 
      <Accordion.Item eventKey="0">
        <Accordion.Header>Who we are</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>What we do</Accordion.Header>
        <Accordion.Body>
          Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Join us!</Accordion.Header>
        <Accordion.Body>
        Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. 
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>Micropersonalization</Accordion.Header>
        <Accordion.Body>
        Sunt in
          culpa qui officia deserunt mollit anim id est laborum. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
      </Col>
      
    </Row>

    <Row>
    <Col sm={6} className="WhitePLan">
      <h3 className='Feat'>120 Team Members</h3>
      <h3 className='Feat'>7000+ IT Placements</h3>
      <h3 className='Feat'>400 Thrilled Clients</h3>
    </Col>
    <Col sm={6} className="WhitePLan CenterFlex">
      <span className='dark'>We seek clients who share our values, including our deep commitment to the communities we serve.  OP's team of outstanding professionals is proud to support more than 15 Fortune 500|1000 clients across the United States.</span>
    </Col>


    </Row>
    </Container>
   
   </>
  );
}

export default App;
