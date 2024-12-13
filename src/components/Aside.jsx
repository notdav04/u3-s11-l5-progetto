import { Navbar, Container, Nav, Button, Form } from "react-bootstrap";
import logo from "../assets/logo/logo.png";
const Aside = () => {
  return (
    <Navbar
      expand="md"
      className="fixed-left justify-content-between"
      id="sidebar"
    >
      <Container className="flex-column align-items-start">
        <Navbar.Brand href="index.html">
          <img src={logo} alt="Spotify Logo" width="131" height="40" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex flex-column">
            <Nav.Item>
              <Nav.Link className="d-flex align-items-center" href="#">
                <i className="bi bi-house-door-fill" />
                &nbsp; Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="my-2">
              <Nav.Link className="d-flex align-items-center" href="#">
                <i className="bi bi-book-fill" />
                &nbsp; Your Library
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Form className="mt-2">
                <Form.Group
                  className="mb-3 input-group"
                  controlId="formBasicEmail"
                >
                  <Form.Control type="text" placeholder="search" />
                  <Button className="bg-black btn-outline-secondary">Go</Button>
                </Form.Group>
              </Form>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <div className="nav-btn">
        <Button className="signup-btn">Sign Up</Button>
        <Button className="login-btn">Log In</Button>
        <div>
          <a href="#">Cookie Policy</a> | <a href="#">Privacy</a>
        </div>
      </div>
    </Navbar>
  );
};

export default Aside;
