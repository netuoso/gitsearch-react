import React, { Component } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';

class Header extends Component {
	render() {
		return (
			<Navbar bg="light" expand="lg">
				<Container>
					<Navbar.Brand href="/">Git Search</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="/">Home</Nav.Link>
							<Nav.Link href="/about">About</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		)
	}
}

export default Header