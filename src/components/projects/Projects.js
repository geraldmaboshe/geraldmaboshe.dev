import React from 'react';
import { Row, Col } from 'reactstrap';
import './index.scss';

function Project() {
  return (
    <div className="projects-container">
      <p id="projects">Projects</p>
      <Row>
        <Col sm="12" md="6">
          <p className="project-title">Tilungisa Auto</p>
          <p className="project-description">
            An auto mechanic booking mobile application that allows motorists to
            book auto mechanics on demand
          </p>
          <a href="https://github.com/geraldmaboshe/TilungisaAuto/blob/master/README.md">
            View Project
          </a>
        </Col>
        <Col sm="12" md="6">
          <p className="project-title">Zibo</p>
          <p className="project-description">
            A real estate application that allows people to find apartemnts for
            rent or sell
          </p>
          <a href="https://zibo.herokuapp.com/">View Project</a>
        </Col>
      </Row>
    </div>
  );
}

export default Project;
