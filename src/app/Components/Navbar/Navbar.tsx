"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from 'next/image';

function MyNavbar() {
  return (
    <Navbar
      bg="primary"
      collapseOnSelect
      expand="lg"
      sticky="top"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand href="/">
          <div style={{ display: 'flex', alignItems: 'center' }}>
          <Image src="/TitleSoccer.gif" alt="Moving Soccer Ball" width={50} height={50} style={{ marginRight: '10px' }} />
            <span>Flagrant Fowl Futbol Association</span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/learnmore">Learn More</Nav.Link>
            <Nav.Link href="/matchSchedule">Match Schedule</Nav.Link>
            <Nav.Link href="/organiserlogin">Organiser Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
