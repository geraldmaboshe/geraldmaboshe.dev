import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, NavLink, Row, Col } from 'reactstrap';
import Footer from '../footer/Footer';
import Projects from '../projects/Projects';
import Articles from '../articles/Articles';
import Stats from '../stats/Stats';
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import './index.scss';

class Header extends Component {
  render() {
    return (
      <Container>
        <Col style={{ marginTop: '150px' }}>
          <Row>
            <p className="name">
              Hey, I'm Gerald
              <span role="img" aria-label="Smiley emoji">
                😊
              </span>
            </p>
          </Row>
          <Row>
            <p>
              I'm a result-oriented Software Engineer passionate about
              Open-Source, Tech Writing and Community Building. <br />
              <br />
              To connect with me, follow me on the platforms below
            </p>
          </Row>
        </Col>
        <Row>
          <NavLink href="https://github.com/geraldmaboshe">
            <AiFillGithub size={40} color="#000000" />
          </NavLink>
          <NavLink href="https://www.linkedin.com/in/geraldmaboshe/">
            <AiFillLinkedin size={40} color="#0072b1 " />
          </NavLink>
          <NavLink href="https://twitter.com/geraldmaboshe">
            <AiOutlineTwitter size={40} color="#1DA1F2" />
          </NavLink>
          <NavLink href="maboshegerald1@gmail.com">
            <MdEmail size={40} color="#000000" />
          </NavLink>
        </Row>
        <Articles />
        <Projects />
        <Stats />
        <Footer />
      </Container>
    );
  }
}

export default Header;
