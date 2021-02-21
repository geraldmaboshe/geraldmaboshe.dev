import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, NavLink, Row, Col } from 'reactstrap';
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import './index.scss';

class Section extends Component {
  render() {
    return (
      <div className="section-container">
        <Container>
          <Col>
            <Row>
              <p className="name">
                Hey, I'm Gerald
                <span role="img" aria-label="Smiley emoji">
                  😊
                </span>
              </p>
            </Row>
            <Row>
              <p className="profile-description">
                I'm a result-oriented Software Engineer passionate about
                Open-Source, Tech Writing and Community Building. <br />
                <br />
                Let's connect on the platforms below. It would be nice to meet
                you.
              </p>
            </Row>
          </Col>
          <Row>
            <NavLink href="https://github.com/geraldmaboshe">
              <AiFillGithub size={40} color="#171515" />
            </NavLink>
            <NavLink href="https://www.linkedin.com/in/geraldmaboshe/">
              <AiFillLinkedin size={40} color="#0072b1 " />
            </NavLink>
            <NavLink href="https://twitter.com/geraldmaboshe">
              <AiOutlineTwitter size={40} color="#1DA1F2" />
            </NavLink>
            <NavLink>
              <a href="mailto:maboshegerald1@gmail.com">
                <MdEmail size={40} color="#171515" />
              </a>
            </NavLink>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Section;
