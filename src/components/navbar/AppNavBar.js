import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

function AppNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Navbar color="dark" dark expand="sm" className="mb-5" fixed="top">
      <Container>
        <NavbarBrand href="/">Gerald Maboshe</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#articles" onClick={toggle}>
                Articles
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#projects" onClick={toggle}>
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#stats" onClick={toggle}>
                Stats
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
export default AppNavBar;
