import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function NavBarDashboard() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">MigaLabs</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">About us</Nav.Link>
                    <Nav.Link href="#pricing">FAQ</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}



export default NavBarDashboard;