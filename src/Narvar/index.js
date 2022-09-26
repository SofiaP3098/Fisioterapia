import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import '../Style/Style.css';
import Inicio from '../Inicio/inicio';
import Nosotros from '../Nosotros/nosotros';
import Servicios from '../Servicios/servicios';
import Testimonios from '../Testiomonios/testimonios';
import Contacto from '../Contacto/contacto';

function Header() {
    return (
        <Router>
            <Navbar bg="color" variant='dark' expand="lg">
                <Container>
                    <Navbar.Brand href="/"> <img src="https://i.postimg.cc/RqrTmnk8/logo-footer.png" height={60} alt="" /> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="me-auto justify-content-end">
                            <Nav.Link as={Link} to={"/"}>Inicio</Nav.Link>
                            <Nav.Link as={Link} to={"/nosotros"}>Nosotros</Nav.Link>
                            <NavDropdown title="Servicios" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to={"/servicios"}>Todos los servicios</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#">
                                    Separar Cita
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to={"/testimonios"}>Testimonios</Nav.Link>
                            <Nav.Link as={Link} to={"/contacto"}>Contacto</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div>
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/nosotros" element={<Nosotros />} />
                    <Route path="/servicios" element={<Servicios />} />
                    <Route path="/testimonios" element={<Testimonios />} />
                    <Route path="/contacto" element={<Contacto />} />
                </Routes>
            </div>
        </Router>
    );
    // comntario prueba commit 2
}

export default Header;